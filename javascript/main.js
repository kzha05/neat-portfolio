import PageComponent from './util/fetchPageComponent.js';
import enablePageComponentLinks from './util/enablePageComponentLinks.js';
import animateBallTo from './ball.example.js';

document.addEventListener('mousemove', function (event) {
	const mouseX = event.clientX;
	const mouseY = event.clientY;

	requestAnimationFrame(() => {
		animateBallTo(mouseX, mouseY);
	});
});


// initial content add for main app
document.addEventListener('DOMContentLoaded', async () => {
	const content = await PageComponent.fetch('app.html');
	PageComponent.hydrate(content, document.querySelector('body'));
	enablePageComponentLinks();
});
