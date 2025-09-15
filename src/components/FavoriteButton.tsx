"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface FavoriteItem {
  id: string;
  type: 'concept' | 'sect' | 'monk';
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  addedAt: string;
}

interface FavoriteButtonProps {
  id: string;
  type: 'concept' | 'sect' | 'monk';
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

export default function FavoriteButton({ id, type, title, description, url, icon, color }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // ローカルストレージからお気に入りを読み込み
    const saved = localStorage.getItem('favorites');
    if (saved) {
      const favorites: FavoriteItem[] = JSON.parse(saved);
      setIsFavorite(favorites.some(item => item.id === id));
    }
  }, [id]);

  const toggleFavorite = () => {
    const saved = localStorage.getItem('favorites');
    let favorites: FavoriteItem[] = saved ? JSON.parse(saved) : [];

    if (isFavorite) {
      // お気に入りから削除
      favorites = favorites.filter(item => item.id !== id);
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
        addedAt: new Date().toISOString()
      };
      favorites.unshift(newItem);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`p-2 rounded-full transition-all duration-300 ${
        isFavorite
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
      }`}
      title={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
    >
      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
    </button>
  );
}
