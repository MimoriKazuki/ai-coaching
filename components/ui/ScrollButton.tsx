'use client'

import React from 'react'

interface ScrollButtonProps {
  targetId: string
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ 
  targetId, 
  variant = 'primary', 
  className = '',
  children 
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const baseStyles = 'inline-block px-10 py-5 font-medium tracking-wider transition-colors duration-300'
  
  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'bg-white text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white'
  }

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default ScrollButton