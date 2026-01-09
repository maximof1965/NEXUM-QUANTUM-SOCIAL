'use client'

import Section from '../Section'

export default function Programs() {
  const programs = [
    {
      title: 'Vivienda Social',
      description: 'Construcción de vivienda VIS/VIP para trabajadores, mineros, obreros y transportadores, creando comunidades sostenibles con infraestructura completa.',
      icon: '🏠',
      sectors: ['Construcción', 'Inmobiliario'],
    },
    {
      title: 'Educación en IA',
      description: 'Programas de capacitación en inteligencia artificial y tecnologías emergentes para trabajadores de sectores tradicionales, mejorando su futuro laboral.',
      icon: '🤖',
      sectors: ['Educación', 'Tecnología'],
    },
    {
      title: 'Infraestructura Vial',
      description: 'Desarrollo de proyectos viales que conectan regiones, generan desarrollo económico y mejoran la calidad de vida de las comunidades.',
      icon: '🛣️',
      sectors: ['Infraestructura', 'Construcción'],
    },
    {
      title: 'Modernización Tecnológica',
      description: 'Implementación de inteligencia artificial y automatización en sectores tradicionales, revolucionando procesos empresariales.',
      icon: '⚡',
      sectors: ['Tecnología', 'Industrial'],
    },
    {
      title: 'Desarrollo Minero Responsable',
      description: 'Proyectos mineros con enfoque de responsabilidad social, ambiental y desarrollo comunitario sostenible.',
      icon: '⛏️',
      sectors: ['Minería', 'Mineroenergético'],
    },
    {
      title: 'Programas Gubernamentales',
      description: 'Ejecución de contratos con entidades gubernamentales para programas de educación, vivienda, infraestructura y desarrollo social.',
      icon: '🏛️',
      sectors: ['Todos los sectores'],
    },
  ]

  return (
    <Section
      id="programas"
      title="Nuestros Programas"
      subtitle="Proyectos que transforman vidas y comunidades mediante desarrollo inteligente y sostenible"
      bgColor="gray"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.6)',
              borderColor: 'rgba(178, 132, 5, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(178, 132, 5, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(178, 132, 5, 0.2)';
            }}
          >
            <div className="text-5xl mb-4">{program.icon}</div>
            <h3 className="text-xl font-orbitron font-bold mb-3 gold-gradient-text">
              {program.title}
            </h3>
            <p className="font-exo mb-4 leading-relaxed" style={{ color: '#E0E0E0' }}>
              {program.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {program.sectors.map((sector, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full border gold-gradient-text"
                  style={{
                    backgroundColor: 'rgba(191, 149, 63, 0.1)',
                    borderColor: 'rgba(191, 149, 63, 0.3)',
                  }}
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="font-exo mb-6" style={{ color: '#E0E0E0' }}>
          ¿Interesado en alguno de nuestros programas o tienes una propuesta?
        </p>
        <a
          href="#contacto"
          className="inline-block px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 gold-gradient-bg"
          style={{
            color: '#000000',
          }}
        >
          Contáctanos
        </a>
      </div>
    </Section>
  )
}

