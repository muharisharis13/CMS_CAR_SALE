import React, { memo } from "react";
import PropTypes from "prop-types";

const formInputProduct = (props) => {
  const {
    nama_penjual,
    setNama_penjual,
    no_hp,
    setNo_hp,
    email,
    setEmail,
    merek,
    setMerek,
    model,
    setModel,
  } = props;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <div className="mb-3">
              <label for="basicInput">Nama</label>
              <input
                type="text"
                className="form-control"
                value={nama_penjual}
                onChange={(event) => setNama_penjual(event.target.value)}
                id="basicInput"
                placeholder="Nama Penjual"
              />
            </div>
            <div className="mb-3">
              <label for="basicInput">No. Handphone</label>
              <input
                type="tel"
                className="form-control"
                value={no_hp}
                onChange={(event) =>
                  setNo_hp(event.target.value.replace(/[^0-9.]/g, ""))
                }
                id="basicInput"
                placeholder="No. Handphone"
              />
            </div>
            <div className="mb-3">
              <label for="basicInput">Email</label>
              <input
                type="email"
                className="form-control"
                id="basicInput"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="basicInput">Merek</label>
              <input
                type="text"
                className="form-control"
                id="basicInput"
                placeholder="Merek"
                value={merek}
                onChange={(event) => setMerek(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="basicInput">Model</label>
              <input
                type="text"
                className="form-control"
                id="basicInput"
                placeholder="Model"
                value={model}
                onChange={(event) => setModel(event.target.value)}
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
  nama_penjual: PropTypes.any.isRequired,
  setNama_penjual: PropTypes.any.isRequired,
  no_hp: PropTypes.any.isRequired,
  setNo_hp: PropTypes.any.isRequired,
  email: PropTypes.any.isRequired,
  setEmail: PropTypes.any.isRequired,
  merek: PropTypes.any.isRequired,
  setMerek: PropTypes.any.isRequired,
  model: PropTypes.any.isRequired,
  setModel: PropTypes.any.isRequired,
};
