export interface Capability {
  number: number
  title: string
  description: string
  endpoint: string
  icon: string
  detail: string
}

export const thothCapabilities: Capability[] = [
  {
    number: 1,
    title: 'SME Onboarding',
    description: 'Register subject matter experts with persistent profiles',
    endpoint: 'POST /smes',
    icon: '👤',
    detail: 'Creates a persistent SME profile with name, expertise areas, and contact info. Supports GET /smes and GET /smes/{id} for retrieval.',
  },
  {
    number: 2,
    title: 'Expert Interview',
    description: 'AI-driven structured knowledge capture via conversation',
    endpoint: 'POST /interviews/{id}/turns',
    icon: '🎙️',
    detail: 'Claude Haiku 4.5 conducts the interview, generating follow-up questions to extract deep expertise. Detects completion automatically and marks the interview done.',
  },
  {
    number: 3,
    title: 'Material Ingestion',
    description: 'Accepts PDFs, text, and markdown source documents',
    endpoint: 'POST /smes/{id}/materials',
    icon: '📄',
    detail: 'Parses PDFs via pypdf and text via UTF-8 decode. Files stored on disk, text extracted lazily during synthesis. Max 10 MB per file.',
  },
  {
    number: 4,
    title: 'Knowledge Synthesis',
    description: 'Claude Sonnet synthesizes interview + materials into structured entries',
    endpoint: 'POST /smes/{id}/knowledge/synthesize',
    icon: '🧠',
    detail: 'Reads interview transcripts and all uploaded materials, calls Claude Sonnet 4.5, stores as draft. Supports manual override via PUT /knowledge/{id}.',
  },
  {
    number: 5,
    title: 'Review & Approval',
    description: 'Human-in-the-loop approval before knowledge goes live',
    endpoint: 'POST /knowledge/{id}/approve',
    icon: '✅',
    detail: 'Two-stage approval: SME approves → admin validates. Knowledge only enters the live knowledge base after admin-approve. State machine enforces valid transitions.',
  },
  {
    number: 6,
    title: 'Knowledge-Grounded Q&A',
    description: 'Vector search retrieves relevant knowledge, Claude answers',
    endpoint: 'POST /query',
    icon: '💬',
    detail: 'Local sentence-transformers embed the query, pgvector cosine search retrieves top 5 approved entries, Claude Sonnet 4.5 generates a grounded answer with citations.',
  },
  {
    number: 7,
    title: 'Clarifying Follow-ups',
    description: 'Asks before answering when the question is ambiguous',
    endpoint: 'POST /query',
    icon: '🔍',
    detail: 'Returns response_type: "clarification" when the question is too vague. Multi-turn session context maintained in-memory via SessionStore.',
  },
  {
    number: 8,
    title: 'Routing & Escalation',
    description: 'Routes to the right SME when no knowledge exists',
    endpoint: 'POST /query',
    icon: '🔀',
    detail: 'Returns response_type: "routing" with relevant SME candidates when no knowledge base match. Escalates to administrator when no clear SME match exists.',
  },
]

export const thothTechStack = [
  { name: 'FastAPI', color: '#009688' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'pgvector', color: '#4A90D9' },
  { name: 'Claude Sonnet 4.5', color: '#6b8fa3' },
  { name: 'Claude Haiku 4.5', color: '#8aaab8' },
  { name: 'OpenRouter', color: '#ff6b35' },
  { name: 'sentence-transformers', color: '#f5a623' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Railway', color: '#6d28d9' },
  { name: 'Alembic', color: '#888' },
]
