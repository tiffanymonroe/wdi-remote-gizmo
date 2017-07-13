// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {

  const $container = $('div');
  console.log($container);

  const $h1 = $('<h1>');
  console.log($h1);

  $h1.text('Hogwarts');
  $container.append($h1);

});
