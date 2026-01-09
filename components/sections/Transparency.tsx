'use client'

import Section from '../Section'

export default function Transparency() {
  const transparencyPrinciples = [
    {
      title: 'Reportes Públicos',
      description: 'Publicamos reportes trimestrales de impacto social con métricas verificables.',
      icon: '📊',
    },
    {
      title: 'Estados Financieros',
      description: 'Rendición de cuentas públicas anuales con estados financieros auditados.',
      icon: '💰',
    },
    {
      title: 'Portal de Transparencia',
      description: 'Mantenemos un portal con información actualizada y accesible al público.',
      icon: '🌐',
    },
    {
      title: 'Uso de Recursos',
      description: 'Desglose claro de uso de recursos por proyecto y métricas de eficiencia.',
      icon: '📈',
    },
  ]

  return (
    <Section
      id="transparencia"
      title="Transparencia Radical"
      subtitle="La confianza se construye con hechos, no con promesas. Rendición de cuentas clara y pública."
      bgColor="white"
    >
      {/* Principles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {transparencyPrinciples.map((principle, index) => (
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
            <div className="text-4xl mb-4">{principle.icon}</div>
            <h3 className="font-orbitron font-bold mb-2 gold-gradient-text">{principle.title}</h3>
            <p className="font-exo text-sm" style={{ color: '#E0E0E0' }}>{principle.description}</p>
          </div>
        ))}
      </div>

      {/* Commitment */}
      <div className="p-8 rounded-lg mb-8 border backdrop-blur-sm" style={{
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        borderColor: 'rgba(178, 132, 5, 0.3)',
      }}>
        <h3 className="text-2xl font-orbitron font-bold mb-4 text-center gold-gradient-text">
          Nuestro Compromiso Público
        </h3>
        <ul className="font-exo space-y-3 max-w-3xl mx-auto" style={{ color: '#E0E0E0' }}>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Publicar reportes trimestrales de impacto social con métricas verificables</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Rendir cuentas públicas anuales con estados financieros auditados</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Mantener un portal de transparencia con información actualizada</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Responder a todas las consultas y solicitudes de información</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Cumplir o superar todos los objetivos anunciados públicamente</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Reconocer públicamente errores y medidas correctivas</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Compartir metodologías y aprendizajes con otras organizaciones</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 gold-gradient-text">✓</span>
            <span>Mantener estándares éticos más altos que los requeridos legalmente</span>
          </li>
        </ul>
      </div>

      {/* Note */}
      <div className="text-center">
        <p className="font-exo mb-4" style={{ color: '#E0E0E0' }}>
          Los reportes de transparencia estarán disponibles próximamente. 
          Estamos en proceso de organización y documentación inicial.
        </p>
        <p className="font-exo text-sm" style={{ color: '#A9A9A9' }}>
          Para solicitar información específica, por favor contáctanos.
        </p>
      </div>
    </Section>
  )
}

