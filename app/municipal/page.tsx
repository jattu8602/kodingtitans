'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function MunicipalDashboard() {
  const reports = [
    { id: 'RPC-001', location: 'Vijay Nagar Square', category: 'Overflowing Bin', severity: 'High', status: 'Pending', time: '10m ago' },
    { id: 'RPC-002', location: 'Rajwada Market', category: 'Scattered Plastic', severity: 'Medium', status: 'In Progress', time: '45m ago' },
    { id: 'RPC-003', location: 'Bhawarkua', category: 'Medical Waste', severity: 'High', status: 'Pending', time: '1h ago' },
    { id: 'RPC-004', location: 'Annapurna Rd', category: 'General Garbage', severity: 'Low', status: 'Resolved', time: '3h ago' },
  ]

  return (
    <>
      {/* Header Info (Previously in sidebar) */}
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Municipal Dashboard 🏛️</h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Real-time city cleanliness monitoring</p>
      </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Incidents', value: '1,284', color: 'blue', icon: '🚨' },
            { label: 'Pending Action', value: '42', color: 'red', icon: '⏳' },
            { label: 'Fleet Active', value: '18/25', color: 'green', icon: '🚛' },
            { label: 'Cleanup Rate', value: '94%', color: 'purple', icon: '✅' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className={`text-xs font-bold text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded`}>Live</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Heatmap Visualization Mockup */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-md border border-slate-100 overflow-hidden relative group">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span>🗺️</span> Waste Distribution Heatmap</h3>
              <select className="text-sm bg-slate-50 border-none rounded-lg p-2 outline-none">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            <div className="bg-slate-50 h-96 rounded-2xl relative overflow-hidden flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-700">
               {/* Decorative Heatmap UI */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(239,68,68,1)_0%,_transparent_50%)]"></div>
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,_rgba(245,158,11,1)_0%,_transparent_40%)]"></div>
               <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_80%_30%,_rgba(239,68,68,1)_0%,_transparent_40%)]"></div>

               <p className="relative z-10 text-slate-400 font-medium">GIS Data Visualization Active</p>

               {/* Hotspot Markers */}
               <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-1/4 left-1/2 w-12 h-12 bg-red-500/20 rounded-full border border-red-500 flex items-center justify-center text-xs text-red-600 font-bold italic">HOT</motion.div>
               <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2, delay: 0.7 }} className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-orange-500/20 rounded-full border border-orange-500 flex items-center justify-center text-xs text-orange-600 font-bold italic">MEDIUM</motion.div>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><span>🚛</span> Fleet Status</h3>
            <div className="space-y-6">
              {[
                { id: 'T-102', driver: 'Suresh Kumar', status: 'En Route', zone: 'Zone A', battery: '84%' },
                { id: 'T-105', driver: 'Mahesh Pal', status: 'Collecting', zone: 'Zone B', battery: '62%' },
                { id: 'T-108', driver: 'Amit Singh', status: 'IDLE', zone: 'Station 1', battery: '100%' }
              ].map((truck, i) => (
                <div key={i} className="flex flex-col gap-2 p-3 bg-slate-50 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">{truck.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${truck.status === 'En Route' ? 'bg-blue-100 text-blue-700' : truck.status === 'Collecting' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                      {truck.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{truck.driver} | {truck.zone}</span>
                    <span className="font-medium">⚡ {truck.battery}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Priority Table */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900">Priority Complaints</h3>
            <button className="text-sm font-bold text-blue-600 hover:underline">Download CSV 📊</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Severity</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">{report.id}</td>
                    <td className="px-6 py-4 font-medium">{report.location}</td>
                    <td className="px-6 py-4 text-slate-600">{report.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${report.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>
                        {report.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`text-[10px] font-bold ${report.status === 'Resolved' ? 'text-green-600' : report.status === 'In Progress' ? 'text-blue-600' : 'text-slate-400'}`}>
                        {report.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{report.time}</td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded hover:bg-blue-700">ASSIGN</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}
