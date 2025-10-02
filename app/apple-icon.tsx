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
          fontSize: 42,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '22%',
          fontWeight: 'bold',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: -4 }}>UI/UX</div>
        <div style={{ fontSize: 24 }}>DESIGNER</div>
      </div>
    ),
    {
      ...size,
    }
  )
}