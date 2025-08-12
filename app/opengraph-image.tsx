import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'LandBridge AIコーチングプログラム'
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
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B5998 0%, #4A69BD 100%)',
          color: 'white',
          padding: '60px',
        }}
      >
        {/* ロゴとブランド名 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '50px',
            gap: '30px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#3B5998',
            }}
          >
            L
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 300,
              letterSpacing: '0.15em',
            }}
          >
            LandBridge
          </div>
        </div>
        
        {/* メインタイトル */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            marginBottom: '30px',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          AIコーチングプログラム
        </div>
        
        {/* サブタイトル */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 400,
            marginBottom: '40px',
            textAlign: 'center',
            opacity: 0.95,
          }}
        >
          Claude Codeを活用した実践的AIコーチング
        </div>
        
        {/* キャッチフレーズ */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 300,
            textAlign: 'center',
            padding: '20px 40px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
          }}
        >
          最短2週間でAI先進企業へ変革
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}