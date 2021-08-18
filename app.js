// import functions and grab DOM elements
import { compareNumbers, disableButtonAndInput, displayTooLowMessage, updateWinLossTotalGuessCounter } from './utils.js';
import { displayTooHighMessage, displayWinMessage, displayLoseMessage, displayResetMessage } from './utils.js';

const winLossTrackerEl = document.getElementById('win-loss-tracker');
const outputTextEl = document.getElementById('output-text');
const userInputEl = document.getElementById('input');
const guessButtonEl = document.getElementById('guess-button');
const remainingTriesEl = document.getElementById('remaining-tries');
const resetButtonEl = document.getElementById('reset-button');
// console.log(userInputEl, guessButtonEl, remainingTriesEl, winLossTrackerEl, resetButtonEl);


// initialize global state
let correctAnswer = generateRanNum();
let numberOfWins = 0;
let numberOfLosses = 0;
let remainingTries = 3;
let totalGuessCounter = 0;


//STATE MANAGEMENT FUNCTIONS
function generateRanNum(){
  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * 20) + 1;
}

function decrimentAndDisplayRemainingTries(){
    remainingTries--;
    remainingTriesEl.textContent = `Remaining Tries: ${remainingTries}`;
}


//GUESS-BUTTON EVENT HANDLING
guessButtonEl.addEventListener('click', () => {
    let userGuess = Number(userInputEl.value);
    let highOrLow = compareNumbers(userGuess, correctAnswer);

    totalGuessCounter++;
    updateWinLossTotalGuessCounter(winLossTrackerEl, numberOfWins, numberOfLosses, totalGuessCounter);

    decrimentAndDisplayRemainingTries();
    
    if (highOrLow === 0){
        disableButtonAndInput(guessButtonEl, userInputEl);
        displayWinMessage(outputTextEl);
        numberOfWins++;
        updateWinLossTotalGuessCounter(winLossTrackerEl, numberOfWins, numberOfLosses, totalGuessCounter);
        resetButtonEl.style.display = 'block';
    }

    if (highOrLow === 1){
        displayTooHighMessage(outputTextEl);
    }
  
    if (highOrLow === -1){
        displayTooLowMessage(outputTextEl);
    }

    if (remainingTries === 0) {
        disableButtonAndInput(guessButtonEl, userInputEl);
        displayLoseMessage(outputTextEl, correctAnswer);
        numberOfLosses++;
        updateWinLossTotalGuessCounter(winLossTrackerEl, numberOfWins, numberOfLosses, totalGuessCounter);
        resetButtonEl.style.display = 'block';
    }
});


//RESET-BUTTON EVENT HANDLING
resetButtonEl.addEventListener('click', () =>{
    resetButtonEl.style.display = 'none';
    guessButtonEl.disabled = false;
    userInputEl.disabled = false;
    remainingTries = 3;
    remainingTriesEl.textContent = `Remaining Tries: ${remainingTries}`;
    displayResetMessage(outputTextEl);
});
