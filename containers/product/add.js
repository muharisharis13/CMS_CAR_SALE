import React, { useState } from "react";
import * as Module from "modules";
import FormInputProduct from "components/product/FormInputProduct";
import api from "api/product";
import Cookies from "js-cookies";

const add = (props) => {
  const { show, onHide } = props;
  const [nama_penjual, setNama_penjual] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const [email, setEmail] = useState("");
  const [merek, setMerek] = useState("");
  const [model, setModel] = useState("");
  const hape = no_hp.substring(0, 2);
  const btnSubmit = (e) => {
    e.preventDefault();
    const body = {
      nama_penjual: nama_penjual,
      no_hp: no_hp.replace("08", "62"),
      email: email,
      merek: merek,
      model: model,
    };
    api.postProduct(body).then((res) => {
      if (res.data.id) {
        Cookies.setItem("token", res.data.token);
        alert("Berhasil");
        onHide();
      } else {
        alert("gagal");
      }
    });
  };
  return (
    <Module.Modal.Basic
      modalTitle="Created"
      show={show}
      onHide={onHide}
      btnName="Save"
      btnSubmit={btnSubmit}
      size="xl"
    >
      <FormInputProduct
        nama_penjual={nama_penjual}
        setNama_penjual={setNama_penjual}
        no_hp={no_hp}
        setNo_hp={setNo_hp}
        email={email}
        setEmail={setEmail}
        merek={merek}
        setMerek={setMerek}
        model={model}
        setModel={setModel}
      />
    </Module.Modal.Basic>
  );
};

export default add;
