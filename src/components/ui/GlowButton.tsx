'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
}

export function GlowButton({ children, onClick, href, variant = 'primary', className = '' }: Props) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wider transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-black font-bold hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]'
      : 'border border-accent text-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]'

  const btn = (
    <motion.button
      className={`${base} ${styles} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      data-cursor-hover
    >
      {children}
    </motion.button>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    if (isExternal) {
      return (
        <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
          {btn}
        </a>
      )
    }
    return <a href={href}>{btn}</a>
  }
  return btn
}
