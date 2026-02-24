import type { Metadata } from 'next'
import './globals.css'
import PageLoader from '@/components/PageLoader'

// Using system fonts as fallback to avoid network issues during build
const geistSans = {
  variable: '--font-geist-sans',
}

const geistMono = {
  variable: '--font-geist-mono',
}

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
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  )
}
