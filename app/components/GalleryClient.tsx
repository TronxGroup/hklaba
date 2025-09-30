'use client'
import Image from 'next/image'

const activities = ['/IMG_6093.jpg','/banco_peru_hklaba.jpeg','/IMG-20190110-WA0044.jpg']

export default function GalleryClient() {
  return (
    <section id="galeria" className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Actividades HKLABA</h2>
        <p className="mt-2 text-neutral-700 max-w-prose">Fotografías de mesas de trabajo, misiones, charlas y networking regional.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-3">
          {activities.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <Image src={src} alt={`Actividades HKLABA — Imagen ${i+1}`} width={1200} height={900} className="h-full w-full object-cover" loading="lazy" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
