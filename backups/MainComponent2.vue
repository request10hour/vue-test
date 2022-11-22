<script setup>
// vue transition disappear, fadeout right corner
import { ref } from 'vue'
//show variable
const show = ref(true)
//showreverse function
const showReverse = () => {
	show.value = !show.value
}
//make x and y variables
const x1Default = 100
const y1Default = 200
const x1 = ref(x1Default)
const y1 = ref(y1Default)
//make second x and y variables
const x2Default = 100
const y2Default = 400
const x2 = ref(x2Default)
const y2 = ref(y2Default)
</script>

<template>
	<!-- make round button -->
	<Transition name="fade">
		<button v-if="show" class="btn btn-primary btn-lg btn-block disappear" v-on:click="showReverse"
			:style="{ left: x1 + 'px', top: y1 + 'px' }">Explore
			Button</button>
	</Transition>
	<Transition name="fade">
		<button v-if="show" class="btn btn-primary btn-lg btn-block disappear" v-on:click="showReverse"
			:style="{ left: x2 + 'px', top: y2 + 'px' }">Send
			Button</button>
	</Transition>
	<!-- vue transition disappear, fadeout right corner -->
</template>

<style scoped>
/* fadeout right corner */
.fade-enter-active {
	animation: fade-in 0.5s;
}

.fade-leave-active {
	animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
	0% {
		opacity: 0;
		transform: translateX(100px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
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
