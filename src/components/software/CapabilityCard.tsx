'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Capability } from '@/data/thoth-capabilities'

export function CapabilityCard({ cap }: { cap: Capability }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-52 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setFlipped((f) => !f)}
      data-cursor-hover
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.45, 0.15, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-surface border border-border p-5 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-start justify-between">
            <span className="text-2xl">{cap.icon}</span>
            <span className="font-mono text-[9px] text-accent border border-accent/30 px-2 py-0.5">
              #{String(cap.number).padStart(2, '0')}
            </span>
          </div>
          <div>
            <h3 className="font-mono font-bold text-sm mb-1">{cap.title}</h3>
            <p className="font-mono text-[10px] text-muted leading-relaxed">{cap.description}</p>
          </div>
          <span className="font-mono text-[9px] text-muted/60">{cap.endpoint}</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-accent/5 border border-accent/30 p-5 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="font-mono text-[9px] text-accent uppercase tracking-widest">Detail</span>
          <p className="font-mono text-[10px] text-white leading-relaxed">{cap.detail}</p>
          <span className="font-mono text-[9px] text-muted">Click to flip back</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
