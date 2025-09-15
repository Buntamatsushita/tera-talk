"use client";

import { useState } from "react";

type TimelineItem = {
  label: string;
  detail: string;
};

const items: TimelineItem[] = [
  { label: "紀元前5世紀頃", detail: "釈迦の成道と教団成立（初期仏教の基礎形成）" },
  { label: "紀元前3世紀", detail: "アショーカ王の保護、布教と部派展開が加速" },
  { label: "1〜4世紀", detail: "大乗仏教の興起：般若・法華・華厳など" },
  { label: "6〜8世紀", detail: "密教（金剛乗）の体系化：曼荼羅・灌頂・三密" },
];

export default function InteractiveTimeline() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {items.map((it, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`px-3 py-2 rounded-md border ${active === idx ? 'font-semibold' : ''}`}
            style={{ borderColor: 'var(--color-border)', color: active === idx ? 'var(--color-accent)' : 'var(--color-text-primary)' }}
            aria-pressed={active === idx}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
        <p className="body-text">{items[active].detail}</p>
      </div>
    </div>
  );
}


