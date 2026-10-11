import { useState } from 'react'
import { projects } from '../data.js'
import SectionTitle from './SectionTitle.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  // Interactive feature: category filter (useState + derived list)
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Projects / Work Samples"
          title="Things I've built"
          subtitle="Click “View More” on a card to see details and the tech used."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === c
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white text-slate-600 hover:text-indigo-600 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-indigo-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
