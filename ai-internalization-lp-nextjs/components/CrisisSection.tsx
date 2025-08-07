'use client'

import { motion } from 'framer-motion'

const CrisisSection = () => {
  const timeline = [
    { date: '2024年12月', content: 'Claude Code登場で開発の常識崩壊', current: false },
    { date: '2025年3月', content: '先行企業がAI活用で圧倒的優位に', current: true },
    { date: '2025年12月', content: 'AI未対応企業の淘汰開始', current: false },
    { date: '2027年', content: '市場の再編完了', current: false },
  ]

  const comparison = [
    { 
      item: '開発速度', 
      ai: '2日でシステム構築', 
      nonAi: '3ヶ月で外注'
    },
    { 
      item: 'コスト', 
      ai: '月30万円で無限の開発力', 
      nonAi: '1システム500万円'
    },
    { 
      item: '人材', 
      ai: '優秀な人材が集まる', 
      nonAi: '人材流出が加速'
    },
    { 
      item: '市場地位', 
      ai: '業界リーダー', 
      nonAi: '事業縮小or撤退'
    },
  ]

  return (
    <section id="crisis" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Title Section */}
        <motion.div 
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider">
              Warning
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
              今がラストチャンス！
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-800 text-3xl md:text-4xl lg:text-5xl">
              AI導入の遅れは倒産リスクに
            </span>
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            競合他社がAIで急成長する中、今行動しなければ
            <span className="font-bold text-red-600"> 3年後には市場から消える</span>可能性があります
          </motion.p>
        </motion.div>

        {/* Modern Timeline - Horizontal Layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline container with modern card layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Connection line (visible on desktop only) */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 z-0"></div>
                  )}
                  
                  {/* Timeline card */}
                  <div className={`relative overflow-hidden rounded-2xl ${
                    item.current 
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-500/30 ring-2 ring-blue-400 ring-offset-2' 
                      : index < 1 
                        ? 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600' 
                        : 'bg-white border border-gray-200 text-gray-700'
                  }`}>
                    {/* Decorative background pattern for current item */}
                    {item.current && (
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white rounded-full"></div>
                      </div>
                    )}
                    
                    <div className="relative p-6">
                      {/* Step indicator */}
                      <div className="mb-4">
                        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          item.current 
                            ? 'bg-white/20 backdrop-blur-sm' 
                            : index < 1
                              ? 'bg-gray-300'
                              : 'bg-blue-100'
                        }`}>
                          <span className={`text-sm font-bold ${
                            item.current ? 'text-white' : index < 1 ? 'text-gray-600' : 'text-blue-600'
                          }`}>{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className={`text-base font-bold mb-3 ${
                        item.current ? 'text-blue-200' : index < 1 ? 'text-gray-500' : 'text-blue-600'
                      }`}>
                        {item.date}
                      </div>
                      
                      {/* Content */}
                      <div className={`text-base font-medium leading-relaxed ${
                        item.current ? 'font-bold' : ''
                      }`}>
                        {item.content}
                      </div>
                      
                      {/* Current indicator */}
                      {item.current && (
                        <motion.div 
                          className="mt-4 inline-block"
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                            NOW
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Progress bar */}
            <div className="mt-8 bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '25%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            
            {/* Timeline message */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-base font-medium text-gray-600">
                <span className="font-bold text-red-600">残された時間はわずか</span> - 今すぐ行動を起こさなければ手遅れになります
              </p>
            </motion.div>
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            AI導入企業と未導入企業の圧倒的な差
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
            {/* AI活用企業 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-bold text-white">AI活用企業</h4>
                    <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                      成長企業
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 space-y-6">
                  {comparison.map((row, index) => (
                    <motion.div 
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{row.item}</p>
                          <p className="text-lg font-bold text-gray-900">{row.ai}</p>
                        </div>
                      </div>
                      {index < comparison.length - 1 && (
                        <div className="mt-6 border-b border-gray-100"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom accent */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              </div>
            </motion.div>
            
            {/* 未活用企業 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-600 to-slate-700 p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-bold text-white">未活用企業</h4>
                    <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                      衰退リスク
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 space-y-6">
                  {comparison.map((row, index) => (
                    <motion.div 
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-slate-500 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{row.item}</p>
                          <p className="text-lg font-bold text-gray-900">{row.nonAi}</p>
                        </div>
                      </div>
                      {index < comparison.length - 1 && (
                        <div className="mt-6 border-b border-gray-100"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom accent */}
                <div className="h-2 bg-gradient-to-r from-gray-600 to-slate-700"></div>
              </div>
            </motion.div>
          </div>
          
          {/* Summary message */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-2xl font-bold mb-2">
              選択は明白です
            </p>
            <p className="text-lg text-blue-100">
              今すぐAI導入を始めるか、競合に取り残されるか
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CrisisSection