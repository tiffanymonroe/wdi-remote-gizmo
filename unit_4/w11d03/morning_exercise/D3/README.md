# D3

## Part 1 Intro / Familiarize Yourself With D3 Basics

D3 has a lot of similarities to jQuery. Like jQuery, you can select, create, and remove elements on the DOM. You can also chain functions.

The big difference is that D3 is specifically designed to work with data.

Using a slightly modified example from D3's home page, let's familiarize ourselves with D3's syntax.

Open the `d3-intro folder` in atom and open `d3-intro.html` in the browser.There is some boilerplate html and some [fillerama](http://fillerama.io/) lorem ipsum already there for you

Add a link to the D3 CDN right before the closing body tag:

`<script src="https://d3js.org/d3.v4.min.js"></script>`

Then right after it, let's link our own JavaScript File

`<script type="text/javascript" src="d3-intro.js"></script>`

If the files are linked, when you reload the browser you should see an alert.

Delete/comment out the alert.

Let's test that D3 is loading:

![load D3, select all](https://i.imgur.com/gbh2F3h.png)

Expected result: all paragraph text is white


We can select one node:

![select one node](https://i.imgur.com/a5rMvAl.png)

Expected result: body background color is now black

D3 is naturally 'mathy'. You can use Math.random to randomly color the different paragraphs

![use math random on paragraphs to color them](https://i.imgur.com/Twencf7.png)

Let's go ahead and use some data to change the visualization of our paragraphs. We'll use the numbers in the array to determine the size of the text in each paragraph.

![change size of text based on an array of numbers](https://i.imgur.com/R1csFKw.png)

Finally, let's test out a transition

![transition](https://i.imgur.com/ScHEglg.png)

Our end result isn't all that pretty. But we now have a sense of how to work with D3 and now we can move on to the main event! Creating a bar graph!

## Part 2 Visualizing Some Randomly Generated Data as a Bar Graph

We are ready to build a bar graph with our Randomizer Data!

Special Thanks to the book `Interactive Data Visualization for the Web` by Scott Murray - a lot of this code along was built with his book as a guide

### Set up
We have a different folder called `d3-bar-graph` - open that in atom. Inside  you'll see some html boilerplate(`d3-bar-graph.html`), a little CSS(`normalize.css`, `main.css`), a file that will generate data from our randomizer function (`generate-data.js`) and a file for our D3 (`d3-bar-graph.js`).

The D3, css, and two js files are already linked in the html.

We will be building our bar graph in the file `bar-graph.js`

Open `bar-graph.html` and open Chrome developer tools. The input is not functional yet. But if you type `arr` in the Chrome developer console, you should see the sample array from the `d3-bar-graph.js` file.

### Make an SVG Element using D3

**Inside d3-bar-graph.js**

First, let's define our height and width of our SVG element, we will return to these numbers in other functions, so we are going to declare them globally

![height width for svg](https://i.imgur.com/d0x81pN.png)

Next. let's make an SVG and append it to the div with the class of `graph`, as you can see, we are using the global variables for w, h to define the width and height of the svg. We are also chaining our D3 functions, we are indenting them in a way that is should be easy to read.

![append svg](https://i.imgur.com/xN0T4LW.png)

If you have successfully executed your D3 code you will see an SVG element on the page with a gold border.

Next, let's write a function called `makeGraph` , which will pass in a param that we'll call `arr`

![make graph function](https://i.imgur.com/IfBhIrA.png)

## Making the SVG on click


Let's create a click handler that will
- prevent the default action of the submit button (reload the page)
- check if an SVG element exists already, if it does, remove it
- append a new svg element (copy the `svg` code that you wrote, into this function)
- grab the input value from the input field
- run the `collectData` function the amount of times entered (remember: all input from an HTML form is text, so we have to convert it to a string, and let's just round the number as an extra measure to reduce the chances of weird errors)
- call the `makeGraph` function, which for now, will only console.log a message, pass in `arr` - the dummy data we have at the top of this file (we'll swap it out with real data later)
- and let's just empty the input field after the submit

That's a lot! It should look something like this when all the parts are there:

![click function](https://i.imgur.com/P91mt3z.png)


## The following should be written inside the `makeGraph` function which can be executed by clicking the `test it!` button. No need to input a number yet.

### Make rectangles that will become our bars for our bar charts

An unusual thing about D3, is the use of `selectAll` on elements that don't exist yet. When this is used with .data() and .enter() this allows the elements to be created and bound to the data.

Write this inside your `makeGraph` function

![bars first attempt](https://i.imgur.com/UPn0ayr.png)

When we reload our browser and click `test it!` we should see

![all rects on top of each other](https://i.imgur.com/3qXWSN6.png)

Upon inspection with Chrome Dev Tools we see:


![rect elements in dev tools](https://i.imgur.com/AXSJ1Su.png)

So, we have successfully created the correct number of rectangles (1 rectangle per array (`arr`) element), however, they are all stacked on top of each other.

Let's fix that!

## Spread the bars out

- Declare a global variable called `barPadding` and set it to 1 (put it up top near the other global variables of `w` and `h`)
- We have to change our attribute values for x, so that x increases for each data point (bar)
	- in order to do that, instead of setting a value as the second argument of the `x` attribute, we are going to write an anonymous function that calculates a new value.
		- We want to set it to be dynamic so that the bars are evenly spaced whether we have 2 bars or 200.
      - To do that we will divide the width of the svg (`w`)
       by the length of the array `arr`
       - then we will subtract the bar padding (which is is set to 1 right now), so that the bars will not touch, and thus have some padding in between them). This calculation will set an even interval for the start of each bar.
       - The last part is to multiply it by `i` which is some D3 magic that inputs the index of the datum being processed. This will allow us to move each bar out further.

The updated code will look like this:

![spaced out bars code](https://i.imgur.com/wGETowc.png)
This will look like:
![spaced out bars appearance](https://i.imgur.com/p17BcA9.png)


Super! But our bar heights are not representative of our data. Rather than providing a static number, let's use D3 to determine the heights based on our data (the `arr` array values, for now)




## Make bar heights dependent on data

- change the height attribute from 100 to a callback

![height based on datac code](https://i.imgur.com/5ncgyHS.png)

Cool! Now our bars should be representative of our data
![height based on data](https://i.imgur.com/FwfejcZ.png)

Alright! Alright! Alright! Making great progress. But, our bar graph is upside down. Remember that SVG coordinates 0,0 are the upper left. So we have to use a little math to reposition our bars.

## Use a little math to reposition the bars

- change the y value from a static value to be the height of the svg minus the data (d)

![right side up bars code](https://i.imgur.com/YnQLvmM.png)

![right side up bars](https://i.imgur.com/inIlx6w.png)


Things are coming along! But our bar graph looks a little sad, those bars are awful small.
If we take a moment to think about our data, it can be ever changing, depending on what we enter our max bar height can be as little as 1 or as high as 100 or more.


## Make bar heights dynamic, based on the data

First, let's create a variable called `maxHeight` We're going to scale the height of the bars based on the height of our SVG and the maximum value from our data

```
var maxHeight = h/Math.max(...arr);
```
Side note: the `...` is new in ES6 and depending on how it is used is either a spread or rest operator. [More info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

Then we are going to multiply the value of `d` for the `y` attribute by `maxHeight` to create dynamically scalable bars based on the data.

Next, we also must update the height to multiply `d` by the `maxHeight`




![dynamic bar heights code](https://i.imgur.com/3KKBbyk.png)

![dynamic bar heigts](https://i.imgur.com/SnsGwKM.png)

Bonus: Take a moment to add some extra values to `arr`, like 50, 17, etc. You will see that the bars will scale up and down, and they also will adjust their width to fit neatly inside the SVG.


# Colorful bars

D3 is really powerful, and you can use your data to not only control the size, location and shape of your data visualization; you can also change the colors.

We're just going to make the taller bars more blue, for the sake of simplicity, but the possibilities are endless.

We are going to use web colors based on rgb(). RGB stands for red, green and blue. A value of 0 is none of that color (black), and a value of 255 (the max) is the most of the color (or if all of them are 255, then the color is white.

With just a little tinkering of what we've already built we can make the bars a range of blues.

Because we can only have a maximum of 255 we have to set the range, just like we did for the max height of the bars.

Additionally, these numbers MUST be integers, so let's use `Math.round()` to ensure this.

```
 var maxColor = 255/Math.max(...arr);
```

Let's and an attribute of `fill` and make a function to determine how blue the bar will be



![blue bar code](https://i.imgur.com/3gL0CUh.png)

![blue bars](https://i.imgur.com/7qMijTz.png)


## Using our actual data

We have been using a simple array to build our bar graph with the features and behaviors that we want. Now we can incorporate our data rather simply.

Our data is an array of objects. Each object has a student name and the amount of times a student has 'won' (gotten called on in class). The function and original data is in the `generate-data.js` file.

The structure of the generated data looks like the following:

![data structure](https://i.imgur.com/lRhOpXd.png)


#### Use D3 to grab the value from our input field

For this, all we have to do is change the value being passed in to `makeGraph` inside our click handler

![change value being passed into makeGraph](https://i.imgur.com/98DZtuP.png)


Now, ff you click the `Test it!` button, it is going to error in the console. Our data that we are creating with the randomizer is an array of objects, rather than an array of numbers.


![error during refactoring](https://i.imgur.com/ND39iXS.png)

So we are going to have to tweak our code to adjust for this.

First, we have to create a variable called `dataCount` that will grab the values of student wins and put them into an array.

- then we need to update the variables that are selected for max values


![dataCount Code](https://i.imgur.com/Xd3tHFf.png)


## Refactoring your code more

Since our data is no longer a simple array, we have to give the functions access to the `wins` value inside our objects.

**Inside the makeGraph function**

- for the `y` attribute change `d` to `d.wins`
- for the `height` attribute change `d` to `d.wins`
- for the `fill` attribute change `d` to `d.wins`

- for the `x` attribute change `arr.length` to `data.length`
- for the `width` attribute change `arr.length` to `data.length`


![refactored code](https://i.imgur.com/91ugdvG.png)


![refactored code bar graph](https://i.imgur.com/OFkz8YR.png)

# Adding text

Our bars are looking really nice! But, they don't really mean anything when you look at them. Which bar belongs to which student?

Inside of our `makeGraph` function let's add some D3

![text code for bar graphs](https://i.imgur.com/XXIt2ff.png)

![final bars](https://i.imgur.com/VLj4nCB.png)

Nice work! It would be cool to make the names vertical, in case there are more students to be sure their names fit better on the bars...

But we are out of time! Perhaps you can try to solve it on your own.
