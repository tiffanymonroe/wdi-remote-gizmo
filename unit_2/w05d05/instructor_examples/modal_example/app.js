// Grabbing About the Game button
var $openBtn = $('#openModal');

// Grabbing modal element
var $modal = $('#modal');

// Grabbing close button
var $closeBtn = $('#close');

// Event handler to open the modal
var openModal = function(){
  console.log("open clicked");
  $modal.css('display', 'block');
}

// Event handler to close the modal
var closeModal = function(){
  console.log("close clicked");
  $modal.css('display', 'none');
}

//Add event listener to About the Game button
$openBtn.on('click', openModal);

//Add event listener to Close button
$closeBtn.on('click', closeModal);

//Make a setTimeout for the modal to automatically pop-up after 5 seconds.
// setTimeout(openModal, 5000);
