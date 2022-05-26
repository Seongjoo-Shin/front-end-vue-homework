import axios from "axios";

// 게시물 목록 요청
async function getBoardList(pageNo=1) {
  // 여기에 작성한 이유, catch의 error역시 response이고, 
  // response를 try-catch 바깥에서 return 해주기 위해서
  let response = null; 
  try {
    response = await axios.get("/board/list", {params:{pageNo}});
    // console.log(response);
  } catch(error) {
    console.log(error);
  } 

  if(response != null) {
    return response.data;
  } else {
    return null;
  }
}

// 게시물 쓰기 (멀티 파트)
async function createBoard(multipartFormData) {
  let dbBoard = null;
  try {
    const response = await axios.post("/board/", multipartFormData);
    dbBoard = response.data;
  } catch(error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
  return result;
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  downloadBoardAttach,
  deleteBoard,
}