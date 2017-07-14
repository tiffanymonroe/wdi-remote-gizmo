//Homework Solutions Dylan Willaims, WDIR-Hopper

$( () => {

  // YEAR 1
  const $container = $('#container');
  const $h1 = $('<h1>');
  $h1.text('Hogwarts');
  $('body').append($h1);

  // YEAR 2
  $('<h2>').text('Dylan Williams').appendTo($('body'));
  $('<h3>').text('Ravenclaw').appendTo($('body'));
  $('<h4>').text('Corvus').addClass('crow').appendTo($('body'));
  $('<h4>').text('Holly Wand with Unicorn Hair Core').appendTo($('body'));

  // YEAR 3
  const $ul = $('<ul>').attr('storage','trunk');
  $('<li>').text('butter beer').appendTo($ul);
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul);
  $('<li>').text('magic map').addClass('secret').appendTo($ul);
  $('<li>').text('time turner').addClass('secret').appendTo($ul);
  $('<li>').text('leash').addClass('crow').appendTo($ul);
  $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans').appendTo($ul);
  $('body').append($ul);

  // YEAR 4
  const $h5 = $('<h5>').text('Spring 2017');
  const $table = $('<table>');
  const $thead = $('<thead>');
  $('<th>').text('Day').appendTo($thead);
  $('<th>').text('Classes').appendTo($thead);
  $table.append($thead);
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));
  $('body').append($h5).append($table);

  // YEAR 5

  $('h4').eq(1).remove();
  $('li').eq(0).remove();
  $('h4').after($('<h4>').text('Rosewood Wand with Warg Hair Core').css('color','crimson').addClass('wand'));
  $('h4.crow').appendTo($('body'));
  $('h4').eq(0).before($('h4.crow'));

  // YEAR 6

  $('.secret').hide('slow').delay(2000).show('slow');
  $('li.crow').addClass('cabbage');
  $('li.crow').removeClass('cabbage');

  // YEAR 7

  $('h5').text('Fall 2017');
  $('ul').prepend($('<li>').text('Butter beer'));
  $('ul').attr('storage','chest');

});
