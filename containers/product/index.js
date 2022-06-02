import React, { useState, useEffect } from "react";
import * as Components from "../../components";
import ModalDetail from "./edit";
import ModalCreated from "./add";
import api from "api/product";

const dataColumns = [
  {
    header: "Nama Mobil",
  },
  {
    header: "Nama Pemilik",
  },
  {
    header: "Plat Nomor",
  },
  {
    header: "No. Handphone",
  },
  {
    header: "Model",
  },
  {
    header: "Tahun Produksi",
  },
  {
    header: "Km. Berjalan",
  },
  {
    header: "More",
  },
];

const Product = () => {
  const [modal, setModal] = useState({
    detail: false,
    create: false,
  });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [params, setParams] = useState(null);

  const getData = async () => {
    await api.getProduct().then((res) => {
      console.log(res);
      // if (res.products) {
      //   setData(res.products);
      // }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  // show modal
  const ShowModal = (id) => {
    setParams(id);
    setModal((state) => ({ ...state, detail: true }));
  };
  const ShowModalCreated = () =>
    setModal((state) => ({ ...state, create: true }));
  //show modal

  const onHandlerSubmitSearch = () => {
    const filter = data.filter((filter) => filter.header1 === search);
    setData(filter);
  };

  return (
    <div>
      <header>
        <Components.pageTitle
          titleName={`Product`}
          breadcrumbItem={[]}
          breadcrumbItemActive="Product"
        />
      </header>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-primary float-end mb-2"
                onClick={() => ShowModalCreated()}
              >
                Created
              </button>
            </div>
            <div className="col-12">
              <Components.dataTable
                dataColumns={dataColumns}
                valueSearch={search}
                onChangeSearch={(e) => setSearch(e)}
                SubmitSearch={onHandlerSubmitSearch}
                activeSearch
              >
                {data.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.title}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.header5}</td>
                    <td>{item.header6}</td>
                    <td>{item.header7}</td>
                    <td>
                      <div
                        className="btn btn-primary d-flex align-items-center py-2"
                        onClick={() => ShowModal(item.id)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </Components.dataTable>
            </div>
          </div>
        </div>
      </div>

      {/* modal ========== */}
      <ModalDetail
        params={params}
        getData={getData}
        show={modal.detail}
        onHide={() => setModal((state) => ({ ...state, detail: false }))}
      />
      <ModalCreated
        show={modal.create}
        onHide={() => setModal((state) => ({ ...state, create: false }))}
      />
    </div>
  );
};

export default Product;
