// Scraping data that you load
//---------------------------------------

const cheerio = require('cheerio');

$ = cheerio.load(
  '<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="reds"><li class="apple">Gala</li><li class="apple">Braeburn</li><li class="tomato">Tomato</li></ul>');

// All the text from the elements with a class of `apple`
console.log($('.apple').text());

console.log("-------------");

// This will return just the text that is inside the element with the class of apple only within the context of the element with the fruits id.
console.log($('.apple', '#fruits').text());

console.log("-------------");

// push all of the text with the class fruit into an array
const fruits = [];

$('.apple').each(function (i, elem) {
  fruits.push($(this).text());
});

console.log(fruits);
console.log("-------------");

//---------------------------------------
// Scraping data from a website
//---------------------------------------

// Import the node package
const cheerio = require('cheerio');
const request = require('request');
const articleInfo = [];
//
// request('https://twitter.com/?lang=en', (err, res, body) => {

  request('https://twitter.com/nytimes?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', (err, res, body) => {
//   // Scrape as long as there's no error and the response has a status code of 200
    if(!err && res.statusCode == 200){
      // load the body of the repsonse into cheerio so that we can parse it. Cheerio documentation likes to have the document loaded into the `$` variable.
      const $ = cheerio.load(body);
      const articleObj = {};
      const articleInfo = [];

      // console.log($('.AppContent').text());

      console.log("-------------");

      // $('.Streams-momentsModules').each(function(i, elem) {
      //   articleObj.title = $(this).text();
      // });

      // Twitter's Home Page
      // $('a, .MomentCapsuleSummary-title u-textUserColorHover js-default-link js-nav u-dir').each(function(i, elem){
      //   articleObj.url = $(this).attr('href');
      //   articleObj.title = $(this).attr('title');
      //   articleInfo.push(articleObj);
      // });
      //
      // console.log(articleInfo);




      //  you can set the selector AND context for where the selector should be used.
      // $('.article', '.lt-col').each(function (){
      //   articleObj.headline = $(this).text();
      //   articleObj.url = $(this).attr('href');
      //   articleInfo.push(articleObj);
      // });
      // console.log(articleInfo);


      // Twitter NYTIMES
      console.log($('.u-block', '.js-tweet-text-container').attr('href'));

    }
  }
);
