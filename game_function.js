/**
 * Create an array of possible words
 */
 var word_list = [];

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
let category = "";
let first_flag = 1;

/**
 * Choosing a random word for the game
 */
function randomWord()
{
  if(first_flag === 1)
  {
      setWordList();
      first_flag = 0;
  }
  
  if(word_list.length > 1)
  {
      answer = word_list[Math.floor(Math.random() * word_list.length)];
      console.log("Before " + word_list);
      word_list= word_list.filter(e => e !== answer); 
      console.log("After " + word_list);
  }
  else if(word_list.length == 1)
  {
      answer = word_list[0];
      word_list= word_list.filter(e => e !== answer);
  }
  else
  {
      gameWon();
  }
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
    
    if(word_list.length === 0)
    {
        gameWon();
        document.getElementById("new_game_button").disabled = true;
        document.getElementById('reset_btn').disabled = false;
    }
    document.getElementById('reset_btn').disabled = false;
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
      document.getElementById('reset_btn').disabled = false;
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
      document.getElementById('reset_btn').disabled = true;
      
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


  function setWordList()
  {
    //Set the right category list
    if(category === "car")
    {
      word_list = ["tacoma", "colorado", "bronco", "wrangler", "outback", "altima", "pilot"];
    }
    else if (category === "cities")
    {
      word_list = ["durham", "raleigh", "wilmington", "greensboro", "charlotte", "boone", "apex", "cary"];
    }
    else if (category === "animals")
    {
      word_list = ["cow", "pig", "sheep", "duck", "goose", "horse", "dog", "goat"];
    }
    else
    {
      word_list = ["python", "javascript", "java", "html", "csharp", "json", "sql", "c", "css", "vb"];
    }
  }
  
  function gameWon()
  {
      document.getElementById('wordSpotlight').innerHTML = 'Congradulations! You Won!';
      document.getElementById('keyboard').innerHTML = 'Your a master of' + category;
  }

  //Sets the maximum number of attempts
  document.getElementById('maxWrong').innerHTML = maxWrong;

/**
 * 1. Pick a random word
 * 2. Generate the keyboard
 * 3. Update the blanks based on guesses
 */
 console.log("Start");
 var queryString = location.search.substring(1);
 category = queryString.split('=')[1];
randomWord();
generateButtons();
guessedWord();