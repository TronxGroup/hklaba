import Image from 'next/image'
import Script from 'next/script'
import type { Metadata } from 'next'

// 🔎 SEO global de la página (si este archivo es app/page.tsx)
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
  openGraph: {
    type: 'website',
    url: 'https://www.hklaba.com/',
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description:
      'La red oficial que conecta a Latinoamérica con Hong Kong. Alianzas HKTDC, beneficios, misiones y Hong Kong Forum.',
    siteName: 'HKLABA',
    images: [
      { url: 'https://www.hklaba.com/og-hklaba.jpg', width: 1200, height: 630, alt: 'HKLABA — Hong Kong–Latin America Business Association' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HKLABA — Conectando Hong Kong con América Latina',
    description:
      'Alianzas con HKTDC, beneficios de la Federation y oportunidades de negocios HK–LatAm.',
    images: ['https://www.hklaba.com/og-hklaba.jpg'],
  },
  alternates: { canonical: 'https://www.hklaba.com/' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

// Types
type Person = {
  name: string
  role: string
  email?: string
}

export default function HKLABALanding() {
  const ORG = {
    name: 'HKLABA — Hong Kong–Latin America Business Association',
    tagline: 'Conectando Hong Kong con América Latina',
    email: 'info@hklaba.com',
    phone: '+56 9 7576 9493',
    address: 'Santiago - Chile',
    apccSignupUrl: 'https://apcc-chamber.vercel.app/',
    formspree: 'https://formspree.io/f/xxxxxxxx',
  };

  const federationStats = [
    { k: '49', v: 'Asociaciones' },
    { k: '38', v: 'Países y regiones' },
    { k: '11.000+', v: 'Asociados' },
  ];

  const activities = ['/IMG_6093.jpg','/IMG-20181217-WA0052.jpg','/IMG-20190110-WA0044.jpg'];
  const forumPhotos = ['/jpg(2).jpg','/jpg(1).jpg','/jpg.jpg'];

  // 6 logos de aliados (espacios)
  const supportingLogos = [
    '/supporting_logo_1.png',
    '/supporting_logo_2.png',
    '/supporting_logo_3.png',
    '/supporting_logo_4.png',
    '/supporting_logo_5.png',
    '/supporting_logo_6.png',
  ];

  // ====== Beneficios (texto APCC / HKLABA / Federation) ======
  const benefitsAPCC = [
    'Boletines y contenidos sobre oportunidades Asia–Pacífico',
    'Comunidad y networking regional',
    'Charlas, talleres y acceso a directorio de miembros',
  ];
  const benefitsHKLABA = [
    'Prioridad para misiones y delegaciones a Hong Kong',
    'Acceso al Hong Kong Forum y actividades de la Federation',
    'Vínculo institucional con HKTDC y aliados',
  ];
  const benefitsFederation = [
    'e-Membership Card: ofertas globales en viajes, entretenimiento, gastronomía y compras',
    'Acceso gratuito a ferias HKTDC en Hong Kong',
    'HKTDC Design Gallery',
    'hktdc.com Sourcing – plataforma de negocios',
    'Beneficios y ofertas en países como Tailandia y Vietnam (alojamiento, restaurantes, otros)',
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* reCAPTCHA */}
      <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />

      {/* JSON-LD: Organization */}
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'HKLABA — Hong Kong–Latin America Business Association',
          url: 'https://www.hklaba.com/',
          logo: 'https://www.hklaba.com/hklaba-logo.png',
          sameAs: [
            'https://www.linkedin.com/company/hklaba',
            'https://www.web.facebook.com/hktdc_latam',
            'https://www.asiapacific-chamber.com',
          ],
          contactPoint: [{
            '@type': 'ContactPoint',
            telephone: '+56 9 7576 9493',
            contactType: 'customer service',
            areaServed: 'CL',
            availableLanguage: ['es', 'en'],
          }],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Santiago',
            addressCountry: 'CL',
          },
        })}
      </Script>

      {/* JSON-LD: Website */}
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'HKLABA',
          url: 'https://www.hklaba.com/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.hklaba.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        })}
      </Script>

      {/* JSON-LD: VideoObjects */}
      <Script id="ld-video-quienes" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: 'Quiénes Somos — HKLABA',
          description: 'Presentación de HKLABA y su relación con la Federation.',
          thumbnailUrl: ['https://i.ytimg.com/vi/a1OcIDBTHgw/hqdefault.jpg'],
          uploadDate: '2020-01-01',
          publisher: { '@type': 'Organization', name: 'HKLABA' },
          contentUrl: 'https://www.youtube.com/watch?v=a1OcIDBTHgw',
          embedUrl: 'https://www.youtube.com/embed/a1OcIDBTHgw',
        })}
      </Script>
      <Script id="ld-video-alianza" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: 'Alianza HKLABA–HKTDC',
          description: 'Resumen del acuerdo de cooperación con HKTDC.',
          thumbnailUrl: ['https://i.ytimg.com/vi/FxZEyGRoQUk/hqdefault.jpg'],
          uploadDate: '2020-01-01',
          publisher: { '@type': 'Organization', name: 'HKLABA' },
          contentUrl: 'https://www.youtube.com/watch?v=FxZEyGRoQUk',
          embedUrl: 'https://www.youtube.com/embed/FxZEyGRoQUk',
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

      {/* QUIÉNES SOMOS */}
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
            {/* Video pequeño */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/a1OcIDBTHgw?rel=0&modestbranding=1&controls=1&mute=1&autoplay=0&loop=1&playlist=a1OcIDBTHgw"
                title="Quiénes Somos – Video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
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
            {/* Video pequeño */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/FxZEyGRoQUk?rel=0&modestbranding=1&controls=1&mute=1&autoplay=0&loop=1&playlist=FxZEyGRoQUk"
                title="Alianza HKTDC – Video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
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
              <p className="mt-2">Trámites rápidos, costos de inicio bajos y un entorno pro-negocios consistentemente rankeado entre los mejores del mundo para emprender.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">2) Centro financiero e IPOs</h3>
              <p className="mt-2">Mercado líder para listados y levantamiento de capital, con la HKEX (Main Board y GEM) atrayendo emisores globales.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">3) Sistema tributario simple y competitivo</h3>
              <p className="mt-2">Bajos impuestos y base territorial: normalmente solo se gravan utilidades generadas en Hong Kong; ingresos extranjeros suelen no pagar en Hong Kong.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">4) Comercio exterior libre</h3>
              <p className="mt-2">Política de libre comercio sin barreras generales: importaciones y exportaciones operan sin restricciones, cumpliendo regulaciones y despachos aduaneros.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white md:col-span-2">
              <h3 className="font-semibold">5) Integridad y anti-corrupción</h3>
              <p className="mt-2">Sólido marco de cumplimiento y una comisión independiente (ICAC) con estrategia integral de prevención, educación y aplicación de la ley que mantiene un terreno de juego parejo para los negocios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBRESÍAS + BENEFICIOS */}
      <section id="membresias" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Membresías y beneficios</h2>
              <p className="mt-2 text-neutral-700 max-w-prose">
                La inscripción se realiza a través de la Cámara de Comercio Asia Pacífico (APCC).
                Una vez aceptado, accedes a la red HKLABA–Federation.
              </p>
            </div>
            <a href={ORG.apccSignupUrl} className="hidden sm:inline-flex rounded-xl border border-hklRed text-hklRed px-4 py-2 hover:bg-hklRed hover:text-white" rel="noopener">
              Unirme vía APCC
            </a>
          </div>

          {/* Beneficios por bloque */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">Beneficios APCC</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {benefitsAPCC.map((b, i) => <li key={i}>• {b}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">Beneficios HKLABA</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {benefitsHKLABA.map((b, i) => <li key={i}>• {b}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">Beneficios Federation</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {benefitsFederation.map((b, i) => <li key={i}>• {b}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a href={ORG.apccSignupUrl} className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition" rel="noopener">
              Unirme vía APCC
            </a>
            <p className="mt-3 text-sm text-neutral-600">
              Todos los socios de APCC y HKLABA acceden automáticamente a los beneficios exclusivos de la
              Federation of Hong Kong Business Associations Worldwide mediante su e-Membership Card.
            </p>
            <div className="mt-3 text-xs text-neutral-500 leading-relaxed">
              <div className="font-medium mb-1">Disclaimer</div>
              <p>Los productos, servicios y beneficios son provistos directamente por los “Membership Benefits Partners”, quienes son los únicos responsables de sus obligaciones. Ofertas sujetas a stock y pueden no ser acumulables con otras promociones. HKTDC, la Federation y los Partners se reservan el derecho a modificar términos y condiciones, resolver disputas y rechazar beneficios cuando corresponda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HONG KONG FORUM */}
      <section id="forum" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Hong Kong Forum</h2>
            <p className="mt-4 text-neutral-700">
              Evento anual insignia de la Federation, organizado por HKTDC. Reúne a líderes y ejecutivos de todo el mundo para dialogar sobre negocios en Hong Kong y China continental. Incluye keynotes, paneles, networking y visitas técnicas.
            </p>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>• Conexión con ejecutivos senior</li>
              <li>• Información actualizada sobre entorno de negocios</li>
              <li>• Programa de visitas a infraestructura e innovación</li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3">
              {forumPhotos.map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <Image src={src} alt={`Hong Kong Forum — Fotografía ${i+1}`} width={1200} height={900} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA ACTIVIDADES */}
      <section id="galeria" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Actividades HKLABA</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">Fotografías de mesas de trabajo, misiones, charlas y networking regional.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {activities.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <Image src={src} alt={`Actividades HKLABA — Imagen ${i+1}`} width={1200} height={900} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIANZAS (6 logos) */}
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

      {/* CONTACTO — Zoho WebToLead con diseño original (2 columnas) */}
      <section id="contacto" className="border-b border-neutral-200">
        {/* Carga reCAPTCHA */}
        <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />

        {/* Helpers Zoho */}
        <Script id="zoho-webtolead-helpers" strategy="afterInteractive">
          {`
            function addAriaSelected6988454000000684005 (){
              var optionElem = event.target;
              var prev = optionElem.querySelector('[aria-selected=true]');
              if (prev){ prev.removeAttribute('aria-selected'); }
              optionElem.querySelectorAll('option')[ optionElem.selectedIndex ].ariaSelected = 'true';
            }
            function rccallback6988454000000684005 (){
              var recap = document.getElementById('recap6988454000000684005');
              if(recap){ recap.setAttribute('captcha-verified', true); }
              var err = document.getElementById('recapErr6988454000000684005');
              if(err && err.style.visibility === 'visible'){ err.style.visibility = 'hidden'; }
            }
            function reCaptchaAlert6988454000000684005 (){
              var recap = document.getElementById('recap6988454000000684005');
              if(recap && recap.getAttribute('captcha-verified') == 'false'){
                var err = document.getElementById('recapErr6988454000000684005');
                if(err){ err.style.visibility = 'visible'; }
                return false;
              }
              return true;
            }
            function validateEmail6988454000000684005 (){
              var form = document.forms['WebToLeads6988454000000684005'];
              var emailFld = form.querySelectorAll('[ftype=email]');
              for(var i=0;i<emailFld.length;i++){
                var emailVal = emailFld[i].value;
                if((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0){
                  var atpos = emailVal.indexOf('@');
                  var dotpos = emailVal.lastIndexOf('.');
                  if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
                    alert('Introduzca una dirección de correo electrónico válida. ');
                    emailFld[i].focus();
                    return false;
                  }
                }
              }
              return true;
            }
            function checkMandatory6988454000000684005 (){
              var mndFileds = ['First Name','Last Name'];
              var fldLangVal = ['Nombre','Apellido'];
              for(var i=0;i<mndFileds.length;i++){
                var fieldObj = document.forms['WebToLeads6988454000000684005'][mndFileds[i]];
                if(fieldObj){
                  if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0){
                    if(fieldObj.type == 'file'){ alert('Seleccione un archivo para cargar.'); fieldObj.focus(); return false; }
                    alert(fldLangVal[i] + ' no puede estar vacío.'); fieldObj.focus(); return false;
                  }else if(fieldObj.nodeName == 'SELECT'){
                    if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                      alert(fldLangVal[i] + ' no puede ser nulo.'); fieldObj.focus(); return false;
                    }
                  }else if(fieldObj.type == 'checkbox'){
                    if(fieldObj.checked == false){ alert('Please accept ' + fldLangVal[i]); fieldObj.focus(); return false; }
                  }
                }
              }
              if(!validateEmail6988454000000684005()){ return false; }
              if(!reCaptchaAlert6988454000000684005()){ return false; }
              var urlparams = new URLSearchParams(window.location.search);
              if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
                var webform = document.getElementById('webform6988454000000684005');
                var smart = document.createElement('input');
                smart.setAttribute('type','hidden'); smart.setAttribute('value','smarturl'); smart.setAttribute('name','service');
                webform.appendChild(smart);
              }
              var submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit');
              if(submitBtn){ submitBtn.setAttribute('disabled', true); }
              return true;
            }
            window.addAriaSelected6988454000000684005 = addAriaSelected6988454000000684005;
            window.rccallback6988454000000684005 = rccallback6988454000000684005;
            window.reCaptchaAlert6988454000000684005 = reCaptchaAlert6988454000000684005;
            window.validateEmail6988454000000684005 = validateEmail6988454000000684005;
            window.checkMandatory6988454000000684005 = checkMandatory6988454000000684005;
          `}
        </Script>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Contacto</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">
            Cuéntanos tu interés y te contactaremos en 24 horas hábiles.
          </p>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {/* Formulario Zoho con UI original */}
            <div className="lg:col-span-2 rounded-3xl border border-neutral-200 p-6 bg-white">
              <form
                id="webform6988454000000684005"
                name="WebToLeads6988454000000684005"
                action="https://crm.zoho.com/crm/WebToLeadForm"
                method="POST"
                acceptCharset="UTF-8"
                onSubmit={(e) => {
                  // @ts-ignore
                  if (typeof window !== 'undefined' && window.checkMandatory6988454000000684005) {
                    // @ts-ignore
                    const ok = window.checkMandatory6988454000000684005();
                    if (!ok) { e.preventDefault(); }
                  }
                }}
                className="grid sm:grid-cols-2 gap-4"
                aria-label="Formulario de contacto HKLABA"
              >
                {/* Ocultos Zoho */}
                <input type="text" name="xnQsjsdp" defaultValue="a60a7215101091d07eeb025d550ce0c4e9369c64fbfb661942d9ef3a583c5453" style={{ display: 'none' }} />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input type="text" name="xmIwtLD" defaultValue="73d2d9e8cf72df188f36932f8d309c47f409a2af8c8f2ff14198ee3d3e26bfc5be9a67989dcda09602908a4218f09c38" style={{ display: 'none' }} />
                <input type="text" name="actionType" defaultValue="TGVhZHM=" style={{ display: 'none' }} />
                <input type="text" name="returnURL" defaultValue="https://www.hklaba.com/gracias" style={{ display: 'none' }} />

                {/* Campos visibles */}
                <div>
                  <label className="block text-sm text-neutral-600">Nombre <span className="text-red-600">*</span></label>
                  <input
                    id="First_Name"
                    name="First Name"
                    required
                    autoComplete="given-name"
                    className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-600">Apellido <span className="text-red-600">*</span></label>
                  <input
                    id="Last_Name"
                    name="Last Name"
                    required
                    autoComplete="family-name"
                    className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm text-neutral-600">Email</label>
                  <input
                    id="Email"
                    name="Email"
                    // @ts-ignore
                    ftype="email"
                    autoComplete="email"
                    inputMode="email"
                    className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm text-neutral-600">Mensaje</label>
                  <textarea
                    id="LEADCF3"
                    name="LEADCF3"
                    rows={5}
                    className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200"
                  />
                </div>

                {/* Lead_Origen (oculto) */}
                <select
                  id="LEADCF9"
                  name="LEADCF9"
                  defaultValue="hklaba.com/contacto"
                  onChange={() => {
                    // @ts-ignore
                    if (window.addAriaSelected6988454000000684005) window.addAriaSelected6988454000000684005();
                  }}
                  className="hidden"
                  aria-hidden="true"
                >
                  <option value="-None-">-None-</option>
                  <option value="plan.dekaelomedia.com">plan.dekaelomedia.com</option>
                  <option value="tronxgroup.com/contacto">tronxgroup.com/contacto</option>
                  <option value="tronxstrategic.com/contacto">tronxstrategic.com/contacto</option>
                  <option value="dekaelomedia.com/contacto">dekaelomedia.com/contacto</option>
                  <option value="empresas.echevensko.com">empresas.echevensko.com</option>
                  <option value="apccskills.asiapacific-chamber.com">apccskills.asiapacific-chamber.com</option>
                  <option value="asiapacific-chamber.com/contacto">asiapacific-chamber.com/contacto</option>
                  <option value="hklaba.com/contacto">hklaba.com/contacto</option>
                </select>

                {/* Honeypot */}
                <input type="text" name="aG9uZXlwb3Q" defaultValue="" style={{ display: 'none' }} />

                {/* reCAPTCHA + botones */}
                <div className="sm:col-span-2">
                  <div
                    id="recap6988454000000684005"
                    className="g-recaptcha"
                    data-sitekey="6LcAPtorAAAAAALHzNfPb8al-jYExQbDcCiK7BK5"
                    data-theme="light"
                    data-callback="rccallback6988454000000684005"
                    // @ts-ignore
                    captcha-verified="false"
                  />
                  <div id="recapErr6988454000000684005" className="mt-2 text-xs text-red-600" style={{ visibility: 'hidden' }}>
                    Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-center gap-3">
                  <button className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition formsubmit" type="submit">
                    Enviar
                  </button>
                  <button className="rounded-xl border border-neutral-300 text-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 transition" type="reset">
                    Restablecer
                  </button>
                </div>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
              <div className="text-sm text-neutral-600">Información</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>📧 <a href="mailto:info@hklaba.com" className="underline decoration-neutral-300 hover:text-hklRed">info@hklaba.com</a></li>
                <li>📞 <a href="tel:+56975769493" className="underline decoration-neutral-300 hover:text-hklRed">+56 9 7576 9493</a></li>
                <li>📍 Santiago - Chile</li>
              </ul>
              <div className="mt-6 text-sm text-neutral-500">Horario: Lun–Vie 9:00 a 18:00 (GMT-3)</div>
            </div>
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
  );
}
