// app/nosotros/page.tsx
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros — HKLABA',
  description:
    'Conoce a HKLABA, la única asociación latinoamericana miembro de la Federation of Hong Kong Business Associations Worldwide. Nuestra misión, historia, equipo y alianzas institucionales.',
  keywords: [
    'HKLABA',
    'quiénes somos',
    'Hong Kong',
    'Latinoamérica',
    'Federation',
    'HKTDC',
    'APCC',
    'asociación empresarial',
  ],
  alternates: { canonical: 'https://www.hklaba.com/nosotros' },
}

export const dynamic = 'force-static'
export const revalidate = false

// ── Datos ──────────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: '2000',
    title: 'Nace la Federation',
    desc: 'La Federation of Hong Kong Business Associations Worldwide es fundada en noviembre de 2000 con el apoyo del HKTDC para crear sinergias globales en torno a Hong Kong.',
  },
  {
    year: '2018',
    title: 'MOU con HKTDC',
    desc: 'HKLABA firma un Memorándum de Entendimiento con el Hong Kong Trade Development Council para promover comercio, inversiones y misiones empresariales entre Hong Kong y América Latina.',
  },
  {
    year: '2017',
    title: 'Ingreso a la Federation',
    desc: 'HKLABA se convierte en la única asociación de América Latina miembro pleno de la Federation of Hong Kong Business Associations Worldwide.',
  },
  {
    year: '2019',
    title: 'Alianza con APCC',
    desc: 'Se establece la vía de membresía a través de la Asia-Pacific Chamber of Commerce (APCC), ampliando el acceso a la red para empresarios latinoamericanos.',
  },
  {
    year: '2024',
    title: 'Hong Kong Forum',
    desc: 'Delegación latinoamericana participa en el Hong Kong Forum, el evento anual insignia de la Federation con presencia de más de 260 miembros de 26 países.',
  },
]

const VALUES = [
  {
    icon: '🤝',
    title: 'Conexión genuina',
    desc: 'Tendemos puentes reales entre tomadores de decisiones de América Latina y Hong Kong, más allá del networking superficial.',
  },
  {
    icon: '🌏',
    title: 'Visión Asia-Pacífico',
    desc: 'Entendemos la complejidad de la región y la traducimos en oportunidades concretas para nuestros miembros.',
  },
  {
    icon: '📋',
    title: 'Rigor institucional',
    desc: 'Operamos bajo estándares de cumplimiento internacionales y los principios anti-corrupción que rigen a la Federation y al HKTDC.',
  },
  {
    icon: '🚀',
    title: 'Acción con propósito',
    desc: 'Cada actividad, misión y evento tiene un objetivo claro: generar valor tangible para nuestros miembros.',
  },
]

const FEDERATION_FACTS = [
  { k: '49', v: 'Asociaciones miembro' },
  { k: '38', v: 'Países y regiones' },
  { k: '11.000+', v: 'Asociados individuales' },
  { k: '2000', v: 'Año de fundación' },
]

const ALLIES = [
  {
    name: 'Federation of Hong Kong Business Associations Worldwide',
    role: 'Red global de asociaciones empresariales de Hong Kong. HKLABA es miembro pleno y la única representación latinoamericana.',
    url: 'https://www.hkfederation.org.hk',
  },
  {
    name: 'HKTDC — Hong Kong Trade Development Council',
    role: 'Organismo oficial de promoción comercial de Hong Kong. HKLABA mantiene un MOU de cooperación para comercio e inversiones.',
    url: 'https://www.hktdc.com',
  },
  {
    name: 'APCC — Asia-Pacific Chamber of Commerce',
    role: 'La membresía HKLABA se tramita a través de APCC, que actúa como puerta de entrada regional a la red.',
    url: 'https://www.asiapacific-chamber.com',
  },
]

// ── Componente ──────────────────────────────────────────────────────────────
export default function NosotrosPage() {
  const apccSignupUrl = 'https://www.asiapacific-chamber.com/'

  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* NAV — idéntico a home */}
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
            <a href="/#quienes"    className="hover:text-hklRed">Inicio</a>
            <a href="/nosotros"    className="text-hklRed font-medium">Nosotros</a>
            <a href="/servicios"   className="hover:text-hklRed">Servicios</a>
            <a href="/noticias"    className="hover:text-hklRed">Noticias</a>
            <a href="/contacto"    className="hover:text-hklRed">Contacto</a>
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

      {/* HERO NOSOTROS */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-hklRed">Quiénes somos</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              El puente entre América Latina y Hong Kong
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              La <strong>Hong Kong – Latin America Business Association (HKLABA)</strong> es la única organización latinoamericana miembro pleno de la <em>Federation of Hong Kong Business Associations Worldwide</em>. Desde Chile, articulamos oportunidades de negocios, inversiones y cooperación entre América Latina y una de las plazas comerciales más estratégicas del mundo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={apccSignupUrl}
                className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition"
                rel="noopener"
              >
                Unirme vía APCC
              </a>
              <a href="#mision" className="rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition">
                Nuestra misión
              </a>
            </div>
          </div>

          {/* Tarjeta Federation */}
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <Image
              src="/federation-logo.png"
              alt="Federation of Hong Kong Business Associations Worldwide"
              width={260}
              height={60}
            />
            <div className="mt-6 grid grid-cols-2 gap-4" aria-label="Estadísticas de la Federation">
              {FEDERATION_FACTS.map((s, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 p-4 text-center">
                  <div className="text-2xl font-bold text-neutral-900">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section id="mision" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Misión</h2>
            <p className="mt-4 text-neutral-700">
              Conectar a empresarios, inversionistas e instituciones de América Latina con el ecosistema de negocios de Hong Kong, facilitando acceso a mercados, información estratégica y relaciones de alto nivel a través de nuestra pertenencia a la Federation y nuestro acuerdo de cooperación con el HKTDC.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Visión</h2>
            <p className="mt-4 text-neutral-700">
              Ser la referencia institucional en América Latina para quienes buscan hacer negocios con Hong Kong y la región Asia-Pacífico, posicionando a la región como un socio estratégico clave en el comercio y la inversión global.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Nuestros valores</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-3 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA / TIMELINE */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Historia e hitos</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">
            Un recorrido por los momentos que definen nuestra trayectoria institucional.
          </p>
          <div className="mt-10 relative border-l-2 border-neutral-200 pl-8 space-y-10">
            {MILESTONES.map((m, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <span className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-hklRed border-4 border-white shadow" />
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <span className="inline-block rounded-full bg-red-50 text-hklRed text-xs font-semibold px-3 py-1 mb-2">
                    {m.year}
                  </span>
                  <h3 className="font-semibold text-lg">{m.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIANZAS INSTITUCIONALES */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Alianzas institucionales</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">
            Nuestra red de valor descansa en alianzas sólidas con organizaciones de primer nivel.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {ALLIES.map((a, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-neutral-900">{a.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{a.role}</p>
                </div>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-hklRed underline decoration-red-200 hover:decoration-hklRed"
                >
                  Visitar sitio →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">¿Listo para ser parte de la red?</h2>
          <p className="mt-4 text-neutral-600 max-w-prose mx-auto">
            La membresía HKLABA te conecta con Hong Kong, la Federation y una comunidad global de más de 11.000 empresarios. El acceso se tramita a través de APCC.
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

