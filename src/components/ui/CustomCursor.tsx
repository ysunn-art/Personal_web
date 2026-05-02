'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(
        el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.closest('[data-cursor-hover]') !== null
      )
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-accent"
        animate={{
          x: pos.x - (hovering ? 20 : 12),
          y: pos.y - (hovering ? 20 : 12),
          width: hovering ? 40 : 24,
          height: hovering ? 40 : 24,
          opacity: hovering ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </>
  )
}
