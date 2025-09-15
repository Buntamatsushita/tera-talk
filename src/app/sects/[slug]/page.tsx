import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, MapPin, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";

const sects = {
  tendai: {
    name: "天台宗",
    founder: "最澄（伝教大師）",
    period: "平安時代初期（804年）",
    icon: "天",
    color: "from-blue-500 to-blue-600",
    headquarters: "比叡山延暦寺",
    description: "法華経を根本経典とし、すべての仏教を統合する総合的な宗派です。",
    content: {
      introduction: "天台宗は、最澄（伝教大師）によって開かれた日本仏教の重要な宗派です。中国の天台宗の教えを日本に伝え、独自の発展を遂げました。法華経を根本経典とし、すべての仏教を統合する総合的な教えを特徴とします。",
      founder: {
        title: "開祖：最澄（伝教大師）",
        content: "最澄（767-822）は、平安時代初期の僧侶で、天台宗の開祖です。804年に遣唐使として中国に渡り、天台宗の教えを学んで日本に伝えました。比叡山に延暦寺を建立し、日本仏教の基盤を築きました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "法華経",
            explanation: "天台宗の根本経典。すべての衆生が仏になれるという一乗思想を説く。"
          },
          {
            name: "止観（しがん）",
            explanation: "止（心を静める）と観（智慧を深める）の修行法。"
          },
          {
            name: "一念三千",
            explanation: "一瞬の心に三千の世界が含まれているという教え。"
          },
          {
            name: "円頓止観",
            explanation: "漸次的な修行ではなく、一気に悟りに至る修行法。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "止観の修行：心を静め、智慧を深める",
          "法華経の読誦：根本経典を唱える",
          "懺悔：過去の罪を悔い改める",
          "回向：功徳を他者に振り向ける"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "天台宗は、日本仏教の基盤を築き、多くの宗派の母体となりました。比叡山は「日本仏教の母山」と呼ばれ、多くの高僧を輩出しています。また、日本の文化や学問にも大きな影響を与えました。"
      }
    }
  },
  shingon: {
    name: "真言宗",
    founder: "空海（弘法大師）",
    period: "平安時代初期（806年）",
    icon: "真",
    color: "from-purple-500 to-purple-600",
    headquarters: "高野山金剛峰寺",
    description: "密教の教えを基盤とし、真言（マントラ）と印を重視する宗派です。",
    content: {
      introduction: "真言宗は、空海（弘法大師）によって開かれた密教系の宗派です。中国の密教を日本に伝え、独自の密教体系を確立しました。真言（マントラ）と印を重視し、即身成仏を目指す教えを特徴とします。",
      founder: {
        title: "開祖：空海（弘法大師）",
        content: "空海（774-835）は、平安時代初期の僧侶で、真言宗の開祖です。804年に遣唐使として中国に渡り、密教を学んで日本に伝えました。高野山に金剛峰寺を建立し、日本密教の基盤を築きました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "即身成仏",
            explanation: "この身のままで仏になることができるという教え。"
          },
          {
            name: "三密加持",
            explanation: "身密（印）、口密（真言）、意密（観想）の三つの秘密。"
          },
          {
            name: "曼荼羅",
            explanation: "仏の世界を図像で表したもの。胎蔵界曼荼羅と金剛界曼荼羅。"
          },
          {
            name: "阿字観",
            explanation: "梵字の「阿」を観想する修行法。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "真言の唱誦：マントラを唱える",
          "印を結ぶ：手で仏の印相を作る",
          "観想：仏の姿を心に描く",
          "護摩：火による供養"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "真言宗は、日本の密教文化の基盤を築きました。高野山は「空海の聖地」として多くの参拝者を集めています。また、日本の芸術、文学、建築にも大きな影響を与えました。"
      }
    }
  },
  jodo: {
    name: "浄土宗",
    founder: "法然",
    period: "平安時代末期（1175年）",
    icon: "浄",
    color: "from-green-500 to-green-600",
    headquarters: "知恩院",
    description: "阿弥陀仏の本願力によって極楽浄土に往生することを説く宗派です。",
    content: {
      introduction: "浄土宗は、法然によって開かれた浄土信仰の宗派です。阿弥陀仏の本願力によって極楽浄土に往生することを説き、念仏（南無阿弥陀仏）を唱えることで救われるという教えを特徴とします。",
      founder: {
        title: "開祖：法然",
        content: "法然（1133-1212）は、平安時代末期から鎌倉時代初期の僧侶で、浄土宗の開祖です。比叡山で天台宗を学んだ後、専修念仏の教えを確立し、多くの人々に念仏の教えを広めました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "専修念仏",
            explanation: "念仏以外の修行は不要で、念仏のみで往生できるという教え。"
          },
          {
            name: "他力本願",
            explanation: "阿弥陀仏の本願力による救済。自分の力ではなく仏の力に頼る。"
          },
          {
            name: "悪人正機",
            explanation: "悪人こそが阿弥陀仏の救済の対象であるという教え。"
          },
          {
            name: "選択本願",
            explanation: "阿弥陀仏が念仏を選択して本願としたという教え。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "念仏：南無阿弥陀仏を唱える",
          "信心：阿弥陀仏への深い信頼",
          "回向：功徳を他者に振り向ける",
          "懺悔：過去の罪を悔い改める"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "浄土宗は、日本の浄土信仰の基盤を築き、多くの人々に救いの道を示しました。知恩院は「法然の聖地」として多くの参拝者を集めています。また、日本の文学や芸術にも大きな影響を与えました。"
      }
    }
  },
  "jodo-shin": {
    name: "浄土真宗",
    founder: "親鸞",
    period: "鎌倉時代（1224年）",
    icon: "真",
    color: "from-orange-500 to-orange-600",
    headquarters: "本願寺",
    description: "浄土宗から派生し、阿弥陀仏の絶対他力による救済を説く宗派です。",
    content: {
      introduction: "浄土真宗は、親鸞によって開かれた浄土信仰の宗派です。浄土宗から派生し、阿弥陀仏の絶対他力による救済を説きます。信心を重視し、僧侶と在家の区別をなくした教えを特徴とします。",
      founder: {
        title: "開祖：親鸞",
        content: "親鸞（1173-1262）は、鎌倉時代の僧侶で、浄土真宗の開祖です。法然の弟子として浄土宗を学んだ後、独自の教えを確立しました。僧侶と在家の区別をなくし、すべての人が平等に救われるという教えを説きました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "絶対他力",
            explanation: "阿弥陀仏の絶対的な力による救済。自分の力は一切不要。"
          },
          {
            name: "信心正因",
            explanation: "信心こそが往生の正しい因であるという教え。"
          },
          {
            name: "悪人正機",
            explanation: "悪人こそが阿弥陀仏の救済の対象であるという教え。"
          },
          {
            name: "僧俗一如",
            explanation: "僧侶と在家の区別はなく、すべての人が平等に救われる。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "信心：阿弥陀仏への深い信頼",
          "念仏：南無阿弥陀仏を唱える",
          "聞法：教えを聞いて理解する",
          "報恩：阿弥陀仏の恩に報いる"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "浄土真宗は、日本の浄土信仰をさらに発展させ、多くの人々に救いの道を示しました。本願寺は「親鸞の聖地」として多くの参拝者を集めています。また、日本の社会や文化にも大きな影響を与えました。"
      }
    }
  },
  rinzai: {
    name: "臨済宗",
    founder: "栄西",
    period: "鎌倉時代（1191年）",
    icon: "臨",
    color: "from-red-500 to-red-600",
    headquarters: "建仁寺",
    description: "禅宗の一派で、公案（こうあん）による修行を重視する宗派です。",
    content: {
      introduction: "臨済宗は、栄西によって開かれた禅宗の一派です。中国の臨済宗の教えを日本に伝え、公案（こうあん）による修行を重視します。看話禅（かんなぜん）と呼ばれる修行法を特徴とします。",
      founder: {
        title: "開祖：栄西",
        content: "栄西（1141-1215）は、鎌倉時代の僧侶で、臨済宗の開祖です。中国に渡って臨済宗の教えを学び、日本に伝えました。建仁寺を建立し、日本禅宗の基盤を築きました。また、茶の文化も日本に伝えました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "公案",
            explanation: "禅の修行で用いられる問題。論理では解決できない問題を考える。"
          },
          {
            name: "看話禅",
            explanation: "公案を見つめ、話し合うことで悟りに至る修行法。"
          },
          {
            name: "頓悟",
            explanation: "一気に悟りに至るという教え。"
          },
          {
            name: "無位真人",
            explanation: "地位や立場を超えた真の人間性。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "坐禅：静かに座って心を整える",
          "公案：禅の問題を考える",
          "面接：師匠との対話",
          "作務：日常の労働"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "臨済宗は、日本の禅文化の基盤を築きました。建仁寺は「栄西の聖地」として多くの参拝者を集めています。また、茶道、書道、庭園などの日本文化にも大きな影響を与えました。"
      }
    }
  },
  soto: {
    name: "曹洞宗",
    founder: "道元",
    period: "鎌倉時代（1227年）",
    icon: "曹",
    color: "from-teal-500 to-teal-600",
    headquarters: "永平寺",
    description: "禅宗の一派で、只管打坐（ただひたすら坐る）を重視する宗派です。",
    content: {
      introduction: "曹洞宗は、道元によって開かれた禅宗の一派です。中国の曹洞宗の教えを日本に伝え、只管打坐（ただひたすら坐る）を重視します。黙照禅（もくしょうぜん）と呼ばれる修行法を特徴とします。",
      founder: {
        title: "開祖：道元",
        content: "道元（1200-1253）は、鎌倉時代の僧侶で、曹洞宗の開祖です。中国に渡って曹洞宗の教えを学び、日本に伝えました。永平寺を建立し、日本禅宗の基盤を築きました。『正法眼蔵』などの著作を残しました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "只管打坐",
            explanation: "ただひたすら坐る。坐禅そのものが悟りである。"
          },
          {
            name: "黙照禅",
            explanation: "静かに坐って心を照らす修行法。"
          },
          {
            name: "漸悟",
            explanation: "徐々に悟りに至るという教え。"
          },
          {
            name: "身心脱落",
            explanation: "身体と心の区別を超えた境地。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "坐禅：静かに座って心を整える",
          "只管打坐：ただひたすら坐る",
          "作務：日常の労働",
          "読経：経典を読む"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "曹洞宗は、日本の禅文化の基盤を築きました。永平寺は「道元の聖地」として多くの参拝者を集めています。また、日本の精神文化や生活様式にも大きな影響を与えました。"
      }
    }
  },
  nichiren: {
    name: "日蓮宗",
    founder: "日蓮",
    period: "鎌倉時代（1253年）",
    icon: "日",
    color: "from-yellow-500 to-yellow-600",
    headquarters: "久遠寺",
    description: "法華経を唯一の正法とし、題目（南無妙法蓮華経）を唱える宗派です。",
    content: {
      introduction: "日蓮宗は、日蓮によって開かれた法華経信仰の宗派です。法華経を唯一の正法とし、題目（南無妙法蓮華経）を唱えることで救われるという教えを特徴とします。立正安国を目指す教えを説きます。",
      founder: {
        title: "開祖：日蓮",
        content: "日蓮（1222-1282）は、鎌倉時代の僧侶で、日蓮宗の開祖です。法華経を唯一の正法として確立し、題目を唱えることで救われるという教えを説きました。『立正安国論』などの著作を残しました。"
      },
      teachings: {
        title: "主要な教え",
        items: [
          {
            name: "法華経至上",
            explanation: "法華経が唯一の正法であるという教え。"
          },
          {
            name: "題目",
            explanation: "南無妙法蓮華経を唱えることで救われる。"
          },
          {
            name: "立正安国",
            explanation: "正法を立てて国を安らかにするという教え。"
          },
          {
            name: "折伏",
            explanation: "誤った教えを正すこと。"
          }
        ]
      },
      practices: {
        title: "修行法",
        items: [
          "題目：南無妙法蓮華経を唱える",
          "読経：法華経を読む",
          "折伏：正法を広める",
          "回向：功徳を他者に振り向ける"
        ]
      },
      influence: {
        title: "日本への影響",
        content: "日蓮宗は、日本の法華経信仰の基盤を築きました。久遠寺は「日蓮の聖地」として多くの参拝者を集めています。また、日本の社会や文化にも大きな影響を与えました。"
      }
    }
  }
};

