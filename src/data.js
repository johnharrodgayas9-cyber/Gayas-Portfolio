// ============================================================
//  EDIT THIS FILE to personalize your portfolio.
//  Everything marked  TODO  is a placeholder — replace it with your own info.
// ============================================================

export const profile = {
  name: 'John Harrod Gayas',
  shortName: 'Johnzzzz',
  title: 'Aspiring To be a Programmer',
  school: 'Cavite State University Tanza Campus',
  location: 'Tanza,cavite, Philippines', 
  email: 'johnharrodgayas9@gmail.com', 

  tagline:
    'I build an interactive web and a fun web. And always remember that someone elses success doesnt equal your failures. Keep doing the hardwork, maybe not today but someday it will be worth it.',
  intro:
    "I'm a student who enjoys turning ideas into working software. I'm learning modern web development and applying it through hands-on laboratory projects — from small interactive tools to data-driven systems.",
  about: [
    "I'm a 3rd  college student at Cavite State University Tanza, Campus. With a growing interest in application development and emerging technologies. I like projects where I can design the interface, write the logic, and actually deploy something people can open in a browser.",
    'I really love this course because I learn a lot and i gain a knowledge that i can use in the future.',
  ],
  links: [
    
   { label: 'GitHub', href: 'https://github.com/johnharrodgayas9-cyber', icon: 'github' },
   { label: 'Facebook', href: 'https://www.facebook.com/johnharrodgayas.valderas', icon: 'facebook' },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  'React',
  'Tailwind CSS',
  'JavaScript',
  'HTML & CSS',
  'Git & GitHub',
  'Vercel Deployment',
  'Responsive Design',
  'Machine Learning (basics)',
]

export const interests = [
  { icon: '', text: 'Web & application development' },
  { icon: '', text: 'Machine learning and emerging technologies' },
  { icon: '', text: 'UI design and user experience' },
  { icon: '', text: 'Learning by building real projects' },
]

export const projects = [
  {
    id: 1,
    title: 'React Calculator',
    category: 'Web App',
    emoji: '🧮',
       image: '/calculator.png',
    gradient: 'from-indigo-500 to-purple-600',
    summary: 'A responsive calculator built with React and Tailwind CSS.',
    details:
      'Laboratory 1 of DCIT 26. Handles basic arithmetic with a clean keypad layout, uses React state to track the current input and operation, and is deployed online.',
    tech: ['React', 'Tailwind CSS', 'useState', 'Vercel'],
      link: 'https://gayas-calculator.vercel.app/',
  },
  {
    id: 2,
    title: 'To-Do List App',
    category: 'Web App',
    emoji: '✅',
      image: '/todo.png',
    gradient: 'from-emerald-500 to-teal-600',
    summary: 'A task manager where you can add, complete, and delete tasks.',
    details:
      'Laboratory 2 of DCIT 26. Supports adding tasks, marking them done or not done, and deleting them, with a built-in user guide. Demonstrates list rendering, state updates, and event handling.',
    tech: ['React', 'Tailwind CSS', 'List rendering', 'Event handling'],
    link: 'https://gayas-to-do-classroom.vercel.app/',
  },
]

export const education = [
  {
    school: 'Cavite State University',
    degree: 'Bachelor of Science in [Your Program]', 
    period: '[2025] – 2026', 
    note: 'Currently dying because this course will kill me.',
  },
  {
    school: 'FEAPITSAT]', 
    degree: '[STEM]',
    period: '[2 YEARS]',
    note: 'Those Years are treassure. I met a lot of people and make friends with them',
  },
]

export const experience = [
  {
    role: 'Laboratory Projects — DCIT 26',
    org: 'Cavite State University',
    period: '2026',
    points: [
      'Built and deployed a React + Tailwind calculator website.',
      'Built a To-Do List app with add, done/not done, and delete features.',
      'Practiced Git/GitHub workflows and deployment on Vercel.',
    ],
  },
  {
    role: 'System Proposal — Smart Cold Storage',
    org: 'Individual academic project',
    period: '2026',
    points: [
      'Designed the concept, intended users, and deliverables for a monitoring system.',
      'Proposed machine learning to predict item expiry.',
    ],
  },
  
]
