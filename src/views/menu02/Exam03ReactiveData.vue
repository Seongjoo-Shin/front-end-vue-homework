<template>
  <div class="card">
    <div class="card-header">
        Exam03ReactiveData
    </div>
    <div class="card-body">
        <p>번호 : {{product.no}}</p>
        <p>이름 : {{product.name}}</p>
        <p>회사 : {{product.company}}</p>
        <p>가격 : {{getPrice()}}</p>
        <p>판매 : {{product.detail.sale ? "판매" : "품절"}}</p>
        <hr/>
        <p v-html="product.detail.info"></p>
        <hr/>
        <p>
            <img src="@/assets/products/minibag-black.png" class="mr-2" height="150" />
            <img v-bind:src="require(`@/assets/products/${product.image}`)" class="mr-2" height="150" />
            <span v-if="!product.detail.sail"><img src="@/assets/products/soldout.jpg" width="100" /></span>
            <span v-show="!product.detail.sail"><img src="@/assets/products/soldout.jpg" width="100" /></span>
        </p>
        <hr/>
        <button @click="changeData" class="btn btn-info btn-sm">데이터 변경</button>
    </div>
  </div>
</template>

<script setup>

import { reactive } from "vue";

// 컴포넌트 반응형 속성 선언
let product = reactive({
    no: 1,
    name: "미니백",
    company: "클레인",
    price: 300000,
    image: "minibag-black.png",
    detail: {
        info: "<div>시그너츠 Cecyle Lock 마그네틱 클로저가 특징입니다.</div>",
        sale: false
    }
});

// 메소드 선언
function getPrice(){
    return product.price;
}

function changeData(){
    // 반응형 객체의 내부 속성값 변경
    product.no++;
    product.name = "빨간 미니백";
    product.price += 1000;
    product.image = "minibag-red.png";

    product.detail.info = "<div>시그너츠 마그네틱 클러저와 빨간색의 조화가 좋습니다.</div>";
    product.detail.sale = !product.detail.sale;
    
    // 반응형 객체를 교체할 수 없다.
    // product = reactive({
    // no: 2,
    // name: "미니백2",
    // company: "클레인2",
    // price: 300000,
    // image: "minibag-black.png",
    // detail: {
    //         info: "<div>시그너츠 Cecyle Lock 마그네틱 클로저가 특징입니다.</div>",
    //         sale: false
    //     }
    // });
}

 
</script>

<style scoped>
</style>