'use client'
import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TiltCard } from './TiltCard'
import { Lightbox } from './Lightbox'
import { designProjects } from '@/data/design-projects'
import type { DesignProject } from '@/data/design-projects'

export function RoboticGallery() {
  const [selected, setSelected] = useState<DesignProject | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designProjects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.12}>
            <TiltCard project={project} onClick={() => setSelected(project)} />
          </AnimatedSection>
        ))}
      </div>
      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
