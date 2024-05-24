/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
import { createRouter, createWebHistory } from "vue-router";
import useCurentUser from "@/composables/useCurrentUser";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        // children: [
        //   {
        //     path: "/photos/:photo_id",
        //     name: "PhotoDetail",
        //     component: () => import("@/views/PhotoDetail.vue"),
        //   }
        // ]
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/About.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
        meta: {
          hideForAuth: true,
        },
      },
      {
        path: "/register",
        name: "Registration",
        component: () => import("@/views/Registration.vue"),
        meta: {
          hideForAuth: true,
        },
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () => import("@/views/ForgotPassword.vue"),
        meta: {
          hideForAuth: true,
        },
      },
      {
        path: "/profile",
        name: "UserProfile",
        component: () => import("@/views/UserProfile.vue"),
        // meta: {
        //   requiresAuth: true,
        // },
      },
      {
        path: "/users",
        name: "Users",
        component: () => import("@/views/Users.vue"),
        // meta: {
        //   requiresAuth: true,
        // },
      },
      {
        path: "/photos/:photo_id",
        name: "PhotoDetail",
        component: () => import("@/views/PhotoDetail.vue"),
      },
      // {
      //   path: "/dashboard",
      //   name: "Dashboard",
      //   component: () => import("@/views/Dashboard.vue"),
      //   meta: {
      //     requiresAuth: true,
      //   },
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const { isAuth: isAuthenticated } = useCurentUser();
//   console.log("beforeEach", isAuthenticated.value);

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated.value) {
//       next({ name: "Login" });
//     }
//   }

//   if (to.matched.some((record) => record.meta.hideForAuth)) {
//     if (isAuthenticated.value) {
//       next({ name: "Home" });
//     }
//   }

//   next();
// });

export default router;
