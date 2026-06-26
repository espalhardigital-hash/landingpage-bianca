## Context

Landing page de alta conversión para psicóloga experta en ansiedad juvenil (Gen Z, 15-25 años). Objetivo: captar email a cambio de Lead Magnet dual (eBook inmediato + desafío 7 días). Estética "Premium Dark" con glow effects lavanda/menta, animaciones scroll-based (inspirado en stackbyte.dev), mobile-first.

Stack tecnológico definido:
- **Frontend**: React + Vite, Tailwind CSS + Framer Motion/GSAP para animaciones fluidas, Glassmorphism Premium
- **Backend**: FastAPI (Python) + SQLAlchemy async + PostgreSQL (asyncpg)
- **Storage**: MinIO (S3-compatible) para assets (foto cutout, eBook PDF, ilustraciones)
- **Infra**: Docker + Docker Compose en local (exposición de puertos directos sin Traefik local). Traefik configurado externamente en la VPS de producción.

## Goals / Non-Goals

**Goals:**
- Single-page React app con secciones especificadas en proposal (Hero, Empatía 3D, Proceso 4 pasos, Bio, Testimonios, CTA Final)
- Formulario captura email (1 campo) → API FastAPI → PostgreSQL + trigger email sequence
- Entrega inmediata eBook PDF (MinIO signed URL) + inicio secuencia 7 días
- Animaciones scroll performantes: respiración Hero (CSS/Canvas), tilt 3D tarjetas (Framer Motion), timeline interactivo
- Glassmorphism Premium Dark: fondos #0a0f1a / #0d1426, glows lavanda (#c8b6ff) / menta (#7df9c4), tipografía bold (Space Grotesk)
- Mobile-first, Core Web Vitals > 90, accessibility AA

**Non-Goals:**
- Panel de admin / dashboard de gestión de leads
- Autenticación de usuarios (solo captura email)
- Blog o CMS
- Multi-idioma (solo español inicial)
- Tests E2E completos (solo smoke tests críticos)

## Decisions

### 1. Arquitectura Frontend: React + Vite + Tailwind + Framer Motion
**Por qué**: Vite ofrece HMR ultra-rápido y build optimizado. Tailwind permite Glassmorphism via utilities (`backdrop-blur`, `bg-opacity`, `border-opacity`). Framer Motion maneja animaciones scroll (useScroll, useTransform) y drag/hover 3D de forma declarativa y performante.
**Alternativa considerada**: Next.js (overkill para SPA estática), GSAP (más peso, Framer Motion suficiente para scroll animations).

### 2. Backend: FastAPI async + SQLAlchemy 2.0 async + PostgreSQL
**Por qué**: FastAPI nativo async maneja alta concurrencia en formulario + email triggers. SQLAlchemy 2.0 async evita blocking I/O. PostgreSQL robusto para leads + metadatos (source, utm, timestamps).
**Alternativa considerada**: Node/Express (equipo más fuerte en Python), Supabase (vendor lock-in, menos control).

### 3. Email Delivery: Resend (API) + Jinja2 HTML templates
**Por qué**: Resend DX excelente, deliverability alta. Templates Jinja2 HTML renderizados desde FastAPI, evitando dependencia extra de Node.js. Webhook para tracking opens/clicks.
**Alternativa considerada**: SendGrid (más complejo), MailerLite (menos dev-friendly), React Email (requiere Node.js adicional, incompatible con stack Python puro).

### 4. Storage: MinIO para assets estáticos (foto, PDF, ilustraciones)
**Por qué**: S3-compatible, self-hosted en Docker Compose, signed URLs para entrega segura eBook. Evita costos S3 real en dev/staging.
**Alternativa considerada**: Local filesystem (no escala), Cloudinary (solo imágenes, no PDFs).

### 5. Animaciones Scroll: Framer Motion `useScroll` + `useTransform`
**Por qué**: API declarativa, integra con React lifecycle, performante (transforms GPU). Para Hero "respiración": `useTransform` con scale/opacity en loop. Para tilt 3D: `useMotionValue` + `onMouseMove` + `rotateX/rotateY`. Para timeline: `useScroll` progress → reveal steps.

