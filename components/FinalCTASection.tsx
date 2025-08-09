'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const FinalCTASection = () => {
  return (
    <section id="contact" className="relative py-16 bg-gray-900 text-white">
      {/* Static background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-gray-700/20 to-gray-600/20 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
              GET STARTED
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-white">
              まずは無料相談から
            </h2>
            <p className="mt-6 text-xl text-gray-300 font-light max-w-3xl mx-auto">
              AI内製化に関するお悩みやご質問に、専門コンサルタントが無料でお答えします
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection