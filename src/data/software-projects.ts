export interface SoftwareProject {
  id: string
  slug: string
  title: string
  subtitle: string
  year: number
  status: 'active' | 'completed' | 'coming-soon'
  description: string
  tags: string[]
  github?: string
  available: boolean
}

export const softwareProjects: SoftwareProject[] = [
  {
    id: 'thoth',
    slug: 'thoth',
    title: 'Project Thoth',
    subtitle: 'AI Knowledge System',
    year: 2025,
    status: 'active',
    description:
      'T-Mobile Hackathon 2025. FastAPI backend implementing 8 AI capabilities for expert knowledge capture, vector-based retrieval, and intelligent routing via Claude Sonnet 4.5.',
    tags: ['FastAPI', 'RAG', 'pgvector', 'Claude API', 'Python'],
    github: 'https://github.com/ysunn-art/Thoth',
    available: true,
  },
  {
    id: 'placeholder-1',
    slug: '',
    title: 'Next Project',
    subtitle: 'Coming Soon',
    year: 2026,
    status: 'coming-soon',
    description: 'In development.',
    tags: [],
    available: false,
  },
]
