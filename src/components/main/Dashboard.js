import { useEffect, useState } from "react";
import { connect } from "react-redux";

import WelcomeBanner from "../sub/WelcomeBanner";
import BreadcrumbNavigation from "../sub/BreadcrumbNavigation";
import { ROUTE } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  role: state.auth.role,
});

const mapDispatchToProps = dispatch => ({
  dispatchRouteState: (state) => dispatch({ type: ROUTE, payload: state }),
});


const Dashboard = ({ role, dispatchRouteState }) => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    dispatchRouteState("Dashboard");
  }, []);

  useEffect(() => {
    if (role) {
      setUserRole(role.charAt(0).toUpperCase() + role.slice(1));
    } else {
      setUserRole(null);
    }
  }, [role]);

  return (
    <>
      <BreadcrumbNavigation />
      <WelcomeBanner userRole={userRole} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
