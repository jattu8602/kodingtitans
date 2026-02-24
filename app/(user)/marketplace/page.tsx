'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Marketplace() {
  const categories = ['All', 'Plastic', 'Metal', 'Paper', 'Electronic', 'Glass']
  const listings = [
    { id: 1, title: 'Mixed PET Bottles', weight: '12kg', points: 45, category: 'Plastic', urgency: 'Low', image: '🍾' },
    { id: 2, title: 'Cardboard Boxes', weight: '25kg', points: 30, category: 'Paper', urgency: 'Medium', image: '📦' },
    { id: 3, title: 'Copper Wires', weight: '2kg', points: 150, category: 'Metal', urgency: 'High', image: '🔌' },
    { id: 4, title: 'Aluminum Cans', weight: '5kg', points: 60, category: 'Metal', urgency: 'Low', image: '🥤' },
    { id: 5, title: 'Old Textbooks', weight: '15kg', points: 25, category: 'Paper', urgency: 'Medium', image: '📚' },
    { id: 6, title: 'Glass Jars', weight: '8kg', points: 40, category: 'Glass', urgency: 'Low', image: '🏺' },
  ]

  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end items-center">
        <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-2 uppercase tracking-widest">
           <span>➕</span> List New Item
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Waste Exchange Marketplace ♻️</h1>
          <p className="text-slate-500 text-lg">Turn your recyclable waste into points and help the environment.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button key={cat} className={`px-6 py-2 rounded-full font-bold border transition-all ${cat === 'All' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 group"
            >
              <div className="h-48 bg-slate-100 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                {item.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-green-600">+{item.points}</p>
                    <p className="text-[10px] text-slate-400 font-bold">PTS</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1">
                    <span>⚖️</span> {item.weight}
                  </div>
                  <div className="flex items-center gap-1">
                     <span className={`w-2 h-2 rounded-full ${item.urgency === 'High' ? 'bg-red-500' : item.urgency === 'Medium' ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                     {item.urgency} Priority
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors">
                    Claim Pickup
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                    📍
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer or CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Total Recycled through Platform</h2>
            <div className="flex justify-center gap-12 mt-8">
              <div>
                <p className="text-5xl font-black">1.8T</p>
                <p className="text-sm opacity-80 mt-2 uppercase font-bold tracking-widest">Plastic</p>
              </div>
              <div>
                <p className="text-5xl font-black">4.2T</p>
                <p className="text-sm opacity-80 mt-2 uppercase font-bold tracking-widest">Paper</p>
              </div>
              <div>
                <p className="text-5xl font-black">850kg</p>
                <p className="text-sm opacity-80 mt-2 uppercase font-bold tracking-widest">Metal</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  )
}
