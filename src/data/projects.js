import { ref } from "vue";

export const projects = ref([
  {
    id: 1,
    title: "Cyclist",
    description:
      "Cyclist is a static website project for showcasing and selling sport bicycles, featuring a clean, responsive design and easy product browsing.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/cyclist.png",
    url: "https://cyclist-rho.vercel.app/",
    overview: {
      goal: "Create a modern, visually attractive landing page for bicycles using only static HTML, CSS, and JavaScript.",
      highlights: [
        "Fully static site - no front-end frameworks or backend",
        "Responsive grid layout and CSS-only tabs for product details",
        "Optimized, lightweight images and minimal JS for quick page loads",
      ],
      challenges:
        "Delivering interactivity and a polished user experience without any framework or backend features.",
      outcome:
        "Elegant and fast-loading website, easy to host or deploy on any platform, providing clear product discovery for visitors.",
    },
    frontend: {
      stack: ["HTML", "CSS", "JavaScript"],
      architecture: [
        "Responsive layout using flex and grid",
        "Organized HTML structure with reusable sections",
        "Separation of concerns for styles and scripts",
      ],
      features: [
        "Clean landing page design",
        "Responsive product grid",
        "Fast page load with minimal JS",
      ],
      ui: "Modern, clean look with sports-inspired visuals and smooth CSS interactions.",
    },
    backend: {
      stack: [],
      features: ["No backend implemented - static frontend only"],
      database: [],
      security: "",
    },
  },
  {
    id: 2,
    title: "TailNet",
    description:
      "A modern, responsive landing page demo for an internet provider -- built with Tailwind CSS and enhanced with Vue for interactive features like plan selection and real-time FAQs.",
    tags: ["Tailwind CSS", "Vue 3", "Interactive", "Landing Page"],
    image: "/images/tailnet.png",
    url: "https://tail-net.vercel.app/",
    overview: {
      goal: "Create an engaging, interactive landing site for TailNet internet services using Tailwind CSS for styling and Vue for user-driven elements.",
      highlights: [
        "Responsive, utility-class-driven layout for all devices",
        "Vue-powered interactive pricing selector for service packages",
        "Collapsible FAQs for quick answers",
        "Animated transitions and hover interactions with Tailwind",
      ],
      challenges:
        "Blending minimal static content with Vue-based reactivity while keeping load times fast -- achieving interactivity without backend complexity.",
      outcome:
        "A visually polished, interactive front page that lets users compare plans, open FAQs, and quickly access CTA areas, showcasing what can be done with Tailwind and Vue.",
    },
    frontend: {
      stack: ["HTML", "Tailwind CSS", "Vue 3", "Composition API"],
      architecture: [
        "Single page layout split into hero, plans, and FAQ sections",
        "Vue components for pricing cards and collapsible FAQ accordions",
        "Tailwind utility classes for quick styling, transitions, and effects",
        "No backend -- all interactivity handled on the client side",
      ],
      features: [
        "Interactive plan selection with price highlight (Vue reactive state)",
        "FAQ section using accordion (Vue v-for, v-show/toggle)",
        "Hover, focus, and transition effects for calls-to-action and cards",
        "Mobile-first responsive design flows using Tailwind flex/grid",
      ],
      ui: "Bright, trustworthy look with Tailwind gradients, subtle motion, and clear Vue-driven interactivity.",
    },
    backend: {
      stack: [],
      features: [
        "No backend -- all data and behavior handled on the frontend via Vue reactive state.",
      ],
      database: [],
      security: "",
    },
  },
  {
    id: 3,
    title: "WebLibra",
    description:
      "A full-featured library management system built with Laravel on the server side and styled using Bootstrap CSS.",
    tags: ["Bootstrap", "Library Management", "Laravel", "PostgreSQL"],
    image: "/images/weblibra.png",
    url: "",
    overview: {
      goal: "Streamline and digitize all aspects of library management including book inventory, member tracking, and loan transactions.",
      highlights: [
        "Intuitive book catalog and search",
        "Role-based access for admins and members",
        "Fast, responsive Bootstrap UI",
      ],
      challenges:
        "Ensuring smooth integration of all features with robust backend logic while keeping the interface user-friendly.",
      outcome:
        "Modern, maintainable library software that reduces manual work and improves accessibility for both staff and patrons.",
    },
    frontend: {
      stack: ["Blade", "Bootstrap", "JavaScript"],
      architecture: [
        "Blade-driven server-rendered views",
        "Reusable Bootstrap components",
        "Clear separation of UI and server logic",
      ],
      features: [
        "Book listings and filtering",
        "Member login and registration",
        "Responsive layouts for desktop and mobile",
        "Admin dashboard with statistics and controls",
      ],
      ui: "Clean, familiar Bootstrap design with focus on usability and clarity.",
    },
    backend: {
      stack: ["Laravel", "PostgreSQL"],
      features: [
        "Book, member, and Stock management",
        "Role-based permissions",
        "CRUD for all library assets",
        "Search and filtering APIs",
      ],
      database: ["Books", "Users", "Balances", "Borrows", "Returns"],
      security: "Authentication, Authorization, Input validation.",
    },
  },
  {
    id: 4,
    title: "ForumZone",
    description:
      "A community-driven forum platform built with Vue, Laravel, and PostgreSQL, supporting rich discussions and user engagement.",
    tags: ["Vue 3", "Laravel", "PostgreSQL", "Forum", "Comments"],
    image: "/images/forumzone.png",
    url: "",
    overview: {
      goal: "Create a modern, easy-to-use forum where users can create threads, share ideas, and participate in discussions.",
      highlights: [
        "Dynamic thread and category organization",
        "User-focused, interactive commenting",
        "Fast, mobile-friendly Vue SPA frontend",
      ],
      challenges:
        "Implementing scalable real-time discussions while maintaining robust data relationships between users, threads, comments, and categories.",
      outcome:
        "A maintainable and extensible forum platform enabling community interaction, with a clean and intuitive UI.",
    },
    frontend: {
      stack: ["Vue 3", "JavaScript", "Tailwind CSS"],
      architecture: [
        "Vue SPA for seamless in-app navigation",
        "Component-driven UI design",
        "Dynamic thread and comment rendering",
      ],
      features: [
        "User registration, authentication, and profiles",
        "Create, view, and reply to threads",
        "Organize discussions by category",
        "Live updating conversations",
      ],
      ui: "Modern, minimal design with category and thread navigation, responsive layouts for desktop and mobile.",
    },
    backend: {
      stack: ["Laravel", "PostgreSQL"],
      features: [
        "CRUD for threads, comments, users, and categories",
        "User roles and moderation",
        "Thread/category organization",
        "REST APIs for all main entities",
      ],
      database: ["Users", "Threads", "Categories", "Comments"],
      security:
        "Secure authentication, input validation, and permission checks.",
    },
  },
  {
    id: 5,
    title: "YummyShare",
    description:
      "A recipe sharing platform with an admin panel for managing recipe categories and configurations, and a user panel where anyone can share recipes globally with the community.",
    tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "PostgreSQL"],
    image: "/images/YummyShare.png",
    url: "",
    overview: {
      goal: "Build a recipe sharing platform with admin-managed categories and a user panel for sharing recipes globally, powered by Laravel, Vue, and Inertia.js.",
      highlights: [
        "Admin panel for recipe category configuration and content management",
        "User panel for creating and sharing recipes with the global community",
        "Full SPA experience powered by Inertia.js without a separate API layer",
        "Role-based access separating admin and user functionalities",
      ],
      challenges:
        "Balancing admin control over categories and configurations with a smooth, open user experience for recipe sharing, while maintaining clean role-based access.",
      outcome:
        "A full-featured recipe platform where admins manage categories and settings, and users freely share and discover recipes from a global community.",
    },
    frontend: {
      stack: ["Vue 3", "Inertia.js", "Tailwind CSS", "Composition API"],
      architecture: [
        "Inertia.js-driven SPA with server-side routing",
        "Vue 3 components with Composition API for reactive UI",
        "Tailwind CSS utility-first styling with responsive layouts",
        "Shared layouts and reusable form components",
      ],
      features: [
        "Recipe creation with image upload and step editor",
        "Browse and search recipes with category filters",
        "User dashboard with saved and published recipes",
        "Interactive ingredient checklist and serving adjuster",
      ],
      ui: "Warm, appetizing design with clean typography, card-based layouts, and smooth Inertia page transitions.",
    },
    backend: {
      stack: ["Laravel", "PostgreSQL", "Inertia.js"],
      features: [
        "Recipe CRUD with image storage",
        "User authentication and profile management",
        "Category and tag-based organization",
        "Search and filtering with Eloquent scopes",
      ],
      database: ["Users", "Recipes", "Categories", "Tags", "Favorites"],
      security: "Sanctum authentication, authorization policies, input validation, and file upload sanitization.",
    },
  },
]);