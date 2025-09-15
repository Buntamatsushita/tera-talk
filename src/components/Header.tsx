"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/india", label: "インド仏教", key: "india" },
    { href: "/learn", label: "仏教思想を学ぶ", key: "learn" },
    { href: "/chat", label: "AI僧侶に相談", key: "chat" },
    { href: "/sects", label: "日本仏教宗派", key: "sects" },
    { href: "/search", label: "検索", key: "search" },
    { href: "/favorites", label: "お気に入り", key: "favorites" },
  ];

  return (
    <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <nav className="flex items-center justify-between" role="navigation" aria-label="メインナビゲーション">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }} aria-hidden="true">
              <span className="text-white font-bold text-sm sm:text-lg font-serif">仏</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-semibold" style={{ color: 'var(--color-text-primary)' }}>Tera Talk</h1>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8" role="menubar">
          {navigationItems.map((item) => (
            <Link 
              key={item.key}
              href={item.href} 
              className={`font-sans text-sm lg:text-base hover:opacity-70 transition-opacity duration-300 ${
                currentPage === item.key ? 'font-semibold' : ''
              }`}
              style={{ 
                color: currentPage === item.key ? 'var(--color-accent)' : 'var(--color-text-primary)' 
              }}
              role="menuitem" 
              aria-label={`${item.label}ページへ移動`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden mt-4 py-4 border-t" 
          style={{ borderColor: 'var(--color-border)' }}
          role="menu"
          aria-label="モバイルナビゲーションメニュー"
        >
          <div className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <Link 
                key={item.key}
                href={item.href} 
                className={`font-sans text-base py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  currentPage === item.key ? 'font-semibold' : ''
                }`}
                style={{ 
                  color: currentPage === item.key ? 'var(--color-accent)' : 'var(--color-text-primary)' 
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
                aria-label={`${item.label}ページへ移動`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
