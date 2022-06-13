import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Status as SelectStatus } from "components/Select";
import DatePicker from "components/datepicker/single";
const formInputSales = (props) => {
  const { params, status, date, setDate, selected, setSelected } = props;

  const HandleSelected = (e) => {
    setSelected(e);
  };

  useEffect(() => {
    setSelected({
      value: params?.status,
      label: params?.status,
    });
  }, [params?.id]);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <div className="mb-3">
              <label for="basicInput">Status</label>
              <SelectStatus
                HandleSelected={HandleSelected}
                selected={selected}
                status={status}
              />
            </div>
          </div>
        </div>
      </div>
      {params?.status === "PENDING" ? (
        <DatePicker
          selected={date}
          onChange={(e) => setDate(e)}
          minDate={new Date()}
          showTimeSelect
        />
      ) : null}
    </React.Fragment>
  );
};

export default memo(formInputSales);

formInputSales.propTypes = {
  seletedDate: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
};
