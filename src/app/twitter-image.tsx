import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PathOpt - Growth & Operations Partner for Small Business';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          backgroundImage: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FF6B35 0%, #FF8F65 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: 24,
              letterSpacing: '-2px',
            }}
          >
            PathOpt
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#A0A0A0',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Growth & Operations Partner for Small Business
          </div>

          {/* Accent */}
          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              color: '#FF6B35',
              fontWeight: 600,
            }}
          >
            Strategy • Operations • Marketing
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
