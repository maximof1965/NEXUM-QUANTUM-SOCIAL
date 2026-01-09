'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Layers, Scan, Cpu } from 'lucide-react'
import TextReveal from './TextReveal'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setShowTitle(true)
    }, 1750)
    return () => clearTimeout(timer)
  }, [])

  const GlassCard = ({ title, sub, children, icon: Icon, delay }: { 
    title: string
    sub: string
    children: React.ReactNode
    icon: any
    delay: number
  }) => (
    <div
      className="group relative p-8 bg-[#050505]/40 backdrop-blur-sm border border-[#333] hover:border-[#D4AF37]/50 transition-all duration-700 hover:transform hover:-translate-y-2"
      style={{ 
        animation: `fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms forwards`,
        opacity: 0
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 border-t border-r border-[#D4AF37]" />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-[#050505]/50 backdrop-blur-sm border border-[#333] group-hover:border-[#D4AF37] transition-colors rounded-sm">
            <Icon className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <span 
            className="font-mono text-[10px] tracking-widest"
            style={{
              background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.7,
            }}
          >
            {sub}
          </span>
        </div>
        <h3 className="font-orbitron font-bold text-xl tracking-wider mb-4 gold-gradient-text transition-all">
          {title}
        </h3>
        <p 
          className="font-exo font-light leading-7 text-sm"
          style={{ 
            background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.9,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  )

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden animate-fadeIn"
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Círculos giratorios de fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-[#D4AF37]/5 rounded-full animate-spin-slow pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-[#D4AF37]/10 rounded-full animate-spin-reverse pointer-events-none dashed-border"
        style={{ zIndex: 1 }}
      />

      {/* Contenido principal */}
      <div className="container-custom max-w-7xl mx-auto relative z-10">
        <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          {/* Logo y anillos - Inicia centrado, se mueve a la izquierda */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out preserve-3d ${
              showTitle ? 'md:left-[25%] md:-translate-x-1/2' : ''
            }`}
            style={{
              transitionDelay: showTitle ? '0ms' : '0ms',
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Anillos orbitando alrededor del logo */}
              {[0, 60, 120].map((deg, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] border border-[#D4AF37]/30 rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${deg}deg) rotateX(75deg)`,
                    animation: `spin 8s linear infinite ${i * -2}s`,
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_20px_#FFD700]" />
                </div>
              ))}
              
              {/* Círculos animados alrededor del logo */}
              <div 
                className="absolute inset-[-15px] border border-[#D4AF37]/20 rounded-full animate-spin-slow"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="absolute inset-[-35px] border border-[#D4AF37]/10 rounded-full animate-spin-reverse" />
              
              {/* Logo circular con efecto flotante */}
              <div className="absolute inset-0 rounded-full bg-black flex items-center justify-center overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.2)] animate-float z-20">
                <Image
                  src="/LOGOFINAL.png"
                  alt="NEXUM QUANTUM SOCIAL - Logo"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Texto animado - Desliza desde la derecha */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${
              showTitle 
                ? 'md:left-[75%] md:-translate-x-1/2 opacity-100' 
                : 'md:left-[100%] opacity-0'
            }`}
            style={{
              transitionDelay: showTitle ? '0ms' : '0ms',
            }}
          >
            <div className="text-center md:text-center space-y-2 md:space-y-3">
              {/* ASOCIACIÓN GREMIAL - Cada palabra en un renglón */}
              <div className="flex flex-col items-center md:items-center">
                <TextReveal
                  text="ASOCIACIÓN"
                  revealBy="all"
                  delay={0}
                  duration={0.8}
                  stagger={0.08}
                  className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold block"
                  style={{
                    background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
                <TextReveal
                  text="GREMIAL"
                  revealBy="all"
                  delay={0.15}
                  duration={0.8}
                  stagger={0.08}
                  className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold block"
                  style={{
                    background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
              </div>
              <TextReveal
                text="NEXUM QUANTUM SOCIAL"
                revealBy="word"
                delay={0.3}
                duration={0.6}
                stagger={0.06}
                className="text-sm md:text-base tracking-[0.3em] uppercase font-orbitron"
                style={{
                  background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />
            </div>
          </div>
        </div>

        {/* Tarjetas GlassCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full px-4">
          <GlassCard
            title="MISSION"
            sub="PROTOCOL 01"
            icon={Layers}
            delay={100}
          >
            Catalyzing enterprise evolution through high-fidelity human-AI symbiosis architectures.
          </GlassCard>
          <GlassCard
            title="VISION"
            sub="PROTOCOL 02"
            icon={Scan}
            delay={200}
          >
            Redefining the computational boundaries of creative intelligence.
          </GlassCard>
          <GlassCard
            title="CORE"
            sub="PROTOCOL 03"
            icon={Cpu}
            delay={300}
          >
            Applied consciousness engineering for disruptive VUCA environments.
          </GlassCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a 
          href="#nosotros" 
          className="transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#D4AF37"
            viewBox="0 0 24 24"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
