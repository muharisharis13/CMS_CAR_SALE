import React from "react";
import * as Components from "../../components";
import { useRouter } from "next/router";
import Script from "next/script";

const header = ["Name", "Category", "Pricing", "In Stock", "Stock Alert"];

export default function ItemLibrary() {
  const router = useRouter();

  const BtnDetailProduk = (id) => {
    router.push(`/library-sub/${id}`);
  };

  return (
    <div>
      <Components.pageTitle
        titleName="Product"
        breadcrumbItem={["library"]}
        breadcrumbItemActive={"Item Library"}
      />

      <section className="section">
        <div className="row mb-2">
          <div className="col-12 col-md-12">
            <div className="wrap-search mb-2">
              <Components.Search />
            </div>
            <div className="wrap-button d-flex align-items-center justify-content-end gap-2">
              <button
                className="btn btn-primary"
                onClick={() => router.push(`/library-sub/create`)}
              >
                Create Item
              </button>
              <button className="btn btn-primary">Export</button>
            </div>
          </div>
        </div>
        <div className="row" id="basic-table">
          <div className="col-12 col-md-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <Components.TableResponsive header={header}>
                    {header.map((item, idx) => (
                      <tr
                        key={idx}
                        style={{ cursor: "pointer" }}
                        onClick={() => BtnDetailProduk(idx)}
                      >
                        <td className="text-bold-500">Air Mineral</td>
                        <td className="text-bold-500">Minuman</td>
                        <td className="text-bold-500">2 Prices</td>
                        <td className="text-bold-500">20</td>
                        <td className="text-bold-500">1low</td>
                      </tr>
                    ))}
                  </Components.TableResponsive>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
