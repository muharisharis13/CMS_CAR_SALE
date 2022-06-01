import React, { memo } from "react";
import PropTypes from "prop-types";

const formInputProduct = (props) => {
  const { phone, setPhone, tahunProduksi, setTahunProduksi } = props;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <div className="mb-3">
              <label for="basicInput">Nama Mobil</label>
              <input
                type="text"
                className="form-control"
                id="basicInput"
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
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value.replace(/[^0-9.]/g, ""))
                }
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
                value={tahunProduksi}
                onChange={(event) =>
                  setTahunProduksi(event.target.value.replace(/[^0-9.]/g, ""))
                }
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
    </React.Fragment>
  );
};

export default memo(formInputProduct);

formInputProduct.propTypes = {
  phone: PropTypes.number.isRequired,
  setPhone: PropTypes.any.isRequired,
  tahunProduksi: PropTypes.any,
  setTahunProduksi: PropTypes.any,
};
