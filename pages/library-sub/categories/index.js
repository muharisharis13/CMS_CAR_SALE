import React, { useState } from "react";
import * as Components from "../../../components";

const header = ["Category Name", "Item Stocks"];
const Catgeories = () => {
  const [modal, setModal] = useState({
    assignToItem: false,
    assignToItemCreate: false,
  });

  const BtnModalAssignToItem = (type) => {
    if (type === "close") {
      setModal((state) => ({ ...state, assignToItem: false }));
    }

    if (type === "open") {
      setModal((state) => ({ ...state, assignToItem: true }));
    }
  };
  const BtnModalAssignToItemCreate = (type) => {
    if (type === "close") {
      setModal((state) => ({ ...state, assignToItemCreate: false }));
    }

    if (type === "open") {
      setModal((state) => ({ ...state, assignToItemCreate: true }));
    }
  };

  const BtnDetailAsignToItem = (idx) => {
    setModal((state) => ({ ...state, assignToItemCreate: true }));
  };
  return (
    <div>
      <Components.pageTitle
        titleName="Categories"
        breadcrumbItem={["library"]}
        breadcrumbItemActive="catgeories"
      />

      <section className="section">
        <div className="row mb-2">
          <div className="col-12">
            <div className="wrap-search mb-2">
              <Components.Search />
            </div>
            <div className="wrap-button d-flex align-items-center justify-content-end gap-2">
              <button
                className="btn btn-primary"
                onClick={() => BtnModalAssignToItemCreate("open")}
              >
                Create Category
              </button>
            </div>
          </div>
        </div>

        {/* table data */}

        <div className="row">
          <div className="col-12 col-md-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <Components.TableResponsive header={header}>
                    {header.map((item, idx) => (
                      <tr key={idx} style={{ cursor: "pointer" }}>
                        <td onClick={() => BtnDetailAsignToItem(idx)}>
                          {"Sayur"}
                        </td>
                        <td onClick={() => BtnDetailAsignToItem(idx)}>
                          {"1 Items"}
                        </td>
                        <td>
                          <button
                            className="btn border"
                            onClick={() => BtnModalAssignToItem("open")}
                          >
                            Assign To Item
                          </button>
                        </td>
                      </tr>
                    ))}
                  </Components.TableResponsive>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL ===== */}

      <React.Fragment>
        <Components.Modal.library.AssignToItem
          show={modal.assignToItem}
          onHide={() => BtnModalAssignToItem("close")}
        />
        <Components.Modal.library.createAssignToItem
          show={modal.assignToItemCreate}
          onHide={() => BtnModalAssignToItemCreate("close")}
        />
      </React.Fragment>
    </div>
  );
};

export default Catgeories;
