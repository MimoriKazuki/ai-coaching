import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI内製化支援プログラム | LandBridge - AIコーチングで社内開発チーム構築',
  description: 'LandBridgeのAI内製化支援プログラムで、御社の非エンジニアがわずか3ヶ月でAI開発者に。Claude・ChatGPT・Cursorを活用し、開発コスト99%削減、期間94%短縮を実現。月30万円から始められる実践的AIコーチング。',
  keywords: 'AI内製化,AI開発支援,AIコーチング,Claude Code,ChatGPT,Cursor,AI活用,社内開発,DX推進,デジタル変革,プログラミング学習,企業研修,LandBridge,ランドブリッジ',
  openGraph: {
    title: 'AI内製化支援プログラム | LandBridge',
    description: '非エンジニアが3ヶ月でAI開発者に。開発コスト99%削減を実現するAIコーチング',
    url: 'https://landbridge.jp',
    siteName: 'LandBridge',
    images: [
      {
        url: 'https://landbridge.jp/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LandBridge AI内製化支援プログラム',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI内製化支援プログラム | LandBridge',
    description: '非エンジニアが3ヶ月でAI開発者に。開発コスト99%削減を実現',
    images: ['https://landbridge.jp/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://landbridge.jp',
  },
  authors: [{ name: 'LandBridge' }],
  generator: 'Next.js',
  applicationName: 'LandBridge AI内製化支援',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}