import React from "react";
import appRoutes from "./appRoutes";
import { Route } from "react-router-dom";


const generateRoutes = (routes) => {
    return routes.map((route, index) =>
        route.index ? (
        <Route
            index
            path={route.path}
            element={route.element}
            key={index}
        />
        ) : (
        <Route
            path={route.path}
            element={
                route.element
            }
            key={index}
        >
            {route.child && generateRoutes(route.child)}
        </Route>
        )
    );
}

export const routes =  generateRoutes(appRoutes);