import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { history } from "../../helpers";

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) =>
    dispatch({ type: "LOGIN", payload: {user: {email: email, password: password, token: 'jwt'}} }),
  // onRedirect: () => dispatch({ type: REDIRECT }),
});



function Login(props) {


  useEffect(() => {
    if(props.auth?.email) {
      history.navigate('/test');
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailFieldChange(email) {    
    setEmail(email);
  }

  function handlePasswordFieldChange(email) {
    setPassword(email);
  }
  
  
  return (
    
    <div class="main-wrapper login-body">
      <div class="login-wrapper">
        <div class="container">
          <img
            class="img-fluid logo-dark mb-2"
            src="assets/img/logo.png"
            alt="Logo"
          />
          <div class="loginbox">
            <div class="login-right">
              <div class="login-right-wrap">
                <h1>Login</h1>
                <p class="account-subtitle">Access to our dashboard</p>
                <form onSubmit={(event) => { event.preventDefault(); props.onSubmit(email, password) }}>
                  <div class="form-group">
                    <label class="form-control-label">Email Address</label>
                    <input onKeyUp={(event) => handleEmailFieldChange(event.target.value)} type="email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Password</label>
                    <div class="pass-group">
                      <input onKeyUp={(event) => handlePasswordFieldChange(event.target.value)} type="password" class="form-control pass-input" />
                      <span class="fas fa-eye toggle-password"></span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-6">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="cb1"
                          />
                          <label class="custom-control-label" for="cb1">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div class="col-6 text-right">
                        <a class="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn btn-lg btn-block btn-primary"
                    type="submit"
                  >
                    Login
                  </button>

                  <div class="text-center dont-have">
                    Don't have an account?
                    <a href="register.html"> Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
