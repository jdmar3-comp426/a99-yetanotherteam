/**
 * Create an array of possible words
 */
var programming_languages = [
    "python",
    "javascript",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "sql"
]

/**
 * Define global variables
 */
let answer = "";
let maxWrong = 6;
let mistakes = 00;
let guessed = [];
let wordStatus = null;
let wins = 0;
let loss = 0;

/**
 * Choosing a random word for the game
 */
function randomWord()
{
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)]; 
}

/**
 * Generate the keyboard buttons
 */
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="keyboard_buttons"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

/**
 * Defines how to handle a guess by the user, either correct or incorrect and 
 * what to do in each of these events
 * @param {} chosenLetter - The letter the user guesses
 */
  function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture();
    }
  }
/**
 * Update the picture according to the number of mistakes made by the user
 */
  function updateHangmanPicture()
  {
      document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';
  }

/**
 * Checks if the current word is equal to the actual,
 * updates total wins and prints message while removing keyboard
 */
  function checkIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
      wins++
      document.getElementById('win_tot').innerHTML = wins;
    }
  }
  
  /**
   * Checks if the current word is NOT equal to the actual and maxWrong has been reached,
   * updates total losses and prints message while removing keyboard
   */
  function checkIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
      loss++;
      document.getElementById('loss_tot').innerHTML = loss;
    }
  }

  /**
   * Updates the number of incorrect attempts on HTML element
   */
  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }

  /**
   * Updates the blanks with the current guessed letters
   */
  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
  }

  /**
   * Starts a new game
   * !!!DOES NOT RESET TOTAL WINS/LOSSES!!!
   */
  function reset()
  {
      mistakes = 0;
      guessed = [];
      document.getElementById('hangmanPic').src = './images/0.png';
      
      randomWord();
      guessedWord();
      updateMistakes();
      generateButtons();
  }
/**
 * Opens the account settings HTML page
 */
  function load_act_settings()
  {
    window.location.href = "./new_game.html";
  }

  //Sets the maximum number of attempts
  document.getElementById('maxWrong').innerHTML = maxWrong;

/**
 * 1. Pick a random word
 * 2. Generate the keyboard
 * 3. Update the blanks based on guesses
 */
randomWord();
generateButtons();
guessedWord();