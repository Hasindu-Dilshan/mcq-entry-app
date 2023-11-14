import Header from "../components/sub/Header";
import SideNavigation from "../components/sub/SideNavigation";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  
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
};

export default HomeLayout;
