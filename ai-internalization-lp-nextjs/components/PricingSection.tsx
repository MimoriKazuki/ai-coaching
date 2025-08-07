'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const PricingSection = () => {
  const plans = [
    {
      name: 'ライトプラン',
      price: '30',
      features: [
        '月2回のオンライン研修',
        'Slackサポート',
        '基礎的なAI活用支援',
        '月1回の進捗レビュー'
      ],
      popular: false
    },
    {
      name: 'スタンダードプラン',
      price: '40',
      features: [
        '週1回のハンズオン研修',
        '24時間Slackサポート',
        '実践的なペアプログラミング',
        'カスタマイズ型カリキュラム',
        '週次進捗レビュー'
      ],
      popular: true
    },
    {
      name: 'プレミアムプラン',
      price: '70',
      features: [
        '週2回以上の集中研修',
        '専任コンサルタント配置',
        '実プロジェクト伴走支援',
        '経営層向けAI戦略策定',
        '24時間緊急対応'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          大手の数億円投資を、月30万円から
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl p-10 flex flex-col ${
                plan.popular
                  ? 'shadow-2xl scale-105 border-2 border-blue-600 bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm'
                  : 'shadow-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    人気No.1
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              
              <div className="text-center mb-8">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">{plan.price}</span>
                <span className="text-xl text-gray-600">万円/月</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link
                  href="#contact"
                  className={`block text-center py-4 px-8 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 transition-all duration-300'
                  }`}
                >
                  お問い合わせ
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection