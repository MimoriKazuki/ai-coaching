'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('送信中にエラーが発生しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white text-gray-900 p-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 border-2 border-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">送信完了</h3>
        <p className="text-gray-600 font-light">
          48時間以内に担当者よりご連絡いたします
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 tracking-wider uppercase mb-3">
              NAME <span className="text-gray-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-all duration-300 bg-transparent text-gray-900 placeholder-gray-400 font-light"
              placeholder="お名前"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 tracking-wider uppercase mb-3">
              EMAIL <span className="text-gray-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-all duration-300 bg-transparent text-gray-900 placeholder-gray-400 font-light"
              placeholder="メールアドレス"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 tracking-wider uppercase mb-3">
              PHONE
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-all duration-300 bg-transparent text-gray-900 placeholder-gray-400 font-light"
              placeholder="電話番号"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 tracking-wider uppercase mb-3">
              COMPANY <span className="text-gray-400">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-all duration-300 bg-transparent text-gray-900 placeholder-gray-400 font-light"
              placeholder="会社名"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 tracking-wider uppercase mb-3">
            POSITION
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-all duration-300 bg-transparent text-gray-900 placeholder-gray-400 font-light"
            placeholder="役職（例：代表取締役、部長、マネージャー）"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 tracking-wider uppercase mb-3">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-all duration-300 bg-transparent text-gray-900 resize-none placeholder-gray-400 font-light"
            placeholder="ご相談内容・ご質問をご記入ください"
          />
        </motion.div>

        <motion.div 
          className="flex flex-col items-center space-y-6 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gray-900 text-white font-medium tracking-wider px-12 py-4 transition-all duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                SENDING...
              </span>
            ) : (
              'SEND MESSAGE'
            )}
          </button>

          <motion.p 
            className="text-xs text-gray-500 text-center font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            ※ご入力いただいた情報は、お問い合わせの対応にのみ使用いたします
          </motion.p>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default ContactForm