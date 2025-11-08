// Generate random numbers between 1 and 6 for both dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set dice images
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Determine the winner
let resultText = "";

if (randomNumber1 > randomNumber2) {
  resultText = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  resultText = "Player 2 Wins! 🚩";
} else {
  resultText = "Draw!";
}

document.querySelector("#result").textContent = resultText;
