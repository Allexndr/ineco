import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'InEco Fest 2025 - Фестиваль экологии и инклюзии',
  description: 'Присоединяйтесь к InEco Fest 2025 - уникальному фестивалю, объединяющему экологию и инклюзию. Мастер-классы, лекции, выставки и многое другое!',
  keywords: 'фестиваль, экология, инклюзия, мастер-классы, InEco Fest, 2025',
  authors: [{ name: 'InEco Fest Team' }],
  openGraph: {
    title: 'InEco Fest 2025 - Фестиваль экологии и инклюзии',
    description: 'Присоединяйтесь к InEco Fest 2025 - уникальному фестивалю, объединяющему экологию и инклюзию.',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InEco Fest 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InEco Fest 2025 - Фестиваль экологии и инклюзии',
    description: 'Присоединяйтесь к InEco Fest 2025 - уникальному фестивалю, объединяющему экологию и инклюзию.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 