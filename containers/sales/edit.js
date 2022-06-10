import React, { useState } from "react";
import * as Module from "modules";
import FormEditSales from "components/sales/FormEditSales";

const edit = (props) => {
  const { show, onHide } = props;
  const [params, setParams] = useState({});
  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };

  const getDataDetail = () => {
    // DI SINI API
    // jika data dapat maka kirim ke setParams(res.data.data)
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
      <FormEditSales params={params} />
    </Module.Modal.Basic>
  );
};

export default edit;
