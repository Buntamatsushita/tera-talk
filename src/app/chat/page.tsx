import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import { monks as monkDefs } from "@/app/chat/monks";

const monks = [
  {
    slug: "shaka",
    name: monkDefs.shaka.name,
    title: monkDefs.shaka.title,
    description: "普遍的かつ根本的な教えに基づいた回答をします。人生の根本的な悩みや、仏教の基本的な教えについて相談できます。",
    image: monkDefs.shaka.image,
    characteristics: [
      "慈悲深く、すべての生き物を平等に愛する",
      "智慧に満ちた教えで根本的な解決を示す",
      "四諦八正道に基づいた実践的な助言",
      "執着を手放すことの大切さを説く"
    ]
  },
  {
    slug: "kukai",
    name: monkDefs.kukai.name,
    title: monkDefs.kukai.title,
    description: "密教の視点から、現実世界での実践的な助言を与えます。修行や瞑想、現世での成功について相談できます。",
    image: monkDefs.kukai.image,
    characteristics: [
      "密教の深い智慧と実践的な教え",
      "現世での成功と精神的な成長の両立",
      "真言（マントラ）による心の浄化",
      "宇宙との一体感を重視する"
    ]
  },
  {
    slug: "dogen",
    name: monkDefs.dogen.name,
    title: monkDefs.dogen.title,
    description: "禅の思想に基づき、自己との向き合い方を諭します。瞑想、坐禅、自己探求について相談できます。",
    image: monkDefs.dogen.image,
    characteristics: [
      "只管打坐（ただひたすら坐る）の教え",
      "今この瞬間を大切にする生き方",
      "自己と向き合う深い内省",
      "自然との調和を重視する"
    ]
  }
];

export default function ChatPage() {
  return (
    <PageLayout currentPage="chat">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-6">
            AI僧侶に相談
          </h2>
          <p className="body-text-lg leading-relaxed">
            著名な僧侶を模したAIに、あなたの悩みや疑問を相談できます。
            <br />
            それぞれの僧侶は異なる視点と教えを持っています。
          </p>
        </div>

        {/* Monk Selection */}
        <div className="space-y-8">
          {monks.map((monk) => (
            <Link key={monk.slug} href={`/chat/${monk.slug}`} className="group block">
              <Card className="group-hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={monk.image} alt={`${monk.name}のアイコン`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="heading-secondary">
                        {monk.name}
                      </h3>
                      <span className="body-text-lg">
                        {monk.title}
                      </span>
                    </div>
                    <p className="body-text mb-6 leading-relaxed">
                      {monk.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>特徴</h4>
                      <ul className="space-y-2">
                        {monk.characteristics.map((characteristic, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="mt-1" style={{ color: 'var(--color-success)' }}>•</span>
                            <span className="body-text text-sm">
                              {characteristic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform" style={{ color: 'var(--color-success)' }}>
                      相談を始める
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Consultation Tips */}
        <Card className="mt-16">
          <div className="flex items-center mb-6">
            <MessageCircle className="w-8 h-8 mr-3" style={{ color: 'var(--color-success)' }} />
            <h3 className="heading-secondary">相談のコツ</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>1. 具体的に相談する</h4>
              <p className="body-text">
                悩みや疑問を具体的に説明することで、より適切な助言を得ることができます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>2. 僧侶を選ぶ</h4>
              <p className="body-text">
                それぞれの僧侶には異なる特徴があります。相談内容に応じて適切な僧侶を選びましょう。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>3. 継続的に相談する</h4>
              <p className="body-text">
                一度の相談で解決しない場合も、継続的に相談することで理解が深まります。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>4. 実践を心がける</h4>
              <p className="body-text">
                得られた助言を実際の生活で実践することで、より深い理解と変化を得られます。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
