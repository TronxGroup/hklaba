// app/noticias/page.tsx
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Noticias — HKLABA',
  description:
    'Últimas noticias de HKLABA: Hong Kong Forum 2025, misiones comerciales, actividades de la Federation of Hong Kong Business Associations Worldwide y oportunidades en Asia-Pacífico.',
  keywords: [
    'HKLABA noticias',
    'Hong Kong Forum 2025',
    'Federation',
    'HKTDC',
    'misiones comerciales',
    'Asia-Pacífico',
    'negocios Hong Kong',
  ],
  alternates: { canonical: 'https://www.hklaba.com/noticias' },
}

export const dynamic = 'force-static'
export const revalidate = false

// ── Tipos ───────────────────────────────────────────────────────────────────
type Article = {
  slug: string
  tag: string
  tagColor: string
  date: string
  title: string
  excerpt: string
  body: string[]
  link?: { label: string; url: string }
  featured?: boolean
}

// ── Datos ───────────────────────────────────────────────────────────────────
const ARTICLES: Article[] = [
  {
    slug: 'hong-kong-forum-2026',
    tag: 'Evento destacado',
    tagColor: 'bg-red-50 text-hklRed',
    date: '17 – 18 de noviembre de 2026',
    title: 'Hong Kong Forum 2026 — El evento anual de la Federation regresa al HKCEC',
    excerpt:
      'El Hong Kong Convention and Exhibition Centre será nuevamente sede del Hong Kong Forum, el evento insignia de la Federation of Hong Kong Business Associations Worldwide, organizado por el HKTDC y el Gobierno de la RAEHK.',
    body: [
      'El Hong Kong Forum es el evento anual más importante de la Federation of Hong Kong Business Associations Worldwide — una red única de 49 asociaciones de Hong Kong en 38 países y regiones, con cerca de 11.000 ejecutivos y profesionales de negocios como asociados individuales.',
      'Cada año, los miembros de la Federation se reúnen en Hong Kong durante dos días para acceder a los análisis más actualizados sobre cómo hacer negocios en Hong Kong y China continental. El programa incluye discursos principales, paneles de discusión, sesiones de networking y oportunidades de interacción cara a cara con altos ejecutivos de Hong Kong y todo el mundo.',
      'Adicionalmente, los asociados tienen la oportunidad de participar en un programa de visitas para conocer los últimos desarrollos en infraestructura y el panorama empresarial de la ciudad.',
      'Como miembro de HKLABA, formas parte de la Federation y puedes participar en este evento de alto nivel. La delegación latinoamericana es coordinada directamente por HKLABA.',
    ],
    link: {
      label: 'Ver información oficial del Forum',
      url: 'https://hkforum.hktdc.com/conference/hkforum/en',
    },
    featured: true,
  },
  {
    slug: 'greater-bay-area-oportunidades',
    tag: 'Mercado',
    tagColor: 'bg-blue-50 text-blue-700',
    date: 'Noviembre 2025',
    title: 'Greater Bay Area: la megaciudad que redefine los negocios en Asia',
    excerpt:
      'La región metropolitana Guangdong–Hong Kong–Macao suma más de 86 millones de habitantes y un PIB comparable al de economías G20. Una oportunidad que HKLABA pone al alcance de sus miembros.',
    body: [
      'La Greater Bay Area (GBA) comprende las regiones administrativas especiales de Hong Kong y Macao, más nueve ciudades de la provincia de Guangdong, incluyendo Shenzhen, Guangzhou y Foshan.',
      'Es uno de los planes estratégicos más ambiciosos de China: un hub de innovación, manufactura avanzada y servicios financieros que aspira a convertirse en el polo tecnológico más importante del mundo.',
      'Hong Kong actúa como puerta de entrada internacional a la GBA, con su sistema legal basado en el common law, libre circulación de capitales y acceso irrestricto a los mercados globales.',
      'A través de la Federation y el HKTDC, los miembros de HKLABA tienen acceso a informes, misiones y contactos dentro del ecosistema GBA.',
    ],
    link: {
      label: 'Más información sobre la GBA',
      url: 'https://www.hktdc.com/en/about-hktdc/press-room/hktdc-research',
    },
  },
  {
    slug: 'mou-hktdc-hklaba',
    tag: 'Institucional',
    tagColor: 'bg-green-50 text-green-700',
    date: '2018',
    title: 'HKLABA y HKTDC: cinco años de cooperación formal',
    excerpt:
      'El Memorándum de Entendimiento firmado entre HKLABA y el Hong Kong Trade Development Council establece el marco institucional que articula comercio, inversiones y misiones empresariales entre Hong Kong y América Latina.',
    body: [
      'En 2018, HKLABA y el Hong Kong Trade Development Council (HKTDC) formalizaron su relación a través de un Memorándum de Entendimiento (MOU), convirtiéndose en el respaldo institucional más sólido de la asociación.',
      'El acuerdo contempla la promoción de relaciones comerciales entre Hong Kong y América Latina, coordinación de programas y reuniones, intercambio de información de mercado y apoyo a misiones empresariales en ambas direcciones.',
      'Gracias a este vínculo, los miembros de HKLABA tienen acceso preferencial a los recursos, plataformas y eventos del HKTDC, el organismo oficial de promoción comercial de Hong Kong.',
    ],
  },
  {
    slug: 'ferias-hktdc-2025',
    tag: 'Ferias',
    tagColor: 'bg-amber-50 text-amber-700',
    date: '2025',
    title: 'Acceso gratuito a las ferias HKTDC: un beneficio exclusivo para miembros',
    excerpt:
      'Como miembro de HKLABA y asociado de la Federation, tienes entrada sin costo a las principales ferias internacionales que el HKTDC organiza en Hong Kong cada año.',
    body: [
      'El HKTDC organiza anualmente algunas de las ferias comerciales más importantes del mundo en Hong Kong, incluyendo la Hong Kong Electronics Fair, la Hong Kong International Lighting Fair, la Hong Kong Jewellery & Gem Fair y muchas más.',
      'Los miembros de la Federation — y por tanto los miembros de HKLABA — acceden de forma gratuita a estas ferias locales, además de disfrutar de beneficios como el acceso a HKTDC Design Gallery y la plataforma de negocios hktdc.com Sourcing.',
      'La e-Membership Card de la Federation también entrega descuentos en viajes, gastronomía y entretenimiento en destinos como Tailandia y Vietnam.',
    ],
    link: {
      label: 'Ver ferias HKTDC',
      url: 'https://www.hktdc.com/en/event/hktdcfairs',
    },
  },
  {
    slug: 'apcc-via-membresia',
    tag: 'Membresía',
    tagColor: 'bg-purple-50 text-purple-700',
    date: '2024',
    title: 'Cómo unirte a HKLABA a través de APCC',
    excerpt:
      'La membresía HKLABA se tramita a través de la Asia-Pacific Chamber of Commerce (APCC). Te explicamos el proceso y qué obtienes al unirte.',
    body: [
      'HKLABA ha establecido una vía oficial de membresía a través de la Asia-Pacific Chamber of Commerce (APCC), facilitando el acceso a empresarios de toda América Latina a la red de Hong Kong.',
      'Al unirte vía APCC obtienes automáticamente los beneficios de membresía HKLABA: acceso a la Federation, al Hong Kong Forum, a las ferias HKTDC, a la red global de 11.000+ asociados y a todos los servicios institucionales de HKLABA.',
      'El proceso es simple: regístrate en el sitio de APCC y selecciona la membresía que incluye la afiliación a HKLABA. Nuestro equipo tomará contacto para guiarte en los siguientes pasos.',
    ],
    link: {
      label: 'Unirme vía APCC',
      url: 'https://www.asiapacific-chamber.com/',
    },
  },
]

