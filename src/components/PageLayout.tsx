import { ReactNode } from "react";
import Header from "./Header";

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
      style={{
        background:
          "linear-gradient(180deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%)",
      }}
    >

      <Header currentPage={currentPage} />

      <main
        id="main-content"
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 content-rich"
      >
        {children}
      </main>
    </div>
  );
}
