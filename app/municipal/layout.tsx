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
        <Link href="/" className="mb-12 flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-50 transition-all w-full">
          <Logo size={36} />
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
          <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-white/5">
             <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-blue-500/20">TC</div>
             <div>
                <p className="text-xs font-black text-white uppercase tracking-wider">System Admin</p>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Titan Protocol</p>
             </div>
          </div>
          <button className="w-full py-3 bg-red-500/10 text-red-500 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">Sign Out</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white/90 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-6 md:px-8 sticky top-0 z-50">
           <div className="flex items-center gap-4">
              <div className="md:hidden flex items-center gap-3">
                 <Link href="/">
                    <Logo size={28} />
                 </Link>
                 <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100 uppercase tracking-widest">MUNI</span>
              </div>
              <h2 className="text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-[0.4em] italic hidden sm:block">Operational Hub</h2>
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

        <main className="p-6 md:p-8 pb-32 md:pb-8">
           {children}
        </main>
      </div>

      {/* Municipal Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] z-[100]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-[2rem] flex items-center justify-between shadow-2xl shadow-slate-950/40"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isActive ? 'text-blue-400' : 'text-slate-500'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-[7px] font-black uppercase tracking-tighter">
                    {item.label}
                  </span>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorMuni"
                    className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
