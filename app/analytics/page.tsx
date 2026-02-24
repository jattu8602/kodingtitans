'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function AnalyticsCommandCenter() {
  return (
    <div className="h-screen bg-slate-900 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
           <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo />
           </Link>
           <div className="h-6 w-px bg-slate-700 mx-2"></div>
           <h1 className="text-xl font-bold text-white flex items-center gap-2">
             <span>🛰️</span> Command Center <span className="text-[10px] bg-red-600 px-2 py-0.5 rounded animate-pulse">LIVE</span>
           </h1>
        </div>
        <div className="flex gap-4">
           {['Satellite', 'Heatmap', 'Traffic', 'Waste'].map(mode => (
             <button key={mode} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${mode === 'Heatmap' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
                {mode.toUpperCase()}
             </button>
           ))}
        </div>
      </header>

      <div className="flex-1 relative">
        {/* Full-screen Map Simulation */}
        <div className="absolute inset-0 bg-slate-800">
           {/* Decorative Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>

           {/* Simulated Heatmap Clouds */}
           <motion.div
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 5, repeat: Infinity }}
             className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/40 blur-[100px] rounded-full"
           ></motion.div>
           <motion.div
             animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 7, repeat: Infinity, delay: 1 }}
             className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/30 blur-[120px] rounded-full"
           ></motion.div>

           {/* Simulated Route Polyline (SVG) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 200,300 L 400,350 L 600,320 L 800,450 L 1000,400"
                stroke="#60a5fa"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <circle cx="200" cy="300" r="6" fill="#60a5fa" />
              <circle cx="1000" cy="400" r="6" fill="#60a5fa" />
           </svg>

           {/* Floating Markers */}
           <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-[40%] left-[45%] flex flex-col items-center">
              <div className="bg-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg mb-1">STATION 04</div>
              <div className="text-3xl">📍</div>
           </motion.div>
        </div>

        {/* UI Overlays */}
        {/* Left Stats */}
        <div className="absolute top-8 left-8 w-72 space-y-4">
           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-800 shadow-2xl text-white"
           >
             <h3 className="text-blue-400 text-xs font-black uppercase tracking-widest mb-4">AI Prediction Engine</h3>
             <div className="space-y-4">
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-xl">
                   <p className="text-[10px] font-bold text-red-400">🚨 HIGH RISK : ZONE-7</p>
                   <p className="text-xs text-white mt-1">Overflow expected in 45 mins at Market St.</p>
                </div>
                <div className="p-3 bg-orange-500/10 border border-orange-500/50 rounded-xl">
                   <p className="text-[10px] font-bold text-orange-400">⚠️ MODERATE RISK : ZONE-3</p>
                   <p className="text-xs text-white mt-1">Increased reporting frequency detected.</p>
                </div>
             </div>
           </motion.div>

           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-800 shadow-2xl text-white"
           >
             <h3 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-4">Live Reports Stream</h3>
             <div className="space-y-3 h-64 overflow-hidden">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex gap-3 text-xs border-b border-slate-800 pb-2">
                    <span className="text-blue-400">[{14+i}:25]</span>
                    <span className="flex-1 opacity-80">RPT-00{i} @ Sector {i*2}</span>
                    <span className="text-slate-500 font-mono">OK</span>
                  </div>
                ))}
             </div>
           </motion.div>
        </div>

        {/* Bottom Panel */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
           {[
             { label: 'Active Fleet', value: '42', color: 'blue' },
             { label: 'Today Resovled', value: '184', color: 'green' },
             { label: 'Avg Resp Time', value: '28m', color: 'purple' }
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ y: 100 }}
               animate={{ y: 0 }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="bg-slate-900/90 backdrop-blur-xl px-10 py-5 rounded-[2rem] border border-slate-800 shadow-2xl text-center"
             >
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className={`text-2xl font-black text-${stat.color}-400 mt-1`}>{stat.value}</p>
             </motion.div>
           ))}
        </div>

        {/* Right Legend */}
        <div className="absolute right-8 top-8 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-800 text-white text-[10px] font-bold space-y-3">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span>CRITICAL HOTSPOT</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              <span>MODERATE WASTE</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>CLEANUP IN ROUTE</span>
           </div>
        </div>
      </div>
    </div>
  )
}
