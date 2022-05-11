import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = (props) => {
  return <Helmet htmlAttributes={{ id: "id" }} {...props} />;
};

export default AppHelmet;
