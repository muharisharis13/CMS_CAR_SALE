import React, { useState, useEffect } from "react";
import * as Components from "../../components";
import ModalDetail from "./edit";
import ModalCreated from "./add";
import api from "api/product";

const dataColumns = [
  {
    header: "Nama",
  },
  {
    header: "No. Handphone",
  },
  {
    header: "Email",
  },
  {
    header: "Merek",
  },
  {
    header: "Model",
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
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [params, setParams] = useState(null);

  const getData = async () => {
    await api.getProduct().then((res) => {
      if (res?.status.code === 200) {
        setData(res.data.data);
        setTotalPage(res.data.total_page);
        setPage(res.data.page);
      } else {
        alert("Error");
      }
    });
  };

  const btnPagination = async (page) => {
    let selectedPage = page.selected + 1;
    await api.getProduct(selectedPage).then((res) => {
      if (res?.status.code === 200) {
        setData(res.data.data);
        setTotalPage(res.data.total_page);
        setPage(res.data.page);
      } else {
        alert("Error");
      }
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
                totalPage={totalPage}
                page={page}
                handleOnChange={btnPagination}
              >
                {data.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.nama_penjual}</td>
                    <td>{item.no_hp}</td>
                    <td>{item.email}</td>
                    <td>{item.merek}</td>
                    <td>{item.model}</td>
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
