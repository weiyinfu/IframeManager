import { createRouter, createWebHashHistory } from "vue-router";
import Book from "./components/Book.vue";
import Home from "./components/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/Book", component: Book },
  ],
});

export default router;
