# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interactive dark-industrial portfolio site with three category routes (Robotic, Software, Product). Implement Robotic (industrial design — Crane 68) and Software (Project Thoth) now; Product is a coming-soon placeholder.

**Architecture:** Multi-page Next.js app. Landing page (`/`) shows a category nav with 3 cards. Each category is a separate route: `/robotic`, `/software`, `/product`. Shared layout (Navbar, Footer, CustomCursor) wraps all routes via the root layout. Dark aesthetic: black background, neon green accent, industrial typography. Framer Motion drives all animations.

**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Deployed on Vercel

---

## Route & File Map

```
src/app/
  layout.tsx                 # Root layout: fonts, cursor, navbar, footer
  globals.css                # Design tokens, base styles
  page.tsx                   # Landing: hero + 3 category cards
  robotic/
    page.tsx                 # Robotic/design portfolio page
  software/
    page.tsx                 # Software/Project Thoth page
  product/
    page.tsx                 # Product — coming soon placeholder

src/components/
  layout/
    Navbar.tsx               # Top nav with 3 category links + logo
    Footer.tsx               # Email, social, copyright
  ui/
    CustomCursor.tsx         # Neon cursor follower
    AnimatedSection.tsx      # Scroll-triggered fade+slide wrapper
    GlowButton.tsx           # Magnetic glow button
    CategoryCard.tsx         # Landing page category entry card
  hero/
    HeroSection.tsx          # Full-viewport landing hero + category cards
    ParticleField.tsx        # Canvas particle background
  robotic/
    RoboticHero.tsx          # Page header for /robotic
    TiltCard.tsx             # 3D perspective tilt project card
    Lightbox.tsx             # Full-screen image viewer
    RoboticGallery.tsx       # Grid of tilt cards
  software/
    SoftwareHero.tsx         # Page header for /software
    CapabilityCard.tsx       # Flip card (front=overview, back=detail)
    CapabilityGrid.tsx       # 8-card grid
    ArchFlow.tsx             # Pipeline diagram
    TechPills.tsx            # Animated tech badges
  product/
    ComingSoon.tsx           # Placeholder page content

src/data/
  design-projects.ts         # Robotic/design project metadata
  thoth-capabilities.ts      # 8 Thoth capabilities + tech stack

src/hooks/
  useTilt.ts                 # Mouse → 3D CSS transform
```

---

## Task 1: Project Initialization

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx` (skeleton)

- [ ] **Step 1: Scaffold Next.js project in the repo root**

```bash
cd "/Users/eason/Desktop/University of Washington/2026SP/Techin_510_website"
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

Accept all prompts with defaults.

- [ ] **Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

Expected: installs cleanly, no peer-dep errors.

- [ ] **Step 3: Write design tokens into `src/app/globals.css`**

Replace the entire file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #000000;
  --color-surface: #0a0a0a;
  --color-surface-2: #111111;
  --color-border: #1a1a1a;
  --color-accent: #39ff14;
  --color-accent-dim: rgba(57, 255, 20, 0.12);
  --color-text: #ffffff;
  --color-text-muted: #666666;
}

* { cursor: none; }

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
}

