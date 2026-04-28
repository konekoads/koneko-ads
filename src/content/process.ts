export const PROCESS_SECTION = {
  eyebrow:  'ANÁLISIS ACTUAL DE TU NEGOCIO',
  headline: 'Antes de ejecutar o invertir más, necesitas claridad. La auditoría es el primer paso.',
  cta: {
    label: 'Obtén una estrategia a medida gratuita',
    href:  'mailto:info@konekoads.com',
  },
} as const

export interface ProcessStep {
  /** Nombre del ícono — se renderiza como SVG inline en el componente */
  icon:  'settings2' | 'scan-search' | 'pen-line' | 'trending-up'
  title: string
  body:  string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon:  'settings2',
    title: 'Análisis',
    body:  'Revisamos tu negocio online tal como está ahora: web, mensajes, oferta y puntos de fricción. Sin suposiciones. Sin plantillas genéricas.',
  },
  {
    icon:  'scan-search',
    title: 'Diagnóstico',
    body:  'Identificamos por qué no estás convirtiendo al nivel que podrías y priorizamos los problemas según impacto y esfuerzo.',
  },
  {
    icon:  'pen-line',
    title: 'Recomendaciones claras',
    body:  'Te entregamos un PDF y vídeo corto con acciones concretas: qué cambiar, dónde y por qué. Copy incluido cuando aplica.',
  },
  {
    icon:  'trending-up',
    title: 'Decisión informada',
    body:  'Con el diagnóstico en la mano, tú decides: implementarlo con tu equipo, con nosotros, o no hacer nada. Sin presión.',
  },
]