// ── Sub-componentes ──────────────────────────────────────────────────────────

function ArticleCard({ article, expanded = false }: { article: Article; expanded?: boolean }) {
  return (
    <article className={`rounded-3xl border border-neutral-200 bg-white overflow-hidden ${expanded ? '' : 'flex flex-col'}`}>
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${article.tagColor}`}>
            {article.tag}
          </span>
          <span className="text-xs text-neutral-400">{article.date}</span>
        </div>
        <h3 className={`font-semibold text-neutral-900 leading-snug ${expanded ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {article.title}
        </h3>
        <p className="mt-3 text-neutral-600 text-sm leading-relaxed">{article.excerpt}</p>
      </div>

      {/* Body expandido */}
      {expanded && (
        <div className="px-6 pb-2 space-y-4">
          {article.body.map((p, i) => (
            <p key={i} className="text-neutral-700 leading-relaxed">{p}</p>
          ))}
        </div>
      )}

      {/* Footer */}
      {article.link && (
        <div className="px-6 pb-6 pt-4">
          <a
            href={article.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hklRed font-medium underline decoration-red-200 hover:decoration-hklRed"
          >
            {article.link.label} →
          </a>
        </div>
      )}
    </article>
  )
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function NoticiasPage() {
  const apccSignupUrl = 'https://www.asiapacific-chamber.com/'
  const featured = ARTICLES.find((a) => a.featured)!
  const rest = ARTICLES.filter((a) => !a.featured)

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
            <a href="/"          className="hover:text-hklRed">Inicio</a>
            <a href="/nosotros"  className="hover:text-hklRed">Nosotros</a>
            <a href="/servicios" className="hover:text-hklRed">Servicios</a>
            <a href="/noticias"  className="text-hklRed font-medium">Noticias</a>
            <a href="/contacto"  className="hover:text-hklRed">Contacto</a>
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
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs uppercase tracking-widest text-hklRed">Noticias y actualizaciones</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Lo último de HKLABA y Hong Kong
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            Eventos, oportunidades de negocio, actualizaciones institucionales y noticias relevantes para quienes hacen o quieren hacer negocios con Hong Kong y Asia-Pacífico.
          </p>
        </div>
      </section>

      {/* NOTICIA DESTACADA — Hong Kong Forum */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Noticia destacada</p>

          {/* Card grande con dos columnas */}
          <div className="rounded-3xl border-2 border-hklRed bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Texto */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 text-hklRed">
                      {featured.tag}
                    </span>
                    <span className="text-xs text-neutral-400">{featured.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-neutral-600 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 space-y-3">
                    {featured.body.map((p, i) => (
                      <p key={i} className="text-sm text-neutral-700 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
                {featured.link && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={featured.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-hklRed text-white px-5 py-3 text-sm font-medium hover:bg-red-800 transition"
                    >
                      {featured.link.label}
                    </a>
                    <a
                      href="/contacto"
                      className="rounded-xl border border-hklRed text-hklRed px-5 py-3 text-sm font-medium hover:bg-red-50 transition"
                    >
                      Consultar a HKLABA
                    </a>
                  </div>
                )}
              </div>

              {/* Info panel lateral */}
              <div className="bg-neutral-50 border-l border-neutral-200 p-8 lg:p-10 flex flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Detalles del evento</p>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs text-neutral-500">Edición</dt>
                      <dd className="font-semibold text-neutral-900">Hong Kong Forum 2026</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-neutral-500">Fecha</dt>
                      <dd className="font-semibold text-neutral-900">17 – 18 de noviembre, 2026</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-neutral-500">Sede</dt>
                      <dd className="font-semibold text-neutral-900">Hong Kong Convention and Exhibition Centre (HKCEC)</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-neutral-500">Organizadores</dt>
                      <dd className="font-semibold text-neutral-900">HKTDC & Gobierno de la Región Administrativa Especial de Hong Kong</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-neutral-500">Red de la Federation</dt>
                      <dd className="font-semibold text-neutral-900">49 asociaciones en 38 países y regiones</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <p className="text-sm font-medium text-neutral-700 mb-3">Incluido para miembros Federation</p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-start gap-2"><span className="text-hklRed">•</span>Acceso completo a sesiones presenciales</li>
                    <li className="flex items-start gap-2"><span className="text-hklRed">•</span>Networking cara a cara con 400+ ejecutivos</li>
                    <li className="flex items-start gap-2"><span className="text-hklRed">•</span>Almuerzo de recepción exclusivo para la Federation</li>
                    <li className="flex items-start gap-2"><span className="text-hklRed">•</span>Visitas locales (cupos limitados)</li>
                    <li className="flex items-start gap-2"><span className="text-hklRed">•</span>Programa opcional en China continental</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1">¿Eres miembro HKLABA?</p>
                  <p className="text-sm text-amber-700">
                    Contacta a HKLABA para coordinar tu participación como parte de la delegación latinoamericana.
                  </p>
                  <a href="/contacto" className="mt-2 inline-block text-sm text-amber-800 font-medium underline">
                    Escribir a HKLABA →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTO DE NOTICIAS */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Más noticias</p>
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA membresía */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">No te pierdas ningún evento ni oportunidad</h2>
          <p className="mt-4 text-neutral-600 max-w-prose mx-auto">
            Los miembros de HKLABA reciben acceso prioritario a misiones, foros y actividades de la Federation. Únete hoy a través de APCC.
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
              Contactar a HKLABA
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-neutral-500 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/federation-logo.png"
                alt="Miembro de la Federation of Hong Kong Business Associations Worldwide"
                width={200}
                height={48}
              />
              <span className="text-neutral-600">Miembro oficial de la Federation of Hong Kong Business Associations Worldwide</span>
            </div>
            <div>© {new Date().getFullYear()} HKLABA. Todos los derechos reservados.</div>
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
