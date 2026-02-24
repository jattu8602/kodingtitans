'use client'

import { motion } from 'framer-motion'

export default function NGOMissions() {
  const missions = [
    { title: 'Saraswati River Cleanup', date: 'Mar 12, 2026', zone: 'Sector 5', volunteers: 42, target: 100, status: 'Recruiting', intensity: 'High' },
    { title: 'Market Waste Drive', date: 'Mar 15, 2026', zone: 'Rajwada', volunteers: 15, target: 30, status: 'Setup', intensity: 'Medium' },
    { title: 'Bada Talab Shore Sweep', date: 'Mar 20, 2026', zone: 'Lake Area', volunteers: 0, target: 200, status: 'Planning', intensity: 'Max' },
    { title: 'E-Waste Awareness', date: 'Mar 25, 2026', zone: 'Digital Colony', volunteers: 8, target: 15, status: 'Recruiting', intensity: 'Low' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tighter uppercase">Mission Control 🧹</h1>
          <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mt-1">Organize and manage environmental cleanup drives</p>
        </div>
        <button className="bg-indigo-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-xs hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest">
           <span>➕</span> Initiate New Mission
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {missions.map((mission, i) => (
          <motion.div
            key={mission.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[3.5rem] border border-indigo-50 shadow-xl group hover:shadow-2xl transition-all"
          >
            <div className="flex justify-between items-start mb-8">
               <div className="p-4 bg-indigo-50 rounded-3xl text-3xl group-hover:scale-110 transition-transform">🧹</div>
               <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                 mission.status === 'Recruiting' ? 'bg-green-50 text-green-600' :
                 mission.status === 'Setup' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
               }`}>
                 {mission.status}
               </span>
            </div>

            <h3 className="text-2xl font-black text-indigo-950 mb-2">{mission.title}</h3>
            <div className="flex items-center gap-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-8">
               <span className="flex items-center gap-1">📍 {mission.zone}</span>
               <span className="flex items-center gap-1">📅 {mission.date}</span>
            </div>

            <div className="space-y-6">
              <div>
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Volunteers Committed</span>
                    <span className="text-xs font-black text-indigo-950">{mission.volunteers}/{mission.target}</span>
                 </div>
                 <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(mission.volunteers / mission.target) * 100}%` }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="h-full bg-indigo-600"
                    />
                 </div>
              </div>

              <div className="flex gap-3">
                 <button className="flex-1 py-4 bg-indigo-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-800 transition-all">Manage Drive</button>
                 <button className="flex-1 py-4 bg-white border border-indigo-100 text-indigo-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">Broadcast Info</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
