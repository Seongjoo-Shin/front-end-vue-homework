<template>
  <div class="card">
    <div class="card-header">
      Exam02CounterState
    </div>
    <div class="card-body">
      <div>
        <h6>[Counter State 읽기]</h6>
        <p>counter/count 단방향 바인딩 : {{$store.state.counter.count}} ($store.state.counter.count)</p> <!-- $store는 store/index.js에서 createStore가 만든 객체-->
        <p>counter/count 단방향 바인딩 : {{store.state.counter.count}} (store.state.counter.count)</p>
        <!-- namespaced가 true로 설정되어 counter/getCount로 생성이 됨 -->
        <p>counter/count 단방향 바인딩 : {{store.getters["counter/getCount"]}} (store.getters["counter/getCount"])</p>
        <p>counter/count 단방향 바인딩 : {{getCount()}} (getCount())</p>
        <p>counter/count 단방향 바인딩 : {{computedCount}} (computedCount)</p>
        <p>counter/count 양방향 바인딩 : <input type="text" v-model="$store.state.counter.count"/> (v-model 사용)</p> <!-- 양방향 바인딩 이므로 루트 상태를 바꿈 -->
      </div>
      <hr/>
      <h6>[Counter State 변경]</h6>
      <p>count 증가값 입력 : <input type="text" v-model.number="value"/></p>
      <div>
        <button @click="ChangeCountByMutation" class="btn btn-info btn-sm mr-2">counter/count 변경 (Mutation 동기 방식)</button>
        <button @click="ChangeCountByAction" class="btn btn-info btn-sm mr-2">counter/count 변경 (Action 비동기 방식)</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

function getCount() {
  return store.state.counter.count;
  // return store.getters["counter/getCount"];
}
// function 보다는 computed 속성을 사용하는 것이 좋음
// 컴포넌트의 속성이 바뀌면서 템플릿이 리로드 될 때 메소드는 계속 반복해서 실행을 하게 됨
// computed는 이전값과 변함이 없다면 다시 실행되지 않기 때문에 더 효율적임
const computedCount = computed(() => {
  // return store.state.counter.count;
  return store.getters["counter/getCount"];
});

function ChangeCountByMutation() {
  store.commit("counter/setCount", value.value);
}

function ChangeCountByAction() {
  store.dispatch("counter/setCountByAsync", {value: value.value, duration: 3000});
}

const value = ref(1);
</script>

<style scoped>
</style>