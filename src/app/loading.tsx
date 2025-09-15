import CharacterFigure from "@/components/CharacterFigure";

export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background:
          "linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))",
      }}
    >
      <div className="text-center relative" style={{ minHeight: "140px" }}>
        <div className="intro-card max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <CharacterFigure
              name="thinking"
              decorative
              className=""
              width={100}
              height={100}
            />
          </div>
          <div className="intro-pulse mb-4" aria-hidden="true">
            <span className="intro-dot"></span>
            <span className="intro-dot"></span>
            <span className="intro-dot"></span>
          </div>
          <h2 className="heading-tertiary mb-1">読み込み中...</h2>
          <p
            className="body-text"
            style={{ color: "var(--color-text-primary)" }}
          >
            ほとけの教えを準備しています
          </p>
        </div>
      </div>
    </div>
  );
}
