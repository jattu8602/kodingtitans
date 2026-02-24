'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  full?: boolean
  size?: number
}

export default function Logo({ className = '', full = false, size = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative group transition-transform duration-500 hover:scale-110" style={{ width: size, height: size }}>
        <Image
          src="/icon.png"
          alt="TitanClean"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-xl font-black leading-none tracking-tighter italic whitespace-nowrap">
          <span className="text-slate-900">Titan</span>
          <span className="text-indigo-600 ml-1">clean</span>
        </div>
      </div>
    </div>
  )
}
