import axios from "axios";
import store from "@/store";

// import {useStore} from "vuex" 얘는 컴포넌트 안에서만 사용가능한 형태

async function join(user) {  
  try {
    const response = await axios.post("/member/join", {
      mid: user.id,
      mname: user.name,
      mpassword: user.password,
      mrole: user.role,
      memail: user.email,
    });
    return response.data.result; // success, duplicated, fail
  } catch(error) {
    console.log(error);
    return "fail-network";
  } 
}

async function login(user) {
  try {
    const response = await axios.post("/member/login", {
      mid: user.id,
      mpassword: user.password,
    });
    store.dispatch("saveAuth", {userId: response.data.mid, authToken: response.data.accessToken});
    return "success";
  } catch(error) {
    console.log(error);
    // network 에러인 경우 error.repsonse자체가 없다
    if(error.response) {
      if(error.response.status === 401) {
        return "fail-401";
      } 
    } else {
      return "fail-network";
    }
  } 
}

async function logout() {
  try {
    await axios.get("/member/logout");
    store.dispatch("deleteAuth");
  } catch(error) {
    console.log(error);
  }
}

async function refreshToken() {
  if(store.state.authToken !== "") {
    try{
      const response = await axios.get("/member/refreshToken");
      store.dispatch("saveAuth", {
        userId: response.data.mid,
        authToken: response.data.accessToken,
      })
    } catch(error) {
      console.log(error);
    }
    return true;
  }
  return false;
}

export default {
  join,
  login,
  logout,
  refreshToken,
};