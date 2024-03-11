import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      components: () => import("./views/Signup.vue"),
    },
    {
      path: "/landing",
      name: "Landing",
      components: () => import("./views/Landing.vue"),
    },
  ],
});

export default router;
