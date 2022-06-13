import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Status as SelectStatus } from "components/Select";
import DatePicker from "components/datepicker/single";
const formInputSales = (props) => {
  const [date, setDate] = useState(new Date());
  const { params } = props;

  return (
    <React.Fragment>
      <div className="row">
        {params.status === "PENDING" ? null : (
          <div className="col-12">
            <div className="form-group">
              <div className="mb-3">
                <label for="basicInput">Status</label>
                <SelectStatus options={props} />
              </div>
            </div>
          </div>
        )}
      </div>
      {params.status !== "PENDING" ? null : (
        <DatePicker seletedDate={date} onChange={(e) => setDate(e)} />
      )}
    </React.Fragment>
  );
};

export default memo(formInputSales);

formInputSales.propTypes = {
  seletedDate: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
};
