import React from "react";
import * as Module from "modules";
import FormInputProduct from "components/product/FormInputProduct";

const edit = (props) => {
  const { show, onHide } = props;
  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };

  return (
    <Module.Modal.Basic
      modalTitle="Detail"
      show={show}
      onHide={onHide}
      btnName="Submit"
      btnSubmit={btnSubmit}
      size="xl"
    >
      <FormInputProduct />
    </Module.Modal.Basic>
  );
};

export default edit;
