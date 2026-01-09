'use client'

import { useEffect, useRef, useState } from 'react'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  revealBy?: 'word' | 'letter' | 'all'
  style?: React.CSSProperties
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  revealBy = 'word',
  style,
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay * 1000) // Convertir segundos a milisegundos
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Activar cuando el 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px', // Activar un poco antes de que sea completamente visible
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [delay])

  const renderText = () => {
    const baseTransform = isVisible ? 'translateY(0)' : 'translateY(32px)'
    const baseOpacity = isVisible ? 1 : 0

    if (revealBy === 'all') {
      return (
        <span
          className="inline-block transition-all ease-out"
          style={{
            ...style,
            opacity: baseOpacity,
            transform: baseTransform,
            transitionDelay: `${delay * 1000}ms`,
            transitionDuration: `${duration}s`,
          }}
        >
          {text}
        </span>
      )
    }

    if (revealBy === 'word') {
      const words = text.split(' ')
      return words.map((word, index) => (
        <span key={index} className="inline-block mr-2">
          {word.split('').map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="inline-block transition-all ease-out"
              style={{
                ...style,
                opacity: baseOpacity,
                transform: baseTransform,
                transitionDelay: `${(delay + (index * stagger + letterIndex * stagger * 0.3)) * 1000}ms`,
                transitionDuration: `${duration}s`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      ))
    }

    // revealBy === 'letter'
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className="inline-block transition-all ease-out"
        style={{
          ...style,
          opacity: baseOpacity,
          transform: baseTransform,
          transitionDelay: `${(delay + index * stagger) * 1000}ms`,
          transitionDuration: `${duration}s`,
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))
  }

  return (
    <div ref={containerRef} className={className} style={style}>
      {renderText()}
    </div>
  )
}

