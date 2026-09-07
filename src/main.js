import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// lazy-loaded pages
const Home = () => import("./pages/Home.vue");
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
    redirect: "/",
  },
  {
    path: "/about",
    redirect: "/",
  },
  {
    path: "/projects",
    redirect: "/",
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
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, behavior: "instant" };
  },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
