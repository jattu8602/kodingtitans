'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/Toast'

export default function NGOInventory() {
  const { showToast } = useToast()

  const [items, setItems] = useState([
    { id: 'SKU-001', name: 'Reflective Safety Vests', quantity: 85, unit: 'pcs', status: 'In Stock', category: 'PPE' },
    { id: 'SKU-002', name: 'Heavy Duty Bin Bags', quantity: 1200, unit: 'units', status: 'Low', category: 'Collection' },
    { id: 'SKU-003', name: 'Gloves (Nitrile)', quantity: 450, unit: 'pairs', status: 'In Stock', category: 'PPE' },
    { id: 'SKU-004', name: 'Handheld Litter Pickers', quantity: 24, unit: 'pcs', status: 'Critical', category: 'Tools' },
    { id: 'SKU-005', name: 'First Aid Modules', quantity: 15, unit: 'kits', status: 'In Stock', category: 'Safety' },
    { id: 'SKU-006', name: 'Digital Scale (Mobile)', quantity: 4, unit: 'sets', status: 'In Stock', category: 'Measurement' },
  ])

  const handleDispatch = (name: string) => {
    showToast(`Logistics Alert: ${name} dispatched to mission field.`, 'success')
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tighter uppercase italic underline decoration-indigo-600 decoration-8 underline-offset-8">Resource Ledger 📦</h1>
          <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.4em] mt-3">Mission Supply & Equipment Inventory Control</p>
        </div>
        <button
          onClick={() => showToast('Procurement Request signal active.', 'info')}
          className="bg-indigo-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-xs hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 uppercase tracking-widest shadow-xl shadow-indigo-200"
        >
           <span>➕</span> Order Supplies
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[3rem] border border-indigo-50 shadow-xl group hover:shadow-2xl transition-all relative overflow-hidden"
          >
             <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                   {item.category === 'PPE' ? '🛡️' : item.category === 'Collection' ? '🛍️' : '🛠️'}
                </div>
                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                  item.status === 'In Stock' ? 'bg-green-50 text-green-600 border-green-100' :
                  item.status === 'Low' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-red-50 text-red-600 border-red-100 animate-pulse'
                }`}>
                  {item.status}
                </span>
             </div>

             <h3 className="text-xl font-black text-indigo-950 mb-1">{item.name}</h3>
             <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6 italic">{item.id} // {item.category}</p>

             <div className="flex items-end justify-between border-t border-indigo-50 pt-6">
                <div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Available Quantity</p>
                   <p className="text-3xl font-black text-indigo-950 tracking-tighter">{item.quantity} <span className="text-sm text-slate-400 uppercase">{item.unit}</span></p>
                </div>
                <button
                  onClick={() => handleDispatch(item.name)}
                  className="px-6 py-3 bg-indigo-950 text-white rounded-2xl font-black text-[9px] uppercase tracking-widest hover:bg-indigo-600 transition-all"
                >
                  Dispatch
                </button>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
