## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup
 - `<p>` to display rules
 - `<input>` to recieve user input
 - `<button>` to begin  read state- set view cycle.
 - 2x `<div>` or `<p>` to display number of tries, wether guess is too high or low and if lose or win.

 ## State
 `let correctAnswer = 0;`
 `let numberOfTries = 0;`
 `let tooHighorLow = 0;`
 `let winOrLose = 0;`

 ## FUNctions
- TDD a `compareNumbers()`:
    - Has two parameters: guess and correctNumber
    - Returns one of the following values:
    - 0 - the numbers are identical
    - -1 - the guessed number is too low
    - 1 - the guessed number is too high
    - Write one test at a time, each test should address one of the three possible outcomes.
    - You can assume valid input, meaning the passed input will always be a number.
        - SUPER STRETCH: Actually test for invalid input. You should throw an error if either parameter is not a number. Consult the QUnit docs for how to test for an exception.

- `ranNumGenerator()`:
    - No parameters.
    - Returns a random number between 0 and 20.

 ## Events 
 - click ->
    - Read user input
    - Compare user input to correct answer.
    - Set view/dom to reflect.
        - If win/loss: 
            - hide elements: numberOfTries, tooHighorLow, and button.
            - display: win or lose to dom, reset button.