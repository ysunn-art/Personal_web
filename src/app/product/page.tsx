import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlowButton } from '@/components/ui/GlowButton'

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-8">
          Product · Coming Soon
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
          Product
          <br />
          <span className="text-muted">Design</span>
        </h1>
        <p className="font-mono text-xs text-muted max-w-sm leading-relaxed mb-10">
          Consumer product and UX work in progress. Check back later.
        </p>
        <GlowButton href="/" variant="outline">← Back to Home</GlowButton>
      </AnimatedSection>
    </main>
  )
}
