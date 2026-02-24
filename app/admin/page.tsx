'use client'

import { motion } from 'framer-motion'

export default function AdminDashboard() {
  const globalStats = [
    { label: 'Total Citizens', value: '124k', color: 'blue', icon: '👥' },
    { label: 'Active NGOs', value: '58', color: 'red', icon: '🌍' },
    { label: 'Avg Cleanup Rate', value: '96.4%', color: 'green', icon: '⚡' },
    { label: 'System Uptime', value: '99.9%', color: 'purple', icon: '🖥️' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic">The Control Tower 🛰️</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-2">Managing the pulse of Bhopal's cleanliness infrastructure</p>
        </div>
        <div className="flex gap-4">
           <button className="px-8 py-3 bg-red-600 text-white rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-red-500 transition-all uppercase tracking-widest">Global Deploy</button>
        </div>
      </div>

      {/* Global Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {globalStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-950 p-8 rounded-[3rem] border border-white/5 shadow-2xl group hover:border-red-500/30 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
               <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{stat.icon}</span>
               <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">+12%</span>
                  <span className="text-[6px] text-slate-600 font-bold uppercase">vs last month</span>
               </div>
            </div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
            <p className="text-4xl font-black text-white mt-1 group-hover:text-red-500 transition-colors uppercase">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
         {/* Live Platform Feed */}
         <div className="lg:col-span-2 bg-slate-950 p-10 rounded-[4rem] border border-white/5 shadow-2xl ring-1 ring-white/5">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] italic">Real-time Platform Signal</h3>
               <div className="flex gap-1">
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Logs</span>
               </div>
            </div>

            <div className="space-y-4 font-mono">
               {[
                 { time: '16:42:01', event: 'CITIZEN_REPORT', zone: 'Sector 5', meta: 'Image Uploaded' },
                 { time: '16:42:15', event: 'MUNI_DISPATCH', zone: 'Zone A', meta: 'Truck T-102 assigned' },
                 { time: '16:42:22', event: 'MARKETPLACE_LIST', zone: 'User: rahul_88', meta: 'Plastic 12kg' },
                 { time: '16:42:30', event: 'NGO_CHECKIN', zone: 'Mission: River-X', meta: '4 volunteers online' },
                 { time: '16:42:45', event: 'AI_DETECTION', zone: 'S-7 (CAM)', meta: 'Confidence: 94%' },
               ].map((log, i) => (
                 <div key={i} className="flex gap-6 text-[11px] p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-default group/log">
                    <span className="text-slate-500">[{log.time}]</span>
                    <span className="font-black text-red-500 group-hover/log:tracking-tighter transition-all">{log.event}</span>
                    <span className="text-slate-400">@{log.zone}</span>
                    <span className="flex-1 text-right text-slate-600 italic">... {log.meta}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Distribution Chart Mockup */}
         <div className="bg-slate-950 p-10 rounded-[4rem] border border-white/5 shadow-2xl ring-1 ring-white/5">
            <h3 className="text-lg font-black text-white uppercase tracking-widest mb-10 text-center">Traffic Split</h3>
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
               <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="80" stroke="#ef4444" strokeWidth="20" fill="none" strokeDasharray="502" strokeDashoffset="100" />
                  <circle cx="96" cy="96" r="80" stroke="#3b82f6" strokeWidth="20" fill="none" strokeDasharray="502" strokeDashoffset="350" />
                  <circle cx="96" cy="96" r="80" stroke="#22c55e" strokeWidth="20" fill="none" strokeDasharray="502" strokeDashoffset="450" />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-black text-white">84%</p>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Load</p>
               </div>
            </div>
            <div className="mt-12 space-y-3">
               <div className="flex justify-between items-center text-[10px] font-black uppercase">
                  <span className="text-red-500 italic">Citizens</span>
                  <span className="text-white">65%</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-black uppercase">
                  <span className="text-blue-500 italic">Municipal</span>
                  <span className="text-white">20%</span>
               </div>
               <div className="flex justify-between items-center text-[10px] font-black uppercase">
                  <span className="text-green-500 italic">NGOs</span>
                  <span className="text-white">15%</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
