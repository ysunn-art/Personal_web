'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { DesignProject } from '@/data/design-projects'

interface Props {
  project: DesignProject | null
  onClose: () => void
}

export function Lightbox({ project, onClose }: Props) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!project) return
    setIdx(0)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % project.images.length)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + project.images.length) % project.images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-8 py-4 border-b border-border shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="font-mono font-bold">{project.title}</h2>
              <p className="font-mono text-[10px] text-muted">{project.subtitle}</p>
            </div>
            <button onClick={onClose} className="font-mono text-xs text-muted hover:text-accent transition-colors">
              [ESC] CLOSE
            </button>
          </div>

          {/* Image area */}
          <div className="flex-1 relative flex items-center justify-center px-16 py-6 min-h-0" onClick={(e) => e.stopPropagation()}>
            <motion.div
              key={idx}
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={project.images[idx]}
                alt={`${project.title} ${idx + 1}`}
                fill
                className="object-contain"
                sizes="80vw"
              />
            </motion.div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setIdx((i) => (i - 1 + project.images.length) % project.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-2xl text-muted hover:text-accent transition-colors"
                >←</button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % project.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-2xl text-muted hover:text-accent transition-colors"
                >→</button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div
            className="flex items-center justify-center gap-3 px-8 py-4 border-t border-border overflow-x-auto shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {project.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`relative w-16 h-10 border-2 transition-colors shrink-0 overflow-hidden ${i === idx ? 'border-accent' : 'border-border hover:border-muted'}`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
