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
      {/* reCAPTCHA (Zoho también la carga; no pasa nada si está dos veces, pero podemos dejarla aquí por si acaso) */}
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

      {/* CONTACTO — Zoho WebToLead embebido, manteniendo diseño */}
      <section id="contacto" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Contacto</h2>
          <p className="mt-2 text-neutral-700 max-w-prose">Cuéntanos tu interés y te contactaremos en 24 horas hábiles.</p>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl border border-neutral-200 p-6 bg-white">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<!-- Note : - You can modify the font style and form style to suit your website. - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. - The Mandatory check script can modified as to suit your business needs. - It is important that you test the modified form before going live.-->
<div id = 'crmWebToEntityForm' class = 'zcwf_lblLeft crmWebToEntityForm' style = 'background-color: white;color: black;max-width: 600px;'>
<meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'>
<META HTTP-EQUIV = 'content-type' CONTENT = 'text/html;charset=UTF-8'>
<script src = 'https://www.google.com/recaptcha/api.js' async defer > </script>
<form id = 'webform6988454000000684005' action = 'https://crm.zoho.com/crm/WebToLeadForm' name = WebToLeads6988454000000684005 method = 'POST' onSubmit = 'javascript:document.charset="UTF-8"; return checkMandatory6988454000000684005()' accept-charset = 'UTF-8'>
<input type = 'text' style = 'display:none;' name = 'xnQsjsdp' value = 'a60a7215101091d07eeb025d550ce0c4e9369c64fbfb661942d9ef3a583c5453'> </input>
<input type = 'hidden' name = 'zc_gad' id = 'zc_gad' value = ''> </input>
<input type = 'text' style = 'display:none;' name = 'xmIwtLD' value = '73d2d9e8cf72df188f36932f8d309c47f409a2af8c8f2ff14198ee3d3e26bfc5be9a67989dcda09602908a4218f09c38'> </input>
<input type = 'text' style = 'display:none;' name = 'actionType' value = 'TGVhZHM='> </input>
<input type = 'text' style = 'display:none;' name = 'returnURL' value = 'https&#x3a;&#x2f;&#x2f;www.hklaba.com&#x2f;gracias'> </input>
<!-- Do not remove this code. -->
<style>
 html,body{ margin: 0px; }
 .formsubmit.zcwf_button{ color: white !important; background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); }
 #crmWebToEntityForm.zcwf_lblLeft{ width: 100%; padding: 25px; margin: 0 auto; box-sizing: border-box; }
 #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing: border-box; }
 #crmWebToEntityForm {text-align: left; }
 #crmWebToEntityForm *{ direction: ltr; }
 .zcwf_lblLeft .zcwf_title{ word-wrap: break-word; padding: 0px 6px 10px; font-weight: bold }
 .zcwf_lblLeft.cpT_primaryBtn:hover{ background: linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important; box-shadow: 0 -2px 0 0 #0159b9 inset !important; border: 0 !important; color: #fff !important; outline: 0 !important; }
 .zcwf_lblLeft .zcwf_col_fld input[ type = text], input[ type = password], .zcwf_lblLeft .zcwf_col_fld textarea{ width: 60%; border: 1px solid #c0c6cc !important; resize: vertical; border-radius: 2px; float: left; }
 .zcwf_lblLeft .zcwf_col_lab{ width: 30%; word-break: break-word; padding: 0px 6px 0px; margin-right: 10px; margin-top: 5px; float: left; min-height: 1px; }
 .zcwf_lblLeft .zcwf_col_fld{ float: left; width: 68%; padding: 0px 6px 0px; position: relative; margin-top: 5px; }
 .zcwf_lblLeft .zcwf_privacy {padding: 6px; }
 .zcwf_lblLeft .wfrm_fld_dpNn {display: none; }
 .dIB {display: inline-block; }
 .zcwf_lblLeft .zcwf_col_fld_slt{ width: 60%; border: 1px solid #ccc; background: #fff; border-radius: 4px; font-size: 12px; float: left; resize: vertical; padding: 2px 5px; }
 .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{ content: ''; display: table; clear: both; }
 .zcwf_lblLeft .zcwf_col_help{ float: left; margin-left: 7px; font-size: 12px; max-width: 35%; word-break: break-word; }
 .zcwf_lblLeft .zcwf_help_icon{ cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #c0c6cc; color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; }
 .zcwf_lblLeft .zcwf_row {margin: 15px 0px; }
 .zcwf_lblLeft .formsubmit{ margin-right: 5px; cursor: pointer; color: #313949; font-size: 12px; }
 .zcwf_lblLeft .zcwf_privacy_txt{ width: 90%; color: rgb(0, 0, 0); font-size: 12px; font-family: Arial; display: inline-block; vertical-align: top; color: #313949; padding-top: 2px; margin-left: 6px; }
 .zcwf_lblLeft .zcwf_button{ font-size: 12px; color: #313949; border: 1px solid #c0c6cc; padding: 3px 9px; border-radius: 4px; cursor: pointer; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
 .zcwf_lblLeft .zcwf_tooltip_over{ position: relative; }
 .zcwf_lblLeft .zcwf_tooltip_ctn{ position: absolute; background: #dedede; padding: 3px 6px; top: 3px; border-radius: 4px; word-break: break-word; min-width: 100px; max-width: 150px; color: #313949; z-index: 100; }
 .zcwf_lblLeft .zcwf_ckbox{ float: left; }
 .zcwf_lblLeft .zcwf_file{ width: 55%; box-sizing: border-box; float: left; }
 .cBoth:after{ content: ''; display: block; clear: both; }
 @media all and (max-width: 600px){ .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{ width: auto; float: none !important; } .zcwf_lblLeft .zcwf_col_help {width: 40%; } }
</style>
<div class = 'zcwf_row'>
 <div class = 'zcwf_col_lab' style = 'font-size:12px; font-family: Arial;'>
  <label for = 'First_Name'>Nombre <span style = 'color:red;'>*</span> </label>
 </div>
 <div class = 'zcwf_col_fld'>
  <input type = 'text' id = 'First_Name' aria-required = 'true' aria-label = 'First Name' name = 'First Name' aria-valuemax = '40' maxlength = '40'> </input>
  <div class = 'zcwf_col_help'> </div>
 </div>
</div>
<div class = 'zcwf_row'>
 <div class = 'zcwf_col_lab' style = 'font-size:12px; font-family: Arial;'>
  <label for = 'Last_Name'>Apellido <span style = 'color:red;'>*</span> </label>
 </div>
 <div class = 'zcwf_col_fld'>
  <input type = 'text' id = 'Last_Name' aria-required = 'true' aria-label = 'Last Name' name = 'Last Name' aria-valuemax = '80' maxlength = '80'> </input>
  <div class = 'zcwf_col_help'> </div>
 </div>
</div>
<div class = 'zcwf_row'>
 <div class = 'zcwf_col_lab' style = 'font-size:12px; font-family: Arial;'>
  <label for = 'Email'>Correo electr&oacute;nico</label>
 </div>
 <div class = 'zcwf_col_fld'>
  <input type = 'text' ftype = 'email' autocomplete = 'false' id = 'Email' aria-required = 'false' aria-label = 'Email' name = 'Email' aria-valuemax = '100' crmlabel = '' maxlength = '100'> </input>
  <div class = 'zcwf_col_help'> </div>
 </div>
</div>
<div class = 'zcwf_row'>
 <div class = 'zcwf_col_lab' style = 'font-size:12px; font-family: Arial;'>
  <label for = 'LEADCF3'>Mensaje</label>
 </div>
 <div class = 'zcwf_col_fld'>
  <textarea style = 'font-family: Arial, sans-serif;' aria-multiline = 'true' id = 'LEADCF3' aria-required = 'false' aria-label = 'LEADCF3' name = 'LEADCF3'> </textarea>
  <div class = 'zcwf_col_help'> </div>
 </div>
</div>
<div class = 'zcwf_row'>
 <div class = 'zcwf_col_lab'> </div>
 <div class = 'zcwf_col_fld'>
  <div class = 'g-recaptcha' data-sitekey = '6LcAPtorAAAAAALHzNfPb8al-jYExQbDcCiK7BK5' data-theme = 'light' data-callback = 'rccallback6988454000000684005' captcha-verified = 'false' id = 'recap6988454000000684005'> </div>
  <div id = 'recapErr6988454000000684005' style = 'font-size:12px;color:red;visibility:hidden;'>Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.</div>
 </div>
</div>
<div class = 'zcwf_row wfrm_fld_dpNn'>
 <div class = 'zcwf_col_lab' style = 'font-size:12px; font-family: Arial;'>
  <label for = 'LEADCF9'>Lead_Origen</label>
 </div>
 <div class = 'zcwf_col_fld'>
  <select class = 'zcwf_col_fld_slt' role = 'combobox' aria-expanded = 'false' aria-haspopup = 'listbox' id = 'LEADCF9' onChange = 'addAriaSelected6988454000000684005()' aria-required = 'false' aria-label = 'LEADCF9' name = 'LEADCF9'>
   <option value = '-None-'>-None-</option>
   <option value = 'plan.dekaelomedia.com'>plan.dekaelomedia.com</option>
   <option value = 'tronxgroup.com&#x2f;contacto'>tronxgroup.com&#x2f;contacto</option>
   <option value = 'tronxstrategic.com&#x2f;contacto'>tronxstrategic.com&#x2f;contacto</option>
   <option value = 'dekaelomedia.com&#x2f;contacto'>dekaelomedia.com&#x2f;contacto</option>
   <option value = 'empresas.echevensko.com'>empresas.echevensko.com</option>
   <option value = 'apccskills.asiapacific-chamber.com'>apccskills.asiapacific-chamber.com</option>
   <option value = 'asiapacific-chamber.com&#x2f;contacto'>asiapacific-chamber.com&#x2f;contacto</option>
   <option selected value = 'hklaba.com&#x2f;contacto'>hklaba.com&#x2f;contacto</option>
  </select>
  <div class = 'zcwf_col_help'> </div>
 </div>
</div>
<input type = 'text' type = 'hidden' style = 'display: none;' name = 'aG9uZXlwb3Q' value = ''/>
<div class = 'zcwf_row'>
 <div class = 'zcwf_col_lab'> </div>
 <div class = 'zcwf_col_fld'>
  <input type = 'submit' id = 'formsubmit' role = 'button' class = 'formsubmit zcwf_button' value = 'Enviar' aria-label = 'Enviar' title = 'Enviar'>
  <input type = 'reset' class = 'zcwf_button' role = 'button' name = 'reset' value = 'Restablecer' aria-label = 'Restablecer' title = 'Restablecer'>
 </div>
</div>
<script>
 function addAriaSelected6988454000000684005 (){
  var optionElem = event.target;
  var previousSelectedOption = optionElem.querySelector ( '[aria-selected=true]' );
  if( previousSelectedOption ){
    previousSelectedOption.removeAttribute ( 'aria-selected' );
  }
  optionElem.querySelectorAll ( 'option' )[ optionElem.selectedIndex ].ariaSelected = 'true';
 }
 /* Do not remove this code. */
 function rccallback6988454000000684005 (){
  if( document.getElementById( 'recap6988454000000684005' ) != undefined ){
    document.getElementById ( 'recap6988454000000684005' ).setAttribute ( 'captcha-verified', true );
  }
  if( document.getElementById( 'recapErr6988454000000684005' ) != undefined && document.getElementById( 'recapErr6988454000000684005' ).style.visibility == 'visible' ){
    document.getElementById ( 'recapErr6988454000000684005' ).style.visibility = 'hidden';
  }
 }
 function reCaptchaAlert6988454000000684005 (){
  var recap = document.getElementById ( 'recap6988454000000684005' );
  if( recap != undefined && recap.getAttribute( 'captcha-verified' ) == 'false' ){
    document.getElementById ( 'recapErr6988454000000684005' ).style.visibility = 'visible';
    return false;
  }
  return true;
 }
 function validateEmail6988454000000684005 (){
  var form = document.forms[ 'WebToLeads6988454000000684005' ];
  var emailFld = form.querySelectorAll ( '[ftype=email]' );
  var i;
  for( i = 0; i < emailFld.length; i++ ){
    var emailVal = emailFld[ i ].value;
    if((emailVal.replace( /^\\s+|\\s+$/g,'' )).length != 0 ){
      var atpos = emailVal.indexOf ( '@' );
      var dotpos = emailVal.lastIndexOf ( '.' );
      if( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length ){
        alert ( 'Introduzca una dirección de correo electrónico válida. ' );
        emailFld[ i ].focus ();
        return false;
      }
    }
  }
  return true;
 }
 function checkMandatory6988454000000684005 (){
  var mndFileds = new Array ( 'First Name', 'Last Name' );
  var fldLangVal = new Array ( 'Nombre', 'Apellido' );
  for( i = 0; i < mndFileds.length; i++ ){
    var fieldObj = document.forms[ 'WebToLeads6988454000000684005' ][ mndFileds[ i ]];
    if( fieldObj ){
      if(((fieldObj.value ).replace( /^\\s+|\\s+$/g,'' )).length == 0 ){
        if( fieldObj.type == 'file' ){
          alert ( 'Seleccione un archivo para cargar.' );
          fieldObj.focus ();
          return false;
        }
        alert ( fldLangVal[ i ] + ' no puede estar vacío.' );
        fieldObj.focus ();
        return false;
      } else if( fieldObj.nodeName == 'SELECT' ){
        if( fieldObj.options[fieldObj.selectedIndex].value == '-None-' ){
          alert ( fldLangVal[ i ] + ' no puede ser nulo.' );
          fieldObj.focus ();
          return false;
        }
      } else if( fieldObj.type == 'checkbox' ){
        if( fieldObj.checked == false ){
          alert ( 'Please accept ' + fldLangVal[ i ]);
          fieldObj.focus ();
          return false;
        }
      }
      try { if( fieldObj.name == 'Last Name' ){ name = fieldObj.value; } } catch ( e ){}
    }
  }
  if( !validateEmail6988454000000684005()){
    return false;
  }
  if( !reCaptchaAlert6988454000000684005()){
    return false;
  }
  var urlparams = new URLSearchParams ( window.location.search );
  if( urlparams.has( 'service' ) && ( urlparams.get( 'service' ) === 'smarturl' )){
    var webform = document.getElementById ( 'webform6988454000000684005' );
    var service = urlparams.get ( 'service' );
    var smarturlfield = document.createElement ( 'input' );
    smarturlfield.setAttribute ( 'type', 'hidden' );
    smarturlfield.setAttribute ( 'value', service );
    smarturlfield.setAttribute ( 'name', 'service' );
    webform.appendChild ( smarturlfield );
  }
  document.querySelector ( '.crmWebToEntityForm .formsubmit' ).setAttribute ( 'disabled', true );
 }
 function tooltipShow6988454000000684005 ( el ){
  var tooltip = el.nextElementSibling;
  var tooltipDisplay = tooltip.style.display;
  if( tooltipDisplay == 'none' ){
    var allTooltip = document.getElementsByClassName ( 'zcwf_tooltip_over' );
    for( i = 0; i < allTooltip.length; i++ ){
      allTooltip[ i ].style.display = 'none';
    }
    tooltip.style.display = 'block';
  } else { tooltip.style.display = 'none'; }
 }
</script>
</form>
</div>`
                }}
              />
            </div>

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
