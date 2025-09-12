import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { history, login } from "../../helpers";

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnSubmit: (user) => {
    dispatch({ type: "LOGIN", user });
  },
});

function Login(props) {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  async function onSubmit(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    await login(email, password)
      .then((user) => {
        props.dispatchOnSubmit(user);
      })
      .catch((err) => {
        alert("Wrong credentials");

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
      });
  }

  useEffect(() => {
    if (props.auth?.email) {
      history.navigate("/dashboard");
    }
  }, [props.auth?.email]);

  return (
    <>
      {!props.auth.email && (
        <div className="main-wrapper login-body">
          <div className="login-wrapper">
            <div className="container">
              <img
                className="img-fluid logo-dark mb-2"
                src="/assets/img/logo.png"
                alt="Logo"
              />
              <div className="loginbox">
                <div className="login-right">
                  <div className="login-right-wrap">
                    <h1>Login</h1>
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <label className="form-control-label">
                          Email Address
                        </label>
                        <input
                          ref={emailInputRef}
                          type="email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">Password</label>
                        <div className="pass-group">
                          <input
                            ref={passwordInputRef}
                            type="password"
                            className="form-control pass-input"
                          />
                          <span className="fas fa-eye toggle-password"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-6">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb1"
                              />
                              <label className="custom-control-label" for="cb1">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-6 text-right">
                            <a
                              className="forgot-link"
                              href="forgot-password.html"
                            >
                              Forgot Password ?
                            </a>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-lg btn-block btn-primary"
                        type="submit"
                      >
                        Login
                      </button>

                      <div className="text-center dont-have">
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
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
