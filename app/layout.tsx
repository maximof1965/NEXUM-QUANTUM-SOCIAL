import type { Metadata } from 'next'
import { Orbitron, Exo_2, Rajdhani, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundPattern from '@/components/BackgroundPattern'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo',
  display: 'swap',
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NEXUM QUANTUM SOCIAL | Desarrollo Inteligente y Sostenible',
  description: 'Grupo empresarial social que genera desarrollo inteligente y sostenible mediante proyectos constructivos, programas educativos, tecnología de vanguardia e infraestructura. Conectamos futuros, construimos presentes.',
  keywords: 'ESAL, desarrollo sostenible, vivienda social, educación, tecnología, inteligencia artificial, construcción, impacto social',
  authors: [{ name: 'NEXUM QUANTUM SOCIAL' }],
  openGraph: {
    title: 'NEXUM QUANTUM SOCIAL | Desarrollo Inteligente y Sostenible',
    description: 'Conectamos futuros, construimos presentes. Desarrollo inteligente y sostenible para la sociedad.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${orbitron.variable} ${exo2.variable} ${rajdhani.variable} ${spaceGrotesk.variable} font-exo`} style={{ backgroundColor: '#050505', position: 'relative' }}>
        <BackgroundPattern />
        <Header />
        <main className="min-h-screen" style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

