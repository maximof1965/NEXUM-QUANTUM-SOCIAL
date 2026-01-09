/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Amarillo Oro - Efecto metal precioso
        gold: {
          highlight: '#B28405', // Brillo máximo (Oro brillante)
          base: '#B28405',      // Tono base (Oro brillante)
          shadow: '#B28405',    // Sombra (Oro brillante)
          // Variaciones para uso en clases
          50: '#B28405',   // Brillo máximo
          100: '#B28405',  // Brillo máximo
          200: '#B28405',  // Brillo máximo
          300: '#B28405',  // Tono base
          400: '#B28405',  // Tono base
          500: '#B28405',  // Tono base (principal)
          600: '#B28405',  // Tono base
          700: '#B28405',  // Sombra
          800: '#B28405',  // Sombra
          900: '#B28405',  // Sombra
        },
        // Plateado Brillante - Estructura arquitectónica
        silver: {
          light: '#F5F5F5',  // Reflejo de luz (Blanco humo/Plata claro)
          base: '#A9A9A9',   // Tono base (Gris oscuro metálico)
          shadow: '#4F4F4F', // Sombra de estructura (Gris carbón)
          // Variaciones para uso en clases
          50: '#F5F5F5',   // Reflejo de luz
          100: '#F5F5F5',  // Reflejo de luz
          200: '#F5F5F5',  // Reflejo de luz
          300: '#A9A9A9',  // Tono base
          400: '#A9A9A9',  // Tono base
          500: '#A9A9A9',  // Tono base (principal)
          600: '#A9A9A9',  // Tono base
          700: '#4F4F4F',  // Sombra de estructura
          800: '#4F4F4F',  // Sombra de estructura
          900: '#4F4F4F',  // Sombra de estructura
        },
        // Negro y Fondo Técnico
        black: {
          surface: '#121212',  // Superficie de fondo (Negro mate profundo)
          pure: '#000000',     // Sombras proyectadas (Negro puro)
          grid: '#333333',     // Líneas de cuadrícula (Gris grafito fino)
          // Variaciones para uso en clases
          50: '#121212',   // Superficie de fondo
          100: '#121212',  // Superficie de fondo
          200: '#000000',  // Negro puro
          300: '#000000',  // Negro puro
          400: '#000000',  // Negro puro
          500: '#000000',  // Negro puro
          600: '#333333',  // Líneas de cuadrícula
          700: '#333333',  // Líneas de cuadrícula
          800: '#121212',  // Superficie de fondo
          900: '#000000',  // Negro puro
        },
        // Tipografía
        text: {
          tagline: '#E0E0E0', // Plata suave para tagline
          // Variaciones
          50: '#E0E0E0',   // Tagline
          100: '#E0E0E0',  // Tagline
          200: '#E0E0E0',  // Tagline
          300: '#E0E0E0',  // Tagline
          400: '#E0E0E0',  // Tagline
          500: '#E0E0E0',  // Tagline (principal)
        },
        // Primary (usando dorado como base para compatibilidad)
        primary: {
          50: '#FFD700',
          100: '#FFD700',
          200: '#FFD700',
          300: '#D4AF37',
          400: '#D4AF37',
          500: '#D4AF37',
          600: '#D4AF37',
          700: '#8B4513',
          800: '#8B4513',
          900: '#8B4513',
        },
      },
      fontFamily: {
        sans: ['var(--font-exo)', 'system-ui', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        exo: ['var(--font-exo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

