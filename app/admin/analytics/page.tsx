'use client'

import { motion } from 'framer-motion'

export default function AdminAnalytics() {
  const regions = [
    { name: 'Indore City', score: 92, citizens: '85k', growth: '+14%' },
    { name: 'Bhopal Central', score: 88, citizens: '42k', growth: '+18%' },
    { name: 'Ujjain Division', score: 76, citizens: '12k', growth: '+5%' },
    { name: 'Gwalior North', score: 64, citizens: '8k', growth: '+2%' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic">Platform Signal 📊</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-2">Deep architectural analytics across all city cells</p>
        </div>
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
           <button className="px-6 py-2 bg-red-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Real-time</button>
           <button className="px-6 py-2 text-slate-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest">Projection</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-slate-950 p-10 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
           <div className="flex justify-between items-center mb-12">
              <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] italic">Network Growth Velocity</h3>
              <div className="flex gap-4 items-center">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase">Usage</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white/10 rounded-full"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase">Baseline</span>
                 </div>
              </div>
           </div>

           <div className="h-96 w-full flex items-end justify-between px-4 pb-12 relative group-hover:bg-red-500/5 transition-all duration-700 rounded-[3rem]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
              {[20, 35, 25, 50, 45, 80, 70, 95, 85, 100].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group/bar">
                   <div className="h-64 w-8 bg-white/5 rounded-t-xl relative overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 1.5, ease: "circOut" }}
                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-600 to-red-400"
                      />
                   </div>
                   <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover/bar:text-white transition-colors">Feb {i+1}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-950 p-8 rounded-[3.5rem] border border-white/5 text-center">
              <p className="text-4xl font-black text-white italic">4.8s</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Avg API Latency</p>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div animate={{ x: [-100, 200] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1/3 h-full bg-red-600" />
              </div>
           </div>

           <div className="bg-slate-950 p-8 rounded-[3.5rem] border border-white/5 text-center">
              <p className="text-4xl font-black text-green-500 italic">92%</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Retention Rate</p>
              <p className="text-[8px] text-green-500/50 font-black mt-1 uppercase">+2.4% THIS WEEK</p>
           </div>

           <div className="bg-red-600 p-8 rounded-[3.5rem] text-white text-center shadow-2xl shadow-red-900/40 border border-red-500">
              <p className="text-sm font-black uppercase tracking-[0.2em] mb-4">Storage Signal</p>
              <h4 className="text-5xl font-black mb-1 italic">8.2<span className="text-2xl uppercase tracking-tighter not-italic">TB</span></h4>
              <p className="text-xs font-bold text-white/60 uppercase">Diverted Waste Data</p>
           </div>
        </div>
      </div>

      <div className="bg-slate-950 rounded-[4rem] border border-white/5 p-10 shadow-2xl overflow-hidden ring-1 ring-white/5">
        <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 italic">Regional Distribution</h3>
        <div className="grid md:grid-cols-4 gap-8">
           {regions.map((reg, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -5 }}
               className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:border-red-500/20 transition-all"
             >
                <div className="flex justify-between items-center mb-6">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{reg.name}</p>
                   <span className="text-[9px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">{reg.growth}</span>
                </div>
                <p className="text-3xl font-black text-white italic">{reg.score}%</p>
                <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div
                     initial={{ width: 0 }}
                     whileInView={{ width: `${reg.score}%` }}
                     transition={{ duration: 1 }}
                     className="h-full bg-red-600"
                   />
                </div>
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-4">{reg.citizens} Citizens Active</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  )
}
