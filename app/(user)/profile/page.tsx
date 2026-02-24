'use client'

import { motion } from 'framer-motion'
import BentoCard from '@/components/BentoCard'

export default function Profile() {
  const achievements = [
    { title: 'Spartan Cleaner', desc: 'Reported 50 issues', icon: '🛡️', date: 'Feb 2026' },
    { title: 'Eco Warrior', desc: 'Saved 100kg CO₂', icon: '🌿', date: 'Jan 2026' },
    { title: 'City Guardian', desc: 'Top 10 Ranker', icon: '🎖️', date: 'Dec 2025' },
  ]

  const stats = [
    { label: 'Total Reports', value: '124', icon: '📝' },
    { label: 'Points Earned', value: '4,250', icon: '💎' },
    { label: 'Lives Impacted', value: '1,200', icon: '🤝' },
    { label: 'Cleanup Streak', value: '12 Days', icon: '🔥' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Profile Hero */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-5xl text-white shadow-lg">
              👤
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-black">
              LIVE
            </div>
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-black text-slate-900">Anjali Sharma</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Tier 4: Master Guardian
            </p>
            <div className="flex items-center gap-4 mt-4">
              <button className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs hover:bg-blue-600 transition-all">EDIT PROFILE</button>
              <button className="px-6 py-2 border-2 border-slate-100 rounded-xl font-bold text-xs text-slate-400 hover:text-red-500 hover:border-red-100 transition-all">LOGOUT</button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span>🎖️</span> Hall of Fame
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((ach, i) => (
                <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-md border border-slate-100 flex items-center gap-4 hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {ach.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{ach.title}</h3>
                    <p className="text-xs text-slate-400 font-medium mb-1">{ach.desc}</p>
                    <p className="text-[8px] font-black text-blue-600 uppercase tracking-tighter">{ach.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span>📊</span> Recent Missions
            </h2>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 divide-y divide-slate-100">
              {[
                { type: 'Report', label: 'Waste at MP Nagar', pts: '+50 XP', time: '2h ago' },
                { type: 'Recycle', label: '10kg PET Bottles', pts: '+120 XP', time: '5h ago' },
                { type: 'Community', label: 'Cleaned Sector 4', pts: '+200 XP', time: 'Yesterday' },
              ].map((activity, i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{activity.label}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{activity.type} • {activity.time}</p>
                  </div>
                  <span className="text-blue-600 font-black text-sm">{activity.pts}</span>
                </div>
              ))}
              <button className="w-full pt-6 text-xs font-black text-slate-300 hover:text-blue-600 uppercase tracking-widest transition-all">View All Activity</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
