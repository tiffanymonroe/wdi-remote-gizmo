// const body = document.querySelector('body');
//
// const container = document.querySelector('#container');
//
// console.log(container);
//
// const secondImg = document.querySelector('#second-img');
//
// console.log(secondImg);
//
// const thirdImg =
// document.querySelector('#third-img');
//
// console.log(thirdImg);


const newDiv = $('<div>This is a new div.</div>');
const body = $('body');
body.append(newDiv);

const newP = $('<p class="test class"></p>');
newDiv.append(newP);

newDiv.css('color', 'red');
newP.attr('id', 'test-id');
