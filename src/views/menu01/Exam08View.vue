<template>
  <div class="card">
    <div class="card-header">
        Exam08View
    </div>
    <div class="card-body">
      <div>route.params.kind : {{route.params.kind}}</div>
      <div>route.params.color : {{route.params.color}}</div>
      <hr/>
      <div>route.query.kind : {{route.query.kind}}</div>
      <div>route.query.color : {{route.query.color}}</div>
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
    console.log("-----------------------------");
    console.log("kind : " + route.query.kind);
    console.log("color : " + route.query.color);
    
</script>

<style scoped>
</style>