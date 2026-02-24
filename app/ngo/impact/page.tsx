'use client'

import { motion } from 'framer-motion'

export default function NGOImpact() {
  const impactMetrics = [
    { label: 'Waste Diverted', value: '42.5 Tons', delta: '+15%', icon: '🗑️', color: 'indigo' },
    { label: 'Carbon Offset', value: '1.2k kg', delta: '+8%', icon: '🌱', color: 'green' },
    { label: 'Active Guardians', value: '158', delta: '+22%', icon: '👥', color: 'blue' },
    { label: 'Community Hours', value: '2.4k', delta: '+30%', icon: '⏱️', color: 'purple' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tighter uppercase">Impact Metrics 📊</h1>
          <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mt-1">Verified data on your environmental and social contributions</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-indigo-100">
           <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Growth</button>
           <button className="px-6 py-2 text-indigo-400 hover:text-indigo-950 transition-all text-[10px] font-black uppercase tracking-widest">Sustainability</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-indigo-50"
          >
            <div className="flex justify-between items-start mb-4">
               <span className="text-3xl">{m.icon}</span>
               <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-full">{m.delta}</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{m.label}</p>
            <p className="text-3xl font-black text-indigo-950 mt-1">{m.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] shadow-2xl border border-indigo-50 overflow-hidden relative group">
           <h3 className="text-lg font-black text-indigo-950 uppercase tracking-widest mb-10">Monthly Diversion Trend</h3>
           <div className="h-80 w-full bg-slate-50/50 rounded-[2.5rem] relative flex items-end justify-between px-12 py-8 group-hover:bg-white transition-all duration-700">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent)]"></div>
              {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group/bar">
                   <motion.div
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                     className="w-10 bg-indigo-600 rounded-t-xl opacity-80 group-hover/bar:opacity-100 group-hover/bar:scale-x-110 transition-all"
                   />
                   <span className="text-[10px] font-black text-slate-300 uppercase">W{i+1}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-indigo-950 p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
           <div className="relative z-10">
              <span className="text-5xl mb-6 block">🌟</span>
              <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">Top Performing NGO</h4>
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-8">Indore Region - Feb 2026</p>
              <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/10">
                 <p className="text-4xl font-black mb-1">94%</p>
                 <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">Efficiency Score</p>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}
