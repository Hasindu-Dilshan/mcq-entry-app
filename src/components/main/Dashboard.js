import { useEffect, useState } from "react";
import { connect } from "react-redux";

import WelcomeBanner from "../sub/WelcomeBanner";
import BreadcrumbNavigation from "../sub/BreadcrumbNavigation";

const mapStateToProps = state => ({
  role: state.auth.role
})

const Dashboard =  ({ role }) => {

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    
      setUserRole( role.charAt(0).toUpperCase() + role.slice(1) );
  }, [role]);
  
  return (
      <>
        <WelcomeBanner userRole={userRole} />
        <BreadcrumbNavigation userRole={userRole} />
      </>
  );
}

export default connect(mapStateToProps)(Dashboard);
