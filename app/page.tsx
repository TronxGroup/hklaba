import Image from 'next/image'

export default function HKLABALanding() {
  const ORG = {
    name: 'HKLABA — Hong Kong–Latin America Business Association',
    tagline: 'Conectando Hong Kong con América Latina',
    email: 'contact@hklaba.com',
    phone: '+56 9 0000 0000',
    address: 'Santiago, Chile',
    apccSignupUrl: 'https://apcc-chamber.vercel.app/',
    formspree: 'https://formspree.io/f/xxxxxxxx'
  };

  const federationStats = [
    { k: '49', v: 'Asociaciones' },
    { k: '38', v: 'Países y regiones' },
    { k: '11.000+', v: 'Asociados' },
  ];

  const activities = ['/activity-1.svg','/activity-2.svg','/activity-3.svg'];
  const forumPhotos = ['/forum-1.svg','/forum-2.svg','/forum-3.svg'];
  const partnerPhotos = ['/partners-1.svg','/partners-2.svg','/partners-3.svg'];

  const faqs = [
    { q: '¿Quién puede ser miembro?', a: 'Empresas y profesionales con interés en Hong Kong y Asia–Pacífico.' },
    { q: '¿Cómo me inscribo?', a: 'La inscripción se realiza a través de la Cámara de Comercio Asia Pacífico (APCC). Usa el botón \'Unirme vía APCC\'.' },
    { q: '¿Qué beneficios obtengo?', a: 'Networking, Hong Kong Forum, misiones comerciales, inteligencia de mercado y apoyo institucional.' },
    { q: '¿HKLABA es parte de la Federation?', a: 'Sí. HKLABA es la única asociación miembro de la Federation en Latinoamérica.' }
  ];

  return (
    <div className='min-h-screen bg-white text-neutral-900'>
      <header className='sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200'>
        <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Image src='/hklaba-logo.png' alt='HKLABA Logo' width={180} height={52} />
          </div>
          <nav className='hidden md:flex items-center gap-6 text-sm text-neutral-600'>
            <a href='#quienes' className='hover:text-hklRed'>Quiénes somos</a>
            <a href='#alianzas' className='hover:text-hklRed'>Alianza HKTDC</a>
            <a href='#membresias' className='hover:text-hklRed'>Membresías</a>
            <a href='#forum' className='hover:text-hklRed'>Hong Kong Forum</a>
            <a href='#galeria' className='hover:text-hklRed'>Galería</a>
            <a href='#contacto' className='hover:text-hklRed'>Contacto</a>
            <a href={ORG.apccSignupUrl} className='inline-flex rounded-xl border border-hklRed text-hklRed px-3 py-1.5 hover:bg-hklRed hover:text-white transition'>Unirme vía APCC</a>
          </nav>
        </div>
      </header>

      <section className='border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white'>
        <div className='mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='text-xs uppercase tracking-widest text-hklRed'>{ORG.tagline}</p>
            <h1 className='mt-2 text-4xl sm:text-5xl font-bold leading-tight'>
              La red oficial que conecta a Latinoamérica con Hong Kong
            </h1>
            <p className='mt-4 text-neutral-700 max-w-prose'>
              HKLABA es la única asociación en Latinoamérica miembro de la <span className='font-medium'>Federation of Hong Kong Business Associations Worldwide</span>, una red global que articula oportunidades de negocios y vínculos de alto nivel.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <a href={ORG.apccSignupUrl} className='rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition'>Unirme vía APCC</a>
              <a href='#alianzas' className='rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition'>Ver alianza HKTDC</a>
            </div>
          </div>
          <div className='rounded-3xl border border-neutral-200 p-6 bg-white'>
            <div className='flex items-center gap-4'>
              <Image src='/federation-logo.png' alt='Federation Logo' width={260} height={60} />
            </div>
            <div className='mt-6 grid grid-cols-3 gap-4'>
              {federationStats.map((s, i) => (
                <div key={i} className='rounded-2xl border border-neutral-200 p-4 text-center'>
                  <div className='text-2xl font-bold text-neutral-900'>{s.k}</div>
                  <div className='text-xs uppercase tracking-widest text-neutral-500'>{s.v}</div>
                </div>
              ))}
            </div>
            <p className='mt-4 text-sm text-neutral-600'>
              Red fundada con apoyo de HKTDC para fomentar cooperación, intercambio y generación de oportunidades.
            </p>
          </div>
        </div>
      </section>

      <section id='quienes' className='border-b border-neutral-200'>
        <div className='mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Quiénes somos</h2>
            <p className='mt-4 text-neutral-700'>
              Somos el puente entre Hong Kong y América Latina. Promovemos la cooperación empresarial, el acceso a
              información estratégica y la participación de nuestros miembros en eventos de alto nivel en Hong Kong
              y la región.
            </p>
            <ul className='mt-6 space-y-2 text-neutral-700'>
              <li>• Networking con líderes empresariales de la región y Hong Kong</li>
              <li>• Inteligencia de mercado y programas de internacionalización</li>
              <li>• Participación prioritaria en foros, misiones y actividades de la Federation</li>
            </ul>
          </div>
          <div className='rounded-3xl border border-neutral-200 p-6 bg-neutral-50'>
            <div className='text-sm text-neutral-600'>Relación con la Federation</div>
            <p className='mt-3 text-neutral-700'>
              La Federation reúne a 49 asociaciones en 38 países y regiones, con más de 11.000 asociados individuales. Su objetivo es crear sinergias y un canal de colaboración global en torno a Hong Kong.
            </p>
          </div>
        </div>
      </section>

      <section id='alianzas' className='border-b border-neutral-200 bg-neutral-50'>
        <div className='mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-start'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Alianza con HKTDC</h2>
            <p className='mt-4 text-neutral-700'>
              HKLABA y el Hong Kong Trade Development Council (HKTDC) mantienen un acuerdo de cooperación (MOU) para promover comercio e inversiones, intercambio de consultas, apoyo a misiones y actividades empresariales.
            </p>
            <div className='mt-6 flex gap-3'>
              <a href={ORG.apccSignupUrl} className='rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition'>Quiero ser miembro</a>
              <a href='#forum' className='rounded-xl border border-hklRed text-hklRed px-5 py-3 font-medium hover:bg-red-50 transition'>Conocer el Hong Kong Forum</a>
            </div>
          </div>
          <div className='rounded-3xl border border-neutral-200 p-6 bg-white'>
            <div className='text-sm text-neutral-600'>Puntos clave del MOU (2018)</div>
            <ul className='mt-3 space-y-2 text-sm text-neutral-700'>
              <li>• Promoción de relaciones comerciales Hong Kong–Chile/LatAm</li>
              <li>• Coordinación de programas y reuniones</li>
              <li>• Intercambio de consultas y de información de mercado</li>
              <li>• Apoyo a actividades y misiones empresariales</li>
              <li>• Asistencia a funcionarios e investigadores</li>
              <li>• Cumplimiento de normas anticorrupción/AML/CFT</li>
            </ul>
            <p className='mt-4 text-xs text-neutral-500'>* Resumen no vinculante del acuerdo de cooperación.</p>
          </div>
        </div>
      </section>

      <section id='membresias' className='border-b border-neutral-200'>
        <div className='mx-auto max-w-7xl px-4 py-16'>
          <div className='flex items-end justify-between gap-6'>
            <div>
              <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Membresías y beneficios</h2>
              <p className='mt-2 text-neutral-700 max-w-prose'>La inscripción se realiza a través de la Cámara de Comercio Asia Pacífico (APCC). Una vez aceptado, accedes a la red HKLABA–Federation.</p>
            </div>
            <a href={ORG.apccSignupUrl} className='hidden sm:inline-flex rounded-xl border border-hklRed text-hklRed px-4 py-2 hover:bg-hklRed hover:text-white'>Unirme vía APCC</a>
          </div>

          <div className='mt-8 grid md:grid-cols-3 gap-4'>
            <div className='rounded-2xl border border-neutral-200 p-6 bg-white'>
              <h3 className='font-semibold'>Essential</h3>
              <ul className='mt-3 space-y-2 text-sm text-neutral-700'>
                <li>• Acceso a actividades y boletines</li>
                <li>• Comunidad y networking</li>
                <li>• Invitaciones a webinars y charlas</li>
              </ul>
            </div>
            <div className='rounded-2xl border border-neutral-200 p-6 bg-white'>
              <h3 className='font-semibold'>Business</h3>
              <ul className='mt-3 space-y-2 text-sm text-neutral-700'>
                <li>• Beneficios Essential</li>
                <li>• Prioridad en misiones y foros</li>
                <li>• Inclusión en directorio de miembros</li>
              </ul>
            </div>
            <div className='rounded-2xl border border-neutral-200 p-6 bg-white'>
              <h3 className='font-semibold'>Corporate</h3>
              <ul className='mt-3 space-y-2 text-sm text-neutral-700'>
                <li>• Beneficios Business</li>
                <li>• Participación destacada en eventos</li>
                <li>• Acceso a inteligencia de mercado a demanda</li>
              </ul>
            </div>
          </div>

          <div className='mt-6'>
            <a href={ORG.apccSignupUrl} className='rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition'>Unirme vía APCC</a>
          </div>
        </div>
      </section>

      <section id='forum' className='border-b border-neutral-200 bg-neutral-50'>
        <div className='mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Hong Kong Forum</h2>
            <p className='mt-4 text-neutral-700'>
              Evento anual insignia de la Federation, organizado por HKTDC. Reúne a líderes y ejecutivos de todo el mundo para dialogar sobre negocios en Hong Kong y China continental. Incluye keynotes, paneles, networking y visitas técnicas.
            </p>
            <ul className='mt-4 space-y-2 text-neutral-700'>
              <li>• Conexión con ejecutivos senior</li>
              <li>• Información actualizada sobre entorno de negocios</li>
              <li>• Programa de visitas a infraestructura e innovación</li>
            </ul>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-3'>
              {forumPhotos.map((src, i) => (
                <div key={i} className='aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
                  <Image src={src} alt={`Forum ${i+1}`} width={1200} height={900} className='h-full w-full object-cover' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='galeria' className='border-b border-neutral-200'>
        <div className='mx-auto max-w-7xl px-4 py-16'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Actividades HKLABA</h2>
          <p className='mt-2 text-neutral-700 max-w-prose'>Espacios para fotografías de mesas de trabajo, misiones, charlas y networking regional.</p>
          <div className='mt-6 grid md:grid-cols-3 gap-3'>
            {activities.map((src, i) => (
              <div key={i} className='aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
                <Image src={src} alt={`Actividad ${i+1}`} width={1200} height={900} className='h-full w-full object-cover' />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='border-b border-neutral-200 bg-neutral-50'>
        <div className='mx-auto max-w-7xl px-4 py-16'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Alianzas</h2>
          <p className='mt-2 text-neutral-700 max-w-prose'>Logos o fotografías de eventos con aliados estratégicos.</p>
          <div className='mt-6 grid md:grid-cols-3 gap-3'>
            {partnerPhotos.map((src, i) => (
              <div key={i} className='aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
                <Image src={src} alt={`Partner ${i+1}`} width={1200} height={900} className='h-full w-full object-cover' />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='contacto' className='border-b border-neutral-200'>
        <div className='mx-auto max-w-7xl px-4 py-16'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-neutral-900'>Contacto</h2>
          <p className='mt-2 text-neutral-700 max-w-prose'>Cuéntanos tu interés y te contactaremos en 24 horas hábiles.</p>

          <div className='mt-8 grid lg:grid-cols-3 gap-6'>
            <form action={ORG.formspree} method='POST' className='lg:col-span-2 rounded-3xl border border-neutral-200 p-6 bg-white'>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm text-neutral-600'>Nombre</label>
                  <input name='name' required className='mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200' />
                </div>
                <div>
                  <label className='block text-sm text-neutral-600'>Email</label>
                  <input type='email' name='email' required className='mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200' />
                </div>
                <div className='sm:col-span-2'>
                  <label className='block text-sm text-neutral-600'>Mensaje</label>
                  <textarea name='message' rows={5} required className='mt-1 w-full rounded-xl bg-white border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-200' />
                </div>
              </div>
              <button className='mt-4 rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition' type='submit'>Enviar</button>
            </form>

            <div className='rounded-3xl border border-neutral-200 p-6 bg-white'>
              <div className='text-sm text-neutral-600'>Información</div>
              <ul className='mt-4 space-y-2 text-sm text-neutral-700'>
                <li>📧 {ORG.email}</li>
                <li>📞 {ORG.phone}</li>
                <li>📍 {ORG.address}</li>
              </ul>
              <div className='mt-6 text-sm text-neutral-500'>Horario: Lun–Vie 9:00 a 18:00 (GMT-3)</div>
            </div>
          </div>
        </div>
      </section>

      <footer className='py-10'>
        <div className='mx-auto max-w-7xl px-4 text-sm text-neutral-500'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <Image src='/federation-logo.png' alt='Federation Logo' width={200} height={48} />
              <span className='text-neutral-600'>Miembro oficial de la Federation of Hong Kong Business Associations Worldwide</span>
            </div>
            <div>© {new Date().getFullYear()} HKLABA. Todos los derechos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
