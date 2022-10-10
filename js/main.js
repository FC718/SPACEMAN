// --------CONTSTANTS-----------
const winningWords = ["Pluto", "Venus", "Mars", "Across the Universe", "Galaxy"]
const numberOfGuesses = 6;

// Identify and Initialize 
//  -------STATE VARIABLES -------
let secretWord; // Object key of 'P' -> For the players correct answers
let wrongLetters; // Object key of 'P' -> For the players wrong answers
let winner; // String 'p" if player wins. 'l' for lose.
let guessWord; 

// --------STORED/CACHED ELEMENTS-------
  const letterEls = document.querySelectorAll('#letters > button') 
  console.log(letterEls)

  const pGuessWord = document.getElementById('p-guessword')
  console.log(pGuessWord)


// --- EVENT LISTENERS ----
// This is a click event handler for when the user clicks on the letter buttons.
document.querySelector('#letters')
.addEventListener('click', handleChoice)


// Coding our Render Functions
// -------Functions---------
init()
// Initialize all state, then call render();
function init() {
  secretWord = winningWords[Math.floor(Math.random() * winningWords.length )]
  console.log(secretWord)
  
  wrongLetters = []
  
  //  Created a guess word. For dashes to be shown on the DOM
  guessWord = '';
  
  for(let letter of secretWord ) {
    guessWord = guessWord + (letter === ' ' ? ' ' : '_')
  }
  
  winner = '';
  render();
}

  function handleChoice(evt) {
    const letter = evt.target.id
    console.log(evt.target.id)
    if (secretWord.toLowerCase().includes(letter)) {
      let newGuessWord = '' 
      

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
    render()

  }  


function render() {
  // renderSecretWord();
  console.log('hello');
  // renderwrongAnswer();
  pGuessWord.textContent = guessWord
  
}
  



// -------INVOKE INIT------------





// -----INVOKE MAIN RENDER ------