import { Routes, Route } from "react-router-dom";
import defaultRoutes from "./routes.js";

export default () => {
  return (
    <Routes>
      {[...defaultRoutes].map((route) => (
        <Route path={route.path} key={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
