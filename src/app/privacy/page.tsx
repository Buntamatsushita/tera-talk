import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function PrivacyPage() {
  return (
    <PageLayout currentPage="privacy">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="btn-secondary-soft inline-flex items-center gap-2"
            aria-label="ホームに戻る"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ホームに戻る</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto"
            style={{
              background:
                "linear-gradient(135deg, var(--color-success), var(--color-accent))",
            }}
          >
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="heading-primary mb-3">プライバシーポリシー</h2>
          <p className="body-text-lg">最終更新日: 2024年12月19日</p>
        </div>

        <div className="space-y-8">
          <section className="card">
            <h3 className="heading-secondary mb-4">はじめに</h3>
            <p className="body-text-lg">
              Tera
              Talk（以下「当サイト」）は、ユーザーの個人情報の保護を重要な責務と考え、以下のプライバシーポリシーを定めています。
              当サイトをご利用いただく際は、本プライバシーポリシーをご確認いただき、同意の上でご利用ください。
            </p>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">1. 収集する情報</h3>
            <div className="space-y-6">
              <div>
                <h4 className="heading-tertiary mb-3">
                  1.1 自動的に収集される情報
                </h4>
                <ul className="body-text ml-5 list-disc space-y-1">
                  <li>
                    アクセスログ（IPアドレス、ブラウザ情報、アクセス日時）
                  </li>
                  <li>デバイス情報（OS、ブラウザの種類とバージョン）</li>
                  <li>ページビュー、滞在時間、離脱ページ</li>
                  <li>リファラー（参照元URL）</li>
                </ul>
              </div>
              <div>
                <h4 className="heading-tertiary mb-3">
                  1.2 ユーザーが提供する情報
                </h4>
                <ul className="body-text ml-5 list-disc space-y-1">
                  <li>AI僧侶への相談内容（チャットメッセージ）</li>
                  <li>お気に入りに保存したコンテンツ</li>
                  <li>検索履歴</li>
                  <li>お問い合わせフォームからの情報</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">2. 情報の利用目的</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">2.1 サービスの提供</h4>
                <p className="body-text">
                  AI僧侶との対話機能、仏教思想の学習コンテンツ、検索機能などのサービス提供
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">2.2 サービスの改善</h4>
                <p className="body-text">
                  ユーザーの利用状況を分析し、サイトの機能改善や新機能の開発
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">2.3 技術的な運用</h4>
                <p className="body-text">
                  サイトの正常な動作確保、セキュリティの維持、エラーの解決
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">2.4 統計情報の作成</h4>
                <p className="body-text">
                  個人を特定できない形での統計情報の作成と分析
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">3. データの保存と管理</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">
                  3.1 ローカルストレージ
                </h4>
                <p className="body-text">
                  お気に入り、検索履歴、設定情報はブラウザのローカルストレージに保存されます。これらの情報はユーザーのデバイスにのみ保存され、当サイトのサーバーには送信されません。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">3.2 セッション情報</h4>
                <p className="body-text">
                  AI僧侶との対話内容は、セッション中のみ一時的に保存され、ページを離れると削除されます。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">3.3 ログ情報</h4>
                <p className="body-text">
                  アクセスログは統計分析の目的で一定期間保存されますが、個人を特定できる情報は含まれません。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">4. 第三者サービス</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">4.1 Google Gemini API</h4>
                <p className="body-text">
                  AI僧侶との対話機能では、Google Gemini
                  APIを使用しています。ユーザーが送信したメッセージは、AI応答の生成のためにGoogleのサーバーに送信されます。Googleのプライバシーポリシーもご確認ください。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">
                  4.2 ホスティングサービス
                </h4>
                <p className="body-text">
                  当サイトはVercelなどのホスティングサービスを使用しています。これらのサービスのプライバシーポリシーも適用されます。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">5. ユーザーの権利</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">5.1 データの削除</h4>
                <p className="body-text">
                  ローカルストレージに保存されたデータは、ブラウザの設定から削除できます。お気に入りや検索履歴は、各ページの「削除」ボタンから個別に削除することも可能です。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">5.2 データの確認</h4>
                <p className="body-text">
                  ユーザーが提供した情報の確認や修正については、お問い合わせフォームからご連絡ください。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">
                  5.3 サービスの利用停止
                </h4>
                <p className="body-text">
                  いつでも当サイトの利用を停止できます。ブラウザの設定でローカルストレージをクリアすることで、保存されたデータを削除できます。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">6. セキュリティ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">6.1 データの保護</h4>
                <p className="body-text">
                  当サイトは、適切な技術的・組織的措置を講じて、ユーザーの情報を保護します。HTTPS通信を使用し、データの暗号化を行っています。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">6.2 アクセス制限</h4>
                <p className="body-text">
                  個人情報へのアクセスは、必要最小限の人員に限定し、適切な管理を行っています。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">
              7. プライバシーポリシーの変更
            </h3>
            <p className="body-text-lg">
              当サイトは、法令の変更やサービスの改善に伴い、本プライバシーポリシーを更新する場合があります。重要な変更がある場合は、サイト上でお知らせいたします。継続して当サイトをご利用いただく場合は、更新されたプライバシーポリシーに同意したものとみなします。
            </p>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">8. お問い合わせ</h3>
            <p className="body-text-lg mb-4">
              本プライバシーポリシーに関するご質問やご不明な点がございましたら、お問い合わせフォームからご連絡ください。
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
              role="button"
            >
              <span>お問い合わせフォーム</span>
            </Link>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
