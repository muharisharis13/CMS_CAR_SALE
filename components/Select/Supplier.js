import React, { useState } from "react";
import Select from "react-select";

const array = [
  { value: "Supplier1", label: "Supplier1" },
  { value: "Supplier2", label: "Supplier2" },
  { value: "Supplier3", label: "Supplier3" },
];

const Supplier = (props) => {
  const [selected, setSelected] = useState("");

  const HandleSelected = (e) => {
    setSelected(e);
  };
  return (
    <Select
      options={array}
      value={selected}
      onChange={(e) => HandleSelected(e)}
      placeholder="Select Supplier"
    />
  );
};

export default Supplier;
