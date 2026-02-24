'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/ngo', icon: '🌍', label: 'Dashboard' },
  { href: '/ngo/missions', icon: '🧹', label: 'Missions' },
  { href: '/ngo/volunteers', icon: '🤝', label: 'Volunteers' },
  { href: '/ngo/impact', icon: '🌱', label: 'Impact Stats' },
  { href: '/ngo/inventory', icon: '📦', label: 'Inventory' },
]

export default function NGOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white flex">
      {/* NGO Sidebar */}
      <aside className="w-72 bg-white text-slate-900 hidden md:flex flex-col p-8 sticky top-0 h-screen border-r border-indigo-100 shadow-xl shadow-indigo-100/50">
        <Link href="/" className="mb-12 flex items-center justify-start p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 group hover:bg-indigo-100 transition-all">
          <Logo size={32} />
        </Link>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-2xl flex items-center gap-4 font-black transition-all text-xs uppercase tracking-widest ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </motion.div>
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-indigo-50 space-y-4">
          <div className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
             <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-sm shadow-md">GA</div>
             <div>
                <p className="text-xs font-black text-indigo-950 uppercase tracking-tight">Green Bhopal</p>
                <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-tighter">NGO Authority</p>
             </div>
          </div>
          <button className="w-full py-4 bg-white border border-indigo-100 text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all shadow-sm">Portal Settings</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Top Header */}
        <header className="h-16 bg-white/90 backdrop-blur-xl border-b border-indigo-100 flex md:hidden items-center justify-between px-6 sticky top-0 z-[60]">
           <Link href="/" className="hover:opacity-80 transition-opacity">
             <Logo size={28} />
           </Link>
           <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">NGO HUB</span>
        </header>

        {/* Desktop Top Header (Hidden on Mobile) */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-indigo-100 hidden md:flex items-center justify-between px-8 sticky top-0 z-50">
           <div className="flex items-center gap-4">
              <h2 className="text-lg font-black text-indigo-950 uppercase tracking-widest">Mission Hub</h2>
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-xl">
                 <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Next Drive: Mar 1st</span>
              </div>
              <button className="relative p-2 text-indigo-400 hover:text-indigo-950 transition-colors">
                🔔 <span className="absolute top-0 right-0 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
              </button>
           </div>
        </header>

        <main className="p-8 pb-32 md:pb-8">
           {children}
        </main>
      </div>

      {/* NGO Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] z-[100]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-indigo-950/95 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-[2rem] flex items-center justify-between shadow-2xl shadow-indigo-900/40"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isActive ? 'text-indigo-400' : 'text-indigo-200/50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[8px] font-black uppercase tracking-tighter">
                    {item.label.split(' ')[0]}
                  </span>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorNGO"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-400 rounded-full"
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
