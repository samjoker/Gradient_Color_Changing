document.getElementById('btn').addEventListener('click', () => {
	let hexNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	let hexCode1 = '';
	let hexCode2 = '';
	let index = 0;
	for (let i = 0; i < 6; i++) {
		index = Math.floor(Math.random() * hexNumbers.length);
		hexCode1 += hexNumbers[index];
		index = Math.floor(Math.random() * hexNumbers.length);
		hexCode2 += hexNumbers[index];
	}
	document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`;
	document.getElementById('hexcode1').textContent = hexCode1;
	document.getElementById('hexcode2').textContent = hexCode2;
});
