<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <!-- v-bind="product"는 자동으로 구조분해되어서 윗줄 형태로 넘어감 -->
      
      <ChildA prop1="value1" prop2="value2" productNo="1" product-kind="bag" :productPrice="1000"/>
      <hr/>
      <ChildB :no="product.no" :kind="product.kind"/>
      <ChildB v-bind="product"/>
      <ChildC :product="product"/>
      <button @click="changeData" class="btn btn-info btn-sm mt-2">데이터 변경</button>
      <hr/>
      <ChildD propA="문자열" 
              :propB="1" 
              :prop-c="2"
              :prop-d="'valuec'"
              :prop-e="3"
              :prop-f="{message: '안녕하세요'}"
              :prop-g="['red', 'green', 'blue']"
              :prop-h="()=>{return 'prop value'}"
              :prop-i="4"/>
    </div>
  </div>
</template>

<script setup>
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import ChildD from "./ChildD";
import { reactive } from "vue";

// 반응형 속성 선언
const product = reactive({
  no: 1,
  kind: "bag",
});

function changeData() {
  product.no++; // reactive 는 .value 안씀 | ref는 .value 씀
  product.kind += "bag";
}
</script>

<style scoped>
</style>