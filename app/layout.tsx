import './globals.css'

export const metadata = {
  title: 'HKLABA — Hong Kong–Latin America Business Association',
  description: 'Miembro oficial de la Federation of Hong Kong Business Associations Worldwide. Conectando Hong Kong con América Latina.',
  openGraph: {
    title: 'HKLABA — Hong Kong–Latin America Business Association',
    description: 'Puente empresarial entre Hong Kong y América Latina.',
    images: ['/hklaba-logo.png'],
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-neutral-900">{children}</body>
    </html>
  );
}
