import axios from "axios";

class product {
  getProduct = () => {
    return axios
      .get("https://dummyjson.com/products")
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  getProductDetail = ({ id }) => {
    return axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  ProductUpdate = ({ id, body }) => {
    return axios
      .put(`https://dummyjson.com/products/${id}`, body)
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
}

export default new product();
