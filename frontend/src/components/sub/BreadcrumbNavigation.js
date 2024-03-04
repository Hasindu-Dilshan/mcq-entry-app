import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { history } from "../../helpers";

const appRoutes = require("../../routes/appRoutes.json");

const mapRoutesToStateNames = (
  allPossibleRoutes = appRoutes,
  routes = [],
  stateNames = []
) => {
  // debugger;

  if (allPossibleRoutes === undefined || routes.length === 0) {
    return stateNames;
  }

  const relevantRoute = allPossibleRoutes.find((route) =>
    route.path.startsWith(routes[0])
  );

  if (relevantRoute) {
    stateNames.push(relevantRoute.state);
    routes.shift();

    mapRoutesToStateNames(relevantRoute.children, routes, stateNames);
  }

  return stateNames;
};

const BreadcrumbNavigation = () => {
  const location = history.location;

  let pathnames = undefined;
  const [activeItemStateName, setActiveItemStateName] = useState(undefined);
  const [stateNames, setStateNames] = useState(undefined);

  useEffect(() => {
    pathnames = location.pathname.split("/").filter((x) => x);
    const stateNames = mapRoutesToStateNames(appRoutes, pathnames, []);

    setActiveItemStateName(stateNames.pop());
    setStateNames(stateNames);
  }, [pathnames]);

  return (
    <div className="row mb-4">
      <div className="col-xl-6 col-sm-12 col-12">
        <div className="breadcrumb-path">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <img
                  src="/assets/img/dash.png"
                  className="mr-3"
                  alt="breadcrumb"
                />
                <span>Home</span>
              </Link>
            </li>

            {stateNames &&
              stateNames.map((stateName) => (
                <li className="breadcrumb-item">{stateName}</li>
              ))}

            {activeItemStateName && (
              <li className="breadcrumb-item active">{activeItemStateName}</li>
            )}
          </ul>
          <h3>{activeItemStateName}</h3>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
