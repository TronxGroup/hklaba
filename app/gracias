import Image from "next/image";
import type { Metadata } from "next";

// SEO específico de /gracias
export const metadata: Metadata = {
  title: "¡Gracias! — HKLABA",
  description:
    "Tu mensaje fue enviado correctamente. El equipo de HKLABA te contactará dentro de 24 horas hábiles.",
  alternates: { canonical: "https://www.hklaba.com/gracias" },
  openGraph: {
    type: "website",
    url: "https://www.hklaba.com/gracias",
    title: "¡Gracias! — HKLABA",
    description:
      "Hemos recibido tu solicitud. Te contactaremos dentro de 24 horas hábiles.",
    siteName: "HKLABA",
    images: [
      {
        url: "https://www.hklaba.com/og-hklaba.jpg",
        width: 1200,
        height: 630,
        alt: "HKLABA — Hong Kong–Latin America Business Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¡Gracias! — HKLABA",
    description:
      "Hemos recibido tu solicitud. Te contactaremos dentro de 24 horas hábiles.",
    images: ["https://www.hklaba.com/og-hklaba.jpg"],
  },
};

// Build estático y sin revalidación
export const dynamic = "force-static";
export const revalidate = false;

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* Header compacto con logo clickable */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="/" aria-label="Ir al inicio" className="flex items-center gap-3">
            <Image src="/hklaba-logo.png" alt="HKLABA Logo" width={160} height={48} priority />
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="mx-auto w-16 h-16 rounded-full border border-green-200 bg-green-50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-600"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.1a.75.75 0 1 0-1.22-.9l-3.236 4.391-1.59-1.59a.75.75 0 1 0-1.06 1.061l2.25 2.25a.75.75 0 0 0 1.14-.094l3.776-5.118Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-semibold">¡Gracias! Tu mensaje fue enviado</h1>
        <p className="mt-3 text-neutral-700">
          Hemos recibido tu solicitud y nuestro equipo de HKLABA te contactará dentro de{" "}
          <strong>24 horas hábiles</strong>.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/"
            className="rounded-xl bg-hklRed text-white px-5 py-3 font-medium hover:bg-red-800 transition"
          >
            Volver al inicio
          </a>
          <a
            href="/condiciones"
            className="rounded-xl border border-neutral-300 text-neutral-700 px-5 py-3 font-medium hover:bg-neutral-50 transition"
          >
            Condiciones y Privacidad
          </a>
        </div>
      </main>

      {/* Footer consistente */}
      <footer className="py-10 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 text-sm text-neutral-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/federation-logo.png" alt="Federation Logo" width={180} height={44} />
            <span className="text-neutral-600">
              Miembro oficial de la Federation of Hong Kong Business Associations Worldwide
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-neutral-600">
            <a
              href="https://www.linkedin.com/company/hklaba"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-300 hover:text-hklRed"
            >
              LinkedIn
            </a>
            <a href="/condiciones" className="underline decoration-neutral-300 hover:text-hklRed">
              Condiciones y Privacidad
            </a>
            <a
              href="https://www.web.facebook.com/hktdc_latam"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-300 hover:text-hklRed"
            >
              HKTDC Chile Office (Facebook)
            </a>
            <a
              href="https://www.asiapacific-chamber.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-300 hover:text-hklRed"
            >
              APCC
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
