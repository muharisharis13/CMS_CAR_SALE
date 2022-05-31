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
              <label for="basicInput">Status</label>
              <fieldset class="form-group">
                <select class="form-select" id="basicSelect">
                  <option>Inpeksi</option>
                  <option>Approve</option>
                  <option>Cancel</option>
                </select>
              </fieldset>
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
