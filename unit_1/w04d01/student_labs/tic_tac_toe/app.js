$(()=> {
console.log('tic tac toe');

const $board = $('#board');


for (let i=1; i < 10; i++) {
  const $square = $('<div/>').addClass('square');
  $board.append($square)
  $($square).on('click', (e)=>{
    console.log('the square was clicked');


  })
}

//      event listeners

$('button').on('click', (e)=>{
  console.log('the button was clicked');
})


}) //end window.onload
