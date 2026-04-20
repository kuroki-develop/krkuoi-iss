const words = [
  { en: "improve", ja: "改善する" },
  { en: "reduce", ja: "減らす" },
  { en: "increase", ja: "増やす" },
  { en: "maintain", ja: "維持する" },
  { en: "decide", ja: "決める" },
  { en: "provide", ja: "提供する" }
];

let score = 0;
let lives = 5;
let combo = 0;
let questionCount = 0;
let currentAnswer = "";

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const comboEl = document.getElementById("combo");
const progressEl = document.getElementById("progress");

nextQuestion();

function nextQuestion() {
  if (lives <= 0 || questionCount >= 20) return endGame();

  questionCount++;

  const correct = words[Math.floor(Math.random() * words.length)];
  currentAnswer = correct.ja;

  let choices = [correct.ja];

  while (choices.length < 4) {
    const rand = words[Math.floor(Math.random() * words.length)].ja;
    if (!choices.includes(rand)) choices.push(rand);
  }

  choices.sort(() => Math.random() - 0.5);

  questionEl.textContent = correct.en;
  choicesEl.innerHTML = "";

  choices.forEach(c => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.textContent = c;

    btn.onclick = () => {
      if (c === currentAnswer) {
        btn.classList.add("correct");
        combo++;
        score += 10 * combo;
      } else {
        btn.classList.add("wrong");
        lives--;
        combo = 0;
      }

      update();
      setTimeout(nextQuestion, 600);
    };

    choicesEl.appendChild(btn);
  });

  update();
}

function update() {
  scoreEl.textContent = "Score: " + score;
  comboEl.textContent = "Combo: " + combo;
  progressEl.textContent = questionCount + " / 20";
  livesEl.textContent = "❤️".repeat(lives);
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("finalScore").textContent = "Score: " + score;
}
