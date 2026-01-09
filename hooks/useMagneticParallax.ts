import { useEffect, useRef } from 'react'

interface UseMagneticParallaxOptions {
  intensity?: number
  ease?: number
  enabled?: boolean
}

export function useMagneticParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseMagneticParallaxOptions = {}
) {
  const {
    intensity = 20,
    ease = 0.1,
    enabled = true
  } = options

  const elementRef = useRef<T>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calcular posición relativa al centro (-1 a 1)
      const relativeX = (e.clientX - centerX) / (rect.width / 2)
      const relativeY = (e.clientY - centerY) / (rect.height / 2)
      
      mousePosition.current = { x: relativeX, y: relativeY }
      
      if (!animationFrameRef.current) {
        animate()
      }
    }

    const animate = () => {
      // Easing hacia el centro (suavizado)
      currentPosition.current.x += (mousePosition.current.x - currentPosition.current.x) * ease
      currentPosition.current.y += (mousePosition.current.y - currentPosition.current.y) * ease

      // Aplicar transformación
      if (elementRef.current) {
        elementRef.current.style.transform = `translate(${currentPosition.current.x * intensity}px, ${currentPosition.current.y * intensity}px)`
      }

      // Continuar animación si hay movimiento significativo
      const distance = Math.sqrt(
        Math.pow(mousePosition.current.x - currentPosition.current.x, 2) +
        Math.pow(mousePosition.current.y - currentPosition.current.y, 2)
      )

      if (distance > 0.001) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        animationFrameRef.current = undefined
      }
    }

    const element = elementRef.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      
      // Reset cuando el mouse sale del elemento
      element.addEventListener('mouseleave', () => {
        mousePosition.current = { x: 0, y: 0 }
      })

      return () => {
        element.removeEventListener('mousemove', handleMouseMove)
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }
  }, [intensity, ease, enabled])

  return elementRef
}

