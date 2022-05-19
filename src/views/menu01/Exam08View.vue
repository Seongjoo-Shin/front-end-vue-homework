<template>
  <div class="card">
    <div class="card-header">
        Exam08View
    </div>
    <div class="card-body">
      <div>kind: {{route.params.kind}}</div>
      <div>color: {{route.params.color}}</div>
    </div>
  </div>
</template>

<script setup>
    import { useRoute } from "vue-router";
    import { toRaw } from "vue";

    const route = useRoute(); // fullpath, name, params, path
    console.log(route);
    console.log("-----------------------------");
    console.log(toRaw(route));
    console.log("-----------------------------");
    console.log(JSON.parse(JSON.stringify(route))); // 가장 읽기 쉬운 형식
    console.log("-----------------------------");
    console.log("kind : " + route.params.kind);
    console.log("color : " + route.params.color);

    
</script>

<style scoped>
</style>