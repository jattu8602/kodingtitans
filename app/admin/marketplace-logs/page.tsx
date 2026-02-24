'use client'

import { motion } from 'framer-motion'

export default function AdminMarketplaceLogs() {
  const transactions = [
    { id: 'TXN-8012', user: 'Rahul V.', type: 'Point Credit', amount: '+50 XP', category: 'Recycled Plastic', time: '12m ago' },
    { id: 'TXN-8015', user: 'Green Bhopal', type: 'Pickup Action', amount: '12kg', category: 'Indore, Zone 2', time: '45m ago' },
    { id: 'TXN-8018', user: 'Anjali S.', type: 'Claim Success', amount: 'Reward #04', category: 'Gift Voucher', time: '2h ago' },
    { id: 'TXN-8022', user: 'Eco Cycle', type: 'Bulk Collection', amount: '2.4 Tons', category: 'Muni Contract', time: '5h ago' },
    { id: 'TXN-8025', user: 'Amit K.', type: 'Point Sync', amount: '+120 XP', category: 'Verified Cleanup', time: 'Yesterday' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black text-white tracking-widest uppercase italic">Economic Registry 🔄</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-2">Tracking every point, reward, and waste exchange across the system</p>
        </div>
        <button className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-red-500 transition-all flex items-center gap-2 uppercase tracking-widest">
           <span>📄</span> Audit Entire Log
        </button>
      </div>

      <div className="bg-slate-950 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
        <div className="p-8 bg-white/5 flex gap-8">
           {['Exchange History', 'Reward Redemptions', 'Point Minting', 'Audit Trails'].map((tab) => (
             <button key={tab} className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-white ${tab === 'Exchange History' ? 'text-red-500' : 'text-slate-500'}`}>
                {tab}
             </button>
           ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-6">Trace ID</th>
                <th className="px-10 py-6">Initiator</th>
                <th className="px-10 py-6">Action Type</th>
                <th className="px-10 py-6">Outcome / Value</th>
                <th className="px-10 py-6">Classification</th>
                <th className="px-10 py-6 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((txn, i) => (
                <motion.tr
                  key={txn.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-10 py-8 font-black text-slate-500 text-xs tracking-widest group-hover:text-red-500 transition-colors">#{txn.id}</td>
                  <td className="px-10 py-8 font-black text-white text-xs uppercase tracking-widest">{txn.user}</td>
                  <td className="px-10 py-8">
                     <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10 ${
                       txn.type === 'Point Credit' ? 'text-green-500 bg-green-500/10' :
                       txn.type === 'Pickup Action' ? 'text-blue-500 bg-blue-500/10' :
                       'text-yellow-500 bg-yellow-500/10'
                     }`}>
                        {txn.type}
                     </span>
                  </td>
                  <td className="px-10 py-8">
                    <p className="text-xl font-black text-white italic tracking-tighter">{txn.amount}</p>
                  </td>
                  <td className="px-10 py-8 font-bold text-slate-500 text-xs uppercase tracking-widest">{txn.category}</td>
                  <td className="px-10 py-8 text-right font-black text-slate-600 text-[10px] uppercase tracking-widest">{txn.time}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
