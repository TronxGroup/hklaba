// app/contacto/page.tsx
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — HKLABA',
  description:
    'Contacta a HKLABA — Hong Kong–Latin America Business Association. Escríbenos por email, WhatsApp o encuéntranos en LinkedIn. Basados en Santiago, Chile.',
  keywords: [
    'HKLABA contacto',
    'Hong Kong negocios Chile',
    'contacto HKLABA',
    'Santiago Chile',
    'APCC membresía',
  ],
  alternates: { canonical: 'https://www.hklaba.com/contacto' },
}

export const dynamic = 'force-static'
export const revalidate = false

// ── Datos ───────────────────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  {
    icon: '✉️',
    label: 'Correo electrónico',
    value: 'info@hklaba.com',
    link: 'mailto:info@hklaba.com',
    note: 'Respondemos en un plazo de 1–2 días hábiles.',
  },
  {
    icon: '📱',
    label: 'WhatsApp / Teléfono',
    value: '+56 9 7576 9493',
    link: 'https://wa.me/56975769493',
    note: 'Disponible en horario de oficina, Santiago de Chile.',
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: 'Santiago, Chile',
    link: null,
    note: 'Operamos con alcance regional en América Latina.',
  },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    desc: 'Síguenos para novedades, eventos y oportunidades de negocios.',
    url: 'https://www.linkedin.com/company/hklaba',
    icon: '🔗',
  },
  {
    label: 'HKTDC Chile Office en Facebook',
    desc: 'Página oficial del HKTDC para Chile y América Latina.',
    url: 'https://www.web.facebook.com/hktdc_latam',
    icon: '📘',
  },
]

const RELATED_LINKS = [
  {
    label: 'Unirme como miembro vía APCC',
    desc: 'La membresía HKLABA se tramita a través de la Asia-Pacific Chamber of Commerce.',
    url: 'https://www.asiapacific-chamber.com/',
  },
  {
    label: 'Federation of Hong Kong Business Associations Worldwide',
    desc: 'Red global de 49 asociaciones en 38 países y regiones.',
    url: 'https://www.hkfederation.org.hk',
  },
  {
    label: 'HKTDC — Hong Kong Trade Development Council',
    desc: 'Organismo oficial de promoción comercial de Hong Kong.',
    url: 'https://www.hktdc.com',
  },
  {
    label: 'Hong Kong Forum 2026',
    desc: 'Evento anual insignia de la Federation — 17 y 18 de noviembre de 2026, HKCEC.',
    url: 'https://hkforum.hktdc.com/conference/hkforum/en',
  },
]

// ── Página ───────────────────────────────────────────────────────────────────
export default function ContactoPage() {
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
            <a href="/"          className="hover:text-hklRed">Inicio</a>
            <a href="/nosotros"  className="hover:text-hklRed">Nosotros</a>
            <a href="/servicios" className="hover:text-hklRed">Servicios</a>
            <a href="/noticias"  className="hover:text-hklRed">Noticias</a>
            <a href="/contacto"  className="text-hklRed font-medium">Contacto</a>
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
        <div className="mx-auto max-w-7xl px-4 py-20">
          <p className="text-xs uppercase tracking-widest text-hklRed">Contacto</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight max-w-xl">
            Estamos para ayudarte
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            Si tienes preguntas sobre membresías, servicios, el Hong Kong Forum o cualquier oportunidad de negocios con Hong Kong, escríbenos. Desde Santiago coordinamos con toda América Latina.
          </p>
        </div>
      </section>

      {/* DATOS DE CONTACTO */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map((item, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-8 flex flex-col gap-3">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-1 block text-xl font-semibold text-hklRed hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-xl font-semibold text-neutral-900">{item.value}</p>
                )}
              </div>
              <p className="text-sm text-neutral-500">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Síguenos</h2>
          <p className="mt-2 text-neutral-600">Mantente al día con noticias, eventos y oportunidades de negocios.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 hover:border-hklRed transition group"
              >
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <p className="font-semibold text-neutral-900 group-hover:text-hklRed transition">{s.label}</p>
                  <p className="mt-1 text-sm text-neutral-500">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS DE INTERÉS */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Enlaces de interés</h2>
          <p className="mt-2 text-neutral-600">Recursos y sitios clave de nuestra red institucional.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {RELATED_LINKS.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 hover:border-hklRed transition group"
              >
                <div>
                  <p className="font-semibold text-neutral-900 group-hover:text-hklRed transition">{l.label}</p>
                  <p className="mt-1 text-sm text-neutral-500">{l.desc}</p>
                </div>
                <span className="mt-4 text-sm text-hklRed">Visitar →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA membresía */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">¿Listo para unirte a la red?</h2>
            <p className="mt-4 text-neutral-600">
              La membresía HKLABA conecta a empresarios latinoamericanos con Hong Kong, la Federation y una red global de más de 11.000 asociados. El proceso de ingreso es a través de APCC.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={apccSignupUrl}
                className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition"
                rel="noopener"
              >
                Unirme vía APCC
              </a>
              <a
                href="mailto:info@hklaba.com"
                className="rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition"
              >
                Escribir al equipo
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 space-y-4">
            <Image
              src="/federation-logo.png"
              alt="Federation of Hong Kong Business Associations Worldwide"
              width={220}
              height={52}
            />
            <p className="text-sm text-neutral-600">
              HKLABA es la única asociación latinoamericana miembro pleno de la Federation of Hong Kong Business Associations Worldwide — una red global de 49 asociaciones en 38 países y regiones.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ k: '49', v: 'Asociaciones' }, { k: '38', v: 'Países' }, { k: '11.000+', v: 'Asociados' }].map((s, i) => (
                <div key={i} className="rounded-xl border border-neutral-100 bg-neutral-50 p-3">
                  <div className="text-lg font-bold text-neutral-900">{s.k}</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-widest">{s.v}</div>
                </div>
              ))}
            </div>
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
