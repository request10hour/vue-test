<script setup>
// import from animejs
import anime from 'animejs'
let a;
// appear animation from bottom
const appear = () => {
	anime({
		targets: '#card',
		translateY: -50,
		easing: 'easeOutBack',
		duration: 400,
		loop: false
	})
}
// size updown when hover with animejs
const sizeup = () => {
	a = anime({
		targets: '#card',
		keyframes: [
			{ scale: 1.1, duration: 300 },
			{ scale: 1, duration: 400 }
		],
		easing: 'easeInOutQuad',
		loop: true,
		autoplay: true,
	})
}
// b to false when mouseleave
const sizeupleave = () => {
	a.restart()
	a.pause()
}
</script>

<template>
	<div class="wrapper">
		<div id="card" v-on:mousedown="sizeup" v-on:mouseup="sizeupleave" v-on:mouseleave="sizeupleave"
			v-on:touchstart="sizeup" v-on:touchend="sizeupleave">카드</div>
	</div>
</template>

<style scoped>
.wrapper {
	display: grid;
	justify-content: center;
	align-items: center;
	height: 90vh;
}

/* card shape, class card*/
#card {
	width: 30rem;
	max-width: 90vw;
	height: 40rem;
	max-height: 80vh;
	border-radius: 1rem;
	box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
	/* text center (col, row) and font bold */
	display: grid;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 10rem;
}

/* card tilt */
#card:hover {
	transform: translateY(-0.5rem);
	box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
}
</style>
