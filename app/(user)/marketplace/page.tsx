'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function Marketplace() {
  const { showToast } = useToast()
  const categories = ['All', 'Plastic', 'Metal', 'Paper', 'Electronic', 'Glass']

  const [listings, setListings] = useState([
    { id: 1, title: 'Mixed PET Bottles', weight: '12kg', points: 45, category: 'Plastic', urgency: 'Low', image: '🍾' },
    { id: 2, title: 'Cardboard Boxes', weight: '25kg', points: 30, category: 'Paper', urgency: 'Medium', image: '📦' },
    { id: 3, title: 'Copper Wires', weight: '2kg', points: 150, category: 'Metal', urgency: 'High', image: '🔌' },
    { id: 4, title: 'Aluminum Cans', weight: '5kg', points: 60, category: 'Metal', urgency: 'Low', image: '🥤' },
    { id: 5, title: 'Old Textbooks', weight: '15kg', points: 25, category: 'Paper', urgency: 'Medium', image: '📚' },
    { id: 6, title: 'Glass Jars', weight: '8kg', points: 40, category: 'Glass', urgency: 'Low', image: '🏺' },
    { id: 7, title: 'Steel Scrap', weight: '30kg', points: 200, category: 'Metal', urgency: 'High', image: '🏗️' },
    { id: 8, title: 'Magazines', weight: '10kg', points: 20, category: 'Paper', urgency: 'Low', image: '🗞️' },
    { id: 9, title: 'Broken Monitors', weight: '18kg', points: 120, category: 'Electronic', urgency: 'Medium', image: '🖥️' },
    { id: 10, title: 'HDPE Milk Jugs', weight: '7kg', points: 35, category: 'Plastic', urgency: 'Medium', image: '🥛' },
    { id: 11, title: 'Newspapers', weight: '20kg', points: 28, category: 'Paper', urgency: 'Low', image: '📰' },
    { id: 12, title: 'Scrap Aluminum', weight: '10kg', points: 80, category: 'Metal', urgency: 'Medium', image: '⚙️' },
    { id: 13, title: 'PET Water Bottles', weight: '15kg', points: 50, category: 'Plastic', urgency: 'High', image: '💧' },
    { id: 14, title: 'Mixed Paper', weight: '30kg', points: 35, category: 'Paper', urgency: 'Low', image: '📄' },
    { id: 15, title: 'Circuit Boards', weight: '3kg', points: 250, category: 'Electronic', urgency: 'High', image: '⚡' },
  ])

  const [activeCategory, setActiveCategory] = useState('All')

  const handleClaim = (id: number, title: string) => {
    setListings(prev => prev.filter(item => item.id !== id))
    showToast(`Claimed: ${title}. Pickup dispatched!`, 'success')
  }

  const filteredListings = activeCategory === 'All'
    ? listings
    : listings.filter(item => item.category === activeCategory)

  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end items-center">
        <button
          onClick={() => showToast('Listing functionality coming soon!', 'info')}
          className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-2 uppercase tracking-widest cursor-pointer"
        >
           <span>➕</span> List New Item
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">Waste <span className="text-blue-600">Exchange</span> Marketplace ♻️</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Turn your recyclable waste into points and help the environment.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest border transition-all ${activeCategory === cat ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-400 border-slate-100 hover:border-blue-400 hover:text-blue-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 group flex flex-col"
            >
              <div className="h-48 bg-slate-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                {item.image}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl mb-3 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-green-600 leading-none">+{item.points}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">PTS</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-base text-slate-400">⚖️</span> {item.weight}
                  </div>
                  <div className="flex items-center gap-1">
                     <span className={`w-2 h-2 rounded-full animate-pulse ${item.urgency === 'High' ? 'bg-red-500' : item.urgency === 'Medium' ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                     {item.urgency} Priority
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleClaim(item.id, item.title)}
                    className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    Claim Pickup
                  </button>
                  <button
                    onClick={() => showToast(`Location: ${item.title} verified.`, 'info')}
                    className="w-14 h-14 flex items-center justify-center border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer text-xl"
                  >
                    📍
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {listings.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-black uppercase tracking-[0.3em]">All signals cleared. Marketplace empty.</p>
          </div>
        )}

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
