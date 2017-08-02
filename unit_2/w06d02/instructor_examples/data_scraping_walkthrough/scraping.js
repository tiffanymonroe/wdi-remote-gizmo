// const cheerio = require('cheerio');

// Load HTML into Cheerio
// $ = cheerio.load(
//   '<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="reds"><li class="apple">Gala</li><li class="apple">Braeburn</li><li class="tomato">Tomato</li></ul>');

// All fruit with the class of apple
// console.log($('.apple').text());

// All fruit with the class of orange
// console.log($('.orange').text());

// all apples in the ul with an id of 'red'
// console.log($('.apple', '#reds').text());

// All of the elements with a class of apple and push it into an array
// fruits = [];

// $('.apple').each(function(i, elem){
//   fruits.push($(this).text());
// })
//
// console.log(fruits);

//---------------------------------------
// Scraping data from a website
//---------------------------------------
const cheerio = require("cheerio");
const request = require("request");

request('https://en.wikipedia.org/wiki/Rick_Astley', (err, res, body) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(body);

    const contentObject = {};
    const liArray = [];

    $('li', '#toc').each(function(i, elem){
      // contentObject.title = ($(this).text());
      // liArray.push(contentObject);
      // liArray.push($(this).text());
    })


    console.log(liArray);
  }
  // console.log(err);
})
