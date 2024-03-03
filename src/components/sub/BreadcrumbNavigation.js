import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const appRoutes = require("../../routes/appRoutes.json");

const mapStateToProps = (state) => ({
  routeState: state.common.routeState,
});

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

const BreadcrumbNavigation = ({ routeState }) => {
  const location = useLocation();

  let pathnames = undefined;
  const [activeItemStateName, setActiveItemStateName] = useState(undefined);
  const [stateNames, setStateNames] = useState(undefined);

  useEffect(() => {
    pathnames = location.pathname.split("/").filter((x) => x);
    const stateNames = mapRoutesToStateNames(appRoutes, pathnames, []);

    setActiveItemStateName(stateNames.pop());
    setStateNames(stateNames);
  }, []);

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
                <li className="breadcrumb-item active">{stateName}</li>
              ))}

            {activeItemStateName && (
              <li className="breadcrumb-item active">{activeItemStateName}</li>
            )}
          </ul>
          <h3>{routeState}</h3>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(BreadcrumbNavigation);
