'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DoPage() {
  const portals = [
    {
      title: 'Citizen Portal',
      subtitle: 'The frontline of city cleanliness',
      icon: '👤',
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-500',
      href: '/',
      see: [
        'Impact Tower with real-time stats',
        'Community Feed of active reports',
        'Eco-Marketplace for rewards',
        'Global Leaderboards'
      ],
      do: [
        'Submit geotagged waste reports',
        'Engage with community initiatives',
        'Redeem Eco-Credits for products',
        'Track personal impact metrics'
      ]
    },
    {
      title: 'NGO Dashboard',
      subtitle: 'Strategic mission coordination',
      icon: '🤝',
      color: 'indigo',
      gradient: 'from-indigo-600 to-purple-500',
      href: '/ngo',
      see: [
        'Verified environmental data',
        'Volunteer network directory',
        'Mission & drive status hub',
        'Growth & sustainability analytics'
      ],
      do: [
        'Launch community clean missions',
        'Verify submitted collection data',
        'Manage inventory & logistics',
        'Analyze long-term impact trends'
      ]
    },
    {
      title: 'Operational Hub',
      subtitle: 'Municipal resource management',
      icon: '🏛️',
      color: 'slate',
      gradient: 'from-slate-800 to-slate-900',
      href: '/municipal',
      see: [
        'City Health Index indicators',
        'Report density & waste heatmaps',
        'LIVE vehicle and fleet tracking',
        'City-wide response efficiency'
      ],
      do: [
        'Dispatch priority collection units',
        'Manage municipal staff workflow',
        'Audit and resolve citizen reports',
        'Optimize collection logistics'
      ]
    },
    {
      title: 'Superadmin Signal',
      subtitle: 'Total system oversight & AI',
      icon: '🛰️',
      color: 'red',
      gradient: 'from-red-600 to-orange-500',
      href: '/admin',
      see: [
        'AI Predictive overflow mapping',
        'Cross-component platform stats',
        'Marketplace transaction logs',
        'Governance & security signals'
      ],
      do: [
        'Manage AI sector risk prediction',
        'Configure global system logic',
        'Audit platform reward currency',
        'Manage user roles and security'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4"
        >
          Portal <span className="text-indigo-600 italic">Capabilities</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs"
        >
          Explore what you can see and do within the TitanClean ecosystem
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {portals.map((portal, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${portal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-3xl`} />

            <div className="flex items-center gap-6 mb-10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${portal.gradient} flex items-center justify-center text-3xl shadow-lg shadow-indigo-200`}>
                {portal.icon}
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{portal.title}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{portal.subtitle}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 flex-1">
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-50 pb-2">What you See</h3>
                <ul className="space-y-3">
                  {portal.see.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <span className="text-indigo-400 mt-1">🔭</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-50 pb-2">What you Do</h3>
                <ul className="space-y-3">
                  {portal.do.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <span className="text-indigo-400 mt-1">⚡</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-50 flex justify-between items-center">
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-200" />)}
              </div>
              <Link href={portal.href}>
                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300 cursor-pointer">
                  Access Portal <span className="text-base">→</span>
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-indigo-600 transition-all"
          >
            ← Back to Command Signal
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
