'use client'

import HexGridPattern from './HexGridPattern'

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-[0] opacity-[0.15] pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <HexGridPattern color="#E5C158" />
    </div>
  )
}

