'use client'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { HeroShot } from '@/components/about/HeroShot'
import { IDCard } from '@/components/about/IDCard'
import { NowGrid } from '@/components/about/NowGrid'
import { StackGrid } from '@/components/about/StackGrid'

const HOBBIES = [
  {
    name: 'Gaming',
    desc: 'Roguelikes, strategy, and anything with good systems design. Slay the Spire, Balatro, Factorio.',
    accent: '#d6451f',
  },
  {
    name: 'Snooker',
    desc: 'Precision, patience, and geometry. A good frame is like debugging — one shot at a time.',
    accent: '#2d8b57',
  },
  {
    name: 'Snowboarding',
    desc: 'Stevens Pass regular. Nothing clears the head like a cold run down a blue slope.',
    accent: '#4a90d9',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-8">
        {/* Page header */}
        <div className="flex items-center justify-between border-b border-border pb-6 mb-16">
          <motion.span
            className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Eason / about
          </motion.span>
          <motion.span
            className="flex items-center gap-2 font-mono text-[11px] text-muted tracking-[0.15em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.span
              className="inline-block w-[6px] h-[6px] bg-accent rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
            currently · seattle, wa
          </motion.span>
        </div>

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 items-start mb-24">
          <div>
            <motion.h1
              className="font-mono text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.21, 0.45, 0.15, 1] }}
            >
              Builds things
              <br />
              that <span className="text-accent italic">move,</span>
              <br />
              think, and ship.
            </motion.h1>

            <motion.p
              className="font-mono text-sm text-text leading-relaxed max-w-[56ch] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I&apos;m a graduate student at the Global Innovation Exchange (GIX) working at the intersection of robotics, systems, and product. Most days I&apos;m somewhere between a ROS2 terminal and a design doc.
            </motion.p>

            <motion.p
              className="font-mono text-sm text-muted leading-relaxed max-w-[56ch]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I like the part of engineering where messy hardware meets clean abstractions — and the part of product where a sharp question matters more than a polished slide.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6">
            <HeroShot />
            <IDCard />
          </div>
        </div>

        {/* SECTION 01 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-baseline gap-8 border-b border-border pb-3 mb-8">
            <span className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase shrink-0">
              <span className="text-accent">01 /</span> what i&apos;m doing
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight italic">
              software & robotics development
            </h2>
          </div>

          <div className="max-w-[64ch] space-y-4">
            <p className="font-mono text-sm text-text leading-relaxed">
              I build across the full stack — from low-level ROS2 control pipelines and VLA models for robot manipulation, to full-stack AI systems and web applications. My work sits at the intersection of hardware and software, where clean abstractions meet real-world constraints.
            </p>
            <p className="font-mono text-sm text-muted leading-relaxed">
              Currently at GIX, my focus spans robotics engineering, responsible AI, and product design. One week I&apos;m comparing controller architectures for a bi-manual arm setup, the next I&apos;m shipping a full-stack knowledge management system for a hackathon.
            </p>
          </div>
        </AnimatedSection>

        {/* SECTION 02 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-baseline gap-8 border-b border-border pb-3 mb-8">
            <span className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase shrink-0">
              <span className="text-accent">02 /</span> top of mind
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight italic">
              what&apos;s running in the background
            </h2>
          </div>
          <NowGrid />
        </AnimatedSection>

        {/* SECTION 03 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-baseline gap-8 border-b border-border pb-3 mb-8">
            <span className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase shrink-0">
              <span className="text-accent">03 /</span> tools of the trade
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight italic">
              what I reach for
            </h2>
          </div>
          <StackGrid />
        </AnimatedSection>

        {/* SECTION 04 */}
        <AnimatedSection className="mb-20">
          <div className="flex items-baseline gap-8 border-b border-border pb-3 mb-8">
            <span className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase shrink-0">
              <span className="text-accent">04 /</span> how I work
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight italic">
              opinions, lightly held
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
            <div className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase leading-loose">
              Principles
              <br />
              ──────
              <br />
              specific &gt; broad
              <br />
              short &gt; formal
              <br />
              ship &gt; plan
              <br />
              cross-domain
            </div>
            <div className="space-y-4">
              <p className="font-mono text-sm text-text leading-relaxed max-w-[64ch]">
                I prefer <em className="text-accent not-italic">specific, technically grounded</em> ideas over broad ones — when brainstorming a robot arm project, &quot;electronics assembly on a real PCB&quot; beats &quot;robotics for industry.&quot; Constraints make the design happen.
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed max-w-[64ch]">
                I write the way I talk: short, direct, mostly lowercase. I trust readers to fill in the obvious parts. The same goes for code — I&apos;d rather have a small thing running on real hardware than a polished diagram of a thing that doesn&apos;t.
              </p>
              <p className="font-mono text-sm text-muted leading-relaxed max-w-[64ch]">
                Most of what I find interesting lives at a seam: control theory meets ML, ROS2 meets mobile, ethics meets shipping. I try to stay fluent on both sides of whichever seam I&apos;m on.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SECTION 05 — Hobbies */}
        <AnimatedSection className="mb-20">
          <div className="flex items-baseline gap-8 border-b border-border pb-3 mb-8">
            <span className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase shrink-0">
              <span className="text-accent">05 /</span> off the clock
            </span>
            <h2 className="font-mono text-2xl font-bold tracking-tight italic">
              what I do when I&apos;m not building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {HOBBIES.map((hobby, i) => (
              <motion.div
                key={hobby.name}
                className="group/hobby border border-border bg-surface p-6 hover:border-accent/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                data-cursor-hover
              >
                <div
                  className="w-3 h-3 rounded-full mb-4"
                  style={{ backgroundColor: hobby.accent }}
                />
                <h3 className="font-mono text-lg font-bold text-text mb-2 group-hover/hobby:text-accent transition-colors">
                  {hobby.name}
                </h3>
                <p className="font-mono text-xs text-muted leading-relaxed">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Page footer */}
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted tracking-[0.15em] uppercase">
            // end of file · last compiled{' '}
            <span className="text-accent">2026</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ysunn-art"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-muted hover:text-accent transition-colors tracking-[0.15em] uppercase"
            >
              github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-muted hover:text-accent transition-colors tracking-[0.15em] uppercase"
            >
              linkedin
            </a>
            <a
              href="mailto:easons1c@gmail.com"
              className="font-mono text-[10px] text-muted hover:text-accent transition-colors tracking-[0.15em] uppercase"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
