import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import menu01 from "./menu01.js";
import menu02 from "./menu02.js";
import menu03 from "./menu03.js";
import menu04 from "./menu04.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // about이라는 경로로 사용자가 접근해야만 다운로드해서 보여준다
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  ...menu01, 
  ...menu02, 
  ...menu03,
  ...menu04,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
