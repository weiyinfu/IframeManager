import { createRouter, createWebHashHistory } from "vue-router";
import TreeView from "./components/TreeView.vue";
import Home from "./components/Home.vue";
import FlatView from "./components/FlatView.vue";
import FlatView2 from "./components/FlatView2";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/TreeView", component: TreeView },
    { path: "/FlatView", component: FlatView },
    { path: "/FlatView2", component: FlatView2 },
  ],
});

export default router;
