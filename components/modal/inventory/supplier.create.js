import React from "react";
import * as Module from "../../../module";
import PropTypes from "prop-types";

const Suppliercreate = (props) => {
  const { show, onHide } = props;

  return (
    <Module.Modal.Basic
      show={show}
      onHide={onHide}
      modalTitle="Supplier"
      size="md"
      btnSubmit={() => onHide()}
    >
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="Supplier Name">Supplier Name</label>
            <input
              type="text"
              placeholder="Supplier Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="Email" className="form-control" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="Supplier Address">Supplier Address</label>
            <input
              type="text"
              placeholder="Supplier Address"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3">
            <label htmlFor="City">City</label>
            <input type="text" placeholder="City" className="form-control" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3">
            <label htmlFor="State">State</label>
            <input type="text" placeholder="State" className="form-control" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3">
            <label htmlFor="Zip">Zip</label>
            <input type="text" placeholder="Zip" className="form-control" />
          </div>
        </div>
      </div>
    </Module.Modal.Basic>
  );
};

Suppliercreate.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

Suppliercreate.defaultProps = {
  show: false,
  onHide: () => null,
};
export default Suppliercreate;
