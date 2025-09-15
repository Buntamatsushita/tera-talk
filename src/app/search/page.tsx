"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  MessageCircle,
  Users,
  ArrowRight,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FavoriteButton from "@/components/FavoriteButton";

interface SearchResult {
  type: "concept" | "sect" | "monk";
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const searchData: SearchResult[] = [
  // 仏教思想
  {
    type: "concept",
    title: "四苦八苦",
    description:
      "生・老・病・死の四苦と、愛別離苦・怨憎会苦・求不得苦・五蘊盛苦の四苦を合わせた八つの苦しみについて学びます。",
    url: "/learn/shiku-hakku",
    icon: "苦",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "concept",
    title: "諸行無常",
    description:
      "すべてのものは常に変化し続け、永遠に変わらないものはないという仏教の基本的な教えです。",
    url: "/learn/shogyo-mujo",
    icon: "無",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "concept",
    title: "諸法無我",
    description:
      "すべての現象には固定された実体がなく、相互に依存し合って存在しているという教えです。",
    url: "/learn/shoho-muga",
    icon: "我",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "concept",
    title: "涅槃寂静",
    description: "煩悩を滅した安らぎの境地、悟りの状態について学びます。",
    url: "/learn/nehan-jakujo",
    icon: "静",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "concept",
    title: "縁起の法",
    description:
      "すべての現象は原因と条件によって生じ、相互に関連し合っているという仏教の根本原理です。",
    url: "/learn/engi",
    icon: "縁",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "concept",
    title: "空（くう）の思想",
    description:
      "すべてのものは実体がなく、相互に依存し合って存在しているという大乗仏教の重要な思想です。",
    url: "/learn/kuu",
    icon: "空",
    color: "from-blue-500 to-blue-600",
  },
  // 宗派
  {
    type: "sect",
    title: "天台宗",
    description:
      "法華経を根本経典とし、すべての仏教を統合する総合的な宗派です。",
    url: "/sects/tendai",
    icon: "天",
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "sect",
    title: "真言宗",
    description:
      "密教の教えを基盤とし、真言（マントラ）と印を重視する宗派です。",
    url: "/sects/shingon",
    icon: "真",
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "sect",
    title: "浄土宗",
    description:
      "阿弥陀仏の本願力によって極楽浄土に往生することを説く宗派です。",
    url: "/sects/jodo",
    icon: "浄",
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "sect",
    title: "浄土真宗",
    description:
      "浄土宗から派生し、阿弥陀仏の絶対他力による救済を説く宗派です。",
    url: "/sects/jodo-shin",
    icon: "真",
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "sect",
    title: "臨済宗",
    description: "禅宗の一派で、公案（こうあん）による修行を重視する宗派です。",
    url: "/sects/rinzai",
    icon: "臨",
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "sect",
    title: "曹洞宗",
    description:
      "禅宗の一派で、只管打坐（ただひたすら坐る）を重視する宗派です。",
    url: "/sects/soto",
    icon: "曹",
    color: "from-purple-500 to-purple-600",
  },
  {
    type: "sect",
    title: "日蓮宗",
    description:
      "法華経を唯一の正法とし、題目（南無妙法蓮華経）を唱える宗派です。",
    url: "/sects/nichiren",
    icon: "日",
    color: "from-purple-500 to-purple-600",
  },
  // AI僧侶
  {
    type: "monk",
    title: "釈迦",
    description:
      "仏教の開祖として、普遍的かつ根本的な教えに基づいた回答をします。",
    url: "/chat/shaka",
    icon: "釈",
    color: "from-green-500 to-green-600",
  },
  {
    type: "monk",
    title: "空海",
    description:
      "真言宗の開祖。密教の視点から、現実世界での実践的な助言を与えます。",
    url: "/chat/kukai",
    icon: "空",
    color: "from-green-500 to-green-600",
  },
  {
    type: "monk",
    title: "道元",
    description:
      "曹洞宗の開祖。禅の思想に基づき、自己との向き合い方を諭します。",
    url: "/chat/dogen",
    icon: "道",
    color: "from-green-500 to-green-600",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // ローカルストレージから最近の検索履歴を読み込み
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);

    // 検索履歴を更新
    if (searchQuery.trim()) {
      const newRecentSearches = [
        searchQuery.trim(),
        ...recentSearches.filter((s) => s !== searchQuery.trim()),
      ].slice(0, 5);

      setRecentSearches(newRecentSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newRecentSearches));
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "concept":
        return <BookOpen className="w-4 h-4" />;
      case "sect":
        return <Users className="w-4 h-4" />;
      case "monk":
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Search className="w-4 h-4" />;
    }
  };

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

  return (
    <div className="min-h-screen">
      <Header currentPage="search" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">検索</h2>
            <p className="body-text-lg">仏教思想、宗派、AI僧侶を検索できます</p>
          </div>

          {/* Search Input */}
          <div className="relative mb-8">
            <form
              className="relative"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(query);
                setHasSearched(true);
              }}
            >
              {query === "" && (
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: "var(--color-border)" }}
                />
              )}
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setHasSearched(false);
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !((e.nativeEvent as unknown as { isComposing?: boolean }).isComposing)
                  ) {
                    e.preventDefault();
                    handleSearch(query);
                    setHasSearched(true);
                  }
                }}
                placeholder="　　仏教思想、宗派、僧侶名で検索（Enterで検索）"
                className={`form-input w-full ${
                  query === "" ? "pl-12" : "pl-4"
                } py-4 text-lg`}
                aria-label="サイト内検索"
                aria-describedby="search-help"
              />
              <button type="submit" className="sr-only">
                検索
              </button>
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                    setHasSearched(false);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70"
                >
                  <X
                    className="w-5 h-5"
                    style={{ color: "var(--color-text-primary)" }}
                  />
                </button>
              )}
            </form>
            <p
              id="search-help"
              className="body-text mt-2"
              style={{ opacity: 0.7, fontSize: "0.875rem" }}
            >
              Enterキーで検索を実行します
            </p>
          </div>

          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="heading-tertiary">最近の検索</h3>
                <button
                  onClick={clearRecentSearches}
                  className="btn-secondary-soft text-sm py-1 px-3"
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
                    className="btn-secondary-soft text-sm py-1 px-3 rounded-full"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {hasSearched && (
            <div className="mb-8">
              <h3 className="heading-tertiary mb-4">
                検索結果 ({results.length}件)
              </h3>
              {results.length === 0 ? (
                <div className="text-center py-12">
                  <Search
                    className="w-16 h-16 mx-auto mb-4"
                    style={{ color: "var(--color-border)" }}
                  />
                  <p className="body-text" style={{ opacity: 0.8 }}>
                    「{query}」に一致する結果が見つかりませんでした
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className="block">
                      <div className="card">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}
                            style={{ backgroundColor: "var(--color-accent)" }}
                          >
                            <span className="text-white font-bold text-lg">
                              {result.icon}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span
                                  className="text-sm body-text"
                                  style={{ opacity: 0.7 }}
                                >
                                  {getTypeLabel(result.type)}
                                </span>
                                <div style={{ color: "var(--color-border)" }}>
                                  {getTypeIcon(result.type)}
                                </div>
                              </div>
                              <FavoriteButton
                                id={`${result.type}:${result.url}`}
                                type={result.type}
                                title={result.title}
                                description={result.description}
                                url={result.url}
                                icon={result.icon}
                                color={result.color}
                              />
                            </div>
                            <Link href={result.url} className="block">
                              <h4 className="heading-tertiary mb-2">
                                {result.title}
                              </h4>
                              <p className="body-text">{result.description}</p>
                            </Link>
                          </div>
                          <ArrowRight
                            className="w-5 h-5"
                            style={{ color: "var(--color-border)" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Browse Categories */}
          {!query && (
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/learn" className="block">
                <div className="card text-center p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary mb-4">仏教思想</h3>
                  <p className="body-text mb-6">
                    四苦八苦、諸行無常など、仏教の基本的な教えを学びます
                  </p>
                  <div
                    className="flex items-center justify-center font-sans"
                    style={{ color: "var(--color-accent)" }}
                  >
                    学習を始める
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/chat" className="block">
                <div className="card text-center p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary mb-4">AI僧侶</h3>
                  <p className="body-text mb-6">
                    釈迦、空海、道元など、著名な僧侶に相談できます
                  </p>
                  <div
                    className="flex items-center justify-center font-sans"
                    style={{ color: "var(--color-accent)" }}
                  >
                    相談を始める
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/sects" className="block">
                <div className="card text-center p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-secondary mb-4">日本仏教宗派</h3>
                  <p className="body-text mb-6">
                    天台宗、真言宗など、日本の主要な仏教宗派について学びます
                  </p>
                  <div
                    className="flex items-center justify-center font-sans"
                    style={{ color: "var(--color-accent)" }}
                  >
                    宗派を学ぶ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
