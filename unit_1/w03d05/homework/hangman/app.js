// console.log("hello, it's me");
$(()=> {

//Global scope
const words = ["line", "stanza", "meter", "rhyme", "sound"];

const chooseWord = () => {
  const randomIndex = Math.floor(Math.random() * (6 - 0)) + 0;
  return words[randomIndex];
}

let guesses = 0;
let guessedLetters = [];


//Local scope


class Letter = {
  constructor(value, hidden){
    this.value = value;
    this.hidden = true;
  },
  show(){
    return this.hidden = false;
  },
  display(){
    if (this.hidden === true){
      chooseWord.charAt().replaceWith('_');
      }
    else Letter.show();
    console.log(chooseWord.charAt().val());
  }
}

class Word = {
  letters: [],
  isFound(){},
  test(letter){
    if (letter === chooseWord().charAt().val()){
      show();
    }
    else {
      console.log("this letter doesn't match any in the word");
    }
  },
  render(){}

}



const startGame = () => {
  guesses = 10,
  chooseWord();
}

startGame();

$('#word').append(chooseWord());



//Event listeners

$('input').on('keypress', ()=> {
  console.log('the key had been pressed');
  $('button').on('click', ()=>{
  let letter = $('input').val();
  guessedLetters.push(letter);
  console.log(guessedLetters);
  })
});
//looks for the user to enter a letter (keypress), pushes value of the letter to the guessedLetters array.





}); //end window.onload
