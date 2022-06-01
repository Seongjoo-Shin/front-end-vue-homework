import { createStore } from 'vuex'
import counter from "./counter";
import axiosConfig from '@/apis/axiosConfig';
import axios from 'axios';
import { _ } from 'core-js';

export default createStore({
  state: {
    userId: "", // mid
    authToken: "", // AccessToken
  },
  getters: { // 상태의 값을 리턴하는 것이 목적
    getUserId(state, getters, rootState, rootGetters){ // 기본적으로 getter가 갖는 매개변수
      // index.js는 루트 상태 모듈이므로 여기서 state = rootState, getters = rootGetters인 상태
      return state.userId;
    },
    getAuthToken(state, getters, rootState, rootGetters){
      return state.authToken;
    },
    /*
    객체 메소드 작성 ( ↑ 같은 방법 )
    getUserId : function(state, getters, rootState, rootGetters) {
      return state.userId;
    },
    */
  },
  mutations: { // 동기방식으로 상태 값을 변경시키는 메소드
    setUserId(state, payload) { // setter를 직접 사용
      // 정해져있는 매개변수, payload는 바꾸고자하는 새로운 값
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    }
  },
  actions: { // 비동기방식으로 요청, 응답을 받은 후 상태 변이를 시키는 목적
    /*
    console.log("payload : ", payload);
    */
    // payload : {userId: "xxx")}}
    setUserIdByAsync(context, payload){ // context는 실행환경 객체
      console.log("context : ", context);
      // 이 위치에 나중에는 axios를 사용할 예정
      new Promise((resolve, reject) => {
        // 시간을 요하는 작업
        setTimeout(() =>{
          // 성공적으로 응답을 얻었을 경우
          resolve(payload.userId);
        } , payload.duration)
      })
      .then((data) => {
        // resolve가 되었을 경우 mutations을 이용해서 상태값 변경
        // commit을 통해서 setter를 사용
        context.commit("setUserId", data); // data 가 mutations의 setUserId의 payload로 제공
        console.log("userId 상태 변경 성공");
      })
      .catch((error) => {
        // 예외가 발생했거나, reject된 경우
        console.log("userId 상태 변경 실패");
      });

    },

    // 로그인 성공했을 때 실행
    // payload: {userId: xxxx, authToken: xxxx}
    saveAuth(context, payload) {
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);
      sessionStorage.setItem("userId", payload.userId); // sessionStorage는 내장 변수
      sessionStorage.setItem("authToken", payload.authToken);
      axiosConfig.addAuthHeader(payload.authToken);
    },

    // 로그아웃 실행할 때
    deleteAuth(context, payload) {
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      axiosConfig.removeAuthHeader();
    },

    loadAuth(context, payload) {
      context.commit("setUserId", sessionStorage.getItem("userId" || ""));
      context.commit("setAuthToken", sessionStorage.getItem("authToken" || ""));
      if(context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    }
    
  },
  modules: {
    counter,
  }
});

