import Image from 'next/image'
import Script from 'next/script'

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
    formspree: 'https://formspree.io/f/xxxxxxxx'
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
      {/* Scripts externos necesarios (reCAPTCHA) */}
      <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" aria-label="Ir al inicio">
              <Image src="/hklaba-logo.png" alt="HKLABA Logo" width={180} height={52} />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#quienes" className="hover:text-hklRed">Quiénes somos</a>
            <a href="#alianzas" className="hover:text-hklRed">Alianza HKTDC</a>
            <a href="#porquehk" className="hover:text-hklRed">Por qué Hong Kong</a>
            <a href="#membresias" className="hover:text-hklRed">Membresías</a>
            <a href="#forum" className="hover:text-hklRed">Hong Kong Forum</a>
            <a href="#galeria" className="hover:text-hklRed">Galería</a>
            <a href="#contacto" className="hover:text-hklRed">Contacto</a>
            <a href={ORG.apccSignupUrl} className="inline-flex rounded-xl border border-hklRed text-hklRed px-3 py-1.5 hover:bg-hklRed hover:text-white transition">Unirme vía APCC</a>
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
              <a href={ORG.apccSignupUrl} className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition">Unirme vía APCC</a>
              <a href="#alianzas" className="rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition">Ver alianza HKTDC</a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <div className="flex items-center gap-4">
              <Image src="/federation-logo.png" alt="Federation Logo" width={260} height={60} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
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
            {/* Video pequeño que se reproduce en bucle y vuelve al inicio */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/a1OcIDBTHgw?rel=0&modestbranding=1&controls=1&mute=1&autoplay=0&loop=1&playlist=a1OcIDBTHgw`}
                title="Quiénes Somos – Video"
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
              <a href={ORG.apccSignupUrl} className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition">Quiero ser miembro</a>
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
            {/* Video pequeño que se reproduce en bucle y vuelve al inicio */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/FxZEyGRoQUk?rel=0&modestbranding=1&controls=1&mute=1&autoplay=0&loop=1&playlist=FxZEyGRoQUk`}
                title="Alianza HKTDC – Video"
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
              <p className="mt-2">Trámites rápidos, costos de inicio bajos y un entorno pro‑negocios consistentemente rankeado entre los mejores del mundo para emprender.</p>
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
              <h3 className="font-semibold">5) Integridad y anti‑corrupción</h3>
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
            <a href={ORG.apccSignupUrl} className="hidden sm:inline-flex rounded-xl border border-hklRed text-hklRed px-4 py-2 hover:bg-hklRed hover:text-white">
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
            <a href={ORG.apccSignupUrl} className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition">
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
                  <Image src={src} alt={`Forum ${i+1}`} width={1200} height={900} className="h-full w-full object-cover" />
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
          <p className="mt-2 text-neutral-700 max-w-prose">Espacios para fotografías de mesas de trabajo, misiones, charlas y networking regional.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {activities.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <Image src={src} alt={`Actividad ${i+1}`} width={1200} height={900} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIANZAS (6 logos) */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Alianzas</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">Logos o fotografías de eventos con aliados estratégicos.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {supportingLogos.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white flex items-center justify-center p-4">
                <Image src={src} alt={`Logo aliado ${i+1}`} width={300} height={200} className="h-auto w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO (Zoho WebToLead con el mismo diseño) */}
      <section id="contacto" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Contacto</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">Cuéntanos tu interés y te contactaremos en 24 horas hábiles.</p>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {/* Formulario estilizado, enviando a Zoho CRM */}
            <form
              action="https://crm.zoho.com/crm/WebToLeadForm"
              method="POST"
              acceptCharset="UTF-8"
              className="lg:col-span-2 rounded-3xl border border-neutral-200 p-6 bg-white"
            >
              {/* Campos ocultos requeridos por Zoho */}
              <input type="hidden" name="xnQsjsdp" value="9927bc9ab48ac45afe972e2f745d45e4290a74b87b5f46b6410a68bbdd44f1a4" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="b78599c20c7b6cd2fe8b4cdac0d88d8aac69f68b62f698b96269b54c2e6a3b8349a3e45819f6fefb1fd0c3f32b5c5dae" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="/gracias" />
              {/* Origen del lead (picklist en Zoho) */}
              <input type="hidden" name="LEADCF9" value="hklaba.com/contacto" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-600">Nombre</label>
                  <input name="First Name" id="First_Name" required maxLength={40} className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">Apellido</label>
                  <input name="Last Name" id="Last_Name" required maxLength={80} className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">Email</label>
                  <input type="email" name="Email" id="Email" className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-neutral-600">Mensaje</label>
                  <textarea name="LEADCF3" id="LEADCF3" rows={5} className="mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200" />
                </div>
                {/* reCAPTCHA v2 */}
                <div className="sm:col-span-2">
                  <div className="g-recaptcha" data-sitekey="6LcAPtorAAAAAALHzNfPb8al-jYExQbDcCiK7BK5" data-theme="light" />
                </div>
              </div>

              <button className="mt-4 rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition" type="submit">Enviar</button>
            </form>

            <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
              <div className="text-sm text-neutral-600">Información</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>📧 {ORG.email}</li>
                <li>📞 {ORG.phone}</li>
                <li>📍 {ORG.address}</li>
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
              <Image src="/federation-logo.png" alt="Federation Logo" width={200} height={48} />
              <span className="text-neutral-600">Miembro oficial de la Federation of Hong Kong Business Associations Worldwide</span>
            </div>
            <div>© {new Date().getFullYear()} HKLABA. Todos los derechos reservados.</div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-neutral-600">
            <a href="https://www.linkedin.com/company/hklaba" target="_blank" rel="noreferrer" className="underline decoration-neutral-300 hover:text-hklRed">LinkedIn</a>
            <a href="/condiciones" className="underline decoration-neutral-300 hover:text-hklRed">Condiciones y Privacidad</a>
            <a href="https://www.web.facebook.com/hktdc_latam" target="_blank" rel="noreferrer" className="underline decoration-neutral-300 hover:text-hklRed">HKTDC Chile Office (Facebook)</a>
            <a href="https://www.asiapacific-chamber.com" target="_blank" rel="noreferrer" className="underline decoration-neutral-300 hover:text-hklRed">APCC</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
