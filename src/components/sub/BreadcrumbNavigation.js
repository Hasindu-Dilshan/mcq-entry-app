import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  routeState: state.common.routeState,
});

const BreadcrumbNavigation = ({ routeState }) => {
  return (
    <div className="row mb-4">
      <div className="col-xl-6 col-sm-12 col-12">
        <div className="breadcrumb-path">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <img
                  src="/assets/img/dash.png"
                  className="mr-3"
                  alt="breadcrumb"
                />
                Home
              </a>
            </li>
            <li className="breadcrumb-item active">{routeState}</li>
          </ul>
          <h3>{routeState}</h3>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(BreadcrumbNavigation);
