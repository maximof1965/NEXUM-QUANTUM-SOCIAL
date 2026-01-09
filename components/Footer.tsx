'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t" style={{
      backgroundColor: 'transparent',
      borderTopColor: 'rgba(229, 193, 88, 0.3)',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-orbitron font-bold mb-4 gold-gradient-text">NEXUM QUANTUM SOCIAL</h3>
            <p className="font-exo text-sm mb-4" style={{ color: '#E0E0E0' }}>
              Desarrollo inteligente y sostenible para la sociedad. 
              Conectamos futuros, construimos presentes.
            </p>
            <div className="font-exo text-xs" style={{ color: '#A9A9A9' }}>
              <p>Siglas: NQS</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4 gold-gradient-text">Enlaces Rápidos</h4>
            <ul className="font-exo space-y-2 text-sm">
              <li>
                <Link href="#nosotros" className="transition-colors" style={{ color: '#E0E0E0' }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)';
                    (target.style as any).WebkitBackgroundClip = 'text';
                    (target.style as any).WebkitTextFillColor = 'transparent';
                    target.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#programas" className="transition-colors" style={{ color: '#E0E0E0' }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)';
                    (target.style as any).WebkitBackgroundClip = 'text';
                    (target.style as any).WebkitTextFillColor = 'transparent';
                    target.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link href="#impacto" className="transition-colors" style={{ color: '#E0E0E0' }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)';
                    (target.style as any).WebkitBackgroundClip = 'text';
                    (target.style as any).WebkitTextFillColor = 'transparent';
                    target.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
                >
                  Impacto Social
                </Link>
              </li>
              <li>
                <Link href="#transparencia" className="transition-colors" style={{ color: '#E0E0E0' }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)';
                    (target.style as any).WebkitBackgroundClip = 'text';
                    (target.style as any).WebkitTextFillColor = 'transparent';
                    target.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
                >
                  Transparencia
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4 gold-gradient-text">Sectores</h4>
            <ul className="font-exo space-y-2 text-sm" style={{ color: '#E0E0E0' }}>
              <li>Construcción</li>
              <li>Tecnología e IA</li>
              <li>Educación</li>
              <li>Infraestructura</li>
              <li>Minería</li>
              <li>Industrial</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4 gold-gradient-text">Contacto</h4>
            <ul className="font-exo space-y-2 text-sm" style={{ color: '#E0E0E0' }}>
              <li>
                <Link href="#contacto" className="transition-colors"
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.background = 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)';
                    (target.style as any).WebkitBackgroundClip = 'text';
                    (target.style as any).WebkitTextFillColor = 'transparent';
                    target.style.backgroundClip = 'text';
                  }}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
                >
                  Formulario de Contacto
                </Link>
              </li>
              <li className="text-xs mt-4" style={{ color: '#A9A9A9' }}>
                Medellín, Colombia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(229, 193, 88, 0.3)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center font-exo text-sm" style={{ color: '#E0E0E0' }}>
            <p>
              © {currentYear} NEXUM QUANTUM SOCIAL (NQS). Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#transparencia" className="transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#E5C158'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
              >
                Transparencia
              </Link>
              <Link href="#contacto" className="transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#E5C158'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E0E0E0'}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

