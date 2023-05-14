const container = document.querySelector('.container');

function createCard(cardName, textValue) {
	let card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = `
			<p class="card-name">${cardName}</p>
				<div class="code-value">
					<p class="code-value-text">${textValue}</p>
				</div>
	`;
	container.appendChild(card);
}

function runCreateCard(e){
	createCard('e.key', e.key === ' ' ? 'Space' : e.key);
	createCard('e.keyCode', e.keyCode);
	createCard('e.code', e.code);
}

window.addEventListener('keydown', (e) =>{
	container.innerHTML = '';
	runCreateCard(e);
});