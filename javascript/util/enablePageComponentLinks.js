import animateMainChildren from './animateMainChildren.js';
import PageComponent from './fetchPageComponent.js';

function enablePageComponentLinks() {
	// Get all buttons with a data-pagecomponent attribute
	const links = Array.from(document.querySelectorAll('button')).filter(button => button.dataset.pagecomponent !== undefined);

	links.forEach(link => {
		const linkDestination = link.dataset.pagecomponent;
		if (!linkDestination) {
			console.error('No page component link destination found on',link);
			return;
		}

		const animationDuration = 1000;

		link.addEventListener('click', async() => {
			// debounce
			if (document.querySelector('.remove-class') || document.querySelector('.add-class')) {
				return;
			}

			const main = document.querySelector('main');

			animateMainChildren('out', animationDuration);

			const content = await PageComponent.fetch(linkDestination);

			setTimeout(() => {
				main.remove();
				PageComponent.hydrate(content, document.querySelector('body'));
				animateMainChildren('in', animationDuration);
				enablePageComponentLinks();

			}, animationDuration);
		});
	});
}

export default enablePageComponentLinks;
