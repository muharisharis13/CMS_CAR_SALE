import React, { useState } from "react";
import Select from "react-select";

const array = [
  { value: "Waiting Schedule", label: "Waiting Schedule" },
  { value: "Schedule", label: "Schedule" },
  { value: "Inspkesi", label: "Inspkesi" },
  { value: "Approve", label: "Approve" },
];

const Status = (props) => {
  const [selected, setSelected] = useState("");

  const HandleSelected = (e) => {
    setSelected(e);
  };
  return (
    <Select
      options={array}
      value={selected}
      onChange={(e) => HandleSelected(e)}
      placeholder="Select Status"
    />
  );
};

export default Status;
