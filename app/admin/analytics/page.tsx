'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function AdminAnalytics() {
  const { showToast } = useToast()

  const stats = [
    { label: 'Platform Efficiency', value: '94.2%', trend: '+2.1%', color: 'blue' as const },
    { label: 'Citizen Engagement', value: '12.8k', trend: '+15%', color: 'indigo' as const },
    { label: 'Waste Diverted', value: '142.5T', trend: '+8.4%', color: 'green' as const },
    { label: 'Reward Circulation', value: '450k', trend: '+5.2%', color: 'amber' as const },
  ]

  const colorMap = {
    blue: 'bg-blue-600/50',
    indigo: 'bg-indigo-600/50',
    green: 'bg-green-600/50',
    amber: 'bg-amber-600/50'
  }

  const alerts = [
    { type: 'AI Warning', message: 'Sector 5 shows 22% increase in overflow risk.', time: '12m ago' },
    { type: 'Logistics', message: 'Fleet optimization reduced fuel cost by 12%.', time: '1h ago' },
    { type: 'System', message: 'Database backup synchronized across clusters.', time: '3h ago' },
  ]

  const handleAudit = () => {
    showToast('Analytical Audit Log generated for current cycle.', 'success')
  }

  return (
    <div className="space-y-12 bg-slate-950 -m-6 p-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic underline decoration-red-600 decoration-[12px] underline-offset-8">Data Signal Hub 📊</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-3">Platform-Wide Intelligence & Predictive Analytics</p>
        </div>
        <button
          onClick={handleAudit}
          className="bg-white text-slate-950 px-10 py-4 rounded-[1.5rem] font-black text-xs hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest"
        >
           <span>🖨️</span> Export Full Audit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900 p-8 rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl"
          >
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Signal Strength // {stat.label}</p>
             <p className="text-4xl font-black text-white tracking-tighter mb-4">{stat.value}</p>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded-lg">{stat.trend}</span>
                <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">vs prev cycle</span>
             </div>
             <div className={`absolute bottom-0 left-0 w-full h-1 ${colorMap[stat.color]} blur-sm opacity-0 group-hover:opacity-100 transition-opacity`} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] border border-white/5 h-[450px] relative overflow-hidden flex flex-col items-center justify-center shadow-2xl">
            <div className="absolute top-10 left-10">
               <h3 className="text-xl font-black text-white tracking-tight leading-none uppercase italic">Performance Flux 📈</h3>
               <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.3em] mt-1 italic">Real-time system throughput signals</p>
            </div>

            {/* Mock Chart Animation */}
            <div className="w-full h-1/2 flex items-end justify-around px-20">
               {[40, 70, 45, 90, 65, 85, 55, 100, 75, 40].map((h, i) => (
                 <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                  className="w-4 bg-gradient-to-t from-red-600 to-indigo-600 rounded-full shadow-lg shadow-red-950/20"
                 />
               ))}
            </div>

            <button
              onClick={() => showToast('Switched to Predictive Model T-800.', 'info')}
              className="mt-12 text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] hover:text-red-500 transition-all cursor-pointer"
            >
              Analyze Deep Nodes ❱
            </button>
         </div>

         <div className="bg-slate-900 rounded-[4rem] border border-white/5 p-10 flex flex-col shadow-2xl">
            <h3 className="text-xl font-black text-white tracking-tight uppercase italic mb-8 underline decoration-slate-800 decoration-4">Signal Logs 🤖</h3>
            <div className="space-y-6 flex-1">
               {alerts.map((alert, i) => (
                 <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 p-5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-all cursor-pointer"
                 >
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">{alert.type}</span>
                       <span className="text-[8px] font-black text-slate-700 uppercase">{alert.time}</span>
                    </div>
                    <p className="text-[11px] font-bold text-slate-400 leading-relaxed italic">{alert.message}</p>
                 </motion.div>
               ))}
            </div>
            <button
              onClick={() => showToast('Clearing signal buffer...', 'warning')}
              className="w-full py-4 mt-8 border border-white/10 rounded-2xl text-[9px] font-black text-slate-500 uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all"
            >
              Clear Buffer
            </button>
         </div>
      </div>
    </div>
  )
}
