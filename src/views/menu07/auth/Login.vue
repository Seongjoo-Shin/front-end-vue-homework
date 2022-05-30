<template>
  <div class="card">
    <div class="card-header">
       로그인
    </div>
    <div class="card-body">
      <!-- 로그인 X -->
      <div v-if="store.state.userId === ''">
        <div class="form-group">
          <label class="form-label">User ID</label>
          <input type="text" class="form-control" id="userId" v-model="user.id" />
        </div>
        <div class="form-group">
          <label for="userPassword" class="col-form-label">User Password</label>
          <input type="text" class="form-control" v-model="user.password" />
        </div>
        <button class="btn btn-info btn-sm" v-on:click="handleLogin">로그인</button>
      </div>
      <!-- 로그인 O -->
      <div v-if="store.state.userId !== ''">
        <button class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import apiAuth from "@/apis/auth";

const store = useStore();

const user = reactive({
  id: "user",
  password: "12345",
});

async function handleLogin() {
  const result = await apiAuth.login(user);
  if(result === "success") {
    console.log(result);
  } else if(result === "fail-401") {
    console.log(result);
  } else {
    console.log(result);
  }
}

async function handleLogout() {

}

</script>

<style scoped>
</style>