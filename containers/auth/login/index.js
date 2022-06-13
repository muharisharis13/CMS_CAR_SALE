import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "api/login";
import Cookies from "js-cookies";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const btnSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: username,
      password: password,
    };
    api.postUser(body).then((res) => {
      if (res.data.id) {
        Cookies.setItem("token", res.data.token);
        router.push("/");
      } else {
        alert("gagal");
      }
    });
  };

  if (Cookies.getItem("token")) {
    router.push("/");
  }
  return (
    <React.Fragment>
      <div id="auth">
        <div className="row h-100">
          <div className="col-lg-5 col-12">
            <div id="auth-left">
              <div className="auth-logo">
                <a href="index.html">
                  <Image
                    width={147.63}
                    height={32}
                    src="/assets/images/logo/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>
              <h1 className="auth-title">Log in.</h1>
              <p className="auth-subtitle mb-5">
                Log in with your data that you entered during registration.
              </p>

              <form onSubmit={btnSubmit}>
                <div className="form-group position-relative has-icon-left mb-4">
                  <input
                    type="text"
                    className="form-control form-control-xl"
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
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
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                  <div className="form-control-icon">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                </div>
                <div className="form-check form-check-lg d-flex align-items-end">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-gray-600"
                    for="flexCheckDefault"
                  >
                    Keep me logged in
                  </label>
                </div>
                <button
                  // onClick={BtnLogin}
                  type="submit"
                  className="btn btn-primary btn-block btn-lg shadow-lg mt-5"
                >
                  Log in
                </button>
              </form>
              <div className="text-center mt-5 text-lg fs-4">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/register">
                    <a className="font-bold">Sign up</a>
                  </Link>
                  .
                </p>
                <p>
                  <Link href="/auth/forgot-password">
                    <a className="font-bold">Forgot password?</a>
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

export default Index;