### 6. Glassmorphism Premium Dark System
**Tokens de diseño** (Tailwind config extendido):
```js
colors: {
  dark: { 900: '#05080f', 800: '#0a0f1a', 700: '#0d1426', 600: '#141e3a' },
  glow: { lavender: '#c8b6ff', mint: '#7df9c4', soft: 'rgba(200,182,255,0.15)' }
}
utilities: {
  '.glass': '@apply bg-dark-800/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)];'
  '.glow-lavender': '@apply shadow-[0_0_40px_rgba(200,182,255,0.3)];'
  '.glow-mint': '@apply shadow-[0_0_40px_rgba(125,249,196,0.3)];'
}
```

### 7. Tipografía: Space Grotesk (display) + Inter (body)
**Por qué**: Space Grotesk tiene peso bold/extrabold impactante para headlines de 3 palabras. Inter legible en mobile. Ambas variable fonts (único archivo, performance).

### 8. Formulario captura: Un solo campo email + honeypot + rate limit
**Por qué**: Fricción mínima Gen Z. Honeypot invisible anti-bot. Rate limit IP (10/min) en FastAPI middleware. Validación client-side (regex) + server-side (pydantic EmailStr).

## Risks / Trade-offs

| Risk | Mitigación |
|------|------------|
| Animaciones pesadas en mobile low-end | `prefers-reduced-motion` media query → desactivar transforms complejos; `will-change` solo en elementos animados; test en dispositivo real |
| Entrega eBook bloqueada por CORS/MinIO | MinIO CORS policy configurado; signed URLs expiradas (15 min); fallback CDN (Cloudflare R2) en prod |
| Email sequence no llega (spam) | Resend domain authentication (DKIM, SPF, DMARC); double opt-in suave (confirmación en thank-you page); unsubscribe visible |
| Foto cutout no cargada / mal recortada | Placeholder SVG animado (skeleton) mientras carga; `object-fit: cover` + `aspect-ratio`; validación dimensiones en upload |
| SEO SPA single-page | Prerender static HTML en build (Vite plugin `vite-plugin-ssr` o `prerender-spa-plugin`); meta tags dinámicas por sección via `react-helmet-async` |
| Desajuste local vs prod (Traefik) | En local se usan puertos directos expuestos y HTTP para evitar complejidades. La configuración de Traefik para producción está pre-establecida en la VPS y solo se despliega allí. |

## Migration Plan

1. **Semana 1**: Scaffold monorepo (Docker Compose local: frontend, backend, db, minio; exposición de puertos directos).
2. **Semana 2**: Design system Tailwind (tokens, glass, glows, tipografía). Componentes base (Button, Input, Card, Section, TimelineStep).
3. **Semana 3**: Hero section completa (foto cutout, animación respiración, formulario). Integración API lead capture.
4. **Semana 4**: Secciones Empatía, Proceso, Bio, Testimonios, CTA Final. Animaciones scroll.
5. **Semana 5**: Backend API leads + email sequence (Resend). MinIO upload eBook + signed URL delivery.
6. **Semana 6**: QA mobile/desktop, performance audit (Lighthouse), accessibility, deploy staging → prod.

## Resolved Questions

1. **Copy final**: Se utilizarán los textos provistos en el prompt como base para la estructura y wireframes del prototipo inicial, con posibilidad de optimización posterior.
2. **Foto cutout / Recursos temporales**: Para el prototipo y pruebas de desarrollo local, se usarán fotos y recursos temporales ("placeholders / nano banana fotos") y PDFs simulados. Estos serán reemplazados por los definitivos y de alta resolución (PNG/WebP transparente, ancho mínimo de 1200px) en fases posteriores.
3. **eBook PDF**: El eBook ya está diseñado. Localmente se usará un PDF simulado para pruebas de carga y descarga.
4. **Secuencia 7 días**: Secuencia diaria estructurada que contiene los 7 correos con micro-ejercicios.
5. **Dominio/Subdominio y Traefik**: En desarrollo local se utilizará Docker local exponiendo los puertos de cada servicio directamente, sin levantar Traefik localmente. La VPS de producción ya cuenta con Traefik configurado externamente y se encargará del ruteo mediante etiquetas de contenedor en el despliegue final.
6. **Analytics**: Captura de eventos personalizados en backend (`lead_captured`, `ebook_downloaded`) configurando la base para integraciones futuras (GA4/PostHog).
7. **Legal**: Se requiere la creación e integración de páginas de cumplimiento legal (`/privacidad` y `/terminos`).