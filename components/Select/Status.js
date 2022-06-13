import React, { useState, useEffect } from "react";
import Select from "react-select";
import api from "api/sales";

const Status = (props) => {
  const { params } = props;
  const [selected, setSelected] = useState(props);
  const [option, setOption] = useState([]);
  const getDataStatus = async () => {
    await api.getSalesStatus({ id: params }).then((res) => {
      // console.log("status", res.data);
      if (res.data) {
        setOption(res.data);
      }
    });
  };
  useEffect(() => {
    getDataStatus();
  });

  const HandleSelected = (e) => {
    setSelected(e);
  };
  return (
    <Select
      options={option.map((item) => ({
        value: item.status,
        label: item.status,
      }))}
      value={selected}
      // onChange={(e) => HandleSelected(e.target.value)}
      placeholder="Select Status"
    />
  );
};

export default Status;
