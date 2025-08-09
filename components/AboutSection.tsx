'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              REPRESENTATIVE MESSAGE
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              代表メッセージ
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                AIと共に創る、新しい未来へ
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  システム開発会社を経営する中で、私は毎日強い危機感を抱いています。
                </p>
                <p className="text-lg font-medium text-gray-900">
                  「人間のエンジニアより、AIでコーディングする方が良いのではないか？」
                </p>
                <p>
                  この問いと向き合いながら、毎日AIと対話を重ねる中で確信したことがあります。
                </p>
                <p>
                  AIを使える企業とそうでない企業の差は、想像以上に大きく、そして決定的だということ。
                </p>
                <p>
                  しかし同時に、大きな希望も見えてきました。
                </p>
                <p>
                  AIは人間を置き換えるものではなく、人間をより創造的な仕事へと解放してくれる「魔法の杖」だということです。
                </p>
                <p>
                  多くの企業が「AIは難しそう」「どこから始めれば...」と悩んでいます。
                </p>
                <p>
                  私たちのAIコーチング事業は、まさにその壁を取り払うために生まれました。
                </p>
                <p className="font-medium text-gray-900">
                  専門知識は不要です。
                </p>
                <p>
                  AIとの対話がもたらす感動と可能性を、皆様にも体験していただきたい。
                </p>
                <p>
                  そして共に、人間とAIが共創する新しい時代を築いていきたいと思っています。
                </p>
                <p className="font-medium text-gray-900">
                  まだ遅くありません。今動き出せば、むしろ早い方です。
                </p>
                <p className="text-lg font-light text-gray-900 pt-4">
                  ぜひご一緒に、このテクノロジーの波に乗り、新たな価値を創造していきましょう。
                </p>
              </div>

              {/* Representative Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">代表取締役社長</p>
                <p className="text-2xl font-light text-gray-900">三森 一輝</p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/mimori-representative.jpg"
                  alt="代表取締役 三森一輝"
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full border-2 border-gray-200 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection