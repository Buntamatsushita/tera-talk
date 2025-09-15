"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  MessageCircle,
  Users,
  Trash2,
  ExternalLink,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";

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

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    // ローカルストレージからお気に入りを読み込み
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  // 種別ラベル

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "concept":
        return "仏教思想";
      case "sect":
        return "宗派";
      case "monk":
        return "AI僧侶";
      default:
        return "その他";
    }
  };

  // 旧カラークラスは未使用

  return (
    <PageLayout currentPage="favorites">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            <Heart className="w-10 h-10" style={{ color: "#ffffff" }} />
          </div>
          <h2 className="heading-primary mb-4">お気に入り</h2>
          <p className="body-text-lg">
            保存したコンテンツをいつでも確認できます
          </p>
        </div>

        {/* Favorites Count and Actions */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h3 className="heading-tertiary">
              保存済み ({favorites.length}件)
            </h3>
            {favorites.length > 0 && (
              <button
                onClick={clearAllFavorites}
                className="btn-secondary-soft text-sm py-1 px-3"
              >
                すべて削除
              </button>
            )}
          </div>
        </div>

        {/* Favorites List */}
        {favorites.length === 0 ? (
          <Card className="text-center">
            <Heart
              className="w-16 h-16 mx-auto mb-6"
              style={{ color: "var(--color-border)" }}
            />
            <h3 className="heading-tertiary mb-2">お気に入りがありません</h3>
            <p className="body-text mb-6">
              気になるコンテンツを見つけたら、ハートで保存できます
            </p>
            <div
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              style={{ justifyContent: "center" }}
            >
              <Link href="/learn" className="block">
                <Card className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <BookOpen
                      className="w-6 h-6"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    仏教思想
                  </h4>
                  <p
                    className="body-text"
                    style={{
                      opacity: 0.8,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    学習コンテンツを探す
                  </p>
                </Card>
              </Link>
              <Link href="/chat" className="block">
                <Card className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <MessageCircle
                      className="w-6 h-6"
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    AI僧侶
                  </h4>
                  <p
                    className="body-text"
                    style={{
                      opacity: 0.8,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    相談相手を探す
                  </p>
                </Card>
              </Link>
              <Link href="/sects" className="block">
                <Card className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "#ffffff" }} />
                  </div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    宗派
                  </h4>
                  <p
                    className="body-text"
                    style={{
                      opacity: 0.8,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    宗派について学ぶ
                  </p>
                </Card>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {favorites.map((item) => (
              <Card key={item.id}>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <span className="text-white font-bold text-lg">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className="text-sm body-text"
                        style={{ opacity: 0.7 }}
                      >
                        {getTypeLabel(item.type)}
                      </span>
                      <span
                        className="text-xs body-text"
                        style={{ opacity: 0.6 }}
                      >
                        {new Date(item.addedAt).toLocaleDateString("ja-JP")}
                      </span>
                    </div>
                    <h4 className="heading-tertiary mb-2">{item.title}</h4>
                    <p className="body-text mb-4">{item.description}</p>
                    <div className="flex items-center space-x-4">
                      <Link
                        href={item.url}
                        className="font-sans"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <span className="inline-flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>ページを開く</span>
                        </span>
                      </Link>
                      <button
                        onClick={() => removeFavorite(item.id)}
                        className="font-sans"
                        style={{ color: "var(--color-warning)" }}
                      >
                        <span className="inline-flex items-center space-x-2">
                          <Trash2 className="w-4 h-4" />
                          <span>削除</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {favorites.length > 0 && (
          <Card className="mt-12">
            <h3 className="heading-tertiary mb-6">クイックアクション</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/learn" className="block">
                <Card>
                  <div className="flex items-center space-x-3">
                    <BookOpen
                      className="w-6 h-6"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        仏教思想を学ぶ
                      </h4>
                      <p className="body-text" style={{ opacity: 0.8 }}>
                        新しい概念を学習
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/chat" className="block">
                <Card>
                  <div className="flex items-center space-x-3">
                    <MessageCircle
                      className="w-6 h-6"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        AI僧侶に相談
                      </h4>
                      <p className="body-text" style={{ opacity: 0.8 }}>
                        悩みを相談する
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/search" className="block">
                <Card>
                  <div className="flex items-center space-x-3">
                    <Heart
                      className="w-6 h-6"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        検索
                      </h4>
                      <p className="body-text" style={{ opacity: 0.8 }}>
                        コンテンツを検索
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </PageLayout>
  );
}
