<script setup>
import { ref, computed } from 'vue'
const count = ref(0);
// computed 읽기 전용
const onePlus = computed(() => count.value + 1);
// computed 읽기 쓰기 가능
const onePlusGetSet = computed({
  get: () => count.value * 2,
  set: (val) => count.value = val
});
// show tooltip when hovering over button follow cursor, each tooltip has different content
const tooltip = ref(null);
const showTooltip = (e) => {
  const { clientX, clientY } = e;
  tooltip.value = {
    display: 'block',
    left: clientX + 'px',
    top: clientY + 'px'
  }
}
const hideTooltip = () => {
  tooltip.value = {
    display: 'none'
  }
}
</script>

<template>
  <button @click="count++">count is: {{ count }}</button>
  <div :class="maincss.retangular">count(+1) is: {{ onePlus }}</div>
  <button @click="onePlusGetSet = 0" @mousemove="showTooltip" @mouseleave="hideTooltip">
    count(*2) is: {{ onePlusGetSet }}
  </button>
  <!--show tooltip when hovering over button follow cursor-->
  <div :style="tooltip" class="tooltip">Click to reset Value</div>
</template>

<style scoped>
/*id css, tooltip, black background, white text, rounded corner, no cursor change on hover, default invisible*/
.tooltip {
  position: absolute;
  background: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  cursor: default;
  display: none;
}
/*metro style button*/
button {
  background: hsl(162, 100%, 42%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>

<style module="maincss">
/*same style with button, fit content, no cursor change, not draggable, inline*/
.retangular {
  background: hsl(337, 73%, 56%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: default;
  font-size: 1.2rem;
  display: inline-block;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
