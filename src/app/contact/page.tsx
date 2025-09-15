"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

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
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout currentPage="contact">
      <div className="max-w-4xl mx-auto" aria-hidden>
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center space-x-2 font-sans hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ホームに戻る</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto"
            style={{ backgroundColor: "var(--color-accent)" }}
            aria-hidden="true"
          >
            <Mail className="w-10 h-10" style={{ color: "#ffffff" }} />
          </div>
          <h2 className="heading-primary mb-4">お問い合わせ</h2>
          <p className="body-text-lg">
            ご質問やご要望がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card">
            <h3 className="heading-secondary mb-6">メッセージを送信</h3>

            {submitStatus === "success" && (
              <div
                className="mb-6 p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--color-sub-bg)",
                  border: "1px solid var(--color-success)",
                }}
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-success)" }}
                  />
                  <span
                    className="font-sans font-semibold"
                    style={{ color: "var(--color-success)" }}
                  >
                    お問い合わせを送信しました
                  </span>
                </div>
                <p className="body-text mt-2">
                  ご連絡いただき、ありがとうございます。内容を確認の上、回答いたします。
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="mb-6 p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--color-sub-bg)",
                  border: "1px solid var(--color-warning)",
                }}
                role="alert"
                aria-live="assertive"
              >
                <div className="flex items-center space-x-2">
                  <AlertCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-warning)" }}
                  />
                  <span
                    className="font-sans font-semibold"
                    style={{ color: "var(--color-warning)" }}
                  >
                    送信に失敗しました
                  </span>
                </div>
                <p className="body-text mt-2">
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
                  件名 <span style={{ color: "var(--color-warning)" }}>*</span>
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
            <div className="card">
              <h3 className="heading-secondary mb-6">お問い合わせについて</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-tertiary mb-2">回答時間</h4>
                  <p className="body-text">
                    お問い合わせいただいた内容について、通常3営業日以内に回答いたします。
                    お急ぎの場合は、件名に「緊急」と記載してください。
                  </p>
                </div>
                <div>
                  <h4 className="heading-tertiary mb-2">よくある質問</h4>
                  <p className="body-text">
                    技術的な問題や一般的なご質問については、
                    サイト内の情報やFAQをご確認いただくことで解決できる場合があります。
                  </p>
                </div>
                <div>
                  <h4 className="heading-tertiary mb-2">プライバシー</h4>
                  <p className="body-text">
                    お問い合わせいただいた内容は、回答の目的のみに使用し、
                    第三者に提供することはありません。
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="heading-secondary mb-6">関連リンク</h3>
              <div className="space-y-4">
                <Link
                  href="/privacy"
                  className="block p-4 rounded-xl hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "var(--color-base-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h4
                    className="font-sans font-semibold mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    プライバシーポリシー
                  </h4>
                  <p className="body-text" style={{ fontSize: "0.9rem" }}>
                    個人情報の取り扱いについて
                  </p>
                </Link>
                <Link
                  href="/terms"
                  className="block p-4 rounded-xl hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "var(--color-base-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h4
                    className="font-sans font-semibold mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    利用規約
                  </h4>
                  <p className="body-text" style={{ fontSize: "0.9rem" }}>
                    サービスの利用条件について
                  </p>
                </Link>
                <Link
                  href="/sitemap"
                  className="block p-4 rounded-xl hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "var(--color-base-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h4
                    className="font-sans font-semibold mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    サイトマップ
                  </h4>
                  <p className="body-text" style={{ fontSize: "0.9rem" }}>
                    サイト内のすべてのページ
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under Construction Overlay */}
      <div
        className="fixed inset-0 z-50"
        aria-live="polite"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(251, 250, 247, 0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        />
        {/* Modal container */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <div
            className="w-full max-w-xl rounded-2xl p-8 text-center shadow-xl"
            style={{
              backgroundColor: "var(--color-base-bg)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "var(--color-accent)" }}
              aria-hidden="true"
            >
              <Mail className="w-8 h-8" style={{ color: "#ffffff" }} />
            </div>
            <h2 className="heading-secondary mb-2">
              お問い合わせ機能は準備中です
            </h2>
            <p className="body-text mb-6">
              ただいま工事中のため、一時的にご利用いただけません。近日公開予定です。
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/" className="btn-secondary-soft">
                ホームへ戻る
              </Link>
              <span
                className="font-sans text-sm"
                style={{ color: "var(--color-text-primary)" }}
              >
                しばらくお待ちください
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
