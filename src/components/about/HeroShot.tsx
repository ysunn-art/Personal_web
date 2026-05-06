'use client'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'

export function HeroShot() {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor-hover
      style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
      className="relative aspect-[3/4] overflow-hidden border border-border/60 group"
    >
      <Image
        src="/images/about-me/heroshot.jpg"
        alt="Eason"
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        sizes="(max-width: 768px) 100vw, 300px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-3 right-3 font-mono text-[9px] text-white/70 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
        Seattle, WA
      </span>
    </div>
  )
}
