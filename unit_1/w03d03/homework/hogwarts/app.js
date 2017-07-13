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

  const $name = $('<h2>');
  $name.text('Tiffany');
  $container.append($name);

  const $house = $('<h3>');
  $house.text('House: Hufflepuff');
  $container.append($house);

  const $pet = $('<h4>');
  $pet.addClass('pet');
  $pet.text('Pet: Tink, Dog')
  $container.append($pet);

  const $wand = $('<h4>');
  $wand.text('Wand: Hornbeam with Dragon Heartstring Core');
  $container.append($wand);

});
