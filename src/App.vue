<script setup>
import Title from './components/TitleComponent.vue'
import Main from './components/MainComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Title msg="This is first title" msg2="This is second title" msg3="third"></Title>
    </div>
    <div class="isTitle">
      Title in App vue
    </div>
  </header>

  <main>
    <Main></Main>
  </main>
</template>

<style scoped>
</style>
