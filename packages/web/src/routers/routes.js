// src/routers/routes.js
import LazyComponent from "@/components/LazyComponent";
import NotFound from "@/components/NotFound";

export default [
  {
    path: "/home",
    component: LazyComponent("home"),
  },
  {
    path: "/about",
    component: LazyComponent("about"),
  },
  {
    path: "*",
    component: NotFound,
  },
];
