// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {

  const $container = $('div');
  $container.attr('id', 'container')
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
  $pet.text('Pet: Nigel, Owl')
  $container.append($pet);

  const $wand = $('<h4>');
  $wand.text('Wand: Hornbeam with Dragon Heartstring Core');
  $container.append($wand);


// ************** storage container **********

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

// ***********class schedule**************


  const $schedule = $('<h5>');
  $schedule.text('Spring 2017');
  $container.append($schedule);

  const $table = $('<table>');
  $container.append($table);

  const $thead = $('<thead>');
  $table.append($thead);

  const $tr = $('<tr>');
  $thead.append($tr);

  const $day = $('<th>');
  $day.text('Day');
  $tr.append($day);

  const $monday = $('<td>');
  $monday.text('Monday');
  $day.append($monday);

  const $tuesday = $('<td>');
  $tuesday.text('Tuesday');
  $day.append($tuesday);

  const $wednesday = $('<td>');
  $wednesday.text('Wednesday');
  $day.append($wednesday);

  const $thursday = $('<td>');
  $thursday.text('Thursday');
  $day.append($thursday);

  const $friday = $('<td>');
  $friday.text('Friday');
  $day.append($friday);

  const $classes = $('<th>');
  $classes.text('Classes');
  $thead.append($classes);

  const $herbology = $('<td>');
  $herbology.text('Herbology');
  $monday.append($herbology);

  const $divination = $('<td>');
  $divination.text('Divination');
  $monday.append($divination);

  const $historyOfMagic = $('<td>');
  $historyOfMagic.text('History of Magic');
  $tuesday.append($historyOfMagic);

  const $charms = $('<td>');
  $charms.text('Charms');
  $tuesday.append($charms);

  const $defense = $('<td>');
  $defense.text('Defense Against the Dark Arts');
  $wednesday.append($defense);

  const $potions = $('<td>');
  $potions.text('Potions');
  $wednesday.append($potions);

  const $transfiguration = $('<td>');
  $transfiguration.text('Transfiguration');
  $thursday.append($transfiguration);

  const $magicalCreatures = $('<td>');
  $magicalCreatures.text('Care of Magical Creatures');
  $friday.append($magicalCreatures);




});
