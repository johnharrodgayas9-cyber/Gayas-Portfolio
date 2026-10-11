import { useState } from 'react'
import { profile } from '../data.js'
import SectionTitle from './SectionTitle.jsx'
import { MailIcon, PinIcon, CheckIcon, socialIcons } from './Icons.jsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.'

  if (!values.message.trim()) errors.message = 'Please write a message.'
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
  return errors
}

export default function Contact() {
  // Interactive feature: controlled form + validation (useState)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const errors = validate(values)

  const handleChange = (e) => {
    setSent(false)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errors).length > 0) return

    // No backend: simulate sending. To receive real messages, connect a service
    // such as Formspree or EmailJS here (see README).
    setSent(true)
    setValues({ name: '', email: '', message: '' })
    setTouched({})
  }

  const inputClass = (field) =>
    `mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-4 dark:bg-slate-950 ${
      touched[field] && errors[field]
        ? 'border-red-400 focus:ring-red-100 dark:focus:ring-red-900/40'
        : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100 dark:border-slate-700 dark:focus:ring-indigo-900/40'
    }`

  const FieldError = ({ field }) =>
    touched[field] && errors[field] ? (
      <p className="mt-1 text-xs text-red-500" role="alert">
        {errors[field]}
      </p>
    ) : null

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let's get in touch"
          subtitle="Have a question or want to work together? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="card space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400">
                <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <MailIcon />
                </span>
                <span className="text-sm font-medium">{profile.email}</span>
              </a>
              <p className="flex items-center gap-3">
                <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <PinIcon />
                </span>
                <span className="text-sm font-medium">{profile.location}</span>
              </p>
            </div>

            <div className="card">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">Find me online</h3>
              <ul className="space-y-2">
                {profile.links.map((l) => {
                  const Icon = socialIcons[l.icon]
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 rounded-lg p-2 text-sm font-medium transition hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                      >
                        {Icon && <Icon />} {l.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="card space-y-5 lg:col-span-3">
            {sent && (
              <div
                role="status"
                className="flex animate-fadeUp items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                <CheckIcon /> Thank you! Your message was sent successfully.
              </div>
            )}

            <div>
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
              <input id="name" name="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className={inputClass('name')} placeholder="Your name" />
              <FieldError field="name" />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">Email</label>
              <input id="email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={inputClass('email')} placeholder="you@example.com" />
              <FieldError field="email" />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold">Message</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange} onBlur={handleBlur} className={inputClass('message')} placeholder="Write your message..." />
              <div className="flex justify-between">
                <FieldError field="message" />
                <span className="ml-auto mt-1 text-xs text-slate-400">{values.message.length} characters</span>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
