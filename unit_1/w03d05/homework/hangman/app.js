// console.log("hello, it's me");
$(()=> {

//Global scope
const words = ["line", "stanza", "meter", "rhyme", "sound"];

const chooseWord = () => {
  const randomIndex = Math.floor(Math.random() * (6 - 0)) + 0;
  return words[randomIndex];
}



//Local scope

// const game = {
//   guessesRemaining: 0,
//   guessedLetters: [],
//   isOver(){
//
//   },
//   overMessage:
//
// }

// const Letter = {
//   constructor(value, hidden) {
//     this.value = "";
//     this.hidden = true;
//   }
//
//   show(){
//     this.hidden = false;
//   }
//   display(){
//     if (this.hidden = false){
//       return
//     }
//     else return "_"
//   }
// }

const Word = {
  // constructor(getLetters, letters){
  //   this.getLetters = getLetters;
  //   this.letters = letters;
  // },
  getLetters(newWord){
    letters = newWord.split().push()
    // letters.push();
  }
}





}); //end window.onload
