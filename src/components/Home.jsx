import { profile } from '../data.js'
import { downloadCV } from '../utils/cv.js'
import { DownloadIcon } from './Icons.jsx'

export default function Home() {
  const initials = profile.name
    .split(' ')
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((w) => w[0])
    .join('')

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-700/20" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl dark:bg-purple-700/20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="animate-fadeUp text-center md:text-left">
          <p className="mb-3 inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
            Hello, Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-slate-700 dark:text-slate-300">
            {profile.title} · {profile.school}
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <button onClick={downloadCV} className="btn-outline">
              <DownloadIcon /> Download CV
            </button>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-60 blur-lg" />
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-6xl font-extrabold text-white shadow-2xl sm:h-72 sm:w-72 sm:text-7xl">
             <img
  src="/profile.jpg"
  alt={profile.name}
  className="h-full w-full rounded-full object-cover"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
