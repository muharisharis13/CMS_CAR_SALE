import React from "react";
import Header from "./header";
import Script from "next/script";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Script src="/assets/js/mazer.js" />
      <div id="app">
        <div classname="wrap-header">
          <Header />
        </div>
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3"></i>
            </a>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
