'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function AdminUsers() {
  const { showToast } = useToast()
  const [search, setSearch] = useState('')

  const [users, setUsers] = useState([
    { id: 'U1001', name: 'Nitesh S.', role: 'Superadmin', status: 'Online', credits: '12,500', email: 'leader@titanclean.in', joinDate: '2024-01' },
    { id: 'U1002', name: 'Anjali Sharma', role: 'Citizen', status: 'Active', credits: '4,200', email: 'anjali@email.com', joinDate: '2024-02' },
    { id: 'U1003', name: 'CleanCity NGO', role: 'NGO Partner', status: 'Verified', credits: '85,000', email: 'ops@cleancity.org', joinDate: '2024-01' },
    { id: 'U1004', name: 'Indore Municipal', role: 'Authority', status: 'Active', credits: 'N/A', email: 'admin@indore.muni.gov', joinDate: '2023-12' },
    { id: 'U1005', name: 'Rahul Verma', role: 'Citizen', status: 'Idle', credits: '1,850', email: 'rahul@verma.net', joinDate: '2024-03' },
    { id: 'U1006', name: 'GreenIndia Org', role: 'NGO Partner', status: 'Verified', credits: '12,400', email: 'hello@greenindia.org', joinDate: '2024-02' },
    { id: 'U1007', name: 'Priya Das', role: 'Citizen', status: 'Active', credits: '3,100', email: 'priya.das@work.com', joinDate: '2024-03' },
    { id: 'U1008', name: 'System Sentinel', role: 'AI Agent', status: 'System', credits: '999k', email: 'ai@titanclean.in', joinDate: '2023-11' },
  ])

  const handleAction = (name: string, action: string) => {
    showToast(`${action}: ${name} successful.`, 'success')
  }

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-12 bg-slate-950 -m-6 p-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic leading-tight">User Directory 👥</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-3 italic underline decoration-red-600 decoration-4">Platform Identity Management Engine</p>
        </div>
        <div className="flex gap-4">
           <div className="relative group">
              <input
                type="text"
                placeholder="SEARCH SIGNALS..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-900 border border-white/10 rounded-2xl px-10 py-4 text-[10px] font-black text-white w-64 outline-none focus:border-red-500/50 transition-all uppercase tracking-widest placeholder:text-slate-700"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700">🔍</span>
           </div>
           <button
            onClick={() => showToast('Intake Manifest ready for broadcast.', 'info')}
            className="px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-xs hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:bg-red-500 transition-all uppercase tracking-widest"
           >
             Add Identity
           </button>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[4rem] border border-white/5 shadow-2xl ring-1 ring-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-8">Identity ID</th>
                <th className="px-10 py-8">Username / Alias</th>
                <th className="px-10 py-8">Access Level</th>
                <th className="px-10 py-8">Eco-Credits</th>
                <th className="px-10 py-8">Signal Status</th>
                <th className="px-10 py-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AnimatePresence mode="popLayout">
                {filteredUsers.map((user, i) => (
                  <motion.tr
                    key={user.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-white/5 transition-all group"
                  >
                    <td className="px-10 py-8 font-black text-slate-500 text-[11px] group-hover:text-red-500 transition-colors">[{user.id}]</td>
                    <td className="px-10 py-8">
                       <p className="text-sm font-black text-white tracking-tight">{user.name}</p>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{user.email}</p>
                    </td>
                    <td className="px-10 py-8">
                       <span className={`text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest border border-white/10 ${
                         user.role === 'Superadmin' ? 'bg-red-500 text-white border-red-400' :
                         user.role === 'AI Agent' ? 'bg-indigo-600 text-white border-indigo-400' :
                         user.role === 'Authority' ? 'bg-slate-800 text-white' : 'text-slate-400'
                       }`}>
                         {user.role}
                       </span>
                    </td>
                    <td className="px-10 py-8 font-black text-green-500 text-sm italic tracking-tighter">
                       {user.credits} <span className="text-[8px] text-slate-600">ECT</span>
                    </td>
                    <td className="px-10 py-8">
                       <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                             user.status === 'Online' || user.status === 'System' ? 'bg-green-500 animate-pulse' :
                             user.status === 'Active' || user.status === 'Verified' ? 'bg-blue-500' : 'bg-slate-700'
                          }`}></span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{user.status}</span>
                       </div>
                    </td>
                    <td className="px-10 py-8">
                       <div className="flex gap-2">
                          <button
                            onClick={() => handleAction(user.name, 'Audit')}
                            className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all text-xs border border-white/5"
                          >
                            ⚙️
                          </button>
                          <button
                            onClick={() => handleAction(user.name, 'Restrict')}
                            className="px-5 py-3 bg-red-600/10 text-red-500 border border-red-500/20 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
                          >
                            Restrict
                          </button>
                       </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center pb-12">
         <button className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] hover:text-red-500 transition-all italic">Synchronize Full Database Archive ❱</button>
      </div>
    </div>
  )
}
