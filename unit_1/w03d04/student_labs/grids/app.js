$(()=>{

  const $generateSquare = (numOfSquares)=>{
    for(let i=1; i <= numOfSquares; i++){
      console.log(i);
      const $square = $('<div>').addClass('square');
      $('#container').append($square);
      if (i % 2 === 0) {
        $square.attr('id', 'red');
      }
        else $square.attr('id', 'black');
      }
    }

  $generateSquare(64);

});
