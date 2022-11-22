import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/risks",
      name: "risks",
      component: () => import("../views/RisksView.vue"),
    },
    {
      path: "/risk/:rKey",
      name: "riskDetail",
      component: HomeView,
    },
  ],
});

export default router;
