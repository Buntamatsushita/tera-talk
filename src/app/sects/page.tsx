import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight, BookOpen } from "lucide-react";
import FavoriteButton from "@/components/FavoriteButton";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import InteractiveLineage from "./components/InteractiveLineage";

export const metadata: Metadata = {
  title: "日本仏教宗派 | Tera Talk",
  description:
    "天台・真言・禅・浄土・日蓮など主要宗派の成り立ちや思想の特徴を体系的に整理します。",
  alternates: { canonical: "/sects" },
  openGraph: {
    title: "日本仏教宗派 | Tera Talk",
    description:
      "天台・真言・禅・浄土・日蓮など主要宗派の成り立ちや思想の特徴を体系的に整理します。",
    url: "/sects",
  },
};

const sects = [
  {
    slug: "tendai",
    name: "天台宗",
    founder: "最澄（伝教大師）",
    period: "平安時代初期",
    description: "法華経を根本経典とし、すべての仏教を統合する総合的な宗派です。",
    icon: "天",
    characteristics: [
      "法華経を根本経典とする",
      "止観（しがん）の修行法",
      "比叡山延暦寺を総本山とする",
      "総合的な仏教体系"
    ]
  },
  {
    slug: "shingon",
    name: "真言宗",
    founder: "空海（弘法大師）",
    period: "平安時代初期",
    description: "密教の教えを基盤とし、真言（マントラ）と印を重視する宗派です。",
    icon: "真",
    characteristics: [
      "密教の教えを基盤とする",
      "真言（マントラ）と印を重視",
      "高野山金剛峰寺を総本山とする",
      "即身成仏の教え"
    ]
  },
  {
    slug: "jodo",
    name: "浄土宗",
    founder: "法然",
    period: "平安時代末期",
    description: "阿弥陀仏の本願力によって極楽浄土に往生することを説く宗派です。",
    icon: "浄",
    characteristics: [
      "阿弥陀仏の本願力による往生",
      "念仏（南無阿弥陀仏）を重視",
      "知恩院を総本山とする",
      "専修念仏の教え"
    ]
  },
  {
    slug: "jodo-shin",
    name: "浄土真宗",
    founder: "親鸞",
    period: "鎌倉時代",
    description: "浄土宗から派生し、阿弥陀仏の絶対他力による救済を説く宗派です。",
    icon: "真",
    characteristics: [
      "阿弥陀仏の絶対他力による救済",
      "悪人正機説",
      "本願寺を総本山とする",
      "信心を重視する"
    ]
  },
  {
    slug: "rinzai",
    name: "臨済宗",
    founder: "栄西",
    period: "鎌倉時代",
    description: "禅宗の一派で、公案（こうあん）による修行を重視する宗派です。",
    icon: "臨",
    characteristics: [
      "公案による修行を重視",
      "看話禅（かんなぜん）",
      "建仁寺を総本山とする",
      "頓悟の教え"
    ]
  },
  {
    slug: "soto",
    name: "曹洞宗",
    founder: "道元",
    period: "鎌倉時代",
    description: "禅宗の一派で、只管打坐（ただひたすら坐る）を重視する宗派です。",
    icon: "曹",
    characteristics: [
      "只管打坐（ただひたすら坐る）",
      "黙照禅（もくしょうぜん）",
      "永平寺を総本山とする",
      "漸悟の教え"
    ]
  },
  {
    slug: "nichiren",
    name: "日蓮宗",
    founder: "日蓮",
    period: "鎌倉時代",
    description: "法華経を唯一の正法とし、題目（南無妙法蓮華経）を唱える宗派です。",
    icon: "日",
    characteristics: [
      "法華経を唯一の正法とする",
      "題目（南無妙法蓮華経）を唱える",
      "久遠寺を総本山とする",
      "立正安国の教え"
    ]
  }
];

export default function SectsPage() {
  return (
    <PageLayout currentPage="sects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-6">
            日本仏教宗派
          </h2>
          <p className="body-text-lg leading-relaxed">
            日本の主要な仏教宗派の成り立ち、開祖、思想の特徴を学びましょう。
            <br />
            各宗派の歴史と教えを理解することで、日本仏教の全体像が見えてきます。
            <br />
            ルーツであるインド仏教の流れも併せて確認しましょう。
            <Link href="/india" className="ml-2 font-sans" style={{ color: 'var(--color-accent)' }}>→ インド仏教の基礎</Link>
          </p>
        </div>

        {/* Sect Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sects.map((sect) => (
            <Card key={sect.slug} className="group-hover:scale-105 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <span className="text-white font-bold text-2xl">{sect.icon}</span>
                </div>
                <FavoriteButton
                  id={`sect:/sects/${sect.slug}`}
                  type="sect"
                  title={sect.name}
                  description={sect.description}
                  url={`/sects/${sect.slug}`}
                  icon={sect.icon}
                  color={"from-purple-500 to-purple-600"}
                />
              </div>
              <Link href={`/sects/${sect.slug}`} className="group">
                <h3 className="heading-tertiary mb-2">
                  {sect.name}
                </h3>
                <p className="body-text mb-4">
                  {sect.founder}
                </p>
                <p className="body-text mb-6 leading-relaxed">
                  {sect.description}
                </p>
                <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform" style={{ color: 'var(--color-accent)' }}>
                  詳しく学ぶ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Sect Family Tree - Interactive */}
        <Card className="mb-16" role="region" aria-labelledby="lineage-title">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 mr-3" style={{ color: 'var(--color-accent)' }} />
            <h3 id="lineage-title" className="heading-secondary">宗派の系譜図（インタラクティブ）</h3>
          </div>
          <InteractiveLineage />
        </Card>

        {/* Study Guide */}
        <Card id="study-guide">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 mr-3" style={{ color: 'var(--color-accent)' }} />
            <h3 className="heading-secondary">学習のガイド</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>1. 歴史的背景を理解する</h4>
              <p className="body-text">
                各宗派は特定の時代背景の中で生まれました。平安時代、鎌倉時代の社会情勢を理解することで、宗派の特徴がより明確になります。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>2. 開祖の思想を学ぶ</h4>
              <p className="body-text">
                各宗派の開祖の人生と思想を理解することで、その宗派の本質的な教えを深く理解できます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>3. 修行法の違いを比較する</h4>
              <p className="body-text">
                各宗派には独自の修行法があります。止観、念仏、坐禅、題目など、それぞれの特徴を比較してみましょう。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>4. 現代への影響を考える</h4>
              <p className="body-text">
                各宗派の教えが現代の日本文化や精神性にどのような影響を与えているかを考えてみましょう。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
