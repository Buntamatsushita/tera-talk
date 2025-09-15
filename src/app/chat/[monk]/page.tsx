import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ClientChatPage from "@/app/chat/components/ClientChatPage";
import { monks } from "@/app/chat/monks";

export function generateStaticParams() {
  return Object.keys(monks).map((monk) => ({ monk }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ monk: string }>;
}) {
  const { monk: monkKey } = await params;
  const monk = monks[monkKey as keyof typeof monks];
  if (!monk) {
    notFound();
  }
  return (
    <>
      <ClientChatPage monk={monk} monkKey={monkKey} />
      {/* Under Construction Overlay */}
      <div
        className="fixed inset-0 z-50"
        aria-live="polite"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(251, 250, 247, 0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        />
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <div
            className="w-full max-w-xl rounded-2xl p-8 text-center shadow-xl"
            style={{
              backgroundColor: "var(--color-base-bg)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 className="heading-secondary mb-2">
              AI僧侶との対話は準備中です
            </h2>
            <p className="body-text mb-6">
              ただいま工事中のため、一時的にご利用いただけません。近日公開予定です。
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/chat" className="btn-secondary-soft">
                一覧へ戻る
              </Link>
              <span
                className="font-sans text-sm"
                style={{ color: "var(--color-text-primary)" }}
              >
                しばらくお待ちください
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ monk: string }>;
}): Promise<Metadata> {
  const { monk: monkKey } = await params;
  const monk = monks[monkKey as keyof typeof monks];
  if (!monk) return {};
  const title = `${monk.name}に相談 | Tera Talk`;
  const description = `${monk.title}（${monk.name}）の視点から助言を受けられます。心を整える対話を提供します。`;
  const path = `/chat/${monkKey}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: monk.image }] },
    twitter: { title, description, images: [monk.image] },
  };
}
