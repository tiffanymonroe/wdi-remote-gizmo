$(()=> {
console.log('tic tac toe');


// $randomSquare = Math.floor(Math.random() * 10 - 1) + 1;

const $board = $('#board');

let $xSquares = true;

// const altSquare = ()=>{
//   if ($xSquares === true) {
//     $($square).off('click', (e)=>{
//         let $xSquares = false;
//       })
//   else if ($xSquares === false) {
//     $($square).on('click', (e)=>{
//       console.log('the square was clicked');
//         $(e.currentTarget).text("O")
//         let $xSquares = true;
//     }
//   }
// }



for (let i=1; i < 10; i++) {
  const $square = $('<div/>').addClass('square');
  console.log($square.val());
  $board.append($square)
  $($square).on('click', (e)=>{
    console.log('the square was clicked');
      $(e.currentTarget).text("X")
    })
    // altSquare();
  }


//      event listeners

$('button').on('click', (e)=>{
  console.log('the button was clicked');
  $('.square').text('');
})


}) //end window.onload
