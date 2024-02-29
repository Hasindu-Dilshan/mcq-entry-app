const BreadcrumbNavigation = ({ userRole }) => {
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
            <li className="breadcrumb-item active">Dashboard</li>
          </ul>
          <h3>{userRole} Dashboard</h3>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
