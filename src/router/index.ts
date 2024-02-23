import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/movies",
      name: "moviesPage",
      component: () => import("../views/MoviesView.vue"),
    },
    {
      path: "/movies/:id",
      name: "movieDetailPage",
      component: () => import("../views/MovieDetailView.vue"),
    },
    {
      path: "/:randomPath(.*)*",
      name: "notFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
