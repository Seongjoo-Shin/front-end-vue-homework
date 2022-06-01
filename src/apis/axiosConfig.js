import axios from "axios";

// axios.defaults.baseURL = "http://localhost";


//요청 HTTP에 Authorization 헤더 추가, 값은 JWT로 설정
function addAuthHeader(authToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
}

//요청 HTTP에 Authorization 헤더 추가하지 않음
function removeAuthHeader() {
  delete axios.defaults.headers.common["Authorization"];
}

export default {
  addAuthHeader,
  removeAuthHeader,
};
