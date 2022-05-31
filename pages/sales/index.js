import React from "react";
import * as Components from "../../components";
import * as Containers from "../../containers";

const Sales = () => {
  return (
    <React.Fragment>
      <Components.Helmet title="Sales" />
      <Containers.Sales />
    </React.Fragment>
  );
};
export default Sales;
