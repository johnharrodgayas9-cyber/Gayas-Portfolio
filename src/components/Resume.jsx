import { useState } from 'react'
import { education, experience, skills } from '../data.js'
import { downloadCV } from '../utils/cv.js'
import SectionTitle from './SectionTitle.jsx'
import { DownloadIcon } from './Icons.jsx'

const tabs = ['Education', 'Experience', 'Skills']

export default function Resume() {
  // Interactive feature: tabbed resume (useState + conditional rendering)
  const [tab, setTab] = useState('Education')

  return (
    <section id="resume" className="bg-white py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Resume / CV"
          title="My education, experience & skills"
        />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  tab === t
                    ? 'bg-white text-indigo-600 shadow dark:bg-slate-950 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button onClick={downloadCV} className="btn-primary">
            <DownloadIcon /> Download CV
          </button>
        </div>

        <div key={tab} className="animate-fadeUp space-y-4">
          {tab === 'Education' &&
            education.map((e, i) => (
              <div key={i} className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{e.school}</h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{e.period}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{e.degree}</p>
                {e.note && <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{e.note}</p>}
              </div>
            ))}

          {tab === 'Experience' &&
            experience.map((x, i) => (
              <div key={i} className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{x.role}</h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{x.period}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">{x.org}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}

          {tab === 'Skills' && (
            <div className="card">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="chip !text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
