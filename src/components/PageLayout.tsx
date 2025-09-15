import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  currentPage?: string;
  className?: string;
}

export default function PageLayout({
  children,
  currentPage,
  className = "",
}: PageLayoutProps) {
  return (
    <div
      className={`min-h-screen ${className}`}
      style={{ backgroundColor: "var(--color-base-bg)" }}
    >
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        メインコンテンツにスキップ
      </a>

      <Header currentPage={currentPage} />

      <main
        id="main-content"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-20"
      >
        {children}
      </main>
    </div>
  );
}
