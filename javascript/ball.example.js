const ball = document.getElementById('ball');

function animateBallTo(x, y) {

	ball.animate([
		{ left: ball.style.left, top: ball.style.top },
		{ left: x + 'px', top: y + 'px' }
	], {
		duration: 1000 / 3, fill: 'forwards',
	});
}


export default animateBallTo;
