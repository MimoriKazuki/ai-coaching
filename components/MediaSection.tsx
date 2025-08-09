'use client'

import { motion } from 'framer-motion'

const MediaSection = () => {
  const mediaLogos = [
    { name: '朝日新聞', logo: '朝日新聞' },
    { name: '毎日新聞', logo: '毎日新聞' },
    { name: '産経新聞', logo: '産経新聞' },
    { name: '日本経済新聞', logo: '日経新聞' },
    { name: 'ラジオ日本', logo: 'ラジオ日本' },
    { name: '週刊BCN', logo: '週刊BCN' },
    { name: 'ENCOUNT', logo: 'ENCOUNT' },
    { name: 'Yahoo!ニュース', logo: 'Yahoo!ニュース' },
    { name: 'NewsPicks', logo: 'NewsPicks' }
  ]

  return (
    <section className="py-16 bg-white">
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
              MEDIA COVERAGE
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              主要メディアで
              <br />
              多数掲載
            </h2>
          </motion.div>

          {/* Media Logos Grid */}
          <div className="space-y-12 mb-16">
            {/* First row - 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {mediaLogos.slice(0, 4).map((media, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="h-full bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="text-lg font-medium text-gray-900 text-center">
                      {media.logo}
                    </div>
                    
                    {/* Accent line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-900 to-transparent w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Second row - 4 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {mediaLogos.slice(4, 8).map((media, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  className="relative"
                >
                  <div className="h-full bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="text-lg font-medium text-gray-900 text-center">
                      {media.logo}
                    </div>
                    
                    {/* Accent line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-900 to-transparent w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Third row - 1 item centered */}
            {mediaLogos.length > 8 && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-start-2 md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative"
                  >
                    <div className="h-full bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="text-lg font-medium text-gray-900 text-center">
                        {mediaLogos[8].logo}
                      </div>
                      
                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-900 to-transparent w-full" />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>

          {/* Statistics */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">メディア掲載実績</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">100万+</div>
              <div className="text-gray-600">総リーチ数</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-8">
              代表の活動や企業の取り組みが20以上の主要メディアで取り上げられています
            </p>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors"
            >
              無料相談をする
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MediaSection