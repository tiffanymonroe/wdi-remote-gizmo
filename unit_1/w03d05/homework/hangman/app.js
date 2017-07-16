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

const Letter = {
  constructor(value, hidden){
    this.value = value;
    this.hidden = true;
  },
  show(){
    return this.hidden = false;
  },
  display(){
    if (this.hidden === true){
      return "_"
    }
    else
    return chooseWord.charAt(chooseWord[i]).val
  },
  test(letter){
    for (let i=0; i < chooseWord.length; i++)
    if (letter === chooseWord().charAt(chooseWord()[i]).val){
      show();
    }
    else {
      console.log("this letter doesn't match any in the word");
    }
  }
}

console.log(Letter.hidden);

const startGame = () => {
  game.guesses = 10,
  guessedLetters = [],
  chooseWord();
}

startGame();

Letter.test('x');

$('#word').append(chooseWord());


//Event listeners

$('input').on('keypress', ()=> {
  console.log('the key had been pressed');
  $('button').on('click', ()=>{
    let letter = $('input').val();
    console.log(letter);
  })
});



}); //end window.onload
