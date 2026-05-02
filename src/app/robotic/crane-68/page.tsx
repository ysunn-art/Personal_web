'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const BASE = '/images/design/crane68'

const painPoints = [
  'Isolation of crane operators',
  'Safety blind spots on-site',
  'Poor ground-to-cabin communication',
  'Lack of intelligent assistance systems',
]

const ideationImages = [
  { src: `${BASE}/img-2.jpg`, label: 'Ideation · Phase 1–3' },
  { src: `${BASE}/img-8.jpg`, label: 'Concept Iterations' },
  { src: `${BASE}/img-12.jpg`, label: 'Smaller Size Concept' },
]

const conceptImages = [
  { src: `${BASE}/img-4.jpg`, label: 'Rotatable Cabin', sub: 'Core feature enabling 360° operator awareness' },
  { src: `${BASE}/img-5.jpg`, label: 'Color Language', sub: 'Safety yellow — high-visibility industrial palette' },
  { src: `${BASE}/img-22.jpg`, label: 'Workflow System', sub: 'Drone + BIM integration for site intelligence' },
]

const finalRenders = [
  '/images/design/crane-68-1.jpg',
  '/images/design/crane-68-2.jpg',
  '/images/design/crane-68-3.jpg',
  '/images/design/crane-68-4.png',
]

const galleryImages = [6,7,9,10,11,13,14,16,17,19,20,21,23].map(n => `${BASE}/img-${n}.jpg`)

export default function Crane68Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <main className="min-h-screen bg-black">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={`${BASE}/img-3.jpg`}
            alt="Crane 68 — Capstone Project"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-end px-8 md:px-20 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Industrial Design · Capstone Project · 2025
          </motion.p>
          <motion.h1
            className="font-mono text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crane 68
          </motion.h1>
          <motion.p
            className="font-mono text-sm text-white/70 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            A mobile crane control center integrating BIM and drone intelligence —
            deployable anywhere, anytime.
          </motion.p>
        </motion.div>

        {/* Back link */}
        <Link
          href="/robotic"
          className="absolute top-24 left-8 font-mono text-[10px] text-white/50 hover:text-accent transition-colors tracking-widest uppercase"
        >
          ← Robotic
        </Link>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </section>

      {/* ── PAIN POINT ── */}
      <section className="relative">
        <div className="relative h-[70vh] overflow-hidden">
          <Image
            src={`${BASE}/img-1.jpg`}
            alt="Pain Point — crane worker challenges"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
            <AnimatedSection>
              <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-6">
                01 · Pain Point
              </p>
              <div className="space-y-3 mb-8">
                {painPoints.map((pt, i) => (
                  <motion.p
                    key={pt}
                    className="font-mono text-xl md:text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                  >
                    {pt}
                  </motion.p>
                ))}
              </div>
              <blockquote className="font-mono text-xs text-white/60 italic border-l-2 border-accent pl-4 max-w-sm">
                "Going to the restroom is the biggest challenge for female workers like me."
                <span className="block mt-1 not-italic text-white/40">— from a crane worker</span>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <AnimatedSection className="mb-12">
          <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
            02 · Research
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight">
            Existing Systems &<br /><span className="text-muted">Their Gaps</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video overflow-hidden border border-border">
              <Image src={`${BASE}/img-18.jpg`} alt="Remote control room research" fill className="object-cover" sizes="50vw" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-video overflow-hidden border border-border">
              <Image src={`${BASE}/img-15.jpg`} alt="Product definition" fill className="object-cover" sizes="50vw" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── IDEATION ── */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto border-t border-border">
        <AnimatedSection className="mb-12">
          <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
            03 · Ideation
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight">
            Three Phases of<br /><span className="text-muted">Exploration</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ideationImages.map((img, i) => (
            <AnimatedSection key={img.src} delay={i * 0.1}>
              <div className="group relative overflow-hidden border border-border">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-3 bg-surface">
                  <p className="font-mono text-[10px] text-muted">{img.label}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CONCEPT ── */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto border-t border-border">
        <AnimatedSection className="mb-12">
          <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
            04 · Concept Development
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight">
            Key Design<br /><span className="text-muted">Decisions</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {conceptImages.map((img, i) => {
            const isEven = i % 2 === 0
            return (
              <AnimatedSection key={img.src} delay={i * 0.1} direction={isEven ? 'left' : 'right'}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center ${!isEven ? 'md:[direction:rtl]' : ''}`}>
                  <div className="relative aspect-video overflow-hidden border border-border md:[direction:ltr]">
                    <Image src={img.src} alt={img.label} fill className="object-cover" sizes="50vw" />
                  </div>
                  <div className="px-4 md:[direction:ltr]">
                    <p className="font-mono text-accent text-[10px] tracking-widest uppercase mb-3">{img.label}</p>
                    <p className="font-mono text-sm text-muted leading-relaxed">{img.sub}</p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* ── FINAL DESIGN ── */}
      <section className="py-24 border-t border-border">
        <div className="px-8 md:px-20 max-w-7xl mx-auto mb-12">
          <AnimatedSection>
            <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
              05 · Final Design
            </p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight">
              Crane 68
            </h2>
          </AnimatedSection>
        </div>

        {/* Hero render — full bleed */}
        <AnimatedSection>
          <div className="relative w-full aspect-video mb-4">
            <Image
              src={finalRenders[0]}
              alt="Crane 68 — final design hero"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </AnimatedSection>

        {/* 3-up renders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-0">
          {finalRenders.slice(1).map((src, i) => (
            <AnimatedSection key={src} delay={i * 0.1}>
              <div className="relative aspect-[4/3]">
                <Image src={src} alt={`Crane 68 render ${i + 2}`} fill className="object-cover" sizes="33vw" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto border-t border-border">
        <AnimatedSection className="mb-12">
          <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
            06 · Gallery
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight">
            All Views
          </h2>
        </AnimatedSection>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {galleryImages.map((src, i) => (
            <AnimatedSection key={src} delay={i * 0.04}>
              <div className="relative overflow-hidden break-inside-avoid border border-border">
                <Image
                  src={src}
                  alt={`Crane 68 detail ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <section className="py-16 px-8 md:px-20 border-t border-border text-center">
        <Link
          href="/robotic"
          className="font-mono text-xs text-muted hover:text-accent transition-colors tracking-widest uppercase"
        >
          ← Back to Industrial Design
        </Link>
      </section>

    </main>
  )
}
