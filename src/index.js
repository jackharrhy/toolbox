import 'normalize.css';
import './styles/main.scss';

const exampleJson = require('./example.json');

window.addEventListener('DOMContentLoaded', async () => {
	const {flatten} = await import('meowj');
	const playgroundIn = document.getElementById('meowj-playground-in');
	const playgroundOut = document.getElementById('meowj-playground-out');

	const displayFlat = (value) => {
		try {
			const flat = flatten(value);
			playgroundIn.value = value;
			playgroundOut.value = flat;
		}
		catch (err) {
			playgroundOut.value = err.message;
		}
	};

	displayFlat(JSON.stringify(exampleJson, null, 2));

	playgroundIn.addEventListener('input', function()  {
		displayFlat(playgroundIn.value);
	});
})
