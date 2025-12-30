import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// lazy-loaded pages
const Home = () => import("./pages/Home.vue");
const About = () => import("./pages/About.vue");
const ExperienceAndSkills = () => import("./pages/ExperienceAndSkills.vue");
const Project = () => import("./pages/Project.vue");

// routes
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/experienceAndSkills",
    component: ExperienceAndSkills,
  },
  {
    path: "/experienceAndSkills/projects/:id",
    component: Project,
  },
];

// router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// IMPORTANT: use(router) BEFORE mount
createApp(App).use(router).mount("#app");
