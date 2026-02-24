'use client'

import { motion } from 'framer-motion'

export default function MunicipalVehicles() {
  const fleet = [
    { id: 'T-102', type: 'Compactor', driver: 'Suresh Kumar', status: 'En Route', zone: 'Zone A', mission: 'Market Cleanup', battery: '84%' },
    { id: 'T-105', type: 'Mini-Truck', driver: 'Mahesh Pal', status: 'Collecting', zone: 'Zone B', mission: 'Residential Pick-up', battery: '62%' },
    { id: 'T-108', type: 'E-Loader', driver: 'Amit Singh', status: 'IDLE', zone: 'Station 1', mission: 'Standby', battery: '100%' },
    { id: 'T-112', type: 'Compactor', driver: 'Vikram J.', status: 'Charging', zone: 'Depot North', mission: 'Maintenance', battery: '12%' },
    { id: 'T-115', type: 'Street Sweeper', driver: 'Sanjay D.', status: 'En Route', zone: 'Zone C', mission: 'Early Shift', battery: '95%' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Fleet Management 🚛</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">Live monitoring and dispatch of municipal garbage trucks</p>
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-xs hover:shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-2 uppercase tracking-widest">
           <span>🛰️</span> Track All Live
        </button>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fleet.map((truck, i) => (
          <motion.div
            key={truck.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 group relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150 ${truck.status === 'En Route' ? 'bg-blue-500' : truck.status === 'Charging' ? 'bg-red-500' : 'bg-green-500'}`}></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <p className="text-3xl font-black text-slate-900">{truck.id}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{truck.type}</p>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                truck.status === 'En Route' ? 'bg-blue-50 text-blue-600' :
                truck.status === 'Charging' ? 'bg-red-50 text-red-600' :
                'bg-green-50 text-green-600'
              }`}>
                {truck.status}
              </div>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
               <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase">Driver</span>
                  <span className="text-slate-900">{truck.driver}</span>
               </div>
               <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase">Zone</span>
                  <span className="text-slate-900">{truck.zone}</span>
               </div>
               <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase">Mission</span>
                  <span className="text-blue-600">{truck.mission}</span>
               </div>
            </div>

            <div className="relative pt-4 border-t border-slate-50 relative z-10">
               <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Energy Status</span>
                  <span className="text-xs font-black text-slate-900">{truck.battery}</span>
               </div>
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: truck.battery }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className={`h-full ${parseInt(truck.battery) < 20 ? 'bg-red-500' : 'bg-green-500'}`}
                  />
               </div>
            </div>

            <button className="w-full mt-8 py-3 bg-slate-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
               Direct Connect 📡
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
