import React from 'react'

interface SectionHeaderProps {
  tag?: string
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  tag, 
  title, 
  subtitle,
  className = ''
}) => {
  return (
    <div className={className}>
      {tag && (
        <div className="mb-8">
          <span className="inline-block text-sm font-medium text-gray-500 tracking-widest uppercase">
            {tag}
          </span>
        </div>
      )}
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
        {title}
      </h1>
      
      {subtitle && (
        <p className="mt-8 text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader// Trigger rebuild Tue Aug 12 15:05:32 JST 2025
