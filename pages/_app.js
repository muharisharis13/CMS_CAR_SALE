// import "../styles/globals.css";
import { useState, useEffect } from "react";
import * as Components from "../components";
import Script from "next/script";
import "react-datepicker/dist/react-datepicker.css";
import "styles/globals.css";
import Cookies from "js-cookies";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }) {
  const [showChild, setShowChild] = useState(false);
  const router2 = useRouter();
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else if (router.pathname.startsWith("/auth/")) {
    return <Component {...pageProps} />;
  } else {
    if (!Cookies.getItem("token")) {
      router2.push("/auth/login");
    }
    return (
      <>
        <Components.Layout>
          <Component {...pageProps} />
        </Components.Layout>
      </>
    );
  }
}

export default MyApp;
