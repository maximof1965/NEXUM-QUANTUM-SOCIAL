'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import TextReveal from './TextReveal'

export default function Hero() {
  const [showSlide, setShowSlide] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlide(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden animate-fadeIn min-h-screen pt-16 pb-16"
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 1,
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

      {/* Contenido principal - Contenedor relativo para posicionamiento absoluto */}
      <div className="container-custom max-w-7xl mx-auto relative z-10 w-full h-[80vh] md:h-[85vh]">
        {/* Logo y anillos */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            showSlide 
              ? 'top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-[25%] md:-translate-x-1/2 md:-translate-y-1/2' // Mobile: centro mitad superior (25%) | Desktop: centro mitad izquierda (25% horizontal, 50% vertical)
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' // Centro inicial
          }`}
          style={{
            transitionDelay: showSlide ? '0ms' : '0ms',
          }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Anillos orbitando alrededor del logo */}
            {[0, 60, 120].map((deg, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] border border-[#D4AF37]/30 rounded-full"
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

        {/* Texto animado */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            showSlide
              ? 'top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 md:top-1/2 md:left-[75%] md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-100' // Mobile: centro mitad inferior (75%) | Desktop: centro mitad derecha (75% horizontal, 50% vertical)
              : 'top-[100%] left-1/2 -translate-x-1/2 translate-y-0 opacity-0 md:left-[100%] md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-0' // Mobile: fuera abajo | Desktop: fuera derecha
          }`}
          style={{
            transitionDelay: showSlide ? '0ms' : '0ms',
          }}
        >
          <div className="text-center space-y-3 md:space-y-4 px-4 max-w-md md:max-w-lg lg:max-w-xl">
            {/* ASOCIACIÓN GREMIAL - Cada palabra en un renglón */}
            <div className="flex flex-col items-center">
              <TextReveal
                text="ASOCIACIÓN"
                revealBy="all"
                delay={showSlide ? 0 : 1.6}
                duration={0.8}
                stagger={0.08}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-orbitron font-bold block leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))',
                }}
              />
              <TextReveal
                text="GREMIAL"
                revealBy="all"
                delay={showSlide ? 0.15 : 1.75}
                duration={0.8}
                stagger={0.08}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-orbitron font-bold block leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))',
                }}
              />
            </div>
            <TextReveal
              text="NEXUM QUANTUM SOCIAL"
              revealBy="word"
              delay={showSlide ? 0.3 : 1.9}
              duration={0.6}
              stagger={0.06}
              className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.3em] uppercase font-orbitron mt-4"
              style={{
                background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))',
              }}
            />
          </div>
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
