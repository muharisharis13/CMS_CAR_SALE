import React, { useState } from "react";
import * as Module from "../../module";

const edit = (props) => {
  const { show, onHide } = props;
  const [value, setValue] = useState("berarti value ini yang diambil dari API");
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
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <div className="mb-3">
                <label for="basicInput">Nama Mobil</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  value={value}
                  onChange={(event) => setValue()}
                  disabled
                  placeholder="Nama Mobil"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Nama Pemilik</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Nama Pemilik"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Plat Nomor</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Plat Nomor"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">No. Handphone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="basicInput"
                  //   value={value}
                  //   onChange={(event) =>
                  //     setPhone(event.target.value.replace(/[^0-9.]/g, ""))
                  //   }
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Model"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Tahun Produksi</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  //   value={tahunProduksi}
                  //   onChange={(event) =>
                  //     setTahunProduksi(event.target.value.replace(/[^0-9.]/g, ""))
                  //   }
                  placeholder="Tahun Produksi"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Km. Berjalan</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Model"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Module.Modal.Basic>
  );
};

export default edit;
