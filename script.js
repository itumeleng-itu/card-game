
const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;

cards.forEach(card => {
	card.addEventListener('click', () => {
		if (lockBoard || card.classList.contains('flipped')) return;

		card.classList.add('flipped');
		flippedCards.push(card);

		if (flippedCards.length === 2) {
			checkMatch();
		}
	});
});

function checkMatch() {
	const [first, second] = flippedCards;

	if (first.dataset.letter === second.dataset.letter) {
		flippedCards = [];
		checkGameWon();
	} else {
		lockBoard = true;
		setTimeout(() => {
			first.classList.remove('flipped');
			second.classList.remove('flipped');
			flippedCards = [];
			lockBoard = false;
		}, 1000);
	}
}

function checkGameWon() {
	const all = document.querySelectorAll('.card');
	const flipped = document.querySelectorAll('.card.flipped');
	if (all.length === flipped.length) {
		setTimeout(() => alert('Congratulations! You won!'), 500);
	}
}
