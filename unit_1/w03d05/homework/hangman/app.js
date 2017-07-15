// console.log("hello, it's me");
$(()=> {

//Global scope
const words = ["line", "stanza", "meter", "rhyme", "sound"];

const chooseWord = () => {
  const randomIndex = Math.floor(Math.random() * (6 - 0)) + 0;
  return words[randomIndex];
}

// console.log(chooseWord());


//Local scope

const game = {
  guesses: 0,
  guessedLetters: []
}

const startGame = () => {
  game.guesses = 10,
  guessedLetters = [""],
  chooseWord();
}

startGame();

$('#word').append(chooseWord())

}); //end window.onload
