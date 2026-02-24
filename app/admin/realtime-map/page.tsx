'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdminRealtime() {
  return (
    <div className="-m-6 md:-m-10 h-auto md:h-[calc(100vh-5rem)] bg-slate-900 overflow-hidden flex flex-col relative rounded-none md:rounded-br-[4rem]">
      <header className="p-4 md:p-6 bg-slate-900/80 backdrop-blur-xl border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 z-20 sticky top-0">
        <div className="flex items-center gap-4">
           <h1 className="text-lg md:text-xl font-black text-white italic tracking-widest flex items-center gap-3">
             <span className="text-red-500 text-base md:text-xl">🛰️</span> COMMAND SIGNAL <span className="text-[8px] md:text-[10px] bg-red-600 px-2 py-0.5 rounded animate-pulse not-italic">LIVE</span>
           </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
           {['Satellite', 'Heatmap', 'Traffic', 'Waste'].map(mode => (
             <button key={mode} className={`px-4 md:px-6 py-1.5 md:py-2 rounded-xl text-[8px] md:text-[10px] font-black transition-all uppercase tracking-widest ${mode === 'Heatmap' ? 'bg-red-600 text-white shadow-lg shadow-red-500/20' : 'bg-white/5 text-slate-500 hover:bg-white/10 hover:text-white border border-white/5'}`}>
                {mode}
             </button>
           ))}
        </div>
      </header>

      <div className="flex-1 relative min-h-[500px] md:min-h-0">
        {/* Full-screen Map Simulation */}
        <div className="absolute inset-0 bg-slate-900">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>

           {/* Simulated Heatmap Clouds */}
           <motion.div
             animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 5, repeat: Infinity }}
             className="absolute top-1/4 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-red-600/20 blur-[60px] md:blur-[100px] rounded-full"
           ></motion.div>
           <motion.div
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 7, repeat: Infinity, delay: 1 }}
             className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full"
           ></motion.div>

           {/* Simulated Route Polyline (SVG) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
              <motion.path
                d="M 50,150 L 150,200 L 250,180 L 350,250 L 450,220"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="md:hidden"
              />
              <motion.path
                d="M 200,300 L 400,350 L 600,320 L 800,450 L 1000,400"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="hidden md:block"
              />
           </svg>

           {/* Floating Markers */}
           <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-[30%] md:top-[40%] left-[20%] md:left-[45%] flex flex-col items-center z-10">
              <div className="bg-red-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[6px] md:text-[8px] font-black shadow-lg mb-1 tracking-widest">DETECTION_X</div>
              <div className="text-xl md:text-2xl filter drop-shadow-lg">🚨</div>
           </motion.div>
        </div>

        {/* UI Overlays */}
        <div className="absolute top-4 left-4 right-4 md:right-auto md:top-8 md:left-8 md:w-80 space-y-4 md:space-y-6 z-20">
           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="bg-slate-950/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl"
           >
             <h3 className="text-red-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6">AI Prediction Cluster</h3>
             <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 bg-red-600/10 border border-red-600/20 rounded-xl md:rounded-2xl">
                   <p className="text-[8px] md:text-[10px] font-black text-red-500 tracking-widest uppercase">🚨 CRITICAL : SECTOR-7</p>
                   <p className="text-[10px] md:text-[11px] text-slate-400 mt-1 md:mt-2 font-bold leading-relaxed">Overflow expected in <span className="text-white">42 mins</span>. Dispatch queued.</p>
                </div>
                <div className="hidden sm:block p-3 md:p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl md:rounded-2xl">
                   <p className="text-[8px] md:text-[10px] font-black text-yellow-500 tracking-widest uppercase">⚠️ WARNING : SECTOR-3</p>
                   <p className="text-[10px] md:text-[11px] text-slate-400 mt-1 md:mt-2 font-bold leading-relaxed">High citizen reporting frequency detected.</p>
                </div>
             </div>
           </motion.div>

           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="hidden md:block bg-slate-950/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white/5 shadow-2xl"
           >
             <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 italic">Signal Stream</h3>
             <div className="space-y-4 h-64 overflow-hidden mask-fade-bottom">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="flex gap-4 text-[10px] border-b border-white/5 pb-3">
                    <span className="text-red-500 font-mono italic">[{14+i}:25]</span>
                    <span className="flex-1 text-slate-400 font-black uppercase tracking-tighter">Event_0{i} // Sector_{i*2}</span>
                    <span className="text-green-500 font-bold uppercase">SYC</span>
                  </div>
                ))}
             </div>
           </motion.div>
        </div>

        {/* Bottom Panel */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 flex flex-row gap-2 md:gap-6 z-20 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
           {[
             { label: 'Active Fleet', value: '42', color: 'text-blue-500' },
             { label: 'Health', value: '99.4%', color: 'text-green-500' },
             { label: 'Resp Spd', value: '18m', color: 'text-red-500' }
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ y: 50 }}
               animate={{ y: 0 }}
               transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
               className="flex-1 min-w-[100px] bg-slate-950/90 backdrop-blur-xl px-4 md:px-12 py-3 md:py-6 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl shadow-black/50 text-center ring-1 ring-white/5"
             >
                <p className="text-[7px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{stat.label}</p>
                <p className={`text-base md:text-3xl font-black ${stat.color} mt-1 md:mt-2 uppercase tracking-tighter italic`}>{stat.value}</p>
             </motion.div>
           ))}
        </div>

        {/* Right Legend - Hidden on Mobile */}
        <div className="hidden lg:block absolute right-8 top-8 bg-slate-950/80 backdrop-blur-xl p-5 rounded-[2rem] border border-white/5 text-white space-y-4 z-20">
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-slate-500 italic">Legend</h4>
           <div className="space-y-3">
             <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                <span className="text-[9px] font-black tracking-widest uppercase">Critical Sector</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full opacity-60"></div>
                <span className="text-[9px] font-black tracking-widest uppercase text-slate-400">Moderate Waste</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border border-blue-400/30 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                <span className="text-[9px] font-black tracking-widest uppercase text-slate-400">Response Unit</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}
