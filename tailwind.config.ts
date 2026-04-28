import type { Config } from 'tailwindcss'

/**
 * ╔══════════════════════════════════════════════════╗
 * ║       KONEKO ADS — SISTEMA DE DISEÑO CENTRAL     ║
 * ╠══════════════════════════════════════════════════╣
 * ║ Para cambiar la identidad visual edita SOLO      ║
 * ║ los tokens de esta sección. Nada más.            ║
 * ╚══════════════════════════════════════════════════╝
 *
 * ─── GUÍA RÁPIDA DE PERSONALIZACIÓN ───────────────
 *
 * PALETA:
 *   koneko.bg         → fondo principal
 *   koneko.bg-alt     → fondo secciones alternas
 *   koneko.primary    → acento principal (violeta)
 *   koneko.neon       → cyan decorativo (usar con moderación)
 *
 * TIPOGRAFÍA:
 *   font-display      → Space Grotesk (titulares)
 *   font-body         → Inter (cuerpo)
 *   Cambiar familia:  reemplaza el nombre en fontFamily.*
 *
 * ESPACIADO DE SECCIONES:
 *   py-section-desktop / py-section-mobile
 *   Definidos en spacing más abajo
 * ──────────────────────────────────────────────────
 */
const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // ─── COLORES ────────────────────────────────────
      colors: {
        koneko: {
          // Fondos
          bg:         '#08090D',   // Negro azulado profundo — base del sitio
          'bg-alt':   '#0F1117',   // Fondo alterno para separar secciones
          card:       '#111827',   // Fondo de tarjetas y componentes elevados

          // Acentos de marca
          primary:    '#7C3AED',   // Violeta Koneko — color de marca principal
          'primary-light': '#A78BFA', // Violeta claro — hover, detalles, glow
          neon:       '#22D3EE',   // Cyan — solo bordes decorativos y logo sign

          // Texto
          text:       '#F8FAFC',   // Texto principal — máximo contraste
          'text-muted': '#94A3B8', // Texto secundario — descripciones

          // Estructura
          border:     '#1E2130',   // Bordes, separadores, líneas divisorias
        },
      },

      // ─── TIPOGRAFÍA ─────────────────────────────────
      fontFamily: {
        // Para cambiar titulares: reemplaza 'Space Grotesk' aquí
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Para cambiar cuerpo: reemplaza 'Inter' aquí
        body:    ['"Inter"',          'system-ui', 'sans-serif'],
      },

      // ─── ESCALA TIPOGRÁFICA ─────────────────────────
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem',     { lineHeight: '1.5rem' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl':['1.5rem',   { lineHeight: '2rem' }],
        '3xl':['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl':['3rem',     { lineHeight: '1.1' }],
        '6xl':['4rem',     { lineHeight: '1.05' }],
        '7xl':['5rem',     { lineHeight: '1' }],
      },

      // ─── ANCHO MÁXIMO DE CONTENIDO ──────────────────
      maxWidth: {
        content: '1200px',
      },

      // ─── ESPACIADO DE SECCIONES ─────────────────────
      spacing: {
        'section-desktop': '96px',
        'section-mobile':  '64px',
      },

      // ─── ANIMACIONES CSS ────────────────────────────
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px 2px rgba(124, 58, 237, 0.3)' },
          '50%':       { boxShadow: '0 0 20px 4px rgba(124, 58, 237, 0.6)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
