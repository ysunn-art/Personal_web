import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlowButton } from '@/components/ui/GlowButton'

export default function RoboticPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-8">
          Robotic · Coming Soon
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
          Robotic
          <br />
          <span className="text-muted">Engineering</span>
        </h1>
        <p className="font-mono text-xs text-muted max-w-sm leading-relaxed mb-10">
          Robotics and automation systems. Work in progress.
        </p>
        <GlowButton href="/" variant="outline">← Back to Home</GlowButton>
      </AnimatedSection>
    </main>
  )
}
