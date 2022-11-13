<script setup>
// 완전한 타입 추론을 지원하는 props 및 emits와 같은 옵션을 선언하려면,
// defineProps 및 defineEmits를 사용하십시오.
defineProps({
  msg: {
    type: String,
    required: true
  },
  msg2: {
    type: String,
    required: true
  },
  msg3: {
    type: String,
    required: true
  }
})
const msg4 = 'title';
const theme = {
  color: 'orange',
}

</script>

<template>
  <h1 class="isTitle">{{ msg }}</h1>
  <h2 :class="$style.isTitle">{{ msg2 }}</h2>
  <h3 :class="classes.isTitle">This is {{ msg3 }} title</h3>
  <h4>Fourth {{ msg4 }}</h4>
</template>

<style scoped>
/* h1에 적용 */
.isTitle {
  color: red;
}
/* h4에 적용 */
h4 {
  color: v-bind('theme.color');
}
</style>

<style module>
/* h2에 적용 */
.isTitle {
  color: blue;
}
</style>

<style module="classes">
/* h3에 적용 */
.isTitle {
  color: green;
}
</style>
