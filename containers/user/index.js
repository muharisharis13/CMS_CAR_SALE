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
  const ShowModal = () => setModal((state) => ({ ...state, detail: true }));
  const dataTable = [
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
      header1: "header1",
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
  ];

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
          <Components.dataTable dataColumns={dataColumns} data={dataTable} />
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
