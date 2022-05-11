import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const modalBasic = (props) => {
  const {
    show,
    onHide,
    size,
    fullscreen,
    modalTitle,
    children,
    btnSubmit,
    btnName,
  } = props;

  return (
    <Modal show={show} onHide={onHide} size={size} fullscreen={fullscreen}>
      <div className="modal-header">
        <h5 className="modal-title" id="myModalLabel1">
          {modalTitle}
        </h5>
        <button
          type="button"
          className="close rounded-pill"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={onHide}
        >
          <i data-feather="x"></i>
        </button>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn"
          data-bs-dismiss="modal"
          onClick={onHide}
        >
          <i className="bx bx-x d-block d-sm-none"></i>
          <span className="d-none d-sm-block">Close</span>
        </button>
        {btnSubmit && (
          <button
            type="button"
            className="btn btn-primary ml-1"
            data-bs-dismiss="modal"
            onClick={btnSubmit}
          >
            <i className="bx bx-check d-block d-sm-none"></i>
            <span className="d-none d-sm-block">{btnName}</span>
          </button>
        )}
      </div>
    </Modal>
  );
};

export default modalBasic;

modalBasic.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  size: PropTypes.string,
  modalTitle: PropTypes.string,
  children: PropTypes.any,
  fullscreen: PropTypes.bool,
  btnSubmit: PropTypes.func,
  btnName: PropTypes.string,
};

modalBasic.defaultProps = {
  show: false,
  onHide: () => null,
  size: "md",
  modalTitle: "Modal Basic",
  children: "isi nya children",
  fullscreen: false,
  btnName: "Submit",
};
