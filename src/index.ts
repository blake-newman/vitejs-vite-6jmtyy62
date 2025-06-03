import "./style.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      component: () => import("./View.vue"),
    },
  ],
});

const app = createApp(App);
app.use(router)
await router.isReady()
app.mount("#app");
