// app/servicios/page.tsx
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios — HKLABA',
  description:
    'Conoce los beneficios y servicios exclusivos para miembros de HKLABA: consultoría para hacer negocios en Hong Kong, acceso a ferias HKTDC, networking, inteligencia de mercado y asesoría de inversiones.',
  keywords: [
    'HKLABA',
    'servicios',
    'beneficios membresía',
    'Hong Kong',
    'HKTDC ferias',
    'consultoría negocios',
    'inteligencia de mercado',
    'inversiones Hong Kong',
    'networking Asia',
  ],
  alternates: { canonical: 'https://www.hklaba.com/servicios' },
}

export const dynamic = 'force-static'
export const revalidate = false

// ── Datos ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'consultoria',
    icon: '🏢',
    tag: 'Negocios',
    title: 'Consultoría para hacer negocios en Hong Kong',
    summary:
      'Orientación especializada para empresarios y empresas latinoamericanas que buscan establecer presencia, exportar o importar desde Hong Kong.',
    bullets: [
      'Guía sobre constitución de empresas y estructuras jurídicas en HK',
      'Orientación en trámites aduaneros y logística de comercio exterior',
      'Información sobre el entorno regulatorio, fiscal y financiero',
      'Conexión con profesionales locales (abogados, contadores, agentes)',
      'Asesoría inicial sobre el sistema tributario territorial de Hong Kong',
    ],
  },
  {
    id: 'networking',
    icon: '🌐',
    tag: 'Comunidad',
    title: 'Networking y eventos de alto nivel',
    summary:
      'Acceso prioritario a actividades de la Federation of Hong Kong Business Associations Worldwide y eventos organizados por HKLABA en América Latina.',
    bullets: [
      'Participación en el Hong Kong Forum — evento anual insignia de la Federation',
      'Invitaciones a misiones comerciales y delegaciones a Hong Kong',
      'Acceso al directorio global de más de 11.000 asociados de la Federation',
      'Eventos de networking regionales con líderes empresariales',
      'Presentaciones y reuniones B2B facilitadas por HKLABA y HKTDC',
    ],
  },
  {
    id: 'ferias',
    icon: '🎪',
    tag: 'HKTDC',
    title: 'Acceso a ferias HKTDC en Hong Kong',
    summary:
      'Como miembro HKLABA eres asociado de la Federation, lo que te otorga ingreso gratuito a las principales ferias internacionales organizadas por el HKTDC.',
    bullets: [
      'Acceso gratuito a ferias locales del HKTDC en Hong Kong',
      'Acceso a HKTDC Design Gallery',
      'Plataforma hktdc.com Sourcing para búsqueda de proveedores y compradores',
      'Acceso a VIP Lounge en eventos seleccionados',
      'e-Membership Card con beneficios en viajes, gastronomía y entretenimiento global',
    ],
  },
  {
    id: 'inteligencia',
    icon: '📊',
    tag: 'Mercado',
    title: 'Inteligencia de mercado e informes',
    summary:
      'Información estratégica y actualizada sobre Hong Kong, China continental y la región Asia-Pacífico para la toma de decisiones empresariales.',
    bullets: [
      'Boletines periódicos sobre oportunidades comerciales en Asia-Pacífico',
      'Informes sectoriales y tendencias de mercado de Hong Kong',
      'Acceso a publicaciones y contenidos del HKTDC',
      'Actualizaciones sobre regulaciones, política comercial y tratados',
      'Análisis de la Greater Bay Area (GBA) y su impacto en negocios regionales',
    ],
  },
  {
    id: 'inversiones',
    icon: '💹',
    tag: 'Inversiones',
    title: 'Asesoría de inversiones',
    summary:
      'Apoyo para empresas e inversionistas latinoamericanos que evalúan Hong Kong como plataforma de entrada a mercados asiáticos o como destino de inversión.',
    bullets: [
      'Información sobre el mercado de capitales de Hong Kong (HKEX)',
      'Orientación sobre estructuras de holding y vehículos de inversión en HK',
      'Contacto con actores del ecosistema financiero de Hong Kong',
      'Apoyo en la comprensión del marco legal para inversión extranjera',
      'Conexión con organismos oficiales como InvestHK',
    ],
  },
]

const MEMBERSHIP_PERKS = [
  { icon: '🃏', text: 'e-Membership Card con descuentos globales' },
  { icon: '🎟️', text: 'Ingreso gratuito a ferias HKTDC en HK' },
  { icon: '🏪', text: 'Acceso a HKTDC Design Gallery' },
  { icon: '🔍', text: 'hktdc.com Sourcing — plataforma de negocios' },
  { icon: '📰', text: 'Boletines y contenidos de Asia-Pacífico' },
  { icon: '👥', text: 'Directorio global de 11.000+ asociados' },
  { icon: '🗓️', text: 'Acceso al Hong Kong Forum anual' },
  { icon: '✈️', text: 'Prioridad en misiones comerciales a HK' },
]

