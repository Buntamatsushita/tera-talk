import { notFound } from "next/navigation";
import Link from "next/link";
import { monks, MonkKey } from "@/app/chat/monks";
import Image from "next/image";

export function generateStaticParams() {
  return Object.keys(monks).map((monk) => ({ monk }));
}

export default function SummaryPage({ params }: { params: { monk: MonkKey } }) {
  const monk = monks[params.monk];
  if (!monk) notFound();

  const summary: { items: string[]; reflection: string } = {
    items: [],
    reflection: "",
  };
  if (typeof window !== "undefined") {
    try {
      const raw = window.sessionStorage.getItem("tt:chat:" + params.monk);
      if (raw) {
        const data = JSON.parse(raw) as { user: string[] };
        summary.items = data.user.slice(-3);
      }
    } catch {}
  }

  const teachingByMonk: Record<string, string> = {
    釈迦: "四諦の観点から、自分の苦と原因を見つめ、手放す一歩を。",
    空海: "言葉・意図・行為をそろえ、短い真言を三呼吸となえましょう。",
    道元: "ただ坐る。判断せず、今この瞬間に身心を委ねてください。",
  };

  const advice =
    teachingByMonk[monk.name] ?? "静かに息を感じ、今を生きる選択を。";

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-base-bg)" }}
    >
      <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="flex items-center justify-between">
          <Link
            href={`/chat/${params.monk}`}
            className="hover:opacity-80"
            style={{ color: "var(--color-text-primary)" }}
          >
            戻る
          </Link>
          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r ${monk.color}`}
            >
              <Image
                src={monk.image}
                alt={`${monk.name}のアイコン`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1
                className="text-lg font-serif font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {monk.name}
              </h1>
              <p
                className="text-xs font-sans opacity-70"
                style={{ color: "var(--color-text-primary)" }}
              >
                {monk.title}
              </p>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <section className="card">
            <h2
              className="text-base sm:text-lg font-serif font-semibold mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              直近の気づき
            </h2>
            <ul
              className="list-disc pl-5 space-y-2 text-sm sm:text-base font-sans"
              style={{ color: "var(--color-text-primary)" }}
            >
              {summary.items.length === 0 ? (
                <li>
                  まだ要約できる内容がありません。数回やり取りしてから再度開いてください。
                </li>
              ) : (
                summary.items.map((s, i) => <li key={i}>{s}</li>)
              )}
            </ul>
          </section>

          <section className="card">
            <h2
              className="text-base sm:text-lg font-serif font-semibold mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              教え
            </h2>
            <p
              className="text-sm sm:text-base font-sans"
              style={{ color: "var(--color-text-primary)" }}
            >
              {advice}
            </p>
          </section>

          <section className="card">
            <h2
              className="text-base sm:text-lg font-serif font-semibold mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              次の一歩
            </h2>
            <div
              className="space-y-2 text-sm sm:text-base font-sans"
              style={{ color: "var(--color-text-primary)" }}
            >
              <p>・今日の実践を一つだけ決める（3分でできること）。</p>
              <p>・もう一度、同じテーマを深める質問を投げてみる。</p>
              <p>・気づきが変化したら、改めて言語化してみる。</p>
            </div>
          </section>

          <div className="flex items-center justify-between">
            <Link
              href={`/chat/${params.monk}`}
              className="btn-primary px-4 py-2"
            >
              続ける
            </Link>
            <Link
              href={`/chat`}
              className="px-4 py-2 border rounded-md"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              僧を選び直す
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
