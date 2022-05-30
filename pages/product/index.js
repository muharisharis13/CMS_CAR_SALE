import React from "react";
import * as Components from "../../components";
import * as Containers from "../../containers";

const Product = () => {
  return (
    <React.Fragment>
      <Components.Helmet title="Product" />
      <Containers.Product />
    </React.Fragment>
  );
};
export default Product;
