import React, { useEffect, useState } from "react";
import * as Module from "modules";
import FormInputProduct from "components/product/FormInputProduct";
import api from "api/product";

const edit = (props) => {
  const { show, onHide, params, getData } = props;
  const [detail, setDetail] = useState([]);

  const btnSubmit = () => {
    const body = {
      nama_penjual: detail.nama_penjual,
      no_hp: detail.no_hp,
      email: detail.email,
      merek: detail.merek,
      model: detail.model,
    };

    api.ProductUpdate({ id: params, body: body }).then((res) => {
      if (res?.status?.code === 200) {
        alert("berhasil");
        getData();
        onHide(true);
      } else {
        alert("Error");
      }
    });
  };

  const getDataDetail = async () => {
    await api.getProductDetail({ id: params }).then((res) => {
      if (res.data) {
        setDetail(res.data);
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
        nama_penjual={detail.nama_penjual}
        no_hp={detail.no_hp}
        email={detail.email}
        merek={detail.merek}
        model={detail.model}
        setNama_penjual={(e) =>
          setDetail((state) => ({
            ...state,
            nama_penjual: e.target.value,
          }))
        }
        setNo_hp={(e) =>
          setDetail((state) => ({
            ...state,
            no_hp: e.target.value,
          }))
        }
        setEmail={(e) =>
          setDetail((state) => ({
            ...state,
            email: e.target.value,
          }))
        }
        setMerek={(e) =>
          setDetail((state) => ({
            ...state,
            merek: e.target.value,
          }))
        }
        setModel={(e) =>
          setDetail((state) => ({
            ...state,
            model: e.target.value,
          }))
        }
      />
    </Module.Modal.Basic>
  );
};

export default edit;
