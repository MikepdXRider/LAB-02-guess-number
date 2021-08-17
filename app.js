// import functions and grab DOM elements
import { compareNumbers, disableButtonAndInput } from "./utils.js";

const userInputEl = document.getElementById('input');
const guessButtonEl = document.getElementById('guess-button');
const remainingTriesEl = document.getElementById('remaining-tries');
const outputTextEl = document.getElementById('output-text');
const winLossTrackerEl = document.getElementById('win-loss-tracker');
const resetButtonEl = document.getElementById('reset-button');
// console.log(userInputEl, guessButtonEl, remainingTriesEl, outputTextEl, winLossTrackerEl, resetButtonEl);



// initialize global state
let correctAnswer = generateRanNum();
let numberOfWins = 0;
let numberOfLosses = 0;
let remainingTries = 3;


function generateRanNum(){
  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * 20) + 1;
}



guessButtonEl.addEventListener('click', () => {
    let userGuess = Number(userInputEl.value);
    let highOrLow = compareNumbers(userGuess, correctAnswer);


    remainingTries--;
    remainingTriesEl.textContent = `Remaining Tries: ${remainingTries}`;
    console.log(userGuess);


    if (highOrLow === 0){
        disableButtonAndInput(guessButtonEl, userInputEl);
        outputTextEl.textContent = 'You guessed right! Good job!';
        numberOfWins++;
        winLossTrackerEl.textContent = `Number of (Wins : Losses):    ${numberOfWins} : ${numberOfLosses}`;
        resetButtonEl.style.display = 'block';
    }


    if (highOrLow === 1){
        outputTextEl.textContent = 'Your guess was too high!';
    }
  

    if (highOrLow === -1){
        outputTextEl.textContent = 'Your guess was too low!';
    }


    if (remainingTries === 0) {
        disableButtonAndInput(guessButtonEl, userInputEl);
        outputTextEl.textContent = 'You\'re all out of guesses. Hit reset to try again!';
        numberOfLosses++;
        winLossTrackerEl.textContent = `Number of (Wins : Losses):    ${numberOfWins} : ${numberOfLosses}`;
        resetButtonEl.style.display = 'block';
    }
});


//RESET-BUTTON FUNCTIONALITY
resetButtonEl.addEventListener('click', () =>{
    resetButtonEl.style.display = 'none';
    guessButtonEl.disabled = false;
    userInputEl.disabled = false;
    remainingTries = 3;
    outputTextEl.textContent = 'Okay, lets try again!';
});


//need function to display number of wins/ number of losses

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
