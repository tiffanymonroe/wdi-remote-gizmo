console.log('app.js');

// window onload: waits for all assets to have loaded
$(() => {
  console.log('the window has loaded!');

  // grabs the $button
  const $button = $('#click-me');

  //grabs the message box
  const $messageBox = $('#message-box');

  // grabs the mousemove box
  const $mouseMoveBox = $('#mouse-move');

  //waits for the $button to be clicked
  $button.on('click', () => {
    const $p = $('<p>');
    $p.text("I HAVE APPEARED!!!!!!!!!!!");
    $messageBox.append($p);
  });

  // waits for a mouseover on the message box
  $messageBox.on('mouseover', (event) => {
    $messageBox.addClass('message-box-blue');
  });

  // waits for a mouseout on the message box
  $messageBox.on('mouseout', (event) => {
    $messageBox.removeClass('message-box-blue');
  });

  // waits for the mouse to move in the window
  $('body').on('mousemove', () => {
    const text = document.createTextNode("<:3)~    . ");
    $mouseMoveBox.append(text);
  });

});
// end window.onload

