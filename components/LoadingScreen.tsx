'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LottieAnimation from './LottieAnimation'
import loadingAnimation from '@/animations/loading.json'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-green-600 to-blue-600"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <LottieAnimation
                animationData={loadingAnimation}
                className="w-64 h-64 mx-auto"
                loop={true}
                autoplay={true}
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white"
            >
              <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                <span>🌱</span> TitanClean
              </h2>
              <p className="text-xl opacity-90">
                Loading your clean city experience...
              </p>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="mt-6 h-1 bg-white/30 rounded-full overflow-hidden max-w-xs mx-auto"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="h-full bg-white rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
