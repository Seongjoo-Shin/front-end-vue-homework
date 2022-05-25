<template>
  <div class="card">
    <div class="card-header">List</div>
    <div class="card-body">
      <div class="mb-3">
        <router-link to="/menu07/board/writeForm" class="btn btn-info btn-sm">생성</router-link>
      </div>
      <table class="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th class="text-center" style="width: 70px">번호</th>
            <th class="text-center">제목</th>
            <th class="text-center" style="width: 90px">글쓴이</th>
            <th class="text-center" style="width: 120px">날짜</th>
            <th class="text-center" style="width: 70px">조회수</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import apiBoard from "@/apis/board";
import { ref } from "vue";
import { useRoute } from "vue-router";

const page = ref(null);

const route = useRoute();

let pageNo = route.query.pageNo;
if(pageNo === "undefined") {
  pageNo = 1;
}

async function getBoardList(pageNo) {
  const result = await apiBoard.getBoardList(pageNo);
  if(result != null) {
    page.value = result;
  }
}

getBoardList(pageNo);
</script>

<style scoped>
</style>