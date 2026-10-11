import { useState } from 'react'
import { navLinks, profile } from '../data.js'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons.jsx'

export default function Navbar({ active, dark, onToggleTheme }) {
  // Interactive feature: mobile menu open/close (useState + conditional rendering)
  const [open, setOpen] = useState(false)

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      active === id
        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
        : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
          {profile.shortName}
          <span className="text-indigo-600">.</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="animate-fadeUp border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block ${linkClass(l.id)}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
