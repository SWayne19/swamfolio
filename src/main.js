import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import AOS from "aos";
import "aos/dist/aos.css";

// lazy-loaded pages
const Home = () => import("./pages/Home.vue");
const About = () => import("./pages/About.vue");
const Projects = () => import("./pages/Projects.vue");
const Project = () => import("./pages/Project.vue");
const Overview = () => import("./pages/Overview.vue");
const FrontEnd = () => import("./pages/FrontEnd.vue");
const BackEnd = () => import("./pages/BackEnd.vue");

// routes
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // Legacy redirects
  {
    path: "/experienceAndSkills",
    redirect: { name: "about" },
  },
  {
    path: "/experienceAndSkills/projects/:id",
    redirect: (to) => ({ name: "project", params: { id: to.params.id } }),
  },
  {
    path: "/about/projects/:id",
    redirect: (to) => ({ name: "project", params: { id: to.params.id } }),
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/projects/:id",
    name: "project",
    component: Project,
    redirect: (to) => ({
      name: "overView",
      params: { id: to.params.id },
    }),
    children: [
      {
        path: "",
        name: "overView",
        component: Overview,
      },
      {
        path: "frontEnd",
        name: "frontEnd",
        component: FrontEnd,
      },
      {
        path: "backEnd",
        name: "backEnd",
        component: BackEnd,
      },
    ],
  },
];

// router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Scroll to top and refresh AOS on every route change
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  AOS.refreshHard();
});

const app = createApp(App);

app.use(router);

// Initialize AOS with performance-optimized settings
AOS.init({
  duration: 400,
  easing: "ease-out-cubic",
  once: true,
  offset: 60,
  delay: 0,
});

app.mount("#app");
