"use client";

import { useMemo, useState, useId, useEffect, useRef } from "react";
import Card from "@/components/Card";

type EraKey = "heian" | "kamakura";

type NodeId =
  | "tendai"
  | "shingon"
  | "jodo"
  | "jodo-shin"
  | "rinzai"
  | "soto"
  | "nichiren";

interface LineageNode {
  id: NodeId;
  label: string;
  sub: string;
  era: EraKey;
}

interface Edge {
  from: NodeId;
  to: NodeId;
}

const NODES: LineageNode[] = [
  { id: "tendai", label: "天台宗", sub: "最澄", era: "heian" },
  { id: "shingon", label: "真言宗", sub: "空海", era: "heian" },
  { id: "jodo", label: "浄土宗", sub: "法然", era: "kamakura" },
  { id: "jodo-shin", label: "浄土真宗", sub: "親鸞", era: "kamakura" },
  { id: "nichiren", label: "日蓮宗", sub: "日蓮", era: "kamakura" },
  { id: "rinzai", label: "臨済宗", sub: "栄西", era: "kamakura" },
  { id: "soto", label: "曹洞宗", sub: "道元", era: "kamakura" },
];

const EDGES: Edge[] = [
  { from: "tendai", to: "jodo" },
  { from: "jodo", to: "jodo-shin" },
  { from: "tendai", to: "nichiren" },
  { from: "rinzai", to: "soto" },
];

const ERA_META: Record<EraKey, { label: string }> = {
  heian: { label: "平安時代" },
  kamakura: { label: "鎌倉時代" },
};

