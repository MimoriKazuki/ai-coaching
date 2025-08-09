'use client'

import { motion } from 'framer-motion'

const WhyUsSection = () => {
  const strengths = [
    {
      number: '01',
      title: '実践者だから分かる本質',
      description: '机上の空論ではなく、実際に自社プロダクトを1000万円の開発費を1ヶ月で実現した実体験に基づくノウハウを提供します。',
      metrics: ['1000万円→1ヶ月', '実体験ベース']
    },
    {
      number: '02',
      title: '最新AI情報への即応力',
      description: 'AIの進化は日進月歩。新機能は24時間以内にキャッチし、1週間以内に貴社の実務に実装する体制を構築します。',
      metrics: ['24時間以内', '1週間で実装']
    },
    {
      number: '03',
      title: '伴走型の人材育成',
      description: '外注ではなく内製化を目指します。1年後には貴社が自走できる組織に変革し、永続的な競争優位を確立します。',
      metrics: ['内製化支援', '1年で自走']
    }
  ]

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              OUR APPROACH
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              選ばれる3つの理由
            </h2>
          </motion.div>

          {/* Strengths - Card layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full flex flex-col bg-white p-8 border border-gray-100">
                  {/* Large number at top */}
                  <div className="text-8xl font-thin text-gray-200 leading-none mb-6 select-none">
                    {strength.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {strength.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed mb-6 flex-1">
                    {strength.description}
                  </p>
                  
                  {/* Metrics as tags */}
                  <div className="flex flex-wrap gap-3">
                    {strength.metrics.map((metric, mIndex) => (
                      <span 
                        key={mIndex}
                        className="inline-block px-4 py-2 bg-gray-50 text-sm text-gray-700 font-light border"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-900 to-transparent w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection