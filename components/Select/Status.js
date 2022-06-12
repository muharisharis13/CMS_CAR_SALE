import React, { useState } from "react";
import Select from "react-select";

const array = [
  { value: "Waiting Schedule", label: "Waiting Schedule" },
  { value: "Schedule", label: "Schedule" },
  { value: "PENDING", label: "PENDING" },
  { value: "Inspkesi", label: "Inspkesi" },
  { value: "Approve", label: "Approve" },
];

const Status = (status) => {
  const [selected, setSelected] = useState(status);
  // const { status, setStatus } = props;

  const HandleSelected = (e) => {
    setSelected(e);
  };
  return (
    <Select
      options={array}
      value={selected}
      onChange={(e) => HandleSelected(e.target.value)}
      placeholder="Select Status"
    />
  );
};

export default Status;
