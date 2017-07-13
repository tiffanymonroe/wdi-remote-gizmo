console.log('puppers!');
$(()=>{
  const images = [
    'https://d0gl0ver.files.wordpress.com/2009/11/funny-dog-pictures-got-dis.jpg',

    'https://s-media-cache-ak0.pinimg.com/736x/29/4b/65/294b653b88b95dd3bf5c5a592fa0cc25--funny-animals-adorable-animals.jpg',

    'https://s-media-cache-ak0.pinimg.com/736x/88/d3/26/88d326742ca3f5129c8154c20c4e40c7--funny-animals-adorable-animals.jpg',

    'https://s-media-cache-ak0.pinimg.com/736x/93/1a/53/931a531f655ae6e0a1faf9eb5f16e2e3--funny-puppies-funny-dogs.jpg',

    'https://i.ytimg.com/vi/QO-_ZN0xhZI/maxresdefault.jpg',

    'https://s-media-cache-ak0.pinimg.com/originals/a7/23/91/a72391c3711529fc2c0ad9c934e1f01d.png'
  ];

  const addRandomImage = ()=>{
    $randomImage.css('background', 'url("' + images[randomVariable] + '")')
  }

  const $randomImage = $('<div>');
  $('body').append($randomImage);
  $randomImage.addClass('image');
  $randomImage.on('click', addRandomImage);



//randomize
  const randomVariable = Math.floor(Math.random() * 6 - 0) + 0;

});
