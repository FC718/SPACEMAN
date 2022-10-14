const winningWords = ["pluto", "venus", "mars", "across the universe", "galaxy"];
const maxWrong = 6;
const IMAGES = [ 
  "imgs/spaceman-images/spaceman-0.jpg",
  "imgs/spaceman-images/spaceman-1.jpg",
  "imgs/spaceman-images/spaceman-2.jpg",
  "imgs/spaceman-images/spaceman-3.jpg",
  "imgs/spaceman-images/spaceman-4.jpg",
  "imgs/spaceman-images/spaceman-5.jpg",
  "imgs/spaceman-images/spaceman-6.jpg",
];

let secretWord; 
let wrongLetters;
let winner; 
let guessWord; 
let gameStatus; 

const letterEls = [...document.querySelectorAll('#section > button')];
const pGuessWord = document.getElementById('p-guessword');
const homeButton = document.getElementById('homebtn');
const msgEl = document.getElementById('p-message');
const imgEl = document.querySelector('img');

document.querySelector('section')
.addEventListener('click', handleChoice);
homeButton.addEventListener('click', init);

init();  
function init() {
  wrongLetters = [];
  const maxIdx = Math.floor(Math.random() * winningWords.length); 
  secretWord = winningWords[maxIdx].toUpperCase('').split('');
  guessWord = secretWord.map(ltr => ltr === ' ' ? ' ' : '_' ); 
  gameStatus = null;
  render();
}

function render() {
  renderMessage();
  imgEl.src = `imgs/spaceman-${wrongLetters.length}.jpg`;
  pGuessWord.textContent = guessWord.join(' ');
  renderButton();
}

function renderMessage() {
  if(gameStatus === 'W') {
    msgEl.textContent = 'WINNER WINNER, OUT OF SPACE DINNER';
  } else if (gameStatus === 'L') {
    msgEl.innerText = `Youre out in space! The answer was ${secretWord.join('')}`; 
  } else {
    msgEl.textcontent = `${maxWrong - wrongLetters.length} lives remain good luck)`;
  }
}  

function renderButton() {
  letterEls.forEach (function(btn) {
    const ltr = btn.textContent;
    if (wrongLetters.includes(ltr)) {
      btn.className = 'wrong';
    } else if (guessWord.includes(ltr)) { 
      btn.className = 'correct';
    } else {
      btn.className = '';
    }
  });
  homeButton.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleChoice(evt) {
  const letter = evt.target.textContent;
  if (secretWord.includes(letter)) {
    secretWord.forEach(function(char, idx) {
    if (char === letter) guessWord[idx] = letter;
    });
  } else {
    wrongLetters.push(letter)
  }
    gameStatus = getGameStatus();
    render();
} 

function getGameStatus() {
  if (!guessWord.includes('_')) return 'W';
  if (wrongLetters.length > maxWrong) return 'L';
  return null;
}