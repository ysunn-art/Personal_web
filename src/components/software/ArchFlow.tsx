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
