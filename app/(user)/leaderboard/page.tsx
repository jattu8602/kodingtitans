'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Leaderboard() {
  const topThree = [
    { rank: 2, name: 'Rahul Verma', points: 3890, avatar: '🥈', color: 'slate-400', level: 'Master' },
    { rank: 1, name: 'Anjali Sharma', points: 4250, avatar: '🥇', color: 'blue-600', level: 'Grand Master' },
    { rank: 3, name: 'Priya Das', points: 3420, avatar: '🥉', color: 'orange-400', level: 'Expert' },
  ]

  const others = [
    { rank: 4, name: 'Aman Gupta', points: 2980, badges: ['🔥', '♻️'], level: 'Veteran' },
    { rank: 5, name: 'Neha Khan', points: 2750, badges: ['🌟'], level: 'Veteran' },
    { rank: 6, name: 'Vikram Singh', points: 2100, badges: ['🛠️'], level: 'Elite' },
    { rank: 7, name: 'Sanya Malhotra', points: 1950, badges: [], level: 'Elite' },
    { rank: 8, name: 'Karthik Aryan', points: 1820, badges: ['🌍'], level: 'Guardian' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block bg-blue-600 text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-blue-500/30"
          >
            Elite Rankings
          </motion.div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Hall of Guardians</h1>
          <p className="text-slate-400 font-bold max-w-xl mx-auto uppercase tracking-widest text-[10px]">
             The top protectors of Bhopal city cleanliness. Every report matters.
          </p>
        </div>

        {/* Podium Design */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 pt-12">
          {topThree.map((user, i) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: 'spring' }}
              className={`relative flex flex-col items-center bg-white rounded-[3rem] p-8 shadow-2xl border-b-[12px] border-${user.color} ${
                user.rank === 1
                  ? 'w-full md:w-80 h-[28rem] order-1 md:order-2 z-10 md:-translate-y-8 bg-gradient-to-b from-white to-blue-50/50'
                  : 'w-full md:w-64 h-[24rem] order-2 md:order-1'
              }`}
            >
              {user.rank === 1 && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  CHAMPION
                </div>
              )}

              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                {user.avatar}
              </div>

              <h3 className="text-2xl font-black text-slate-900 text-center mb-1">{user.name}</h3>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 px-3 py-1 bg-blue-50 rounded-full">{user.level}</p>

              <div className="mt-auto text-center">
                 <p className="text-4xl font-black text-slate-900">{user.points.toLocaleString()}</p>
                 <p className="text-[10px] text-slate-400 font-extrabold tracking-[0.2em] uppercase">Guardian XP</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* List Section */}
        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="px-10 py-8 bg-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Guardian Directory</span>
            <div className="flex bg-white/10 p-1 rounded-2xl">
               {['Weekly', 'Monthly', 'All Time'].map((tab) => (
                 <button key={tab} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'Weekly' ? 'bg-white text-slate-900 shadow-lg' : 'text-white/50 hover:text-white'}`}>
                    {tab}
                 </button>
               ))}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {others.map((user, i) => (
              <motion.div
                key={user.rank}
                whileHover={{ backgroundColor: '#f8fafc', x: 10 }}
                className="px-10 py-6 flex items-center gap-8 transition-all group"
              >
                <span className="w-12 text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors italic">#{user.rank}</span>
                <div className="w-14 h-14 bg-slate-100 rounded-[1.25rem] flex items-center justify-center text-2xl shadow-inner group-hover:bg-white group-hover:shadow-md transition-all">👤</div>

                <div className="flex-1">
                  <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{user.name}</h4>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{user.level}</p>
                </div>

                <div className="hidden sm:flex gap-2">
                   {user.badges.map((b, i) => (
                     <span key={i} className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all border border-slate-100">{b}</span>
                   ))}
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-xl font-black text-slate-900">{user.points.toLocaleString()}</p>
                  <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Points</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-10 bg-slate-50 border-t border-slate-100 text-center">
             <button className="text-xs font-black text-slate-400 hover:text-blue-600 transition-all uppercase tracking-[0.2em]">Explore More Guardians ❱</button>
          </div>
        </div>

        {/* Rewards Footer */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[4rem] p-12 text-white relative overflow-hidden text-center">
           <div className="relative z-10 flex flex-col items-center">
              <span className="text-4xl mb-4">💎</span>
              <h2 className="text-3xl font-black mb-2">Rewards for Top Guardians</h2>
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-8">Cash prizes, digital badges, and city honors awarded monthly.</p>
              <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-xs hover:shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">See Rewards Program</button>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}
