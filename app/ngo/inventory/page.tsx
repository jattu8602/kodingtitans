'use client'

import { motion } from 'framer-motion'

export default function NGOInventory() {
  const inventory = [
    { item: 'Industrial Gloves', stock: 120, unit: 'pairs', status: 'Optimal', icon: '🧤' },
    { item: 'Bio-Degradable Bags', stock: 450, unit: 'pcs', status: 'Optimal', icon: '🛍️' },
    { item: 'Litter Pickers', stock: 15, unit: 'units', status: 'Low Stock', icon: '🏗️' },
    { item: 'N95 Masks', stock: 240, unit: 'pcs', status: 'Optimal', icon: '😷' },
    { item: 'Sanitary Sprays', stock: 8, unit: 'bottles', status: 'Critical', icon: '🧴' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tighter uppercase">Inventory Log 📦</h1>
          <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mt-1">Track cleanup gear, supplies, and asset distribution</p>
        </div>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-indigo-600 transition-all flex items-center gap-2 uppercase tracking-widest">
           <span>📦</span> Update Stock
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inventory.map((item, i) => (
          <motion.div
            key={item.item}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl border border-indigo-50 group hover:border-indigo-200 transition-all"
          >
            <div className="flex justify-between items-start mb-8">
               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
               <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                 item.status === 'Optimal' ? 'bg-green-50 text-green-600' :
                 item.status === 'Low Stock' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
               }`}>
                 {item.status}
               </span>
            </div>

            <h3 className="text-xl font-black text-indigo-950 uppercase tracking-tight">{item.item}</h3>
            <div className="mt-6 flex items-end gap-2">
               <span className="text-4xl font-black text-indigo-600">{item.stock}</span>
               <span className="text-xs font-bold text-slate-400 uppercase mb-2">{item.unit}</span>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex gap-2">
               <button className="flex-1 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">Request More</button>
               <button className="px-4 py-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">⚙️</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
