'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/municipal', icon: '📊', label: 'Overview' },
  { href: '/municipal/reports', icon: '🚨', label: 'Reports' },
  { href: '/municipal/analytics', icon: '📈', label: 'Analytics' },
  { href: '/municipal/vehicles', icon: '🚛', label: 'Vehicles' },
  { href: '/municipal/staff', icon: '👷', label: 'Staff' },
]

export default function MunicipalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Municipal Sidebar */}
      <aside className="w-72 bg-slate-900 text-white hidden md:flex flex-col p-8 sticky top-0 h-screen shadow-2xl">
        <Link href="/" className="mb-12 flex items-center justify-start p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-50 transition-all">
          <Logo size={32} />
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-[0.3em] text-blue-400 group-hover:text-blue-300 transition-colors uppercase">Municipal</span>
            <span className="text-[8px] font-medium text-slate-500 uppercase tracking-widest">Authority Portal</span>
          </div>
        </Link>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-2xl flex items-center gap-4 font-bold text-sm transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </motion.div>
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-800 space-y-4">
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl border border-white/5">
             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-black text-sm">IM</div>
             <div>
                <p className="text-xs font-black text-white/90">Indore Admin</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Municipality</p>
             </div>
          </div>
          <button className="w-full py-3 bg-red-500/10 text-red-500 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">Sign Out</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-50">
           <div className="flex items-center gap-4">
              <div className="md:hidden">
                 <Logo size={24} />
              </div>
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-widest">Command Center</h2>
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">City Health: Optimal</span>
              </div>
              <button className="relative p-2 text-slate-400 hover:text-slate-900 transition-colors">
                🔔 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
           </div>
        </header>

        <main className="p-8">
           {children}
        </main>
      </div>
    </div>
  )
}
