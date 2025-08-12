import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'LANDBRIDGE AIコーチングプログラム'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '42px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              marginBottom: '30px',
              opacity: 0.9,
            }}
          >
            LANDBRIDGE
          </div>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              marginBottom: '40px',
              lineHeight: 1.2,
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AIコーチングプログラム
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 400,
              opacity: 0.95,
              marginBottom: '24px',
            }}
          >
            Claude Codeを活用した実践的AIコーチング
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 300,
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <span>🚀</span>
            <span>最短2週間でAI先進企業へ変革</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}