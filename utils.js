export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
}

export function disableButtonAndInput(element1, element2) {
    element1.disabled = true;
    element2.disabled = true;
}

export function displayTooLowMessage(element){
    element.textContent = 'Your guess was too low!';
}

export function displayTooHighMessage(element){
    element.textContent = 'Your guess was too high!';
}

export function displayWinMessage(element){
    element.textContent = 'You guessed right! Good job!';
}

export function displayLoseMessage(element){
    element.textContent = 'You\'re all out of guesses. Hit reset to try again!';
}

export function displayResetMessage(element){
    element.textContent = 'Okay, lets try again!';
}

export function updateWinLossTotalGuessCounter(element, winState, loseState, guessState){
    element.textContent = `Number of (Wins : Losses : Total Guesses):  ${winState} : ${loseState} : ${guessState}`;
}