::selection {
  background: var(--color-accent);
  color: #000;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--color-bg); }
::-webkit-scrollbar-thumb { background: var(--color-accent); }
```

- [ ] **Step 4: Configure Tailwind in `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#39ff14',
        surface: '#0a0a0a',
        'surface-2': '#111111',
        border: '#1a1a1a',
        muted: '#666666',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 5: Set up root layout `src/app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Eason Sun — Portfolio',
  description: 'Robotic design · Software engineering · Product design',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 6: Verify dev server starts cleanly**

```bash
npm run dev
```

Expected: `localhost:3000` returns 200, no console errors, black background visible.

- [ ] **Step 7: Initialize git and commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js portfolio with design tokens"
```

---

## Task 2: Data Layer

**Files:**
- Create: `src/data/design-projects.ts`
- Create: `src/data/thoth-capabilities.ts`

- [ ] **Step 1: Create `src/data/design-projects.ts`**

```typescript
export interface DesignProject {
  id: string
  title: string
  subtitle: string
  year: number
  images: string[]
  description: string
  tags: string[]
}

export const designProjects: DesignProject[] = [
  {
    id: 'crane-68',
    title: 'Crane 68',
    subtitle: 'Industrial Vehicle Design',
    year: 2025,
    images: [
      '/images/design/crane-68-1.jpg',
      '/images/design/crane-68-2.jpg',
      '/images/design/crane-68-3.jpg',
      '/images/design/crane-68-4.jpg',
    ],
    description:
      'A near-future industrial vehicle concept exploring the intersection of heavy machinery and autonomous systems. Brutalist structural forms with precision engineering details.',
    tags: ['3D Modeling', 'Concept Design', 'Industrial', 'Keyshot'],
  },
]
```

- [ ] **Step 2: Create `src/data/thoth-capabilities.ts`**

```typescript
export interface Capability {
  number: number
  title: string
  description: string
  endpoint: string
  icon: string
  detail: string
}

export const thothCapabilities: Capability[] = [
  {
    number: 1,
    title: 'SME Onboarding',
    description: 'Register subject matter experts with persistent profiles',
    endpoint: 'POST /smes',
    icon: '👤',
    detail: 'Creates a persistent SME profile with name, expertise areas, and contact info. Supports GET /smes and GET /smes/{id} for retrieval.',
  },
  {
    number: 2,
    title: 'Expert Interview',
    description: 'AI-driven structured knowledge capture via conversation',
    endpoint: 'POST /interviews/{id}/turns',
    icon: '🎙️',
    detail: 'Claude Haiku 4.5 conducts the interview, generating follow-up questions to extract deep expertise. Detects completion automatically and marks the interview done.',
  },
  {
    number: 3,
    title: 'Material Ingestion',
    description: 'Accepts PDFs, text, and markdown source documents',
    endpoint: 'POST /smes/{id}/materials',
    icon: '📄',
    detail: 'Parses PDFs via pypdf and text via UTF-8 decode. Files stored on disk, text extracted lazily during synthesis. Max 10 MB per file.',
  },
  {
    number: 4,
    title: 'Knowledge Synthesis',
    description: 'Claude Sonnet synthesizes interview + materials into structured entries',
    endpoint: 'POST /smes/{id}/knowledge/synthesize',
    icon: '🧠',
    detail: 'Reads interview transcripts and all uploaded materials, calls Claude Sonnet 4.5, stores as draft. Supports manual override via PUT /knowledge/{id}.',
  },
  {
    number: 5,
    title: 'Review & Approval',
    description: 'Human-in-the-loop approval before knowledge goes live',
    endpoint: 'POST /knowledge/{id}/approve',
    icon: '✅',
    detail: 'Two-stage approval: SME approves → admin validates. Knowledge only enters the live knowledge base after admin-approve. State machine enforces valid transitions.',
  },
  {
    number: 6,
    title: 'Knowledge-Grounded Q&A',
    description: 'Vector search retrieves relevant knowledge, Claude answers',
    endpoint: 'POST /query',
    icon: '💬',
    detail: 'Local sentence-transformers embed the query, pgvector cosine search retrieves top 5 approved entries, Claude Sonnet 4.5 generates a grounded answer with citations.',
  },
  {
    number: 7,
    title: 'Clarifying Follow-ups',
    description: 'Asks before answering when the question is ambiguous',
    endpoint: 'POST /query',
    icon: '🔍',
    detail: 'Returns response_type: "clarification" when the question is too vague. Multi-turn session context maintained in-memory via SessionStore.',
  },
  {
    number: 8,
    title: 'Routing & Escalation',
    description: 'Routes to the right SME when no knowledge exists',
    endpoint: 'POST /query',
    icon: '🔀',
    detail: 'Returns response_type: "routing" with relevant SME candidates when no knowledge base match. Escalates to administrator when no clear SME match exists.',
  },
]

export const thothTechStack = [
  { name: 'FastAPI', color: '#009688' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'pgvector', color: '#4A90D9' },
  { name: 'Claude Sonnet 4.5', color: '#39ff14' },
  { name: 'Claude Haiku 4.5', color: '#a8ff82' },
  { name: 'OpenRouter', color: '#ff6b35' },
  { name: 'sentence-transformers', color: '#f5a623' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Railway', color: '#6d28d9' },
  { name: 'Alembic', color: '#888' },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/data/
git commit -m "feat: add design and thoth data layer"
```

---

## Task 3: Shared UI Primitives

**Files:**
- Create: `src/components/ui/CustomCursor.tsx`
- Create: `src/components/ui/AnimatedSection.tsx`
- Create: `src/components/ui/GlowButton.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create `src/components/ui/CustomCursor.tsx`**

```typescript
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
```

- [ ] **Step 2: Create `src/components/ui/AnimatedSection.tsx`**

```typescript
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
  id?: string
}

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up', id }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 40 : 0,
        x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.45, 0.15, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create `src/components/ui/GlowButton.tsx`**

