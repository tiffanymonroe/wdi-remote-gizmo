![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Data Scraping with Cheerio & Request <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Kristyn Bryan<br>
Course: WDIR-Gizmo<br>
Competencies: Data Scraping with Node <br>
Prerequisites: Node, JavaScript <br>

---

# Morning Exercise
## Data Scraping with Node
 
We scraping is the act of fetching and extracting data from a website or data source. Why might we want to scrape data? Perhaps we want to compare prices from multiple pages at once (think Travelocity or Skiplagged who compare airplane or hotel prices from multiple sites and display it in one place). Or sometimes we may come across data on the web that we want to use, but there's not an API available (the stats on sports players, the schedule for your favorite bands). Today we are going to practice fetching and parsing data by using two Node packages: `request` and `cheerio`.

- [Cheerio Documentation](https://www.npmjs.com/package/cheerio)
- [Request Documentation](https://www.npmjs.com/package/request)

## Setup

1) Navigate to your `student_examples` folder and create a new directory called `data_scraping`.

2) From inside your `data_scraping` folder, make a file called `scraping.js`

2) From inside your `data_scraping` folder, run `npm init`

3) Install the `request` and `cheerio` packages
`npm install cheerio request --save`

4) Open your `data_scraping.js` file.


## Cheerio

[Cheerio](https://www.npmjs.com/package/cheerio) uses jQuery to navigate through the DOM and parse out HTML elements and information for you.

### Example Using Cheerio with HTML

- Require Cheerio

`const cheerio = require('cheerio');
`

- Load the HTML into Cheerio for parsing.

```
$ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="reds"><li class="apple">Gala</li><li class="apple">Braeburn</li><li class="tomato">Tomato</li></ul>');
```

- Use a selector to parse through the data.

This will search the whole document for just the class of `apple`:

```
$('.apple');
//=> Returns all objects with the class of `apple`
```

This will search for the class of apple only within the context of the element with the `fruits` id.

```
$('.apple', '#fruits');
//=> Returns all objects with the class of `apple` that are children of the element with the `fruits` id.
```

This will return just the text that is inside the element with the class of `apple` only within the context of the element with the `fruits` id.

```
$('.apple', '#fruits').text();
//=> Apple
```

We can return attributes as well:

```
$('ul .pear').attr('class')
//=> pear
```

If there are multiple values that will be coming back, we can use the jQuery `.each` method to do something to each value.

```
$('ul').each(function(){
  console.log($(this).attr('id'));
});
//=> fruits
//=> reds
```

Let's load in a web page using Request and parse the data with Cheerio...

## Request
[Request](https://www.npmjs.com/package/request) allows you to make http requests. We can use these requests, in conjunction with Cheerio, to parse data from web pages.

### Example Using Cheerio & Request

Let's scape the news from Google's news page `https://news.google.com`

- Request takes a web address followed by a callback function. The function takes three parameters: `err`, `res`, `body`.

- Let's set a conditional to scrape as long as there's no error and the response has a status code of 200

![request](https://i.imgur.com/VQdnE6J.png)

- Load the body of the response into cheerio so that we can parse it. Cheerio documentation likes to have the document loaded into the `$` variable.

![load the body to cheerio](https://i.imgur.com/csOjeSA.png)

### How we can sort the data

- Now we can parse the data that is coming in using jQuery selectors.

- Open your web page and the developer tools in your browser. Use the tools to figure out which selector may be good to use for parsing.

![browser tools](https://i.imgur.com/gdQBkdr.png)

- To help with parsing and narrow down what is being searched, you can set both the selector and a context. So we can search for the articles that are only within a certain section of the html of the page.

`$('.article', '.lt-col')`

- As we receive data, we have to set up an iterator so that whatever we want to do we do it to each item that comes in from the scraper. There's a handy `.each` method that we can use on our data.

![.each](https://i.imgur.com/wwqVqVH.png)

- Start by logging the data that you want to confirm that you're grabbing the correct items.

![logging](https://i.imgur.com/ANMvk85.png)

### How we can save the data

- Save the data to a variable so that you can use it as you'd like.

![save data](https://i.imgur.com/b5fYE3b.png)

- If you had a database connected, you could store it to your database.

- Since we're getting multiple pieces of data for one item (a title and a url), I've decided to save it as an object and then push the objects into an array.

### Try it for Yourself

1) Find something on the page that you'd like to grab and store (the image, the news story, etc.) and try parsing and storing it on your own.

2) Try this out on another website! Note: all sites are not the same when it comes to parsing. If a site doesn't use attributes in their HTML, it becomes more difficult to parse what you need.


# Hungry for More?

Read through [this article](https://github.com/FrontenderMagazine/web-scraping-with-nodejs/blob/master/eng.md) and practice scraping weather data with Request and Cheerio.

# Is it legal?

For what we are doing with the data, yes! There are certain instances where web scraping is not allowed. This varies site by site. A site may have a "Term of Use" section that says that they do not what you to scrape their data. In this case, you should not scrape and use it for a professional or business site.  

### Some articles about web scraping:
- https://www.quora.com/What-is-the-legality-of-web-scraping
- http://blog.icreon.us/advise/web-scraping-legality
- https://www.forbes.com/sites/ericgoldman/2015/03/24/qvc-cant-stop-web-scraping/#7fc1c5b33ca3
- https://www.bna.com/legal-issues-raised-by-the-use-of-web-crawling-and-scraping-tools-for-analytics-purposes
