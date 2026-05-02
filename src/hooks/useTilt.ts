'use client'
import { useRef } from 'react'
import type { MouseEvent } from 'react'

export function useTilt(intensity = 10) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    el.style.transform = `perspective(800px) rotateY(${dx * intensity}deg) rotateX(${-dy * intensity}deg) scale3d(1.02,1.02,1.02)`
  }

  const onMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)'
    }
  }

  return { ref, onMouseMove, onMouseLeave }
}
