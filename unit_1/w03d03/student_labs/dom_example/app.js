console.log("loaded!");

const body = document.querySelector('body');

const container = document.querySelector('#container');

console.log(container);

const secondImg = document.querySelector('#second-img');

console.log(secondImg);

const infoElements =
document.querySelectorAll('.info');

console.log(infoElements);

const firstP =
document.querySelector('p');
firstP.innerText = 'Jamboree sandwich at the Jambo-ree';


firstP.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'

console.log(firstP);

const newElement =  document.createElement('div');
console.log(newElement);

const firstSection = document.querySelector('section');

const someP = document.createElement('p');
firstSection.appendChild(someP);

console.log(firstSection);

const newImg = document.createElement('img');
newImg.src = "https://static1.squarespace.com/static/563903b0e4b0c30c71cf516a/t/563921e5e4b0128bf41143b0/1446584814406/?format=750w";

body.appendChild(newImg);

const newSection =
