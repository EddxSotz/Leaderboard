const refreshScores = async (game) => {
  const list = document.getElementById('list_elements');
  try {
    const scoreListArray = await game.readScores();

    list.textContent = '';

    scoreListArray.result.forEach((item) => {
      
      html += `
        <li>
          <span class="span-name">${item.user}</span>
          <span class="span-score">${item.score}</span>
        </li>`;
    });

    list.innerHTML = html;
  } catch (error) {
    list.innerHTML = '<li>There was an error refreshing the scores</li>';
  }
};

export default refreshScores;