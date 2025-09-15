import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";

const buddhistConcepts = [
  {
    slug: "shiku-hakku",
    title: "四苦八苦",
    description: "生・老・病・死の四苦と、愛別離苦・怨憎会苦・求不得苦・五蘊盛苦の四苦を合わせた八つの苦しみについて学びます。",
    icon: "苦"
  },
  {
    slug: "shogyo-mujo",
    title: "諸行無常",
    description: "すべてのものは常に変化し続け、永遠に変わらないものはないという仏教の基本的な教えです。",
    icon: "無"
  },
  {
    slug: "shoho-muga",
    title: "諸法無我",
    description: "すべての現象には固定された実体がなく、相互に依存し合って存在しているという教えです。",
    icon: "我"
  },
  {
    slug: "nehan-jakujo",
    title: "涅槃寂静",
    description: "煩悩を滅した安らぎの境地、悟りの状態について学びます。",
    icon: "静"
  },
  {
    slug: "engi",
    title: "縁起の法",
    description: "すべての現象は原因と条件によって生じ、相互に関連し合っているという仏教の根本原理です。",
    icon: "縁"
  },
  {
    slug: "kuu",
    title: "空（くう）の思想",
    description: "すべてのものは実体がなく、相互に依存し合って存在しているという大乗仏教の重要な思想です。",
    icon: "空"
  }
];

export default function LearnPage() {
  return (
    <PageLayout currentPage="learn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-6">
            仏教思想を学ぶ
          </h2>
          <p className="body-text-lg leading-relaxed">
            仏教の基本的な教えをテーマ別に分かりやすく学びましょう。
            <br />
            各テーマについて、図解や平易な文章で解説しています。
          </p>
        </div>

        {/* Concept Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buddhistConcepts.map((concept) => (
            <Link key={concept.slug} href={`/learn/${concept.slug}`} className="group">
              <Card className="group-hover:scale-105 h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <span className="text-white font-bold text-2xl">{concept.icon}</span>
                </div>
                <h3 className="heading-tertiary mb-4">
                  {concept.title}
                </h3>
                <p className="body-text mb-6 leading-relaxed">
                  {concept.description}
                </p>
                <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform" style={{ color: 'var(--color-accent)' }}>
                  詳しく学ぶ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Study Tips */}
        <Card className="mt-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 mr-3" style={{ color: 'var(--color-accent)' }} />
            <h3 className="heading-secondary">学習のコツ</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>1. 順序立てて学ぶ</h4>
              <p className="body-text">
                四苦八苦から始めて、諸行無常、諸法無我、涅槃寂静の順で学ぶと理解しやすくなります。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>2. 日常と関連付ける</h4>
              <p className="body-text">
                学んだ教えを日常生活の出来事と関連付けて考えることで、より深く理解できます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>3. 疑問を持ち続ける</h4>
              <p className="body-text">
                疑問に思ったことは、AI僧侶に相談して、より深い理解を得ることができます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>4. 繰り返し学ぶ</h4>
              <p className="body-text">
                一度で理解できなくても大丈夫。何度も読み返すことで、徐々に理解が深まります。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