export default function InteractiveLineage() {
  const [activeEra, setActiveEra] = useState<EraKey | "all">("all");
  const [focusedId, setFocusedId] = useState<NodeId | null>(null);
  const [selectedId, setSelectedId] = useState<NodeId | null>(null);
  const containerId = useId();
  const nodesRef = useRef<Record<NodeId, HTMLButtonElement | null>>({
    "tendai": null,
    "shingon": null,
    "jodo": null,
    "jodo-shin": null,
    "rinzai": null,
    "soto": null,
    "nichiren": null,
  });

  // URL hash sync
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && NODES.some(n => n.id === hash)) {
      setSelectedId(hash as NodeId);
      const node = NODES.find(n => n.id === hash)!;
      setActiveEra(node.era);
      setTimeout(() => nodesRef.current[hash as NodeId]?.focus(), 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (selectedId) {
      history.replaceState(null, "", `#${selectedId}`);
    } else {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, [selectedId]);

  const visibleNodes = useMemo(() => {
    return activeEra === "all" ? NODES : NODES.filter(n => n.era === activeEra);
  }, [activeEra]);

  const visibleEdges = useMemo(() => {
    const visibleIds = new Set(visibleNodes.map(n => n.id));
    return EDGES.filter(e => visibleIds.has(e.from) && visibleIds.has(e.to));
  }, [visibleNodes]);

  useEffect(() => {
    if (selectedId && activeEra !== "all") {
      const selectedNode = NODES.find(n => n.id === selectedId);
      if (selectedNode && selectedNode.era !== activeEra) {
        setSelectedId(null);
      }
    }
  }, [activeEra, selectedId]);

  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (!focusedId) return;
    const index = visibleNodes.findIndex(n => n.id === focusedId);
    if (index === -1) return;

    if (e.key === "ArrowRight") {
      const next = visibleNodes[Math.min(index + 1, visibleNodes.length - 1)];
      if (next) nodesRef.current[next.id]?.focus();
    }
    if (e.key === "ArrowLeft") {
      const prev = visibleNodes[Math.max(index - 1, 0)];
      if (prev) nodesRef.current[prev.id]?.focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedId(focusedId);
    }
  };

  const isDimmed = (id: NodeId) => {
    if (!focusedId && !selectedId) return false;
    const isRelated = EDGES.some(e => e.from === id || e.to === id);
    if (selectedId) {
      return !(id === selectedId || EDGES.some(e => (e.from === selectedId && e.to === id) || (e.to === selectedId && e.from === id)));
    }
    if (focusedId) {
      return !(id === focusedId || EDGES.some(e => (e.from === focusedId && e.to === id) || (e.to === focusedId && e.from === id)));
    }
    return !isRelated;
  };

  const reset = () => {
    setSelectedId(null);
    setFocusedId(null);
    setActiveEra("all");
  };

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="body-text">表示:</span>
        <button
          className="btn-secondary-soft"
          aria-pressed={activeEra === "all"}
          onClick={() => setActiveEra("all")}
        >
          全て
        </button>
        {(["heian", "kamakura"] as EraKey[]).map((era) => (
          <button
            key={era}
            className="btn-secondary-soft"
            aria-pressed={activeEra === era}
            onClick={() => setActiveEra(era)}
          >
            {ERA_META[era].label}
          </button>
        ))}
        <button className="btn-primary ml-auto" onClick={reset} aria-label="表示をリセット">
          リセット
        </button>
      </div>
      <p className="body-text text-sm mb-6">ヒント: ノードにフォーカスして Enter で詳細、左右キーで移動できます。</p>

      <div className="grid gap-10" onKeyDown={handleKeyNav} aria-labelledby={`${containerId}-label`}>
        <span id={`${containerId}-label`} className="sr-only">宗派の系譜図インタラクティブ表示</span>

        {/* Heian Row */}
        {(activeEra === "all" || activeEra === "heian") && (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-text-primary)' }}></div>
              <span className="font-sans font-semibold" style={{ color: 'var(--color-text-primary)' }}>{ERA_META.heian.label}</span>
            </div>
            <div className="grid grid-cols-12 items-center">
              {(["tendai", "shingon"] as NodeId[]).map((id) => {
                const node = NODES.find(n => n.id === id)!;
                const dimmed = isDimmed(id);
                return (
                  <div key={id} className="col-span-6 flex justify-center">
                    <button
                      ref={(el) => (nodesRef.current[id] = el)}
                      onFocus={() => setFocusedId(id)}
                      onMouseEnter={() => setFocusedId(id)}
                      onMouseLeave={() => setFocusedId(null)}
                      onClick={() => setSelectedId(id)}
                      className="btn-secondary-soft w-full max-w-xs"
                      aria-label={`${node.label} ${node.sub}`}
                      style={{ opacity: dimmed ? 0.5 : 1 }}
                    >
                      <div className="text-center">
                        <div className="rounded-xl px-4 py-3 mb-1" style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>{node.label}</div>
                        <span className="body-text text-sm">{node.sub}</span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Kamakura Row */}
        {(activeEra === "all" || activeEra === "kamakura") && (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-text-primary)' }}></div>
              <span className="font-sans font-semibold" style={{ color: 'var(--color-text-primary)' }}>{ERA_META.kamakura.label}</span>
            </div>

            <div className="space-y-6">
              {/* Pure Land group */}
              <div>
                <div className="body-text font-semibold mb-2">浄土系</div>
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5 flex justify-end">
                    {renderNodeButton("jodo", setFocusedId, setSelectedId, nodesRef, isDimmed("jodo"))}
                  </div>
                  <div className="col-span-2 flex justify-center">
                    {renderArrowSvg("arrow-jodo")}
                  </div>
                  <div className="col-span-5 flex justify-start">
                    {renderNodeButton("jodo-shin", setFocusedId, setSelectedId, nodesRef, isDimmed("jodo-shin"))}
                  </div>
                </div>
              </div>

              {/* Zen group */}
              <div>
                <div className="body-text font-semibold mb-2">禅系</div>
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-5 flex justify-end">
                    {renderNodeButton("rinzai", setFocusedId, setSelectedId, nodesRef, isDimmed("rinzai"))}
                  </div>
                  <div className="col-span-2 flex justify-center">
                    {renderArrowSvg("arrow-zen")}
                  </div>
                  <div className="col-span-5 flex justify-start">
                    {renderNodeButton("soto", setFocusedId, setSelectedId, nodesRef, isDimmed("soto"))}
                  </div>
                </div>
              </div>

              {/* Lotus group */}
              <div>
                <div className="body-text font-semibold mb-2">法華系</div>
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-12 flex justify-center">
                    {renderNodeButton("nichiren", setFocusedId, setSelectedId, nodesRef, isDimmed("nichiren"))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edges overlay (a11y text) */}
        <div className="sr-only" aria-live="polite">
          {visibleEdges.map((e) => {
            const from = NODES.find(n => n.id === e.from)!;
            const to = NODES.find(n => n.id === e.to)!;
            return <div key={`${e.from}-${e.to}`}>{from.label} から {to.label} へ影響</div>;
          })}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="mt-8">
        <Card>
          {!selectedId ? (
            <p className="body-text">宗派名をクリックすると、詳細と学びのポイントを表示します。</p>
          ) : (
            <SelectedDetail id={selectedId} />
          )}
        </Card>
      </div>
    </div>
  );
}

function renderNodeButton(
  id: NodeId,
  setFocusedId: (id: NodeId | null) => void,
  setSelectedId: (id: NodeId) => void,
  nodesRef: React.MutableRefObject<Record<NodeId, HTMLButtonElement | null>>,
  dimmed: boolean
) {
  const node = NODES.find(n => n.id === id)!;
  return (
    <button
      ref={(el) => (nodesRef.current[id] = el)}
      onFocus={() => setFocusedId(id)}
      onMouseEnter={() => setFocusedId(id)}
      onMouseLeave={() => setFocusedId(null)}
      onClick={() => setSelectedId(id)}
      className="btn-secondary-soft w-full max-w-xs"
      aria-label={`${node.label} ${node.sub}`}
      style={{ opacity: dimmed ? 0.5 : 1 }}
    >
      <div className="text-center">
        <div className="rounded-xl px-4 py-3 mb-1" style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>{node.label}</div>
        <span className="body-text text-sm">{node.sub}</span>
      </div>
    </button>
  );
}

function renderArrowSvg(id: string) {
  return (
    <svg width="90" height="40" aria-hidden>
      <defs>
        <marker id={`${id}-marker`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-text-primary)" />
        </marker>
      </defs>
      <line x1="4" y1="20" x2="86" y2="20" stroke="var(--color-text-primary)" strokeWidth="2" markerEnd={`url(#${id}-marker)`} />
    </svg>
  );
}

function SelectedDetail({ id }: { id: NodeId }) {
  const node = NODES.find(n => n.id === id)!;
  const related = EDGES.filter(e => e.from === id || e.to === id);
  return (
    <div className="space-y-4">
      <h4 className="heading-secondary">{node.label}</h4>
      <p className="body-text">開祖: {node.sub}</p>
      <div>
        <p className="body-text mb-2">関係する系譜:</p>
        <ul className="list-disc pl-6">
          {related.map((e) => (
            <li key={`${e.from}-${e.to}`} className="body-text">
              {(e.from === id ? "→ " : "← ")}
              {e.from === id ? NODES.find(n => n.id === e.to)!.label : NODES.find(n => n.id === e.from)!.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={`/sects/${id}`} className="btn-primary" aria-label={`${node.label} の詳細ページへ`}>
          詳細ページへ
        </a>
        <a href="#study-guide" className="btn-secondary-soft" aria-label="学習ガイドへ移動">
          学習ガイドを見る
        </a>
      </div>
    </div>
  );
}
