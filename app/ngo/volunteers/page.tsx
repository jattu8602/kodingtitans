'use client'

import { motion } from 'framer-motion'

export default function NGOVolunteers() {
  const volunteers = [
    { name: 'Arjun Mehta', missions: 12, impact: '450kg', role: 'Captain', status: 'Active' },
    { name: 'Sanya Mirza', missions: 8, impact: '240kg', role: 'Coordinator', status: 'At Mission' },
    { name: 'Kabir Khan', missions: 15, impact: '680kg', role: 'Captain', status: 'Active' },
    { name: 'Megha S.', missions: 4, impact: '85kg', role: 'New Member', status: 'Training' },
    { name: 'Rohan P.', missions: 22, impact: '1.2T', role: 'Grand Master', status: 'Active' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tighter uppercase">Volunteer Force 🤝</h1>
          <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mt-1">Nurturing and managing your community of guardians</p>
        </div>
        <div className="flex gap-3 bg-white p-1.5 rounded-[1.5rem] shadow-sm border border-indigo-50">
           <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Active</button>
           <button className="px-6 py-2 text-indigo-400 hover:text-indigo-950 rounded-xl text-[10px] font-black uppercase tracking-widest">Waitlist</button>
        </div>
      </div>

      {/* Top Contributors Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {volunteers.slice(0, 3).map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white p-8 rounded-[3rem] shadow-xl border border-indigo-50 text-center relative ${i === 2 ? 'md:order-1' : i === 0 ? 'md:order-2 border-indigo-200 shadow-indigo-200/50 scale-110' : 'md:order-3'}`}
          >
            <div className="w-20 h-20 bg-indigo-50 rounded-full mx-auto flex items-center justify-center text-4xl mb-6 shadow-inner">👤</div>
            <h3 className="text-xl font-black text-indigo-950 uppercase tracking-tight">{v.name}</h3>
            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-6">{v.role}</p>

            <div className="pt-6 border-t border-indigo-50 flex justify-between">
               <div>
                  <p className="text-lg font-black text-indigo-950">{v.missions}</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Missions</p>
               </div>
               <div>
                  <p className="text-lg font-black text-indigo-600">{v.impact}</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Impact</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Volunteer Table */}
      <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-indigo-200/40 border border-indigo-100 overflow-hidden">
        <div className="px-10 py-8 bg-indigo-950 flex justify-between items-center text-white">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Complete Roster</h4>
          <span className="text-xs font-black">248 TOTAL MEMBERS</span>
        </div>
        <div className="overflow-x-auto">
           <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                 <tr>
                    <th className="px-10 py-6">Volunteer Profile</th>
                    <th className="px-10 py-6">Access Level</th>
                    <th className="px-10 py-6">Missions</th>
                    <th className="px-10 py-6">Status</th>
                    <th className="px-10 py-6 text-right">Action</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                 {volunteers.map((v, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                       <td className="px-10 py-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center font-bold text-indigo-300">#</div>
                             <p className="font-black text-indigo-950 text-xs uppercase tracking-widest">{v.name}</p>
                          </div>
                       </td>
                       <td className="px-10 py-6">
                          <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest font-mono">{v.role}</span>
                       </td>
                       <td className="px-10 py-6 font-bold text-slate-400 text-xs">{v.missions} Drives</td>
                       <td className="px-10 py-6">
                          <div className="flex items-center gap-2">
                             <span className={`w-2 h-2 rounded-full ${v.status === 'Active' ? 'bg-green-500' : 'bg-blue-400'}`}></span>
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{v.status}</span>
                          </div>
                       </td>
                       <td className="px-10 py-6 text-right">
                          <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-950 transition-all uppercase tracking-widest">Profile ❱</button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  )
}
