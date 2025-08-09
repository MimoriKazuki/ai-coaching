'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Don't show until scrolled down a bit
      if (window.scrollY <= 300) {
        setIsVisible(false)
        return
      }

      const contactSection = document.getElementById('contact')
      
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Hide when contact section starts to appear on screen
        const isContactInView = rect.top < windowHeight && rect.bottom > 0
        
        setIsVisible(!isContactInView)
      } else {
        setIsVisible(true)
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link href="#contact">
            <motion.button
              className="relative overflow-hidden bg-white text-gray-900 px-8 py-4 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-900 hover:text-white transition-all duration-300 font-light tracking-wider text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              無料相談はこちら
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingContactButton