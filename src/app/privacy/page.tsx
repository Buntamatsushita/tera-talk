import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
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
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>ホームに戻る</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              プライバシーポリシー
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              最終更新日: 2024年12月19日
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                はじめに
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Tera
                Talk（以下「当サイト」）は、ユーザーの個人情報の保護を重要な責務と考え、以下のプライバシーポリシーを定めています。
                当サイトをご利用いただく際は、本プライバシーポリシーをご確認いただき、同意の上でご利用ください。
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                1. 収集する情報
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    1.1 自動的に収集される情報
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      • アクセスログ（IPアドレス、ブラウザ情報、アクセス日時）
                    </li>
                    <li>• デバイス情報（OS、ブラウザの種類とバージョン）</li>
                    <li>• ページビュー、滞在時間、離脱ページ</li>
                    <li>• リファラー（参照元URL）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    1.2 ユーザーが提供する情報
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• AI僧侶への相談内容（チャットメッセージ）</li>
                    <li>• お気に入りに保存したコンテンツ</li>
                    <li>• 検索履歴</li>
                    <li>• お問い合わせフォームからの情報</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage Purpose */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                2. 情報の利用目的
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2.1 サービスの提供
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI僧侶との対話機能、仏教思想の学習コンテンツ、検索機能などのサービス提供
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2.2 サービスの改善
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    ユーザーの利用状況を分析し、サイトの機能改善や新機能の開発
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2.3 技術的な運用
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    サイトの正常な動作確保、セキュリティの維持、エラーの解決
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2.4 統計情報の作成
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    個人を特定できない形での統計情報の作成と分析
                  </p>
                </div>
              </div>
            </section>

            {/* Data Storage */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                3. データの保存と管理
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    3.1 ローカルストレージ
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    お気に入り、検索履歴、設定情報はブラウザのローカルストレージに保存されます。
                    これらの情報はユーザーのデバイスにのみ保存され、当サイトのサーバーには送信されません。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    3.2 セッション情報
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI僧侶との対話内容は、セッション中のみ一時的に保存され、ページを離れると削除されます。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    3.3 ログ情報
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    アクセスログは統計分析の目的で一定期間保存されますが、個人を特定できる情報は含まれません。
                  </p>
                </div>
              </div>
            </section>

            {/* Third Party Services */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                4. 第三者サービス
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    4.1 Google Gemini API
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI僧侶との対話機能では、Google Gemini APIを使用しています。
                    ユーザーが送信したメッセージは、AI応答の生成のためにGoogleのサーバーに送信されます。
                    Googleのプライバシーポリシーもご確認ください。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    4.2 ホスティングサービス
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトはVercelなどのホスティングサービスを使用しています。
                    これらのサービスのプライバシーポリシーも適用されます。
                  </p>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                5. ユーザーの権利
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    5.1 データの削除
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    ローカルストレージに保存されたデータは、ブラウザの設定から削除できます。
                    お気に入りや検索履歴は、各ページの「削除」ボタンから個別に削除することも可能です。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    5.2 データの確認
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    ユーザーが提供した情報の確認や修正については、お問い合わせフォームからご連絡ください。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    5.3 サービスの利用停止
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    いつでも当サイトの利用を停止できます。ブラウザの設定でローカルストレージをクリアすることで、
                    保存されたデータを削除できます。
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. セキュリティ
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    6.1 データの保護
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトは、適切な技術的・組織的措置を講じて、ユーザーの情報を保護します。
                    HTTPS通信を使用し、データの暗号化を行っています。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    6.2 アクセス制限
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    個人情報へのアクセスは、必要最小限の人員に限定し、適切な管理を行っています。
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                7. プライバシーポリシーの変更
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                当サイトは、法令の変更やサービスの改善に伴い、本プライバシーポリシーを更新する場合があります。
                重要な変更がある場合は、サイト上でお知らせいたします。
                継続して当サイトをご利用いただく場合は、更新されたプライバシーポリシーに同意したものとみなします。
              </p>
            </section>

            {/* Contact */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                8. お問い合わせ
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                本プライバシーポリシーに関するご質問やご不明な点がございましたら、
                お問い合わせフォームからご連絡ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                <span>お問い合わせフォーム</span>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
