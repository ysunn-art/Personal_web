'use client'
import { motion } from 'framer-motion'
import { ParticleField } from '@/components/hero/ParticleField'
import { CategoryCard } from '@/components/ui/CategoryCard'

const CATEGORIES = [
  {
    href: '/industrial',
    label: 'Industrial Design',
    description: 'Industrial vehicle concepts, mechanical systems, and 3D visualization.',
    available: true,
  },
  {
    href: '/software',
    label: 'Software',
    description: 'AI engineering, full-stack systems, and hackathon projects.',
    available: true,
  },
  {
    href: '/product',
    label: 'Robotic',
    description: 'Robotics, automation systems, and engineering projects.',
    available: false,
  },
]

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20">
        <ParticleField />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#6b8fa3 1px, transparent 1px), linear-gradient(90deg, #6b8fa3 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 text-center px-4">
          <motion.p
            className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Portfolio · 2025
          </motion.p>

          <motion.h1
            className="font-mono text-7xl md:text-9xl font-bold tracking-tighter mb-4 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.21, 0.45, 0.15, 1] }}
          >
            EASON
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            className="font-mono text-xs text-muted tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Design · Engineering · Innovation
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#categories"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="font-mono text-[9px] text-muted tracking-[0.4em] uppercase group-hover:text-accent transition-colors">
            Select
          </span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-accent to-transparent group-hover:h-14 transition-all"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.a>
      </section>

      {/* Category cards */}
      <section id="categories" className="max-w-4xl mx-auto w-full px-8 pb-32 pt-0 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.href} {...cat} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
