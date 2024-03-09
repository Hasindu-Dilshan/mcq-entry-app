import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { routeToDisplayName } from "../../routes/appRoutesConfig";

const BreadcrumbNavigation = () => {
  const location = useLocation();
  const [activeItemStateName, setActiveItemStateName] = useState("");
  const [stateNames, setStateNames] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    setActiveItemStateName(pathnames[-1]);
    setStateNames(pathnames);
  }, [location]);

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

            {stateNames.map((stateName) => (
              <li className="breadcrumb-item">
                {routeToDisplayName[stateName]}
              </li>
            ))}

            {<li className="breadcrumb-item active">{activeItemStateName}</li>}
          </ul>
          <h3>{activeItemStateName}</h3>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
