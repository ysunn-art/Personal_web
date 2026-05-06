'use client'
import { motion } from 'framer-motion'

const NOW_ITEMS = [
  {
    tag: 'building',
    title: 'Bi-manual robot arms',
    desc: 'VLA model ("Rosetta") on top of a classical ROS2 control pipeline. Currently weighing Forward Command vs. Joint Trajectory controllers.',
  },
  {
    tag: 'shipping',
    title: 'Mobile @ Amazon',
    desc: 'Spinning up on Kotlin / Android for the One Medical app. Pivoted from Swift after scoping the actual work.',
  },
  {
    tag: 'thinking',
    title: 'Power & responsibility',
    desc: 'Reading on technology and power for TECHIN 522. Trying to keep the ethics work as rigorous as the technical work.',
  },
  {
    tag: 'playing',
    title: 'Slay the Spire',
    desc: 'Silent main, currently obsessed with poison + ability-trigger builds. Same energy as debugging a controller, honestly.',
  },
]

export function NowGrid() {
  return (
    <div className="border border-border bg-surface">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-text text-bg">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase">// now.log</span>
        <span className="font-mono text-[9px] text-text-muted opacity-60 tracking-wider">live · updated today</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {NOW_ITEMS.map((item, i) => (
          <motion.div
            key={item.tag}
            className={`group/now p-6 border-border ${
              i % 2 === 0 ? 'md:border-r' : ''
            } ${i < 2 ? 'border-b' : ''} ${
              i === 0 ? 'border-b md:border-r' : ''
            } hover:bg-accent-dim transition-colors duration-200`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          >
            <span className="font-mono text-[10px] text-accent tracking-[0.12em] uppercase mb-3 block">
              → {item.tag}
            </span>
            <h3 className="font-mono text-lg font-bold text-text mb-2 group-hover/now:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="font-mono text-xs text-muted leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
