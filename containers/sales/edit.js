import React from "react";
import * as Module from "modules";
import FormEditSales from "components/sales/FormEditSales";

const edit = (props) => {
  const { show, onHide } = props;
  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };

  return (
    <Module.Modal.Basic
      modalTitle="Change Status"
      show={show}
      onHide={onHide}
      btnName="Submit"
      btnSubmit={btnSubmit}
      // size="xl"
    >
      <FormEditSales />
    </Module.Modal.Basic>
  );
};

export default edit;
