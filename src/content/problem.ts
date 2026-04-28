export const PROBLEM_SECTION = {
  eyebrow:  'ANTES DE INVERTIR MÁS',
  headline: 'Antes de invertir más, necesitas saber esto',
  subtitle: 'El problema no es el presupuesto. Es la falta de arquitectura.',
  cta: {
    label: 'Obtén una estrategia a medida gratuita',
    href:  'mailto:info@konekoads.com',
  },
  image: {
    src: '/images/arquitectura-diagrama.png',
    alt: 'Diagrama de arquitectura de adquisición de Koneko Ads',
  },
} as const

export interface ProblemItem {
  title: string
  body:  string
}

export const PROBLEMS: ProblemItem[] = [
  {
    title: 'Visibilidad sin foco no convierte',
    body:  'Estar en muchos canales sin arquitectura clara genera ruido, no resultados. El verdadero problema es el coste oculto: cada punto de fuga erosiona tu margen.',
  },
  {
    title: 'Estrategia sin criterio multiplica el error',
    body:  'Sin entender tu modelo económico —CAC, margen, LTV— invertir más no es crecer. Es amplificar ineficiencias.',
  },
  {
    title: 'Escalar sin sistema es un riesgo calculado',
    body:  'Más inversión solo acelera lo que ya existe. Si el sistema es débil, las pérdidas también escalan.',
  },
]
