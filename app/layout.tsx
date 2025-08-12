import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-coaching.vercel.app'),
  title: 'AIコーチングプログラム | LANDBRIDGE - Claude Codeで最短2週間でAI先進企業へ',
  description: 'LANDBRIDGEのAIコーチングで、貴社を最短2週間でAI先進企業に変革。Claude Code・ChatGPT活用の実践的プログラムで、AI活用スキルを短期習得。経営者・エンジニア向けの個別最適化されたコーチングを提供。',
  keywords: 'AIコーチング,Claude Code,ChatGPT,AI活用,AI研修,企業向けAI教育,DX推進,AI導入支援,生成AI活用,プロンプトエンジニアリング,AI人材育成,LANDBRIDGE,ランドブリッジ',
  openGraph: {
    title: 'AIコーチングプログラム | LANDBRIDGE',
    description: 'Claude Codeを活用した実践的AIコーチングで、貴社を最短2週間でAI先進企業に変革',
    url: 'https://ai-coaching.vercel.app',
    siteName: 'LANDBRIDGE',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'LANDBRIDGE AIコーチングプログラム',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIコーチングプログラム | LANDBRIDGE',
    description: 'Claude Codeで最短2週間でAI先進企業へ変革',
    images: ['/twitter-image'],
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
    canonical: 'https://ai-coaching.vercel.app',
  },
  authors: [{ name: 'LANDBRIDGE' }],
  generator: 'Next.js',
  applicationName: 'LANDBRIDGE AIコーチング',
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
      <body className={`${notoSansJP.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}