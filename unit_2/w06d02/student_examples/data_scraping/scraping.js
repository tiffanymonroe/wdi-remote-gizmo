// const cheerio = require('cheerio');
//
//
// //load html
//
// $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="reds"><li class="apple">Gala</li><li class="apple">Braeburn</li><li class="tomato">Tomato</li></ul>');
//
// // console.log($('.apple').text());
// // console.log($('.orange', '#fruits').text());
//
//
// fruits = [];
// $('.apple').each(function(i, elem) {
//   fruits.push($(this).text());
// })
//
// console.log(fruits);


const cheerio = require("cheerio");
const request = require("request");

//http don't include the last / or it won't run
request('https://en.wikipedia.org/wiki/Rick_Astley', (err, res, body) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(body);


    console.log($('#toc').text());
  }
})
