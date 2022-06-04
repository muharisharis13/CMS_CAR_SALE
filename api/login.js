import axios from "axios";

class login {
  postUser = (body) => {
    return axios
      .post("https://carsale.mesproject.id/api/v1/auth/user/login", body)
      .then((res) => res?.data)
      .catch((error) => error?.respones);
  };
}

export default new login();
