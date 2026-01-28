import { Routes, Route } from "react-router-dom";
import defaultRoutes from "./routes.jsx";

const renderRoute = (route) => {
  if (route.children) {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children.map((childRoute) => renderRoute(childRoute))}
      </Route>
    );
  }
  return <Route key={route.path} path={route.path} element={route.element} />;
};

export default () => {
  return (
    <Routes>
      {defaultRoutes.map((route) => renderRoute(route))}
    </Routes>
  );
};
