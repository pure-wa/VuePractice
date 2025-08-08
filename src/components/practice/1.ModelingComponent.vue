<template>
    <!-- 단방향바인딩 - 새로고침 하지않아도 값이 실시간으로 변경. -->
     <!-- 화면내에서는 this를 붙일 필요는 없음. -->
    <h1>hello world {{ language }}</h1>
    <!-- v-model 문법을 사용하면 양방향 데이터 바인딩 -->
    <input type="text" v-model = "value">
    <button @click="changeValue()">변수 변경</button>
    <button @click="showValue()">변수 확인</button>
</template>

<script>
export default {
    // data() 함수는 화면에서 사용할 변수들을 정의.
    data() {
        return {
            // 배열,객체,int,다양한 것들 정의 가능함.
            language:"java",
            value:"java"
        }
    },
    // 개발자가 정의하는 함수는 methods안에 정의됨.
    methods: {
        changeValue(){
            // this의 의미는 현재 컴포넌트 객체 자신을 의미
            // this는 주로 컴포넌트 내부에 선언된 변수(data변수내)에 접근할때 주요 사용.
            this.value = "C++"
            this.language = "C++"
        },
        showValue(){
            alert(this.value)
        }
    }
}
</script>