'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const AuthoritySection = () => {
  const testimonials = [
    {
      name: '孫正義',
      company: 'ソフトバンクグループ代表',
      initial: '孫',
      quote: 'AIで100倍の生産性。乗り遅れる企業は確実に淘汰される'
    },
    {
      name: '南場智子',
      company: 'DeNA代表取締役会長',
      initial: '南',
      quote: 'プログラミングの民主化が起きた。全社員が開発者になる時代'
    },
    {
      name: '三木谷浩史',
      company: '楽天グループ代表取締役会長兼社長',
      initial: '三',
      quote: 'AIコーディングは第4次産業革命の核心'
    }
  ]


  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          日本のトップ経営者が鳴らす警鐘
        </motion.h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="mb-6">
                <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 text-4xl text-blue-200 leading-none">&ldquo;</div>
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AuthoritySection