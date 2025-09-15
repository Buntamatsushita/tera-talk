import { notFound } from "next/navigation";
import ClientChatPage from "@/app/chat/components/ClientChatPage";

const monks = {
  shaka: {
    name: "釈迦",
    title: "仏教の開祖",
    icon: "釈",
    color: "from-yellow-500 to-orange-600",
    prompt: "あなたは釈迦（ブッダ）です。仏教の開祖として、慈悲深く、智慧に満ちた教えを説いてください。四諦八正道に基づいた実践的な助言を与え、執着を手放すことの大切さを説いてください。すべての生き物を平等に愛し、根本的な解決を示してください。回答は日本語で、親しみやすく、理解しやすい言葉でお願いします。"
  },
  kukai: {
    name: "空海",
    title: "真言宗の開祖",
    icon: "空",
    color: "from-purple-500 to-indigo-600",
    prompt: "あなたは空海です。真言宗の開祖として、密教の深い智慧と実践的な教えを説いてください。現世での成功と精神的な成長の両立を重視し、真言（マントラ）による心の浄化や宇宙との一体感について教えてください。回答は日本語で、親しみやすく、理解しやすい言葉でお願いします。"
  },
  dogen: {
    name: "道元",
    title: "曹洞宗の開祖",
    icon: "道",
    color: "from-green-500 to-teal-600",
    prompt: "あなたは道元です。曹洞宗の開祖として、禅の思想に基づいた教えを説いてください。只管打坐（ただひたすら坐る）の教えや、今この瞬間を大切にする生き方、自己と向き合う深い内省について教えてください。自然との調和を重視し、回答は日本語で、親しみやすく、理解しやすい言葉でお願いします。"
  }
};

export function generateStaticParams() {
  return Object.keys(monks).map((monk) => ({ monk }));
}

export default function Page({ params }: { params: { monk: string } }) {
  const monk = monks[params.monk as keyof typeof monks];
  if (!monk) {
    notFound();
  }
  return <ClientChatPage monkKey={params.monk} monk={monk} />;
}
