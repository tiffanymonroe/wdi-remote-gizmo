
$(() => {
  let score = 0;
  let time = 30;
  let round = 1;


  const createPineapples = (numberOfPineapples) => {
    for (let i = 0; i < numberOfPineapples; i++){
      const pineapple = $('<div id=' + i + '/>').on('click', (e) => {

        const color = $(e.currentTarget).css('background-color')
        checkValidPoke(color)
        $(e.currentTarget).css('opacity', 0);
      })

      applyRandomColor(pineapple);


      $('.squares').append(pineapple)
    }
  }



  const applyRandomColor = (pineapple) => {
    const randNum = Math.floor(Math.random() * 3) + 1

      if(randNum === 1) {
        pineapple.css('background-color', 'red')

      } else if(randNum === 2){
        pineapple.css('background-color', 'blue')

      }
      else {
        pineapple.css('background-color', 'green')

      }
  }

  const checkValidPoke = (square) => {
    console.log(square, typeof square)
    const colors = square.substring(4, square.length-1).split(" ");
    const blue = parseInt(colors[2])

    if(blue === 255){
      console.log('this is passign')
      score++;
      updateScore();
    } else {
      score--;
     updateScore();
    }

  }

  const updateScore = () => {
    $('h1').text('scoreboard: ' + score)
  }



  const setTimer = () => {
    const timer = setInterval(()=>{
      time--
      if(time === 0){
        clearInterval(timer)
        round++;
      }

      updateTime();

    }, 1000)
  }

 const updateTime = () => {
  $('#timer').text('timer: ' + time + "s");
 }


 const setupRound = () => {
    $('.fallingPineapples').empty();
    $('#round').text('round: ' + round)

    if(round === 1){
      createPineapples(50);
      time = 30;
    } else if(round === 2){
      createPineapples(100);
      time = 20;
    } else if(round === 3){
      createPineapples(150);
      time = 10;
    } else {
      createPineapples(250);
      time = 10;
    }

 }




  $('button').on('click', () => {

    setTimer();
    setupRound();

  })



  // createPineapples(250);


})
