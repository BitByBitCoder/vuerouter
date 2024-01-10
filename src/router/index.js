import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Photo from "../views/Photo.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobsDetails from "../views/jobs/JobsDetails.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/photo",
      name: "photo",
      component: Photo,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },
    {
      path: "/jobsdetails/:id",
      name: "jobsdetails",
      component: JobsDetails,
      props: true,
    },
    {
      path: "/all-jobs",
      redirect: "jobs",
    },
    //404
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
