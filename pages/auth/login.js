import React from "react";
import Head from "next/head";
import * as Containers from "../../containers";
import * as Components from "../../components";

function Login() {
  return (
    <div>
      <Components.Helmet title="Login" />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/bootstrap-icons/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/css/app.css" />
        <link rel="stylesheet" href="/assets/css/pages/auth.css" />
      </Head>
      <Containers.Login />
    </div>
  );
}

export default Login;
