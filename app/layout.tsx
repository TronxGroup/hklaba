// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'

// (Opcional) Si usas next/font, puedes importar aquí tu tipografía y aplicarla al <body>.
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Meta básicos
  title: 'HKLABA — Hong Kong–Latin America Business Association',
  description:
    'Miembro oficial de la Federation of Hong Kong Business Associations Worldwide. Conectando Hong Kong con América Latina.',
  metadataBase: new URL('https://www.hklaba.com'), // ✅ evita el warning y resuelve URLs relativas

  // Canonical
  alternates: {
    canonical: '/',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    url: 'https://www.hklaba.com/',
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description: 'Puente empresarial entre Hong Kong y América Latina.',
    siteName: 'HKLABA',
    images: [
      // Recomendado: usar una imagen OG dedicada de 1200x630
      { url: '/og-hklaba.jpg', width: 1200, height: 630, alt: 'HKLABA — Hong Kong–Latin America Business Association' },
    ],
    locale: 'es_CL',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description:
      'Conectando Hong Kong con América Latina. Alianzas HKTDC, Hong Kong Forum, misiones y networking.',
    images: ['/og-hklaba.jpg'],
    site: '@', // agrega @usuario si corresponde
    creator: '@', // agrega @usuario si corresponde
  },

  // Favicons / Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },

  // PWA básico (opcional si subes manifest.json)
  manifest: '/site.webmanifest',

  // SEO técnico extra
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Colores del tema para navegadores
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],

  // Datos informativos
  applicationName: 'HKLABA',
  category: 'Business',
  creator: 'HKLABA',
  publisher: 'HKLABA',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900">
        {/* En accesibilidad, un “skip link” ayuda a saltar directo al contenido */}
        <a
          href="#__main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1000] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Saltar al contenido principal
        </a>

        <main id="__main">{children}</main>
      </body>
    </html>
  )
}
