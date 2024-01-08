import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { LOGOUT } from "../../constants/actionTypes";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  name: state.auth.name,
  avatar: state.auth.avatar
})

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () =>
    dispatch({ type: LOGOUT }),
});

const Header = ({ name, avatar, dispatchLogout }) => {

  const avatarPath = `/assets/img/profiles/${avatar}`;

  function handleLogout() {
    dispatchLogout();
  }

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="/assets/img/logo.png" alt="Logo" />
        </Link>
        <Link to="/" className="logo logo-small">
          <img
            src="/assets/img/logo-small.png"
            alt="Logo"
            width="30"
            height="30"
          />
        </Link>
        <Link to="#" id="toggle_btn">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Link>
      </div>

      <Link className="mobile_btn" id="mobile_btn">
        <i className="fas fa-bars"></i>
      </Link>

      <ul className="nav user-menu">
        <li className="nav-item dropdown">
          <Link
            to="#"
            className="dropdown-toggle nav-link pr-0"
            data-toggle="dropdown"
          >
            <FeatherIcon icon="bell" />{" "}
            <span className="badge badge-pill"></span>
          </Link>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <Link to="#" className="clear-noti">
                {" "}
                Clear All
              </Link>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <Link to="activities.html">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src="/assets/img/profiles/avatar-02.jpg"
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Brian Johnson</span> paid
                          the invoice{" "}
                          <span className="noti-title">#DF65485</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="activities.html">View all Notifications</Link>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown has-arrow main-drop">
          <Link
            to="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img src={avatarPath} alt="" />
              <span className="status online"></span>
            </span>
            <span>{name}</span>
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="">
              <i data-feather="user" className="mr-1"></i> Profile
            </Link>
            <Link className="dropdown-item" to="">
              <i data-feather="settings" className="mr-1"></i> Settings
            </Link>
            <Link className="dropdown-item" onClick={handleLogout} to="">
              <i data-feather="log-out" className="mr-1"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu show">
        <Link
          to="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right">
          <Link className="dropdown-item" to="">
            My Profile
          </Link>
          <Link className="dropdown-item" to="">
            Settings
          </Link>
          <Link className="dropdown-item" onClick={handleLogout} to="">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
