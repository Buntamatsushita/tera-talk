"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Timer } from "lucide-react";

export type KamishibaiSlide = {
  heading?: string;
  text: string;
};

interface KamishibaiReaderProps {
  storyId: string;
  title: string;
  intro: string;
  storyItems: string[];
  reflectionItems: string[];
  practiceText: string;
  wisdom: string;
}

export default function KamishibaiReader({
  storyId,
  title,
  intro,
  storyItems,
  reflectionItems,
  practiceText,
  wisdom,
}: KamishibaiReaderProps) {
  const slides = useMemo<KamishibaiSlide[]>(() => {
    const storySlides = storyItems.map((t, i) => ({
      heading: `場面 ${i + 1}`,
      text: t,
    }));
    const reflectionSlides = reflectionItems.map((t, i) => ({
      heading: `問い ${i + 1}`,
      text: t,
    }));
    return [
      { heading: "はじめに", text: intro },
      ...storySlides,
      ...reflectionSlides,
      { heading: "所作（1分）", text: practiceText },
      { heading: "ひとこと", text: wisdom },
      {
        heading: "ふりかえり",
        text: "しるしをつけた場面とメモを見直しましょう。",
      },
    ];
  }, [intro, storyItems, reflectionItems, practiceText, wisdom]);

  const storageKey = `story:${storyId}:kamishibai`;
  const [index, setIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [bookmarks, setBookmarks] = useState<Record<number, boolean>>({});
  const [note, setNote] = useState("");
  const progress = (index + 1) / slides.length;
  const isSummarySlide = index === slides.length - 1;

  const [direction, setDirection] = useState<"left" | "right">("left");
  const goNext = useCallback(() => {
    setDirection("left");
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  }, [slides.length]);
  const goPrev = useCallback(() => {
    setDirection("right");
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Restore/save state
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const obj = JSON.parse(saved) as {
          index?: number;
          bookmarks?: Record<number, boolean>;
          note?: string;
        };
        if (typeof obj.index === "number")
          setIndex(Math.max(0, Math.min(obj.index, slides.length - 1)));
        if (obj.bookmarks) setBookmarks(obj.bookmarks);
        if (typeof obj.note === "string") setNote(obj.note);
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  useEffect(() => {
    const payload = JSON.stringify({ index, bookmarks, note });
    localStorage.setItem(storageKey, payload);
  }, [index, bookmarks, note, storageKey]);

  // 1-min practice timer only on the practice slide
  const isPracticeSlide = slides[index]?.heading?.startsWith("所作");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPracticeSlide) {
      setIsTimerRunning(false);
      setSecondsLeft(60);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    if (!isTimerRunning) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPracticeSlide, isTimerRunning]);

  const toggleTimer = () => setIsTimerRunning((v) => !v);
  const toggleBookmark = () =>
    setBookmarks((m) => ({ ...m, [index]: !m[index] }));

  // Swipe gesture
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (dx < -threshold) goNext();
    if (dx > threshold) goPrev();
    touchStartX.current = null;
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="heading-primary mb-2">{title}</h2>
        <div
          className="w-full h-2 rounded-full overflow-hidden"
          aria-hidden="true"
          style={{ backgroundColor: "var(--color-border)" }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              backgroundColor: "var(--color-accent)",
              height: "100%",
              transition: "width 300ms ease",
            }}
          />
        </div>
        <p className="body-text mt-2" style={{ opacity: 0.7 }}>
          {index + 1} / {slides.length}
        </p>
      </div>

      <div
        className={`card ${
          direction === "left" ? "animate-slide-left" : "animate-slide-right"
        }`}
        role="group"
        aria-roledescription="スライド"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides[index] && (
          <div>
            {slides[index].heading && (
              <h3 className="heading-secondary mb-3">
                {slides[index].heading}
              </h3>
            )}
            {!isSummarySlide && (
              <p className="body-text-lg leading-relaxed">
                {slides[index].text}
              </p>
            )}

            {isPracticeSlide && (
              <div className="mt-6 flex items-center space-x-4">
                <span className="inline-flex items-center space-x-2">
                  <Timer
                    className="w-5 h-5"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span className="font-mono">
                    {String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:
                    {String(secondsLeft % 60).padStart(2, "0")}
                  </span>
                </span>
                <button
                  onClick={toggleTimer}
                  className="btn-secondary-soft inline-flex items-center space-x-2 px-3 py-1"
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>一時停止</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>開始</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Bookmark and note */}
            {!isSummarySlide && (
              <>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={toggleBookmark}
                    className="btn-secondary-soft text-sm px-3 py-1"
                  >
                    {bookmarks[index] ? "しるしを外す" : "ここにしるし"}
                  </button>
                </div>

                <div className="mt-3">
                  <label
                    className="block text-sm mb-1"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    ひとことメモ（自分だけに保存されます）
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full body-text p-3 rounded-lg"
                    style={{
                      backgroundColor: "var(--color-sub-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                    rows={3}
                    placeholder="ここに気づきをしまう"
                  />
                </div>
              </>
            )}

            {isSummarySlide && (
              <div className="space-y-6">
                <p className="body-text-lg">{slides[index].text}</p>

                <div>
                  <h4 className="heading-tertiary mb-2">しるしをつけた場面</h4>
                  <div className="space-y-3">
                    {Object.entries(bookmarks)
                      .filter(([, v]) => v)
                      .map(([k]) => parseInt(k, 10))
                      .sort((a, b) => a - b)
                      .map((i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: "var(--color-sub-bg)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold">
                              {slides[i]?.heading ?? `場面 ${i + 1}`}
                            </span>
                            <button
                              onClick={() => setIndex(i)}
                              className="btn-secondary-soft text-xs px-2 py-0.5"
                            >
                              この場面へ
                            </button>
                          </div>
                          <p className="body-text" style={{ opacity: 0.9 }}>
                            {slides[i]?.text}
                          </p>
                        </div>
                      ))}
                    {Object.values(bookmarks).every((v) => !v) && (
                      <p className="body-text" style={{ opacity: 0.7 }}>
                        しるしはまだありません。
                      </p>
                    )}
                  </div>
                  {Object.values(bookmarks).some((v) => v) && (
                    <button
                      onClick={() => setBookmarks({})}
                      className="mt-3 btn-secondary-soft text-sm px-3 py-1"
                    >
                      すべてのしるしを外す
                    </button>
                  )}
                </div>

                <div>
                  <h4 className="heading-tertiary mb-2">今日のひとことメモ</h4>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full body-text p-3 rounded-lg"
                    style={{
                      backgroundColor: "var(--color-sub-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                    rows={4}
                    placeholder="ここに気づきをしまう"
                  />
                  <div className="mt-2 flex items-center space-x-3">
                    <button
                      onClick={() => navigator.clipboard?.writeText(note)}
                      className="btn-secondary-soft text-sm px-3 py-1"
                    >
                      メモをコピー
                    </button>
                    <button
                      onClick={() => setNote("")}
                      className="btn-secondary-soft text-sm px-3 py-1"
                    >
                      クリア
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Dots navigation */}
      <div
        className="mt-4 flex items-center justify-center space-x-2"
        aria-label="スライドナビゲーション"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`スライド ${i + 1} に移動`}
            className="rounded-full"
            onClick={() => setIndex(i)}
            style={{
              width: 10,
              height: 10,
              backgroundColor:
                i === index ? "var(--color-accent)" : "var(--color-border)",
            }}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goPrev}
          className="btn-secondary-soft inline-flex items-center space-x-2"
          aria-label="前のスライド"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>もどる</span>
        </button>
        <button
          onClick={goNext}
          className="btn-primary inline-flex items-center space-x-2"
          aria-label="次のスライド"
        >
          <span>つぎへ</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
