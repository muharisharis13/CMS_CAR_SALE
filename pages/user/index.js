import React from "react";
import * as Components from "../../components";
<<<<<<< HEAD
import * as Containers from "../../containers";

const User = () => {
  return (
    <React.Fragment>
      <Components.Helmet title="User" />
      <Containers.User />
    </React.Fragment>
  );
};

export default User;
=======
import { useRouter } from "next/router";
import Script from "next/script";

const header = ["Avatar","Username", "Fullname"];
export default function Index() {
   const router = useRouter();

    const BtnDetailUser = (id) => {
    router.push(`/user/${id}`);
  };

  return (
    <div>
      <Components.pageTitle
        titleName="Users"
        breadcrumbItem={["Setting"]}
        breadcrumbItemActive={"User"}
      />
            <div className="row mb-2">
          <div className="col-12 col-md-12">
            <div className="wrap-search mb-2">
              <Components.Search />
            </div>
            <div className="wrap-button d-flex align-items-center justify-content-end gap-2">
              <button
                className="btn btn-primary"
                onClick={() => router.push(`/user/create`)}
              >
                Create User
              </button>
            </div>
          </div>
        </div>
      <div className="card">
        <div className="card-content">
          <div className="card-body">
                  <Components.TableResponsive header={header}>
                    {header.map((item, idx) => (
                      <tr
                        key={idx}
                        style={{ cursor: "pointer" }}
                        onClick={() => BtnDetailUser(idx)}
                      >
                        <td className="text-bold-500">Image</td>
                        <td className="text-bold-500">Paul</td>
                        <td className="text-bold-500">Paul George</td>
                      </tr>
                    ))}
                  </Components.TableResponsive>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 0b795331b375c5e10009b6fecfbbb0813ac3287d
