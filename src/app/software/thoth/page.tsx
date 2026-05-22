import Link from 'next/link'
import { SoftwareHero } from '@/components/software/SoftwareHero'
import { CapabilityGrid } from '@/components/software/CapabilityGrid'
import { ArchFlow } from '@/components/software/ArchFlow'
import { TechPills } from '@/components/software/TechPills'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const resumeHighlights = [
  {
    number: '01',
    text: 'Built FastAPI backend with 8 production AI capabilities for expert knowledge capture, synthesis, and retrieval',
  },
  {
    number: '02',
    text: 'Designed RAG pipeline — pgvector cosine similarity search, PQ indexing, sentence-transformers (384-dim local embeddings)',
  },
  {
    number: '03',
    text: 'Integrated Claude Haiku 4.5 / Sonnet 4.5 via OpenRouter for structured AI-driven interviews and knowledge synthesis',
  },
  {
    number: '04',
    text: 'Implemented two-stage human-in-the-loop approval workflow (SME review → admin validation) enforced by a state machine',
  },
  {
    number: '05',
    text: 'Built unified query classifier routing responses to: grounded answer / clarification request / SME escalation',
  },
  {
    number: '06',
    text: 'Deployed on Railway with PostgreSQL + pgvector containerization, Alembic migrations, and request-ID middleware logging',
  },
]

const recentUpdates = [
  {
    date: 'May 2025',
    items: [
      'Unified _classify_and_route method replacing sequential routing logic',
      'Relevance filtering at 0.45 threshold with fast-path bypass below 0.30',
      'Sanitized input processing before embedding',
      'Token usage tracking across all LLM interactions',
      'Request-ID middleware logging with duration metrics',
    ],
  },
]

export default function ThothPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto">
      {/* Back link */}
      <AnimatedSection className="mb-12">
        <Link
          href="/software"
          className="font-mono text-[10px] text-muted tracking-widest uppercase hover:text-accent transition-colors"
        >
          ← Software
        </Link>
      </AnimatedSection>

      {/* Hero */}
      <SoftwareHero />

      {/* Metadata strip */}
      <AnimatedSection className="mb-16">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
          <div>
            <p className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">Event</p>
            <p className="font-mono text-xs">T-Mobile Hackathon 2025</p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">Year</p>
            <p className="font-mono text-xs">2025</p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">Status</p>
            <p className="font-mono text-xs text-accent">Active</p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">Repository</p>
            <a
              href="https://github.com/ysunn-art/Thoth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:underline"
            >
              github.com/ysunn-art/Thoth ↗
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Resume Highlights */}
      <AnimatedSection className="mb-16">
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-8">
          Highlights
        </p>
        <div className="space-y-0 border-t border-border">
          {resumeHighlights.map((item) => (
            <div
              key={item.number}
              className="flex gap-6 py-5 border-b border-border group hover:bg-surface/60 transition-colors px-1"
            >
              <span className="font-mono text-[10px] text-accent tracking-wider shrink-0 mt-0.5 w-6">
                {item.number}
              </span>
              <p className="font-mono text-xs text-text leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* System Pipeline */}
      <AnimatedSection className="mb-16 p-6 border border-border bg-surface">
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
          System Pipeline
        </p>
        <ArchFlow />
      </AnimatedSection>

      {/* Capabilities */}
      <AnimatedSection className="mb-16">
        <CapabilityGrid />
      </AnimatedSection>

      {/* Recent Updates */}
      <AnimatedSection className="mb-16">
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-8">
          Recent Updates
        </p>
        {recentUpdates.map((update) => (
          <div key={update.date} className="border border-border bg-surface p-6">
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-5">
              {update.date}
            </p>
            <ul className="space-y-3">
              {update.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-[10px] text-accent mt-0.5 shrink-0">—</span>
                  <p className="font-mono text-xs text-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection>
        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-6">
          Tech Stack
        </p>
        <TechPills />
      </AnimatedSection>

      {/* Footer nav */}
      <AnimatedSection className="mt-24 pt-8 border-t border-border">
        <Link
          href="/software"
          className="font-mono text-[10px] text-muted tracking-widest uppercase hover:text-accent transition-colors"
        >
          ← Back to Software
        </Link>
      </AnimatedSection>
    </main>
  )
}
