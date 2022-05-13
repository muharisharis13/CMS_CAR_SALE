import React from "react";
import * as Components from "../../components";
import * as Containers from "../../containers";

const User = () => {
  return (
    <React.Fragment>
      <Components.Helmet title="User" />
      <Containers.User />
    </React.Fragment>
  );
};

export default User;
