// console.log("hello, it's me");
$(()=> {

//Global scope
const words = ["line", "stanza", "meter", "rhyme", "sound"];

const chooseWord = () => {
  const randomIndex = Math.floor(Math.random() * (6 - 0)) + 0;
  return words[randomIndex];
}

//Local scope

const game = {
  guessesRemaining: ,
  guessedLetters: ,
  isOver(){

  },
  overMessage:

}

console.log(chooseWord());


}); //end window.onload
