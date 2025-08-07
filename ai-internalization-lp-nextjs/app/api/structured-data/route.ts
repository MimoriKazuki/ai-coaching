import { NextResponse } from 'next/server'

export async function GET() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://landbridge.jp/#organization",
        "name": "LandBridge",
        "url": "https://landbridge.jp",
        "logo": {
          "@type": "ImageObject",
          "url": "https://landbridge.jp/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "AI内製化支援プログラムを提供する企業研修サービス",
        "foundingDate": "2024",
        "areaServed": "JP",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 35.6762,
            "longitude": 139.6503
          },
          "geoRadius": "1000"
        }
      },
      {
        "@type": "Service",
        "@id": "https://landbridge.jp/#service",
        "name": "AI内製化支援プログラム",
        "serviceType": "企業研修・コンサルティング",
        "provider": {
          "@id": "https://landbridge.jp/#organization"
        },
        "description": "Claude、ChatGPT、Cursorを活用した社内AI開発チーム構築支援",
        "offers": [
          {
            "@type": "Offer",
            "name": "ライトプラン",
            "price": "300000",
            "priceCurrency": "JPY",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "300000",
              "priceCurrency": "JPY",
              "unitText": "月"
            }
          },
          {
            "@type": "Offer",
            "name": "スタンダードプラン",
            "price": "400000",
            "priceCurrency": "JPY",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "400000",
              "priceCurrency": "JPY",
              "unitText": "月"
            }
          },
          {
            "@type": "Offer",
            "name": "プレミアムプラン",
            "price": "700000",
            "priceCurrency": "JPY",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "700000",
              "priceCurrency": "JPY",
              "unitText": "月"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "本当にエンジニア経験がなくても大丈夫ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、全く問題ありません。実際に受講者の8割以上が非エンジニアです。最新のAIツールを使えば、プログラミング知識がなくても直感的にシステム開発が可能です。"
            }
          },
          {
            "@type": "Question",
            "name": "どのくらいの期間で成果が出ますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "多くの企業様が3ヶ月以内に最初のプロトタイプを完成させています。1年後には完全に自走できる開発チームが構築されます。"
            }
          },
          {
            "@type": "Question",
            "name": "費用対効果は本当に高いのでしょうか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "従来の開発コストと比較して平均99%のコスト削減を実現しています。月額30万円から始められ、外注費用の10分の1以下で無限の開発力を手に入れられます。"
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://landbridge.jp/#webpage",
        "url": "https://landbridge.jp",
        "name": "AI内製化支援プログラム | LandBridge - AIコーチングで社内開発チーム構築",
        "isPartOf": {
          "@id": "https://landbridge.jp/#website"
        },
        "about": {
          "@id": "https://landbridge.jp/#organization"
        },
        "description": "LandBridgeのAI内製化支援プログラムで、御社の非エンジニアがわずか3ヶ月でAI開発者に。開発コスト99%削減、期間94%短縮を実現。"
      }
    ]
  }

  return NextResponse.json(structuredData)
}