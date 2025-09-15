import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12" style={{ borderTop: '1px solid var(--color-border)' }} role="contentinfo">
      <div className="text-center">
        <div className="mb-6 sm:mb-8">
          <nav className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm font-sans" role="navigation" aria-label="フッターナビゲーション">
            <Link href="/privacy" className="hover:opacity-70 transition-opacity duration-300 py-1" style={{ color: 'var(--color-text-primary)' }} aria-label="プライバシーポリシーページへ移動">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity duration-300 py-1" style={{ color: 'var(--color-text-primary)' }} aria-label="利用規約ページへ移動">
              利用規約
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity duration-300 py-1" style={{ color: 'var(--color-text-primary)' }} aria-label="お問い合わせページへ移動">
              お問い合わせ
            </Link>
            <Link href="/sitemap" className="hover:opacity-70 transition-opacity duration-300 py-1" style={{ color: 'var(--color-text-primary)' }} aria-label="サイトマップページへ移動">
              サイトマップ
            </Link>
          </nav>
        </div>
        <p className="font-sans text-xs sm:text-sm px-4" style={{ color: 'var(--color-text-primary)' }}>
          &copy; 2025 Tera Talk. 仏教の教えを通じて、心の安らぎを。
        </p>
      </div>
    </footer>
  );
}
