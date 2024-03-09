import React from "react";
import appRoutes from "./appRoutes";
import { Route } from "react-router-dom";

const generateRoutes = (routes, path = "/") => {
  return routes.map((route, index) =>
      <Route path={route.path} element={route.element} key={index}>
        {route.children && generateRoutes(route.children, `${path}/${route.path}`)}
      </Route>
  );
};

export const routes = generateRoutes(appRoutes);
