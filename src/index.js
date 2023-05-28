import './style.css';

const apiUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";
const gameID = "sSp1j6upmVZcVf8CqPAz";


const refreshButton = document.getElementById('refresh_btn');
const recentScoresList = document.getElementById('list_elements');
const submit_form = document.getElementById('form');


async function getScores() {
  try {
    const response = await fetch(`${apiUrl}/${gameID}/scores`, {
      method: "GET"
    });
    const data = await response.json();
    scoreList.innerHTML = ""; // Clear previous scores
    data.forEach(score => {
      const listItem = document.createElement("li");
      recentScoresList.textContent = `${score.user}: ${score.score}`;
      scoreList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching scores:", error);
  }
}


async function submitScore(user, score) {
  try {
    const response = await fetch(`${apiUrl}/${gameID}/scores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: user,
        score: score
      })
    });
    if (response.ok) {
      console.log("Score submitted successfully!");
      await getScores(); // Refresh scores after submitting
    } else {
      console.error("Failed to submit score:", response.status);
    }
  } catch (error) {
    console.error("Error submitting score:", error);
  }
}

submit_form.addEventListener("submit", event => {
  event.preventDefault();
  const user = document.getElementById("player_name").value;
  const score = document.getElementById("player_score").valueAsNumber;
  submitScore(user, score);
});


refreshButton.addEventListener("click", () => {
  getScores();
});

 // Initial fetch to populate scores
 getScores();