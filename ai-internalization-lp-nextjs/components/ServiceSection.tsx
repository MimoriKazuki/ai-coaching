'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const ServiceSection = () => {
  const steps = [
    {
      number: '1',
      title: '現状分析（1ヶ月目）',
      description: '貴社の業務プロセスとシステムを詳細に分析し、AI活用の最適領域を特定します。',
      points: ['AI活用可能領域の特定', '投資対効果の試算']
    },
    {
      number: '2',
      title: '基礎構築（2-3ヶ月目）',
      description: 'Claude Codeの導入と基本的な使い方をマスターし、最初の成功体験を創出します。',
      points: ['Claude Code導入', '最初の成功体験創出']
    },
    {
      number: '3',
      title: '実践開発（4-9ヶ月目）',
      description: '実際の業務システムをAIで構築しながら、実践的なスキルを身につけます。',
      points: ['ペアプログラミング', '実業務システム構築']
    },
    {
      number: '4',
      title: '自走化（10-12ヶ月目）',
      description: '社内開発体制を確立し、新しいAI技術にも即座に対応できる組織を構築します。',
      points: ['社内開発体制確立', 'AI進化への即応体制']
    }
  ]

  return (
    <section id="service" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.02'%3E%3Cpath d='M30 0L0 30l30 30 30-30L30 0zm0 10l20 20-20 20-20-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="sr-only">サービス内容 - LandBridge AI内製化支援プログラム 4ステップ</h2>
        <motion.div 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          role="heading"
          aria-level={2}
        >
          貴社を&ldquo;自走型AI組織&rdquo;に変える4ステップ
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{step.number}</span>
                  
                  {/* Animated ring */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-300 rounded-full"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:bg-white/90 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-700">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection