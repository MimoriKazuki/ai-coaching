import React from 'react'

interface StatsCardProps {
  label: string
  value: string
  detail?: string
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, detail }) => {
  return (
    <div className="flex items-baseline justify-between py-6 border-b border-gray-200">
      <div>
        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          {label}
        </div>
        <div className="text-5xl font-thin text-gray-900">
          {value}
        </div>
      </div>
      {detail && (
        <div className="text-right">
          <div className="text-sm text-gray-600 font-light">
            {detail}
          </div>
        </div>
      )}
    </div>
  )
}

export default StatsCard