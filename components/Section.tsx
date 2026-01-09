'use client'

import TextReveal from './TextReveal'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  bgColor?: 'white' | 'gray' | 'primary'
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'white',
}: SectionProps) {
  const bgStyles = {
    white: { backgroundColor: 'transparent' }, // Transparente para ver el fondo global con patrón de rombos
    gray: { backgroundColor: 'transparent' },  // Transparente para uniformidad
    primary: { backgroundColor: 'transparent' }, // Transparente para uniformidad
  }

  return (
    <section
      id={id}
      className={`section-padding ${className}`}
      style={{ 
        ...bgStyles[bgColor], 
        position: 'relative', 
        zIndex: 1,
      }}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <TextReveal
                text={title}
                revealBy="word"
                delay={0.2}
                duration={0.8}
                stagger={0.08}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />
            )}
            {subtitle && (
              <TextReveal
                text={subtitle}
                revealBy="word"
                delay={0.5}
                duration={0.6}
                stagger={0.05}
                className="text-lg md:text-xl max-w-3xl mx-auto"
                style={{ color: '#E0E0E0' }}
              />
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

