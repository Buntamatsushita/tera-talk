import Link from "next/link";
import { BookOpen, MessageCircle, Users, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";

export default function Home() {
  return (
    <PageLayout>
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="heading-primary mb-6 sm:mb-8 px-4">
          いつでも、どこでも、
          <br />
          <span style={{ color: 'var(--color-accent)' }}>
            ほとけの教えを
          </span>
        </h2>
        <p className="body-text-lg mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          仏教の普遍的な思想や教えを現代のテクノロジーを通じて分かりやすく提供し、
          AI僧侶への相談機能で、あなたの心の安らぎを見つけましょう。
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4" role="region" aria-label="主要機能">
          <Link href="/learn" className="group fade-in" aria-label="仏教思想を学ぶページへ移動">
            <Card className="group-hover:transform group-hover:scale-105 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 sm:mb-8 mx-auto" style={{ backgroundColor: 'var(--color-accent)' }} aria-hidden="true">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4 sm:mb-6 text-center">仏教思想を学ぶ</h3>
              <p className="body-text mb-6 sm:mb-8 text-center text-sm sm:text-base">
                四苦八苦、諸行無常、縁起の法など、仏教の基本的な教えを分かりやすく学べます。
              </p>
              <div className="flex items-center justify-center font-sans font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base" style={{ color: 'var(--color-accent)' }}>
                学習を始める
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" aria-hidden="true" />
              </div>
            </Card>
          </Link>

          <Link href="/chat" className="group fade-in" style={{ animationDelay: '0.1s' }} aria-label="AI僧侶に相談ページへ移動">
            <Card className="group-hover:transform group-hover:scale-105 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 sm:mb-8 mx-auto" style={{ backgroundColor: 'var(--color-success)' }} aria-hidden="true">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4 sm:mb-6 text-center">AI僧侶に相談</h3>
              <p className="body-text mb-6 sm:mb-8 text-center text-sm sm:text-base">
                釈迦、空海、道元など、著名な僧侶を模したAIに悩みを相談できます。
              </p>
              <div className="flex items-center justify-center font-sans font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base" style={{ color: 'var(--color-success)' }}>
                相談を始める
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" aria-hidden="true" />
              </div>
            </Card>
          </Link>

          <Link href="/sects" className="group fade-in sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }} aria-label="日本仏教宗派ページへ移動">
            <Card className="group-hover:transform group-hover:scale-105 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 sm:mb-8 mx-auto" style={{ backgroundColor: 'var(--color-warning)' }} aria-hidden="true">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="heading-tertiary mb-4 sm:mb-6 text-center">日本仏教宗派</h3>
              <p className="body-text mb-6 sm:mb-8 text-center text-sm sm:text-base">
                天台宗、真言宗、浄土宗など、日本の主要な仏教宗派について学べます。
              </p>
              <div className="flex items-center justify-center font-sans font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base" style={{ color: 'var(--color-warning)' }}>
                宗派を学ぶ
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" aria-hidden="true" />
              </div>
            </Card>
          </Link>

          <Link href="/india" className="group fade-in" style={{ animationDelay: '0.3s' }} aria-label="インド仏教ページへ移動">
            <Card className="group-hover:transform group-hover:scale-105 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 sm:mb-8 mx-auto" style={{ backgroundColor: 'var(--color-accent)' }} aria-hidden="true">
                <span className="text-white font-bold">印</span>
              </div>
              <h3 className="heading-tertiary mb-4 sm:mb-6 text-center">インド仏教の基礎</h3>
              <p className="body-text mb-6 sm:mb-8 text-center text-sm sm:text-base">
                仏教発祥の地インドにおける初期仏教から大乗・密教、日本とのつながりを概観。
              </p>
              <div className="flex items-center justify-center font-sans font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base" style={{ color: 'var(--color-accent)' }}>
                概要を読む
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" aria-hidden="true" />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
