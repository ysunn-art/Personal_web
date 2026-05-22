import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SoftwareGallery } from '@/components/software/SoftwareGallery'

export default function SoftwarePage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto">
      {/* Category hero */}
      <div className="mb-20">
        <AnimatedSection>
          <p className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-5">
            Software · AI Engineering
          </p>
          <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            Systems
            <br />
            <span className="text-muted">&amp; Software</span>
          </h1>
          <p className="font-mono text-xs text-muted max-w-lg leading-relaxed">
            AI-powered applications, backend systems, and data pipelines. From hackathon prototypes to
            production-grade architectures — built with FastAPI, LLMs, and vector search.
          </p>
        </AnimatedSection>
      </div>

      <SoftwareGallery />
    </main>
  )
}
