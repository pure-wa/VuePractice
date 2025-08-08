<!-- 화면요소는 template태그 안에 코딩 -->
<template>
  <!-- vue에서는 모든 태그의 최상단에 v-app으로 감싸져 있어야 정상적으로 동작 -->
  <!-- <v-app> -->
    <!-- header,footer를 제외한 실질적인 화면의 내용 v-main안에 들어감 -->
    <!-- <v-main> -->
      <router-view/>
    <!-- </v-main>
  </v-app> -->
</template>


<!-- script에는 js를 코딩 -->
<script>


// vue는 export를 통하여 해당요소를 다른 화면에서도 import할 수 있도록 설정
// 즉 아래 문법은 App.vue라는 화면을 다른파일에서도 import할수있도록 컴포넌트 화시킨것
export default {
  name: 'App',
  // 다른 화면을 import한 이후에 template에서 해당 컴포넌트를 사용하려고할떄에는 components
  components: {
  }
}
</script>
<!-- 디자인요소는 style태그 안에 코딩 --> 
<style>

</style>
