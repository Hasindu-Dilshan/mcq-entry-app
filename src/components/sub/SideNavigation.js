import { Link } from "react-router-dom";
import appRoutes from "../../routes/appRoutes";

const SideNavigation = () => {

  return (
    <div className="sidebar" id="sidebar">
      <div class="slimScrollDiv" style={{"position": "relative", "overflow": "hidden", "width": "100%", "height": "172px"}}>
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-contents">
            <div id="sidebar-menu" className="sidebar-menu">
              <div className="mobile-show">
                <div className="offcanvas-menu">
                  <div className="user-info align-center bg-theme text-center">
                    <span
                      className="lnr lnr-cross text-white"
                      id="mobile_btn_close"
                    >
                      X
                    </span>
                    <Link
                      to="#"
                      className="d-block menu-style text-white"
                    >
                      <div className="user-avatar d-inline-block mr-3">
                        <img
                          src="/assets/img/profiles/avatar-18.jpg"
                          alt="user avatar"
                          className="rounded-circle"
                          width="50"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="sidebar-input">
                  <div className="top-nav-search">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <button className="btn" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <ul>
                {appRoutes.map((route, index) => {
                  return (
                    route.sidebarProps &&
                    <li key={index}>
                      <Link to={route.path}>
                        <img
                          src={`/assets/img/${route.sidebarProps.img}`}
                          alt={route.sidebarProps.alt}
                        />
                        <span>{route.sidebarProps.display}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="logout">
                <li>
                  <Link href="profile.html">
                    <img src="/assets/img/logout.svg" alt="sidebar_img" />
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
