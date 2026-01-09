'use client'

import Section from '../Section'

export default function Partners() {
  const partnerTypes = [
    {
      title: 'Bancos e Instituciones Financieras',
      description: 'Aliados estratégicos para financiación de proyectos de vivienda y desarrollo.',
      icon: '🏦',
    },
    {
      title: 'Entidades Gubernamentales',
      description: 'Contratos y alianzas para ejecución de programas sociales y de infraestructura.',
      icon: '🏛️',
    },
    {
      title: 'Empresas del Sector Privado',
      description: 'Colaboraciones para proyectos de responsabilidad social y desarrollo sostenible.',
      icon: '🏢',
    },
    {
      title: 'Organizaciones Internacionales',
      description: 'Alianzas para cooperación, donaciones y proyectos de desarrollo global.',
      icon: '🌍',
    },
    {
      title: 'Instituciones Educativas',
      description: 'Partnerships para programas de capacitación y desarrollo de competencias.',
      icon: '🎓',
    },
    {
      title: 'Gremios Sectoriales',
      description: 'Colaboración con asociaciones de minería, construcción, transporte e industria.',
      icon: '🤝',
    },
  ]

  return (
    <Section
      id="aliados"
      title="Nuestros Aliados"
      subtitle="Construimos ecosistemas de colaboración estratégica para maximizar impacto"
      bgColor="gray"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {partnerTypes.map((partner, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border backdrop-blur-sm"
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
            <div className="text-4xl mb-4">{partner.icon}</div>
            <h3 className="text-lg font-orbitron font-bold mb-3 gold-gradient-text">
              {partner.title}
            </h3>
            <p className="font-exo text-sm leading-relaxed" style={{ color: '#E0E0E0' }}>
              {partner.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="p-8 rounded-lg text-center border backdrop-blur-sm" style={{
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        borderColor: 'rgba(178, 132, 5, 0.3)',
      }}>
        <h3 className="text-2xl font-orbitron font-bold mb-4 gold-gradient-text">
          ¿Quieres ser nuestro aliado?
        </h3>
        <p className="font-exo mb-6" style={{ color: '#E0E0E0' }}>
          Estamos abiertos a alianzas estratégicas que generen impacto social 
          positivo y desarrollo sostenible.
        </p>
        <a
          href="#contacto"
          className="inline-block px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 gold-gradient-bg"
          style={{
            color: '#000000',
            boxShadow: '0 0 30px rgba(191, 149, 63, 0.6), 0 0 60px rgba(191, 149, 63, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(191, 149, 63, 0.8), 0 0 80px rgba(191, 149, 63, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(191, 149, 63, 0.6), 0 0 60px rgba(191, 149, 63, 0.3)';
          }}
        >
          Contáctanos para Alianzas
        </a>
      </div>
    </Section>
  )
}

