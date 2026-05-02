export interface DesignProject {
  id: string
  title: string
  subtitle: string
  year: number
  images: string[]
  description: string
  tags: string[]
}

export const designProjects: DesignProject[] = [
  {
    id: 'crane-68',
    title: 'Crane 68',
    subtitle: 'Industrial Vehicle Design',
    year: 2025,
    images: [
      '/images/design/crane-68-1.jpg',
      '/images/design/crane-68-2.jpg',
      '/images/design/crane-68-3.jpg',
      '/images/design/crane-68-4.png',
    ],
    description:
      'A near-future industrial vehicle concept exploring the intersection of heavy machinery and autonomous systems. Brutalist structural forms with precision engineering details.',
    tags: ['3D Modeling', 'Concept Design', 'Industrial', 'Keyshot'],
  },
]
