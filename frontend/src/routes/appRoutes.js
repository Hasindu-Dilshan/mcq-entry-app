import Dashboard from "../components/main/Dashboard";
import ChooseSyllabus from "../components/main/ChooseSyllabus";
import AddQuestions from "../components/main/AddQuestions";

import appRoutes from "./appRoutesConfig";

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

export default mapComponentsToRoutes(appRoutes);
