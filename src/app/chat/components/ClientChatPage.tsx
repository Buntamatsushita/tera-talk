"use client";

import { useState, useRef, useEffect, useId, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { MonkDef } from "@/app/chat/monks";
import { ArrowLeft, Send, Loader2, HelpCircle } from "lucide-react";

// MonkDef は共通定義を参照

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ClientChatPage({
  monk,
  monkKey,
}: {
  monk: MonkDef;
  monkKey?: string;
}) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `こんにちは。私は${monk.name}です。${monk.title}として、あなたのお悩みをお聞かせください。どのようなことでも、心を込めてお答えいたします。`,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const backRef = useRef<HTMLAnchorElement>(null);
  const monkBadgeRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const [showHowTo, setShowHowTo] = useState(true);
  const howtoContentId = useId();
  const howtoHeadingId = useId();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Tutorial (Driver.js風シンプル実装)
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [popoverPos, setPopoverPos] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const tourSteps = useMemo(
    () =>
      [
        {
          title: "戻るボタン",
          text: "会話一覧に戻れます。迷ったらここから戻れます。",
          getEl: () => backRef.current,
        },
        {
          title: `${monk.name}について`,
          text: "選んだ僧の名前・肩書きです。色とアイコンで識別できます。",
          getEl: () => monkBadgeRef.current,
        },
        {
          title: "会話エリア",
          text: "ここにやり取りが表示されます。スクロールして過去の発言を確認できます。",
          getEl: () => messagesContainerRef.current,
        },
        {
          title: "入力欄",
          text: "悩みや質問を入力してください。Enterで送信、Shift+Enterで改行できます。",
          getEl: () => inputRef.current,
        },
        {
          title: "送信ボタン",
          text: "入力内容を送信します。",
          getEl: () => sendBtnRef.current,
        },
      ] as const,
    [monk.name]
  );

  useEffect(() => {
    if (!isTourOpen) return;
    const place = () => {
      const step = tourSteps[tourStep];
      const el = step?.getEl();
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const margin = 8;
      const preferredTop = rect.bottom + margin;
      const preferredLeft = Math.min(
        Math.max(rect.left, 12),
        Math.max(12, window.innerWidth - 340)
      );
      setPopoverPos({
        top: Math.min(preferredTop, window.innerHeight - 180),
        left: preferredLeft,
      });
      // 強調表示用クラス
      el.classList.add(
        "ring-2",
        "ring-indigo-500",
        "rounded-md",
        "relative",
        "z-20"
      );
      return () => {
        el.classList.remove(
          "ring-2",
          "ring-indigo-500",
          "rounded-md",
          "relative",
          "z-20"
        );
      };
    };
    const cleanup = place();
    const onResize = () => place();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [isTourOpen, tourStep, tourSteps]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          monk: monkKey ?? "",
          prompt: monk.prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => {
        const next = [...prev, aiMessage];
        // 直近のユーザ投稿数が3の倍数ならサマリーへ遷移
        const userCount = next.filter((m) => m.isUser).length;
        try {
          if (monkKey) {
            const key = "tt:chat:" + monkKey;
            const existing =
              typeof window !== "undefined"
                ? window.sessionStorage.getItem(key)
                : null;
            const data = existing
              ? JSON.parse(existing)
              : { user: [] as string[] };
            data.user.push(userMessage.content);
            if (typeof window !== "undefined") {
              window.sessionStorage.setItem(key, JSON.stringify(data));
            }
          }
        } catch {}
        if (monkKey && userCount > 0 && userCount % 3 === 0) {
          router.push(`/chat/${monkKey}/summary`);
        }
        return next;
      });
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "申し訳ございません。現在、お答えできません。しばらく時間をおいてから再度お試しください。",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-base-bg)" }}
    >
      <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/chat"
            ref={backRef}
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-70 transition-opacity duration-300"
          >
            <ArrowLeft
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: "var(--color-text-primary)" }}
            />
            <span
              className="font-sans text-sm sm:text-base"
              style={{ color: "var(--color-text-primary)" }}
            >
              戻る
            </span>
          </Link>
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            ref={monkBadgeRef}
            role="button"
            tabIndex={0}
            aria-label={`${monk.name}のプロフィールを開く`}
            onClick={() => setIsProfileOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsProfileOpen(true);
            }}
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-r ${monk.color} flex items-center justify-center`}>
              <Image src={monk.image} alt={`${monk.name}のアイコン`} width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1
                className="text-lg sm:text-xl font-serif font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {monk.name}
              </h1>
              <p
                className="text-xs sm:text-sm font-sans opacity-70"
                style={{ color: "var(--color-text-primary)" }}
              >
                {monk.title}
              </p>
            </div>
          </div>
          {/* Right controls */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              aria-label="チュートリアルを開始"
              onClick={() => {
                setTourStep(0);
                setIsTourOpen(true);
              }}
              className="px-2 py-2 rounded-md border hover:opacity-90"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="container mx-auto px-4 sm:px-6 pt-4">
            <div className="mb-2">
              <button
                type="button"
                aria-expanded={showHowTo}
                aria-controls={howtoContentId}
                onClick={() => setShowHowTo((v) => !v)}
                className="px-3 py-1.5 rounded-md border text-xs sm:text-sm hover:opacity-90"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                hidden={showHowTo}
              >
                {showHowTo ? "" : "遊び方を表示"}
              </button>
            </div>
            {showHowTo && (
              <div
                className="mb-4 card"
                role="region"
                aria-labelledby={howtoHeadingId}
                id={howtoContentId}
                tabIndex={-1}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setShowHowTo(false);
                }}
              >
                <div className="flex items-start justify-between">
                  <h2
                    id={howtoHeadingId}
                    className="text-base sm:text-lg font-serif font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    遊び方
                  </h2>
                  <button
                    type="button"
                    aria-label="遊び方を閉じる"
                    onClick={() => setShowHowTo(false)}
                    className="text-xs sm:text-sm hover:opacity-80"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    閉じる
                  </button>
                </div>
                <div
                  className="mt-2 space-y-2 text-sm sm:text-base font-sans"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <p>
                    1)
                    僧を選ぶと挨拶が届きます。悩みや質問を自由に送ってください。
                  </p>
                  <p>2) 返信は穏やかなリフレクション（内省のヒント）です。</p>
                  <p>
                    3) 3メッセージごとに、直近の要点まとめと{" "}
                    <span className="font-serif">{monk.name}</span>{" "}
                    の教えを受け取れます。
                  </p>
                  <p>
                    4)
                    同じテーマを深める/視点を変える/今日の実践を決める…など、自由に続けてください。
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "最近、仕事の不安が強いです。どう向き合えば良いですか？",
                    "人間関係のモヤモヤを整理したいです。",
                    "瞑想の始め方を教えてください。",
                    "今日の気づきを一緒に振り返ってほしいです。",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInputMessage(q);
                        inputRef.current?.focus();
                      }}
                      aria-label={`サンプル質問: ${q}`}
                      className="px-3 py-1.5 rounded-md border text-xs sm:text-sm hover:opacity-90"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="card overflow-hidden">
            <div
              ref={messagesContainerRef}
              className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.isUser ? (
                    <div className="chat-message-user max-w-xs sm:max-w-sm lg:max-w-md">
                      <p className="text-sm leading-relaxed">
                        {message.content}
                      </p>
                      <p className="text-xs mt-2 opacity-80">
                        {message.timestamp.toLocaleTimeString("ja-JP", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r ${monk.color}`}>
                        <Image src={monk.image} alt={`${monk.name}のアイコン`} width={32} height={32} className="w-full h-full object-cover" />
                      </div>
                      <div className="chat-message-ai max-w-xs sm:max-w-sm lg:max-w-md">
                        <p className="text-sm leading-relaxed">
                          {message.content}
                        </p>
                        <p className="text-xs mt-2 opacity-60">
                          {message.timestamp.toLocaleTimeString("ja-JP", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r ${monk.color}`}>
                      <Image src={monk.image} alt={`${monk.name}のアイコン`} width={32} height={32} className="w-full h-full object-cover" />
                    </div>
                    <div className="chat-message-ai max-w-xs sm:max-w-sm lg:max-w-md">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">考え中...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div
              className="border-t p-4 sm:p-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  ref={inputRef}
                  placeholder="お悩みや疑問をお聞かせください..."
                  className="form-input flex-1 resize-none"
                  rows={2}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  ref={sendBtnRef}
                  className="btn-primary flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">送信</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="text-center">
          <p
            className="font-sans text-sm"
            style={{ color: "var(--color-text-primary)" }}
          >
            &copy; 2024 Tera Talk. 仏教の教えを通じて、心の安らぎを。
          </p>
        </div>
      </footer>

      {/* Tutorial Overlay */}
      {isTourOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="チュートリアル"
          className="fixed inset-0 z-30"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsTourOpen(false)}
          />
          {popoverPos && (
            <div
              className="absolute card w-[320px] p-3 sm:p-4 z-40"
              style={{ top: popoverPos.top, left: popoverPos.left }}
            >
              <h3
                className="text-sm sm:text-base font-serif font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {tourSteps[tourStep].title}
              </h3>
              <p
                className="mt-2 text-xs sm:text-sm font-sans"
                style={{ color: "var(--color-text-primary)" }}
              >
                {tourSteps[tourStep].text}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-md border text-xs sm:text-sm"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  onClick={() => setIsTourOpen(false)}
                >
                  閉じる
                </button>
                <div className="space-x-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-md border text-xs sm:text-sm"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    onClick={() => setTourStep((s) => Math.max(0, s - 1))}
                    disabled={tourStep === 0}
                  >
                    戻る
                  </button>
                  <button
                    type="button"
                    className="btn-primary px-3 py-1.5 text-xs sm:text-sm"
                    onClick={() => {
                      if (tourStep < tourSteps.length - 1)
                        setTourStep((s) => s + 1);
                      else setIsTourOpen(false);
                    }}
                  >
                    {tourStep < tourSteps.length - 1 ? "次へ" : "完了"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Profile Modal */}
      {isProfileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="僧侶プロフィール"
          className="fixed inset-0 z-40"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsProfileOpen(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="card w-full max-w-md p-4 sm:p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gradient-to-r ${monk.color} flex items-center justify-center flex-shrink-0`}>
                  <Image src={monk.image} alt={`${monk.name}のアイコン`} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-serif font-semibold" style={{ color: "var(--color-text-primary)" }}>{monk.name}</h3>
                  <p className="text-sm sm:text-base opacity-80" style={{ color: "var(--color-text-primary)" }}>{monk.title}</p>
                </div>
              </div>
              {monk.bio && (
                <p className="mt-4 text-sm sm:text-base font-sans leading-relaxed" style={{ color: "var(--color-text-primary)" }}>
                  {monk.bio}
                </p>
              )}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-md border text-sm sm:text-base hover:opacity-90"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                  onClick={() => setIsProfileOpen(false)}
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
