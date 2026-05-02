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
