![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: 'Vanilla' DOM commands<br>
Type: Lab <br>
Duration: 45 - 60 mins<br>
Creator: Thom Page <br>
Topics: 'Vanilla' DOM intro<br>

## JS DOM commands

You are not expected to remember these commands. This is an exercise to get you familiar with the concept of the DOM and the pattern of how we interact with it. We will be using jQuery commands in the future.

**Check the results of your commands in the Elements tab and in the Console** (some divs won't have text, etc. but you can see the element appearing in the DOM in the elements tab.)

## Setup

* `git pull upstream master`

* Open up the `dom_example` folder in your `student_labs` directory for today.

* Load the `index.html` file into the browser. You should see a kitten and a bungalow:

![](https://i.imgur.com/XRNN2TE.png)

* Include a 'script' tag to link your JavaScript file in the html. Be mindful of the following:

* The DOM must be loaded before the script can reference any elements that already exist on the page. For now, place the script at the bottom of, and within, the **body** tag.

# ⌘R

⌘R, or Command-R will **reload** your webpage after you have made changes to your html, css, or js files (if your OS has focus on the browser). Try not to click the reload button on the browser. Reloading works as long as you have **saved** your files. 

<br>
<hr>

## Find / retrieve an element

Use `document.querySelector()` to find an element in the DOM.

Use `document.querySelectorAll()` to find a collection of elements in the DOM.

**querySelector and querySelectorAll commands:**

- `document.querySelector('div');` will give us the first div that's available to us.
- `document.querySelector('#someId')` will give the element with an id `someId`. Note the use of the pound sign to query for id.
- `document.querySelectorAll('.someClass')` will give us an **array of elements** with the class `someClass`. Note the use of the period to query for class.

We can save the results of our search to a variable:

```javascript
const elem = document.querySelector('#someId');

console.log(elem);       // the element with id 'someId'
```

**PROMPTS**
	
&#x1F535; Get the element with the id of `container` and save it to a variable `container`. Console.log that variable.

**Make sure** you get the container element logged in the console:

![](https://i.imgur.com/1ocG4tc.png)

&#x1F535; Get the element with the id of `second-img` and save it to a variable `secondImg`. Console.log that variable.

**Make sure** you get the element logged in the console:

![](https://i.imgur.com/8bw69Aj.png)

&#x1F535; Practice checking the HTML: If there is an element with the id of `third-img` that already exists in the HTML, save it to a variable `thirdImg` and console.log it.

If there is no element with the id `third-img`, move on to the next question. 

&#x1F535; Get all of the elements with the class `info` and save them to a variable `infoElements`. Console.log that variable.

**Make sure** you get this (an array):

![](https://i.imgur.com/Ahh8J0C.png)

And **not this** (a single element)

![](https://i.imgur.com/2YLSvzd.png)

<br>

## Alter an element's HTML

As we have seen, we can assign the value of `document.querySelector()` to a variable.

EXAMPLE:

```javascript
const foundDiv = document.querySelector('div');
```

- The value of the variable `foundDiv` is an object with properties.
- We can change the content of a DOM element (and therefore the HTML in the web page) by altering the `.innerText` property of that object.

```javascript
const foundDiv = document.querySelector('div');

foundDiv.innerText = 'awesome';
```

> => will change the div text to read 'awesome'.

**PROMPTS**

&#x1F535; Get the first `p` element from the page using querySelector and save it to a variable `firstP`.

&#x1F535; Change the innerText of that element to 'Jamboree sandwich at the Jambo-ree'

![](https://i.imgur.com/kqej9qt.png)

&#x1F535;  Make it so the first paragraph's text is parsed as HTML so that you can use tags within it. Use `innerHTML` instead of `innerText`.

`.innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'`

Notice that the string is parsed as **strong** element.

![](https://i.imgur.com/GztpOUX.png)

<br>

## Create a new element

The `document` object also has a `.createElement()` method which allows us to create an element out of thin air.

EXAMPLE
```javascript
const newElement = document.createElement('div');
```

- The element has not been added to the DOM yet, though.  It's just floating out in space.

&#x1F535; Create a `div` element and save it to a variable `newDiv`.

console.log the div. It should just look like this:

![](https://i.imgur.com/waFr7qR.png)

<br>

## Append an element to the body

You can append an element to an existing element with `.appendChild()`

To append straight to the body of the document, you can use:

```
document.body.appendChild(someElementVariable)
```

&#x1F535; Append your previously created div to the body of the document. 

You should see your `<div></div>` in the **elements** tab, located within the body tag:

![](https://i.imgur.com/jQfXFm2.png)

<br>

## Append an element to a retrieved element

Append an element to another element that you have retrieved from the DOM.

Get an element from the page:

EXAMPLE

```javascript
const container = querySelector('#container');
```

Create an element and append it to the retrieved element:

```javascript
const newElem = document.createElement('div');

container.appendChild(newElem);
```

> => The container div now has a child div.

**PROMPTS**

&#x1F535; Get the first `section` element from the page and save it to a variable `firstSection`.

&#x1F535;  Create a `p` element and save it to a variable `someP`.

&#x1F535; Append it to the section. 

**Check in the Elements tab**, the section should have an extra set of `p` tags hanging around.

![](https://i.imgur.com/yj2ZKEG.png)


<br>

## Create an element and give it an attribute before appending it

- We can give a new element properties like `.innerHTML`, `.src`, `.classList`, etc.

```javascript
const newP = document.createElement('p');

newP.innerText = "I have been to Baffin. It was cold.";

document.body.appendChild(someP);
```


&#x1F535; Create an `img` element and save it to a variable `newImg`.

&#x1F535; Give the `img` element a `src` of some image you find on the internet. `.src` is a property like `.innerText`, therefore, you would give it a value with the assignment operator `=`.

&#x1F535; Append the `img` to the document body.

**Make sure** you see the image appear at the bottom of your webpage.

**Check in elements** and see that your `.src` property has translated into an html `src` attribute:

![](https://i.imgur.com/e4QIXVN.png)_

<br>

## Create an element and give it an id

EXAMPLE

```javascript
const newDiv = document.createElement('div');

newDiv.id = "party-time-excellent"

document.body.appendChild(newDiv);
```

&#x1F535; Create a `section` element, give it an id of `butterfly`, and append it to the body.

<br>


## Get a list of the classes given to an element

We can see the different classes on an element with the `.classList` property

EXAMPLE

```javascript
const foundDiv = document.querySelector('div');

const divClasses = foundDiv.classList;
```

&#x1F535; You should already have the first `section` element. Get the list of classes given to the first `section` element (there is only one class in this particular class list).

![](https://i.imgur.com/Kx18BZi.png)

<br>

## Add a class to an element

We can add classes to an element using the `.add()` method of the classList property of an element

EXAMPLE

```javascript
const foundDiv = document.querySelector('div');

foundDiv.classList.add('awesome-class');
```

&#x1F535; Add the class `wdi-remote-gizmo` to the first section element.

![](https://i.imgur.com/dAvSaNE.png)


<br>

## See if a class has been added to an element

The .classList property of an element is not a simple array, though.  It's actually an object that has properties.

We can use the `.contains()` method of the classList property of an element to see if that element has a class added to it

EXAMPLE

```javascript
const foundDiv = document.querySelector('div');
const divClasses = foundDiv.classList;
divClasses.contains('awesome-class');
```

&#x1F535; Check if the first section tag has the class `wdi-remote-gizmo`.

![](https://i.imgur.com/sZOJz1d.png)

<br>

## Remove a class from an element

To remove a class, if it exists, use the `.remove()` method of the `classList` property of an element.

EXAMPLE

```javascript
const foundDiv = document.querySelector('div');
foundDiv.classList.remove('awesome-class');
```

&#x1F535; Remove the class `wdi-remote-gizmo` from the first section element.

![](https://i.imgur.com/qkYVLhc.png)

<br>

