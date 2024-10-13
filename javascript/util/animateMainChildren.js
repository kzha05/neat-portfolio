function animateMainChildren(direction = 'in', durationInMiliseconds = 500) {
	const main = document.querySelector('main');
	const childrenOfMain = main.children;
	const isSingleChild = Array.from(childrenOfMain).length === 1;
	const children = Array.from(childrenOfMain);
	const prevdisplay = main.style.display;
	const prevoverflow = main.style.overflow;
	main.style.display = 'none';
	main.style.overflow = 'hidden';

	const animationDelay = durationInMiliseconds / 2 / children.length;


	children.forEach((child, index) => {
		if (direction.toLowerCase() === 'in') {
			child.classList.add('add-class');
			child.style.animationDelay = `${ index * animationDelay }ms`;
			child.style.animationDuration = `${ durationInMiliseconds / 2 }ms`;
			setTimeout(() => {
				child.classList.remove('add-class');
			},durationInMiliseconds);
			return;
		}
		if (direction.toLowerCase() === 'out') {
			child.classList.add('remove-class');
			child.style.animationDelay = `${ index * animationDelay }ms`;
			child.style.animationDuration = `${ durationInMiliseconds / 2 }ms`;
			setTimeout(() => {
				child.classList.remove('add-class');
			},durationInMiliseconds);
			return;
		}


		console.error('Invalid direction usage of animateMainChildren');


	});

	main.style.display = prevdisplay;
	setTimeout(() => {
		main.style.overflow = prevoverflow;
	},durationInMiliseconds);
	return null;
}

export default animateMainChildren;
