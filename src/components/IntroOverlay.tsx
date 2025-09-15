"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroOverlay() {
  const [isHiding, setIsHiding] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [ripples, setRipples] = useState<
    Array<{ id: number; leftPercent: number; topPercent: number; delaySec: number; speed?: "fast" | "slow" }>
  >([]);

  useEffect(() => {
    // 1) 初回マウント時に一定時間後フェードアウト
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hideDelayMs = prefersReduced ? 1100 : 3200;
    const timer = setTimeout(() => setIsHiding(true), hideDelayMs);

    // 2) セーフティ: ページロード完了でも隠す（SPA遷移時の二重防止）
    const onLoad = () => setIsHiding(true);
    window.addEventListener("load", onLoad, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // 波紋のランダム生成（曼荼羅の外側のみ）
  useEffect(() => {
    const container = bgRef.current ?? overlayRef.current;
    if (!container) return;

    const { clientWidth: w, clientHeight: h } = container;
    if (w === 0 || h === 0) return;

    const minWH = Math.min(w, h);
    // 画面中心からの距離を vmin で計算し、曼荼羅外側のみ許容
    // mandala は 110vmin -> 半径 55vmin。大胆に外側のみ出したいので 40vmin を閾値に設定
    const exclusionRadiusVmin = 40; // これより外側で出現
    const maxRadiusVmin = 95; // 画面端すぎを抑止

    const convertPxToVmin = (px: number) => (px / (minWH / 100));

    const generated: Array<{ id: number; leftPercent: number; topPercent: number; delaySec: number; speed?: "fast" | "slow" }> = [];
    const count = 10;
    let attempts = 0;
    while (generated.length < count && attempts < 200) {
      attempts++;
      const leftPercent = 5 + Math.random() * 90; // 5% - 95%
      const topPercent = 5 + Math.random() * 90;

      const dxPx = ((leftPercent - 50) / 100) * w;
      const dyPx = ((topPercent - 50) / 100) * h;
      const distPx = Math.hypot(dxPx, dyPx);
      const distVmin = convertPxToVmin(distPx);

      if (distVmin <= exclusionRadiusVmin || distVmin >= maxRadiusVmin) continue;

      const delaySec = Math.random() * 3.2; // 0 - 3.2s のばらつき
      const speed = Math.random() < 0.33 ? "fast" : Math.random() > 0.66 ? "slow" : undefined;
      generated.push({ id: generated.length, leftPercent, topPercent, delaySec, speed });
    }

    setRipples(generated);
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;
    const el = overlayRef.current;
    const onTransitionEnd = () => {
      if (isHiding) setIsMounted(false);
    };
    el.addEventListener("transitionend", onTransitionEnd);
    return () => el.removeEventListener("transitionend", onTransitionEnd);
  }, [isHiding]);

  if (!isMounted) return null;

  return (
    <div
      ref={overlayRef}
      className={`intro-overlay${isHiding ? " hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="読み込み中"
    >
      {/* 背景レイヤー */}
      <div className="intro-bg" aria-hidden="true" ref={bgRef}>
        {/* 曼荼羅（シンプルな幾何学円） */}
        <div className="mandala">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="md-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(181,132,90,0.5)" />
                <stop offset="60%" stopColor="rgba(181,132,90,0.25)" />
                <stop offset="100%" stopColor="rgba(74,107,86,0.2)" />
              </radialGradient>
            </defs>
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${(360 / 12) * i} 50 50)`}>
                <circle
                  cx="50"
                  cy="20"
                  r="6"
                  fill="none"
                  stroke="url(#md-grad)"
                  strokeWidth="0.5"
                />
                <circle
                  cx="50"
                  cy="20"
                  r="3"
                  fill="none"
                  stroke="url(#md-grad)"
                  strokeWidth="0.4"
                />
                <path
                  d="M50 28 L50 42"
                  stroke="url(#md-grad)"
                  strokeWidth="0.4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="28"
                  fill="none"
                  stroke="url(#md-grad)"
                  strokeWidth="0.35"
                />
              </g>
            ))}
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#md-grad)"
              strokeWidth="0.4"
            />
          </svg>
        </div>
        {/* 光輪 */}
        <div className="halo" />
        {/* 水面の波紋（曼荼羅の外側・ランダム配置） */}
        <div className="ripples" aria-hidden="true">
          {ripples.map((r) => (
            <div
              key={r.id}
              className={`ripple${r.speed ? ` ${r.speed}` : ""}`}
              style={{ left: `${r.leftPercent}%`, top: `${r.topPercent}%`, animationDelay: `${r.delaySec}s` }}
            >
              <svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="ripple-ring" cx="0" cy="0" r="8" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="intro-pulse" aria-hidden="true">
          <span className="intro-dot"></span>
          <span className="intro-dot"></span>
          <span className="intro-dot"></span>
        </div>
      </div>
    </div>
  );
}
