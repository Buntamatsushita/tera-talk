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
