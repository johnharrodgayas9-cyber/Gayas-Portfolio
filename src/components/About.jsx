import { profile, skills, interests } from '../data.js'
import SectionTitle from './SectionTitle.jsx'
import { PinIcon } from './Icons.jsx'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="About Me"
          title="Personal background"
          subtitle="A little about who I am, what I can do, and what I enjoy."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            {profile.about.map((p, i) => (
              <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <PinIcon /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">🎓 {profile.school}</span>
            </div>

            <h3 className="pt-6 text-xl font-bold text-slate-900 dark:text-white">Interests</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {interests.map((i) => (
                <li key={i.text} className="card flex items-center gap-3 !p-4 hover:-translate-y-1 hover:shadow-md">
                  <span className="text-2xl">{i.icon}</span>
                  <span className="text-sm font-medium">{i.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="card">
              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="chip !text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
