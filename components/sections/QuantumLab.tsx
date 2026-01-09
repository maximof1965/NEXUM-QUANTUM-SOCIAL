'use client'

import { useMemo } from 'react'
import { Hexagon } from 'lucide-react'

export default function QuantumLab() {
  const binaryData1 = useMemo(
    () => Array.from({ length: 10 }, () => (Math.random() > 0.5 ? 1 : 0)),
    []
  )
  const binaryData2 = useMemo(
    () => Array.from({ length: 10 }, () => (Math.random() > 0.5 ? 1 : 0)),
    []
  )
  const binaryData3 = useMemo(
    () => Array.from({ length: 10 }, () => (Math.random() > 0.5 ? 1 : 0)),
    []
  )

  const projects = [
    { title: 'Neuro-Marketing Neural Net', progress: 87, status: 'Training' },
    { title: 'Blockchain Interface Alpha', progress: 42, status: 'Compiling' },
    { title: 'Quantum Data Visualization', progress: 95, status: 'Polishing' }
  ]

  return (
    <section
      id="quantum"
      className="flex-1 flex flex-col items-center justify-center p-8 animate-fadeIn relative overflow-hidden section-padding"
      style={{ 
        backgroundColor: 'transparent', 
        minHeight: '100vh',
      }}
    >
      {/* Binary background */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-20 opacity-[0.03] text-[#D4AF37] font-mono text-xs overflow-hidden">
        <div className="flex flex-col gap-4 mt-10">
          {binaryData1.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-32">
          {binaryData2.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-5">
          {binaryData3.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 3D Quantum visualization */}
        <div className="flex justify-center relative preserve-3d h-[400px]">
          {/* Central hexagon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full border border-[#D4AF37]/50 shadow-[0_0_80px_rgba(212,175,55,0.2)] flex items-center justify-center z-20 animate-float">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-black opacity-20 absolute animate-pulse" />
            <Hexagon className="w-12 h-12 text-[#D4AF37] animate-spin-slow" />
          </div>

          {/* Rotating circles */}
          {[0, 60, 120].map((deg, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#D4AF37]/30 rounded-full"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg) rotateX(75deg)`,
                animation: `spin 8s linear infinite ${i * -2}s`
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_20px_#FFD700]" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="border-l-2 border-[#D4AF37] pl-6">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-2">
              QUANTUM LAB
            </h2>
            <p className="text-[#888] font-exo tracking-wider">
              Experimental projects in deployment phase.
            </p>
          </div>

          <div className="grid gap-4">
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#050505]/50 backdrop-blur-sm border border-[#333] p-5 hover:border-[#D4AF37]/50 transition-colors group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-orbitron text-sm text-[#EEE] tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#666] border border-[#333] px-2 py-1 uppercase">
                    {item.status}
                  </span>
                </div>
                <div className="w-full bg-[#1a1a1a]/80 backdrop-blur-sm h-[2px] relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#D4AF37]"
                    style={{
                      width: `${item.progress}%`,
                      boxShadow: '0 0 10px #D4AF37'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

