import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "./constants/actionTypes";

import { routes } from "./routes";

// import logo from './logo.svg';
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import { history } from "./helpers";
import Login from "./components/auth/Login";
import AuthLayout from "./layout/AuthLayout";

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

const App = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {routes}
      </Route>
      <Route path="/auth/" element={<AuthLayout />}>
        <Route path="login/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
