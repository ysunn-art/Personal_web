import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlowButton } from '@/components/ui/GlowButton'

export function SoftwareHero() {
  return (
    <div className="mb-20">
      <AnimatedSection>
        <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-5">
          Software · AI Engineering
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
          Project
          <br />
          <span className="text-accent">Thoth</span>
        </h1>
        <p className="font-mono text-xs text-muted max-w-lg leading-relaxed mb-8">
          T-Mobile Hackathon 2025. An AI-powered living knowledge system for subject matter experts —
          capturing expertise through structured interviews, synthesizing it via Claude Sonnet 4.5,
          and answering questions with full RAG grounding and attribution.
        </p>
        <GlowButton href="https://github.com/ysunn-art/Thoth" variant="outline">
          View on GitHub ↗
        </GlowButton>
      </AnimatedSection>
    </div>
  )
}
