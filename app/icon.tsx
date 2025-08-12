import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B5998 0%, #4A69BD 100%)',
          borderRadius: '6px',
        }}
      >
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* ネットワークグラフのノード */}
          <circle cx="20" cy="75" r="8" fill="white" />
          <circle cx="50" cy="25" r="8" fill="white" />
          <circle cx="80" cy="55" r="8" fill="white" />
          
          {/* 接続線 */}
          <path d="M20 75 L50 25" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 25 L80 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <path d="M20 75 L80 55" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          
          {/* ノードの中心点（アクセント） */}
          <circle cx="20" cy="75" r="3" fill="#3B5998" />
          <circle cx="50" cy="25" r="3" fill="#3B5998" />
          <circle cx="80" cy="55" r="3" fill="#3B5998" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}