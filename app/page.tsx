// app/page.tsx
import Image from 'next/image'
import Script from 'next/script'
import NextDynamic from 'next/dynamic'
import type { Metadata } from 'next'

// 🔎 SEO de la home
export const metadata: Metadata = {
  title: 'HKLABA — Conectando Hong Kong con América Latina',
  description:
    'HKLABA conecta Hong Kong con América Latina. Membresías, beneficios, alianzas con HKTDC, Hong Kong Forum, misiones comerciales y networking regional.',
  keywords: [
    'HKLABA',
    'Hong Kong',
    'Latinoamérica',
    'HKTDC',
    'Hong Kong Forum',
    'negocios',
    'inversiones',
    'APCC',
    'comercio exterior',
    'networking',
  ],
  alternates: { canonical: 'https://www.hklaba.com/' },
}

// ⚙️ Fuerza SSG y sin revalidación (no colisiona con NextDynamic)
export const dynamic = 'force-static'
export const revalidate = false

// ⬇️ Cargas cliente (con rutas correctas desde app/page.tsx)
const AllianceVideoClient = NextDynamic(() => import('./components/AllianceVideoClient'), { ssr: false })
const ForumClient        = NextDynamic(() => import('./components/ForumClient'),        { ssr: false })
const GalleryClient      = NextDynamic(() => import('./components/GalleryClient'),      { ssr: false })
const ContactZohoClient  = NextDynamic(() => import('./components/ContactZohoClient'),  { ssr: false })

