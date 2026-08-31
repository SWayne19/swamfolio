import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// lazy-loaded pages
const Home = () => import("./pages/Home.vue");
const About = () => import("./pages/About.vue");
const ExperienceAndSkills = () => import("./pages/ExperienceAndSkills.vue");
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
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/experienceAndSkills",
    name: "experienceAndSkills",
    component: ExperienceAndSkills,
  },
  {
    path: "/experienceAndSkills/projects/:id",
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

// Scroll to top on every route change
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
});

const app = createApp(App);

app.use(router);

app.mount("#app");
