![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: DOM manipulation<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: jQuery, JS control flow<br>

---

# Lesson objectives

_After this lesson students will be able to:_

* Use JavaScript control flow with jQuery commands
* Append to the DOM using a function
* Generate elements in a loop

<br>
<hr>

# Setup

* In `student_examples` for today, create a folder `dom_manipulation`
* Inside `dom_manipulation`, touch 
	* `app.js`
	* `index.html`
	* `style.css`

* Open `index.html` in the browser.

* Link style.css. Make your body background 'azure' to test the css.

* Add app.js script. Test with a console.log that shows up in Chrome.

* Include jQuery `https://code.jquery.com/`. Place it **before** app.js. Test with `$` in your `app.js`

<br>
<hr>

# Control flow and jQuery

jQuery **is** JavaScript, it just looks different to the regular JS.

We can use JavaScript control flow patterns with jQuery. That means **functions**, **loops**, and **conditionals**. Using control flow with our DOM manipulation patterns, we can create some interesting things.

<br>
<hr>

### Easy stuff - using functions

Write a function that will add an `h2` with the text "Just getting started" to the body of the page.

```javascript
  const addH2 = () => {
    $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
  }

  addH2();
```

If nothing shows up when you run the function, why might that be? Hint: has the DOM loaded before the script runs?

```javascript
$(() => {
  const addH2 = () => {
    $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
  }

  addH2();
});
```

We can add the window onload function. Question: does the following code work? Why or why not:

```javascript
// Code is loaded before DOM loaded
console.log('hi');
 
const addh2 = () => {
  $newH2 = $('<h2>').text('GOOD MORNING GIZMO!');
  $('body').append($newH2);
}

// Code is loaded after DOM loaded                                                            
$(() => {

  addh2();

});
```


&#x1F535; **Activity**

* Write a function that will add an H2 to the page

<br>

Write a function that will change the existing `h2` to have the text "Getting warmed up"

```javascript
  const addH2 = () => {
    $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
  }

  const changeH2 = () => {
    $('h2').text("Getting warmed up");
  }

  addH2();
  changeH2();
```

&#x1F535; **Activity**

* Write a function that will change the text of the existing H2

&#x1F535; **Activity**

* Write a function that will remove the H2, and replace it with an image of "Oyster Smiling"

![](http://i.imgur.com/k6y31P8.png)

<br>
<hr>

### Harder stuff - using loops

# Horrible Digital Quilt

Here is a nice quilt:

![](https://i.imgur.com/vBwqImN.png)

Let's build a digital quilt! It's not going to be too easy on the eyes. In fact, it's going to be a horrible quilt.

What we are aiming at is this:

![](https://i.imgur.com/QZjQHT3.png)

Eventually, we would like to invoke a function `generateQuilt()` that will build the quilt on the page. We would like to specify how many squares the quilt has: `generateQuilt(1000)` would build a quilt with 1000 randomly-colored squares.

### Setup

* Close `app.js`
* Remove the `app.js` script from your `index.html`
* Create a new file called `quilt.js` and link it to the `index.html`

<br>
<hr>

### Let's begin

&#X1F440; **Observe**


* Write a for loop that counts from 1 to 1000

```javascript
  for (let i=1; i <= 1000; i++) {
    console.log(i);
  }
```

* Make a square with jQuery - add a class that gives it shape


```javascript
  const $square = $('<div>').addClass('square');
  $('body').append($square);
```

```css
.square {
  height: 50px;
  width: 50px;
  border: 1px solid grey;
  border-radius: 10px;
}
```

* Combine the two and generate many squares, appended to the body each time the loop runs

```javascript
  for (let i=1; i <= 1000; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }
```

* Make the squares inline-block: `display: inline-block;`

This is a DRY way to make a grid of 1000 divs.

<br>

&#x1F535; **Activity - Make your own quilt**

* Generate 1000 square divs (inline-block) using a loop, appending each to the body
* Your squares won't be visible unless you give them a background color or border

<br>


### Put the loop into a function

&#X1F440; **Observe**

I would like a convenient way to generate more squares.

We can wrap this process in a function:

```javascript
const generateSquares = () => {
  for (let i=1; i <= 1000; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}

generateSquares();
```

Run it multiple times for fun:

```javascript
generateSquares();
generateSquares();
generateSquares();
generateSquares();
```

<br>

&#x1F535; **Activity - function**

* Put the loop into a function - when you invoke the function, the loop will run

<br>

### Give the function an argument

&#X1F440; **Observe**

* Provide the function with a parameter and argument, and run the loop that many times:

```javascript
const generateSquares = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}

generateSquares(1000);
```

<br>

&#x1F535; **Activity - function**

* When you invoke the function with the number of desired squares as an argument, the loop will generate the desired number of squares.

<br>

## Color the squares

&#X1F440; **Observe**

### RGB

We can use rgb values for our colors

```javascript
background-color: rgb(25, 241, 84);
```

`rgb` stands for **red**, **green**, and **blue**. Each number is between 0 and 255, and says how much red, how much, green, and how much blue to blend.

`rgb(0, 0, 0)` is **black**.

`rgb(255, 255, 255)` is **white**.

[rgb color values](https://www.w3schools.com/colors/colors_rgb.asp)

Let's use it in the loop with `.css()` jquery method:

```javascript
const generateSquares = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $square.css('background-color', 'rgb(23, 240, 83)');
    $('body').append($square);
  }
}
```

The **rgb** value is a **string** within the `.css()` method.

<br>

&#x1F535; **Activity - Fill the squares**

* Give the squares a random rgb color

<br>

## Color each square with a random color


&#X1F440; **Observe**

Let's make a function that will return a **string** with **random rgb values**.

We will generate random values for red, green, and blue, and interpolate them into a return string.

```javascript
const randColorRGB = () => {
	 const red = Math.floor( Math.random() * 256 );
    const green = Math.floor( Math.random() * 256 );
    const blue = Math.floor( Math.random() * 256 );
    return "rgb(" + red + "," + green + "," + blue + ")";
}
```

```javascript
console.log(randColorRGB());
```

Now we can use the return value of this function in our `.css()` method:

```javascript
$square.css('background-color', randColorRGB());
```

Since it is inside a loop, it will run each time the loop runs, giving us a random color each time.

<br>

&#x1F535; **Activity - Fill the squares**

* Give each square a random rgb color

<br>

### Add text to each square

&#X1F440; **Observe**

The quilt is not quite ugly enough. Let's put some numbers in each square.

* Display the number in each square from 1 to 1000 with `$square.text(i)`

```javascript
const generateSquares = () => {
  for (let i=1; i <= 1000; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
 	 $square.css('background-color', randColorRGB());
    $square.text(i);
    $('body').append($square);
  }
}
```

<br>

&#x1F535; **Activity - Fill the squares**

* Make each square display a number according to its place in the loop

<br>

### For fun, give each square an id, the same as its number

&#X1F440; **Observe**

`$square.attr('id', 'square' + i);`

<br>

&#x1F535; **Activity - Interpolate an id**

* Make each square display a number according to its place in the loop. In Elements tab: `id="square1"` etc.

<br>

**End of Horrible Digital Quilt**

<br>
<hr>

# EXTRAS 

# Virtual Rolodex

Here is a rolodex with people's names and addresses:

![](http://1.bp.blogspot.com/-R9CqI_apvnA/UjmkaBEt5YI/AAAAAAAAANc/AUBK7LwuvqE/s1600/rolodex.jpg)

Let's make something that looks nothing like this, for practice.

![](https://i.imgur.com/TtermqB.png)

We would like to run a function that will populate our page with names and addresses from an **array of objects**

In `index.html`, comment out the `quilt.js` script and make and link a `rolodex.js` script file.


### Data

* Add the **array of objects**

```javascript
var data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "I simply do not know" },
  { name: "Jem", address: "Starlight Music" }
];
```

What we want to do is **populate** our page with data from the array. If, in the future, we change the data in the array, the page can be **re-populated**.

<br>

* Write a loop that iterates over the array

```
  for (var i=0; i < data.length; i++) {

    console.log(data[i]);

  }
```

* We will now be interacting with the DOM so wrap the code in a closure.

* Create a container that will house each name and address. Give it a class we can adjust later

```javascript
$(function() {

  for (var i=0; i < data.length; i++) {
    console.log(data[i]);
    $infoContainer = $('<div>').addClass('info-container');
  }

});
```

* Add in the name div, whose text comes from the array. Give it a class we can adjust later.

`$nameDiv = $('<div>').addClass('name').text(data[i].name);`

And the address div, whose text comes from the array. Give it a class we can adjust later.

`$addressDiv = $('<div>').addClass('address').text(data[i].address);`


* Append the divs to the container div

Finished result

```
$(function() {

  for (var i=0; i < data.length; i++) {
    console.log(data[i]);
    $infoContainer = $('<div>').addClass('info-container');
    $nameDiv = $('<div>').addClass('name').text(data[i].name);
    $addressDiv = $('<div>').addClass('address').text(data[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);
  }

});
```

### CSS

Give the body a nicer font

```
body {
  font-family: Verdana;
}
```

Give the info container some color, border, margin, padding

```
.info-container {
  background-color: azure;
  border: 1px solid grey;
  margin-bottom: 5px;
  padding: 20px;
}
```

Last, give each name and address classes a display of inline-block, some margin, padding, and a border

```
.name, .address {
  border: 1px solid grey;
  display: inline-block;
  margin-right: 20px;
  padding: 5px;
}
```

<br>

## Write in a function that will 'populate' the page

```
var populateData = function() {
  for (var i=0; i < data.length; i++) {
    console.log(data[i]);
    $infoContainer = $('<div>').addClass('info-container');
    $nameDiv = $('<div>').addClass('name').text(data[i].name);
    $addressDiv = $('<div>').addClass('address').text(data[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);
  }
}
```

Now we can move the function out of the window onload, and just invoke the function within the window onload.

```
$(function() {

  populateData();

});
```

<br>
<hr>

## Adding data

* Write a function that will push new data in to the array.
* The function should take `name` and `address` as parameters
* The function should then run the 'populateData' function


```
var addData = function(name, address) {
  data.push({ name: name, address: address });
  populateData();
}
```

The function 'doubles' the information. To fix this, we should clear out the old information before it populates. `$('body').empty();`

```
var addData = function(name, address) {
  data.push({ name: name, address: address });
  $('body').empty();
  populateData();
}
```

**End of Virtual Rolodex**

<br>
<hr>

&#x1F535; **Activity - Make your own rolodex**

* Use the data provided
* Iterate over the data and construct a container div, a div for the name, and a div for the address

&#x1F535; **Extra - Make the divs stylish**

* Give each div a class
* Style the divs

&#x1F535; **Extra - Add new data**

* Write a function that will `.push` new data in the array and then populate the page with the updated array

&#x1F535; **Extra - Remove data**

* Write a function that will remove all entries whose name begins with 'M'.

<br>
<hr>
License
<hr>
