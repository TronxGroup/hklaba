'use client'
import Image from 'next/image'

const forumPhotos = ['/jpg(2).jpg','/jpg(1).jpg','/jpg.jpg']

export default function ForumClient() {
  return (
    <section id="forum" className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Hong Kong Forum</h2>
          <p className="mt-4 text-neutral-700">
            Evento anual insignia de la Federation, organizado por HKTDC. Reúne a líderes y ejecutivos de todo el mundo para dialogar
            sobre negocios en Hong Kong y China continental. Incluye keynotes, paneles, networking y visitas técnicas.
          </p>
          <ul className="mt-4 space-y-2 text-neutral-700">
            <li>• Conexión con ejecutivos senior</li>
            <li>• Información actualizada sobre entorno de negocios</li>
            <li>• Programa de visitas a infraestructura e innovación</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {forumPhotos.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <Image src={src} alt={`Hong Kong Forum — Fotografía ${i+1}`} width={1200} height={900} className="h-full w-full object-cover" loading="lazy" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
