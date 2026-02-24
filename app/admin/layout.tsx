'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/admin', icon: '🌍', label: 'Global Stats' },
  { href: '/admin/realtime-map', icon: '🛰️', label: 'Real-time Signal' },
  { href: '/admin/users', icon: '👥', label: 'User Directory' },
  { href: '/admin/analytics', icon: '📊', label: 'Platform Analytics' },
  { href: '/admin/marketplace-logs', icon: '🔄', label: 'Exchange Logs' },
  { href: '/admin/settings', icon: '⚙️', label: 'System Settings' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Superadmin Sidebar */}
      <aside className="w-72 bg-slate-800 text-white hidden md:flex flex-col p-8 sticky top-0 h-screen shadow-2xl border-r border-white/5">
        <Link href="/" className="mb-12 flex items-center justify-center py-4 bg-white/5 rounded-[2rem] border border-white/5 group hover:bg-red-950/20 transition-all">
          <Logo />
        </Link>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-2xl flex items-center gap-4 font-black text-xs transition-all uppercase tracking-widest ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/20'
                      : 'text-slate-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </motion.div>
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
             <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-black text-sm">SA</div>
             <div>
                <p className="text-xs font-black text-white/90">Super Admin</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Root Access</p>
             </div>
          </div>
          <p className="text-[8px] text-center text-slate-600 font-black uppercase tracking-[0.3em]">Version 2.4.0-Stable</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent)]">
        {/* Mobile Top Header */}
        <header className="h-16 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 flex md:hidden items-center justify-between px-6 sticky top-0 z-[60]">
           <Link href="/" className="hover:opacity-80 transition-opacity">
             <Logo size={28} />
           </Link>
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">ROOT</span>
           </div>
        </header>

        {/* Desktop Top Header (Hidden on Mobile) */}
        <header className="h-20 bg-slate-950/50 backdrop-blur-xl border-b border-white/5 hidden md:flex items-center justify-between px-8 sticky top-0 z-50">
           <div className="flex items-center gap-4">
              <h2 className="text-lg font-black text-white uppercase tracking-[0.4em] italic">System Overview</h2>
           </div>
           <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-4">
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Servers: Online</span>
                    <span className="text-[8px] text-slate-500 font-bold uppercase">Uptime: 99.9%</span>
                 </div>
                 <div className="w-10 h-1 h-3 bg-green-500/20 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-green-500"></div>
                 </div>
              </div>
           </div>
        </header>

        <main className="p-6 md:p-10 text-slate-300 pb-32 md:pb-10">
           {children}
        </main>
      </div>

      {/* Admin Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] z-[100]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-950/95 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-[2rem] flex items-center justify-between shadow-2xl shadow-red-950/40"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isActive ? 'text-red-500' : 'text-slate-600'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-[7px] font-black uppercase tracking-tighter">
                    {item.label.split(' ')[0]}
                  </span>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorAdmin"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-500 rounded-full"
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
