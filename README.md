# Koneko Ads — Sitio Web

Sitio estático de [Koneko Ads](https://konekoads.com), agencia de marketing digital e IA.

**Stack:** Astro 4 · Tailwind CSS 3 · TypeScript 5
**Fundador:** Luccas Martins

---

## Inicio rápido

```bash
cd koneko-ads
npm install
npm run dev       # http://localhost:4321
npm run build     # Genera ./dist/
npm run preview   # Preview de la build
```

---

## Deploy

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npx netlify deploy --build
```

Ambas plataformas detectan Astro automáticamente.
El comando de build es `astro build` y la carpeta de salida es `dist`.

---

## Estructura del proyecto

```
src/
├── content/          ← TODO el texto del sitio vive aquí. Nunca en componentes.
│   ├── site.ts       ← Metadatos globales, email, CTA
│   ├── hero.ts       ← Sección Hero
│   ├── partners.ts   ← Logos de plataformas
│   ├── problem.ts    ← Sección "Antes de invertir más"
│   ├── process.ts    ← Proceso / Auditoría (4 pasos)
│   ├── metrics.ts    ← Métricas / Resultados
│   └── testimonials.ts ← Testimonios
├── components/
│   ├── ui/           ← Componentes atómicos reutilizables
│   │   ├── SectionLabel.astro
│   │   └── CtaButton.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── Partners.astro
│   ├── Problem.astro
│   ├── Process.astro
│   ├── Metrics.astro
│   ├── Testimonials.astro
│   └── Cta.astro
├── layouts/
│   └── BaseLayout.astro  ← HTML base, fuentes, meta tags
└── pages/
    └── index.astro        ← Ensambla todas las secciones
public/
├── favicon.svg
└── images/               ← Añadir imágenes reales aquí (ver abajo)
```

---

## Identidad visual

**Todo el sistema de diseño vive en `tailwind.config.ts`.**
Para cambiar colores, tipografía o espaciado: edita SOLO ese archivo.

```ts
// Cambiar color primario de marca:
primary: '#7C3AED'  →  primary: '#tu-color'

// Cambiar tipografía de titulares:
display: ['"Space Grotesk"', ...]  →  display: ['"Tu Fuente"', ...]
```

---

## Imágenes a añadir

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/public/images/logo-koneko.png` | Logo animado de Koneko Ads | ⏳ Pendiente |
| `/public/images/arquitectura-diagrama.png` | Diagrama de arquitectura de adquisición | ⏳ Pendiente |

Mientras no existan, el sitio muestra placeholders descriptivos.

---

## Formulario de contacto

### Opción A (activa por defecto): mailto
El botón CTA envía un email directo a `info@konekoads.com`.
Para cambiar la dirección: editar `src/content/site.ts` → campo `email` y `ctaHref`.

### Opción B: Formspree
1. Crear cuenta en [formspree.io](https://formspree.io)
2. Crear un nuevo formulario y copiar el endpoint (`https://formspree.io/f/XXXXXXXX`)
3. En `src/content/site.ts`, cambiar `ctaHref` al endpoint de Formspree
4. Crear un componente `src/components/ContactForm.astro` con los campos:
   - `name` (texto)
   - `email` (email)
   - `message` (textarea)
   - `business` (texto)
5. Añadir `method="POST"` y `action={SITE.ctaHref}` al `<form>`
6. Formspree gestiona el envío, validación y notificación por email sin backend

---

## Métricas (pendientes)

En `src/content/metrics.ts` hay 2 métricas marcadas como `TODO`.
Solo se proveyó la primera (+16%) en el briefing.
Reemplazar los valores `—` y `PENDIENTE DE DATOS` con datos reales verificados.

---

## Accesibilidad

- Contraste WCAG AA en todo el texto
- Focus visible con outline violeta en todos los elementos interactivos
- ARIA labels en botones icon-only
- Menú mobile con `role="dialog"` y `aria-expanded`
- Testimonios con `role="list"` y `<blockquote>`
- Imágenes con `alt` siempre descriptivo

---

## Dependencias

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `astro` | ^4.15 | Framework (excluido del límite de 3) |
| `tailwindcss` | ^3.4 | CSS (excluido del límite de 3) |
| `@astrojs/tailwind` | ^5.1 | Integración oficial Astro ↔ Tailwind |
| `typescript` | ^5.5 | Tipado estático |

**0 dependencias de runtime en el cliente.** El sitio es 100% HTML+CSS estático.
