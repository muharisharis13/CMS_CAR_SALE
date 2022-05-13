import React from "react";
import * as Components from "../../components";

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
];

const dataTable = [
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
  {
    header1: "header1",
    header2: "header2",
    header3: "header3",
    header4: "header4",
  },
];

const User = () => {
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
    </div>
  );
};

export default User;
