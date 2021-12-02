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

let answer = "";
let maxWrong = 6;
let mistakes = 00;
let guessed = [];
let wordStatus = null;
let wins = 0;
let loss = 0;

function randomWord()
{
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)]; 
}

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

  function updateHangmanPicture()
  {
      document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';
  }

  function checkIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
      wins++
      document.getElementById('win_tot').innerHTML = wins;
    }
  }
  
  function checkIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
      loss++;
      document.getElementById('loss_tot').innerHTML = loss;
    }
  }

  
  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }

  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
  }

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

  function load_act_settings()
  {
    window.location.href = "./new_game.html";
  }


  document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();