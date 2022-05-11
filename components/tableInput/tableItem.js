import React from "react";
import styled from "styled-components";

const TableItem = () => {
  return (
    <Container>
      {/* label */}
      <div className="wrap d-flex">
        <div className="">
          <div className="label-text p-1 text-uppercase text-center">Item</div>
          <input type="text" placeholder="Item" readOnly />
        </div>
        <div className="">
          <div className="label-text p-1 text-uppercase text-center">
            in stock
          </div>
          <input type="text" placeholder="in stock" readOnly />
        </div>
        <div className="">
          <div className="label-text p-1 text-uppercase text-center">order</div>
          <input type="text" placeholder="order" />
        </div>
        <div className="">
          <div className="label-text p-1 text-uppercase text-center">
            unit cost
          </div>
          <input type="text" placeholder="unit cost" />
        </div>
        <div className="">
          <div className="label-text p-1 text-uppercase text-center">total</div>
          <div className="d-flex position-relative">
            <input type="text" placeholder="total" readOnly />
            <i
              className="bi bi-x-circle-fill position-absolute text-danger"
              style={{
                right: "5%",
                top: "25%",
                bottom: "0",
                cursor: "pointer",
              }}
            ></i>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .wrap {
    .label-text {
    }
    input {
      border-radius: 0 !important;
      border: thin solid #180a0a;
      padding: 5px;
      &:focus {
        border-color: #66afe9;
        box-shadow: none !important;
        outline: none;
      }
    }
  }
`;

export default TableItem;
