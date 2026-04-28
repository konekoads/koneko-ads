export const METRICS_SECTION = {
  eyebrow:  'RESULTADOS MEDIBLES',
  headline: 'Beneficios de trabajar con una agencia especializada en marketing digital e IA',
} as const

export interface Metric {
  value: string
  label: string
}

/**
 * TODO: Completar con los datos reales del cliente.
 * Solo se proveyó la primera métrica en el briefing original.
 * Las entradas marcadas como TODO deben reemplazarse con datos verificados.
 */
export const METRICS: Metric[] = [
  {
    value: '+16%',
    label: 'MAYOR VOLUMEN DE CONVERSIÓN',
  },
  // TODO: Reemplazar con métrica real #2
  {
    value: '—',
    label: 'PENDIENTE DE DATOS',
  },
  // TODO: Reemplazar con métrica real #3
  {
    value: '—',
    label: 'PENDIENTE DE DATOS',
  },
]
