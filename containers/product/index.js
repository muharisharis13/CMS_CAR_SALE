import React, { useState } from "react";
import * as Components from "../../components";
import ModalDetail from "./edit";
import ModalCreated from "./add";

const dataColumns = [
  {
    header: "Nama Mobil",
    key: "header1",
  },
  {
    header: "Nama Pemilik",
    key: "header2",
  },
  {
    header: "Plat Nomor",
    key: "header3",
  },
  {
    header: "No. Handphone",
    key: "header4",
  },
  {
    header: "Model",
    key: "header5",
  },
  {
    header: "Tahun Produksi",
    key: "header6",
  },
  {
    header: "Km. Berjalan",
    key: "header7",
  },
  {
    header: "More",
    key: "header8",
  },
];

const Product = () => {
  const [modal, setModal] = useState({
    detail: false,
    create: false,
  });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      header1: "Ford Fiesta",
      header2: "Ahmad",
      header3: "BK 1021 SAH",
      header4: "082267678854",
      header5: "Sedan",
      header6: "2013",
      header7: "130.000",
      header8: (
        <div className="btn" onClick={() => ShowModal({ id })}>
          View Detail
        </div>
      ),
    },
    {
      header1: "Ford Fiesta",
      header2: "Ahmad",
      header3: "BK 1021 SAH",
      header4: "082267678854",
      header5: "Sedan",
      header6: "2013",
      header7: "130.000",
      header8: (
        <div className="btn" onClick={() => ShowModal({ id })}>
          View Detail
        </div>
      ),
    },
  ]);

  const ShowModal = () => setModal((state) => ({ ...state, detail: true }));
  const ShowModalCreated = () =>
    setModal((state) => ({ ...state, create: true }));

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
                    <td>{item.header1}</td>
                    <td>{item.header2}</td>
                    <td>{item.header3}</td>
                    <td>{item.header4}</td>
                    <td>{item.header5}</td>
                    <td>{item.header6}</td>
                    <td>{item.header7}</td>
                    <td>{item.header8}</td>
                  </tr>
                ))}
              </Components.dataTable>
            </div>
          </div>
        </div>
      </div>

      {/* modal ========== */}
      <ModalDetail
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
