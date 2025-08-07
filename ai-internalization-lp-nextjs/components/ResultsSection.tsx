'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign } from 'lucide-react'

const ResultsSection = () => {
  const cases = [
    {
      title: 'SaaSプロダクト開発',
      category: 'Web Application',
      before: '1000万円・半年・5名体制',
      after: '1ヶ月・1名で完成',
      result: 'コスト99%削減',
      metrics: {
        cost: '99%',
        time: '83%',
        efficiency: '5x'
      },
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'コーポレートサイト',
      category: 'Corporate Website',
      before: '150万円・外注2ヶ月',
      after: '未経験者が2週間で構築',
      result: 'コスト100%削減',
      metrics: {
        cost: '100%',
        time: '75%',
        efficiency: '8x'
      },
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: '受発注システム',
      category: 'Business System',
      before: '300万円・3ヶ月',
      after: '5日で本番稼働',
      result: '開発期間94%短縮',
      metrics: {
        cost: '95%',
        time: '94%',
        efficiency: '18x'
      },
      gradient: 'from-blue-600 to-indigo-700'
    }
  ]

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Cpath d='M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0zm0 60c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/40 rounded-full"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${10 + (i * 13) % 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-700 to-blue-600">
            私たちが実現した&ldquo;非常識&rdquo;な成果
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Modern card design */}
              <div className="h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${caseStudy.gradient} p-6 relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">{caseStudy.category}</span>
                    <h3 className="text-white font-bold text-xl mt-2">{caseStudy.title}</h3>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 right-6">
                    <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Before/After comparison */}
                  <div className="space-y-4 mb-8">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
                      <div className="pl-4">
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Before</span>
                        <p className="text-gray-700 mt-1 font-medium">{caseStudy.before}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                      <div className="pl-4">
                        <span className="text-xs font-bold text-green-500 uppercase tracking-wider">After</span>
                        <p className="text-gray-700 mt-1 font-medium">{caseStudy.after}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-600">{caseStudy.metrics.cost}</div>
                      <div className="text-xs text-gray-500 mt-1">コスト削減</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-2xl font-black text-blue-600">{caseStudy.metrics.time}</div>
                      <div className="text-xs text-gray-500 mt-1">期間短縮</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-600">{caseStudy.metrics.efficiency}</div>
                      <div className="text-xs text-gray-500 mt-1">効率化</div>
                    </div>
                  </div>
                  
                  {/* Result highlight */}
                  <div className={`bg-gradient-to-r ${caseStudy.gradient} rounded-2xl p-4 text-center transform hover:scale-105 transition-transform duration-300`}>
                    <p className="text-white font-bold text-lg">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsSection