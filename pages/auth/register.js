import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Containers from "../../containers";
import * as Components from "../../components";

function Register() {
  const router = useRouter();
  const BtnRegister = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div>
      <Components.Helmet title="Register" />
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
      <Containers.Register BtnRegister={BtnRegister} />
    </div>
  );
}
export default Register;
