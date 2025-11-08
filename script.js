// Generate random dice numbers
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Update dice images
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Determine winner text
let resultText = "";
if (randomNumber1 > randomNumber2) {
  resultText = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  resultText = "Player 2 Wins! 🚩";
} else {
  resultText = "Draw!";
}

// Update heading
document.querySelector("#result").textContent = resultText;
