import React, { useState, useEffect } from "react";
import * as Module from "modules";
import FormEditSales from "components/sales/FormEditSales";
import api from "api/sales";
import moment from "moment";
const edit = (props) => {
  const { show, onHide, params, getData } = props;
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState({});
  const [date, setDate] = useState(new Date());
  const btnSubmit = () => {
    const body = {
      status: selected.value,
      date: moment(date).format("YYYY-MM-DD hh:mm"),
    };
    const id = detail.id;
    api.salesUpdate({ id: id, body: body }).then((res) => {
      // console.log("ha", res?.data);
      if (res?.status?.code === 200) {
        alert("berhasil");
        getData();
        onHide(true);
      } else {
        alert("Error");
      }
    });
  };

  const getDataDetail = async () => {
    await api.getSalesDetail({ id: params }).then((res) => {
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
      <FormEditSales
        params={detail}
        status={detail.status}
        date={date}
        setDate={setDate}
        selected={selected}
        setSelected={setSelected}
      />
    </Module.Modal.Basic>
  );
};

export default edit;
