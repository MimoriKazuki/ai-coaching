'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote, Star, Building2, Code, TrendingUp } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: '竹内 様',
      role: '元警察官 / 現IT企業経営者',
      company: '非公開',
      image: '/images/takeuchi.jpg',
      content: '元警察官でシステム開発経験ゼロの私が、AIコーチングプログラムに挑戦し、自社のホームページを完全リニューアルすることができました。今では私が開発したサイトを自社で運営しています。',
      highlight: 'このプログラムに出会えて本当に良かったです。',
      results: [
        '開発経験ゼロから2週間で実装完了',
        '自社HPの完全リニューアル達成',
        '継続的な改善・運用が可能に'
      ],
      future: '今後はAIを活用してさらなる開発を進め、社内のDX化を推進していきたいです。',
      rating: 5,
      tags: ['未経験からスタート', 'HP制作', 'DX推進']
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              TESTIMONIALS
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              受講者の<span className="font-normal">実際の声</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-light max-w-3xl mx-auto">
              プログラムを受講された方々の成功事例をご紹介します
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* 左側：プロフィール */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 text-white">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse opacity-20" />
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={128}
                            height={128}
                            className="rounded-full border-4 border-white/20 relative z-10 object-cover"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-light mb-2">{testimonial.name}</h3>
                        <p className="text-sm text-gray-300 mb-4">{testimonial.role}</p>
                        
                        {/* 評価 */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        {/* タグ */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {testimonial.tags.map((tag, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 右側：コンテンツ */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      {/* メインコメント */}
                      <div className="mb-8">
                        <Quote className="w-10 h-10 text-gray-300 mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                          {testimonial.content}
                        </p>
                        <p className="text-xl font-medium text-gray-900">
                          {testimonial.highlight}
                        </p>
                      </div>

                      {/* 達成した成果 */}
                      <div className="mb-8">
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                          達成した成果
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {testimonial.results.map((result, i) => (
                            <div 
                              key={i}
                              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">{i + 1}</span>
                              </div>
                              <p className="text-sm text-gray-700">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 今後の展望 */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">今後の展望</h4>
                            <p className="text-gray-600">{testimonial.future}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More testimonials coming soon */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">更に多くの成功事例を準備中</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-8">
              あなたも竹内様のような成功を手に入れませんか？
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              無料相談で可能性を確認する
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection