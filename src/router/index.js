import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProjectView from "../views/ProjectView.vue";
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects-list",
      component: ProjectListView,
    },
    {
      path: "/projects/:name",
      name: "project",
      component: ProjectView,
      params: true,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
