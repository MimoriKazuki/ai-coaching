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
          fontSize: 24,
          background: '#3B5998',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 32 32"
          fill="white"
        >
          <circle cx="6" cy="26" r="3" />
          <circle cx="16" cy="6" r="3" />
          <circle cx="26" cy="16" r="3" />
          <path d="M6 26 L16 6" stroke="white" strokeWidth="2" fill="none" />
          <path d="M16 6 L26 16" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}