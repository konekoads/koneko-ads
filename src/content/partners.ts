export interface Partner {
  name:    string
  /** Identificador de Simple Icons para la URL del CDN */
  icon:    string
  /** Color hex sin # para el CDN de Simple Icons */
  color:   string
}

export const PARTNERS_SECTION = {
  label: 'PLATAFORMAS Y HERRAMIENTAS CON LAS QUE TRABAJAMOS',
} as const

export const PARTNERS: Partner[] = [
  { name: 'Google Ads',  icon: 'googleads',  color: 'ffffff' },
  { name: 'Meta Ads',    icon: 'meta',        color: 'ffffff' },
  { name: 'LinkedIn Ads',icon: 'linkedin',    color: 'ffffff' },
  { name: 'Shopify',     icon: 'shopify',     color: 'ffffff' },
  { name: 'n8n',         icon: 'n8n',         color: 'ffffff' },
]