// ── Componente ──────────────────────────────────────────────────────────────
export default function ServiciosPage() {
  const apccSignupUrl = 'https://www.asiapacific-chamber.com/'

  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="/" aria-label="Ir al inicio">
            <Image
              src="/hklaba-logo.png"
              alt="HKLABA — Hong Kong–Latin America Business Association"
              width={180}
              height={52}
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600" aria-label="Navegación principal">
            <a href="/"           className="hover:text-hklRed">Inicio</a>
            <a href="/nosotros"   className="hover:text-hklRed">Nosotros</a>
            <a href="/servicios"  className="text-hklRed font-medium">Servicios</a>
            <a href="/noticias"   className="hover:text-hklRed">Noticias</a>
            <a href="/contacto"   className="hover:text-hklRed">Contacto</a>
            <a
              href={apccSignupUrl}
              className="inline-flex rounded-xl border border-hklRed text-hklRed px-3 py-1.5 hover:bg-hklRed hover:text-white transition"
              rel="noopener"
            >
              Unirme vía APCC
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-hklRed">Beneficios de membresía</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              Todo lo que la membresía HKLABA pone a tu alcance
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              Al ser miembro de HKLABA accedes a una red única de servicios institucionales, herramientas comerciales y conexiones de alto nivel con Hong Kong y la región Asia-Pacífico. Sin costos adicionales — todo está incluido en tu membresía.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={apccSignupUrl}
                className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition"
                rel="noopener"
              >
                Unirme vía APCC
              </a>
              <a href="#servicios" className="rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition">
                Ver todos los servicios
              </a>
            </div>
          </div>

          {/* Perks grid */}
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <p className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-widest">Incluido en tu membresía</p>
            <div className="grid grid-cols-2 gap-3">
              {MEMBERSHIP_PERKS.map((p, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl border border-neutral-100 bg-neutral-50 p-3">
                  <span className="text-xl leading-none">{p.icon}</span>
                  <span className="text-xs text-neutral-700 leading-snug">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AVISO membresía */}
      <div className="bg-red-50 border-b border-red-100">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-3">
          <span className="text-hklRed text-lg">ℹ️</span>
          <p className="text-sm text-red-800">
            <strong>Todos los servicios son beneficios exclusivos de membresía.</strong> La membresía se tramita a través de{' '}
            <a href={apccSignupUrl} className="underline hover:text-hklRed" rel="noopener">APCC — Asia-Pacific Chamber of Commerce</a>.
          </p>
        </div>
      </div>

      {/* SERVICIOS — listado detallado */}
      <section id="servicios" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Nuestros servicios</h2>

          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid lg:grid-cols-2 gap-8 items-start rounded-3xl border border-neutral-200 p-8 ${
                i % 2 === 1 ? 'bg-neutral-50' : 'bg-white'
              }`}
            >
              {/* Info */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{s.icon}</span>
                  <span className="text-xs uppercase tracking-widest text-hklRed font-semibold">{s.tag}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-3 text-neutral-600">{s.summary}</p>
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-0.5 text-hklRed font-bold">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Accede a todos estos servicios como miembro</h2>
          <p className="mt-4 text-neutral-600 max-w-prose mx-auto">
            La membresía HKLABA se tramita a través de APCC y te da acceso inmediato a todos los beneficios descritos, además de conectarte con la red global de la Federation of Hong Kong Business Associations Worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={apccSignupUrl}
              className="rounded-xl bg-hklRed text-white px-6 py-3 font-medium hover:bg-red-800 transition"
              rel="noopener"
            >
              Unirme vía APCC
            </a>
            <a
              href="/contacto"
              className="rounded-xl border border-hklRed text-hklRed px-6 py-3 font-medium hover:bg-red-50 transition"
            >
              Tengo una pregunta
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-neutral-500 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/federation-logo.png" alt="Miembro de la Federation of Hong Kong Business Associations Worldwide" width={200} height={48} />
              <span className="text-neutral-600">Miembro oficial de la Federation of Hong Kong Business Associations Worldwide</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">© {new Date().getFullYear()} HKLABA. Todos los derechos reservados.<span className="hidden sm:inline text-neutral-300">·</span><a href="https://www.tronxweb.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-hklRed transition">Desarrollado por Tronx Web</a></div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-neutral-600">
            <a href="https://www.linkedin.com/company/hklaba" target="_blank" rel="noreferrer noopener" className="underline decoration-neutral-300 hover:text-hklRed">LinkedIn</a>
            <a href="/condiciones" className="underline decoration-neutral-300 hover:text-hklRed">Condiciones y Privacidad</a>
            <a href="https://www.web.facebook.com/hktdc_latam" target="_blank" rel="noreferrer noopener" className="underline decoration-neutral-300 hover:text-hklRed">HKTDC Chile Office (Facebook)</a>
            <a href="https://www.asiapacific-chamber.com" target="_blank" rel="noreferrer noopener" className="underline decoration-neutral-300 hover:text-hklRed">APCC</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

