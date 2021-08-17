export function compareNumbers(guess, correctNumber) {
    console.log(guess, correctNumber);
    if (guess === correctNumber) return 0;
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
}

export function disableButtonAndInput(element1, element2) {
    //Disable guessButtonEl and userInputEl
    element1.disabled = true;
    element2.disabled = true;
}

