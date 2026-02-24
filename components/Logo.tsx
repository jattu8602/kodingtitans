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
          src="/logo.png"
          alt="TitanClean"
          fill
          className="object-contain"
          priority
        />
      </div>
      {(full) && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center text-2xl font-black leading-none tracking-tighter italic">
            <span className="text-slate-900">Titan</span>
            <span className="text-indigo-600">Clean</span>
          </div>
          <div className="mt-1">
            <p className="text-[10px] text-slate-400 font-black leading-none uppercase tracking-[0.3em]">
              Guardians
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
