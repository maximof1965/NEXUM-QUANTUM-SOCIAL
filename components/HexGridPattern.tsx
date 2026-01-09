'use client'

interface HexGridPatternProps {
  color?: string
}

export default function HexGridPattern({ color = '#E5C158' }: HexGridPatternProps) {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
      <defs>
        <pattern
          id="hex-grid"
          width="60"
          height="104"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.5)"
        >
          <path
            d="M30 0 L60 17 L60 52 L30 69 L0 52 L0 17 Z M30 69 L60 86 L60 121 L30 138 L0 121 L0 86 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-grid)" />
      <rect
        width="100%"
        height="100%"
        fill="url(#hex-grid)"
        style={{ mixBlendMode: 'overlay' }}
      />
    </svg>
  )
}

