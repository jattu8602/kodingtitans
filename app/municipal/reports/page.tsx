'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function MunicipalReports() {
  const { showToast } = useToast()
  const [activeTab, setActiveTab] = useState('All')

  const [reports, setReports] = useState([
    { id: 'RPC-001', location: 'Vijay Nagar Square', category: 'Overflowing Bin', severity: 'High', status: 'Pending', time: '10m ago', reporter: 'Rahul V.' },
    { id: 'RPC-002', location: 'Rajwada Market', category: 'Scattered Plastic', severity: 'Medium', status: 'In Progress', time: '45m ago', reporter: 'Anjali S.' },
    { id: 'RPC-003', location: 'Bhawarkua', category: 'Medical Waste', severity: 'High', status: 'Pending', time: '1h ago', reporter: 'System AI' },
    { id: 'RPC-004', location: 'Annapurna Rd', category: 'General Garbage', severity: 'Low', status: 'Resolved', time: '3h ago', reporter: 'Mahesh P.' },
    { id: 'RPC-005', location: 'MP Nagar Zone 2', category: 'Hazardous Spill', severity: 'Max', status: 'Critical', time: 'Just Now', reporter: 'Automated Drone' },
    { id: 'RPC-006', location: 'Indore Junction', category: 'Plastic Pile', severity: 'High', status: 'Pending', time: '15m ago', reporter: 'Priya D.' },
    { id: 'RPC-007', location: 'LIG Colony', category: 'Overflowing Bin', severity: 'Medium', status: 'In Progress', time: '2h ago', reporter: 'Vikram K.' },
    { id: 'RPC-008', location: 'Sarafa Bazar', category: 'Food Waste', severity: 'Max', status: 'Pending', time: '5m ago', reporter: 'System AI' },
    { id: 'RPC-009', location: 'Palasia', category: 'Illegal Dumping', severity: 'High', status: 'Pending', time: '30m ago', reporter: 'Kiran R.' },
    { id: 'RPC-010', location: 'Geeta Bhawan', category: 'Road Damage', severity: 'Medium', status: 'In Progress', time: '1h 30m ago', reporter: 'Deepak L.' },
    { id: 'RPC-011', location: 'Airport Road', category: 'Fallen Tree', severity: 'High', status: 'Pending', time: '2h 15m ago', reporter: 'System AI' },
    { id: 'RPC-012', location: 'Sudama Nagar', category: 'Water Leakage', severity: 'Low', status: 'Resolved', time: '5h ago', reporter: 'Pooja M.' },
    { id: 'RPC-013', location: 'Silicon City', category: 'Noise Complaint', severity: 'Medium', status: 'Pending', time: '45m ago', reporter: 'Amit K.' },
    { id: 'RPC-014', location: 'Dewas Naka', category: 'Air Pollution', severity: 'Max', status: 'Critical', time: 'Just Now', reporter: 'Automated Sensor' },
  ])

  const handleDispatch = (id: string, location: string) => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, status: 'In Progress' } : r))
    showToast(`Unit Dispatch: TRUCK-102 assigned to ${location}`, 'success')
  }

  const filteredReports = activeTab === 'All'
    ? reports
    : reports.filter(r => r.status === activeTab || (activeTab === 'Critical' && r.severity === 'Max'))

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic underline decoration-blue-500 decoration-4 underline-offset-8">Incident Reports 🚨</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-3">Direct citizen complaints and AI detection logs</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
           {['All', 'Critical', 'Pending', 'Resolved'].map((tab) => (
             <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}
             >
                {tab}
             </button>
           ))}
        </div>
      </div>

      <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-950 text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-8">Incident ID</th>
                <th className="px-10 py-8">Location / Zone</th>
                <th className="px-10 py-8">Classification</th>
                <th className="px-10 py-8">Priority</th>
                <th className="px-10 py-8">Status Signal</th>
                <th className="px-10 py-8">Reporter</th>
                <th className="px-10 py-8">Governance</th>
              </tr>
            </thead>
            <tbody className="text-sm border-t border-slate-100">
              <AnimatePresence mode="popLayout">
                {filteredReports.map((report, i) => (
                  <motion.tr
                    key={report.id}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-slate-50/80 transition-all border-b border-slate-50 last:border-none group"
                  >
                    <td className="px-10 py-8 font-black text-blue-600 group-hover:tracking-widest transition-all">#{report.id}</td>
                    <td className="px-10 py-8">
                       <p className="font-black text-slate-900">{report.location}</p>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">{report.time}</p>
                    </td>
                    <td className="px-10 py-8 text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
                       {report.category}
                    </td>
                    <td className="px-10 py-8">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black border-2 uppercase tracking-widest ${
                        report.severity === 'Max' || report.severity === 'High'
                          ? 'border-red-100 text-red-600 bg-red-50'
                          : 'border-orange-100 text-orange-600 bg-orange-50'
                      }`}>
                        {report.severity}
                      </span>
                    </td>
                    <td className="px-10 py-8">
                       <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full shadow-lg ${
                            report.status === 'Critical' ? 'bg-red-500 animate-pulse' :
                            report.status === 'In Progress' ? 'bg-blue-500 shadow-blue-500/20' :
                            report.status === 'Resolved' ? 'bg-green-500 shadow-green-500/20' : 'bg-slate-300'
                          }`}></span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">{report.status}</span>
                       </div>
                    </td>
                    <td className="px-10 py-8 font-black text-slate-400 text-[10px] uppercase tracking-tighter">{report.reporter}</td>
                    <td className="px-10 py-8">
                      {report.status === 'Resolved' ? (
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-widest italic">ARCHIVED ✅</span>
                      ) : (
                        <button
                          onClick={() => handleDispatch(report.id, report.location)}
                          className="bg-slate-900 text-white text-[10px] font-black px-6 py-3 rounded-2xl hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-all uppercase tracking-[0.2em] cursor-pointer"
                        >
                          DISPATCH
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
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
