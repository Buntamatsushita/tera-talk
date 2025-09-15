import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";

const buddhistConcepts = {
  "shiku-hakku": {
    title: "四苦八苦",
    icon: "苦",
    description:
      "生・老・病・死の四苦と、愛別離苦・怨憎会苦・求不得苦・五蘊盛苦の四苦を合わせた八つの苦しみについて学びます。",
    content: {
      introduction:
        "四苦八苦は、人間が避けることのできない苦しみを表す仏教の基本的な教えです。釈迦は、人生の苦しみを理解することが悟りへの第一歩であると説きました。",
      fourSufferings: {
        title: "四苦（しっく）",
        description: "人間が避けることのできない基本的な四つの苦しみ",
        items: [
          {
            name: "生苦（しょうく）",
            meaning: "生きることの苦しみ",
            explanation:
              "生まれること自体が苦しみであるという考え方。人生には様々な困難や制約が伴います。",
          },
          {
            name: "老苦（ろうく）",
            meaning: "老いることの苦しみ",
            explanation:
              "年を重ねることで体力が衰え、記憶力が低下し、様々な制約が生じる苦しみ。",
          },
          {
            name: "病苦（びょうく）",
            meaning: "病気の苦しみ",
            explanation:
              "病気や怪我による肉体的・精神的な苦痛。健康を失うことの不安や恐怖。",
          },
          {
            name: "死苦（しく）",
            meaning: "死ぬことの苦しみ",
            explanation: "死への恐怖、愛する人との別れ、自分の死に対する不安。",
          },
        ],
      },
      fourAdditionalSufferings: {
        title: "四苦（しっく）",
        description: "四苦に加えて、人間関係や欲望から生じる四つの苦しみ",
        items: [
          {
            name: "愛別離苦（あいべつりく）",
            meaning: "愛する人と別れる苦しみ",
            explanation:
              "家族や友人、恋人など、大切な人との別れや死別による苦しみ。",
          },
          {
            name: "怨憎会苦（おんぞうえく）",
            meaning: "嫌いな人と会う苦しみ",
            explanation:
              "苦手な人や敵対する人と一緒にいなければならない時の苦しみ。",
          },
          {
            name: "求不得苦（ぐふとくく）",
            meaning: "欲しいものが得られない苦しみ",
            explanation:
              "望むものが手に入らない、目標が達成できない時の苦しみ。",
          },
          {
            name: "五蘊盛苦（ごうんじょうく）",
            meaning: "五蘊が盛んになる苦しみ",
            explanation:
              "色（身体）・受（感受）・想（表象）・行（意志）・識（認識）の五つの要素が激しく活動することによる苦しみ。",
          },
        ],
      },
      wisdom: {
        title: "四苦八苦から学ぶ智慧",
        content:
          "四苦八苦を理解することで、私たちは人生の現実を受け入れ、苦しみに支配されない生き方を学ぶことができます。苦しみを避けるのではなく、それと向き合い、乗り越える方法を見つけることが大切です。",
      },
    },
  },
  "shogyo-mujo": {
    title: "諸行無常",
    icon: "無",
    description:
      "すべてのものは常に変化し続け、永遠に変わらないものはないという仏教の基本的な教えです。",
    content: {
      introduction:
        "諸行無常は、この世のすべての現象は常に変化し続け、永遠に変わらないものは何もないという仏教の根本的な教えです。この理解は、執着を手放し、心の平安を得るための重要な智慧です。",
      meaning: {
        title: "諸行無常の意味",
        explanation:
          "「諸行」はすべての現象や存在を指し、「無常」は常に変化し続けることを意味します。この教えは、私たちが執着しているものも、やがては変化し、消えていくことを教えてくれます。",
      },
      examples: {
        title: "無常の例",
        items: [
          "季節の移ろい：春の桜も夏の緑も、秋の紅葉も冬の雪も、すべて変化し続けます",
          "人の一生：生まれた赤ちゃんも、やがて成長し、老い、そして死を迎えます",
          "感情の変化：喜びも悲しみも、怒りも愛も、すべて一時的なものです",
          "物質の変化：建物も朽ち、山も削られ、川も流れを変えます",
        ],
      },
      wisdom: {
        title: "無常から学ぶ智慧",
        content:
          "無常を理解することで、私たちは変化を恐れるのではなく、受け入れることができます。執着を手放し、今この瞬間を大切に生きることができるようになります。",
      },
    },
  },
  "shoho-muga": {
    title: "諸法無我",
    icon: "我",
    description:
      "すべての現象には固定された実体がなく、相互に依存し合って存在しているという教えです。",
    content: {
      introduction:
        "諸法無我は、この世のすべての現象には固定された実体（我）がなく、相互に依存し合って存在しているという仏教の重要な教えです。",
      meaning: {
        title: "諸法無我の意味",
        explanation:
          "「諸法」はすべての現象を指し、「無我」は固定された実体がないことを意味します。私たちが「私」と思っているものも、実は様々な要素が集まってできた一時的な存在に過ぎません。",
      },
      examples: {
        title: "無我の例",
        items: [
          "身体：細胞が集まってできたもので、常に新陳代謝を繰り返しています",
          "心：様々な経験や記憶、感情が組み合わさって形成されています",
          "物：原子や分子が集まってできたもので、常に変化しています",
          "関係：人と人との関係も、相互の影響によって形作られています",
        ],
      },
      wisdom: {
        title: "無我から学ぶ智慧",
        content:
          "無我を理解することで、私たちは自己中心的な考えから解放され、他者とのつながりを大切にできるようになります。また、変化を恐れず、柔軟に生きることができます。",
      },
    },
  },
  "nehan-jakujo": {
    title: "涅槃寂静",
    icon: "静",
    description: "煩悩を滅した安らぎの境地、悟りの状態について学びます。",
    content: {
      introduction:
        "涅槃寂静は、煩悩を滅した安らぎの境地、つまり悟りの状態を表す仏教の重要な概念です。これは、苦しみから完全に解放された理想的な状態です。",
      meaning: {
        title: "涅槃寂静の意味",
        explanation:
          "「涅槃」は煩悩の火が消えた状態を意味し、「寂静」は静寂で安らかな状態を表します。これは、執着や怒り、無知などの煩悩から解放され、心が完全に静まった状態です。",
      },
      characteristics: {
        title: "涅槃の特徴",
        items: [
          "苦しみの完全な消滅：四苦八苦から解放された状態",
          "執着の消滅：物事に執着せず、心が自由な状態",
          "智慧の完成：真実を正しく理解した状態",
          "慈悲の実践：他者への深い思いやりと慈愛",
        ],
      },
      wisdom: {
        title: "涅槃寂静から学ぶ智慧",
        content:
          "涅槃寂静は理想的な状態ですが、私たちも日常の中で、執着を手放し、心を静めることで、この境地に近づくことができます。瞑想や正しい行いを通じて、心の平安を育むことが大切です。",
      },
    },
  },
  engi: {
    title: "縁起の法",
    icon: "縁",
    description:
      "すべての現象は原因と条件によって生じ、相互に関連し合っているという仏教の根本原理です。",
    content: {
      introduction:
        "縁起の法は、この世のすべての現象は原因と条件によって生じ、相互に関連し合っているという仏教の根本原理です。これは、釈迦が悟りを開いた時に理解した最も重要な教えの一つです。",
      meaning: {
        title: "縁起の意味",
        explanation:
          "「縁起」は「縁によって起こる」という意味です。すべての現象は、それ自体に実体があるのではなく、様々な原因と条件が組み合わさって生じているという考え方です。",
      },
      formula: {
        title: "縁起の公式",
        explanation:
          "「これがあるとき、それがある。これが生ずるとき、それも生ずる。これがないとき、それもない。これが滅するとき、それも滅する。」",
        meaning:
          "すべての現象は相互に依存し合い、一つの現象が変化すれば、それに関連する他の現象も変化するという関係性を示しています。",
      },
      examples: {
        title: "縁起の例",
        items: [
          "植物の成長：種、土、水、日光、温度などの条件が揃って初めて成長します",
          "人間関係：お互いの理解、信頼、コミュニケーションなどが関係を築きます",
          "社会の形成：法律、文化、経済、教育など様々な要素が相互に影響し合います",
          "心の状態：思考、感情、環境、経験などが組み合わさって形成されます",
        ],
      },
      wisdom: {
        title: "縁起から学ぶ智慧",
        content:
          "縁起を理解することで、私たちは自分と他者、そして環境とのつながりを深く理解できます。自分の行動が他者に与える影響を考え、責任ある行動を取ることができるようになります。",
      },
    },
  },
  kuu: {
    title: "空（くう）の思想",
    icon: "空",
    description:
      "すべてのものは実体がなく、相互に依存し合って存在しているという大乗仏教の重要な思想です。",
    content: {
      introduction:
        "空の思想は、すべてのものは実体がなく、相互に依存し合って存在しているという大乗仏教の重要な思想です。これは、固定された実体を否定し、すべての現象の相互依存性を強調する教えです。",
      meaning: {
        title: "空の意味",
        explanation:
          "「空」は「からっぽ」という意味ではなく、「実体がない」という意味です。すべての現象は、それ自体に独立した実体があるのではなく、様々な条件や要素が組み合わさって一時的に存在しているという考え方です。",
      },
      characteristics: {
        title: "空の特徴",
        items: [
          "実体の否定：固定された実体は存在しない",
          "相互依存：すべての現象は相互に関連し合っている",
          "一時性：すべての現象は一時的な存在である",
          "相対性：すべての現象は相対的な関係性の中で存在する",
        ],
      },
      examples: {
        title: "空の例",
        items: [
          "雲：水蒸気が集まってできた一時的な形で、常に変化しています",
          "波：水と風の相互作用によって生じる一時的な現象です",
          "夢：様々な記憶や経験が組み合わさって生じる幻影です",
          "人生：様々な条件や縁が組み合わさって形成される一時的な存在です",
        ],
      },
      wisdom: {
        title: "空から学ぶ智慧",
        content:
          "空の思想を理解することで、私たちは執着を手放し、変化を受け入れることができます。また、他者とのつながりを大切にし、慈悲深い心を育むことができます。",
      },
    },
  },
};

