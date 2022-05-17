import React, { useState } from "react";
import * as Module from "../../module";

const modalCreated = (props) => {
  const { show, onHide } = props;
  const [phone, setPhone] = useState(0);
  const btnSubmit = () => {
    alert("success");
    // letak handleOnChange di sini
  };
  return (
    <Module.Modal.Basic
      modalTitle="Created"
      show={show}
      onHide={onHide}
      btnName="save"
      btnSubmit={btnSubmit}
    >
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <div className="mb-3">
                <label for="basicInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="basicInput"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label for="basicInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="basicInput"
                  placeholder="Password"
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
                <label for="basicInput">Alamat</label>
                <textarea
                  className="form-control"
                  id="basicInput"
                  placeholder="Alamat"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Module.Modal.Basic>
  );
};

export default modalCreated;
