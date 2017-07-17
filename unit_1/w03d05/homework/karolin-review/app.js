//document ready
$(()=>{

  //grabbing elements no carrots / carats /carets / ¯\_(ツ)_/¯
  const $input = $('input');
  const $button = $('button');
  //when we click the button
  $button.on ('click' , ()=>{
    //get input value
    let letter=  $input.val();


    //NOT THE FUNCTION WE WANT TO CALL FOR GAMEPLAY
    //Example of how to get jQuery/stuff from the DOM to interplay with js logic
    let newLetterjQuery = new Letter ( letter )
    console.log ( newLetterjQuery );
  })

  //create element  MUST USE carrots / carats /carets / ¯\_(ツ)_/¯
  // const $newButton $('<button>');


  // words array
const words = ["hello" ,"howdy", "aloha", "greetings"];

//choose a random word from the array
const chooseWord = () => {
  const word = words[Math.floor(Math.random()*words.length)];
  return word;
}

//make letter objects
class Letter {
  constructor ( value ){
    this.value = value;
    this.hidden = true;
  }
  show(){
    this.hidden = false;
  }
  display(){
    if (this.hidden){
      return '_';
    } else {
      return this.value;
    }
  }

}

//make word objects
class Word {
  constructor ( ){
    this.letters = [];
  }
  getLetters ( chosenWord ){
    // console.log( chosenWord );
    const letterArray = chosenWord.split('').map ( ( l ) => {
      const letterObj = new Letter ( l );
      return letterObj;
    });
    this.letters = letterArray;
  }
  render (){
    //concatenate string of guessed and unguessed letterObj
    let expression = "";
    this.letters.forEach ( ( l ) => {
      if ( l.hidden ){
        expression += '_';
      } else {
        expression += l.value;
      }
    });
    //eventually change this from console logging to appearing in the DOM
    console.log( expression )
  }
}

// these are the steps to start a game, they could be wrapped in a start game function and adjusted as the game is built out
chooseWord();
// let testLetter = new Letter ('w');
// console.log(testLetter);
let play = new Word();
let word = chooseWord();
play.getLetters( word );
play.render();
console.log('**********');
play.letters[0].show();
play.render();

});
