"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, BookOpen, MessageCircle, Users, ArrowRight, X } from "lucide-react";

interface SearchResult {
  type: 'concept' | 'sect' | 'monk';
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const searchData: SearchResult[] = [
  // 仏教思想
  {
    type: 'concept',
    title: '四苦八苦',
    description: '生・老・病・死の四苦と、愛別離苦・怨憎会苦・求不得苦・五蘊盛苦の四苦を合わせた八つの苦しみについて学びます。',
    url: '/learn/shiku-hakku',
    icon: '苦',
    color: 'from-blue-500 to-blue-600'
  },
  {
    type: 'concept',
    title: '諸行無常',
    description: 'すべてのものは常に変化し続け、永遠に変わらないものはないという仏教の基本的な教えです。',
    url: '/learn/shogyo-mujo',
    icon: '無',
    color: 'from-blue-500 to-blue-600'
  },
  {
    type: 'concept',
    title: '諸法無我',
    description: 'すべての現象には固定された実体がなく、相互に依存し合って存在しているという教えです。',
    url: '/learn/shoho-muga',
    icon: '我',
    color: 'from-blue-500 to-blue-600'
  },
  {
    type: 'concept',
    title: '涅槃寂静',
    description: '煩悩を滅した安らぎの境地、悟りの状態について学びます。',
    url: '/learn/nehan-jakujo',
    icon: '静',
    color: 'from-blue-500 to-blue-600'
  },
  {
    type: 'concept',
    title: '縁起の法',
    description: 'すべての現象は原因と条件によって生じ、相互に関連し合っているという仏教の根本原理です。',
    url: '/learn/engi',
    icon: '縁',
    color: 'from-blue-500 to-blue-600'
  },
  {
    type: 'concept',
    title: '空（くう）の思想',
    description: 'すべてのものは実体がなく、相互に依存し合って存在しているという大乗仏教の重要な思想です。',
    url: '/learn/kuu',
    icon: '空',
    color: 'from-blue-500 to-blue-600'
  },
  // 宗派
  {
    type: 'sect',
    title: '天台宗',
    description: '法華経を根本経典とし、すべての仏教を統合する総合的な宗派です。',
    url: '/sects/tendai',
    icon: '天',
    color: 'from-purple-500 to-purple-600'
  },
  {
    type: 'sect',
    title: '真言宗',
    description: '密教の教えを基盤とし、真言（マントラ）と印を重視する宗派です。',
    url: '/sects/shingon',
    icon: '真',
    color: 'from-purple-500 to-purple-600'
  },
  {
    type: 'sect',
    title: '浄土宗',
    description: '阿弥陀仏の本願力によって極楽浄土に往生することを説く宗派です。',
    url: '/sects/jodo',
    icon: '浄',
    color: 'from-purple-500 to-purple-600'
  },
  {
    type: 'sect',
    title: '浄土真宗',
    description: '浄土宗から派生し、阿弥陀仏の絶対他力による救済を説く宗派です。',
    url: '/sects/jodo-shin',
    icon: '真',
    color: 'from-purple-500 to-purple-600'
  },
  {
    type: 'sect',
    title: '臨済宗',
    description: '禅宗の一派で、公案（こうあん）による修行を重視する宗派です。',
    url: '/sects/rinzai',
    icon: '臨',
    color: 'from-purple-500 to-purple-600'
  },
  {
    type: 'sect',
    title: '曹洞宗',
    description: '禅宗の一派で、只管打坐（ただひたすら坐る）を重視する宗派です。',
    url: '/sects/soto',
    icon: '曹',
    color: 'from-purple-500 to-purple-600'
  },
  {
    type: 'sect',
    title: '日蓮宗',
    description: '法華経を唯一の正法とし、題目（南無妙法蓮華経）を唱える宗派です。',
    url: '/sects/nichiren',
    icon: '日',
    color: 'from-purple-500 to-purple-600'
  },
  // AI僧侶
  {
    type: 'monk',
    title: '釈迦',
    description: '仏教の開祖として、普遍的かつ根本的な教えに基づいた回答をします。',
    url: '/chat/shaka',
    icon: '釈',
    color: 'from-green-500 to-green-600'
  },
  {
    type: 'monk',
    title: '空海',
    description: '真言宗の開祖。密教の視点から、現実世界での実践的な助言を与えます。',
    url: '/chat/kukai',
    icon: '空',
    color: 'from-green-500 to-green-600'
  },
  {
    type: 'monk',
    title: '道元',
    description: '曹洞宗の開祖。禅の思想に基づき、自己との向き合い方を諭します。',
    url: '/chat/dogen',
    icon: '道',
    color: 'from-green-500 to-green-600'
  }
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    // ローカルストレージから最近の検索履歴を読み込み
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);

    // 検索履歴を更新
    if (searchQuery.trim()) {
      const newRecentSearches = [
        searchQuery.trim(),
        ...recentSearches.filter(s => s !== searchQuery.trim())
      ].slice(0, 5);
      
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'concept': return <BookOpen className="w-4 h-4" />;
      case 'sect': return <Users className="w-4 h-4" />;
      case 'monk': return <MessageCircle className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            <Link href="/search" className="text-amber-600 font-semibold">
              検索
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              検索
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              仏教思想、宗派、AI僧侶を検索できます
            </p>
          </div>

          {/* Search Input */}
          <div className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                placeholder="仏教思想、宗派、僧侶名で検索..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-800 dark:text-white"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">最近の検索</h3>
                <button
                  onClick={clearRecentSearches}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  履歴をクリア
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(search);
                      handleSearch(search);
                    }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                検索結果 ({results.length}件)
              </h3>
              {results.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    「{query}」に一致する結果が見つかりませんでした
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <Link key={index} href={result.url} className="group block">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-lg">{result.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {getTypeLabel(result.type)}
                              </span>
                              <div className="text-gray-400">
                                {getTypeIcon(result.type)}
                              </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">
                              {result.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Browse Categories */}
          {!query && (
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/learn" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">仏教思想</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    四苦八苦、諸行無常など、仏教の基本的な教えを学びます
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    学習を始める
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/chat" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI僧侶</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    釈迦、空海、道元など、著名な僧侶に相談できます
                  </p>
                  <div className="flex items-center justify-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                    相談を始める
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/sects" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">日本仏教宗派</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    天台宗、真言宗など、日本の主要な仏教宗派について学びます
                  </p>
                  <div className="flex items-center justify-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    宗派を学ぶ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
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
