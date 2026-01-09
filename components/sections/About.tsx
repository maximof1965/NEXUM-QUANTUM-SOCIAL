'use client'

import Section from '../Section'

export default function About() {
  return (
    <Section
      id="nosotros"
      title="Sobre Nosotros"
      subtitle="Grupo empresarial social que genera desarrollo inteligente y sostenible"
      bgColor="white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h3 className="text-2xl font-orbitron font-bold mb-4 gold-gradient-text">
            Nuestra Misión
          </h3>
          <p className="font-exo leading-relaxed mb-6" style={{ color: '#E0E0E0' }}>
            Somos un grupo empresarial social que genera desarrollo inteligente y 
            sostenible para la sociedad, integrando múltiples sectores (industrial, 
            transporte, minero, mineroenergético, construcción, inmobiliario, 
            tecnológico y educativo) para mejorar la calidad de vida de trabajadores 
            vulnerables, sus familias y comunidades.
          </p>
          <p className="font-exo leading-relaxed" style={{ color: '#E0E0E0' }}>
            Nuestra misión se materializa mediante proyectos constructivos, programas 
            educativos, implementación de tecnologías de vanguardia, y desarrollo de 
            infraestructura, todo con un propósito filantrópico que se sostiene a 
            través de un modelo económico viable y transparente.
          </p>
        </div>
        
        <div className="p-8 rounded-lg border backdrop-blur-sm" style={{
          backgroundColor: 'rgba(26, 26, 26, 0.6)',
          borderColor: 'rgba(178, 132, 5, 0.2)',
        }}>
          <h3 className="text-2xl font-orbitron font-bold mb-4 gold-gradient-text">
            Nuestra Visión
          </h3>
          <p className="font-exo leading-relaxed mb-4" style={{ color: '#E0E0E0' }}>
            Para el año 2035, seremos reconocidos como el grupo empresarial social 
            más prestigioso e innovador de Colombia y referente internacional en 
            modelos de desarrollo inteligente y sostenible.
          </p>
          <p className="font-exo leading-relaxed" style={{ color: '#E0E0E0' }}>
            Habremos transformado la vida de más de 100,000 familias, modernizado 
            sectores tradicionales con tecnología de vanguardia, construido comunidades 
            sostenibles, y establecido un modelo replicable que demuestra que el éxito 
            empresarial y el impacto social se potencian mutuamente.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="mt-16">
        <h3 className="text-2xl font-orbitron font-bold mb-8 text-center gold-gradient-text">
          Nuestros Valores
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Integridad con Propósito',
              description: 'Coherencia absoluta entre generación de ingresos e impacto social.',
            },
            {
              title: 'Sostenibilidad Evolutiva',
              description: 'Generamos recursos hoy sin comprometer el bienestar futuro.',
            },
            {
              title: 'Excelencia Colaborativa',
              description: 'Crecimiento de cada empresa bajo estándares de alta calidad.',
            },
            {
              title: 'Transparencia Radical',
              description: 'Rendición de cuentas clara sobre cómo el éxito comercial se transforma en beneficio social.',
            },
            {
              title: 'Innovación Social',
              description: 'Buscamos nuevas formas de resolver problemas humanos a través del mercado.',
            },
            {
              title: 'Responsabilidad Transformadora',
              description: 'No solo cumplimos, transformamos realidades de manera medible.',
            },
            {
              title: 'Resiliencia Estratégica',
              description: 'Adaptamos y evolucionamos sin perder el norte.',
            },
            {
              title: 'Compromiso con la Excelencia',
              description: 'La eficiencia no es opcional. Cada recurso optimizado maximiza impacto.',
            },
          ].map((valor, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-sm border hover:shadow-lg transition-all backdrop-blur-sm"
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
              <h4 className="font-orbitron font-bold mb-2 gold-gradient-text">{valor.title}</h4>
              <p className="font-exo text-sm" style={{ color: '#E0E0E0' }}>{valor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

