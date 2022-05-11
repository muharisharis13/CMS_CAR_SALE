import React from "react";
import Datepicker from "react-datepicker";
import PropTypes from "prop-types";

const Range = (props) => {
  const { startDate, onChangeStart, endDate, onChangeEnd } = props;

  return (
    <div className="d-flex align-items-center gap-4">
      <Datepicker
        selected={startDate}
        onChange={onChangeStart}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="form-control"
        placeholderText="Select Start Date"
        dateFormat="dd, MMM yyyy"
      />
      <Datepicker
        selected={endDate}
        onChange={onChangeEnd}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="form-control"
        placeholderText="Select End Date"
        disabled
        dateFormat="dd, MMM yyyy"
      />
    </div>
  );
};

export default Range;

Range.propTypes = {
  startDate: PropTypes.any.isRequired,
  endDate: PropTypes.any.isRequired,
  onChangeStart: PropTypes.func.isRequired,
  onChangeEnd: PropTypes.func.isRequired,
};

Range.defaultProps = {
  startDate: new Date(),
  endDate: new Date(),
};
