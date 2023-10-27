import React from "react";

import WelcomeBanner from "../subComponents/WelcomeBanner";
import BreadcrumbNavigation from "../subComponents/BreadcrumbNavigation";

// class Dashboard extends React.Component {

//   componentWillMount() {
//     console.log('======== <Dashboard />')
//   }

//   render() {
//     return (
//       <>
//         <WelcomeBanner />

//         <BreadcrumbNavigation />

//         {this.props.children}
//       </>
//     );
//   }
// }

const Dashboard = () => {
  return (
      <>
        <WelcomeBanner />

        <BreadcrumbNavigation />
      </>
  );
}

export default Dashboard;
