import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function IndustrialHero() {
  return (
    <div className="mb-20">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-5">
          Industrial Design
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
