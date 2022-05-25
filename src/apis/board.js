import axios from "axios";

async function getBoardList(pageNo=1) {
  let response = null;
  try {
    response = await axios.get("/board/list", {params:{pageNo}});
  } catch (error) {
    console.log(error);
  }

  if(response != null) {
    return response.data;
  } else {
    return null;
  }
}

export default {
  getBoardList,
}