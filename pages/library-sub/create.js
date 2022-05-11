import React, { useState } from "react";
import * as Components from "../../components";
import styles from "../../styles/library.item-library.detail.module.css";
import { useRouter } from "next/router";

export default function ItemLibraryCreate() {
  const [arrayVariant, setArrayVariant] = useState([
    { varianName: "", price: "", inStock: "", alertStock: "", avgCost: "" },
  ]);
  const router = useRouter();

  const onChangeVarianName = (item, e) => {
    item.varianName = e.target.value;
    setArrayVariant([...arrayVariant]);
  };
  const onChangeVarianPric = (item, e) => {
    item.price = e.target.value;
    setArrayVariant([...arrayVariant]);
  };
  const onChangeVarianInstock = (item, e) => {
    item.inStock = e.target.value;
    setArrayVariant([...arrayVariant]);
  };
  const onChangeVarianAlertStock = (item, e) => {
    item.alertStock = e.target.value;
    setArrayVariant([...arrayVariant]);
  };
  const onChangeVarianAvg = (item, e) => {
    item.avgCost = e.target.value;
    setArrayVariant([...arrayVariant]);
  };

  const BtnAddVariant = () => {
    setArrayVariant([
      ...arrayVariant,
      {
        varianName: "",
        price: "",
        inStock: "",
        alertStock: "",
        avgCost: "",
      },
    ]);
  };

  const BtnDeleteVariant = (idx) => {
    let filter = arrayVariant.filter((filter, idFil) => idFil !== idx);

    setArrayVariant(filter);
  };

  return (
    <div>
      <Components.pageTitle
        titleName={`Create Item`}
        breadcrumbItem={["library", "Item Library"]}
        breadcrumbItemActive="Create Item"
      />

      <div className="section">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="card">
              <div className="generalInformation">
                <div className="card-header">
                  <h4 className="card-title">GENERAL INFORMATION</h4>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label for="formFile" className="form-label">
                            Image For POS
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="roundText">Product Name</label>
                          <input
                            type="text"
                            id="roundText"
                            className={`form-control round `}
                            placeholder="Product Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Category</label>
                          <Components.Select.category />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-wrap">
                <div className="card-header">
                  <h4 className="card-title">PRICING</h4>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label for="roundText">Variant</label>
                          {arrayVariant.map((item, idx) => (
                            <div className="wrap-list-variant row " key={idx}>
                              <div className="variant-name col-4 border">
                                <input
                                  type="text"
                                  placeholder="variant name"
                                  className={`form-control ${styles.input}`}
                                  value={item.varianName}
                                  onChange={(e) => onChangeVarianName(item, e)}
                                />
                              </div>
                              <div className="variant-price col-4 border">
                                <input
                                  type="text"
                                  placeholder="variant price"
                                  className={`form-control ${styles.input}`}
                                  value={item.price}
                                  onChange={(e) => onChangeVarianPric(item, e)}
                                />
                              </div>
                              <div className="variant-SKU col-4 border d-flex align-items-center justify-content-between">
                                <label>SKU</label>
                                <button
                                  className="btn text-danger d-flex align-items-center justify-content-center"
                                  onClick={() => BtnDeleteVariant(idx)}
                                >
                                  <i className="bi bi-x-circle-fill" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                          onClick={BtnAddVariant}
                        >
                          Add Variant
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inventory-wrap">
                <div className="card-header">
                  <h4 className="card-title">INVENTORY</h4>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        {arrayVariant.map((item, idx) => (
                          <div className="wrap-list-variant row " key={idx}>
                            <div className="variant-name col-4 border d-flex align-items-center">
                              <label>{item.varianName}</label>
                            </div>
                            <div className="inventory-instock col-4 border">
                              <input
                                type="text"
                                placeholder="Instock"
                                className={`form-control ${styles.input}`}
                                value={item.inStock}
                                onChange={(e) => onChangeVarianInstock(item, e)}
                              />
                            </div>
                            <div className="variant-SKU col-4 border d-flex align-items-center justify-content-between">
                              <input
                                type="text"
                                placeholder="Alert Stock"
                                className={`form-control ${styles.input}`}
                                value={item.alertStock}
                                onChange={(e) =>
                                  onChangeVarianAlertStock(item, e)
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cogs-wrap">
                <div className="card-header">
                  <h4 className="card-title">
                    Manage Cost of Goods Sold (COGS)
                  </h4>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        {arrayVariant.map((item, idx) => (
                          <div className="wrap-list-variant row " key={idx}>
                            <div className="variant-name col-6 border d-flex align-items-center">
                              <label>{item.varianName}</label>
                            </div>
                            <div className="inventory-instock col-6 border">
                              <input
                                type="text"
                                placeholder="Avg Cost"
                                className={`form-control ${styles.input}`}
                                value={item.avgCost}
                                onChange={(e) => onChangeVarianAvg(item, e)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-wrap">
                <div className="card-content">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12  d-flex align-items-center gap-2 justify-content-end">
                        <button
                          className="btn border"
                          onClick={() => router.push("/library/item-library")}
                        >
                          Kembali
                        </button>
                        <button className="btn btn-primary">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
