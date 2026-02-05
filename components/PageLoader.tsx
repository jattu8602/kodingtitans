'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LottieAnimation from './LottieAnimation'
import loadingAnimation from '@/animations/loading.json'

interface PageLoaderProps {
  children: React.ReactNode
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false)
      return
    }

    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }

    window.addEventListener('load', handleLoad)

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-600 via-green-600 to-blue-600"
          >
            <div className="text-center px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <LottieAnimation
                  animationData={loadingAnimation}
                  className="w-48 h-48 md:w-64 md:h-64 mx-auto"
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
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                  <span className="text-4xl">🌱</span> TitanClean
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  Loading your clean city experience...
                </p>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                className="h-1 bg-white/30 rounded-full overflow-hidden max-w-xs mx-auto"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="h-full w-1/3 bg-white rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ display: isLoading ? 'none' : 'block' }}>{children}</div>
    </>
  )
}
