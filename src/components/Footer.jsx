import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </p>
      <a href="#home" className="mt-2 inline-block font-medium text-indigo-600 hover:underline dark:text-indigo-400">
        ↑ Back to top
      </a>
    </footer>
  )
}
