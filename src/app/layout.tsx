import './globals.css'

import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cinzel, Poppins } from 'next/font/google'
import type React from 'react'
import { Suspense } from 'react'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const cinzel = Cinzel({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Teyvat Chronicles - Comunidade Genshin Impact',
  description:
    'Junte-se à maior comunidade brasileira de Genshin Impact. Guias, builds, notícias e muito mais!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans ${poppins.variable} ${cinzel.variable} antialiased`}
      >
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
