'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTilt } from '@/hooks/useTilt'
import type { DesignProject } from '@/data/design-projects'

interface Props {
  project: DesignProject
}

export function TiltCard({ project }: Props) {
  const { ref, onMouseMove, onMouseLeave } = useTilt()

  return (
    <Link href={`/industrial/${project.slug}`}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-cursor-hover
        style={{ transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d' }}
        className="relative group cursor-pointer overflow-hidden border border-border hover:border-accent/40 transition-colors"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5 bg-surface">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-mono font-bold text-base">{project.title}</h3>
            <span className="font-mono text-[10px] text-muted">{project.year}</span>
          </div>
          <p className="font-mono text-xs text-muted mb-3 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[9px] text-accent border border-accent/30 px-2 py-0.5 tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none border border-accent/0 group-hover:border-accent/20 transition-colors duration-300" />
        <span className="absolute bottom-5 right-5 font-mono text-[10px] text-muted group-hover:text-accent transition-colors">
          View case study →
        </span>
      </div>
    </Link>
  )
}
