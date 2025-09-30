import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hklaba.com'),
  title: 'HKLABA — Hong Kong–Latin America Business Association',
  description:
    'Miembro oficial de la Federation of Hong Kong Business Associations Worldwide. Conectando Hong Kong con América Latina.',
  openGraph: {
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description: 'Puente empresarial entre Hong Kong y América Latina.',
    images: ['/og-hklaba.jpg'],
    type: 'website',
    url: 'https://www.hklaba.com/',
    siteName: 'HKLABA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description: 'Puente empresarial entre Hong Kong y América Latina.',
    images: ['/og-hklaba.jpg'],
  },
  alternates: { canonical: 'https://www.hklaba.com/' },
  icons: {
    icon: '/favicon_hklaba.png',
    shortcut: '/favicon_hklaba.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff', // mueve themeColor aquí para evitar el warning
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-neutral-900">{children}</body>
    </html>
  )
}
