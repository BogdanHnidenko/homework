const bodyElem = document.querySelector('body');
let oldBlock;
function generateBlocks() {
	const block = document.createElement('div');
	bodyElem.insertAdjacentElement('afterbegin', block);
	if (oldBlock) {
		oldBlock.remove()
	}
	oldBlock = block;
	block.style.width = '250px';
	block.style.height = '250px';
	block.style.marginInline = 'auto';
	block.style.display = 'flex';
	block.style.flexWrap = 'wrap';
	for (let i = 0; i < 25; i++) {
		const randomBlock = document.createElement('div');
		randomBlock.style.width = '50px';
		randomBlock.style.height = '50px';
		randomBlock.style.display = 'inline-block';
		randomBlock.style.background = randomColor();
		block.appendChild(randomBlock);
	}
	function randomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		return color
	}
}
generateBlocks()

function generateBlocksInterval() {
	setInterval(() => { generateBlocks() }, 1000);
}
generateBlocksInterval()