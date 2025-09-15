"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Loader2 } from "lucide-react";

interface MonkDef {
  name: string;
  title: string;
  icon: string;
  color: string;
  prompt: string;
}

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ClientChatPage({
  monkKey,
  monk,
}: {
  monkKey: string;
  monk: MonkDef;
}) {
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
          monk: monkKey,
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

      setMessages((prev) => [...prev, aiMessage]);
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
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-base-bg)" }}>
      <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/chat"
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${monk.color}`}
            >
              <span className="text-white font-bold text-sm sm:text-lg font-serif">
                {monk.icon}
              </span>
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
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="card mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${monk.color} rounded-xl sm:rounded-2xl flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg sm:text-2xl font-serif">
                  {monk.icon}
                </span>
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-serif font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {monk.name}
                </h2>
                <p
                  className="text-sm sm:text-base font-sans opacity-70"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {monk.title}
                </p>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  {message.isUser ? (
                    <div className="chat-message-user max-w-xs sm:max-w-sm lg:max-w-md">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs mt-2 opacity-80">
                        {message.timestamp.toLocaleTimeString("ja-JP", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  ) : (
                    <div className="chat-message-ai max-w-xs sm:max-w-sm lg:max-w-md">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs mt-2 opacity-60">
                        {message.timestamp.toLocaleTimeString("ja-JP", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="chat-message-ai max-w-xs sm:max-w-sm lg:max-w-md">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">考え中...</span>
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
                  placeholder="お悩みや疑問をお聞かせください..."
                  className="form-input flex-1 resize-none"
                  rows={2}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
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
    </div>
  );
}


