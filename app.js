// import functions and grab DOM elements
const userInputEl = document.getElementById('input');
const guessButtonEl = document.getElementById('guess-button');
const remainingTriesEl = document.getElementById('remaining-tries');
const outputTextEl = document.getElementById('output-text');
// console.log(userInputEl, guessButtonEl, remainingTriesEl, outputTextEl);
// initialize global state
// set event listeners 
let correctAnswer = generateRanNum();
let numberOfWins = 0;
let numberOfLosses = 0;


function generateRanNum(){
  let correctAnswer = Math.floor(Math.random() * 21);
  // console.log(correctAnswer);
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
