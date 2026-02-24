'use client'

import { motion } from 'framer-motion'
import BentoCard from '@/components/BentoCard'

export default function Community() {
  const events = [
    { title: 'Lake Side Cleanup', location: 'Upper Lake, Bhopal', date: 'March 1, 2026', participants: 45, status: 'Upcoming', emoji: '🧹' },
    { title: 'Plastic-Free Seminar', location: 'MP Nagar Library', date: 'March 5, 2026', participants: 120, status: 'Open', emoji: '🎤' },
    { title: 'E-Waste Drive', location: 'BHEL Township', date: 'March 10, 2026', participants: 30, status: 'Limited Spots', emoji: '🔌' },
  ]

  const discussions = [
    { user: 'Rahul V.', topic: 'Best way to compost at home?', replies: 12, likes: 45 },
    { user: 'Mahesh K.', topic: 'New bin installed in Sector 4 - Thanks!', replies: 4, likes: 89 },
    { user: 'Priya D.', topic: 'NGO meetup for Sunday cleanup', replies: 28, likes: 156 },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-900">Guardian Community</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto italic">
            "Alone we clean a street, together we protect a city." 🛡️✨
          </p>
        </div>

        {/* Global Progress */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-black">12.4K</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Active Guardians</p>
            </div>
            <div>
              <p className="text-5xl font-black">8.2 Tons</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Waste Recovered</p>
            </div>
            <div>
              <p className="text-5xl font-black">₹4.5L</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Rewards Distributed</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span>📅</span> Cleanup Missions
            </h2>
            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-[2.5rem] shadow-lg border border-slate-100 flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {event.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{event.title}</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">{event.location} • {event.date}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-black uppercase tracking-widest">
                        {event.participants} Going
                      </span>
                      <span className="text-[10px] text-green-600 font-black uppercase tracking-widest">
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <button className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-blue-600 transition-all">❱</button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Social Feed */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span>💬</span> Guardian Lounge
            </h2>
            <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-widest">Trending Topics</span>
                <button className="text-[10px] font-black uppercase bg-blue-600 px-3 py-1 rounded-full">+ NEW POST</button>
              </div>
              <div className="divide-y divide-slate-100">
                {discussions.map((post, i) => (
                  <div key={i} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px]">👤</div>
                      <span className="text-xs font-bold text-slate-400">{post.user}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 mb-3">{post.topic}</h4>
                    <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       <span>👍 {post.likes}</span>
                       <span>💬 {post.replies} Replies</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 text-center border-t border-slate-100">
                <button className="text-xs font-black text-blue-600 uppercase tracking-widest hover:tracking-[0.2em] transition-all">Browse All Topics</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
