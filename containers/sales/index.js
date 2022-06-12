import React, { useState, useEffect } from "react";
import * as Components from "../../components";
import ModalDetail from "./edit";
import Badge from "components/badge";
import api from "api/sales";

const dataColumns = [
  {
    header: "Merek",
  },
  {
    header: "Model",
  },
  {
    header: "Nama Calon Penjual",
  },
  {
    header: "No. Handphone",
  },
  {
    header: "Email",
  },
  {
    header: "Status",
  },
  {
    header: "More",
  },
];

const Sales = () => {
  const [modal, setModal] = useState({
    detail: false,
    create: false,
  });
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [params, setParams] = useState(null);

  const getData = async () => {
    await api.getSales().then((res) => {
      // console.log("getData", res.data);
      if (res?.status.code === 200) {
        setData(res.data.data);
      }
    });
  };

  const btnPagination = async (page) => {
    // console.log("page", page.selected + 1);
    let selectedPage = page.selectedPage + 1;
    await api.getSales(selectedPage).then((res) => {
      if (res?.status.code === 200) {
        setData(res.data.data);
        setTotalPage(res.data.total_page);
        setPage(res.data.page);
      } else {
        alert("error");
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const ShowModal = (id) => {
    setParams(id);
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
                totalPage={totalPage}
                page={page}
                handleOnChange={btnPagination}
              >
                {data.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.merek}</td>
                    <td>{item.model}</td>
                    <td>{item.name}</td>
                    <td>{item.tel}</td>
                    <td>{item.email}</td>
                    <td>
                      <Badge status={item.status} />
                    </td>
                    <td>
                      <div
                        className="btn btn-primay d-flex align-items-center py-2"
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
    </div>
  );
};

export default Sales;
