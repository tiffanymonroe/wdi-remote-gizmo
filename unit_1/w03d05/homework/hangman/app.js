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
for (let i=0; i < chooseWord.length; i++){
  console.log(chooseWord()[i]);
};



//Local scope


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
      $('#word').hide();
      }
    else
    console.log(chooseWord.charAt(chooseWord[i]).val())
  }
}

const Word = {
  letters: [],
  isFound(){},
  test(letter){
    if (letter === chooseWord().charAt(chooseWord()[i]).val){
      show();
    }
    else {
      console.log("this letter doesn't match any in the word");
    }
  },
  render(){}

}

console.log(Letter.hidden);

const startGame = () => {
  guesses = 10,
  guessedLetters = [$('input').val()],
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
    //how do I get letter to the array if push() doesn't work?
  })
});


}); //end window.onload
