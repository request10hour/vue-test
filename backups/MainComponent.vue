<script setup>
//when button clicked, button moves to the corner of the screen
import { ref } from 'vue'
//make variable for status of button
const isClicked = ref(false)
//make x and y variables
const x1Default = 100
const y1Default = 200
const x1 = ref(x1Default)
const y1 = ref(y1Default)
var x1Final = window.innerWidth - 300
var y1Final = window.innerHeight - 150
//make second x and y variables
const x2Default = 100
const y2Default = 400
const x2 = ref(x2Default)
const y2 = ref(y2Default)
var x2Final = window.innerWidth - 150
var y2Final = window.innerHeight - 150
//moving with animation
const move = () => {
  isClicked.value = true
  const timer1 = setInterval(() => {
    for (let i = 0; i < 10; i++) {
      if (x1.value >= x1Final && y1.value >= y1Final) {
        clearInterval(timer1)
      } else {
        if (x1.value < x1Final)
          x1.value += 1
        if (y1.value < y1Final)
          y1.value += 1
      }
    }
  }, 1)
  const timer2 = setInterval(() => {
    for (let i = 0; i < 10; i++) {
      if (x2.value >= x2Final && y2.value >= y2Final) {
        clearInterval(timer2)
      } else {
        if (x2.value < x2Final)
          x2.value += 1
        if (y2.value < y2Final)
          y2.value += 1
      }
    }
  }, 1)
}
//make event when change window size, with isclicked value, x1 and x2 values
const onResize = () => {
  x1Final = window.innerWidth - 300
  y1Final = window.innerHeight - 150
  x2Final = window.innerWidth - 150
  y2Final = window.innerHeight - 150
  if (isClicked.value) {
    x1.value = x1Final
    y1.value = y1Final
    x2.value = x2Final
    y2.value = y2Final
  }
  else {
    x1.value = x1Default
    y1.value = y1Default
    x2.value = x2Default
    y2.value = y2Default
  }
  console.log('a');
}
//make event when change window size
window.addEventListener('resize', onResize)

const show = ref(true)
const showreverse = () => {
  show.value = !show.value
}
</script>

<template>
  <!-- make round button -->
  <button class="btn btn-primary btn-lg btn-block" v-on:click="move"
    :style="{ left: x1 + 'px', top: y1 + 'px' }">Explore Button</button>
  <button class="btn btn-primary btn-lg btn-block" v-on:click="move" :style="{ left: x2 + 'px', top: y2 + 'px' }">Send
    Button</button>

  <Transition name="bounce">
    <p v-if="show" style="text-align: center;" v-on:click="showreverse">
      Hello here is some bouncy text!
    </p>
  </Transition>

</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
/* make round button */
.btn-lg {
  border-radius: 10rem;
}

.btn-block {
  width: 100px;
  height: 100px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:active {
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:disabled {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled):active:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

/* btn-primary location is free */
.btn-primary {
  position: absolute;
}

/* two button in a col, using grid */
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
