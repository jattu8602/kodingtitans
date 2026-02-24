'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function NGODashboard() {
  return (
    <>
      {/* NGO Header Info */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-indigo-950 tracking-tighter uppercase italic">Impact Tower ♻️</h1>
        <p className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mt-2">Connecting real-world waste collection to community impact</p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
         <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-12 rounded-[4rem] text-white shadow-2xl shadow-indigo-200 col-span-1 md:col-span-2 relative overflow-hidden group">
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-3">Priority Pickup Signals Available 🚛</h2>
              <p className="opacity-80 mb-10 font-black uppercase tracking-widest text-[10px]">There are 12 high-priority listings in Sector 5 waiting for collection.</p>
              <Link href="/marketplace" className="inline-block px-12 py-5 bg-white text-indigo-900 font-black rounded-2xl hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-[10px]">
                Explore Marketplace ❱
              </Link>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
         </div>
         <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-indigo-50 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-6xl mb-6 relative z-10 transition-transform group-hover:scale-110">🌱</span>
            <p className="text-indigo-950 font-black text-5xl mt-2 relative z-10">450<span className="text-xl uppercase tracking-tighter">kg</span></p>
            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mt-4 relative z-10">Carbon Offset This Week</p>
         </div>
      </div>

        <div className="grid lg:grid-cols-2 gap-8">
           {/* Recyclables List */}
           <div className="bg-white p-6 rounded-3xl shadow-md border border-emerald-100">
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold text-slate-900">Featured Recyclables</h3>
               <span className="text-emerald-600 text-sm font-bold">Newest First ↓</span>
             </div>
             <div className="space-y-4">
                {[
                  { type: 'Pet Bottles', weight: '24kg', loc: 'Indore, Sector 5', color: 'blue' },
                  { type: 'Old Newspapers', weight: '85kg', loc: 'Annapurna', color: 'orange' },
                  { type: 'Electronic Boards', weight: '4k units', loc: 'Industrial Area', color: 'purple' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-slate-50 rounded-2xl hover:bg-emerald-50/50 transition-all cursor-pointer">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center text-xl`}>📦</div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-800">{item.type}</p>
                      <p className="text-xs text-slate-500">{item.loc}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-600">{item.weight}</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Offer</p>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-3 text-emerald-600 font-bold text-sm hover:underline uppercase tracking-widest">View More Listings</button>
           </div>

           {/* Partner Network */}
           <div className="bg-white p-6 rounded-3xl shadow-md border border-emerald-100 overflow-hidden relative group">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Partner Contribution 🤝</h3>
              <div className="space-y-6">
                 {[
                   { name: 'EcoCycle Ltd', contribution: '1.2T', progress: 85 },
                   { name: 'CleanCity Foundation', contribution: '850kg', progress: 62 },
                   { name: 'PurePlastics NGO', contribution: '420kg', progress: 40 }
                 ].map((p, i) => (
                   <div key={i} className="space-y-2">
                     <div className="flex justify-between items-center text-sm">
                       <span className="font-bold text-slate-700">{p.name}</span>
                       <span className="font-bold text-emerald-600">{p.contribution}</span>
                     </div>
                     <div className="w-full h-2 bg-slate-100 rounded-full">
                       <motion.div initial={{ width: 0 }} animate={{ width: `${p.progress}%` }} className="h-full bg-emerald-500 rounded-full"></motion.div>
                     </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
    </>
  )
}
