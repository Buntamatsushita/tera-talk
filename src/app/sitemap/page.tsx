import Link from "next/link";
import { BookOpen, MessageCircle, Users, Search, Heart, Map } from "lucide-react";

const siteMapData = {
  main: [
    {
      title: "ホーム",
      url: "/",
      description: "サイトのトップページ。各コンテンツへの導線があります。",
      icon: "🏠"
    }
  ],
  learn: [
    {
      title: "仏教思想一覧",
      url: "/learn",
      description: "仏教の基本的な教えをテーマ別に学べるページです。",
      icon: "📚"
    },
    {
      title: "四苦八苦",
      url: "/learn/shiku-hakku",
      description: "生・老・病・死の四苦と、愛別離苦・怨憎会苦・求不得苦・五蘊盛苦の四苦を合わせた八つの苦しみについて学びます。",
      icon: "苦"
    },
    {
      title: "諸行無常",
      url: "/learn/shogyo-mujo",
      description: "すべてのものは常に変化し続け、永遠に変わらないものはないという仏教の基本的な教えです。",
      icon: "無"
    },
    {
      title: "諸法無我",
      url: "/learn/shoho-muga",
      description: "すべての現象には固定された実体がなく、相互に依存し合って存在しているという教えです。",
      icon: "我"
    },
    {
      title: "涅槃寂静",
      url: "/learn/nehan-jakujo",
      description: "煩悩を滅した安らぎの境地、悟りの状態について学びます。",
      icon: "静"
    },
    {
      title: "縁起の法",
      url: "/learn/engi",
      description: "すべての現象は原因と条件によって生じ、相互に関連し合っているという仏教の根本原理です。",
      icon: "縁"
    },
    {
      title: "空（くう）の思想",
      url: "/learn/kuu",
      description: "すべてのものは実体がなく、相互に依存し合って存在しているという大乗仏教の重要な思想です。",
      icon: "空"
    }
  ],
  chat: [
    {
      title: "AI僧侶選択",
      url: "/chat",
      description: "相談したい僧侶を選択するページです。",
      icon: "🤖"
    },
    {
      title: "釈迦との相談",
      url: "/chat/shaka",
      description: "仏教の開祖として、普遍的かつ根本的な教えに基づいた回答をします。",
      icon: "釈"
    },
    {
      title: "空海との相談",
      url: "/chat/kukai",
      description: "真言宗の開祖。密教の視点から、現実世界での実践的な助言を与えます。",
      icon: "空"
    },
    {
      title: "道元との相談",
      url: "/chat/dogen",
      description: "曹洞宗の開祖。禅の思想に基づき、自己との向き合い方を諭します。",
      icon: "道"
    }
  ],
  sects: [
    {
      title: "日本仏教宗派一覧",
      url: "/sects",
      description: "日本の主要な仏教宗派の成り立ち、開祖、思想の特徴を学べるページです。",
      icon: "🏛️"
    },
    {
      title: "天台宗",
      url: "/sects/tendai",
      description: "法華経を根本経典とし、すべての仏教を統合する総合的な宗派です。",
      icon: "天"
    },
    {
      title: "真言宗",
      url: "/sects/shingon",
      description: "密教の教えを基盤とし、真言（マントラ）と印を重視する宗派です。",
      icon: "真"
    },
    {
      title: "浄土宗",
      url: "/sects/jodo",
      description: "阿弥陀仏の本願力によって極楽浄土に往生することを説く宗派です。",
      icon: "浄"
    },
    {
      title: "浄土真宗",
      url: "/sects/jodo-shin",
      description: "浄土宗から派生し、阿弥陀仏の絶対他力による救済を説く宗派です。",
      icon: "真"
    },
    {
      title: "臨済宗",
      url: "/sects/rinzai",
      description: "禅宗の一派で、公案（こうあん）による修行を重視する宗派です。",
      icon: "臨"
    },
    {
      title: "曹洞宗",
      url: "/sects/soto",
      description: "禅宗の一派で、只管打坐（ただひたすら坐る）を重視する宗派です。",
      icon: "曹"
    },
    {
      title: "日蓮宗",
      url: "/sects/nichiren",
      description: "法華経を唯一の正法とし、題目（南無妙法蓮華経）を唱える宗派です。",
      icon: "日"
    }
  ],
  tools: [
    {
      title: "検索",
      url: "/search",
      description: "仏教思想、宗派、AI僧侶を検索できるページです。",
      icon: "🔍"
    },
    {
      title: "お気に入り",
      url: "/favorites",
      description: "保存したコンテンツをいつでも確認できるページです。",
      icon: "❤️"
    },
    {
      title: "サイトマップ",
      url: "/sitemap",
      description: "サイト内のすべてのページを一覧で確認できるページです。",
      icon: "🗺️"
    }
  ]
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
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
            <Link href="/favorites" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              お気に入り
            </Link>
            <Link href="/sitemap" className="text-amber-600 font-semibold">
              サイトマップ
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
              <Map className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              サイトマップ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              サイト内のすべてのページを一覧で確認できます
            </p>
          </div>

          {/* Site Map Sections */}
          <div className="space-y-12">
            {/* Main Pages */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">メインページ</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteMapData.main.map((item, index) => (
                  <Link key={index} href={item.url} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Learning Pages */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">仏教思想学習</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteMapData.learn.map((item, index) => (
                  <Link key={index} href={item.url} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Chat Pages */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI僧侶相談</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteMapData.chat.map((item, index) => (
                  <Link key={index} href={item.url} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Sect Pages */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">日本仏教宗派</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteMapData.sects.map((item, index) => (
                  <Link key={index} href={item.url} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Tool Pages */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mr-3">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ツール・その他</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteMapData.tools.map((item, index) => (
                  <Link key={index} href={item.url} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">サイト統計</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {siteMapData.learn.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">仏教思想ページ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {siteMapData.chat.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">AI僧侶ページ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {siteMapData.sects.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">宗派ページ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {Object.values(siteMapData).flat().length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">総ページ数</div>
              </div>
            </div>
          </div>
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
