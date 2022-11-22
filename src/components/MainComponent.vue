<script setup>
import { ref } from 'vue'
// import animejs
import anime from 'animejs'
// import userouter
import { useRouter } from 'vue-router'
const router = useRouter()
// disappear animation
const disappear = () => {
	anime({
		targets: '.btn',
		scale: 0,
		easing: 'easeInBack',
		duration: 400,
		// opacity: 0,
		loop: false
	})
}
// const true or false
const show = ref(true)
const clicked = (path) => {
	if (show.value == true) {
		disappear()
		show.value = false
		setTimeout(() => {
			router.push(path)
		}, 400)
	}
}
// rotate 30deg when hover with animejs
const rotate = (e) => {
	anime({
		targets: e.target,
		rotate: 30,
		easing: 'easeInOutBack',
		duration: 400,
		loop: false
	})
}
const rerotate = (e) => {
	anime({
		targets: e.target,
		rotate: 0,
		easing: 'easeInOutBack',
		duration: 400,
		loop: false
	})
}
</script>

<template>
	<!-- place center with wrapper grid -->
	<div class="wrapper">
		<button id="button1" class="btn" v-on:click="clicked('/explore')"
			v-on:mouseenter="rotate($event)" v-on:mouseleave="rerotate($event)">Explore
			Button
		</button>
		<button id="button2" class="btn" v-on:click="clicked('/send')"
			v-on:mouseenter="rotate($event)" v-on:mouseleave="rerotate($event)">Send
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
.btn{
	border-radius: 10rem;
	width: 20rem;
	height: 20rem;
	font-size: 2rem;
	background-color: #ff7bff;
	border-color: #ff7bff;
}

.btn:hover {
	background-color: #d969d9;
	border-color: #cc62cc;
}

.btn:active {
	background-color: #cc62cc;
	border-color: #bf5cbf;
}

.btn:focus {
	box-shadow: 0 0 0 1rem rgba(255, 123, 255, 0.5);
}
</style>
