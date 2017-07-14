console.log('js');

const imageURLs = [
  'http://www.smailikai.com/avatar/skelet/avatar_4348.gif',
  'https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464',
  'http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/d/d8/AT_Icons_100x100_Lumpy.jpg/revision/latest?cb=20120510182508',
  'http://www.avatarsdb.com/avatars/bart_skateboard.gif'
];

$(() => {

  const $btn = $('<div>').addClass('square');
  $btn.text('ADD RANDOM IMAGE');
  $('body').append($btn);

  $btn.on('click', () => {
    console.log('clicked');
    const randIndex = Math.floor(Math.random() * imageURLs.length);
    const $img = $('<img>').attr('src', imageURLs[randIndex]);
    $img.addClass('square');
    $('body').append($img);
  });

});
