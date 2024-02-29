import { useEffect } from "react";
import Header from "../components/sub/Header";
import SideNavigation from "../components/sub/SideNavigation";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile, history } from "../helpers";

const mapDispatchToProps = (dispatch) => ({
  dispatchProfile: (user) => {
    dispatch({ type: "LOGIN", user });
  },
});

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const HomeLayout = ({ token, dispatchProfile }) => {
  useEffect(() => {
    async function checkToken() {
      if (!token) {
        const retrievedToken = localStorage.getItem("jwt");
        if (!retrievedToken) {
          history.navigate("/auth/login");
        } else {
          await getProfile(retrievedToken)
            .then((profile) => {
              dispatchProfile(profile);
            })
            .catch((err) => {
              alert("Invalid jwt");
            });
        }
      }
    }

    checkToken();
  }, [token]);

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
