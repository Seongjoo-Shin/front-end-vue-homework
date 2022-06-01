import axios from "axios";
import apiAuth from "@/apis/auth";

// 게시물 목록 요청
async function getBoardList(pageNo=1) {
  // 여기에 작성한 이유, catch의 error역시 response이고, 
  // response를 try-catch 바깥에서 return 해주기 위해서
  let response = null; 
  try {
    response = await axios.get("/board/list", {params:{pageNo}});
    return {result:"success", data:response.data};
  } catch(error) {
    if(error.response) { 
      // 서버의 응답은 있음
      if(error.response.status === 403) { // 자원에 접근할 수 없는 오류
        if(await apiAuth.refreshToken()) {
          response = await axios.get("/board/list", {params:{pageNo}});
          return {result: "success", data: response.data};
        }
      }
    } else {
      // 네트워크 오류
      return {result:"fail-netwokr"};
    }
  } 
}

// 게시물 쓰기 (멀티 파트)
async function createBoard(multipartFormData) {
  let dbBoard = null;
  try {
    const response = await axios.post("/board/", multipartFormData);
    dbBoard = response.data;
  } catch(error) {
    if(error.response) { 
      if(error.response.status === 403) { 
        if(await apiAuth.refreshToken()) {
          const response = await axios.post("/board/", multipartFormData);
          dbBoard = response.data;
        }
      }
    }
  }

  return dbBoard;
}

// 게시물 읽기
async function readBoard(bno, hit) {
  let board = null;
  try {
    const response = await axios.get(`/board/${bno}?hit=${hit}`);
    board = response.data;
  } catch(error) {
    if(error.response) { 
      if(error.response.status === 403) {
        if(await apiAuth.refreshToken()) {
          const response = await axios.get(`/board/${bno}?hit=${hit}`);
          board = response.data;
        }
      }
    }
  }
  return board;
}

// 파일 다운로드
async function downloadBoardAttach(bno) {
  let blob = null;
  try {
    const response = await axios.get(`/board/battach/${bno}`, {responseType: "blob"});
    blob = response.data;
  } catch(error) {
    if(error.response) { 
      if(error.response.status === 403) {
        if(await apiAuth.refreshToken()) {
          const response = await axios.get(`/board/battach/${bno}`, {responseType: "blob"});
          blob = response.data;
        }
      }
    }
  }  
  return blob;
}

// 게시물 삭제
async function deleteBoard(bno) {
  let result = null;
  try {
    const response = await axios.delete(`/board/${bno}`);
    result = response.data.result;
  } catch(error) {
    if(error.response) { 
      if(error.response.status === 403) { 
        if(await apiAuth.refreshToken()) {
          const response = await axios.delete(`/board/${bno}`);
          result = response.data.result;
        }
      }
    }
  }
  return result;
}

// 게시물 수정
async function updateBoard(multipartFormData) {
  let dbBoard = null;
  try {
    const response = await axios.put(`/board/`, multipartFormData);
    dbBoard = response.data;
  } catch(error) {
    if(error.response) { 
      if(error.response.status === 403) {
        if(await apiAuth.refreshToken()) {
          const response = await axios.put(`/board/`, multipartFormData);
          dbBoard = response.data;
        }
      }
    }
  }

  return dbBoard;
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  downloadBoardAttach,
  deleteBoard,
  updateBoard,
}