//unordered list where the players guessed letters appear
const guessed = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
//text input where player enters letter
const input = document.querySelector (".letter");
//empty paragraph where messages appear when player guesses
const message = document.querySelector (".message");
const wordInProgress = document.querySelector (".word-in-progress");
const remaining = document.querySelector (".remaining");
const span = document.querySelector (".remaining span");
// play again button
const again = document.querySelector (".play-again");

const word = "magnolia"

//display "●" symbol as placeholder for letters in chosen word


const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push("●");
        console.log(letter);
    }

        wordInProgress.innerText = placeholderLetters.join ("");
    
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = input.value;
    console.log(guess);
    input.value = "";
});


