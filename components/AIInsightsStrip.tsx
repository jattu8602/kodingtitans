'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Insight {
  id: string
  text: string
  type: 'info' | 'prediction' | 'alert'
}

interface AIInsightsStripProps {
  role: 'citizen' | 'ngo' | 'municipal' | 'admin'
}

const roleInsights: Record<string, Insight[]> = {
  citizen: [
    { id: '1', text: "Reporting 2 more issues today will earn you the 'Indore Guardian' badge! 🏆", type: 'info' },
    { id: '2', text: "AI Prediction: Waste collection in your area is scheduled for 10:30 AM tomorrow. 🚛", type: 'prediction' },
    { id: '3', text: "New community mission started nearby: 'Clean Lakes Initiative'. Join now! 🌊", type: 'info' },
  ],
  ngo: [
    { id: '1', text: "AI predicts high volunteer availability this weekend—ideal for Sector 7 mission. 🤝", type: 'prediction' },
    { id: '2', text: "Impact Alert: Your recent mission diverted 450kg of plastic from landfills. ♻️", type: 'info' },
    { id: '3', text: "Security Signal: Unusual activity detected in Mission Hub logistics. Review logs. ⚠️", type: 'alert' },
  ],
  municipal: [
    { id: '1', text: "Sector 5 reporting density is up 15%. AI recommends dispatching Unit T-105. 🚛", type: 'prediction' },
    { id: '2', text: "Efficiency Peak: Fleet optimization has saved 12% in fuel costs this week. ✅", type: 'info' },
    { id: '3', text: "CRITICAL: Bin overflow predicted in Rajwada Market within 40 minutes. 🚨", type: 'alert' },
  ],
  admin: [
    { id: '1', text: "Global Signal: System-wide cleanup rate reached a new high of 96.4%. 🛰️", type: 'info' },
    { id: '2', text: "Risk Detection: Sector 3 shows high risk of overflow. Deploying prediction clusters. 🤖", type: 'prediction' },
    { id: '3', text: "Marketplace Audit: 1,200 Eco-Credits exchanged today. Transparency score: 100%. ✨", type: 'info' },
  ],
}

export default function AIInsightsStrip({ role }: AIInsightsStripProps) {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0)
  const insights = roleInsights[role] || []

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsightIndex((prev) => (prev + 1) % insights.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [insights.length])

  const currentInsight = insights[currentInsightIndex]

  return (
    <div className="w-full mb-8">
      <div className="relative overflow-hidden bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-sm group">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600/10 text-indigo-600 shrink-0">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-xl"
            >
              🪄
            </motion.span>
          </div>

          <div className="flex-1 overflow-hidden">
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-1 italic flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              AI Insights Signal
            </p>
            <div className="h-6 relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentInsight.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm font-bold text-slate-800 absolute w-full truncate"
                >
                  {currentInsight.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden sm:flex gap-1 shrink-0">
             {insights.map((_, i) => (
               <div
                 key={i}
                 className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentInsightIndex ? 'w-4 bg-indigo-600' : 'bg-slate-200'}`}
               />
             ))}
          </div>
        </div>

        {/* Animated Progress Bar */}
        <motion.div
          key={currentInsightIndex}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          className="absolute bottom-0 left-0 h-0.5 bg-indigo-600/30 w-full origin-left"
        />
      </div>
    </div>
  )
}
