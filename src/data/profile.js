// Single source of truth for personal info, experience, tools and FAQ.

export const profile = {
  name: "Swam Pyae Paing",
  role: "Full Stack Developer",
  currentTitle: "Mid Programmer",
  company: "KMD Group of Company Limited",
  email: "swampyae330@gmail.com",
  phone: "+95 9 422 150 195",
  location: "Yangon, Myanmar",
  timeZone: "Asia/Yangon",
  utcOffset: "UTC +6:30",
  linkedin: "https://www.linkedin.com/in/swam-pyae-88aa96369",
  github: "https://github.com/SWayne19",
  photo: "/images/profile/profile.jpg",
};

export const approach = [
  "I build web applications that are fast, secure and made to last. Using Vue, Laravel and AI-assisted workflows, I make sure every layer works smoothly, from the database to the UI.",
  "Whether it's a landing page, an internal dashboard or a full product, I design and develop with a focus on clarity, performance and maintainability.",
];

// Chronological order (oldest first)
export const experiences = [
  {
    role: "Intern Programmer",
    company: "KMD Group (SoftComm Technology)",
    period: "Jan – Feb 2025",
    highlights:
      "Assisted with frontend development tasks, joined team meetings and supported ongoing project implementations.",
  },
  {
    role: "Trainee Programmer",
    company: "KMD Group (SoftComm Technology)",
    period: "Mar – Apr 2025",
    highlights:
      "Hands-on training in Vue.js and modern JavaScript, contributing bug fixes alongside senior developers.",
  },
  {
    role: "Junior Programmer",
    company: "KMD Group (SoftComm Technology)",
    period: "May 2025 – May 2026",
    highlights:
      "Developed and maintained web applications, built UI components and optimised user experiences with a cross-functional team.",
  },
  {
    role: "Mid Programmer",
    company: "KMD Group (SoftComm Technology)",
    period: "May 2026 – Present",
    highlights:
      "Leading the KMD Inventory Project: finance modules, audit trails, role-based access and real-time dashboard analytics.",
  },
];

export const tools = [
  { name: "HTML", icon: "/images/tools/html.svg" },
  { name: "CSS", icon: "/images/tools/css.svg" },
  { name: "JavaScript", icon: "/images/tools/javascript.svg" },
  { name: "PHP", icon: "/images/tools/php.svg" },
  { name: "Tailwind", icon: "/images/tools/tailwind.svg" },
  { name: "Bootstrap", icon: "/images/tools/bootstrap.svg" },
  { name: "Vue", icon: "/images/tools/vue.svg" },
  { name: "Inertia", icon: "/images/tools/inertia.svg" },
  { name: "Laravel", icon: "/images/tools/laravel.svg" },
  { name: "MySQL", icon: "/images/tools/mysql.svg" },
  { name: "PostgreSQL", icon: "/images/tools/postgresql.svg" },
  { name: "Git", icon: "/images/tools/git.svg" },
];

const icon = (name) => tools.find((t) => t.name === name)?.icon;

export const toolbox = [
  {
    title: "Frontend",
    text: "Component-driven interfaces with Vue 3, the Composition API and Tailwind CSS.",
    icons: [icon("Vue"), icon("Tailwind"), icon("JavaScript")],
  },
  {
    title: "Backend",
    text: "Laravel APIs and Inertia apps with clean architecture, policies and validation.",
    icons: [icon("Laravel"), icon("PHP"), icon("Inertia")],
  },
  {
    title: "Data",
    text: "Relational schemas in PostgreSQL and MySQL designed for audit trails and reporting.",
    icons: [icon("PostgreSQL"), icon("MySQL")],
  },
  {
    title: "Workflow",
    text: "Git-based collaboration, code review and AI-assisted development to ship faster.",
    icons: [icon("Git"), icon("HTML"), icon("CSS")],
  },
];

export const faqs = [
  {
    q: "What kind of projects do you work on?",
    a: "Mostly full stack web applications: dashboards, inventory and finance systems, content platforms and marketing sites. I'm comfortable owning a feature end to end, from database schema to the final UI.",
  },
  {
    q: "What's your core tech stack?",
    a: "Vue 3 with the Composition API and Tailwind CSS on the frontend, Laravel and Inertia.js on the backend, and PostgreSQL or MySQL for data. I also use Git and AI-assisted tooling day to day.",
  },
  {
    q: "Where are you based?",
    a: "Yangon, Myanmar (UTC +6:30). I'm open to on-site roles and remote collaboration.",
  },
  {
    q: "Are you open to new roles or collaborations?",
    a: "Yes. I'm open to developer roles and freelance collaborations. Send a short note about what you're building and I'll get back to you.",
  },
  {
    q: "How quickly do you reply?",
    a: "Usually within 24 hours, often faster. Email is the best way to reach me.",
  },
];
