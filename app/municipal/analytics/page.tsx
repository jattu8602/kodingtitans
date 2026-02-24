'use client'

import { motion } from 'framer-motion'
import BentoCard from '@/components/BentoCard'

export default function MunicipalAnalytics() {
  const stats = [
    { label: 'Weekly Collection', value: '142 Tons', trend: '+12%', icon: '📈' },
    { label: 'Avg Pulse Time', value: '24 mins', trend: '-5%', icon: '⚡' },
    { label: 'Recycling Target', value: '82%', trend: '+4%', icon: '♻️' },
    { label: 'Active Reports', value: '84', trend: '-15%', icon: '🚨' },
  ]

  const areaPerformance = [
    { area: 'MP Nagar', score: 94, status: 'Optimal', color: 'bg-green-500' },
    { area: 'Vijay Nagar', score: 88, status: 'Optimal', color: 'bg-green-500' },
    { area: 'Bhawarkua', score: 62, status: 'Needs Attention', color: 'bg-orange-500' },
    { area: 'Rajwada', score: 45, status: 'Critical', color: 'bg-red-500' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">City Intelligence 📈</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">Deep insights into urban waste dynamics</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-all">Export PDF</button>
           <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">LIVE FEED</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className={`text-[10px] font-black px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100">
           <div className="flex justify-between items-center mb-10">
              <h3 className="font-black text-slate-900 uppercase tracking-wider">Waste Collection Trends</h3>
              <div className="flex gap-2">
                 <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                 <div className="w-4 h-4 rounded-full bg-indigo-200"></div>
              </div>
           </div>

           <div className="h-80 w-full bg-slate-50 rounded-[2rem] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,_transparent_1px),_linear-gradient(90deg,rgba(0,0,0,0.02)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
              {/* Graphic Mockup */}
              <div className="flex items-end gap-4 h-48">
                 {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <motion.div
                       key={i}
                       initial={{ height: 0 }}
                       animate={{ height: `${h}%` }}
                       transition={{ delay: i * 0.1, duration: 1 }}
                       className="w-12 bg-gradient-to-t from-blue-600/80 to-blue-400 rounded-t-xl"
                    />
                 ))}
              </div>
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-black text-[10px] text-slate-300 uppercase tracking-[0.3em]">Week 08 - Feb 2026</p>
           </div>
        </div>

        {/* District Performance */}
        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100">
           <h3 className="font-black text-slate-900 uppercase tracking-wider mb-8">Area Scorecard</h3>
           <div className="space-y-6">
              {areaPerformance.map((item, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                       <span className="text-slate-900">{item.area}</span>
                       <span className="text-slate-400">{item.score}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                       <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className={`h-full ${item.color}`}
                       />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.status}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}
