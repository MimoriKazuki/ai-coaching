'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WhyUsSection = () => {
  const strengths = [
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      title: '実践者だから分かる本質',
      description: '机上の空論ではなく、実際に自社プロダクトを1000万円の開発費を1ヶ月で実現した実体験に基づくノウハウを提供します。',
      points: [
        '自社で1000万円の開発を1ヶ月で実現',
        '机上の空論ではない実体験'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      title: '最新AI情報への即応力',
      description: 'AIの進化は日進月歩。新機能は24時間以内にキャッチし、1週間以内に貴社の実務に実装する体制を構築します。',
      points: [
        '24時間以内に新機能キャッチ',
        '1週間以内に貴社へ実装'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      title: '伴走型の人材育成',
      description: '外注ではなく内製化を目指します。1年後には貴社が自走できる組織に変革し、永続的な競争優位を確立します。',
      points: [
        '外注ではなく内製化支援',
        '1年後には自走可能に'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          なぜLandBridgeなのか
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="text-center p-10 bg-gradient-to-b from-gray-50 to-white rounded-3xl transition-all duration-300 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, borderColor: '#3b82f6' }}
              style={{ border: '2px solid transparent' }}
            >
              <div className="relative w-full h-48 mb-8 overflow-hidden rounded-2xl shadow-xl group-hover:scale-105 transition-transform">
                <Image
                  src={strength.image}
                  alt={strength.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {strength.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {strength.description}
              </p>
              
              <ul className="text-left space-y-3">
                {strength.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="pb-3 border-b border-gray-200 text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection