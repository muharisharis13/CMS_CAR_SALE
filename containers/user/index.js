import React, { useState } from "react";
import * as Components from "../../components";
import ModalDetail from "./modal.user.detail";

const dataColumns = [
  {
    header: "header 1",
    key: "header1",
  },
  {
    header: "header 2",
    key: "header2",
  },
  {
    header: "header 3",
    key: "header3",
  },
  {
    header: "header 4",
    key: "header4",
  },
  {
    header: "More",
    key: "header5",
  },
];

const User = () => {
  const [modal, setModal] = useState({
    detail: false,
  });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      header1: "header1",
      header2: "header2",
      header3: "header3",
      header4: "header4",
      header5: (
        <div className="btn" onClick={ShowModal}>
          View Detail
        </div>
      ),
    },
    {
      header1: "header1 muharis",
      header2: "header2",
      header3: "header3",
      header4: "header4",
    },
    {
      header1: "header1",
      header2: "header2",
      header3: "header3",
      header4: "header4",
    },
  ]);

  const ShowModal = () => {
    console.log("muharis");
    setModal((state) => ({ ...state, detail: true }));
  };

  const onHandlerSubmitSearch = () => {
    const filter = data.filter((filter) => filter.header1 === search);
    setData(filter);
  };

  return (
    <div>
      <header>
        <Components.pageTitle
          titleName={`User`}
          breadcrumbItem={[]}
          breadcrumbItemActive="User"
        />
      </header>
      <div className="card">
        <div className="card-body">
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
              </tr>
            ))}
          </Components.dataTable>
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

export default User;
