import React, { useState } from "react";
import Select from "react-select";

const array = [
  { value: "Waiting Schedule", label: "Waiting Schedule" },
  { value: "Inspkesi", label: "Inspkesi" },
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
