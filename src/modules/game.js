const game = {
  gameId: 'sSp1j6upmVZcVf8CqPAz',
  gameName: 'Tetris',
  apiUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',

  readScores: () => fetch(`${game.apiUrl}/${game.gameId}/scores`)
    .then((response) => response.json())
    .catch(() => ({ result: [{ user: 'error', score: 'error' }] })),

  addScore: (user, score) => fetch(`${game.apiUrl}/${game.gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  })
    .then((response) => response.json())
    .catch(() => ({ result: 'Could not submit' })),
};

export default game;