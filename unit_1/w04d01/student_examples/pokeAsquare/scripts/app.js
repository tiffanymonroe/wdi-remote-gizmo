$(()=>{

console.log('js connected');

let score = 0;
let time = 30;
let round = 1;

const createSquares = (numberofSquares) => {
  for (let i=0; i < numberofSquares; i++){
    const square = $('<div/>').on('click', (e)=> {
    const color = $(e.currentTarget).css('background-color');
    checkValidPoke(color);
    $(e.currentTarget).css('opacity', 0);
  })
    applyRandomColor(square);
    $('.squares').append(square);
  }
}

const checkValidPoke = (square) => {
  console.log(square, typeof square);
  const colors = square.substring(4, square.length-1).split(" ");
  //the 4 moves it over 4 places by character, to count only the numbers in the string.
  const navy = parseInt(colors[2]);
  console.log(navy);
  //parseInt removes the string and changes into numbers. [2] is the 3rd color in the array
  if (teal === 128) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
}


const applyRandomColor = (square) => {
  const randNum = Math.floor(Math.random() * 3) + 1

  if (randNum === 1) {
    square.css('background-color', 'teal')
  }
  else if (randNum === 2) {
    square.css('background-color', 'navy')
  }
  else square.css('background-color', 'darkmagenta')
}



const updateScore = () => {
  $('#scoreboard').text('scoreboard: ' + score)
}

const setTimer = () => {
  const timer = setInterval(()=> {
    time--
    if(time === 0){
      clearInterval(timer)
      round++;
    }
    $('#timer').text('timer: ' + time + 's')
  }, 1000)
  }

const setUpRound = () => {
  $('.squares').empty();
  $('#round').text('round ' + round)
  if(round === 1){
    createSquares(50);
    time = 30;
  }
  else if (round === 2) {
    createSquares(100);
    time = 20;
  }
  else if (round === 3) {
    createSquares(150);
    timeout = 10;
  }
  else {
    createSquares(250);
    time = 10;
  }
}


//event listener

$('button').on('click', (e)=> {
  console.log('the button was clicked');
  setTimer();
  setUpRound();
})

}); //end window.onload
