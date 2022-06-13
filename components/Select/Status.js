import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import api from "api/sales";

const Status = (props) => {
  const { HandleSelected, selected, status } = props;
  const [option, setOption] = useState([]);
  const filterSelect = (filter) => {
    let statusProps = status;
    if (statusProps === "PENDING") {
      return filter.value === "SCHEDULE" || filter.value === "CANCEL";
    } else if (statusProps === "SCHEDULE") {
      return filter.value === "INSPEKSI" || filter.value === "CANCEL";
    } else if (statusProps === "INSPEKSI") {
      return filter.value === "APPROVE";
    } else if (statusProps === "APPROVE") {
      return filter.value === "SOLD";
    } else return filter;
  };
  const getDataStatus = useCallback(async () => {
    await api.getSalesStatus().then((res) => {
      if (res.data) {
        setOption(
          res.data?.map((item) => ({
            value: item.status,
            label: item.status,
          }))
        );
      }
    });
  }, [selected?.value]);
  useEffect(() => {
    getDataStatus();
  }, []);

  return (
    <Select
      options={option.filter(filterSelect)}
      value={selected}
      onChange={(e) => HandleSelected(e)}
      placeholder="Select Status"
      isDisabled={status === "CANCEL" ? true : false}
    />
  );
};

export default Status;