```typescript
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
      return <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">{btn}</a>
    }
    return <a href={href}>{btn}</a>
  }
  return btn
}
```

- [ ] **Step 4: Add CustomCursor to root layout**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/ui/CustomCursor'
import './globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Eason Sun — Portfolio',
  description: 'Robotic design · Software engineering · Product design',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 5: Verify cursor renders**

```bash
npm run dev
# Open localhost:3000, move mouse
# Expect: neon green dot + ring following cursor, ring expands when hovering a link
```

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/ src/app/layout.tsx
git commit -m "feat: shared cursor and animation primitives"
```

---

## Task 4: Shared Navbar

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Modify: `src/app/layout.tsx`

The navbar shows the logo + 3 category links (Robotic, Software, Product). Active route is highlighted in accent.

- [ ] **Step 1: Create `src/components/layout/Navbar.tsx`**

```typescript
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '/robotic', label: 'Robotic' },
  { href: '/software', label: 'Software' },
  { href: '/product', label: 'Product' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-border/50 backdrop-blur-md bg-black/70"
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Link
          href="/"
          className="font-mono text-xs text-accent tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"
        >
          EASON SUN
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-xs tracking-wider uppercase transition-colors ${
                  active ? 'text-accent' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono text-muted hover:text-accent transition-colors text-lg"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-2xl text-muted hover:text-accent transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

- [ ] **Step 2: Add Navbar to root layout**

```typescript
// src/app/layout.tsx
import { Navbar } from '@/components/layout/Navbar'

// Inside <body>:
<body>
  <CustomCursor />
  <Navbar />
  {children}
</body>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx src/app/layout.tsx
git commit -m "feat: shared navbar with route-based active state"
```

---

## Task 5: Landing Page (Category Cards)

**Files:**
- Create: `src/components/hero/ParticleField.tsx`
- Create: `src/components/ui/CategoryCard.tsx`
- Modify: `src/app/page.tsx`

Landing page: full-viewport hero with particles + 3 category cards below.

- [ ] **Step 1: Create `src/components/hero/ParticleField.tsx`**

```typescript
'use client'
import { useRef, useEffect } from 'react'

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
      a: Math.random() * 0.4 + 0.1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      pts.forEach((p) => {
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(57,255,20,${p.a})`
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(57,255,20,${0.04 * (1 - d / 110)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
```

- [ ] **Step 2: Create `src/components/ui/CategoryCard.tsx`**

```typescript
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
    >
      <Link
        href={available ? href : '#'}
        className={`group relative block border border-border p-8 transition-all duration-300 ${
          available
            ? 'hover:border-accent/50 hover:bg-surface'
            : 'opacity-40 pointer-events-none'
        }`}
        onClick={!available ? (e) => e.preventDefault() : undefined}
      >
        {/* Index number */}
        <span className="font-mono text-[10px] text-accent/60 tracking-[0.3em] block mb-6">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h2 className="font-mono text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-accent transition-colors">
          {label}
        </h2>

        <p className="font-mono text-xs text-muted leading-relaxed">{description}</p>

        {!available && (
          <span className="absolute top-4 right-4 font-mono text-[9px] text-muted border border-border px-2 py-0.5 tracking-widest">
            COMING SOON
          </span>
        )}

        {/* Arrow */}
        {available && (
          <span className="absolute bottom-6 right-6 font-mono text-muted text-xs group-hover:text-accent group-hover:translate-x-1 transition-all">
            →
          </span>
        )}

        {/* Accent line on hover */}
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
```

- [ ] **Step 3: Write `src/app/page.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { ParticleField } from '@/components/hero/ParticleField'
import { CategoryCard } from '@/components/ui/CategoryCard'

const CATEGORIES = [
  {
    href: '/robotic',
    label: 'Robotic',
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
    label: 'Product',
    description: 'Consumer product design and user experience work.',
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
              'linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)',
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
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-mono text-[9px] text-muted tracking-[0.4em] uppercase">Select</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </section>

      {/* Category cards */}
      <section className="max-w-4xl mx-auto w-full px-8 pb-32 pt-0 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.href} {...cat} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 4: Verify landing page in browser**

```bash
npm run dev
# Expect: dark page, particle field, "EASON." heading, 3 category cards below
# Robotic and Software cards link to their routes; Product card is dimmed with "COMING SOON"
```

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/ src/components/ui/CategoryCard.tsx src/app/page.tsx
git commit -m "feat: landing page with particle hero and 3 category cards"
```

---

## Task 6: Robotic Page

**Files:**
- Create: `src/app/robotic/page.tsx`
- Create: `src/components/robotic/RoboticHero.tsx`
- Create: `src/hooks/useTilt.ts`
- Create: `src/components/robotic/TiltCard.tsx`
- Create: `src/components/robotic/Lightbox.tsx`
- Create: `src/components/robotic/RoboticGallery.tsx`

- [ ] **Step 1: Create `src/hooks/useTilt.ts`**

```typescript
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
```

- [ ] **Step 2: Create `src/components/robotic/TiltCard.tsx`**

```typescript
'use client'
import Image from 'next/image'
import { useTilt } from '@/hooks/useTilt'
import type { DesignProject } from '@/data/design-projects'

interface Props {
  project: DesignProject
  onClick: () => void
}

export function TiltCard({ project, onClick }: Props) {
  const { ref, onMouseMove, onMouseLeave } = useTilt()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-cursor-hover
      style={{ transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d' }}
      className="relative group cursor-pointer overflow-hidden border border-border hover:border-accent/40 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 bg-surface">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-mono font-bold text-base">{project.title}</h3>
          <span className="font-mono text-[10px] text-muted">{project.year}</span>
        </div>
        <p className="font-mono text-xs text-muted mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[9px] text-accent border border-accent/30 px-2 py-0.5 tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none border border-accent/0 group-hover:border-accent/20 transition-colors duration-300" />
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/robotic/Lightbox.tsx`**

```typescript
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
```

- [ ] **Step 4: Create `src/components/robotic/RoboticGallery.tsx`**

```typescript
'use client'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TiltCard } from './TiltCard'
import { Lightbox } from './Lightbox'
import { designProjects } from '@/data/design-projects'
import type { DesignProject } from '@/data/design-projects'

export function RoboticGallery() {
  const [selected, setSelected] = useState<DesignProject | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designProjects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.12}>
            <TiltCard project={project} onClick={() => setSelected(project)} />
          </AnimatedSection>
        ))}
      </div>
      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
```

- [ ] **Step 5: Create `src/components/robotic/RoboticHero.tsx`**

```typescript
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function RoboticHero() {
  return (
    <div className="mb-20">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-5">
          Robotic · Industrial Design
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
          Machines
          <br />
          <span className="text-muted">& Systems</span>
        </h1>
        <p className="font-mono text-xs text-muted max-w-lg leading-relaxed">
          Near-future concept vehicles and industrial systems. 3D modeling, mechanical form development,
          and photorealistic visualization using Rhino and Keyshot.
        </p>
      </AnimatedSection>
    </div>
  )
}
```

- [ ] **Step 6: Create `src/app/robotic/page.tsx`**

```typescript
import { RoboticHero } from '@/components/robotic/RoboticHero'
import { RoboticGallery } from '@/components/robotic/RoboticGallery'

export default function RoboticPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto">
      <RoboticHero />
      <RoboticGallery />
    </main>
  )
}
```

- [ ] **Step 7: Verify robotic page**

Navigate to `localhost:3000/robotic`. Expect: page header, placeholder image cards (gray boxes until real images are added), 3D tilt on hover. Click a card to open the lightbox.

- [ ] **Step 8: Commit**

```bash
git add src/hooks/useTilt.ts src/components/robotic/ src/app/robotic/
git commit -m "feat: robotic page with 3D tilt cards and lightbox"
```

---

## Task 7: Software Page (Project Thoth)

**Files:**
- Create: `src/components/software/SoftwareHero.tsx`
- Create: `src/components/software/CapabilityCard.tsx`
- Create: `src/components/software/CapabilityGrid.tsx`
- Create: `src/components/software/ArchFlow.tsx`
- Create: `src/components/software/TechPills.tsx`
- Create: `src/app/software/page.tsx`

- [ ] **Step 1: Create `src/components/software/CapabilityCard.tsx`**

```typescript
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
```

- [ ] **Step 2: Create `src/components/software/CapabilityGrid.tsx`**

```typescript
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CapabilityCard } from './CapabilityCard'
import { thothCapabilities } from '@/data/thoth-capabilities'

export function CapabilityGrid() {
  return (
    <div>
      <AnimatedSection className="mb-6">
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-1">8 Core Capabilities</p>
        <p className="font-mono text-[10px] text-muted/60">Click any card to reveal implementation detail</p>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {thothCapabilities.map((cap, i) => (
          <AnimatedSection key={cap.number} delay={i * 0.07}>
            <CapabilityCard cap={cap} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/software/ArchFlow.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'

const STEPS = [
  { label: 'Onboard SME', color: '#39ff14' },
  { label: 'Interview', color: '#a8ff82' },
  { label: 'Materials', color: '#39ff14' },
  { label: 'Synthesize', color: '#a8ff82' },
  { label: 'Review', color: '#39ff14' },
  { label: 'Approve', color: '#a8ff82' },
  { label: 'Knowledge DB', color: '#39ff14' },
  { label: 'Q&A / Route', color: '#ff6b35' },
]

export function ArchFlow() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-center min-w-max">
        {STEPS.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-2"
                style={{ backgroundColor: step.color, boxShadow: `0 0 6px ${step.color}` }}
              />
              <span className="font-mono text-[9px] text-muted whitespace-nowrap px-2">
                {step.label}
              </span>
            </motion.div>
            {i < STEPS.length - 1 && (
              <motion.div
                className="w-6 h-px bg-border mb-5"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.15 }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create `src/components/software/TechPills.tsx`**

```typescript
'use client'
import { motion } from 'framer-motion'
import { thothTechStack } from '@/data/thoth-capabilities'

export function TechPills() {
  return (
    <div className="flex flex-wrap gap-3">
      {thothTechStack.map((tech, i) => (
        <motion.span
          key={tech.name}
          className="font-mono text-[10px] px-3 py-1.5 border transition-all cursor-default"
          style={{ borderColor: tech.color + '40', color: tech.color }}
          whileHover={{ borderColor: tech.color, boxShadow: `0 0 10px ${tech.color}25`, y: -2 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
        >
          {tech.name}
        </motion.span>
      ))}
    </div>
  )
}
```

- [ ] **Step 5: Create `src/components/software/SoftwareHero.tsx`**

```typescript
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlowButton } from '@/components/ui/GlowButton'

export function SoftwareHero() {
  return (
    <div className="mb-20">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-5">
          Software · AI Engineering
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
          Project
          <br />
          <span className="text-accent">Thoth</span>
        </h1>
        <p className="font-mono text-xs text-muted max-w-lg leading-relaxed mb-8">
          T-Mobile Hackathon 2025. An AI-powered living knowledge system for subject matter experts —
          capturing expertise through structured interviews, synthesizing it via Claude Sonnet 4.5,
          and answering questions with full RAG grounding and attribution.
        </p>
        <GlowButton href="https://github.com/easons1c" variant="outline">
          View on GitHub ↗
        </GlowButton>
      </AnimatedSection>
    </div>
  )
}
```

- [ ] **Step 6: Create `src/app/software/page.tsx`**

```typescript
import { SoftwareHero } from '@/components/software/SoftwareHero'
import { CapabilityGrid } from '@/components/software/CapabilityGrid'
import { ArchFlow } from '@/components/software/ArchFlow'
import { TechPills } from '@/components/software/TechPills'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default function SoftwarePage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto">
      <SoftwareHero />

      <AnimatedSection className="mb-16 p-6 border border-border bg-surface">
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
          System Pipeline
        </p>
        <ArchFlow />
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <CapabilityGrid />
      </AnimatedSection>

      <AnimatedSection>
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-6">Tech Stack</p>
        <TechPills />
      </AnimatedSection>
    </main>
  )
}
```

- [ ] **Step 7: Verify software page**

Navigate to `localhost:3000/software`. Expect: header with "Project Thoth" in accent, pipeline diagram, 8 capability cards, tech pills. Click a card to flip it; back side shows implementation detail.

- [ ] **Step 8: Commit**

```bash
git add src/components/software/ src/app/software/
git commit -m "feat: software page with Thoth capability flip cards and arch diagram"
```

---

## Task 8: Product Placeholder Page

**Files:**
- Create: `src/app/product/page.tsx`

- [ ] **Step 1: Create `src/app/product/page.tsx`**

```typescript
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlowButton } from '@/components/ui/GlowButton'

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-8">
          Product · Coming Soon
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
          Product
          <br />
          <span className="text-muted">Design</span>
        </h1>
        <p className="font-mono text-xs text-muted max-w-sm leading-relaxed mb-10">
          Consumer product and UX work in progress. Check back later.
        </p>
        <GlowButton href="/" variant="outline">← Back to Home</GlowButton>
      </AnimatedSection>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/product/
git commit -m "feat: product placeholder page"
```

---

## Task 9: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create `src/components/layout/Footer.tsx`**

```typescript
export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted">© 2025 Eason Sun</span>
        <a
          href="mailto:easons1c@gmail.com"
          className="font-mono text-[10px] text-muted hover:text-accent transition-colors"
        >
          easons1c@gmail.com
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Add Footer to root layout**

```typescript
// src/app/layout.tsx
import { Footer } from '@/components/layout/Footer'

<body>
  <CustomCursor />
  <Navbar />
  {children}
  <Footer />
</body>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx src/app/layout.tsx
git commit -m "feat: shared footer"
```

---

## Task 10: Add Design Images + Production Build

**Files:**
- Create: `public/images/design/crane-68-1.jpg` (and others)
- Modify: `src/data/design-projects.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Copy design renders into `public/images/design/`**

Export from your design tools (Keyshot / Rhino) at minimum 2560×1600px. Name files:
```
public/images/design/
  crane-68-1.jpg
  crane-68-2.jpg
  crane-68-3.jpg
  crane-68-4.jpg
```

- [ ] **Step 2: Update `next.config.ts` for image optimization**

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
```

- [ ] **Step 3: Update `src/data/design-projects.ts`** if you renamed images or added more projects — match filenames exactly.

- [ ] **Step 4: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: 0 errors. Fix any type errors before continuing.

- [ ] **Step 5: Run production build**

```bash
npm run build
```

Expected: Build succeeds. All routes pre-rendered.

- [ ] **Step 6: Push to GitHub and deploy to Vercel**

Create repo on GitHub, then:
```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git
git push -u origin main
```

Import the repo at [vercel.com](https://vercel.com). Vercel auto-detects Next.js. Click Deploy.

Expected: Live at `https://your-project.vercel.app` within 2 minutes.

- [ ] **Step 7: Verify all three routes on the deployed site**

```bash
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B goto https://your-project.vercel.app
$B screenshot /tmp/deployed-home.png
$B goto https://your-project.vercel.app/robotic
$B screenshot /tmp/deployed-robotic.png
$B goto https://your-project.vercel.app/software
$B screenshot /tmp/deployed-software.png
```

Expected: All three pages load, no JS errors in console.

- [ ] **Step 8: Final commit**

```bash
git add -A
git commit -m "feat: production build with design images"
```

---

## Self-Review

**Spec coverage:**
- [x] Multi-page (not single-page) — `/`, `/robotic`, `/software`, `/product`
- [x] 3 sections with room for future expansion — adding a new category = new route + card in `CATEGORIES` array on landing
- [x] Robotic section implemented — TiltCard + Lightbox in Task 6
- [x] Software section implemented — Thoth flip cards + ArchFlow in Task 7
- [x] Product placeholder — Task 8
- [x] Dark industrial aesthetic — design tokens in Task 1, applied site-wide
- [x] Interactive beyond pictures — 3D tilt, flip cards, particles, lightbox, animated pipeline
- [x] Shared navbar with route-aware active state — Task 4
- [x] Custom cursor — Task 3
- [x] Deployed — Task 10

**Placeholder scan:** No TBD, TODO, or empty code blocks anywhere.

**Type consistency:**
- `DesignProject` defined in `design-projects.ts` → imported by `TiltCard`, `Lightbox`, `RoboticGallery`
- `Capability` defined in `thoth-capabilities.ts` → imported by `CapabilityCard`, `CapabilityGrid`
- `thothTechStack` exported from `thoth-capabilities.ts` → imported by `TechPills`
- `useTilt` returns `{ ref, onMouseMove, onMouseLeave }` → used identically in `TiltCard`
