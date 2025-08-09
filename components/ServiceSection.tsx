'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ServiceSection = () => {
  const steps = [
    {
      number: 'STEP 1',
      title: '社内現状分析',
      period: '1ヶ月目',
      description: '貴社の業務プロセスを完全分析。AI導入で最大効果が得られるポイントを特定します。',
      result: '明確な社内導入戦略書',
      points: [
        '業務フローの可視化',
        'AI適用領域の特定',
        'ROI試算レポート'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3870&auto=format&fit=crop'
    },
    {
      number: 'STEP 2',
      title: '社内基礎構築',
      period: '2-3ヶ月目',
      description: 'Claude Code環境構築と社員向けマンツーマン研修。初回成功体験で自信をつけます。',
      result: '社内で簡単なシステムが完成',
      points: [
        '環境セットアップ',
        '基礎スキル習得',
        '初めての成功体験'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3870&auto=format&fit=crop'
    },
    {
      number: 'STEP 3',
      title: '社内実践開発',
      period: '4-9ヶ月目',
      description: '実業務システムを社内で構築。ペアプログラミングでスキル定着を確実にします。',
      result: '社内で本格システムの完成',
      points: [
        '実践的な開発経験',
        'ペアプログラミング',
        'スキルの定着化'
      ],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=3870&auto=format&fit=crop'
    },
    {
      number: 'STEP 4',
      title: '社内自走化',
      period: '10-12ヶ月目',
      description: '完全社内開発体制確立。新技術即応体制で永続的な競争優位を獲得します。',
      result: '永続的な社内競争優位の獲得',
      points: [
        '完全自走体制',
        '最新技術への対応',
        '継続的な成長'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3870&auto=format&fit=crop'
    }
  ]

  return (
    <section id="service" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              PROGRAM OVERVIEW
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              貴社を自走型AI組織に変える
              <br />
              <span className="font-normal">4ステップ</span>
            </h2>
          </motion.div>

          {/* PC版: 大画面での表示 */}
          <div className="hidden lg:block">
            {/* Timeline above cards */}
            <div className="mb-12">
              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200" />
                <div className="relative flex justify-between">
                  {['1ヶ月', '3ヶ月', '9ヶ月', '12ヶ月'].map((time, index) => (
                    <div key={index} className="relative">
                      <div className="w-4 h-4 bg-gray-900 rounded-full" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 whitespace-nowrap">
                        {time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Step Number Overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/95 backdrop-blur px-3 py-1 rounded">
                          <span className="text-sm font-bold text-gray-900 tracking-wider">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        {step.period}
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-1">
                        {step.description}
                      </p>
                      
                      {/* Points */}
                      <div className="border-t pt-4 mb-4">
                        <ul className="space-y-2">
                          {step.points.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start">
                              <span className="text-gray-400 mr-2">・</span>
                              <span className="text-xs text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Result */}
                      <div className="bg-gray-900 text-white p-3 rounded mt-auto">
                        <div className="text-xs uppercase tracking-wider mb-1 opacity-70">
                          成果
                        </div>
                        <div className="text-sm font-medium">
                          {step.result}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* タブレット・モバイル版: 縦型タイムライン */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-gray-900 rounded-full z-10" />
                  
                  <div className="ml-20">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      {/* Mobile Image */}
                      <div className="relative h-48 md:h-64">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Step Number Overlay */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white/95 backdrop-blur px-3 py-1 rounded">
                            <span className="text-sm font-bold text-gray-900 tracking-wider">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                          {step.period}
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>
                        
                        {/* Result */}
                        <div className="bg-gray-900 text-white p-4 rounded">
                          <div className="text-xs uppercase tracking-wider mb-1 opacity-70">
                            成果
                          </div>
                          <div className="font-medium">
                            {step.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 text-white py-16 px-8 rounded-lg">
              <h3 className="text-3xl font-light mb-4">
                1年後、貴社は
                <span className="font-normal block mt-2">
                  完全な自走型AI組織へ
                </span>
              </h3>
              <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
                外注費ゼロ、開発スピード10倍、社員のモチベーション最高潮。
                これが貴社の新しい現実になります。
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ServiceSection