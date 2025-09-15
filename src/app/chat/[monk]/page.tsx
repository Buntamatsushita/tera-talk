import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientChatPage from "@/app/chat/components/ClientChatPage";
import { monks } from "@/app/chat/monks";

export function generateStaticParams() {
  return Object.keys(monks).map((monk) => ({ monk }));
}

export default async function Page({ params }: { params: Promise<{ monk: string }> }) {
  const { monk: monkKey } = await params;
  const monk = monks[monkKey as keyof typeof monks];
  if (!monk) {
    notFound();
  }
  return <ClientChatPage monk={monk} monkKey={monkKey} />;
}

export async function generateMetadata(
  { params }: { params: Promise<{ monk: string }> }
): Promise<Metadata> {
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
