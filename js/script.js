//unordered list where the players guessed letters appear
const guessed = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
//text input where player enters letter
const letterInput = document.querySelector (".letter");
//where messages appear when player guesses
const message = document.querySelector (".message");
const wordInProgress = document.querySelector (".word-in-progress");
const remaining = document.querySelector (".remaining");
const span = document.querySelector (".remaining span");
// play again button
const again = document.querySelector (".play-again");

const word = "magnolia"
const guessedLetters = [];

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
    const guess = letterInput.value;
    console.log(guess);
    message.innerText = "";

   const validatedGuess = playerInput(guess);
   if (validatedGuess) {
    makeGuess (guess);
   }
   letterInput.value = "";

});

const playerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if 
        (input.length > 1) {
            message.innerText = "Please enter only one letter.";
        } else if 
            (!input.match(acceptedLetter)) {
                message.innerText = "Please enter a letter from A to Z.";

            } else {
                return input;
            }
        };

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already tried this letter!"; 
    } else {
        guessedLetters.push(guess);
        showLetters();
        console.log(guessedLetters);
        updateWIP(guessedLetters);
    }
    };

    const showLetters = function () {
        guessed.innerText = "";
        for (let letter of guessedLetters) {
            const li = document.createElement("li");
            li.innerText = letter;
            guessed.append(li);

            
        }

    };

    const updateWIP = function (guessedLetters) {
        const wordUpper = word.toUpperCase();
        const wordArray = wordUpper.split("");
        const reveal = [];
        for (const letter of wordArray) {
            if (guessedLetters.includes(letter)) {
                reveal.push(letter.toUpperCase());
            } else {
                reveal.push("●");
            }

            }
            wordInProgress.innerText = reveal.join("");
            playerWin();

        };

        const playerWin = function () {
            if (word.toUpperCase() === wordInProgress.innerText) { 
                message.classList.add("win");
                message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
            }
        };
    




