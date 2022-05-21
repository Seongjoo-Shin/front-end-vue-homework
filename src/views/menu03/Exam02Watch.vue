<template>
  <div class="card">
    <div class="card-header">
      Exam02Watch
    </div>
    <div class="card-body">
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">UserId</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="userId">
          </div>
      </div>
      <hr/>
      <form>      
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" v-model.number="product.price">
          </div>
        </div>
      </form> 
      <hr/>
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>     
    </div>
  </div>
</template>

<script setup>
import { ref, watch, toRaw } from "vue";

const userId = ref("");
const product = ref({
  name : "",
  company : "",
  price : 0,
});

// 값 타입의 반응형 속성 감시 설정
watch(userId, (newUserId, oldUserId) => {
  console.group("userId 변경 감시");
  console.log("newUserId : ", newUserId);
  console.log("oldUserId : ", oldUserId);
  console.groupEnd();
});

// 객체 타입의 반응형 속성 감시 설정
watch(product, (newProduct, oldProduct) => {
  console.group("product 변경 감시");
  console.log("newProduct : ", toRaw(newProduct));
  console.log("oldProduct : ", toRaw(oldProduct));
  console.groupEnd();
}, {deep: true});

// 객체 타입의 반응형 속성 일부 감시 설정
watch(() => product.value.name, (newName, oldName) => {
  console.group("product의 name 변경 감시");
  console.log("newName : ", newName);
  console.log("oldName : ", oldName);
  console.groupEnd();
});

// 멀티 반응형 속성 감시 설정
watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) => {
  console.group("멀티 반응형 속성 감시 설정");
  console.log("new : ", [newUserId, toRaw(newProduct)]);
  console.log("old : ", [oldUserId, toRaw(oldProduct)]);
  console.groupEnd();
}, {deep: true});

function handleButton() {
  product.value = {
    name : "",
    company : "",
    price : 0,
  };
}

</script>

<style scoped>
</style>