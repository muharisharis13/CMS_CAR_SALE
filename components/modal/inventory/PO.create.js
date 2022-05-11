import React from "react";
import * as Module from "../../../module";
import * as Components from "../../index.js";
import PropTypes from "prop-types";

const POCreate = (props) => {
  const { show, onHide } = props;

  return (
    <Module.Modal.Basic
      modalTitle="Purchase Order Detail"
      show={show}
      onHide={onHide}
      size="xl"
    >
      <div className="mb-3">
        <label htmlFor="">Select Supplier</label>
        <Components.Select.Supplier />
      </div>
      <div className="mb-3">
        <label htmlFor="">Note</label>
        <textarea
          name=""
          className="form-control"
          placeholder="Note."
          id=""
          cols="10"
          rows="5"
        ></textarea>
      </div>

      {/* PURCHASE ORDER */}

      <div className="mb-3">
        <label htmlFor="">Purchase Order</label>
      </div>

      {/* table input  */}
      <div className="list-item mb-3">
        {[2, 2].map((item, idx) => (
          <div
            key={idx}
            className="mb-3 d-flex align-items-center justify-content-center"
          >
            <Components.TableInput.TableItem />
          </div>
        ))}
      </div>

      {/* table input  */}
      <div className="list-variant">
        {[2, 2].map((item, idx) => (
          <div
            key={idx}
            className="mb-3 d-flex align-items-center justify-content-center"
          >
            <Components.TableInput.TableVariant />
          </div>
        ))}
      </div>
    </Module.Modal.Basic>
  );
};

POCreate.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
POCreate.defaultProps = {
  show: false,
};
export default POCreate;
