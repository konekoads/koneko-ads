export const TESTIMONIALS_SECTION = {
  eyebrow:  'PRUEBA SOCIAL',
  headline: 'Resultados tras probar el Sistema Koneko',
} as const

export interface Testimonial {
  initials:  string
  name:      string
  role:      string
  stars:     number
  text:      string
  context:   string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: 'AV',
    name:     'Alejandro V.',
    role:     'CEO — Instituto de Formación Digital',
    stars:    5,
    text:     'Lo que más valoro es la estructura. Pasamos de lanzar campañas sueltas a tener un sistema que genera oportunidades de forma constante y predecible. Escalar ahora se siente estratégico, no arriesgado.',
    context:  'Mensaje tras cerrar el primer ciclo completo de trabajo',
  },
  {
    initials: 'LM',
    name:     'Laura G. & Miguel T.',
    role:     'Socios — Clínica Estética',
    stars:    5,
    text:     'Luccas, trabajar contigo ha sido un antes y un después. Ahora sentimos que alguien cuida nuestro negocio como si fuera suyo, y eso nos da una tranquilidad enorme.',
    context:  'Mensaje tras varias semanas trabajando juntos',
  },
  {
    initials: 'MS',
    name:     'Marina S.',
    role:     'Directora — Clínica Dental',
    stars:    5,
    text:     'El cambio se nota en el día a día. El equipo tiene claridad, la agenda está mejor organizada y los pacientes llegan mucho más filtrados. Ya no trabajamos con sensación de urgencia constante.',
    context:  'Mensaje tras los primeros 40 días de trabajo conjunto',
  },
]
