import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

const SITE_NAME = "Tera Talk";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || ""; // 可能なら環境変数で完全URLを設定
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""; // GitHub Pages用のベースパス

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: `${SITE_NAME} - いつでも、どこでも、ほとけの教えを`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "仏教の普遍的な思想や教えを現代のテクノロジーを通じて分かりやすく提供し、AI僧侶への相談機能も利用できるサイトです。",
  applicationName: SITE_NAME,
  alternates: {
    canonical: `${BASE_PATH || ""}/`,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - いつでも、どこでも、ほとけの教えを`,
    description:
      "仏教の普遍的な思想や教えを現代のテクノロジーを通じて分かりやすく提供し、AI僧侶への相談機能も利用できるサイトです。",
    url: `${BASE_PATH || ""}/`,
    images: [
      {
        url: `${BASE_PATH || ""}/icons/dogen.png`,
        width: 512,
        height: 512,
        alt: `${SITE_NAME} サムネイル`,
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - いつでも、どこでも、ほとけの教えを`,
    description:
      "仏教の普遍的な思想や教えを現代のテクノロジーを通じて分かりやすく提供し、AI僧侶への相談機能も利用できるサイトです。",
    images: [`${BASE_PATH || ""}/icons/dogen.png`],
  },
  icons: {
    icon: [
      { url: `${BASE_PATH || ""}/favicon.ico` },
    ],
  },
  keywords: [
    "仏教",
    "AI僧侶",
    "四苦八苦",
    "諸行無常",
    "縁起",
    "宗派",
    "禅",
  ],
  other: {
    "theme-color": "#0f172a",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
