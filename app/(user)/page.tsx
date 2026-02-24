'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LottieAnimation from '@/components/LottieAnimation'
import BentoCard from '@/components/BentoCard'
import Link from 'next/link'
import Logo from '@/components/Logo'
import AIInsightsStrip from '@/components/AIInsightsStrip'
import welcomeAnimation from '@/animations/welcome.json'
import communityAnimation from '@/animations/community.json'
import collaborationAnimation from '@/animations/collaboration.json'
import thinkingAnimation from '@/animations/thinking.json'
import wellbeingAnimation from '@/animations/wellbeing.json'
import fireAnimation from '@/animations/fire.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* Citizen Dashboard Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AIInsightsStrip role="citizen" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Your Points', value: '450', emoji: '💎', color: 'blue' },
              { label: 'Cleanup Rank', value: '#12', emoji: '🏆', color: 'green' },
              { label: 'Active Reports', value: '3', emoji: '📝', color: 'orange' },
              { label: 'CO₂ Saved', value: '12kg', emoji: '🌿', color: 'teal' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <span className="text-3xl">{stat.emoji}</span>
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative group">
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-black animate-pulse uppercase tracking-widest">LIVE BHOPAL MAP</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">STREET VIEW ENABLED</span>
                </div>
                <div className="bg-slate-200 h-[32rem] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center">
                  {/* Mock Bhopal Map Background: Lakes and Districts */}
                  <div className="absolute inset-0 bg-[#e5e7eb]">
                    {/* Upper Lake (Bada Talab) Simulation */}
                    <div className="absolute top-[10%] left-[-10%] w-[60%] h-[50%] bg-blue-100 rounded-[40%_60%_70%_30%] blur-3xl opacity-60 rotate-12"></div>
                    <div className="absolute top-[15%] left-[5%] w-[45%] h-[35%] bg-blue-200/50 rounded-[50%_40%_60%_50%] border-4 border-blue-50/20 shadow-inner"></div>

                    {/* Lower Lake Simulation */}
                    <div className="absolute top-[45%] left-[45%] w-[15%] h-[10%] bg-blue-200/40 rounded-full blur-xl"></div>

                    {/* Greenery / Van Vihar */}
                    <div className="absolute top-[20%] left-[2%] w-[15%] h-[30%] bg-green-100/40 rounded-full rotate-45 blur-2xl"></div>

                    {/* Advanced Street Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_2px,_transparent_2px),_linear-gradient(90deg,rgba(255,255,255,0.4)_2px,_transparent_2px)] bg-[size:60px_60px]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,_transparent_1px),_linear-gradient(90deg,rgba(0,0,0,0.02)_1px,_transparent_1px)] bg-[size:15px_15px]"></div>

                    {/* Primary Roads Shading */}
                    <div className="absolute top-1/2 left-0 w-full h-4 bg-white/40 -rotate-[15deg]"></div>
                    <div className="absolute top-0 left-2/3 h-full w-4 bg-white/40 rotate-[10deg]"></div>
                  </div>

                  {/* Animated Kachragadi (Mini Truck) - Upgraded to Neon Pulse */}
                  <motion.div
                    animate={{
                      x: [-200, 200, 200, -200, -200],
                      y: [-100, -100, 100, 100, -100]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute z-20 flex flex-col items-center"
                  >
                    <div className="bg-blue-600/90 backdrop-blur px-3 py-1 rounded-full text-[8px] font-black text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] mb-2 uppercase tracking-widest border border-white/20">Kachragadi-04</div>
                    <span className="text-4xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">🚚</span>
                  </motion.div>

                  {/* Diversified Marker Overlay */}
                  <div className="absolute inset-0 p-8">
                     {/* Public Toilets - Upgraded to Pin Style */}
                     <div className="absolute top-[20%] left-[15%] group/marker cursor-help">
                        <div className="bg-white p-2 rounded-2xl shadow-xl border-2 border-slate-900 group-hover/marker:scale-125 transition-all">
                           <span className="text-xl block leading-none">🚻</span>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 text-white text-[8px] font-black rounded-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">MP Nagar Toilet</div>
                     </div>

                     <div className="absolute bottom-[30%] right-[20%] group/marker cursor-help">
                        <div className="bg-white p-2 rounded-2xl shadow-xl border-2 border-slate-900 group-hover/marker:scale-125 transition-all">
                           <span className="text-xl block leading-none">🚻</span>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 text-white text-[8px] font-black rounded-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">Van Vihar Public-A</div>
                     </div>

                     {/* Dead Animal Hazards - Upgraded to Shield Style */}
                     <motion.div
                       animate={{
                         opacity: [0.7, 1, 0.7],
                         scale: [1, 1.05, 1]
                       }}
                       transition={{ repeat: Infinity, duration: 2 }}
                       className="absolute top-[40%] right-[35%] group/marker cursor-help z-10"
                     >
                        <div className="bg-red-600 p-2.5 rounded-[1rem] shadow-[0_0_20px_rgba(220,38,38,0.4)] border-2 border-white group-hover/marker:scale-110 transition-all">
                           <span className="text-xl block leading-none saturate-150 brightness-125">🛡️</span>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-red-600 text-white text-[8px] font-black rounded-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">CRITICAL: BIOHAZARD ALERT</div>
                     </motion.div>

                     {/* Bins Variety - Standardized Sizing */}
                     <div className="absolute top-[10%] right-[15%] opacity-60 hover:opacity-100 transition-opacity hover:scale-110">
                        <span className="text-2xl filter drop-shadow-md">🗑️</span>
                     </div>
                     <div className="absolute bottom-[15%] left-[40%] opacity-60 hover:opacity-100 transition-opacity hover:scale-110">
                        <span className="text-2xl filter drop-shadow-md">🗑️</span>
                     </div>

                     {/* Big Bins - More Prominent Style */}
                     <div className="absolute top-[60%] left-[10%] group/marker">
                        <div className="bg-blue-100 p-2 rounded-2xl border-2 border-blue-200">
                           <span className="text-3xl block">🧺</span>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-blue-600 text-white text-[8px] font-black rounded-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-black">Community Bin-02</div>
                     </div>

                     {/* Overflowed Bins - Glow Pulse Upgrade */}
                     <motion.div
                       animate={{
                         boxShadow: ["0 0 0px rgba(239,68,68,0)", "0 0 20px rgba(239,68,68,0.6)", "0 0 0px rgba(239,68,68,0)"]
                       }}
                       transition={{ repeat: Infinity, duration: 1.5 }}
                       className="absolute top-[30%] left-[60%] group/marker p-2 rounded-full cursor-help active:scale-95"
                     >
                        <span className="text-3xl relative">
                           🗑️
                           <span className="absolute -top-1 -right-1 flex h-4 w-4">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 shadow-lg shadow-red-500/50 border border-white"></span>
                           </span>
                        </span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-red-600 text-white text-[8px] font-black rounded-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">URGENT: BIN OVERFLOW</div>
                     </motion.div>

                     {/* Big Bin Overflowed - Max Critical Style */}
                     <motion.div
                       animate={{ scale: [1, 1.05, 1] }}
                       transition={{ repeat: Infinity, duration: 2 }}
                       className="absolute bottom-[10%] right-[45%] group/marker cursor-help"
                     >
                        <div className="bg-white p-2 rounded-[1.5rem] shadow-2xl border-2 border-red-500">
                           <span className="text-5xl relative">
                              🧺
                              <span className="absolute -top-2 -right-2 flex h-6 w-6">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600 border-4 border-white shadow-lg"></span>
                              </span>
                           </span>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-red-600 text-white text-[10px] font-black rounded-xl opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-[0.2em] shadow-2xl border border-white/20">SITE CRITICAL: BIG BIN OVERFLOW</div>
                     </motion.div>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white flex gap-6 items-center">
                     <div className="flex flex-col items-center">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-tighter mb-1">Station</span>
                        <span className="text-lg font-bold text-slate-900">Indore Rd.</span>
                     </div>
                     <div className="h-8 w-px bg-slate-200"></div>
                     <div className="flex flex-col items-center">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-tighter mb-1">Air Quality</span>
                        <span className="text-lg font-bold text-green-600">Good (42)</span>
                     </div>
                     <button className="bg-slate-900 text-white px-6 py-2 rounded-2xl font-black text-xs hover:bg-blue-600 transition-all">
                        STREET VIEW
                     </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2"><span>📂</span> Recent Activity</h3>
                  <Link href="/report" className="text-blue-600 text-sm font-semibold hover:underline">View All</Link>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Overflowing Bin Reported', time: '2h ago', status: 'Pending', color: 'orange' },
                    { title: 'Scrap Metal Listing Created', time: '5h ago', status: 'Active', color: 'blue' },
                    { title: 'Garbage Pile Cleaned', time: 'Yesterday', status: 'Resolved', color: 'green' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                      <span className={`text-xs font-bold text-${item.color}-600 bg-${item.color}-50 px-2 py-1 rounded`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Daily Goal 🎯</h3>
                <p className="opacity-90 mb-6 text-sm">Report 2 waste issues today to earn a "City Hero" badge!</p>
                <div className="bg-white/20 h-3 rounded-full overflow-hidden mb-2">
                  <motion.div initial={{ width: 0 }} animate={{ width: '50%' }} className="bg-white h-full"></motion.div>
                </div>
                <p className="text-right text-xs font-bold italic">1/2 Reports Done</p>
                <Link href="/report" className="mt-6 block w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-center hover:bg-blue-50 transition-colors">
                  Submit Report Now
                </Link>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><span>💎</span> Top Earners</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Anjali S.', pts: '4.2k', emoji: '🥇' },
                    { name: 'Rahul V.', pts: '3.8k', emoji: '🥈' },
                    { name: 'Priya D.', pts: '3.4k', emoji: '🥉' }
                  ].map((u, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xl">{u.emoji}</span>
                      <span className="flex-1 font-medium text-gray-800">{u.name}</span>
                      <span className="font-bold text-blue-600">{u.pts}</span>
                    </div>
                  ))}
                </div>
                <Link href="/leaderboard" className="mt-6 block text-center text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors">FULL LEADERBOARD</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">⚠️</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Problem Statement
            </h2>
            <p className="text-xl text-gray-600">
              The challenges we're solving
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 shadow-md"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">🚨</span>
              <div className="flex-1">
                <p className="text-lg text-gray-800 mb-4">
                  Urban cities generate <strong>~60%</strong> of total solid
                  waste, yet monitoring remains inefficient 📊
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  <strong>~40–50%</strong> waste collection struggles between
                  time, cost, and coverage ⚠️
                </p>
                <p className="text-lg text-gray-800">
                  Municipal bodies lack real-time data for <strong>~70%</strong>{' '}
                  reported waste issues 📉
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📋</span>
                <h3 className="text-2xl font-semibold text-blue-900">
                  Existing Methods or Systems
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-center gap-2">
                  <span>•</span> Manual complaint registration 📝
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Photo-based reporting apps 📸
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Fixed-route waste collection 🚛
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Informal scrap collection (offline) 🗂️
                </li>
              </ul>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src="https://s3.amazonaws.com/lms24x7/gsktestimonials/uploads/2023/01/01183255/Swachhata-App-Featured.jpg"
                  alt="Existing waste reporting app"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚫</span>
                <h3 className="text-2xl font-semibold text-orange-900">
                  Limitations and Challenges
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                These systems fail to address waste problems proactively and
                efficiently due to:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-center gap-2">
                  <span>⏱️</span> No real-time waste monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span>🔮</span> No prediction using past data
                </li>
                <li className="flex items-center gap-2">
                  <span>👥</span> Low citizen participation (no incentives)
                </li>
                <li className="flex items-center gap-2">
                  <span>🔄</span> Repeated waste overflow at same locations
                </li>
              </ul>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src="https://m.greaterkashmir.com/sortd-service/imaginary/v22-01/jpg/large/high?url=Z3JlYXRlcmthc2htaXItc29ydGQtcHJvLXByb2Qtc29ydGQvbWVkaWExNThmMWIwMC1lNGUxLTExZjAtOWY3Zi1kOTViNDVmMDFjMTYucG5n"
                  alt="Waste overflow problem"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💡</span>
              <h3 className="text-2xl font-semibold text-gray-900">Need</h3>
            </div>
            <p className="text-xl text-gray-800">
              A solution that empowers both citizens and authorities to enable
              timely cleanup and responsible waste management based on
              real-world conditions 🌍✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Features - Bento Grid */}
      <section
        id="solution"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">✨</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Proposed Solution
            </h2>
            <p className="text-xl text-gray-600">
              8 key features for smart waste management
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
            {[
              {
                number: '01',
                title: 'Citizen Waste Reporting',
                description:
                  'Enables citizens to capture and report waste issues using photos and live location for faster action.',
                emoji: '📸',
                span: 'col-span-1',
                animation: communityAnimation,
              },
              {
                number: '02',
                title: 'Real-Time Status Tracking',
                description:
                  'Shows live complaint status (reported, in-progress, resolved) for transparency and trust.',
                emoji: '⚡',
                span: 'col-span-1',
                animation: fireAnimation,
              },
              {
                number: '03',
                title: 'AI-Based Waste Prediction',
                description:
                  'Analyzes past cleanup data to predict waste overflow and trigger proactive cleaning.',
                emoji: '🤖',
                span: 'col-span-1',
                animation: thinkingAnimation,
              },
              {
                number: '04',
                title: 'Waste as a Resource System',
                description:
                  'Allows users to share, exchange, or sell recyclable waste through a digital platform.',
                emoji: '♻️',
                span: 'col-span-1',
                animation: wellbeingAnimation,
              },
              {
                number: '05',
                title: 'Priority-Based Cleanup Routing',
                description:
                  'Automatically prioritizes waste locations based on severity, location, and time.',
                emoji: '🎯',
                span: 'col-span-1 md:col-span-2',
                animation: collaborationAnimation,
              },
              {
                number: '06',
                title: 'Duplicate Complaint Detection',
                description:
                  'Uses AI and location matching to reduce repeated reports of the same issue.',
                emoji: '🔍',
                span: 'col-span-1',
                animation: thinkingAnimation,
              },
              {
                number: '07',
                title: 'Citizen Reward System',
                description:
                  'Rewards users with points for valid reports and responsible waste contributions.',
                emoji: '🎁',
                span: 'col-span-1',
                animation: wellbeingAnimation,
              },
              {
                number: '08',
                title: 'Municipal & NGO Dashboard',
                description:
                  'Provides authorities and partners with analytics, heatmaps, and performance insights.',
                emoji: '📊',
                span: 'col-span-1',
                animation: communityAnimation,
              },
            ].map((feature, index) => (
              <BentoCard
                key={index}
                span={feature.span as any}
                delay={index * 0.1}
                emoji={feature.emoji}
                className="group"
              >
                <div className="h-full flex flex-col">
                  <div className="text-3xl font-bold text-blue-600 mb-3">
                    {feature.number}
                  </div>
                  <div className="mb-3 h-32 flex items-center justify-center">
                    <LottieAnimation
                      animationData={feature.animation}
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                      speed={0.8}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {feature.description}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">👥</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-xl text-gray-600">Koding Titans 🚀</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'NITESH',
                college: 'LNCT',
                role: 'Leader : AI & ML',
                emoji: '🧠',
              },
              {
                name: 'RAMANAND',
                college: 'SRIT',
                role: 'App Developer',
                emoji: '📱',
              },
              {
                name: 'SHASHANK',
                college: 'LNCT',
                role: 'Full Stack Developer',
                emoji: '💻',
              },
              {
                name: 'MAITRI',
                college: 'LNCT',
                role: 'Designer',
                emoji: '🎨',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                >
                  {member.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.college}</p>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach Section */}
      <section
        id="tech"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">⚙️</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Chosen Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Tools, platforms, and frameworks 🛠️
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Mobile App',
                tech: 'Flutter',
                emoji: '📱',
                desc: 'Cross-platform mobile application development.',
              },
              {
                category: 'Web Dashboard',
                tech: 'Next.js',
                emoji: '🌐',
                desc: 'Web dashboard for authorities and analytics.',
              },
              {
                category: 'Notifications',
                tech: 'Firebase (FCM)',
                emoji: '🔔',
                desc: 'Real-time notifications and alerts.',
              },
              {
                category: 'Database',
                tech: 'MongoDB',
                emoji: '🗄️',
                desc: 'NoSQL database for scalable waste data.',
              },
              {
                category: 'ORM',
                tech: 'Prisma ORM',
                emoji: '📋',
                desc: 'Type-safe database schema management.',
              },
              {
                category: 'AI/ML',
                tech: 'AI / ML Models',
                emoji: '🤖',
                desc: 'Waste prediction and image classification.',
              },
              {
                category: 'Maps',
                tech: 'Google Maps API',
                emoji: '🗺️',
                desc: 'Location tracking, routing, and heatmaps.',
              },
              {
                category: 'Storage',
                tech: 'Cloud Storage',
                emoji: '☁️',
                desc: 'Secure storage for images and data.',
              },
              {
                category: 'Version Control',
                tech: 'Git & GitHub',
                emoji: '📦',
                desc: 'Version control and team collaboration.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <div className="text-sm text-gray-500">{item.category}</div>
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {item.tech}
                </div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feasibility & Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">📈</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Feasibility and Impact
            </h2>
            <p className="text-xl text-gray-600">
              Why TitanClean works and its benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Practical Feasibility
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Uses existing mobile infrastructure</li>
                <li>• Integrates with municipal workflows</li>
                <li>• Built with proven technologies</li>
                <li>• City-wise deployment ready</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Expected Impact
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Faster waste cleanup</li>
                <li>• Higher citizen participation</li>
                <li>• Reduced health risks</li>
                <li>• Better recycling rates</li>
                <li>• Improved accountability</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Scalability
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Wards → Cities → States</li>
                <li>• Cloud-based architecture</li>
                <li>• AI improves with data</li>
                <li>• Long-term sustainability</li>
                <li>• NGO integration ready</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Plan Section */}
      <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-5xl mb-4 block">🗺️</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Implementation Plan
            </h2>
            <p className="text-xl text-gray-600">
              Development approach, timeline, and future scope 🎯
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'MVP Development',
                description:
                  'Build the core mobile app with waste reporting, photo upload, and location tagging to validate the concept quickly.',
                emoji: '🚀',
              },
              {
                step: '2',
                title: 'Backend & Data Integration',
                description:
                  'Set up backend services with MongoDB, APIs, and cloud storage to manage reports, users, and waste data securely.',
                emoji: '🔧',
              },
              {
                step: '3',
                title: 'AI & Prediction Module',
                description:
                  'Develop AI models to detect duplicate complaints and predict waste overflow using historical cleanup data.',
                emoji: '🧠',
              },
              {
                step: '4',
                title: 'Notifications & Rewards System',
                description:
                  'Integrate real-time notifications and a reward mechanism to encourage active citizen participation.',
                emoji: '🎁',
              },
              {
                step: '5',
                title: 'Pilot Deployment & Scaling',
                description:
                  'Launch a pilot in selected areas, collect feedback, optimize performance, and prepare for city-wide expansion.',
                emoji: '🌍',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex gap-6 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    {phase.step}
                  </div>
                </motion.div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{phase.emoji}</span>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🔮</span>
              <h3 className="text-3xl font-semibold text-gray-900">
                Future Scope
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'IoT-enabled smart bins',
                'Advanced AI forecasting models',
                'Government & NGO partnerships',
                'City-wide analytics dashboards',
                'Carbon footprint tracking',
                'CSR & sustainability programs',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/60 p-4 rounded-lg flex items-center gap-2"
                >
                  <span>✨</span>
                  <span className="text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Logo full size={60} />
            </div>
            <p className="text-gray-400 mb-4 flex items-center justify-center gap-2">
              <span>🏙️</span> Smart City | Civic Technology | Environmental
              Management
            </p>
            <p className="text-gray-500 text-sm mb-4 italic">
              "TitanClean doesn't just report waste — it predicts it, values it,
              and rewards citizens for managing it."
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://titanclean.in"
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                <span>🌐</span> titanclean.in
              </a>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>©</span> 2026 Koding Titans. Empowering citizens for a
              cleaner future. <span>💚</span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
