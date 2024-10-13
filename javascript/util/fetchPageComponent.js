const PageComponent = {

	// fetches content from page component file
	async fetch(pageComponentName, customLocation = false) {
		// main file location for page components
		const location = 'page-components';

		return customLocation ? fetch(pageComponentName) : fetch(`${ location }/${ pageComponentName }`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Error fetching ${ pageComponentName }: ${ response.statusText }`);
					// throw works the same as return, if its executed, the function stops, hens no else on next line
				}
				return response.text();
			})
			.then(html => html)
			.catch(error => {
				console.error('Error fetching content:', error);
				return null;
			});
	},

	// inserts content into parent element
	hydrate(content, parent, isText = false) {

		parent.insertAdjacentHTML('beforeend', content);

		// Find and execute any script tags
		const scripts = parent.querySelectorAll('.window-content script');
		scripts.forEach(script => {
			const newScript = document.createElement('script');
			newScript.type = 'module';
			newScript.textContent = script.textContent;
			document.querySelector('body').appendChild(newScript);
			document.querySelector('body').removeChild(newScript);
		});
	},
};

export default PageComponent;
