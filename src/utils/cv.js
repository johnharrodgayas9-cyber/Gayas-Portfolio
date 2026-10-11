import { profile, skills, education, experience } from '../data.js'

// Builds a plain-text CV from the portfolio data and downloads it in the browser.
export function downloadCV() {
  const lines = []
  lines.push(profile.name.toUpperCase())
  lines.push(profile.title)
  lines.push(`${profile.email}  |  ${profile.location}`)
  lines.push('')
  lines.push('SUMMARY')
  lines.push(profile.intro)
  lines.push('')
  lines.push('EDUCATION')
  education.forEach((e) => {
    lines.push(`- ${e.school} — ${e.degree} (${e.period})`)
  })
  lines.push('')
  lines.push('EXPERIENCE')
  experience.forEach((x) => {
    lines.push(`- ${x.role}, ${x.org} (${x.period})`)
    x.points.forEach((p) => lines.push(`    * ${p}`))
  })
  lines.push('')
  lines.push('SKILLS')
  lines.push(skills.join(', '))

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Gayas_CV.txt'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
