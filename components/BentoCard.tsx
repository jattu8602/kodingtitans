'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  span?: 'col-span-1' | 'col-span-2' | 'row-span-1' | 'row-span-2'
  delay?: number
  emoji?: string
}

export default function BentoCard({
  children,
  className = '',
  span = 'col-span-1',
  delay = 0,
  emoji,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`
        ${span}
        ${className}
        group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm
        border border-gray-200/50 shadow-lg hover:shadow-2xl
        transition-all duration-300 cursor-pointer
        p-6 md:p-8
      `}
    >
      {emoji && (
        <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
          {emoji}
        </div>
      )}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-green-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-green-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
    </motion.div>
  )
}
