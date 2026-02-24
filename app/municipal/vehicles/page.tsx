'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function MunicipalVehicles() {
  const { showToast } = useToast()

  const [vehicles, setVehicles] = useState([
    { id: 'TRUCK-101', type: 'Compactor', driver: 'Sohan Lal', status: 'On Route', fuel: '65%', location: 'Sector 5', health: 'Optimal' },
    { id: 'TRUCK-102', type: 'Dumper', driver: 'Manoj P.', status: 'Idle', fuel: '92%', location: 'Main Depot', health: 'Service Due' },
    { id: 'TRUCK-103', type: 'Compactor', driver: 'Karan S.', status: 'On Route', fuel: '40%', location: 'Rajwada', health: 'Optimal' },
    { id: 'TRUCK-104', type: 'E-Loader', driver: 'Anil V.', status: 'Charging', fuel: '15%', location: 'Station Beta', health: 'Optimal' },
    { id: 'TRUCK-105', type: 'Compactor', driver: 'Suresh D.', status: 'On Route', health: 'Optimal', fuel: '55%', location: 'Vijay Nagar' },
    { id: 'TRUCK-106', type: 'Sweeper', driver: 'Vikram B.', status: 'Idle', health: 'Optimal', fuel: '80%', location: 'Depot 2' },
  ])

  const handleMaintenance = (id: string) => {
    showToast(`Maintenance Ticket generated for ${id}. Service unit assigned.`, 'warning')
  }

  const handlePing = (id: string) => {
    showToast(`Signal Sync: Receiving live telemetry from ${id}...`, 'info')
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic underline decoration-blue-500 decoration-8 underline-offset-8">Fleet Dynamics 🚛</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-3">Active Vehicle Tracking & Logistics Management</p>
        </div>
        <button
          onClick={() => showToast('Fleet Expansion Manifest active.', 'info')}
          className="bg-slate-900 text-white px-10 py-4 rounded-[1.5rem] font-black text-xs hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest shadow-xl shadow-slate-200"
        >
           <span>➕</span> Register New Unit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-xl group hover:shadow-2xl transition-all relative"
          >
             <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                   {v.type === 'Compactor' ? '🚛' : v.type === 'E-Loader' ? '⚡' : '🧹'}
                </div>
                <div className="flex flex-col items-end">
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     v.status === 'On Route' ? 'bg-blue-50 text-blue-600 border border-blue-100 animate-pulse' :
                     v.status === 'Idle' ? 'bg-slate-50 text-slate-400 border border-slate-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                   }`}>
                     {v.status}
                   </span>
                   <span className={`text-[8px] font-black uppercase tracking-[0.2em] mt-2 ${v.health === 'Optimal' ? 'text-green-500' : 'text-red-500 animate-bounce'}`}>
                      {v.health} Signal
                   </span>
                </div>
             </div>

             <h3 className="text-2xl font-black text-slate-950 mb-1 leading-none">{v.id}</h3>
             <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] mb-8 italic">{v.type} // {v.driver}</p>

             <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                   <span className="text-slate-400">Current Zone</span>
                   <span className="text-slate-950">📍 {v.location}</span>
                </div>
                <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                   <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: v.fuel }}
                    className={`h-full ${parseInt(v.fuel) < 30 ? 'bg-red-500' : 'bg-blue-600'}`}
                   />
                </div>
                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                   <span>Energy / Fuel</span>
                   <span>{v.fuel}</span>
                </div>
             </div>

             <div className="flex gap-2">
                <button
                  onClick={() => handlePing(v.id)}
                  className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 cursor-pointer"
                >
                  Ping Unit
                </button>
                <button
                  onClick={() => handleMaintenance(v.id)}
                  className="w-14 h-14 flex items-center justify-center border border-slate-100 rounded-2xl hover:bg-red-50 text-slate-400 hover:text-red-600 transition-all cursor-pointer text-xl"
                >
                  🔧
                </button>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
