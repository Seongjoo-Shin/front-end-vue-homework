<template>
  <div class="card">
    <div class="card-header">
        Exam02RefData
    </div>
    <div class="card-body">
        <p>번호 : {{no}}</p>
        <p>이름 : {{name}}</p>
        <p>회사 : {{company}}</p>
        <p>가격 : {{getPrice()}}</p>
        <p>판매 : {{detail.sale ? "판매" : "품절"}}</p>
        <hr/>
        <p v-html="detail.info"></p>
        <hr/>
        <p>
            <img src="@/assets/products/minibag-black.png" class="mr-2" height="150" />
            <img v-bind:src="require(`@/assets/products/${image}`)" class="mr-2" height="150" />
            <span v-if="!detail.sail"><img src="@/assets/products/soldout.jpg" width="100" /></span>
            <span v-show="!detail.sail"><img src="@/assets/products/soldout.jpg" width="100" /></span>
        </p>
        <hr/>
        <button @click="changeData" class="btn btn-info btn-sm">데이터 변경</button>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";

// 컴포넌트 반응형 속성 선언
let no = ref(1);
let name = ref("미니백");
let company = ref("클레인");
let price = ref(300000);
let image = ref("minibag-black.png");
let detail = ref({
    info : `<div>시그너츠 Cecyle Lock 마그네틱 클로저가 특징입니다.E</div> `,
    sale: false,
});

// 메소드 선언
function getPrice(){
    return price.value;
}

function changeData(){
    no.value++;
    name.value += "백";
    price.value += 1000;
    image.value = "minibag-red.png";

    // 객체의 속성 값을 바꿈
    // detail.value.info = "<div>시그너츠 마그네틱 클러저와 빨간색의 조화가 좋습니다.</div>";
    // detail.value.sale = !detail.value.sale;

    // 객체 자체를 바꿈
    detail.value = {
        info: "<div>시그너츠 마그네틱 클러저와 빨간색의 조화가 좋습니다.</div>",
        sale: !detail.value.sale,
    };
}
</script>

<style scoped>
</style>