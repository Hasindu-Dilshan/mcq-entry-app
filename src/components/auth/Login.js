import React from "react";

class Login extends React.Component {
  render() {
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
                  <form action="index.html">
                    <div class="form-group">
                      <label class="form-control-label">Email Address</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Password</label>
                      <div class="pass-group">
                        <input
                          type="password"
                          class="form-control pass-input"
                        />
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
  }
}

export default Login;
