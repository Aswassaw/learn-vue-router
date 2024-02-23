import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutViewVue from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomeView,
    },
    {
      path: "/about",
      name: "aboutPage",
      component: AboutViewVue,
    },
    {
      path: "/movies",
      name: "moviesPage",
      component: () => import("../views/MoviesView.vue"),
    },
  ],
});

export default router;
