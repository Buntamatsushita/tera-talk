import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">仏</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tera Talk</h1>
        </div>

        {/* 404 Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            お探しのページは存在しないか、移動された可能性があります。
            <br />
            以下のリンクからお探しのコンテンツにアクセスできます。
          </p>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link
              href="/"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>ホームに戻る</span>
            </Link>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/learn"
                className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors text-center"
              >
                仏教思想を学ぶ
              </Link>
              <Link
                href="/chat"
                className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-4 py-3 rounded-xl font-semibold hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors text-center"
              >
                AI僧侶に相談
              </Link>
            </div>

            <Link
              href="/sects"
              className="w-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-3 rounded-xl font-semibold hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors text-center"
            >
              日本仏教宗派
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              お探しのコンテンツが見つからない場合は：
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Search className="w-4 h-4" />
              <span>ナビゲーションメニューから目的のページにアクセスしてください</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 Tera Talk. 仏教の教えを通じて、心の安らぎを。</p>
        </div>
      </div>
    </div>
  );
}
