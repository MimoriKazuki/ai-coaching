'use client'

import { motion } from 'framer-motion'

const AuthoritySection = () => {
  const testimonials = [
    {
      name: '孫正義',
      company: 'ソフトバンクグループ',
      quote: 'AIで100倍の生産性。乗り遅れる企業は確実に淘汰される'
    },
    {
      name: '南場智子',
      company: 'DeNA',
      quote: 'プログラミングの民主化が起きた。全社員が開発者になる時代'
    },
    {
      name: '三木谷浩史',
      company: '楽天グループ',
      quote: 'AIコーディングは第4次産業革命の核心'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
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
              WARNING FROM LEADERS
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              日本のトップ経営者が
              <br />
              鳴らす警鐘
            </h2>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full bg-white p-8 border border-gray-100">
                  {/* Quote mark */}
                  <div className="text-8xl font-thin text-gray-200 leading-none mb-4 select-none">
                    &ldquo;
                  </div>
                  
                  {/* Quote */}
                  <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  
                  {/* Author */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {testimonial.company}
                    </div>
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

export default AuthoritySection