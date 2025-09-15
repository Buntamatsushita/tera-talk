import Link from "next/link";
import { Home, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[65vh] grid place-items-center px-4 fade-in">
        <div className="max-w-xl w-full text-center">
          {/* Card */}
          <div className="card">
            <div
              className="mb-2 font-serif"
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                color: "var(--color-border)",
                lineHeight: 1,
              }}
            >
              404
            </div>
            <h2 className="heading-tertiary mb-3">ページが見つかりません</h2>
            <p className="body-text mb-8">
              お探しのページは存在しないか、移動された可能性があります。以下のリンクからお探しのコンテンツにアクセスできます。
            </p>

            {/* Actions */}
            <div className="space-y-4">
              <Link
                href="/"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                <span>ホームに戻る</span>
              </Link>
            </div>

            {/* Hint */}
            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <p
                className="body-text"
                style={{ fontSize: "0.875rem", opacity: 0.85 }}
              >
                お探しのコンテンツが見つからない場合は：
              </p>
              <div
                className="flex items-center justify-center gap-2 body-text"
                style={{ fontSize: "0.9rem" }}
              >
                <Search className="w-4 h-4" />
                <span>
                  ナビゲーションメニューから目的のページにアクセスしてください
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
