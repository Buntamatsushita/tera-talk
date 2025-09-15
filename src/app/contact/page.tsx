"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 実際の実装では、ここでAPIエンドポイントに送信
      // 現在はローカルストレージに保存（デモ用）
      const contactData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      };

      const existingContacts = JSON.parse(
        localStorage.getItem("contacts") || "[]"
      );
      existingContacts.push(contactData);
      localStorage.setItem("contacts", JSON.stringify(existingContacts));

      // 成功をシミュレート
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">仏</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Tera Talk
            </h1>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/learn"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
            >
              仏教思想を学ぶ
            </Link>
            <Link
              href="/chat"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
            >
              AI僧侶に相談
            </Link>
            <Link
              href="/sects"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
            >
              日本仏教宗派
            </Link>
            <Link
              href="/search"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
            >
              検索
            </Link>
            <Link
              href="/favorites"
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors"
            >
              お気に入り
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>ホームに戻る</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              ご質問やご要望がございましたら、お気軽にお問い合わせください
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                メッセージを送信
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 dark:text-green-200 font-semibold">
                      お問い合わせを送信しました
                    </span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 mt-2">
                    ご連絡いただき、ありがとうございます。内容を確認の上、回答いたします。
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 dark:text-red-200 font-semibold">
                      送信に失敗しました
                    </span>
                  </div>
                  <p className="text-red-700 dark:text-red-300 mt-2">
                    申し訳ございません。しばらく時間をおいてから再度お試しください。
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-3 font-sans"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    お名前{" "}
                    <span style={{ color: "var(--color-warning)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="お名前を入力してください"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-3 font-sans"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    メールアドレス{" "}
                    <span style={{ color: "var(--color-warning)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="メールアドレスを入力してください"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold mb-3 font-sans"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    お問い合わせ種別
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="general">一般的なお問い合わせ</option>
                    <option value="technical">技術的な問題</option>
                    <option value="content">コンテンツに関する質問</option>
                    <option value="ai">AI機能について</option>
                    <option value="privacy">プライバシーについて</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-3 font-sans"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    件名{" "}
                    <span style={{ color: "var(--color-warning)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="件名を入力してください"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-3 font-sans"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    メッセージ{" "}
                    <span style={{ color: "var(--color-warning)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-input resize-none"
                    placeholder="お問い合わせ内容を詳しく入力してください"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>送信する</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  お問い合わせについて
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      回答時間
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      お問い合わせいただいた内容について、通常3営業日以内に回答いたします。
                      お急ぎの場合は、件名に「緊急」と記載してください。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      よくある質問
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      技術的な問題や一般的なご質問については、
                      サイト内の情報やFAQをご確認いただくことで解決できる場合があります。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      プライバシー
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      お問い合わせいただいた内容は、回答の目的のみに使用し、
                      第三者に提供することはありません。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  関連リンク
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/privacy"
                    className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">
                      プライバシーポリシー
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      個人情報の取り扱いについて
                    </p>
                  </Link>
                  <Link
                    href="/terms"
                    className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                  >
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">
                      利用規約
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      サービスの利用条件について
                    </p>
                  </Link>
                  <Link
                    href="/sitemap"
                    className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                  >
                    <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-1">
                      サイトマップ
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      サイト内のすべてのページ
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
