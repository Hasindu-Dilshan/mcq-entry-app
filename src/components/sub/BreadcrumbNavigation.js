import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const mapStateToProps = (state) => ({
  routeState: state.common.routeState,
});

const BreadcrumbNavigation = ({ routeState }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const activeItem = pathnames.pop();

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
            {pathnames.map((pathname) => {
              return <li className="breadcrumb-item">{pathname}</li>;
            })}
            <li className="breadcrumb-item active">{activeItem}</li>
          </ul>
          <h3>{routeState}</h3>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(BreadcrumbNavigation);
