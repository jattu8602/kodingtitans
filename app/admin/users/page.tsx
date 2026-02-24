'use client'

import { motion } from 'framer-motion'

export default function AdminUsers() {
  const users = [
    { id: 'CZ-902', name: 'Rahul Verma', role: 'Citizen', joined: 'Jan 20, 2026', status: 'Active', xp: '3,890' },
    { id: 'MN-101', name: 'Indore Municipal', role: 'Authority', joined: 'Jan 05, 2026', status: 'Active', xp: '∞' },
    { id: 'NG-402', name: 'Green Bhopal', role: 'NGO', joined: 'Feb 12, 2026', status: 'Active', xp: '18k Impact' },
    { id: 'CZ-915', name: 'Anjali Sharma', role: 'Citizen', joined: 'Feb 15, 2026', status: 'Active', xp: '4,250' },
    { id: 'CZ-920', name: 'Aman Gupta', role: 'Citizen', joined: 'Feb 21, 2026', status: 'Suspended', xp: '2,980' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic">User Directory 👥</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-2">Manage identities and roles across the entire network</p>
        </div>
        <div className="flex gap-4">
           <input type="text" placeholder="Search Identities..." className="bg-white/5 border border-white/10 rounded-2xl px-6 py-3 text-xs font-bold text-white outline-none focus:ring-2 focus:ring-red-600 transition-all w-72" />
        </div>
      </div>

      <div className="bg-slate-950 rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden ring-1 ring-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-6">Identity ID</th>
                <th className="px-10 py-6">Member Profile</th>
                <th className="px-10 py-6">Role Classification</th>
                <th className="px-10 py-6">Network Health</th>
                <th className="px-10 py-6">Performance Metric</th>
                <th className="px-10 py-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-10 py-8 font-black text-slate-500 text-xs tracking-widest group-hover:text-red-500 transition-colors">#{user.id}</td>
                  <td className="px-10 py-8">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl shadow-inner border border-white/5">👤</div>
                        <div>
                           <p className="font-black text-white uppercase tracking-widest text-sm">{user.name}</p>
                           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Joined {user.joined}</p>
                        </div>
                     </div>
                  </td>
                  <td className="px-10 py-8">
                     <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                       user.role === 'Authority' ? 'text-red-500 border border-red-500/30 bg-red-500/10' :
                       user.role === 'NGO' ? 'text-blue-500 border border-blue-500/30 bg-blue-500/10' :
                       'text-green-500 border border-green-500/30 bg-green-500/10'
                     }`}>
                        {user.role}
                     </span>
                  </td>
                  <td className="px-10 py-8">
                     <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">{user.status}</span>
                     </div>
                  </td>
                  <td className="px-10 py-8 font-black text-white text-xs">{user.xp}</td>
                  <td className="px-10 py-8">
                    <div className="flex gap-2">
                       <button className="p-2.5 bg-white/5 text-slate-400 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/5">⚙️</button>
                       <button className="p-2.5 bg-red-600/10 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all border border-red-600/20">⚔️</button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
