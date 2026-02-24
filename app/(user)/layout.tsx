'use client'

import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import Link from 'next/link'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Branding Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-[90] px-6 flex items-center justify-between md:pl-32">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo full size={32} />
        </Link>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">Citizen Portal</span>
        </div>
      </header>

      {/* Shared Navigation (Sidebar/Bottom) */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-20 pb-24 md:pb-8 md:pl-28">
        {children}
      </main>
    </div>
  )
}
