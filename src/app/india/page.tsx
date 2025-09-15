import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import InteractiveSectionClient from "./components/InteractiveSectionClient";

export const metadata = {
  title: "インド仏教の基礎 | Tera Talk",
  description: "仏教発祥の地インドにおける初期仏教から大乗・密教の展開、南伝・北伝の広がり、日本仏教への影響までを概観します。",
};

export default function IndiaBuddhismPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4">インド仏教の基礎</h2>
          <p className="body-text-lg">
            仏教はインドで誕生し、長い歴史の中で多様に発展しました。本ページでは、初期仏教・大乗・密教の流れと南伝・北伝の広がり、そして日本仏教への接続点をコンパクトに整理します。
          </p>
        </div>

        <div className="space-y-10">
          {/* 目次 */}
          <Card role="navigation" aria-label="インド仏教 目次">
            <h3 className="heading-secondary mb-3">目次</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              <li><Link href="#basics" className="font-sans" style={{ color: 'var(--color-accent)' }}>基礎：成立と部派（はじめの理解）</Link></li>
              <li><Link href="#developments" className="font-sans" style={{ color: 'var(--color-accent)' }}>展開：大乗・密教・人物・経論</Link></li>
              <li><Link href="#transmission" className="font-sans" style={{ color: 'var(--color-accent)' }}>伝播：南伝・北伝・チベット比較</Link></li>
              <li><Link href="#resources" className="font-sans" style={{ color: 'var(--color-accent)' }}>リソース：聖地・年表・用語・次に読む</Link></li>
            </ul>
          </Card>

          {/* 学習ルート */}
          <Card>
            <h3 className="heading-secondary mb-3">学習ルート</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li className="body-text">基礎を読む（成立→部派）</li>
              <li className="body-text">展開を俯瞰（大乗→密教→人物→経論）</li>
              <li className="body-text">伝播の比較（南伝/北伝/チベット）で位置づけ把握</li>
              <li className="body-text">リソース（年表・用語・聖地）で復習</li>
            </ol>
          </Card>

          {/* インタラクティブ要素 */}
          <Card>
            <h3 className="heading-secondary mb-3">インタラクティブで学ぶ</h3>
            <InteractiveSectionClient />
          </Card>

          {/* 基礎章 */}
          <div>
            <h3 id="basics" className="heading-secondary mb-4">基礎：成立と部派</h3>
            <div className="space-y-6">
              <Card>
                <h4 className="heading-tertiary mb-2">成立と初期仏教（紀元前5世紀頃〜）</h4>
                <p className="body-text">釈迦（ゴータマ・ブッダ）の悟りと教団の形成に始まり、四諦・八正道・縁起などの根本教理が整えられました。出家僧団と在家信者が支える形で、戒・定・慧の実践が重視されました。</p>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">部派仏教と経典形成（紀元前3世紀〜）</h4>
                <p className="body-text">アショーカ王の保護を背景に各地へ伝播。教団は複数の部派に展開し、戒律と教理の整理が進みました。上座部の伝統は後に南アジア・東南アジアへ継承されます。</p>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">要点サマリー（基礎）</h4>
                <ul className="space-y-1">
                  <li className="body-text">四諦・八正道・縁起が初期仏教の核</li>
                  <li className="body-text">部派展開で戒律と教理が精緻化</li>
                  <li className="body-text">上座部の系譜が南伝へ継承</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* 展開章 */}
          <div>
            <h3 id="developments" className="heading-secondary mb-4">展開：大乗・密教・人物・経論</h3>
            <div className="space-y-6">
              <Card>
                <h4 className="heading-tertiary mb-2">大乗の興起（1〜4世紀）</h4>
                <p className="body-text">菩薩道を中心に、般若・法華・華厳など多様な教学が生まれ、空・慈悲・方便の思想が深化しました。ナーガールジュナらにより中観などの哲学が展開します。</p>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">密教の成立（6〜8世紀）</h4>
                <p className="body-text">マントラ・印契・曼荼羅・灌頂などの体系が整い、金剛乗としてインド後期仏教の中心的潮流に。これが後に中国・チベット・日本へと受容されます。</p>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">主要人物（抜粋）</h4>
                <div className="space-y-4">
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>釈迦（ゴータマ・ブッダ）</h5>
                    <p className="body-text">仏教の開祖。四諦・八正道・縁起を中核に苦の止滅への道を示す。</p>
                  </div>
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>アショーカ王</h5>
                    <p className="body-text">マウリヤ朝の王。仏教保護と布教を推進し、インド外への拡散を加速。</p>
                  </div>
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>ナーガールジュナ（龍樹）</h5>
                    <p className="body-text">中観派を大成。<Link href="/learn/kuu" className="font-sans" style={{ color: 'var(--color-accent)' }}>空の思想</Link>の哲学的深化に寄与。</p>
                  </div>
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>無着・世親</h5>
                    <p className="body-text">瑜伽行派（唯識）の体系化。心の働きと認識を精密に分析。</p>
                  </div>
                </div>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">代表的な経論（ごく概観）</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>初期仏教</h5>
                    <p className="body-text">パーリ三蔵（律・経・論）。四諦・八正道・戒定慧の実践。</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>大乗</h5>
                    <p className="body-text">般若経群（空）・法華経（<Link href="/sects/tendai" className="font-sans" style={{ color: 'var(--color-accent)' }}>天台宗</Link>）・華厳経（相互依存）。</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>密教</h5>
                    <p className="body-text">『大日経』『金剛頂経』など。曼荼羅・三密・灌頂（<Link href="/sects/shingon" className="font-sans" style={{ color: 'var(--color-accent)' }}>真言宗</Link>）。</p>
                  </div>
                </div>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">要点サマリー（展開）</h4>
                <ul className="space-y-1">
                  <li className="body-text">大乗＝菩薩道と空・慈悲の拡充</li>
                  <li className="body-text">密教＝三密と儀礼の体系化（曼荼羅・灌頂）</li>
                  <li className="body-text">人物・経論が日本仏教の諸宗派へ接続</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* 伝播章 */}
          <div>
            <h3 id="transmission" className="heading-secondary mb-4">伝播：南伝・北伝・チベット</h3>
            <div className="space-y-6">
              <Card>
                <h4 className="heading-tertiary mb-2">南伝と北伝、日本への影響</h4>
                <ul className="space-y-2">
                  <li className="body-text">南伝（上座部）：スリランカ〜東南アジアに展開。パーリ聖典の伝統。</li>
                  <li className="body-text">北伝（大乗・密教）：中央アジア〜中国・朝鮮・日本へ。漢訳経典と密教儀礼。</li>
                  <li className="body-text">日本仏教：大乗と密教を中核に受容。天台・真言、後に禅・浄土・日蓮へ展開。</li>
                </ul>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">チベット（金剛乗）の位置づけ</h4>
                <p className="body-text">大乗と密教の総合体系。ラマ制・灌頂・ツォクなどの実践が特徴で、テキストと口伝の両輪で学習が進む。</p>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">要点サマリー（伝播）</h4>
                <ul className="space-y-1">
                  <li className="body-text">南伝＝上座部の継承、北伝＝大乗・密教の受容</li>
                  <li className="body-text">チベット＝金剛乗の体系化と実践の深化</li>
                  <li className="body-text">日本＝北伝系の教理を中心に宗派が展開</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* リソース章 */}
          <div>
            <h3 id="resources" className="heading-secondary mb-4">リソース：聖地・年表・用語・次に読む</h3>
            <div className="space-y-6">
              <Card>
                <h4 className="heading-tertiary mb-2">聖地（学びの手がかり）</h4>
                <ul className="space-y-2">
                  <li className="body-text">ルンビニー：誕生の地。仏伝理解の起点。</li>
                  <li className="body-text">ブッダガヤ：成道の地。菩提樹下の悟り。</li>
                  <li className="body-text">サールナート：初転法輪の地。四諦の説示。</li>
                  <li className="body-text">クシナーラ：入滅の地。涅槃理解の鍵（<Link href="/learn/nehan-jakujo" className="font-sans" style={{ color: 'var(--color-accent)' }}>涅槃寂静</Link>）。</li>
                  <li className="body-text">ナーランダ僧院：学僧の学術拠点。大乗・論書の発展。</li>
                </ul>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">簡易年表（要点）</h4>
                <ul className="space-y-2">
                  <li className="body-text">紀元前5世紀頃：釈迦が悟りを開き教団成立。初期仏教の実践と基礎教理。</li>
                  <li className="body-text">紀元前3世紀：アショーカ王の支援、各地への布教と部派の展開。</li>
                  <li className="body-text">1〜4世紀：大乗仏教の興起。般若・法華などの思想的深化。</li>
                  <li className="body-text">6〜8世紀：密教（金剛乗）の体系化。曼荼羅・灌頂・三密の実践。</li>
                  <li className="body-text">以後：南伝（上座部）・北伝（大乗・密教）・チベット（金剛乗）の地域展開。</li>
                </ul>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">用語ミニ辞典</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="heading-tertiary mb-1">四諦</h5>
                    <p className="body-text">苦・集・滅・道。苦の原因から止滅、道（八正道）へ。</p>
                  </div>
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="heading-tertiary mb-1">縁起</h5>
                    <p className="body-text">因と条件により生起。<Link href="/learn/engi" className="font-sans" style={{ color: 'var(--color-accent)' }}>詳細</Link></p>
                  </div>
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="heading-tertiary mb-1">空</h5>
                    <p className="body-text">実体なし・相互依存。<Link href="/learn/kuu" className="font-sans" style={{ color: 'var(--color-accent)' }}>詳細</Link></p>
                  </div>
                  <div className="pl-5 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h5 className="heading-tertiary mb-1">菩薩道</h5>
                    <p className="body-text">利他と智慧の実践。大乗の核心。</p>
                  </div>
                </div>
              </Card>
              <Card>
                <h4 className="heading-tertiary mb-2">次に読む（学びをつなぐ）</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/learn" className="font-sans" style={{ color: 'var(--color-accent)' }}>→ 仏教思想（四苦八苦・縁起・空 など）へ</Link>
                  <Link href="/sects" className="font-sans" style={{ color: 'var(--color-accent)' }}>→ 日本仏教宗派（天台・真言・禅・浄土 など）へ</Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}


