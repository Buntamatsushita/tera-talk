"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, BookOpen, MessageCircle, Users, ArrowRight, Trash2, ExternalLink } from "lucide-react";

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

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    // ローカルストレージからお気に入りを読み込み
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter(item => item.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'concept': return <BookOpen className="w-4 h-4" />;
      case 'sect': return <Users className="w-4 h-4" />;
      case 'monk': return <MessageCircle className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'concept': return '仏教思想';
      case 'sect': return '宗派';
      case 'monk': return 'AI僧侶';
      default: return 'その他';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'concept': return 'text-blue-600';
      case 'sect': return 'text-purple-600';
      case 'monk': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">仏</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tera Talk</h1>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/learn" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              仏教思想を学ぶ
            </Link>
            <Link href="/chat" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              AI僧侶に相談
            </Link>
            <Link href="/sects" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              日本仏教宗派
            </Link>
            <Link href="/search" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              検索
            </Link>
            <Link href="/favorites" className="text-amber-600 font-semibold">
              お気に入り
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              お気に入り
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              保存したコンテンツをいつでも確認できます
            </p>
          </div>

          {/* Favorites Count and Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                保存済み ({favorites.length}件)
              </h3>
              {favorites.length > 0 && (
                <button
                  onClick={clearAllFavorites}
                  className="text-sm text-red-500 hover:text-red-700 transition-colors"
                >
                  すべて削除
                </button>
              )}
            </div>
          </div>

          {/* Favorites List */}
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                お気に入りがありません
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                気になるコンテンツを見つけたら、ハートマークをクリックして保存できます
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <Link href="/learn" className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">仏教思想</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">学習コンテンツを探す</p>
                  </div>
                </Link>

                <Link href="/chat" className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI僧侶</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">相談相手を探す</p>
                  </div>
                </Link>

                <Link href="/sects" className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">宗派</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">宗派について学ぶ</p>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-sm font-medium ${getTypeColor(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </span>
                        <div className="text-gray-400">
                          {getTypeIcon(item.type)}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(item.addedAt).toLocaleDateString('ja-JP')}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Link
                          href={item.url}
                          className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>ページを開く</span>
                        </Link>
                        <button
                          onClick={() => removeFavorite(item.id)}
                          className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>削除</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          {favorites.length > 0 && (
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">クイックアクション</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/learn" className="group">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">仏教思想を学ぶ</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">新しい概念を学習</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/chat" className="group">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">AI僧侶に相談</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">悩みを相談する</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/search" className="group">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-6 h-6 text-purple-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">検索</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">コンテンツを検索</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Tera Talk. 仏教の教えを通じて、心の安らぎを。</p>
        </div>
      </footer>
    </div>
  );
}
