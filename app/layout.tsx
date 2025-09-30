// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HKLABA — Hong Kong–Latin America Business Association',
  description:
    'Miembro oficial de la Federation of Hong Kong Business Associations Worldwide. Conectando Hong Kong con América Latina.',
  metadataBase: new URL('https://www.hklaba.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.hklaba.com/',
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description: 'Puente empresarial entre Hong Kong y América Latina.',
    siteName: 'HKLABA',
    images: [{ url: '/og-hklaba.jpg', width: 1200, height: 630 }],
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description:
      'Conectando Hong Kong con América Latina. Alianzas HKTDC, Hong Kong Forum, misiones y networking.',
    images: ['/og-hklaba.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

// 👇 themeColor va aquí, no en metadata
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
