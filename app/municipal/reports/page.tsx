'use client'

import { motion } from 'framer-motion'

export default function MunicipalReports() {
  const reports = [
    { id: 'RPC-001', location: 'Vijay Nagar Square', category: 'Overflowing Bin', severity: 'High', status: 'Pending', time: '10m ago', reporter: 'Rahul V.' },
    { id: 'RPC-002', location: 'Rajwada Market', category: 'Scattered Plastic', severity: 'Medium', status: 'In Progress', time: '45m ago', reporter: 'Anjali S.' },
    { id: 'RPC-003', location: 'Bhawarkua', category: 'Medical Waste', severity: 'High', status: 'Pending', time: '1h ago', reporter: 'System AI' },
    { id: 'RPC-004', location: 'Annapurna Rd', category: 'General Garbage', severity: 'Low', status: 'Resolved', time: '3h ago', reporter: 'Mahesh P.' },
    { id: 'RPC-005', location: 'MP Nagar Zone 2', category: 'Hazardous Spill', severity: 'Max', status: 'Critical', time: 'Just Now', reporter: 'Automated Drone' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Incident Reports 🚨</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">Direct citizen complaints and AI detection logs</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-slate-100">
           {['All', 'Critical', 'Pending', 'Resolved'].map((tab) => (
             <button key={tab} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'All' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`}>
                {tab}
             </button>
           ))}
        </div>
      </div>

      <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-10 py-6">Incident ID</th>
                <th className="px-10 py-6">Location / Zone</th>
                <th className="px-10 py-6">Classification</th>
                <th className="px-10 py-6">Priority</th>
                <th className="px-10 py-6">Status</th>
                <th className="px-10 py-6">Reporter</th>
                <th className="px-10 py-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm border-t border-slate-100">
              {reports.map((report, i) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/80 transition-all border-b border-slate-50 last:border-none group"
                >
                  <td className="px-10 py-8 font-black text-blue-600 group-hover:tracking-widest transition-all">#{report.id}</td>
                  <td className="px-10 py-8">
                     <p className="font-bold text-slate-900">{report.location}</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{report.time}</p>
                  </td>
                  <td className="px-10 py-8">
                     <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{report.category}</span>
                  </td>
                  <td className="px-10 py-8">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black border-2 ${
                      report.severity === 'Max' || report.severity === 'High'
                        ? 'border-red-100 text-red-600 bg-red-50'
                        : 'border-orange-100 text-orange-600 bg-orange-50'
                    }`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="px-10 py-8">
                     <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          report.status === 'Critical' ? 'bg-red-500 animate-pulse' :
                          report.status === 'In Progress' ? 'bg-blue-500' :
                          report.status === 'Resolved' ? 'bg-green-500' : 'bg-slate-300'
                        }`}></span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{report.status}</span>
                     </div>
                  </td>
                  <td className="px-10 py-8 font-bold text-slate-400 text-xs">{report.reporter}</td>
                  <td className="px-10 py-8">
                    <button className="bg-slate-900 text-white text-[10px] font-black px-6 py-2.5 rounded-2xl hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30 transition-all uppercase tracking-widest">
                       DISPATCH
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center p-8 bg-white rounded-[3rem] border border-slate-100 shadow-xl">
         <button className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-blue-600 transition-all">Load Archive Reports ❱</button>
      </div>
    </div>
  )
}
