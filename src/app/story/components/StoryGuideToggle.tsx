"use client";

import { useEffect, useState } from "react";

interface StoryGuideToggleProps {
  storyId: string;
}

export default function StoryGuideToggle({ storyId }: StoryGuideToggleProps) {
  const storageKey = `story:${storyId}:guideDismissed`;
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setDismissed(saved === "1");
  }, [storageKey]);

  const onToggle = () => setOpen((v) => !v);
  const onDismiss = () => {
    localStorage.setItem(storageKey, "1");
    setDismissed(true);
    setOpen(false);
  };
  const onReset = () => {
    localStorage.removeItem(storageKey);
    setDismissed(false);
  };

  return (
    <div className="text-right">
      <button
        onClick={onToggle}
        className="btn-secondary-soft text-sm px-3 py-1"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="story-usage-guide"
      >
        使い方
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-usage-guide-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            aria-hidden="true"
          />
          <div
            id="story-usage-guide"
            className="relative w-full max-w-2xl card text-left animate-fade-in"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 id="story-usage-guide-title" className="heading-tertiary">
                このページの使い方
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="btn-secondary-soft text-sm px-3 py-1"
              >
                閉じる
              </button>
            </div>
            <ul className="body-text" style={{ lineHeight: 1.8 }}>
              <li>
                ・左右の矢印キー、または画面のスワイプで場面を移動します。
              </li>
              <li>・丸いドットを押すと、指定の場面へジャンプできます。</li>
              <li>
                ・「ここにしるし」で、あとで見返したい場面にしるしをつけます。
              </li>
              <li>
                ・「ひとことメモ」で、気づきを短く書き留められます（端末に保存）。
              </li>
              <li>
                ・「所作（1分）」のスライドでタイマーを開始して、静かな一分を過ごします。
              </li>
              <li>
                ・最後の「ふりかえり」で、しるしとメモをまとめて見直せます。
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
