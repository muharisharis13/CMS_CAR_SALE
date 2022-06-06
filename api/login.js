import axios from "axios";

class login {
  postUser = (body) => {
    return axios
      .post("https://dev-carsale.mesproject.id/api/v1/admin/auth/login", body)
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
}

export default new login();
