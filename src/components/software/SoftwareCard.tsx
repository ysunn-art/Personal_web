'use client'
import Link from 'next/link'
import { useTilt } from '@/hooks/useTilt'
import type { SoftwareProject } from '@/data/software-projects'

interface Props {
  project: SoftwareProject
}

const statusLabel: Record<SoftwareProject['status'], string> = {
  active: 'ACTIVE',
  completed: 'COMPLETED',
  'coming-soon': 'COMING SOON',
}

const statusColor: Record<SoftwareProject['status'], string> = {
  active: 'text-accent border-accent/40',
  completed: 'text-muted border-border',
  'coming-soon': 'text-muted border-border',
}

function CardInner({ project }: Props) {
  const { ref, onMouseMove, onMouseLeave } = useTilt()

  const isAvailable = project.available

  return (
    <div
      ref={isAvailable ? ref : undefined}
      onMouseMove={isAvailable ? onMouseMove : undefined}
      onMouseLeave={isAvailable ? onMouseLeave : undefined}
      data-cursor-hover={isAvailable || undefined}
      style={isAvailable ? { transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d' } : undefined}
      className={`relative border border-border transition-colors ${
        isAvailable
          ? 'hover:border-accent/40 cursor-pointer group'
          : 'opacity-50 cursor-default'
      }`}
    >
      {/* Terminal chrome */}
      <div className="bg-[#1c1c1e] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono text-[10px] text-[#888] ml-3 tracking-wider">
            {project.slug || 'project'}.py
          </span>
        </div>
        <span className={`font-mono text-[9px] border px-2 py-0.5 tracking-[0.15em] ${statusColor[project.status]}`}>
          {statusLabel[project.status]}
        </span>
      </div>

      {/* Terminal body */}
      <div className="bg-[#242426] px-5 py-5 min-h-[80px]">
        <p className="font-mono text-[10px] text-[#6b8fa3] mb-1 tracking-wider">
          <span className="text-[#28c840]">{'>'}</span> {project.subtitle}
        </p>
        <p className="font-mono text-lg font-bold text-[#eaeaec] tracking-tight leading-tight">
          {project.title}
        </p>
      </div>

      {/* Card body */}
      <div className="p-5 bg-surface">
        <div className="flex items-start justify-between mb-2">
          <p className="font-mono text-xs text-muted leading-relaxed line-clamp-2 flex-1 pr-4">
            {project.description}
          </p>
          <span className="font-mono text-[10px] text-muted shrink-0">{project.year}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] text-accent border border-accent/30 px-2 py-0.5 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      {isAvailable && (
        <>
          <div className="absolute inset-0 pointer-events-none border border-accent/0 group-hover:border-accent/20 transition-colors duration-300" />
          <span className="absolute bottom-5 right-5 font-mono text-[10px] text-muted group-hover:text-accent transition-colors">
            View project →
          </span>
        </>
      )}

      {!isAvailable && (
        <span className="absolute bottom-5 right-5 font-mono text-[10px] text-muted">
          In development
        </span>
      )}
    </div>
  )
}

export function SoftwareCard({ project }: Props) {
  if (!project.available) {
    return <CardInner project={project} />
  }

  return (
    <Link href={`/software/${project.slug}`}>
      <CardInner project={project} />
    </Link>
  )
}
