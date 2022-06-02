import React, { useEffect, useState } from "react";
import * as Module from "modules";
import FormInputProduct from "components/product/FormInputProduct";
import api from "api/product";

const edit = (props) => {
  const { show, onHide, params, getData } = props;
  const [detail, setDetail] = useState([]);

  const btnSubmit = () => {
    const body = {
      title: detail.title,
    };

    api.ProductUpdate({ id: params, body: body }).then((res) => {
      console.log(res);
      if (res.title) {
        alert("berhasil edit gais", res?.title);
        onHide();
        getData();
      }
    });
  };

  const getDataDetail = async () => {
    await api.getProductDetail({ id: params }).then((res) => {
      if (res) {
        setDetail(res);
      }
    });
  };
  useEffect(() => {
    if (show) {
      getDataDetail();
    }
  }, [show]);

  return (
    <Module.Modal.Basic
      modalTitle="Detail"
      show={show}
      onHide={onHide}
      btnName="Submit"
      btnSubmit={btnSubmit}
      size="xl"
    >
      <FormInputProduct
        phone={detail.title}
        title={detail.title}
        brand={detail.brand}
        setTitle={(e) =>
          setDetail((state) => ({
            ...state,
            title: e.target.value,
          }))
        }
      />
    </Module.Modal.Basic>
  );
};

export default edit;
