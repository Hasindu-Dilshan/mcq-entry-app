import Dashboard from "../components/main/Dashboard";
import ChooseSyllabus from "../components/main/ChooseSyllabus";
import AddQuestions from "../components/main/AddQuestions";
import React from "react";

let appRoutes = require("./appRoutes.json");

const mapComponentsToRoutes = (routes) => {
  routes = routes.map((route) => {
    route.element = getJsxElement(route.element);

    if (route.children) {
      route.children = mapComponentsToRoutes(route.children);
    }

    return route;
  });

  return routes;
};

function getJsxElement(element) {

  // break statements are not considered as return statements are used
  switch (element) {
    case "Dashboard":
      return <Dashboard />;
    case "ChooseSyllabus":
      return <ChooseSyllabus />;
    case "AddQuestions":
      return <AddQuestions />;
    default:
      return undefined;
  }
}

// const appRoutes = [
//   {
//     index: true,
//     path: "/dashboard",
//     element: <Dashboard />,
//     state: "Dashboard",
//     sidebarProps: {
//       display: "Dashboard",
//       img: "dashboard.svg",
//       alt: "sidebar_img",
//     },
//   },
//   {
//     path: "/choosesyllabus",
//     element: <ChooseSyllabus />,
//     state: "Choose Syllabus",
//     sidebarProps: {
//       display: "Choose Syllabus",
//       img: "choosesyllabus.svg",
//       alt: "sidebar_img",
//     },
//   },
//   {
//     path: "/addquestions",
//     element: <AddQuestions />,
//     state: "Add Questions",
//     sidebarProps: {
//       display: "Add Questions",
//       img: "addquestions.svg",
//       alt: "sidebar_img",
//     },
//   },
// ];

export default mapComponentsToRoutes(appRoutes);
