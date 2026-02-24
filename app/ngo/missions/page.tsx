'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function NGOMissions() {
  const { showToast } = useToast()

  const [missions, setMissions] = useState([
    { id: 1, title: 'Saraswati River Cleanup', date: 'Mar 12, 2026', zone: 'Sector 5', volunteers: 42, target: 100, status: 'Recruiting', intensity: 'High' },
    { id: 2, title: 'Market Waste Drive', date: 'Mar 15, 2026', zone: 'Rajwada', volunteers: 15, target: 30, status: 'Setup', intensity: 'Medium' },
    { id: 3, title: 'Bada Talab Shore Sweep', date: 'Mar 20, 2026', zone: 'Lake Area', volunteers: 0, target: 200, status: 'Planning', intensity: 'Max' },
    { id: 4, title: 'E-Waste Awareness', date: 'Mar 25, 2026', zone: 'Digital Colony', volunteers: 8, target: 15, status: 'Recruiting', intensity: 'Low' },
    { id: 5, title: 'Indore Green Corridor', date: 'Apr 02, 2026', zone: 'Zone A', volunteers: 25, target: 50, status: 'Setup', intensity: 'Medium' },
    { id: 6, title: 'School Education Drive', date: 'Apr 10, 2026', zone: 'City Wide', volunteers: 12, target: 20, status: 'Planning', intensity: 'Low' },
    { id: 7, title: 'Plastic Recycling Campaign', date: 'Apr 15, 2026', zone: 'Industrial Area', volunteers: 30, target: 60, status: 'Recruiting', intensity: 'High' },
    { id: 8, title: 'Urban Gardening Project', date: 'Apr 22, 2026', zone: 'Green Park', volunteers: 18, target: 25, status: 'Setup', intensity: 'Medium' },
    { id: 9, title: 'River Bank Restoration', date: 'May 01, 2026', zone: 'Riverside', volunteers: 5, target: 150, status: 'Planning', intensity: 'Max' },
    { id: 10, title: 'Community Tree Planting', date: 'May 10, 2026', zone: 'Residential Blocks', volunteers: 50, target: 100, status: 'Recruiting', intensity: 'Medium' },
  ])

  const handleLaunch = () => {
    showToast('Mission Intake form active. Validating resources...', 'info')
  }

  const handleManage = (title: string) => {
    showToast(`Opening Mission Hub for: ${title}`, 'success')
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tighter uppercase italic">Mission Control 🧹</h1>
          <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.4em] mt-1">Organize and manage environmental cleanup drives</p>
        </div>
        <button
          onClick={handleLaunch}
          className="bg-indigo-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-xs hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest"
        >
           <span>➕</span> Initiate New Mission
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {missions.map((mission, i) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[3.5rem] border border-indigo-50 shadow-xl group hover:shadow-2xl transition-all"
          >
            <div className="flex justify-between items-start mb-8">
               <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl text-3xl text-white group-hover:scale-110 shadow-lg shadow-indigo-200 transition-transform">🧹</div>
               <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                 mission.status === 'Recruiting' ? 'bg-green-50 text-green-600 border border-green-100' :
                 mission.status === 'Setup' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-50 text-slate-400 border border-slate-100'
               }`}>
                 {mission.status}
               </span>
            </div>

            <h3 className="text-2xl font-black text-indigo-950 mb-2 leading-none">{mission.title}</h3>
            <div className="flex items-center gap-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-8 italic">
               <span className="flex items-center gap-1">📍 {mission.zone}</span>
               <span className="flex items-center gap-1">📅 {mission.date}</span>
            </div>

            <div className="space-y-6">
              <div>
                 <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Volunteers Committed</span>
                    <span className="text-xs font-black text-indigo-950 underline decoration-indigo-500 decoration-2">{mission.volunteers}/{mission.target}</span>
                 </div>
                 <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(mission.volunteers / mission.target) * 100}%` }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="h-full bg-gradient-to-r from-indigo-600 to-blue-500"
                    />
                 </div>
              </div>

              <div className="flex gap-3">
                 <button
                  onClick={() => handleManage(mission.title)}
                  className="flex-1 py-4 bg-indigo-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-900/10 cursor-pointer"
                 >
                   Manage Drive
                 </button>
                 <button
                  onClick={() => showToast('Syncing broadcast channels...', 'info')}
                  className="flex-1 py-4 bg-white border border-indigo-100 text-indigo-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all cursor-pointer"
                 >
                   Broadcast Info
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
