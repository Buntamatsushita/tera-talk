"use client";

import Image from "next/image";

type CharacterName =
  | "welcome"
  | "reading"
  | "thinking"
  | "back-channeling"
  | "cheer"
  | "guide"
  | "bow"
  | "describe"
  | "inspiration"
  | "empathyt";

export default function CharacterFigure({
  name,
  alt,
  size = "md",
  className = "",
  decorative = false,
  width,
  height,
  sizesOverride,
  fitParentHeight,
}: {
  name: CharacterName;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  decorative?: boolean;
  width?: number;
  height?: number;
  sizesOverride?: string;
  fitParentHeight?: boolean;
}) {
  const src = `charactor/howamaru_${name}.png`;
  const dims = (() => {
    if (typeof width === "number" && typeof height === "number") {
      return { w: width, h: height };
    }
    if (size === "sm") return { w: 96, h: 96 };
    if (size === "lg") return { w: 320, h: 320 };
    return { w: 200, h: 200 };
  })();

  return (
    <div className={className} aria-hidden={decorative ? true : undefined}>
      <Image
        src={src}
        alt={decorative ? "" : alt ?? "ほうわ丸のイラスト"}
        width={dims.w}
        height={dims.h}
        sizes={
          sizesOverride ??
          "(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 320px"
        }
        priority={false}
        loading="lazy"
        style={{
          objectFit: "contain",
          border: "none",
          boxShadow: "none",
          height: fitParentHeight ? "100%" : undefined,
          width: fitParentHeight ? "auto" : undefined,
        }}
      />
    </div>
  );
}
