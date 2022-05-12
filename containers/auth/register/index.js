import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const Index = (props) => {
  const { BtnRegister } = props;

  return (
    <React.Fragment>
      <div id="auth">
        <div className="row h-100">
          <div className="col-lg-5 col-12">
            <div id="auth-left">
              <div className="auth-logo">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Logo"
                  width={147.63}
                  height={32}
                />
              </div>
              <h1 className="auth-title">Sign Up</h1>
              <p className="auth-subtitle mb-5">
                Input your data to register to our website.
              </p>
                <form onSubmit={BtnRegister}>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="text"
                    className="form-control form-control-xl"
                    placeholder="Email"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="text"
                    className="form-control form-control-xl"
                    placeholder="Username"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="password"
                    className="form-control form-control-xl"
                    placeholder="Password"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                </div>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="password"
                    className="form-control form-control-xl"
                    placeholder="Confirm Password"
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                </div>

                <button
                onClick={BtnRegister} 
                type="submit"
                className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                  Sign Up
                </button>
              </form>
              <div className="text-center mt-5 text-lg fs-4">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/login">
                    <a className="font-bold">Log in</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div id="auth-right"></div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

Index.propTypes = {
  BtnRegister: PropTypes.func.isRequired,
};

export default Index;


   