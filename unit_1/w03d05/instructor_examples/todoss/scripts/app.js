$(() => {

  console.log('window is loaded')

  // Enter a 'todo' item in the input box, and click
   // the 'add' button to have the todo item render in the to-do-list column.

// Click on a button within the to-do-item to
//  move that item over to a 'completed' column.

// Click that same button to remove the todo item from the page.

  const createTodo = (todoText) => {
    // consist of a div to contain the todo
    //1. how do we create the todo div class of todos
    const $div = $('<div/>').addClass('todos');

    // h5 for the actual todo, ex cut lawn
    const $h5 = $('<h5/>');

    $h5.text(todoText);

    // button for completion
    const $button = $('<button/>');
    $button.text('complete');

    // add event listener to our button
    $button.on('click', (e) => {
      // console.log('complete button is working')

      // find the .todos div by using e.currentTarget somehow
      // parent finds the todos div, detach removes it from the dom

      const $currentDiv = $(e.currentTarget).parent().detach();


      // change the button of the text to delete
      $(e.currentTarget).text('delete');

      // right here turn off the click and add a new click that removes the
      // div from the dom
      $(e.currentTarget).off('click').on('click', (e) => {

       // grab the div and remove it
       $(e.currentTarget).parent().remove()


      })


      $('div').on('click', moveThing)

         // moves our current div to column two
      $('#col-2').append($currentDiv);

      // check out detach and move currentDiv and append it


    })








    // now we have to append everthing to the div
    $div.append($h5);
    $div.append($button);
    // finally append the div to the page
    $('#col-1').append($div);
  }

// 1.  add an event listener to our add button
// 2.  lets get the text out of the box

  $('button').on('click', () => {

    const $inputVal = $('input').val();

    createTodo($inputVal);

  })




// turn off our event listener turn it back on with a new function


// $('buttonWithEventListenerAlreadyAddedToIt').off('click').on('click', (e)=>{
//     // e.currentTarget is still the object that we are clicking on
// })


// creating a div and appending to the body in jQuery
// $('body').append('<div/>')

// // grab the body
// const body = document.querySelector('body');
// const div = document.createElement('div');
// body.appendChild(div)
















})
