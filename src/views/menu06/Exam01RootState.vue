<template>
  <div class="card">
    <div class="card-header">
      Exam01RootState
    </div>
    <div class="card-body">
      <div>
        <h6>[Root State 읽기]</h6>
        <p>userId 단방향 바인딩 : {{$store.state.userId}} ($store.state.userId)</p> <!-- $store는 store/index.js에서 createStore가 만든 객체-->
        <p>userId 단방향 바인딩 : {{store.state.userId}} (store.state.userId) </p>
        <p>userId 단방향 바인딩 : {{store.getters.getUserId}} (store.getters.getUserId) </p>
        <p>userId 단방향 바인딩 : {{getUserId()}} (getUserId())</p>
        <p>userId 단방향 바인딩 : {{computedUserId}} (computed 속성 사용)</p>
        <p>userId 양방향 바인딩 : <input type="text" v-model="$store.state.userId"/> (v-model 사용)</p> <!-- 양방향 바인딩 이므로 루트 상태를 바꿈 -->
      </div>
      <hr/>
      <h6>[Root State 변경]</h6>
      <p>userId 변경값 입력 : <input type="text" v-model="userId"/></p>
      <div>
        <button @click="ChangeUserIdByMutation" class="btn btn-info btn-sm mr-2">userId 변경 (Mutation 동기 방식)</button>
        <button @click="ChangeUserIdByAction" class="btn btn-info btn-sm mr-2">userId 변경 (Action 비동기 방식)</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();

function getUserId(){
  return store.state.userId;
  // return store.getters.getUserId;
}

const computedUserId = computed(() => {
  // return store.state.userId;
  return store.getters.getUserId;
});

const userId = ref("");

function ChangeUserIdByMutation() {
  store.commit("setUserId", userId.value);
}

function ChangeUserIdByAction() {
  store.dispatch("setUserIdByAsync", {userId: userId.value, duration: 300036});
}

</script>

<style scoped>
</style>