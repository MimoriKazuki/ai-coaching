'use client'

import { motion } from 'framer-motion'

const CrisisSection = () => {
  const timeline = [
    { date: '認知', content: 'AIの存在を知る', status: 'past' },
    { date: '興味', content: '使ってみたいと思う', status: 'current' },
    { date: '挑戦', content: '少し触ってみる', status: 'future' },
    { date: '挂念', content: '使いこなせず諦める', status: 'future' },
  ]

  return (
    <section id="crisis" className="relative py-16 bg-white overflow-hidden">
      
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              YOUR CHALLENGES
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              AIを知っているけど
              <br />
              <span className="font-normal">使えていない</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-light max-w-3xl mx-auto">
              ChatGPTやClaudeの存在は知っている。でも実務で活用できていない。
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mb-32">
            {/* Simple timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -translate-y-1/2" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5
                  }}
                  className="relative"
                >
                  <div 
                    className={`
                      relative bg-white p-8 
                      ${item.status === 'current' 
                        ? 'ring-2 ring-gray-900 shadow-xl' 
                        : 'border border-gray-200'
                      }
                    `}
                  >
                    {/* Timeline dot */}
                    <div 
                      className={`
                        absolute -bottom-[25px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full
                        ${item.status === 'current' 
                          ? 'bg-gray-900' 
                          : item.status === 'past'
                            ? 'bg-gray-400'
                            : 'bg-gray-200'
                        }
                      `}
                    />
                    
                    {/* Date */}
                    <div 
                      className={`
                        text-sm font-medium tracking-wider mb-2
                        ${item.status === 'current' 
                          ? 'text-gray-900' 
                          : 'text-gray-500'
                        }
                      `}
                    >
                      {item.date}
                    </div>
                    
                    {/* Content */}
                    <div 
                      className={`
                        text-base
                        ${item.status === 'current' 
                          ? 'text-gray-900 font-medium' 
                          : 'text-gray-600'
                        }
                      `}
                    >
                      {item.content}
                    </div>
                    
                    {/* Current indicator */}
                    {item.status === 'current' && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1">
                          NOW
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Before After Comparison */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-gray-900">
                「知っている」から「使える」へ
              </h3>
              <p className="mt-4 text-gray-600">AIコーチングで実現する変革</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 relative">
              {/* Arrow indicator in the center */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="text-4xl font-light text-gray-900">&gt;</span>
              </div>
              
              {/* 今の状態 - Less prominent */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative bg-gray-50 p-8 border border-gray-200">
                  <div className="absolute -top-3 left-8 bg-gray-400 text-white text-sm font-medium px-4 py-1">
                    BEFORE
                  </div>
                  <h3 className="text-xl font-light text-gray-600 mb-8 mt-2">
                    今の状態
                  </h3>
                
                  <div className="space-y-6">
                    {[
                      { label: 'AIツール', value: '知っているだけ' },
                      { label: '活用レベル', value: '趣味程度' },
                      { label: '業務への影響', value: 'ほぼゼロ' },
                      { label: '競合との差', value: '広がる一方' }
                    ].map((item, index) => (
                      <div key={index} className="opacity-70">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</span>
                          <span className="text-base text-gray-600">
                            {item.value}
                          </span>
                        </div>
                        <div className="h-px bg-gray-200 mt-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* AIコーチング後 - More prominent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-400 shadow-xl transform md:scale-105">
                  <div className="absolute -top-3 left-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-medium px-4 py-1">
                    AFTER
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-8 mt-2">
                    AIコーチング後
                  </h3>
                
                  <div className="space-y-6">
                    {[
                      { label: 'AIツール', value: '実務で活用' },
                      { label: '活用レベル', value: 'プロフェッショナル' },
                      { label: '業務への影響', value: '効率10倍' },
                      { label: '競合との差', value: '圧倒的優位' }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">{item.label}</span>
                          <span className="text-lg font-semibold text-gray-900">
                            {item.value}
                          </span>
                        </div>
                        <div className="h-px bg-gradient-to-r from-gray-400 to-gray-600 mt-2" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Success badge */}
                  <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center py-3 font-medium">
                    2週間で達成可能
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-24 bg-gray-900 text-white py-12 px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-3xl font-bold text-white mb-4">
              AIを「知っている」だけでは
            </p>
            <p className="text-xl text-gray-100">
              何も変わりません。「使える」ようになって初めて価値が生まれます
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CrisisSection