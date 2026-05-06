'use client'
import { motion } from 'framer-motion'

const FIELDS = [
  { key: 'id', value: 'eason' },
  { key: 'loc', value: 'Seattle, WA' },
  { key: 'role', value: 'MS @ GIX' },
]

const FIELDS2 = [
  { key: 'field', value: 'robotics' },
  { key: 'stack', value: 'ROS2, Kotlin' },
  { key: 'lang', value: 'EN / 中文' },
]

const FIELDS3 = [
  { key: 'next', value: 'Amazon SDE' },
  { key: 'team', value: 'One Medical' },
]

function Row({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      className="grid grid-cols-[70px_1fr] gap-2 group/row"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] group-hover/row:text-accent transition-colors">
        {label}
      </span>
      <span className="font-mono text-[10px] text-text group-hover/row:text-accent transition-colors">
        {value}
      </span>
    </motion.div>
  )
}

export function IDCard() {
  return (
    <motion.div
      className="border border-border bg-surface p-5 font-mono flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.21, 0.45, 0.15, 1] }}
      data-cursor-hover
    >
      {FIELDS.map((f, i) => (
        <Row key={f.key} label={f.key} value={f.value} delay={0.7 + i * 0.1} />
      ))}
      <hr className="border-border/50" />
      {FIELDS2.map((f, i) => (
        <Row key={f.key} label={f.key} value={f.value} delay={1.0 + i * 0.1} />
      ))}
      <hr className="border-border/50" />
      {FIELDS3.map((f, i) => (
        <Row key={f.key} label={f.key} value={f.value} delay={1.4 + i * 0.1} />
      ))}
    </motion.div>
  )
}
