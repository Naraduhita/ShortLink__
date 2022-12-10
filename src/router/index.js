import { resolveDirective } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from "../views/HomeView.vue";
import HomeView from '../components/home/Home.vue';
// import UsersView from "../components/Users.vue";

import Redirect from "../components/redirect/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'regis',
      component: () => import('../components/login/Regis.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/home/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/login/Login.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: "redirect",

      component: Redirect, 
    },
    // {
    //   path: "/users",
    //   name: "users",
    //   component: UsersView,
    // }
  ],
});

export default router;
