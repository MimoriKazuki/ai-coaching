'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const SolutionSection = () => {
  const reasons = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      title: '外部委託では手遅れ',
      points: [
        '3ヶ月後には時代遅れの提案',
        'AIは毎週進化している'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: '業務理解×AI知識の掛け算',
      points: [
        '外部：AIは詳しいが業務は素人',
        '内部：業務は詳しいがAIは素人',
        '必要なのは両方できる人材'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      title: '即応力が競争力の源泉',
      points: [
        '新AI機能→翌日実装',
        '競合より3ヶ月先行'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          なぜ自社にAIエキスパートが必要なのか
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
                {reason.title}
              </h3>
              
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start text-gray-600">
                    <span className="text-blue-600 font-bold mr-2 text-lg">▸</span>
                    <span className="leading-relaxed">{point}</span>
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

export default SolutionSection