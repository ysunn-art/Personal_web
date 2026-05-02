'use client'
import { motion } from 'framer-motion'

const STEPS = [
  { label: 'Onboard SME', color: '#6b8fa3' },
  { label: 'Interview', color: '#8aaab8' },
  { label: 'Materials', color: '#6b8fa3' },
  { label: 'Synthesize', color: '#8aaab8' },
  { label: 'Review', color: '#6b8fa3' },
  { label: 'Approve', color: '#8aaab8' },
  { label: 'Knowledge DB', color: '#6b8fa3' },
  { label: 'Q&A / Route', color: '#b07050' },
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
                style={{ backgroundColor: step.color, boxShadow: `0 0 6px ${step.color}40` }}
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
