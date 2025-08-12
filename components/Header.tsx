'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'サービス', href: '#service' },
    { name: '選ばれる3つの理由', href: '#why-us' },
    { name: '代表メッセージ', href: '#about' },
    { name: '実績', href: '#results' },
    { name: '料金', href: '#pricing' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{ opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.div
              className="text-2xl font-light tracking-wider"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className={`${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                LandBridge
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm tracking-wider font-light transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className={`relative inline-block px-8 py-3 text-sm font-medium tracking-wider overflow-hidden group ${
                isScrolled 
                  ? 'text-white bg-gray-900 hover:bg-gray-800' 
                  : 'text-white bg-gray-900 hover:bg-gray-800'
              } transition-colors duration-300`}
            >
              <span className="relative z-10">無料相談はこちら</span>
              <motion.div
                className="absolute inset-0 bg-gray-800"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          >
            <motion.span
              className={`block w-6 h-px ${isScrolled ? 'bg-gray-900' : 'bg-gray-900'} transition-all duration-300`}
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -4,
              }}
            />
            <motion.span
              className={`block w-6 h-px ${isScrolled ? 'bg-gray-900' : 'bg-gray-900'} transition-all duration-300`}
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className={`block w-6 h-px ${isScrolled ? 'bg-gray-900' : 'bg-gray-900'} transition-all duration-300`}
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 0 : 4,
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="container mx-auto px-6 py-16">
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 text-sm tracking-wider font-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-block text-center bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-wider mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談はこちら
            </Link>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header