'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navItems = [
  { href: '/', icon: '🏠', label: 'Home' },
  { href: '/community', icon: '👥', label: 'Community' },
  { href: '/report', icon: '📢', label: 'Report' },
  { href: '/marketplace', icon: '♻️', label: 'Market' },
  { href: '/leaderboard', icon: '🏆', label: 'Rank' },
  { href: '/profile', icon: '👤', label: 'Profile' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar: Long Oval Strip */}
      <div className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-[100]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-slate-900/90 backdrop-blur-xl border border-white/10 py-8 px-4 rounded-full flex flex-col items-center gap-8 shadow-2xl"
        >

          <div className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 shadow-lg shadow-blue-500/40 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.icon}
                  </motion.div>
                  {/* Tooltip */}
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap">
                    {item.label}
                  </div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-[100]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-900/95 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-[2.5rem] flex items-center justify-between shadow-2xl"
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
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[8px] font-black uppercase tracking-tighter">
                    {item.label}
                  </span>
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </motion.div>
      </div>
    </>
  )
}
