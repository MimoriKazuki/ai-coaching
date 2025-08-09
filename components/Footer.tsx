'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            会社概要
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors">
            特定商取引法に基づく表記
          </Link>
        </div>
        
        <div className="text-center text-white/80">
          <p>&copy; 2025 LandBridge Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer