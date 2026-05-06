'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CategoryCardProps {
  href: string
  label: string
  description: string
  index: number
  available?: boolean
}

export function CategoryCard({ href, label, description, index, available = true }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + index * 0.15, duration: 0.6, ease: [0.21, 0.45, 0.15, 1] }}
      data-cursor-hover
      className="h-full"
    >
      <Link
        href={available ? href : '#'}
        className={`group relative flex flex-col h-full border border-border p-8 transition-all duration-300 ${
          available
            ? 'hover:border-accent/50 hover:bg-surface'
            : 'opacity-40 pointer-events-none'
        }`}
        onClick={!available ? (e: React.MouseEvent) => e.preventDefault() : undefined}
      >
        <span className="font-mono text-[10px] text-accent/60 tracking-[0.3em] block mb-6">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h2 className="font-mono text-2xl font-bold tracking-tight text-text mb-3 group-hover:text-accent transition-colors">
          {label}
        </h2>

        <p className="font-mono text-xs text-muted leading-relaxed">{description}</p>

        {!available && (
          <span className="absolute top-4 right-4 font-mono text-[9px] text-muted border border-border px-2 py-0.5 tracking-widest">
            COMING SOON
          </span>
        )}

        {available && (
          <span className="absolute bottom-6 right-6 font-mono text-muted text-xs group-hover:text-accent group-hover:translate-x-1 transition-all">
            →
          </span>
        )}

        <motion.div
          className="absolute bottom-0 left-0 h-px bg-accent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  )
}
