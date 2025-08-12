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
          fontSize: 120,
          background: '#3B5998',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '36px',
        }}
      >
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="20" cy="80" r="10" fill="white" />
          <circle cx="50" cy="20" r="10" fill="white" />
          <circle cx="80" cy="50" r="10" fill="white" />
          <path d="M20 80 L50 20" stroke="white" strokeWidth="6" />
          <path d="M50 20 L80 50" stroke="white" strokeWidth="6" />
        </svg>
        <div style={{ fontSize: '24px', fontWeight: 700, marginTop: '10px', letterSpacing: '2px' }}>
          LandBridge
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}