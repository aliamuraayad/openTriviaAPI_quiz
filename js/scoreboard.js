const scoreBoardList = document.getElementById('scoreBoardList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

scoreBoardList.innerHTML = highScores.map(score => `<li class="high-score">${score.name} - ${score.score}</li>`).join("")
