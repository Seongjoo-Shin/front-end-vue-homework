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
    <AlertDialog v-if="alertDialog" :message="alertDialogMessage" :loading="loading" @close="alertDialog = false"/>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import apiAuth from "@/apis/auth";
import AlertDialog from "@/components/menu07/AlertDialog.vue";

const store = useStore();
const router = useRouter();

const user = reactive({
  id: "user",
  password: "12345",
});

const alertDialog = ref(false);
const alertDialogMessage = ref("");
const loading = ref(false);

async function handleLogin() {
  alertDialog.value = true;
  loading.value = true;


  const result = await apiAuth.login(user);
  if(result === "success") {
    alertDialog.value = false;
    // router.push("/"); // 로그인 성공후 페이지 이동
  } else if(result === "fail-401") {
    alertDialogMessage.value = "로그인 실패 : 아이디 또는 비밀번호가 틀림";
  } else {
    alertDialogMessage.value = "로그인 실패 : 네트워크 에러";
  }
  
  loading.value = false;
}

async function handleLogout() {
  await apiAuth.logout();
}

</script>

<style scoped>
</style>