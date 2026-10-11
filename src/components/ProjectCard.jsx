import { useState } from 'react'

export default function ProjectCard({ project }) {
  // Interactive feature: show/hide project details (useState + conditional rendering)
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="card flex flex-col overflow-hidden !p-0 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {project.image ? (
        <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
      ) : (
        <div
          className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} text-6xl`}
          aria-hidden="true"
        >
          {project.emoji}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.summary}</p>

        {expanded && (
          <div className="mt-4 animate-fadeUp space-y-3 border-t border-slate-200 pt-4 dark:border-slate-800">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.details}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Visit live site →
              </a>
            )}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-auto pt-5 text-left text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
        >
          {expanded ? '− Show Less' : '+ View More'}
        </button>
      </div>
    </article>
  )
}
