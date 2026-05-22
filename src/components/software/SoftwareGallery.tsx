'use client'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SoftwareCard } from './SoftwareCard'
import { softwareProjects } from '@/data/software-projects'

export function SoftwareGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {softwareProjects.map((project, i) => (
        <AnimatedSection key={project.id} delay={i * 0.12}>
          <SoftwareCard project={project} />
        </AnimatedSection>
      ))}
    </div>
  )
}
