import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import KamishibaiReader from "../components/KamishibaiReader";
import StoryGuideToggle from "../components/StoryGuideToggle";

// 紙芝居UIを使うため、型ガード群は不要になりました

const stories = {
  "story-yunomi-no-nami": {
    title: "湯のみのうえの波",
    icon: "波",
    description: "湯面の波を見ながら、下にある水を見る練習。ひと呼吸の物語。",
    content: {
      introduction:
        "朝、僧は湯のみを満たし、書院に座った。胸の中の誰かが言う——『急げ、遅れるぞ』。手があわてて湯のみを揺らすと、小さな波が立った。師は言う、『波を止めようとするより、下にある湯を見なさい』。僧は一息。波はやがて、もとの湯になった。",
      story: {
        title: "物語",
        items: [
          "朝の静けさの中に、せかす声が立つ",
          "急ぎに手が引っぱられ、湯面に波が立つ",
          "師のひと言——波ではなく、水を見る",
          "ひと呼吸ののち、波は収まり、湯はそのまま",
        ],
      },
      reflection: {
        title: "問い",
        items: [
          "いま、あなたの中で『波』だと思ったものに名まえをつけると？",
          "その波は、どんな出来事に触れて立った？",
          "ひと呼吸おいたら、何が変わるだろう？",
        ],
      },
      practice: {
        title: "所作（1分）",
        content:
          "目を閉じ、息の出入りをゆっくり数える。数は小石、流れは川。小石を一つ置いて、また見る。",
      },
      wisdom: {
        title: "ひとこと",
        content: "波よりも、水を見よう。",
      },
    },
  },
  "story-kaze-no-utsuwa": {
    title: "風の器",
    icon: "風",
    description: "音のない風に気づく練習。満たすより、空けておく物語。",
    content: {
      introduction:
        "弟子は笛を作って師に見せた。音が出ない。弟子は言う、『竹が悪いのです』。師は笑って笛を振る、『中に風の座る場所がないね』。弟子は穴を少し広げ、一息吹く。音はやわらかく、部屋を一つ大きくした。",
      story: {
        title: "物語",
        items: [
          "音が出ない笛、せめる気持ち",
          "師のひと言——中に風の座る場所",
          "穴を広げる、小さな手直し",
          "はじめて鳴る音、部屋が広がる",
        ],
      },
      reflection: {
        title: "問い",
        items: [
          "いま、心の中で詰まっている穴はどこだろう？",
          "何を少しだけ広げたら、風が座れる？",
          "広がった部屋で、最初に聞こえる音は？",
        ],
      },
      practice: {
        title: "所作（1分）",
        content: "息を細く長く吐き、吸う前に三拍おく。空きを感じる。",
      },
      wisdom: {
        title: "ひとこと",
        content: "満たすより、空けておく。",
      },
    },
  },
  "story-kage-to-ishi": {
    title: "影と石",
    icon: "影",
    description: "影に蹴りを入れるより、足もとを見る物語。",
    content: {
      introduction:
        "夕暮れ、道に黒いもの。弟子は怖れて身構える。近づけばそれは石の影。師は言う、『影に蹴りを入れず、石をどけよう』。弟子は石を持ち上げ、道はまた道になった。",
      story: {
        title: "物語",
        items: [
          "遠くの黒、胸のざわめき",
          "近づいて影だと知る",
          "師のひと言——影ではなく石",
          "石をどけると、道が戻る",
        ],
      },
      reflection: {
        title: "問い",
        items: [
          "影に向けていた力は、どの石に向け直せる？",
          "その石は手で動かせる？それとも助けがいる？",
          "どけたあと、道はどこへ続く？",
        ],
      },
      practice: {
        title: "所作（1分）",
        content: "視線を足もとへ。左右の足に順に重さを感じ分ける。",
      },
      wisdom: {
        title: "ひとこと",
        content: "影よりも、石を動かす。",
      },
    },
  },
  "story-hashi-no-oto": {
    title: "橋の音",
    icon: "音",
    description: "渡る前に鳴る音を聞く物語。",
    content: {
      introduction:
        "雨上がり、木の橋の前で弟子は足を止めた。落ちたらどうしよう。師は橋板を指で軽く弾いた。からん。『渡る前に、橋が鳴っているね』。弟子はうなずき、一歩を置いた。音は返事のようだった。",
      story: {
        title: "物語",
        items: [
          "濡れた橋、ためらう足",
          "板を弾く、小さな音",
          "音は橋からの返事",
          "一歩を置く、向こう岸が近づく",
        ],
      },
      reflection: {
        title: "問い",
        items: [
          "いま、渡りたい橋は何？",
          "渡る前に、どんな小さな確かめができる？",
          "一歩目を置いたら、何が聞こえる？",
        ],
      },
      practice: {
        title: "所作（1分）",
        content: "指先で机を軽く弾き、響きを一息だけ聞く。",
      },
      wisdom: {
        title: "ひとこと",
        content: "音を確かめて、一歩置く。",
      },
    },
  },
};

export function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories[slug as keyof typeof stories];

  if (!story) {
    notFound();
  }

  const storyKeys = Object.keys(stories);
  const currentIndex = storyKeys.indexOf(slug);
  const prevSlug = currentIndex > 0 ? storyKeys[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < storyKeys.length - 1 ? storyKeys[currentIndex + 1] : null;

  return (
    <PageLayout currentPage="story">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center justify-between">
          <Link
            href="/story"
            className="font-sans text-sm hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            ← 物語一覧に戻る
          </Link>
          <StoryGuideToggle storyId={slug} />
        </nav>

        {/* Kamishibai UI */}
        <KamishibaiReader
          storyId={slug}
          title={story.title}
          intro={story.content.introduction}
          storyItems={story.content.story.items}
          reflectionItems={story.content.reflection.items}
          practiceText={story.content.practice.content}
          wisdom={story.content.wisdom.content}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-16">
          {prevSlug ? (
            <Link
              href={`/story/${prevSlug}`}
              className="flex items-center space-x-2 font-sans hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{stories[prevSlug as keyof typeof stories].title}</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextSlug && (
            <Link
              href={`/story/${nextSlug}`}
              className="flex items-center space-x-2 font-sans hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-accent)" }}
            >
              <span>{stories[nextSlug as keyof typeof stories].title}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
