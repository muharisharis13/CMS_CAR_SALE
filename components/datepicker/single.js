import React from "react";
import DatePicker from "react-datepicker";

const Single = (props) => {
  const { selected, onChange, minDate, showTimeSelect = false } = props;
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      className="form-control"
      placeholderText="Select Start Date"
      minDate={minDate}
      showTimeSelect={showTimeSelect ? true : false}
      dateFormat="yyyy-MMMM-dd hh:mm"
      timeIntervals={15}
      timeFormat={"HH:mm"}
    />
  );
};

export default Single;
