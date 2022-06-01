import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Status as SelectStatus } from "components/Select";
import DatePicker from "components/datepicker/single";
const formInputSales = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <div className="mb-3">
              <label for="basicInput">Status</label>
              <SelectStatus />
            </div>
          </div>
        </div>
      </div>
      <DatePicker seletedDate={date} onChange={(e) => setDate(e)} />
    </React.Fragment>
  );
};

export default memo(formInputSales);

formInputSales.propTypes = {
  seletedDate: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
};
