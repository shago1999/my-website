// Dark mode toggle
document.getElementById('themeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

// Random game tip
const tips = [
  "Take breaks to stay creative.",
  "Test your game on different devices.",
  "Focus on player experience.",
  "Keep learning new tools.",
  "Balance challenge and fun in your games.",
  "Play other games for inspiration."
];
document.getElementById('tip').textContent = tips[Math.floor(Math.random() * tips.length)];

// Guess the Number Game
const number = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('gameResult');
  if (guess === number) {
    result.textContent = "Congratulations! You guessed right.";
  } else if (guess < number) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Too high! Try again.";
  }
}

// Click Speed Game
let clickCount = 0;
let clickTimer = null;
const clickBtn = document.getElementById('clickBtn');
const clickScore = document.getElementById('clickScore');
clickBtn.addEventListener('click', function() {
  if (clickBtn.textContent === "Start") {
    clickCount = 0;
    clickScore.textContent = "Score: 0";
    clickBtn.textContent = "Click!";
    clickBtn.disabled = false;
    clickTimer = setTimeout(() => {
      clickBtn.textContent = "Start";
      clickBtn.disabled = true;
      clickScore.textContent = `Final Score: ${clickCount}`;
      setTimeout(() => {
        clickBtn.disabled = false;
      }, 1000);
    }, 5000);
  } else {
    clickCount++;
    clickScore.textContent = `Score: ${clickCount}`;
  }
});

// Prevent form submission (demo only)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (Demo only)');
});
