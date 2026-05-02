'use client'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TiltCard } from './TiltCard'
import { designProjects } from '@/data/design-projects'

export function RoboticGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {designProjects.map((project, i) => (
        <AnimatedSection key={project.id} delay={i * 0.12}>
          <TiltCard project={project} />
        </AnimatedSection>
      ))}
    </div>
  )
}
