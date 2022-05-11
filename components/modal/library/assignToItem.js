import React from "react";
import * as Module from "../../../module";
import * as Component from "../../index.js";
import PropTypes from "prop-types";
import styled from "styled-components";

const AssignToItem = (props) => {
  const { show, onHide } = props;

  return (
    <Module.Modal.Basic
      show={show}
      onHide={onHide}
      size="md"
      modalTitle="Assign To Item"
      btnSubmit={() => alert("Muharis")}
      btnName={"Move Selected Item"}
    >
      <div className="row">
        <div className="col-12">
          <Component.Search placeholder="Search" />
        </div>
      </div>

      {/* list data */}
      <Container className="row mt-2">
        <div className="col-12">
          <div style={{ width: "100%" }}>
            {[2, 2, 2, 2].map((item, idx) => (
              <div
                className="pt-2 pb-2 d-flex align-items-center justify-content-between"
                key={idx}
                style={{
                  borderBottom: "thin solid #ddd ",
                }}
              >
                <div className="d-flex gap-2 align-items-center">
                  <div className="wrap-image">
                    <img
                      src="https://i.gojekapi.com/darkroom/moka/v2/images/inventory/643746/685610/BgClosing.png?w=500&h=500&fit=crop"
                      alt=""
                    />
                  </div>
                  <div>terong</div>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-end">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className=" form-check"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Module.Modal.Basic>
  );
};

const Container = styled.div`
  .wrap-image {
    max-width: 70px;
    max-height: 70px;
    width: 100%;
    border-radius: 99999px;
    overflow: hidden;

    img {
      border-radius: 99999px;
      object-fit: cover;
      width: 100%;
    }
  }
`;

export default AssignToItem;

AssignToItem.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
