import axios from "axios";
import Cookies from "js-cookies";

class product {
  getProduct = () => {
    return axios
      .get("https://carsale.mesproject.id/api/v1/user/produk", {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  getProductDetail = ({ id }) => {
    return axios
      .get(`https://carsale.mesproject.id/api/v1/user/produk/detail/${id}`, {
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
        `https://carsale.mesproject.id/api/v1/user/produk/edit/${id}`,
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
