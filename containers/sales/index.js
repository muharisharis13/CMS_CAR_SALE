import React, { useState } from "react";
import * as Components from "../../components";
import ModalDetail from "./edit";

const dataColumns = [
  {
    header: "Nama",
    key: "header1",
  },
  {
    header: "Merk",
    key: "header2",
  },
  {
    header: "Model",
    key: "header3",
  },
  {
    header: "No. Handphone",
    key: "header4",
  },
  {
    header: "Email",
    key: "header5",
  },
  {
    header: "Status",
    key: "header6",
  },
  {
    header: "More",
    key: "header7",
  },
];

const Sales = () => {
  const [modal, setModal] = useState({
    detail: false,
    create: false,
  });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      header1: "Ahmad",
      header2: "Ford",
      header3: "Sedan",
      header4: "082267678854",
      header5: "ahmad@tes.com",
      header6: <div className="badge bg-warning">Schedule</div>,
      header7: (
        <div className="btn" onClick={() => ShowModal({ id })}>
          View Detail
        </div>
      ),
    },
  ]);

  const ShowModal = () => setModal((state) => ({ ...state, detail: true }));

  const onHandlerSubmitSearch = () => {
    const filter = data.filter((filter) => filter.header1 === search);
    setData(filter);
  };

  return (
    <div>
      <header>
        <Components.pageTitle
          titleName={`Sales`}
          breadcrumbItem={[]}
          breadcrumbItemActive="Sales"
        />
      </header>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12"></div>
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
    </div>
  );
};

export default Sales;
