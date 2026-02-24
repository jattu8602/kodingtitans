'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import thinkingAnimation from '@/animations/thinking.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="w-64 h-64 mx-auto mb-8">
          <Lottie animationData={thinkingAnimation} loop={true} />
        </div>

        <h1 className="text-8xl font-black text-indigo-950 tracking-tighter mb-4 italic">404</h1>
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-6">Route Not Found</h2>

        <p className="text-slate-500 font-medium max-w-sm mx-auto mb-10 leading-relaxed">
          The signal you're looking for seems to be offline. Our AI guardians are investigating the discrepancy.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-indigo-200 uppercase tracking-[0.2em] text-xs hover:bg-indigo-700 transition-all"
          >
            Return to Command Signal
          </motion.button>
        </Link>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]" />
      </div>
    </div>
  )
}
