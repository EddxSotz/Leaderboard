import './style.css';

const scores = [{ name: 'Player 1', score: 5 }, { name: 'Player 2', score: 6 }, { name: 'Player 3', score: 10 }, { name: 'Player 4', score: 12 },
  { name: 'Player 5', score: 2 }, { name: 'Player 6', score: 7 }, { name: 'Player 7', score: 15 }];

function renderRecentScores() {
  const listElement = document.getElementById('list_elements');

  scores.forEach((element) => {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = `${element.name}: ${element.score}`;
    listElement.appendChild(listItemElement);
  });
}
renderRecentScores();
