'use client'

import { useState } from 'react'
import Section from '../Section'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ahora, simulamos un envío
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general',
      })
      
      // Resetear mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <Section
      id="contacto"
      title="Contacto"
      subtitle="Estamos aquí para responder tus preguntas y explorar oportunidades de colaboración"
      bgColor="gray"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-orbitron font-bold mb-6 gold-gradient-text">
            Información de Contacto
          </h3>
          
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="font-orbitron font-semibold mb-2 gold-gradient-text">NEXUM QUANTUM SOCIAL</h4>
              <p className="font-exo" style={{ color: '#E0E0E0' }}>Siglas: NQS</p>
              <p className="font-exo mt-1" style={{ color: '#E0E0E0' }}>Medellín, Colombia</p>
            </div>
            
            <div>
              <h4 className="font-orbitron font-semibold mb-2 gold-gradient-text">Lema</h4>
              <p className="font-exo italic" style={{ color: '#E0E0E0' }}>
                "Conectamos futuros, construimos presentes"
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg border backdrop-blur-sm" style={{
            backgroundColor: 'rgba(26, 26, 26, 0.6)',
            borderColor: 'rgba(178, 132, 5, 0.2)',
          }}>
            <h4 className="font-orbitron font-semibold mb-4 gold-gradient-text">
              ¿Para qué puedes contactarnos?
            </h4>
            <ul className="font-exo space-y-2 text-sm" style={{ color: '#E0E0E0' }}>
              <li>• Consultas sobre nuestros programas</li>
              <li>• Propuestas de alianzas estratégicas</li>
              <li>• Solicitudes de información</li>
              <li>• Oportunidades de colaboración</li>
              <li>• Contratos gubernamentales</li>
              <li>• Proyectos de desarrollo</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="type" className="block font-orbitron text-sm font-medium mb-2 gold-gradient-text">
                Tipo de Consulta
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 font-exo backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(178, 132, 5, 0.3)',
                  color: '#E0E0E0',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#bf953f';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(191, 149, 63, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(191, 149, 63, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              >
                <option value="general">Consulta General</option>
                <option value="alliance">Alianza Estratégica</option>
                <option value="project">Propuesta de Proyecto</option>
                <option value="contract">Contrato Gubernamental</option>
                <option value="transparency">Solicitud de Información</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block font-orbitron text-sm font-medium mb-2 gold-gradient-text">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 font-exo backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(178, 132, 5, 0.3)',
                  color: '#E0E0E0',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#bf953f';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(191, 149, 63, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(191, 149, 63, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-orbitron text-sm font-medium mb-2 gold-gradient-text">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 font-exo backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(178, 132, 5, 0.3)',
                  color: '#E0E0E0',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#bf953f';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(191, 149, 63, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(191, 149, 63, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-orbitron text-sm font-medium mb-2 gold-gradient-text">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 font-exo backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(178, 132, 5, 0.3)',
                  color: '#E0E0E0',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#bf953f';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(191, 149, 63, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(191, 149, 63, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-orbitron text-sm font-medium mb-2 gold-gradient-text">
                Asunto *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 font-exo backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(178, 132, 5, 0.3)',
                  color: '#E0E0E0',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#bf953f';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(191, 149, 63, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(191, 149, 63, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-orbitron text-sm font-medium mb-2 gold-gradient-text">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 font-exo backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                  borderColor: 'rgba(178, 132, 5, 0.3)',
                  color: '#E0E0E0',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#bf953f';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(191, 149, 63, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(191, 149, 63, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>

            {submitStatus === 'success' && (
              <div className="font-exo bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="font-exo bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
                Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 font-orbitron font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${!isSubmitting ? 'gold-gradient-bg' : ''}`}
              style={{
                backgroundColor: isSubmitting ? '#8B4513' : undefined,
                color: '#000000',
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}

