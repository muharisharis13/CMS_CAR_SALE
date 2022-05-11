import React from "react";
import Header from "./header";
import Script from "next/script";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Script src="/assets/js/mazer.js" />
      <div id="app">
        <div className="wrap-header">
          <Header />
        </div>
        <div id="main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
