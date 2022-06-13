import axios from "axios";
import Cookies from "js-cookies";

const base_url = "https://dev-carsale.mesproject.id/api/v1/admin";
class sales {
  getSales = (page = 1) => {
    return axios

      .get(`${base_url}/pre-sales?page=${page}`, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
  getSalesDetail = ({ id }) => {
    return axios
      .get(`${base_url}/pre-sales/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.response);
  };
  getSalesStatus = () => {
    return axios
      .get(`${base_url}/status`, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem("token")}`,
        },
      })
      .then((res) => res?.data)
      .catch((error) => error?.response);
  };
}
export default new sales();
