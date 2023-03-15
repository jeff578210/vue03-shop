import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: "/", name: "Home", component: () => import("../views/index.vue")},
  {path: "/Product/all", name: "all", component: () => import("../views/product/all.vue")},
  {path: "/Product/fruit", name: "fruit", component: () => import("../views/product/fruit.vue")},
  {path: "/Product/vegetable", name: "vegetable", component: () => import("../views/product/vegetable.vue")},
  {path: "/Product/juice", name: "juice", component: () => import("../views/product/juice.vue")},
  {path: "/favorite", name: "favorite", component: () => import("../views/favorite.vue")},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router