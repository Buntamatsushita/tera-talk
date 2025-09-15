import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">仏</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tera Talk</h1>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/learn" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              仏教思想を学ぶ
            </Link>
            <Link href="/chat" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              AI僧侶に相談
            </Link>
            <Link href="/sects" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              日本仏教宗派
            </Link>
            <Link href="/search" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
              検索
            </Link>
            <Link href="/favorites" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
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
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>ホームに戻る</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              利用規約
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              最終更新日: 2024年12月19日
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">はじめに</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                この利用規約（以下「本規約」）は、Tera Talk（以下「当サイト」）の利用条件を定めるものです。
                当サイトをご利用いただく際は、本規約に同意の上でご利用ください。
                本規約に同意いただけない場合は、当サイトの利用を停止してください。
              </p>
            </section>

            {/* Service Description */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. サービスについて</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1.1 サービス内容</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトは、仏教の教えを学ぶための学習コンテンツ、AI僧侶との対話機能、
                    日本仏教宗派に関する情報提供などのサービスを提供します。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1.2 サービスの変更・終了</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトは、事前の通知なく、サービスの内容を変更または終了する場合があります。
                    これにより生じた損害について、当サイトは一切の責任を負いません。
                  </p>
                </div>
              </div>
            </section>

            {/* User Obligations */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 利用者の義務</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2.1 適切な利用</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    利用者は、当サイトを適切に利用し、以下の行為を行ってはいけません：
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>• 法令に違反する行為</li>
                    <li>• 他の利用者や第三者に迷惑をかける行為</li>
                    <li>• 当サイトの運営を妨害する行為</li>
                    <li>• 不正アクセスやシステムの破壊を試みる行為</li>
                    <li>• 不適切な内容の投稿や送信</li>
                    <li>• 著作権やその他の知的財産権を侵害する行為</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2.2 情報の正確性</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    利用者が提供する情報は、正確で最新のものであることを保証してください。
                    虚偽の情報提供により生じた損害について、当サイトは一切の責任を負いません。
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 知的財産権</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3.1 当サイトのコンテンツ</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトに掲載されている文章、画像、音声、動画、ソフトウェアなどのコンテンツは、
                    当サイトまたは正当な権利者に帰属します。これらのコンテンツを無断で複製、転載、配布することは禁止されています。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3.2 利用者の投稿内容</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    利用者が投稿した内容について、利用者は当サイトに対して、当サイトの運営に必要な範囲で
                    使用する権利を許諾するものとします。
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. プライバシーとデータ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4.1 個人情報の取り扱い</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトにおける個人情報の取り扱いについては、
                    <Link href="/privacy" className="text-green-600 hover:text-green-800 underline">
                      プライバシーポリシー
                    </Link>
                    をご確認ください。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4.2 AI対話機能について</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI僧侶との対話機能では、Google Gemini APIを使用しています。
                    送信されたメッセージは、AI応答の生成のためにGoogleのサーバーに送信されます。
                    機密性の高い情報の送信は避けてください。
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 免責事項</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5.1 情報の正確性</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトに掲載されている情報の正確性、完全性、最新性について、
                    当サイトは一切の保証をいたしません。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5.2 サービスの中断</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    システムメンテナンス、技術的障害、その他の理由により、
                    サービスが中断される場合があります。これにより生じた損害について、
                    当サイトは一切の責任を負いません。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5.3 第三者との関係</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    当サイトは、利用者と第三者との間で生じた問題について、
                    一切の責任を負いません。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5.4 AI応答について</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI僧侶からの応答は、一般的な情報提供を目的としており、
                    専門的な宗教的指導や医療的助言ではありません。
                    重要な判断が必要な場合は、適切な専門家にご相談ください。
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 責任の制限</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                当サイトの利用により生じた直接的・間接的・付随的・特別・懲罰的・結果的損害について、
                当サイトは一切の責任を負いません。また、当サイトの責任は、
                利用者が当サイトに支払った金額を上限とします。
              </p>
            </section>

            {/* Termination */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. 利用停止・終了</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">7.1 利用停止</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    利用者が本規約に違反した場合、当サイトは事前の通知なく、
                    当該利用者のサービス利用を停止することができます。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">7.2 利用終了</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    利用者は、いつでも当サイトの利用を終了することができます。
                    利用終了後も、本規約の条項は引き続き適用されます。
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. 準拠法・管轄</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">8.1 準拠法</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    本規約は、日本法に準拠し、日本法に従って解釈されます。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">8.2 管轄裁判所</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    本規約に関して紛争が生じた場合、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. 規約の変更</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                当サイトは、必要に応じて本規約を変更することができます。
                変更後の規約は、当サイトに掲載した時点から効力を生じます。
                重要な変更がある場合は、サイト上でお知らせいたします。
                継続して当サイトをご利用いただく場合は、変更後の規約に同意したものとみなします。
              </p>
            </section>

            {/* Contact */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. お問い合わせ</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                本規約に関するご質問やご不明な点がございましたら、
                お問い合わせフォームからご連絡ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
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
