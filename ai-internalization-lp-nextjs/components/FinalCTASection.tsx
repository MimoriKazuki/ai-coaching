'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const FinalCTASection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI内製化に関するお悩みやご質問に、専門コンサルタントが無料でお答えします。<br />
            貴社の状況に合わせた最適なソリューションをご提案いたします。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection