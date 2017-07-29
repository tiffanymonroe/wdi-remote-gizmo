$( () => {
  // Grab the About the Game Button
  const $openBtn = $("#openModal");

  // Grab the model element
  const $modal = $("#modal");

  // Grab the close button
  const $closeBtn = $("#close");

  // Event Handler to open the Modal
  const openTheModal = () => {
    $modal.css('display', 'block');
  }

  // Event Handler to close the Modal
  const closeTheModal = () => {
    console.log("close was clicked");
    $modal.css('display', 'none');
  }

  // Add an Event Listener on the Game Button
  $openBtn.on('click', openTheModal);

  // Add an Event Listener on the Close Button
  $closeBtn.on('click', closeTheModal);
});
