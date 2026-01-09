'use client'

import Section from '../Section'

export default function Impact() {
  const impactAreas = [
    {
      title: 'Familias Beneficiadas',
      description: 'Mejora de calidad de vida mediante acceso a vivienda propia y comunidades sostenibles.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Trabajadores Capacitados',
      description: 'Programas educativos que mejoran competencias y abren nuevas oportunidades laborales.',
      icon: '🎓',
    },
    {
      title: 'Sectores Modernizados',
      description: 'Implementación de tecnología de vanguardia que revoluciona procesos tradicionales.',
      icon: '🚀',
    },
    {
      title: 'Comunidades Transformadas',
      description: 'Desarrollo integral que genera crecimiento económico y bienestar social sostenible.',
      icon: '🌱',
    },
  ]

  const sectors = [
    'Industrial',
    'Transporte',
    'Minero',
    'Mineroenergético',
    'Construcción',
    'Inmobiliario',
    'Tecnológico',
    'Educativo',
  ]

  return (
    <Section
      id="impacto"
      title="Nuestro Impacto"
      subtitle="Transformamos realidades mediante proyectos que generan desarrollo inteligente y sostenible"
      bgColor="white"
    >
      {/* Impact Areas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {impactAreas.map((area, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-center transition-colors border backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.6)',
              borderColor: 'rgba(178, 132, 5, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(10, 10, 10, 0.7)';
              e.currentTarget.style.borderColor = 'rgba(178, 132, 5, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.6)';
              e.currentTarget.style.borderColor = 'rgba(178, 132, 5, 0.2)';
            }}
          >
            <div className="text-4xl mb-4">{area.icon}</div>
            <h3 className="font-orbitron font-bold mb-2 gold-gradient-text">{area.title}</h3>
            <p className="font-exo text-sm" style={{ color: '#E0E0E0' }}>{area.description}</p>
          </div>
        ))}
      </div>

      {/* Sectors */}
      <div className="mb-12">
        <h3 className="text-2xl font-orbitron font-bold mb-6 text-center gold-gradient-text">
          Sectores que Transformamos
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border text-center transition-all backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)',
                borderColor: 'rgba(178, 132, 5, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(178, 132, 5, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(178, 132, 5, 0.2)';
              }}
            >
              <p className="font-orbitron font-medium text-sm gold-gradient-text">{sector}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="p-8 rounded-lg border backdrop-blur-sm" style={{
        backgroundColor: 'rgba(26, 26, 26, 0.6)',
        borderColor: 'rgba(178, 132, 5, 0.2)',
      }}>
        <h3 className="text-2xl font-orbitron font-bold mb-4 text-center gold-gradient-text">
          Nuestra Metodología de Impacto
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{
              background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            }}>1</div>
            <h4 className="font-orbitron font-semibold mb-2 gold-gradient-text">Diseño</h4>
            <p className="font-exo text-sm" style={{ color: '#E0E0E0' }}>
              Proyectos diseñados con enfoque de impacto social medible
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold mb-2" style={{
              background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            }}>2</div>
            <h4 className="font-orbitron font-semibold mb-2 gold-gradient-text">Ejecución</h4>
            <p className="font-exo text-sm" style={{ color: '#E0E0E0' }}>
              Implementación con excelencia operacional y transparencia
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold mb-2" style={{
              background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            }}>3</div>
            <h4 className="font-orbitron font-semibold mb-2 gold-gradient-text">Medición</h4>
            <p className="font-exo text-sm" style={{ color: '#E0E0E0' }}>
              Evaluación constante de resultados e impacto generado
            </p>
          </div>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="mt-12 text-center">
        <p className="font-exo mb-4" style={{ color: '#E0E0E0' }}>
          Creemos en la transparencia radical. Todos nuestros proyectos y su impacto 
          son documentados y reportados públicamente.
        </p>
        <a
          href="#transparencia"
          className="font-semibold transition-colors"
          style={{
            background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#F4D03F';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.background = 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)';
            (target.style as any).WebkitBackgroundClip = 'text';
            (target.style as any).WebkitTextFillColor = 'transparent';
            target.style.backgroundClip = 'text';
          }}
        >
          Ver Reportes de Transparencia →
        </a>
      </div>
    </Section>
  )
}

