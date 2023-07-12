window.addEventListener('keydown', pressLetter);
function pressLetter(e) {
	const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
	const key = document.querySelector(`.key[id="${e.keyCode}"]`);
	if (!audio) return;
	audio.play();
	audio.currentTime = 0;
	key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
	if (e.propertyName !== 'transform') {
		return
	} else {
		this.classList.remove('playing');
	}
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));