<template>
  <div class="card">
    <div class="card-header">
      SetupHook
    </div>
    <div class="card-body">
      <button @click="handleBtn" class="btn btn-info btn-sm mr-2">버튼</button>    
      <button @click="emitEvent" class="btn btn-info btn-sm mr-2">이벤트 발생</button>    
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // props 선언
  props: ["prop1"],

  // 이벤트 선언
  emits: ["component-event"],

  // setup() 훅 재정의
  setup(props, context) { // context : view객체가 실행되는 환경 객체
    console.log("created 상태가 될 때 setup() 실행");
    console.log(props);
    console.log(context);
    // 반응형 속성 선언
    const count = ref(0);
    // 이벤트 핸들러 선언
    function handleBtn() { // return을 해주지 않으면 사용할 수 없음
      console.log("handle Btn");
    }

    function emitEvent() { 
      context.emit("component-event", "value1");
    }
    return {
      count, 
      handleBtn, // 사용하기 위해 리턴을 줘야함
      emitEvent,
    }
  },
}
</script>