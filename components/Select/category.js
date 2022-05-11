import React, { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const array = [
  { value: "Minuman", label: "Minuman" },
  { value: "Makanan", label: "Makanan" },
  { value: "Lainnya", label: "Lainnya" },
];

const category = (props) => {
  const [selected, setSelected] = useState("");

  const HandleSelected = (e) => {
    setSelected(e);
  };
  return (
    <Select
      options={array}
      value={selected}
      onChange={(e) => HandleSelected(e)}
      placeholder="Select Category"
    />
  );
};

export default category;
