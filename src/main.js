import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// lazy-loaded pages
const Home = () => import("./pages/Home.vue");
const About = () => import("./pages/About.vue");
const Skill = () => import("./pages/Skill.vue");
const Experience = () => import("./pages/Experience.vue");
const Contact = () => import("./pages/Contact.vue");

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
    path: "/skill",
    component: Skill,
  },
  {
    path: "/experience",
    component: Experience,
  },
    {
    path: "/contact",
    component: Contact,
  },
];

// router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// IMPORTANT: use(router) BEFORE mount
createApp(App).use(router).mount("#app");
