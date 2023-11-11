import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "./constants/actionTypes";

import { store } from "./store";
import { routes } from "./routes";

// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Login from "./components/auth/Login";
import { history } from "./helpers";
import TestAPIs from "./components/test/TestAPIs";

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();
  
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/test" element={<TestAPIs />} /> */}
      <Route path="/" element={<HomeLayout />}>
        {routes}
      </Route>
      
    </Routes>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
