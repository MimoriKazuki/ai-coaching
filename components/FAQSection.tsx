'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '本当に大手に対抗できるのか？',
      answer: 'AIツールの進化により、個人や小規模チームでも大規模開発が可能になりました。むしろ意思決定の速い中小企業の方が、AI導入においては有利な立場にあります。大手企業の承認プロセスを待つ間に、貴社は3つのシステムを構築できます。'
    },
    {
      question: 'プログラミング未経験でも大丈夫か？',
      answer: 'はい、問題ありません。最新のAIツールは自然言語で指示するだけでコードを生成します。必要なのはプログラミング知識ではなく、業務知識とAIへの適切な指示方法です。実際に、営業出身の方が2週間でWebアプリを構築した実績があります。'
    },
    {
      question: 'なぜ今始める必要があるのか？',
      answer: 'AI技術は指数関数的に進化しています。1ヶ月の遅れが1年分の差になります。また、優秀な人材はAI活用企業に流れており、人材獲得競争でも不利になります。今始めれば先行者利益を得られますが、1年後では追いつくことすら困難になります。'
    },
    {
      question: '投資対効果は本当に出るのか？',
      answer: '導入企業の平均ROIは833%です。開発コストの99%削減は誇張ではありません。月額40万円の投資で、年間3000万円以上の開発費削減を実現した企業が複数あります。さらに、開発スピードの向上により新規事業の立ち上げも加速します。'
    },
    {
      question: '1年後に自走できる根拠は？',
      answer: '弊社のプログラムは「教える」のではなく「一緒に作る」方式を採用しています。実際の業務システムを構築しながら学ぶため、卒業時には10個以上の実装経験を持ちます。また、AI技術の最新情報をキャッチアップする仕組みも構築するため、永続的な成長が可能です。'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
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
              FAQ
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              よくあるご質問
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full py-16 text-left flex justify-between items-start"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start">
                    <span className="text-2xl font-thin text-gray-400 mr-6 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-light text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div 
                      className={`w-6 h-6 relative transition-transform duration-300 ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                    >
                      <span className="absolute top-1/2 left-0 w-full h-px bg-gray-400 -translate-y-1/2" />
                      <span className="absolute top-0 left-1/2 w-px h-full bg-gray-400 -translate-x-1/2" />
                    </div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-14">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection