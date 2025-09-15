import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function TermsPage() {
  return (
    <PageLayout currentPage="terms">
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h2 className="heading-primary mb-3">利用規約</h2>
          <p className="body-text-lg">最終更新日: 2024年12月19日</p>
        </div>

        <div className="space-y-8">
          <section className="card">
            <h3 className="heading-secondary mb-4">はじめに</h3>
            <p className="body-text-lg">
              この利用規約（以下「本規約」）は、Tera
              Talk（以下「当サイト」）の利用条件を定めるものです。
              当サイトをご利用いただく際は、本規約に同意の上でご利用ください。
              本規約に同意いただけない場合は、当サイトの利用を停止してください。
            </p>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">1. サービスについて</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">1.1 サービス内容</h4>
                <p className="body-text">
                  当サイトは、仏教の教えを学ぶための学習コンテンツ、AI僧侶との対話機能、
                  日本仏教宗派に関する情報提供などのサービスを提供します。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">
                  1.2 サービスの変更・終了
                </h4>
                <p className="body-text">
                  当サイトは、事前の通知なく、サービスの内容を変更または終了する場合があります。
                  これにより生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">2. 利用者の義務</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">2.1 適切な利用</h4>
                <p className="body-text">
                  利用者は、当サイトを適切に利用し、以下の行為を行ってはいけません：
                </p>
                <ul className="body-text ml-5 list-disc">
                  <li>法令に違反する行為</li>
                  <li>他の利用者や第三者に迷惑をかける行為</li>
                  <li>当サイトの運営を妨害する行為</li>
                  <li>不正アクセスやシステムの破壊を試みる行為</li>
                  <li>不適切な内容の投稿や送信</li>
                  <li>著作権やその他の知的財産権を侵害する行為</li>
                </ul>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">2.2 情報の正確性</h4>
                <p className="body-text">
                  利用者が提供する情報は、正確で最新のものであることを保証してください。
                  虚偽の情報提供により生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">3. 知的財産権</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">
                  3.1 当サイトのコンテンツ
                </h4>
                <p className="body-text">
                  当サイトに掲載されている文章、画像、音声、動画、ソフトウェアなどのコンテンツは、
                  当サイトまたは正当な権利者に帰属します。これらのコンテンツを無断で複製、転載、配布することは禁止されています。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">3.2 利用者の投稿内容</h4>
                <p className="body-text">
                  利用者が投稿した内容について、利用者は当サイトに対して、当サイトの運営に必要な範囲で
                  使用する権利を許諾するものとします。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">4. プライバシーとデータ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">
                  4.1 個人情報の取り扱い
                </h4>
                <p className="body-text">
                  当サイトにおける個人情報の取り扱いについては、
                  <Link href="/privacy">プライバシーポリシー</Link>
                  をご確認ください。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">
                  4.2 AI対話機能について
                </h4>
                <p className="body-text">
                  AI僧侶との対話機能では、Google Gemini APIを使用しています。
                  送信されたメッセージは、AI応答の生成のためにGoogleのサーバーに送信されます。
                  機密性の高い情報の送信は避けてください。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">5. 免責事項</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">5.1 情報の正確性</h4>
                <p className="body-text">
                  当サイトに掲載されている情報の正確性、完全性、最新性について、当サイトは一切の保証をいたしません。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">5.2 サービスの中断</h4>
                <p className="body-text">
                  システムメンテナンス、技術的障害、その他の理由により、サービスが中断される場合があります。
                  これにより生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">5.3 第三者との関係</h4>
                <p className="body-text">
                  当サイトは、利用者と第三者との間で生じた問題について、一切の責任を負いません。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">5.4 AI応答について</h4>
                <p className="body-text">
                  AI僧侶からの応答は、一般的な情報提供を目的としており、専門的な宗教的指導や医療的助言ではありません。
                  重要な判断が必要な場合は、適切な専門家にご相談ください。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">6. 責任の制限</h3>
            <p className="body-text-lg">
              当サイトの利用により生じた直接的・間接的・付随的・特別・懲罰的・結果的損害について、当サイトは一切の責任を負いません。
              また、当サイトの責任は、利用者が当サイトに支払った金額を上限とします。
            </p>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">7. 利用停止・終了</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">7.1 利用停止</h4>
                <p className="body-text">
                  利用者が本規約に違反した場合、当サイトは事前の通知なく、当該利用者のサービス利用を停止できます。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">7.2 利用終了</h4>
                <p className="body-text">
                  利用者は、いつでも当サイトの利用を終了できます。利用終了後も、本規約の条項は引き続き適用されます。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">8. 準拠法・管轄</h3>
            <div className="space-y-4">
              <div>
                <h4 className="heading-tertiary mb-2">8.1 準拠法</h4>
                <p className="body-text">
                  本規約は、日本法に準拠し、日本法に従って解釈されます。
                </p>
              </div>
              <div>
                <h4 className="heading-tertiary mb-2">8.2 管轄裁判所</h4>
                <p className="body-text">
                  本規約に関して紛争が生じた場合、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">9. 規約の変更</h3>
            <p className="body-text-lg">
              当サイトは、必要に応じて本規約を変更することができます。変更後の規約は、当サイトに掲載した時点から効力を生じます。
              重要な変更がある場合は、サイト上でお知らせいたします。継続して当サイトをご利用いただく場合は、変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section className="card">
            <h3 className="heading-secondary mb-4">10. お問い合わせ</h3>
            <p className="body-text-lg mb-4">
              本規約に関するご質問やご不明な点がございましたら、お問い合わせフォームからご連絡ください。
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