export function generateStaticParams() {
  return Object.keys(sects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sect = sects[slug as keyof typeof sects];
  if (!sect) {
    return { title: "宗派 | Tera Talk" };
  }
  return {
    title: `${sect.name} | 日本仏教宗派 | Tera Talk`,
    description: sect.description,
  };
}

export default async function SectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sect = sects[slug as keyof typeof sects];
  
  if (!sect) {
    notFound();
  }

  const sectKeys = Object.keys(sects);
  const currentIndex = sectKeys.indexOf(slug);
  const prevSlug = currentIndex > 0 ? sectKeys[currentIndex - 1] : null;
  const nextSlug = currentIndex < sectKeys.length - 1 ? sectKeys[currentIndex + 1] : null;

  return (
    <PageLayout currentPage="sects">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/sects" className="font-sans" style={{ color: 'var(--color-accent)' }}>
            ← 宗派一覧に戻る
          </Link>
        </nav>

        {/* Sect Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'var(--color-accent)' }}>
            <span className="text-white font-bold text-4xl">{sect.icon}</span>
          </div>
          <h2 className="heading-primary mb-4">
            {sect.name}
          </h2>
          <p className="body-text-lg mb-6">
            {sect.description}
          </p>

          {/* Sect Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              <span className="body-text">{sect.period}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              <span className="body-text">{sect.founder}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              <span className="body-text">{sect.headquarters}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <h3 className="heading-secondary mb-4">はじめに</h3>
            <p className="body-text">
              {sect.content.introduction}
            </p>
          </Card>

          {/* Founder */}
          <Card>
            <h3 className="heading-secondary mb-4">
              {sect.content.founder.title}
            </h3>
            <p className="body-text">
              {sect.content.founder.content}
            </p>
          </Card>

          {/* Teachings */}
          <Card>
            <h3 className="heading-secondary mb-4">
              {sect.content.teachings.title}
            </h3>
            <div className="space-y-4">
              {sect.content.teachings.items.map((item, index) => (
                <div key={index} className="pl-6" style={{ borderLeft: `4px solid var(--color-accent)` }}>
                  <h4 className="heading-tertiary mb-1">
                    {item.name}
                  </h4>
                  <p className="body-text">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Practices */}
          <Card>
            <h3 className="heading-secondary mb-4">
              {sect.content.practices.title}
            </h3>
            <ul className="space-y-3">
              {sect.content.practices.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="mt-1" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span className="body-text">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Influence */}
          <Card>
            <h3 className="heading-secondary mb-4">
              {sect.content.influence.title}
            </h3>
            <p className="body-text">
              {sect.content.influence.content}
            </p>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          {prevSlug ? (
            <Link 
              href={`/sects/${prevSlug}`}
              className="font-sans flex items-center space-x-2"
              style={{ color: 'var(--color-accent)' }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{sects[prevSlug as keyof typeof sects].name}</span>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextSlug && (
            <Link 
              href={`/sects/${nextSlug}`}
              className="font-sans flex items-center space-x-2"
              style={{ color: 'var(--color-accent)' }}
            >
              <span>{sects[nextSlug as keyof typeof sects].name}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
