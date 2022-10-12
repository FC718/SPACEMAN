// --------CONTSTANTS-----------
const winningWords = ["Pluto", "Venus", "Mars", "Across the Universe", "Galaxy"]
const numberOfGuesses = 6;
const IMAGES = [ 
  "imgs/spaceman-images/spaceman-0.jpg",
  "imgs/spaceman-images/spaceman-1.jpg",
  "imgs/spaceman-images/spaceman-2.jpg",
  "imgs/spaceman-images/spaceman-3.jpg",
  "imgs/spaceman-images/spaceman-4.jpg",
  "imgs/spaceman-images/spaceman-5.jpg",
  "imgs/spaceman-images/spaceman-6.jpg",
]


// Identify and Initialize 
//  -------STATE VARIABLES -------
let secretWord; // Object key of 'P' -> For the players correct answers
let wrongLetters; // Object key of 'P' -> For the players wrong answers
let winner; // String 'p" if player wins. 'l' for lose.
let guessWord; 


// selecting HTML
// --------STORED/CACHED ELEMENTS-------

// getting all of the section elements and the children VVVV
  const letterEls = document.querySelectorAll('#letters > button') 
  console.log(letterEls)

  const pGuessWord = document.getElementById('p-guessword')
  console.log(pGuessWord)

  const homeButton = document.getElementsByClassName('homeBtn')
  
// selecting images
const imgEl = document.querySelectorAll('')

  


  // attatching query selector to the section
// --- EVENT LISTENERS ----
// This is a click event handler for when the user clicks on the letter buttons.
document.querySelector('#letters')
.addEventListener('click', handleChoice)
// document.getElementsByClassName('#homebtn', handleNewWord)
// homeButton.addEventListener('click', takeMeHome)


// Coding our Render Functions
// -------Functions---------
init();  
// Initialize all state, then call render();
function init() {
  // array of the winning words
  secretWord = winningWords[Math.floor(Math.random() * winningWords.length )]
  console.log(secretWord) 
  
  wrongLetters = [];
  

  //  Created a guess word. For dashes to be shown on the DOM
  guessWord = '';
  

  // This shows the underscores and if theres no word there itll leave it empty
  for(let letter of secretWord) {
    guessWord = guessWord + (letter === ' ' ? ' ' : '_')
  }
  
  winner = '';
  render();
}


  // I have my handles. Where I win or lose.
  function handleChoice(evt) {
    const letter = evt.target.id
    console.log(evt.target.id)
    if (secretWord.toLowerCase().includes(letter)) {
      let newGuessWord = ''; 
      for (let i = 0; i < secretWord.length ; i++) {
        if (secretWord.toLowerCase().charAt(i) === letter) {
          
          newGuessWord = newGuessWord + letter 
        } 
        else {
          newGuessWord = newGuessWord + guessWord.charAt(i)
        } 
      }
      guessWord = newGuessWord
      console.log(newGuessWord)
    }
    render();

  }  
      //  Also trying to figure out how to show how many remaining letters / chances you get
      // TRYING TO FIGURE OUT HOW TO RENDER THIS MESSAGE WHEN YOU CHOOSE THE CORRECT BTN
      function renderMessage() {

        if(gameStatus === 'W') {
          messageChannel.textContent = 'Congrats!';
          
        } else if (gameStatus === 'L') {
          messageChannel.innerText = `Youre out in space! The answer was ${randomWord.join()}` 
  
        } else 
          livesEl.textcontent = `${maxWrong - wrongGuesses.length} lives remain good luck)`
      }
      

      


      function renderButton() {
        letterButton.forEach(function(btn) {
          const ltr = btn.textContent;
          // if wrongGuesses includes our letter add class name of wrong 
        }
  

      


// function render() {
//   // renderSecretWord();
//   // console.log('hello');
//   // renderwrongAnswer();
//   pGuessWord.textContent = guessWord;
// }
  



// -------INVOKE INIT------------





// -----INVOKE MAIN RENDER -----