export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-lg">仏</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tera Talk</h1>
        </div>

        {/* Loading Animation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            読み込み中...
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            ほとけの教えを準備しています
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 Tera Talk. 仏教の教えを通じて、心の安らぎを。</p>
        </div>
      </div>
    </div>
  );
}
