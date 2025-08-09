'use client'

import { motion } from 'framer-motion'

const SolutionSection = () => {
  const reasons = [
    {
      number: '01',
      title: '社内で2日で開発',
      description: 'Claude Codeを使えば、未経験者でも2日でシステムが作れます。'
    },
    {
      number: '02',
      title: 'コスト99%削減',
      description: '1000万円の外注が10万円の社内開発に。年間2500万円削減も可能。'
    },
    {
      number: '03',
      title: '社員が成長',
      description: 'AIスキルを身につけた社員は、新しい価値を生み出します。'
    }
  ]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
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
              SOLUTION
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              もう外注に頼る必要は
              <br />
              ありません
            </h2>
          </motion.div>

          {/* Reasons grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                className="relative"
              >
                {/* Number */}
                <div className="text-8xl font-thin text-gray-200 mb-4">
                  {reason.number}
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Bottom line */}
                <div className="mt-8 h-px bg-gray-300" />
              </motion.div>
            ))}
          </div>

          {/* Key Solution */}
          <motion.div 
            className="mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Main message */}
            <div className="bg-gray-900 text-white py-20 px-8 relative overflow-hidden">
              
              <div className="relative max-w-4xl mx-auto text-center">
                {/* Label */}
                <span className="inline-block text-sm font-medium text-gray-400 tracking-widest uppercase mb-8">
                  THE SOLUTION
                </span>
                
                {/* Main message */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4">
                  社内のAI人材育成が
                  <span className="font-normal">
                    全てを解決します
                  </span>
                </h3>
                
                {/* Divider */}
                <div className="w-24 h-px bg-gray-600 mx-auto my-8" />
                
                {/* Solution text */}
                <p className="text-xl md:text-2xl font-light text-gray-300 mb-12">
                  それを実現するのが
                </p>
                
                {/* Brand emphasis */}
                <div className="inline-block">
                  <h4 className="text-2xl md:text-3xl font-medium tracking-wider">
                    Claude Codeで実現する社内AI人材育成
                  </h4>
                  <div className="h-1 bg-white mt-4" />
                </div>
                
                {/* Supporting points */}
                <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
                  {[
                    { title: '即戦力化', desc: '2週間で社内開発体制' },
                    { title: '持続的成長', desc: '最新AIを常にキャッチアップ' },
                    { title: '完全内製化', desc: '外注ゼロの組織へ' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="border-l-2 border-gray-600 pl-6"
                    >
                      <div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
                        {item.title}
                      </div>
                      <p className="text-gray-300 font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default SolutionSection