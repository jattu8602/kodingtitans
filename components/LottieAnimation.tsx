'use client'

import { useEffect, useRef } from 'react'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'

interface LottieAnimationProps {
  animationData: any
  className?: string
  loop?: boolean
  autoplay?: boolean
  speed?: number
}

export default function LottieAnimation({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    if (lottieRef.current) {
      if (autoplay) {
        lottieRef.current.play()
      }
      // Set speed using the animation instance
      if (speed !== 1 && lottieRef.current.setSpeed) {
        lottieRef.current.setSpeed(speed)
      }
    }
  }, [autoplay, speed])

  return (
    <div className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
