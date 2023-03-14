import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/HomeV.vue";
import CreateForm from "./components/CreateForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create-form", component: CreateForm }
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});