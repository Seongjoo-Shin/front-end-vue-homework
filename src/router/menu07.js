export default [
  {
    path: "/menu07/exam01asynccontrol",
    component: () => import(/* webpackChunkName: "menu07" */ "../views/menu07/Exam01AsyncControl.vue"),
  },
  {
    path: "/menu07/board/list",
    component: () => import(/* webpackChunkName: "menu07" */ "../views/menu07/board/List.vue"),
  },
]