'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function NGODashboard() {
  return (
    <div className="min-h-screen bg-emerald-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-900 text-white hidden md:flex flex-col p-6 sticky top-0 h-screen">
        <Link href="/" className="mb-12">
          <Logo />
        </Link>
        <nav className="flex-1 space-y-4">
          {['Dashboard', 'Marketplace', 'Pickup Requests', 'Impact Stats', 'Partners', 'Settings'].map((item) => (
            <div key={item} className={`p-3 rounded-lg cursor-pointer transition-colors ${item === 'Dashboard' ? 'bg-emerald-600 text-white' : 'hover:bg-emerald-800 text-emerald-400'}`}>
              {item}
            </div>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-emerald-800">
          <p className="text-xs text-emerald-500 mb-2">Logged in as</p>
          <p className="text-sm font-semibold">GreenTech Recyclers</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900 text-center md:text-left">NGO & Recycler Portal ♻️</h1>
            <p className="text-emerald-700">Connecting waste to wealth</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-emerald-100">
              <p className="text-[10px] font-bold text-emerald-600 uppercase">Recycled this month</p>
              <p className="text-xl font-bold text-slate-800">2.4 Tons 📦</p>
            </div>
          </div>
        </header>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-3xl text-white shadow-lg shadow-emerald-200 col-span-1 md:col-span-2">
             <h2 className="text-2xl font-bold mb-2">New Pickup Requests Available 🚛</h2>
             <p className="opacity-90 mb-6 font-medium">There are 12 new listings in Vijay Nagar area waiting for collection.</p>
             <Link href="/marketplace" className="inline-block px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors">
               Explore Marketplace
             </Link>
           </div>
           <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100 flex flex-col justify-center items-center text-center">
              <span className="text-4xl mb-2">🌱</span>
              <p className="text-emerald-800 font-bold text-2xl">450kg</p>
              <p className="text-emerald-500 text-sm">Carbon Offset This Week</p>
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
      </main>
    </div>
  )
}