export default function HKLABALanding() {
  const ORG = {
    name: 'HKLABA — Hong Kong–Latin America Business Association',
    tagline: 'Conectando Hong Kong con América Latina',
    email: 'info@hklaba.com',
    phone: '+56 9 7576 9493',
    address: 'Santiago - Chile',
    apccSignupUrl: 'https://apcc-chamber.vercel.app/',
  }

  const federationStats = [
    { k: '49', v: 'Asociaciones' },
    { k: '38', v: 'Países y regiones' },
    { k: '11.000+', v: 'Asociados' },
  ]

  const supportingLogos = [
    '/supporting_logo_1.png',
    '/supporting_logo_2.png',
    '/supporting_logo_3.png',
    '/supporting_logo_4.png',
    '/supporting_logo_5.png',
    '/supporting_logo_6.png',
  ]

  const benefitsAPCC = [
    'Boletines y contenidos sobre oportunidades Asia–Pacífico',
    'Comunidad y networking regional',
    'Charlas, talleres y acceso a directorio de miembros',
  ]
  const benefitsHKLABA = [
    'Prioridad para misiones y delegaciones a Hong Kong',
    'Acceso al Hong Kong Forum y actividades de la Federation',
    'Vínculo institucional con HKTDC y aliados',
  ]
  const benefitsFederation = [
    'e-Membership Card: ofertas globales en viajes, entretenimiento, gastronomía y compras',
    'Acceso gratuito a ferias HKTDC en Hong Kong',
    'HKTDC Design Gallery',
    'hktdc.com Sourcing – plataforma de negocios',
    'Beneficios y ofertas en países como Tailandia y Vietnam (alojamiento, restaurantes, otros)',
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* JSON-LD básicos */}
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: ORG.name,
          url: 'https://www.hklaba.com/',
          logo: 'https://www.hklaba.com/hklaba-logo.png',
          sameAs: [
            'https://www.linkedin.com/company/hklaba',
            'https://www.web.facebook.com/hktdc_latam',
            'https://www.asiapacific-chamber.com',
          ],
          contactPoint: [{
            '@type': 'ContactPoint',
            telephone: ORG.phone,
            contactType: 'customer service',
            areaServed: 'CL',
            availableLanguage: ['es', 'en'],
          }],
          address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressCountry: 'CL' },
        })}
      </Script>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" aria-label="Ir al inicio">
              <Image src="/hklaba-logo.png" alt="HKLABA — Hong Kong–Latin America Business Association" width={180} height={52} priority />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600" aria-label="Navegación principal">
            <a href="#quienes" className="hover:text-hklRed">Quiénes somos</a>
            <a href="#alianzas" className="hover:text-hklRed">Alianza HKTDC</a>
            <a href="#porquehk" className="hover:text-hklRed">Por qué Hong Kong</a>
            <a href="#membresias" className="hover:text-hklRed">Membresías</a>
            <a href="#forum" className="hover:text-hklRed">Hong Kong Forum</a>
            <a href="#galeria" className="hover:text-hklRed">Galería</a>
            <a href="#contacto" className="hover:text-hklRed">Contacto</a>
            <a href={ORG.apccSignupUrl} className="inline-flex rounded-xl border border-hklRed text-hklRed px-3 py-1.5 hover:bg-hklRed hover:text-white transition" rel="noopener">Unirme vía APCC</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-hklRed">{ORG.tagline}</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              La red oficial que conecta a Latinoamérica con Hong Kong
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              HKLABA es la única asociación en Latinoamérica miembro de la <span className="font-medium">Federation of Hong Kong Business Associations Worldwide</span>, una red global que articula oportunidades de negocios y vínculos de alto nivel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={ORG.apccSignupUrl} className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition" rel="noopener">Unirme vía APCC</a>
              <a href="#alianzas" className="rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition">Ver alianza HKTDC</a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <div className="flex items-center gap-4">
              <Image src="/federation-logo.png" alt="Federation of Hong Kong Business Associations Worldwide — Logo" width={260} height={60} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4" aria-label="Estadísticas de la Federation">
              {federationStats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 p-4 text-center">
                  <div className="text-2xl font-bold text-neutral-900">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{s.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Red fundada con apoyo de HKTDC para fomentar cooperación, intercambio y generación de oportunidades.
            </p>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS (video cliente simplificado con iframe) */}
      <section id="quienes" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Quiénes somos</h2>
            <p className="mt-4 text-neutral-700">
              Somos el puente entre Hong Kong y América Latina. Promovemos la cooperación empresarial, el acceso a
              información estratégica y la participación de nuestros miembros en eventos de alto nivel en Hong Kong
              y la región.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Networking con líderes empresariales de la región y Hong Kong</li>
              <li>• Inteligencia de mercado y programas de internacionalización</li>
              <li>• Participación prioritaria en foros, misiones y actividades de la Federation</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 bg-neutral-50 space-y-4">
            <div className="text-sm text-neutral-600">Relación con la Federation</div>
            <p className="text-neutral-700">
              La Federation reúne a 49 asociaciones en 38 países y regiones, con más de 11.000 asociados individuales. Su objetivo es crear sinergias y un canal de colaboración global en torno a Hong Kong.
            </p>
            {/* Si prefieres tu componente cliente, deja AllianceVideoClient; si no, mantenemos el iframe */}
            <AllianceVideoClient videoId="a1OcIDBTHgw" title="Quiénes Somos – Video" />
          </div>
        </div>
      </section>

      {/* ALIANZA HKTDC */}
      <section id="alianzas" className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Alianza con HKTDC</h2>
            <p className="mt-4 text-neutral-700">
              HKLABA y el Hong Kong Trade Development Council (HKTDC) mantienen un acuerdo de cooperación (MOU) para promover comercio e inversiones, intercambio de consultas, apoyo a misiones y actividades empresariales.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={ORG.apccSignupUrl} className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition" rel="noopener">Quiero ser miembro</a>
              <a href="#forum" className="rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition">Conocer el Hong Kong Forum</a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white space-y-4">
            <div className="text-sm text-neutral-600">Puntos clave del MOU (2018)</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Promoción de relaciones comerciales Hong Kong–Chile/LatAm</li>
              <li>• Coordinación de programas y reuniones</li>
              <li>• Intercambio de consultas y de información de mercado</li>
              <li>• Apoyo a actividades y misiones empresariales</li>
              <li>• Asistencia a funcionarios e investigadores</li>
              <li>• Cumplimiento de normas anticorrupción/AML/CFT</li>
            </ul>
            <p className="text-xs text-neutral-500">* Resumen no vinculante del acuerdo de cooperación.</p>
            <AllianceVideoClient videoId="FxZEyGRoQUk" title="Alianza HKTDC – Video" />
          </div>
        </div>
      </section>

      {/* POR QUÉ HONG KONG */}
      <section id="porquehk" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Por qué hacer negocios con Hong Kong</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-700">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">1) Crear empresa con facilidad</h3>
              <p className="mt-2">Trámites rápidos, costos de inicio bajos y un entorno pro-negocios.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">2) Centro financiero e IPOs</h3>
              <p className="mt-2">Mercado líder para listados y levantamiento de capital (HKEX).</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">3) Sistema tributario competitivo</h3>
              <p className="mt-2">Base territorial: utilidades generadas fuera de HK comúnmente exentas.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">4) Comercio exterior libre</h3>
              <p className="mt-2">Sin barreras generales; despachos ágiles y regulaciones claras.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white md:col-span-2">
              <h3 className="font-semibold">5) Integridad y anti-corrupción</h3>
              <p className="mt-2">ICAC y cumplimiento robusto para un terreno parejo de negocios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forum y Galería (tus componentes cliente) */}
      <ForumClient />
      <GalleryClient />

      {/* Alianzas */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Alianzas</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">Logos de aliados estratégicos y organizaciones colaboradoras.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {supportingLogos.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white flex items-center justify-center p-4">
                <Image src={src} alt={`Logo aliado ${i+1} — HKLABA`} width={300} height={200} className="h-auto w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto (tu componente Zoho cliente) */}
      <ContactZohoClient />

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-neutral-500 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/federation-logo.png" alt="Miembro de la Federation of Hong Kong Business Associations Worldwide" width={200} height={48} />
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
