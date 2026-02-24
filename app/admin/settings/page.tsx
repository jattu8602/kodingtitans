'use client'

import { motion } from 'framer-motion'

export default function AdminSettings() {
  const sections = [
    { title: 'Global Variables', desc: 'Manage point weights, cooldowns, and limits', icon: '⚙️' },
    { title: 'Security Protocol', desc: 'Root keys, 2FA enforcement, and access logs', icon: '🔒' },
    { title: 'Authority Config', desc: 'Municipal API endpoints and webhook sync', icon: '🏛️' },
    { title: 'Citizen Rewards', desc: 'Marketplace conversion rates and partner deals', icon: '💎' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic">System Core ⚙️</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-2">Architectural overrides and global infrastructure configuration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-950 p-10 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-red-500/20 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-6 relative z-10">
               <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-4xl shadow-inner border border-white/5 group-hover:bg-red-600/10 group-hover:border-red-500/20 transition-all duration-500">
                  {section.icon}
               </div>
               <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight italic group-hover:text-red-500 transition-colors">{section.title}</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 opacity-80">{section.desc}</p>
               </div>
            </div>

            <div className="mt-10 flex gap-4 relative z-10">
               <button className="flex-1 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Configure ❱</button>
               <button className="px-6 py-4 bg-red-600/10 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-red-600/20 hover:bg-red-600 hover:text-white transition-all">Emergency Lock</button>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      {/* Global Toggle Section */}
      <div className="bg-slate-950 p-10 rounded-[4.5rem] border border-white/5 shadow-2xl ring-1 ring-white/5">
         <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 italic">Platform-Wide Protocols</h3>
         <div className="space-y-6">
            {[
              { label: 'Citizen Registration', status: 'ON', desc: 'Allows new users to join the platform' },
              { label: 'AI Incident Detection', status: 'ON', desc: 'Real-time camera feed analysis' },
              { label: 'Marketplace Redemption', status: 'PAUSED', desc: 'Currently undergoing maintenance' },
              { label: 'NGO Mission Approval', status: 'AUTO', desc: 'Automated verification for trusted NGOs' },
            ].map((p, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-all">
                 <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">{p.label}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-tighter">{p.desc}</p>
                 </div>
                 <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-black px-4 py-2 rounded-lg ${p.status === 'ON' || p.status === 'AUTO' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                       {p.status}
                    </span>
                    <div className="w-14 h-7 bg-white/10 rounded-full relative p-1 cursor-pointer">
                       <div className={`h-full aspect-square rounded-full shadow-lg transition-all ${p.status === 'ON' || p.status === 'AUTO' ? 'bg-red-600 translate-x-7' : 'bg-slate-500 translate-x-0'}`}></div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  )
}
