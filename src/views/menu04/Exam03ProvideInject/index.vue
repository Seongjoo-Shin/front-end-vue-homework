<template>
  <div class="card">
    <div class="card-header">
      Exam03ProvideInject
    </div>
    <div class="card-body">
      <ChildA class="mb-2"/>
      <ChildB/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, provide } from "vue";
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB";

const data1 = ref("parent-value1");
const data2 = ref({name1: "parent-value2", name2: "parent-value3"});
const data3 = reactive({name3: "parent-value4", name4: "parent-value5"});

provide("message", {data1, data2, data3}); // key, value가 서로 이름이 같아서 이 형태로 작성 가능

</script>

<style scoped>
</style>