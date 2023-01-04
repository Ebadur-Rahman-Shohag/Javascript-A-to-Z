'use strict';
/*
//*************************Selecting html element and manipulating them***********************************
document.querySelector('.message').textContent = '🎉Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;
// In input field we use value  property to get the value instead of textContent
document.querySelector('.guess').value = 15;
*/

//********************Handling Click Events**************************
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  // If we get a value from an input field the value type always is a string type
  // Implementing the game logic
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Input a number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📊 Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📊 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (Number(document.querySelector('.score').textContent <= 0)) {
    document.querySelector('.message').textContent = '😭 You lost the game';
    document.querySelector('.score').textContent = 0;
  }
});
