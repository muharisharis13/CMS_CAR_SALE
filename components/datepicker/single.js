import React from "react";
import DatePicker from "react-datepicker";

const Single = (props) => {
  const { seletedDate, onChange } = props;
  return (
    <DatePicker
      selected={seletedDate}
      onChange={onChange}
      className="form-control"
      placeholderText="Select Start Date"
    />
  );
};

export default Single;