export function generateStaticParams() {
  return Object.keys(buddhistConcepts).map((slug) => ({ slug }));
}

export default async function ConceptDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept =
    buddhistConcepts[slug as keyof typeof buddhistConcepts];

  if (!concept) {
    notFound();
  }

  const conceptKeys = Object.keys(buddhistConcepts);
  const currentIndex = conceptKeys.indexOf(slug);
  const prevSlug = currentIndex > 0 ? conceptKeys[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < conceptKeys.length - 1
      ? conceptKeys[currentIndex + 1]
      : null;

  return (
    <PageLayout currentPage="learn">
      <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/learn" className="font-sans text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--color-accent)' }}>
              ← 仏教思想一覧に戻る
            </Link>
          </nav>

          {/* Concept Header */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 mx-auto card" aria-hidden="true">
              <span className="text-white font-bold text-4xl font-serif" style={{ color: 'white' }}>
                {concept.icon}
              </span>
            </div>
            <h2 className="heading-primary mb-4">
              {concept.title}
            </h2>
            <p className="body-text-lg max-w-3xl mx-auto">
              {concept.description}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="card fade-in">
              <h3 className="heading-secondary mb-4">はじめに</h3>
              <p className="body-text-lg">
                {concept.content.introduction}
              </p>
            </section>

            {/* Main Content Sections */}
            {Object.entries(concept.content)
              .filter(([key]) => key !== "introduction")
              .map(([key, content]) => (
                <section
                  key={key}
                  className="card fade-in"
                >
                  <h3 className="heading-secondary mb-4">
                    {typeof content === "object" && "title" in content
                      ? content.title
                      : key}
                  </h3>

                  {typeof content === "object" && "explanation" in content && (
                    <p className="body-text-lg mb-4">
                      {content.explanation}
                    </p>
                  )}

                  {typeof content === "object" && "items" in content && (
                    <div className="space-y-4">
                      {content.items.map(
                        (
                          item:
                            | string
                            | {
                                name: string;
                                meaning?: string;
                                explanation?: string;
                              },
                          index: number
                        ) => (
                          <div
                            key={index}
                            className="pl-5 border-l-4"
                            style={{ borderColor: 'var(--color-accent)' }}
                          >
                            <h4 className="heading-tertiary mb-2">
                              {typeof item === "string" ? item : item.name}
                            </h4>
                            {typeof item === "object" && item.meaning && (
                              <p className="body-text mb-2" style={{ color: 'var(--color-success)' }}>
                                {item.meaning}
                              </p>
                            )}
                            {typeof item === "object" && item.explanation && (
                              <p className="body-text">
                                {item.explanation}
                              </p>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {typeof content === "object" && "content" in content && (
                    <p className="body-text-lg">
                      {content.content}
                    </p>
                  )}

                  {typeof content === "object" && "meaning" in content && (
                    <p className="body-text-lg">
                      {content.meaning}
                    </p>
                  )}
                </section>
              ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-16">
            {prevSlug ? (
              <Link
                href={`/learn/${prevSlug}`}
                className="flex items-center space-x-2 font-sans hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-accent)' }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>
                  {
                    buddhistConcepts[prevSlug as keyof typeof buddhistConcepts]
                      .title
                  }
                </span>
              </Link>
            ) : (
              <div></div>
            )}

            {nextSlug && (
              <Link
                href={`/learn/${nextSlug}`}
                className="flex items-center space-x-2 font-sans hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-accent)' }}
              >
                <span>
                  {
                    buddhistConcepts[nextSlug as keyof typeof buddhistConcepts]
                      .title
                  }
                </span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
    </PageLayout>
  );
}
