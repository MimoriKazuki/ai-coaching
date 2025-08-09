'use client'

import { motion } from 'framer-motion'

const ResultsSection = () => {
  const cases = [
    {
      title: 'SaaSプロダクト開発',
      category: '社内開発事例1',
      before: {
        cost: '¥10,000,000',
        time: '6ヶ月',
        team: '外部5名チーム'
      },
      after: {
        cost: '¥100,000',
        time: '1ヶ月',
        team: '社内1名'
      },
      reduction: '99%'
    },
    {
      title: 'コーポレートサイト',
      category: '社内開発事例2',
      before: {
        cost: '¥1,500,000',
        time: '2ヶ月',
        team: '外注'
      },
      after: {
        cost: '¥0',
        time: '2週間',
        team: '社内未経験者'
      },
      reduction: '100%'
    },
    {
      title: '受発注システム',
      category: '社内開発事例3',
      before: {
        cost: '¥3,000,000',
        time: '3ヶ月',
        team: '外注3名'
      },
      after: {
        cost: '¥150,000',
        time: '5日',
        team: '社内1名'
      },
      reduction: '95%'
    }
  ]

  return (
    <section id="results" className="py-16 bg-white">
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
              実績数値で証明
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              &ldquo;不可能&rdquo;を
              <br />
              <span className="font-normal">&ldquo;社内の常識&rdquo;に変えた実績</span>
            </h2>
          </motion.div>

          {/* Cases */}
          <div className="grid md:grid-cols-3 gap-12">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full bg-white p-8 border border-gray-100">
                  {/* Category */}
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                    {caseStudy.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-light text-gray-900 mb-8">
                    {caseStudy.title}
                  </h3>
                  
                  {/* Before section */}
                  <div className="mb-8">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                      Before
                    </div>
                    <div className="space-y-2 opacity-50">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost</span>
                        <span className="text-gray-900 line-through">{caseStudy.before.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time</span>
                        <span className="text-gray-900 line-through">{caseStudy.before.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team</span>
                        <span className="text-gray-900 line-through">{caseStudy.before.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* After section */}
                  <div className="mb-8">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                      After
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cost</span>
                        <span className="text-gray-900 font-medium">{caseStudy.after.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time</span>
                        <span className="text-gray-900 font-medium">{caseStudy.after.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team</span>
                        <span className="text-gray-900 font-medium">{caseStudy.after.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Result with static numbers */}
                  <div className="pt-8 border-t border-gray-200">
                    <div className="text-5xl font-thin text-gray-900">
                      {caseStudy.reduction}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      コスト削減
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div 
            className="text-center mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-light text-gray-900">
              実施者: プログラミング完全未経験の社員が達成
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ResultsSection