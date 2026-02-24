'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Notification {
  id: string
  title: string
  message: string
  time: string
  icon: string
  role: string
}

export default function NotificationHub() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', title: 'New Report', message: 'Citizen reported overflow in Sector 4', time: '2m ago', icon: '📝', role: 'Citizen' },
    { id: '2', title: 'Mission Complete', message: 'River-X cleanup successfully verified', time: '15m ago', icon: '✅', role: 'NGO' },
    { id: '3', title: 'Dispatch Alert', message: 'Truck T-102 en route to Rajwada', time: '22m ago', icon: '🚛', role: 'Municipal' },
    { id: '4', title: 'Reward Redeemed', message: 'User rahul_88 spent 200 credits', time: '1h ago', icon: '🎁', role: 'Marketplace' },
  ])

  // Simulate new notifications arriving
  useEffect(() => {
    const events = [
      { title: 'New Report', message: 'Illegal dumping spotted in Zone C', icon: '⚠️', role: 'Citizen' },
      { title: 'Goal Reached', message: 'Community saved 500kg CO2 today!', icon: '🌿', role: 'Environment' },
      { title: 'AI Prediction', message: 'High risk detected in Sector 5', icon: '🤖', role: 'System' },
    ]

    const interval = setInterval(() => {
      const event = events[Math.floor(Math.random() * events.length)]
      const newNotif = {
        id: Math.random().toString(),
        ...event,
        time: 'just now'
      }
      setNotifications(prev => [newNotif, ...prev].slice(0, 10))
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl z-[100] flex items-center justify-center group border border-white/10"
      >
        <span className="text-2xl group-hover:rotate-12 transition-transform">🔔</span>
        <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">
          {notifications.length}
        </div>
      </motion.button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 md:w-96 h-full bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] z-[100] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase underline decoration-indigo-500 decoration-4 underline-offset-8">Signal Hub</h2>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
                  <span className="text-2xl">✕</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
                {notifications.map((notif) => (
                  <motion.div
                    key={notif.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    className="p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-indigo-50/50 transition-colors group cursor-default"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl shrink-0">
                        {notif.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-[11px] font-black text-slate-950 uppercase tracking-widest">{notif.title}</h4>
                          <span className="text-[9px] font-black text-slate-400 uppercase italic">{notif.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">{notif.message}</p>
                        <div className="mt-2 text-[8px] font-black text-indigo-600 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                          Portal: {notif.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 italic text-[10px] text-slate-400 text-center font-black uppercase tracking-[0.3em]">
                Live Signal Synchronization Active
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
