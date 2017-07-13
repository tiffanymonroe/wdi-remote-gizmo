console.log('time to quilt!');

$(()=>{

  const generateQuilt = (numOfSquares) => {
    for (let i=1; i <= numOfSquares; i++){
      console.log(i);
      const $square = $('<div>').addClass('square');
      $square.css('background', 'papayawhip');
      $('body').append($square);
    }
  }

  generateQuilt(300);

});
