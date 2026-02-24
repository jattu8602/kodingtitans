'use client'

import { motion } from 'framer-motion'

export default function MunicipalStaff() {
  const staff = [
    { id: 'EMP-402', name: 'Rajesh Kumar', role: 'Zone Supervisor', zone: 'Zone A', shift: 'Morning', mobile: '+91 98765-XXXXX', rating: 4.8 },
    { id: 'EMP-405', name: 'Sunita Devi', role: 'Health Inspector', zone: 'Zone B', shift: 'Evening', mobile: '+91 98765-XXXXX', rating: 4.9 },
    { id: 'EMP-408', name: 'Karan Singh', role: 'Fleet Manager', zone: 'Depot South', shift: 'Morning', mobile: '+91 98765-XXXXX', rating: 4.5 },
    { id: 'EMP-412', name: 'Pooja V.', role: 'Admin Officer', zone: 'Command Center', shift: 'General', mobile: '+91 98765-XXXXX', rating: 5.0 },
    { id: 'EMP-415', name: 'Vikram Lal', role: 'Field Agent', zone: 'Zone C', shift: 'Morning', mobile: '+91 98765-XXXXX', rating: 4.2 },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Personnel Directory 👷</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">Manage supervisors, inspectors, and field staff</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all">Role Management</button>
           <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-2 uppercase tracking-widest">
              <span>➕</span> Add New Member
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-6">Member ID</th>
                <th className="px-10 py-6">Full Name / Profile</th>
                <th className="px-10 py-6">Designation</th>
                <th className="px-10 py-6">Assigned Zone</th>
                <th className="px-10 py-6">Active Shift</th>
                <th className="px-10 py-6">Performance</th>
                <th className="px-10 py-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {staff.map((member, i) => (
                <motion.tr
                  key={member.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-10 py-6 font-black text-slate-400 text-xs">#{member.id}</td>
                  <td className="px-10 py-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-[1rem] flex items-center justify-center text-xl shadow-inner group-hover:bg-white transition-all">👤</div>
                        <div>
                           <p className="font-black text-slate-900 uppercase tracking-widest text-sm">{member.name}</p>
                           <p className="text-[10px] text-slate-400 font-bold">{member.mobile}</p>
                        </div>
                     </div>
                  </td>
                  <td className="px-10 py-6">
                     <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{member.role}</span>
                  </td>
                  <td className="px-10 py-6 text-xs font-bold text-slate-600">{member.zone}</td>
                  <td className="px-10 py-6">
                     <span className="text-[10px] font-black text-slate-400 border border-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{member.shift}</span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-1">
                       <span className="text-sm font-black text-slate-900">{member.rating}</span>
                       <span className="text-yellow-400 text-xs">★</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                       ⚙️
                    </button>
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
