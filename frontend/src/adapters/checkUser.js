import axios from "axios";

import { BACKEND_URL } from "./apiCalls";

function checkUser() {
  return axios({
    method: "get",
    url: `${BACKEND_URL}/api/users/current`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
    .then((response) => {
      if (response.status === 200) return response;
      return false;
    })
    .catch(() => false);
}

export default checkUser;
