const outputTextEl = document.getElementById('output-text');
const winLossTrackerEl = document.getElementById('win-loss-tracker');

export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
}

export function disableButtonAndInput(element1, element2) {
    element1.disabled = true;
    element2.disabled = true;
}

export function displayTooLowMessage(){
    outputTextEl.textContent = 'Your guess was too low!';
}

export function displayTooHighMessage(){
    outputTextEl.textContent = 'Your guess was too high!';
}

export function displayWinMessage(){
    outputTextEl.textContent = 'You guessed right! Good job!';
}

export function displayLoseMessage(){
    outputTextEl.textContent = 'You\'re all out of guesses. Hit reset to try again!';
}

export function displayResetMessage(){
    outputTextEl.textContent = 'Okay, lets try again!';
}

export function updateWinLossTotalGuessCounter(winState, loseState, guessState){
    winLossTrackerEl.textContent = `Number of (Wins : Losses : Total Guesses):  ${winState} : ${loseState} : ${guessState}`;
}