import React, { useState } from "react";
import * as Module from "modules";
import FormInputProduct from "components/product/FormInputProduct";

const add = (props) => {
  const { show, onHide } = props;
  const [phone, setPhone] = useState(0);
  const [tahunProduksi, setTahunProduksi] = useState(2012);
  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };
  return (
    <Module.Modal.Basic
      modalTitle="Created"
      show={show}
      onHide={onHide}
      btnName="Save"
      btnSubmit={btnSubmit}
      size="xl"
    >
      <FormInputProduct
        phone={phone}
        setPhone={setPhone}
        tahunProduksi={tahunProduksi}
        setTahunProduksi={setTahunProduksi}
      />
    </Module.Modal.Basic>
  );
};

export default add;
