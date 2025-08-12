import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '36px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg 
            width="100" 
            height="100" 
            viewBox="0 0 100 100"
            fill="none"
          >
            {/* メインのネットワークグラフ */}
            <circle cx="20" cy="75" r="10" fill="white" />
            <circle cx="50" cy="20" r="10" fill="white" />
            <circle cx="80" cy="60" r="10" fill="white" />
            
            {/* 接続線 */}
            <path d="M20 75 L50 20" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M50 20 L80 60" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 75 L80 60" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
            
            {/* ノードの中心点 */}
            <circle cx="20" cy="75" r="4" fill="#3B5998" />
            <circle cx="50" cy="20" r="4" fill="#3B5998" />
            <circle cx="80" cy="60" r="4" fill="#3B5998" />
          </svg>
          
          <div style={{ 
            fontSize: '22px', 
            fontWeight: 600, 
            marginTop: '15px', 
            letterSpacing: '1px',
            color: 'white',
            textAlign: 'center'
          }}>
            LandBridge
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}