import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TitanClean - Citizen Waste Reporting & Cleanliness Reward App',
  description:
    'Smart waste management solution empowering citizens and authorities for timely cleanup and responsible waste management',
  keywords: [
    'waste management',
    'smart city',
    'civic technology',
    'environmental management',
    'citizen reporting',
    'waste cleanup',
    'recycling',
    'sustainability',
  ],
  authors: [{ name: 'Koding Titans' }],
  openGraph: {
    title: 'TitanClean - Citizen Waste Reporting & Cleanliness Reward App',
    description:
      'Smart waste management solution empowering citizens and authorities for timely cleanup and responsible waste management',
    url: 'https://titanclean.in',
    siteName: 'TitanClean',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TitanClean - Citizen Waste Reporting & Cleanliness Reward App',
    description:
      'Smart waste management solution empowering citizens and authorities for timely cleanup and responsible waste management',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
