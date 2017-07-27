
<<<<<<< HEAD
$(() => {

=======
// objective - click on as many blue squares as possible during allotted time


// When the user clicks begin the timer should start,
// and the squares should populate with a random color

// When the use clicks on a color the color should disapear,
// and score should be added or subtracted

// When the round is over the scores round and
// time should be updated and the user
// should be able to start again with increased difficulty.



$(() => {

  let score = 0;
  let time  = 5;
  let round = 1;
  let name = '';

  $('#modalButton').on('click', (e) => {
     name = $('input').val()
     console.log(name)
     // e.currentTarget is the button
     $(e.currentTarget).parent().css('display', 'none');

     showWelcomeMessage();
  })

  const showWelcomeMessage = () => {
    // create a div or span to put our welcome message in
    const $messageDiv = $('<div/>');
    $messageDiv.text('Welcome to poke a square ' + name + '!');

    $('header').append($messageDiv)

  }

  const createSquares = (numOfSquares) => {
    for (let i = 0; i < numOfSquares; i++){
     const square = $('<div/>').on('click', (e) => {
        // our string to pass to checkValidPoke
        const color = $(e.currentTarget).css('background-color');
        checkValidPoke(color)
                // change the opacity to 0 to make it disapear
        $(e.currentTarget).css('opacity', 0);

     });
      applyRandomColor(square);
     $('.squares').append(square);
    }

  }

  const applyRandomColor = (square) => {
    // one of three options red, blue, or green
    const randNum = Math.floor(Math.random() * 3) + 1;

    if(randNum === 1){
      square.css('background-color', 'red');
    } else if ( randNum === 2){
      square.css('background-color', 'blue');
    } else {
       square.css('background-color', 'green');
    }
  }

  const checkValidPoke = (colorOfSquare) => {

    const colors = colorOfSquare.substring(4, colorOfSquare.length - 1).split(" ");
    // returns array ["0", "0", "255"]
    // all we care about is the blue value
    const blue = parseInt(colors[2])

    if(blue === 255){
      score++
      updateScore();
      console.log(score, 'winning point')
    } else {
      score--
      updateScore();
      console.log(score, ' losing point')
    }

  }

  const updateScore = () => {
     $('h1').text('scoreboard: ' + score);
  }


  const setTimer = () => {

    const timer = setInterval(() => {
      // where we want to decrease the time and update the timer on the dom
      time--
      if(time === 0){
        clearInterval(timer)
        round++
      }

      $('#timer').text('timer: ' + time + "s")
    }, 1000)


  }

  //update the round and specify the difficulty
  const setUpRound = () => {
    $('.squares').empty();

    $('#round').text('round: ' + round);

    if(round === 1){
      createSquares(50);
      time = 30;
    } else if( round === 2){
      createSquares(100);
      time = 20;
    } else if (round === 3){
      createSquares(150);
      time = 20;
    } else {
      createSquares(250);
      time = 10;
    }


  }



  $('button').on('click', (e) => {
    console.log('this is working')

    setUpRound();
    setTimer();


  })



>>>>>>> c9aea904efde0f98292097c6e8097a246e370622


})
