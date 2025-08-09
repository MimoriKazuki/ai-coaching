'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PricingSection = () => {
  const plans = [
    {
      name: 'LIGHT',
      price: '30',
      features: [
        '月2回のオンライン研修',
        'Slackサポート',
        '基礎的なAI活用支援',
        '月1回の進捗レビュー'
      ],
      recommended: false
    },
    {
      name: 'STANDARD',
      price: '40',
      features: [
        '週1回のハンズオン研修',
        '24時間Slackサポート',
        '実践的なペアプログラミング',
        'カスタマイズ型カリキュラム',
        '週次進捗レビュー'
      ],
      recommended: true
    },
    {
      name: 'PREMIUM',
      price: '70',
      features: [
        '週2回以上の集中研修',
        '専任コンサルタント配置',
        '実プロジェクト伴走支援',
        '経営層向けAI戦略策定',
        '24時間緊急対応'
      ],
      recommended: false
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              PRICING
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              大手の数億円投資を
              <br />
              <span className="font-normal">
                月30万円から
              </span>
            </h2>
          </motion.div>

          {/* Plans with enhanced animations */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                className={`relative ${plan.recommended ? 'md:-mt-4' : ''} group`}
              >
                <div 
                  className={`h-full flex flex-col transition-shadow duration-300 hover:shadow-lg ${
                    plan.recommended 
                      ? 'border-2 border-gray-900' 
                      : 'border border-gray-200'
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-gray-900 text-white text-center py-2 text-sm tracking-wider">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className="p-10 flex-1 flex flex-col">
                    {/* Plan name */}
                    <h3 className="text-sm font-medium text-gray-500 tracking-widest mb-4">
                      {plan.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-6xl font-thin text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-500 ml-2">万円/月</span>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-4 mb-12 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-4 mt-2 flex-shrink-0" />
                          <span className="text-gray-600 font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <div>
                      <Link
                        href="#contact"
                        className={`block text-center py-4 font-medium tracking-wider transition-colors duration-300 ${
                          plan.recommended
                            ? 'bg-gray-900 text-white hover:bg-gray-800'
                            : 'bg-white text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white'
                        }`}
                      >
                        GET STARTED
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection