import React from "react";
import * as Module from "../../../module";
import PropTypes from "prop-types";

const createAssignToItem = (props) => {
  const { show, onHide } = props;

  const BtnSubmit = () => {
    onHide();
  };
  return (
    <Module.Modal.Basic
      modalTitle="Category"
      show={show}
      onHide={onHide}
      btnSubmit={BtnSubmit}
    >
      <input
        type="text"
        placeholder="input category"
        className="form-control"
      />
    </Module.Modal.Basic>
  );
};

createAssignToItem.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default createAssignToItem;
