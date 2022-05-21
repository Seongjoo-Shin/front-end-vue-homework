<template>
  <div class="card">
    <div class="card-header">
      Exam08Slot
    </div>
    <div class="card-body">
      <button class="btn btn-info btn-sm mr-2" @click="dialogA = true">Show DialogA</button>
      <button class="btn btn-info btn-sm mr-2" @click="dialogB = true">Show DialogB</button>
    </div>
    <DialogA v-if="dialogA" v-on:confirm="handleConfirm" @close="dialogA  = false"/>
    <DialogB v-if="dialogB" @login="handleLogin" @close="dialogB = false"/>
  </div>
</template>

<script setup>
import DialogA from "./DialogA";
import DialogB from "./DialogB";
import { ref } from "vue";


// 반응형 속성 선언
const dialogA = ref(false);
const dialogB = ref(false);

// 메소드 선언 ( 일반 JS의 함수가 아니라, 컴포넌트의 메소드)
function handleConfirm() {
  console.log("handleConfirm 실행");
  dialogA.value = false;
}

function handleLogin() {
  console.log("handleLogin 실행");
  dialogB.value = false;
}
</script>

<style scoped>
</style>