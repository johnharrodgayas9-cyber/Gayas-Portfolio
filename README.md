# John Harrod Gayas — E-Portfolio

DCIT 26 Midterm Laboratory: a responsive e-portfolio built with **ReactJS** (Vite) and **Tailwind CSS**.

## Sections
Home (welcome, intro, nav menu) · About Me · Projects / Work Samples · Resume / CV · Contact (links + validated form)

## ReactJS features
| Feature | Where | Concepts |
|---|---|---|
| Mobile menu open/close | `Navbar.jsx` | `useState`, conditional rendering |
| Dark / light mode (saved) | `App.jsx` | `useState`, `useEffect`, localStorage |
| Scroll-spy active nav link | `App.jsx` | `useEffect`, IntersectionObserver |
| Project filter | `Projects.jsx` | `useState`, derived lists |
| View More / Show Less details | `ProjectCard.jsx` | `useState`, conditional rendering |
| Tabbed resume | `Resume.jsx` | `useState`, conditional rendering |
| Download CV | `Resume.jsx`, `Home.jsx` | event handlers, Blob download |
| Contact form validation | `Contact.jsx` | controlled inputs, validation, success state |

Tailwind provides all layout, colors, spacing, dark mode, hover/transition effects, and responsive breakpoints (`sm`, `md`, `lg`).

## Customize
Open **`src/data.js`** and replace every `TODO` (email, social links, program, school years, project links). Add screenshots to `public/` and set `image: '/yourfile.png'` on a project.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # test the production build
```

## Deploy to Vercel
1. Push this folder to a **public GitHub repository**.
2. Go to https://vercel.com → **Add New… → Project** → import the repo.
3. Vercel detects **Vite** automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
4. Open the generated `https://your-project.vercel.app` URL in a private window and confirm the site loads, every nav link works, and the form validates.
5. Submit the repo/folder and the Vercel link.

> The URL must open the website directly (not repository files, an error, or a blank page).

## Testing checklist
- [ ] Nav links scroll to Home, About, Projects, Resume, Contact (desktop and mobile menu)
- [ ] Dark mode toggle works and persists after refresh
- [ ] Project filter and View More / Show Less work
- [ ] Resume tabs switch; Download CV downloads a file
- [ ] Contact form shows errors for empty/invalid input and a success message when valid
- [ ] Layout looks right at phone, tablet, and desktop widths
- [ ] Same checks pass on the deployed Vercel URL

## Real contact-form delivery (optional)
The form validates and shows a success message but has no backend. To receive messages, post the form values to a service such as Formspree or EmailJS inside `handleSubmit` in `Contact.jsx`.
