import axios from "axios";

// axios.defaults.baseURL = "http://localhost";

function addAuthHeader(authToken) {
  axios.defaults.headers.commom["Authorizaion"] = `Bearer ${authToken}`;
}

function removeAuthHeader() {
  delete axios.defaults.headers.common["Authorizaion"];
}

export default {
  addAuthHeader,
  removeAuthHeader,
}