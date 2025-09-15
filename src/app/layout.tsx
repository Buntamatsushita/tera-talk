import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tera Talk - いつでも、どこでも、ほとけの教えを",
  description: "仏教の普遍的な思想や教えを現代のテクノロジーを通じて分かりやすく提供し、AI僧侶への相談機能も利用できるサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
