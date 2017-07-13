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

  const $storage = $('<ul>');
  $container.append($storage);
  $storage.attr('value', 'trunk');

  const $butterBeer = $('<li>');
  $butterBeer.text('Butter Beer');
  $storage.append($butterBeer);

  const $invisibilityCloak = $('<li>');
  $invisibilityCloak.text('invisibility cloak')
  $invisibilityCloak.addClass('secret');
  $storage.append($invisibilityCloak);

  const $magicMap = $('<li>');
  $magicMap.text("Marauder's Map")
  $magicMap.addClass('secret');
  $storage.append($magicMap);

  const $timeTurner = $('<li>');
  $timeTurner.text("time turner")
  $timeTurner.addClass('secret');
  $storage.append($timeTurner);

  const $leash = $('<li>');
  $leash.text('leash');
  $leash.addClass('pet');
  $storage.append($leash)

  const $jellyBeans = $('<li>');
  $jellyBeans.text("Bertie Bott's Every Flavor Jelly Beans");
  $storage.append($jellyBeans);


});
