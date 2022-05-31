import React from "react";
import * as Module from "modules";

const ModalDetail = (props) => {
  const { show, onHide } = props;

  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };

  return (
    <Module.Modal.Basic
      modalTitle="Detail"
      show={show}
      onHide={onHide}
      btnName="Submit"
      btnSubmit={btnSubmit}
      size="xl"
    >
      ModalDetail
    </Module.Modal.Basic>
  );
};

export default ModalDetail;
