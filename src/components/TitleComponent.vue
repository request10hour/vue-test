<script setup>
// 완전한 타입 추론을 지원하는 props 및 emits와 같은 옵션을 선언하려면,
// defineProps 및 defineEmits를 사용하십시오.
defineProps({
  msg: {
    type: String,
    required: true,
    default: 'Hello World'
  },
})
</script>

<template>
  <!-- title with small icon resized-->
  <h1>
    <img alt="main logo" src="../assets/noname.png" width="40" height="40">
    {{ msg }}
  </h1>
</template>

<style scoped>
/* h1 color is magenta and font size is 40px */
h1 {
  color: magenta;
  font-size: 40px;
}
</style>
