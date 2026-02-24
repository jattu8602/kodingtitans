'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function ReportWaste() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNext = () => setStep(prev => prev + 1)
  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(4)
    }, 2000)
  }

  return (
    <div className="pb-20">
      <div className="fixed top-24 left-1/2 -translate-x-1/2 flex gap-3 z-[60]">
         {[1, 2, 3].map((s) => (
           <div key={s} className={`h-1.5 w-16 rounded-full transition-all duration-700 ${step >= s ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-200'}`}></div>
         ))}
      </div>

      <div className="max-w-xl mx-auto mt-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 text-center"
            >
              <h1 className="text-3xl font-black text-slate-900 mb-2">Capture the Issue 📸</h1>
              <p className="text-slate-500 mb-8">Take a photo of the waste or hazard you want to report.</p>

              <div
                onClick={handleNext}
                className="group border-4 border-dashed border-slate-100 bg-slate-50 rounded-[2rem] aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-500"
              >
                <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-500">📷</div>
                <p className="font-bold text-slate-400 group-hover:text-blue-600">Click to capture / upload</p>
                <p className="text-xs text-slate-300 mt-2">Max file size: 10MB</p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <h1 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                 <span className="text-blue-600">02.</span> Report Details
              </h1>

              <div className="space-y-6 text-left">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">What's the issue?</label>
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border-none text-slate-800 font-bold outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Overflowing Bin</option>
                    <option>Illegal Dumping</option>
                    <option>Litter / Scattered Waste</option>
                    <option>Dead Animal</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Severity Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Low', 'Mid', 'Max'].map(level => (
                      <button key={level} className="p-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all">
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Additional Notes</label>
                  <textarea className="w-full p-4 rounded-2xl bg-slate-50 border-none h-32 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Describe the situation..."></textarea>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:shadow-xl transition-all"
                >
                  Continue to Location ❱
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <h1 className="text-3xl font-black text-slate-900 mb-2 flex items-center gap-3">
                 📍 Pin Location
              </h1>
              <p className="text-slate-500 mb-8 text-sm">We've detected your approximate location. Please confirm.</p>

              <div className="bg-slate-100 h-64 rounded-3xl mb-6 relative overflow-hidden group">
                 {/* Mock Map Background */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(0,0,0,0.05)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl group-hover:scale-110 transition-transform duration-500 z-10">📍</div>
                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-sm flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-700 truncate">Indore, Vijay Nagar, Sector 4, 452010</span>
                    <span className="text-blue-600 font-bold uppercase cursor-pointer">Edit</span>
                 </div>
              </div>

              <div className="flex gap-4">
                 <button onClick={() => setStep(2)} className="flex-1 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-400 hover:bg-slate-50 transition-all">Back</button>
                 <button
                   onClick={handleSubmit}
                   disabled={isSubmitting}
                   className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                 >
                   {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                   ) : 'Submit Report 🚀'}
                 </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-7xl mb-6">💎</div>
                <h1 className="text-4xl font-black text-slate-900 mb-2">Great Work, Guardian!</h1>
                <p className="text-slate-500 text-lg mb-8">Your report has been received. Our AI is now notifying local authorities.</p>

                <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 mb-8">
                  <p className="text-blue-600 font-black text-3xl">+50 XP</p>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">Reward Credited</p>
                </div>

                <div className="space-y-3">
                  <Link href="/" className="block w-full py-4 bg-slate-900 text-white rounded-[1.5rem] font-bold shadow-lg">Return to Dashboard</Link>
                  <button onClick={() => setStep(1)} className="block w-full py-3 text-slate-400 font-bold text-sm hover:text-blue-600 transition-colors">Submit Another Report</button>
                </div>
              </div>

              {/* Confetti simulation (static) */}
              <div className="absolute top-10 left-10 text-xl animate-bounce">🎊</div>
              <div className="absolute bottom-20 right-10 text-xl animate-bounce delay-300">🎉</div>
              <div className="absolute top-1/2 right-4 text-xl animate-bounce delay-700">✨</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
