import React, { useEffect } from "react";
import Header from "../components/subComponents/Header";
import SideNavigation from "../components/subComponents/SideNavigation";
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  // useEffect(() => {
  //   console.log('================home');
  // })

  return (
    <div className="main-wrapper">
      <Header />

      <SideNavigation />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// class HomeLayout extends React.Component {
//   render() {

//     return (
//       <div className="main-wrapper">
//         <Header />

//         <SideNavigation />

//         <div className="page-wrapper">
//           <div className="content container-fluid">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default HomeLayout;
