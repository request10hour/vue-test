<script setup>
import Title from './components/TitleComponent.vue'
// setup router with vue-router
import { useRouter, RouterView } from 'vue-router'
// defalut router is main
const router = useRouter()
router.push('/main')
</script>

<template>
  <header>
    <Title></Title>
  </header>

  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  max-height: 10vh;
  background-color: #ff7bff;
}
</style>

<style>
/* scroll bar disable */
body::-webkit-scrollbar {
  display: none;
}
</style>
