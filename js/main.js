  // --------CONTSTANTS-----------
  const winningWords = ["pluto", "venus", "mars", "across the universe", "galaxy"]
  const maxWrong = 6;
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
  let gameStatus; // game status will = 'W' for a Win and 'L' for a loss. and null for plain.


  // selecting HTML
  // --------STORED/CACHED ELEMENTS-------

  // getting all of the section elements and the children VVVV
  // ... the dots are called a spreaad operator. It selects everything in the array
  const letterEls = [...document.querySelectorAll('#section > button')] 
    console.log(letterEls)

  const pGuessWord = document.getElementById('p-guessword')
    console.log(pGuessWord)

  const homeButton = document.getElementById('homebtn')
  const msgEl = document.getElementById('p-message')
  console.log(msgEl)
  // selecting images
  const imgEl = document.querySelector('img')

    


    // attatching query selector to the section
  // --- EVENT LISTENERS ----
  // This is a click event handler for when the user clicks on the letter buttons.
  document.querySelector('section')
  .addEventListener('click', handleChoice)
  homeButton.addEventListener('click', init)
  // document.getElementsByClassName('#homebtn', handleNewWord)
  // homeButton.addEventListener('click', takeMeHome)


  // Coding our Render Functions
  // -------Functions---------
  init();  
  // Initialize all state, then call render();

  function init() {
    // array of the wrong words
    wrongLetters = [];
    // this is just created the random word for you to guess.
    const maxIdx = Math.floor(Math.random() * winningWords.length )
    console.log(maxIdx) 
    //this array is being done by .split which is seperating the words ['G','A',]
    secretWord = winningWords[maxIdx].toUpperCase('').split('')
    // if we have an empty letter leave it alone, if it has a letter it is being replated by an undersore.
    guessWord = secretWord.map(ltr => ltr === ' ' ? ' ' : '_' ) 
    gameStatus = null
    render();
  }

  function render() {
    renderMessage()
    imgEl.src = `imgs/spaceman-${wrongLetters.length}.jpg`
    pGuessWord.textContent = guessWord.join(' ')
    renderButton()
  }

  function renderMessage() {

    if(gameStatus === 'W') {
      msgEl.textContent = 'Winner,Winner, Chicken Dinner';
      
    } else if (gameStatus === 'L') {
      msgEl.innerText = `Youre out in space! The answer was ${secretWord.join('')}` 

    } else 
      msgEl.textcontent = `${maxWrong - wrongLetters.length} lives remain good luck)`
  }  

  function renderButton() {
        letterEls.forEach (function(btn) {
          const ltr = btn.textContent;
          console.log(ltr)
          if (wrongLetters.includes(ltr)) {
            btn.className = 'wrong'
          } else if (guessWord.includes(ltr)) { 
            btn.className = 'correct'
          } else {
            btn.className = ''
          }
        }) 
        homeButton.style.visibility = gameStatus ? 'visible' : 'hidden'
      }

  function handleChoice(evt) {
      const letter = evt.target.textContent
      console.log(evt.target.textContent)
      if (secretWord.includes(letter)) {
        secretWord.forEach(function(char, idx) {
          if (char === letter) guessWord[idx] = letter;
        })
      } else {
        wrongLetters.push(letter)
      }
      gameStatus = getGameStatus()
      render();
    }  

  function  getGameStatus() {
    if (!guessWord.includes('_')) return 'W';
    if (wrongLetters.length > maxWrong) return 'L';
    return null
  }