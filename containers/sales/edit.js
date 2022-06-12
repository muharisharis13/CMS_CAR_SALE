import React, { useEffect, useState } from "react";
import * as Module from "modules";
import FormEditSales from "components/sales/FormEditSales";
import api from "api/sales";
const edit = (props) => {
  const { show, onHide, params } = props;
  const [detail, setDetail] = useState([]);
  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };

  const getDataDetail = async () => {
    await api.getSalesDetail({ id: params }).then((res) => {
      // console.log("ahmad", res.data);
      if (res?.status?.code === 200) {
        setDetail(res.data);
      }
    });
  };

  useEffect(() => {
    if (show) {
      getDataDetail();
    }
  }, [show]);

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
