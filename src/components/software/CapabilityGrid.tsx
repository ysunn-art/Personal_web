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
