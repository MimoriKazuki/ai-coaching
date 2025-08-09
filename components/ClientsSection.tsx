'use client'

import { motion } from 'framer-motion'

const ClientsSection = () => {
  const clients = [
    {
      industry: '製造業A社',
      result: '在庫管理システムを2日で構築',
      details: '従来3ヶ月かかっていた在庫管理システムの改修を、AIを活用してわずか2日で完成。開発コストを95%削減し、リアルタイム在庫追跡を実現。'
    },
    {
      industry: 'サービス業B社',
      result: '顧客管理を完全内製化',
      details: '外注に年間2000万円かけていた顧客管理システムを完全内製化。社内エンジニア1名で運用可能な体制を構築し、機能追加も即日対応可能に。'
    },
    {
      industry: '小売業C社',
      result: 'EC連携を1週間で実装',
      details: '複数のECプラットフォームとの在庫連携システムを1週間で構築。売上データの自動集計により、経営判断のスピードが3倍に向上。'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          先行導入企業の成功事例
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {client.industry}
              </span>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {client.result}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {client.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection