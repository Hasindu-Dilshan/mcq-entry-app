import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "./constants/actionTypes";

import { store } from "./store";
import agent from "./agent";
// import RouteGenerator from './routes';
import { routes } from "./routes";

// import logo from './logo.svg';
import "./App.css";
// import Login from './component/Login';
// import HomeLayout from './layout/HomeLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

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

// class App extends React.Component {
//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.redirectTo) {
//   //     // this.context.router.replace(nextProps.redirectTo);
//   //     store.dispatch(push(nextProps.redirectTo));
//   //     this.props.onRedirect();
//   //   }
//   // }

//   componentWillMount() {


//     const token = window.localStorage.getItem("jwt");
//     if (token) {
//       agent.setToken(token);
//     }

//     this.props.onLoad(token ? agent.Auth.current() : null, token);
//   }

  

//   // render() {
//   //   return (
//   //     // <Login />
//   //     <HomeLayout />
//   //   );
//   // }

//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomeLayout />}>
//             {/* <Route path="/dashboard" element={<><h1>Hi</h1></>} /> */}
//             {routes}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {routes}
          {/* <Route path="/dashboard" element={<PageWrapper state='dashboard'>{<Dashboard />}</PageWrapper>} /> */}
          
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
        {/* <Route path="/dashboard" element={<>Hi</>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
