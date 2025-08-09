'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollButton from './ui/ScrollButton'
import StatsCard from './ui/StatsCard'
import SectionHeader from './ui/SectionHeader'

const HeroSection = () => {
  const stats = [
    { label: 'AI活用実績', value: '5年以上', detail: '豊富な導入経験' },
    { label: '専門講師', value: '10名+', detail: 'AI実務経験者のみ' },
    { label: '平均習得期間', value: '2週間', detail: '実務レベル到達まで' }
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <BackgroundImage />
      <MainContent stats={stats} />
    </section>
  )
}

const BackgroundImage = () => (
  <>
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=3870&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/90" />
    </div>
  </>
)

const MainContent = ({ stats }: { stats: Array<{ label: string; value: string; detail: string }> }) => (
  <div className="relative z-20 container mx-auto px-6">
    <div className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroText />
          <HeroStats stats={stats} />
        </div>
      </div>
    </div>
  </div>
)

const HeroText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <SectionHeader
      tag="AI COACHING PROGRAM"
      title={
        <>
          <span className="block text-gray-500">
            AIを使いこなし
          </span>
          <span className="block mt-2 text-gray-500">
            企業が勝つ時代へ
          </span>
        </>
      }
      subtitle={
        <>
          Claude Codeを活用した実践的AIコーチングで
          <br />
          貴社を最短2週間でAI先進企業に変革
        </>
      }
    />
    
    <div className="mt-12 flex flex-col sm:flex-row gap-6">
      <ScrollButton targetId="contact" variant="primary">
        無料コンサルティングを予約
      </ScrollButton>
      <ScrollButton targetId="crisis" variant="secondary">
        導入事例を見る
      </ScrollButton>
    </div>
  </motion.div>
)

const HeroStats = ({ stats }: { stats: Array<{ label: string; value: string; detail: string }> }) => (
  <motion.div 
    className="relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="space-y-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-500 font-light tracking-wider">
        ※ 2024年実績データ
      </p>
    </div>
  </motion.div>
)

export default HeroSection