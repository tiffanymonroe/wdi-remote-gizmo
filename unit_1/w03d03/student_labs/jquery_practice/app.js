// console.log('sleep alludes me.');

//window.onload = waits for the whole window to load before it runs JS.
$(() => {
  const $body = $('body');
  const $containerDiv = $('<div>');
  ($body).append($containerDiv);
  $containerDiv.attr('id', "top-container");

  const $h1 = $('<h1>');
  $containerDiv.append($h1);
  $h1.html('<h1>Trois coleurs: rouge, blanc, et blue</h1>');

  const $divCouleurOne = $("<div>");
  $divCouleurOne.attr('class', 'couleur');
  $h1.append($divCouleurOne);

  const $divCouleurTwo = $("<div>");
  $divCouleurTwo.attr('class', 'couleur');
  $h1.append($divCouleurTwo);

  const $divCouleurThree = $("<div>");
  $divCouleurThree.attr('class', 'couleur');
  $h1.append($divCouleurThree);

  $divCouleurOne.css({'background-color': 'firebrick', 'height': '200px', 'display': 'inline-block'});

  $divCouleurTwo.css({'background-color': 'ivory', 'height': '200px', 'display': 'inline-block'});

  $divCouleurThree.css({'background-color': 'cornflowerblue', 'height': '200px', 'display': 'inline-block'});

  //////
});
