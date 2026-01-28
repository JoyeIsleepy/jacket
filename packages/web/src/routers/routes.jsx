// src/routers/routes.jsx
import LazyComponent from "@/components/LazyComponent";
import NotFound from "@/components/NotFound";
import Layout from "@/Layout";

export default [
  {
    path: "/login",
    element: LazyComponent("login"),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: LazyComponent("home"),
      },
      {
        path: "/about",
        element: LazyComponent("about"),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];