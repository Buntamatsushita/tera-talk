"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface FavoriteItem {
  id: string;
  type: "concept" | "sect" | "monk";
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  addedAt: string;
}

interface FavoriteButtonProps {
  id: string;
  type: "concept" | "sect" | "monk";
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

export default function FavoriteButton({
  id,
  type,
  title,
  description,
  url,
  icon,
  color,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // ローカルストレージからお気に入りを読み込み
    const saved = localStorage.getItem("favorites");
    if (saved) {
      const favorites: FavoriteItem[] = JSON.parse(saved);
      setIsFavorite(favorites.some((item) => item.id === id));
    }
  }, [id]);

  const toggleFavorite = () => {
    const saved = localStorage.getItem("favorites");
    let favorites: FavoriteItem[] = saved ? JSON.parse(saved) : [];

    if (isFavorite) {
      // お気に入りから削除
      favorites = favorites.filter((item) => item.id !== id);
    } else {
      // お気に入りに追加
      const newItem: FavoriteItem = {
        id,
        type,
        title,
        description,
        url,
        icon,
        color,
        addedAt: new Date().toISOString(),
      };
      favorites.unshift(newItem);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-pressed={isFavorite}
      className="inline-flex items-center justify-center rounded-lg transition-colors"
      style={{
        padding: '0.5rem',
        border: isFavorite
          ? '2px solid var(--color-accent)'
          : isHovering
          ? '2px solid var(--color-accent)'
          : '2px solid var(--color-border)',
        backgroundColor: isFavorite
          ? (isHovering ? 'var(--color-accent-hover)' : 'var(--color-accent)')
          : (isHovering ? 'var(--color-sub-bg)' : 'transparent'),
        color: isFavorite
          ? '#ffffff'
          : (isHovering ? 'var(--color-accent)' : 'var(--color-text-primary)'),
        boxShadow: isHovering ? '0 4px 12px var(--color-shadow)' : '0 2px 8px var(--color-shadow)'
      }}
      title={isFavorite ? "お気に入りから削除" : "お気に入りに追加"}
      aria-label={isFavorite ? "お気に入りから削除" : "お気に入りに追加"}
    >
      <Heart className="w-5 h-5" style={{ fill: isFavorite ? 'currentColor' : 'none' }} />
    </button>
  );
}
