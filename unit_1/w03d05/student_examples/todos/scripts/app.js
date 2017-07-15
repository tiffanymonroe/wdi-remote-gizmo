$(() => {

  const createToDo = (todoText) => {
    const $div = $('<div>').addClass('todos');
    const $h5 = $('<h5>');
    $h5.text(todoText);
    const $button = $('<button>').text('complete');
    $div.append($h5);
    $div.append($button);
    $("#col-1").append($div);
  }

  $('button').on('click', (e)=> {
    const $inputVal = $('input').val();
    createToDo($inputVal);
    console.log('the button was clicked');

    $('button').on('click', (e)=> {
    const $currentDiv = $(e.currentTarget).parent().detach();
    $("#col-2").append($currentDiv);
    console.log($currentDiv);
    $(e.currentTarget).text('delete');
    $(e.currentTarget).off('click').on('click', (e)=>{
    $currentDiv.remove();
    })
    })
  })







});
