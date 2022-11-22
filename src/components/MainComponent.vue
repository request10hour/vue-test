<script setup>
// import animejs
import anime from 'animejs'
// import userouter
import { useRouter } from 'vue-router'
const router = useRouter()
// disappear animation
const disappear = () => {
	anime({
		targets: '#button',
		scale: 0,
		easing: 'easeInBack',
		duration: 400,
		// opacity: 0,
		loop: false
	})
}
const clicked = (path) => {
	disappear()
	// go to subpage1 after 1s
	setTimeout(() => {
		router.push(path)
	}, 500)
}
</script>

<template>
	<!-- place center with wrapper grid -->
	<div class="wrapper">
		<button id="button" class="btn btn-primary btn-lg btn-block" v-on:click="clicked('/explore')">Explore
			Button</button>
		<button id="button" class="btn btn-primary btn-lg btn-block" v-on:click="clicked('/send')">Send
			Button</button>
	</div>
</template>

<style scoped>
/* place center with wrapper grid */
.wrapper {
	display: grid;
	justify-content: center;
	align-items: center;
	height: 90vh;
}

/* make round button */
.btn-lg {
	border-radius: 10rem;
}

.btn-block {
	width: 20rem;
	height: 20rem;
}

.btn-primary {
	background-color: #ff7bff;
	border-color: #ff7bff;
}

.btn-primary:hover {
	background-color: #d969d9;
	border-color: #cc62cc;
}

.btn-primary:active {
	background-color: #cc62cc;
	border-color: #bf5cbf;
}

.btn-primary:focus {
	box-shadow: 0 0 0 1rem rgba(255, 123, 255, 0.5);
}
</style>
