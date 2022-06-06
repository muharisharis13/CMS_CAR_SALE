import axios from "axios";
import Cookies from "js-cookies";

class product {
  getProduct = () => {
    return axios

      .get("https://dev-carsale.mesproject.id/api/v1/admin/product", {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  postProduct = (body) => {
    return axios
      .post("https://dev-carsale.mesproject.id/api/v1/admin/product", body, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  getProductDetail = ({ id }) => {
    return axios
      .get(`https://dev-carsale.mesproject.id/api/v1/admin/product/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  ProductUpdate = ({ id, body }) => {
    return axios
      .put(
        `https://dev-carsale.mesproject.id/api/v1/admin/product/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${Cookies.getItem("token")}`,
          },
        }
      )
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
}

export default new product();
