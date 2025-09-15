import { notFound } from "next/navigation";
import ClientChatPage from "@/app/chat/components/ClientChatPage";
import { monks } from "@/app/chat/monks";

export function generateStaticParams() {
  return Object.keys(monks).map((monk) => ({ monk }));
}

export default function Page({ params }: { params: { monk: string } }) {
  const monk = monks[params.monk as keyof typeof monks];
  if (!monk) {
    notFound();
  }
  return <ClientChatPage monk={monk} monkKey={params.monk} />;
}
