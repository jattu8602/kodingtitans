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
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/logo.png"
          alt="TitanClean"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-2xl font-black leading-none tracking-tight">
          <span className="text-[#0f4c81]">Titan</span>
          <span className="text-[#1a9245]">Clean</span>
        </div>
        {full && (
          <div className="mt-0.5">
            <p className="text-[9px] text-slate-500 font-bold leading-none tracking-tighter uppercase whitespace-nowrap">
              Guardians of City Cleanliness
            </p>
            <p className="text-[7px] text-slate-400 font-bold leading-none mt-0.5">
              by Koding Titans
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
