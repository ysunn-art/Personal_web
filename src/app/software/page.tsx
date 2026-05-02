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
