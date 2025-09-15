import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import FavoriteButton from "@/components/FavoriteButton";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import CharacterFigure from "@/components/CharacterFigure";

export const metadata: Metadata = {
  title: "物語で学ぶ | Tera Talk",
  description: "短い物語を通じて、心のうつりかわりをながめる練習をします。",
  alternates: { canonical: "/story" },
  openGraph: {
    title: "物語で学ぶ | Tera Talk",
    description: "短い物語を通じて、心のうつりかわりをながめる練習をします。",
    url: "/story",
  },
};

const stories = [
  {
    slug: "story-yunomi-no-nami",
    title: "湯のみのうえの波",
    description: "湯面の波を見ながら、下にある水を見る練習。ひと呼吸の物語。",
    icon: "波",
  },
  {
    slug: "story-kaze-no-utsuwa",
    title: "風の器",
    description: "音のない風に気づく練習。満たすより、空けておく物語。",
    icon: "風",
  },
  {
    slug: "story-kage-to-ishi",
    title: "影と石",
    description: "影に蹴りを入れるより、足もとを見る物語。",
    icon: "影",
  },
  {
    slug: "story-hashi-no-oto",
    title: "橋の音",
    description: "渡る前に鳴る音を聞く物語。",
    icon: "音",
  },
];

export default function StoryIndexPage() {
  return (
    <PageLayout currentPage="story">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <CharacterFigure
            name="guide"
            decorative
            className="hidden md:block absolute right-2 -top-10"
            width={100}
            height={100}
            sizesOverride="(max-width: 768px) 25vw, 140px"
          />
          <h2 className="heading-primary mb-6">物語で学ぶ</h2>
          <p className="body-text-lg leading-relaxed">
            短い物語を読み、問いを一つ持ち帰りましょう。
            <br />
            物語のあとに、静かな一分の所作を用意しています。
            <Link
              href="/learn"
              className="ml-2 font-sans"
              style={{ color: "var(--color-accent)" }}
            >
              → 基本の教えへ
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s) => (
            <Card key={s.slug} className="group-hover:scale-105 h-full">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <span className="text-white font-bold text-2xl">
                    {s.icon}
                  </span>
                </div>
                <FavoriteButton
                  id={`story:/story/${s.slug}`}
                  type="story"
                  title={s.title}
                  description={s.description}
                  url={`/story/${s.slug}`}
                  icon={s.icon}
                  color={"from-purple-500 to-purple-600"}
                />
              </div>
              <Link href={`/story/${s.slug}`} className="group">
                <h3 className="heading-tertiary mb-4">{s.title}</h3>
                <p className="body-text mb-6 leading-relaxed">
                  {s.description}
                </p>
                <div
                  className="flex items-center font-semibold group-hover:translate-x-2 transition-transform"
                  style={{ color: "var(--color-accent)" }}
                >
                  物語を読む
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="mt-16">
          <div className="flex items-center mb-6 relative">
            <CharacterFigure
              name="back-channeling"
              decorative
              className="hidden sm:block absolute right-2 -top-2"
              width={96}
              height={96}
              sizesOverride="96px"
            />
            <BookOpen
              className="w-8 h-8 mr-3"
              style={{ color: "var(--color-accent)" }}
            />
            <h3 className="heading-secondary">読み方のコツ</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4
                className="font-semibold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                1. 一気に結論を出さない
              </h4>
              <p className="body-text">問いを一つ、持ち帰るだけで十分です。</p>
            </div>
            <div>
              <h4
                className="font-semibold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                2. 所作の一分を大切に
              </h4>
              <p className="body-text">
                読み終えたら、ひと呼吸の時間を置きます。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
