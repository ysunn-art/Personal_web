'use client'
import { motion } from 'framer-motion'

const STACK = [
  { label: 'robotics', items: ['ROS2', 'LeRobot', 'VLA models'] },
  { label: 'infra', items: ['Docker', 'dev containers', 'GPU pipelines'] },
  { label: 'mobile', items: ['Kotlin', 'Android', 'Jetpack'] },
  { label: 'ml / cv', items: ['PyTorch', 'computer vision', 'RL'] },
  { label: 'product', items: ['User research', 'pretotyping', 'fake-door tests'] },
  { label: 'prototyping', items: ['Streamlit', 'Python', 'quick UIs'] },
  { label: 'workflow', items: ['Claude Code', 'git', 'terminal-first'] },
  { label: 'comms', items: ['English / 中文', 'casual + direct'] },
]

export function StackGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-border">
      {STACK.map((cell, i) => (
        <motion.div
          key={cell.label}
          className="group/stack p-5 border border-border flex flex-col justify-between gap-2 min-h-[120px] bg-bg hover:bg-accent-dim transition-colors duration-200"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
          data-cursor-hover
        >
          <span className="font-mono text-[9px] text-muted tracking-[0.15em] uppercase group-hover/stack:text-accent transition-colors">
            {cell.label}
          </span>
          <div className="font-mono text-sm font-bold leading-relaxed group-hover/stack:text-accent transition-colors flex flex-wrap gap-x-2">
            {cell.items.map((item, j) => (
              <span key={item}>
                {j > 0 && ', '}
                {j === 0 ? <span className="text-accent">{item}</span> : item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
