![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Intro to the DOM<br>
Duration: 1.5 hrs<br>
Contributors: Shawn Johnson, Marc Wright, Colin Hart, Thom Page<br>
Topics: the DOM, DOM manipulation with jQuery<br>

---

# Lesson Objectives

_after this lesson, students will be able to__

* Explain the difference between HTML and the Document Object Model
* Use DOM commands to interact with a page
* Include the jQuery library in a project
* Use just a few jQuery commands to interact with the DOM

---

## What is the DOM?

The DOM, or [**D**ocument **O**bject **M**odel](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), is the browser's intepretation of the HTML. Your browser creates **javascript objects** out of the HTML elements.


A browser receives a page as HTML and creates a **representation** of that page as **nested objects**. This representation is stored in memory as the Document Object Model. This allows us to interact with the page using JavaScript.


The nested objects form a tree-like structure, a.k.a. the DOM tree.

![DOM Tree](http://www.webstepbook.com/supplements/slides/images/dom_tree.gif)


<br>

Or this:

```
html
└── head
│   ├──title
│   ├──meta
│   ├──link[rel="stylesheet"]
|   └──script[type="text/javascript"]
|
└── body
    ├── header
    │   ├── h1
    │   └── nav
    └── section.simplicity
    |   └── h2
    │   └── article
    ├── section.life
    |   └── h2
    │   └── article
    │       └── block_quote
    │       └── block_quote
    └── footer
```


11:15

## HTML vs Document Object Model

### Elements tab

We can see the HTML structure in the elements tab.

[example](https://github.com/ga-students/wdi-remote-hopper/blob/master/unit_1/w03d01/student_examples/dom_example/index.html)

### Console

`ctrl + command + J`

In the console, we are in JavasSript-land and can interact with our page using JavaScript.

The HTML can be considered a 'recipe' from which the DOM is 'cooked'. We interact with the HTML structure by using the objects cooked-up by the browser.

Let's interact with those objects in the console.

First, let's look at our `context` within the browser. Context is not to be confused with scope. Context shows us which object we are currently in.

`this` gives us the `Window` object, the top-level context. There is no 'parent' outside of this object. All of the DOM objects are nested inside of the `Window` object.

##### the Window object

- The Window contains methods and properties. Type in `window.` to see a list of all properties and methods.
- Location property is the URL of the page.
- The `window` object contains the `document` object where the HTML is represented.

### The document object

In object terminology, the document is a property of the Window.

```
window.document
```

Shorthand:

```
document
```

The document looks like HTML in the console, but is really objects.

```
document.body
```

Shows us all the objects within the body tag.


11:25

## DOM commands

The `document` is the object on which we will perform all of our DOM commands.

`document.head`
`document.body`

We cannot just grab `document.body.div`, but we can ask for the childNodes of `document.body`

`document.body.childNodes`

For retrieving child nodes, `document` contains a bunch of useful methods for accessing and manipulating the DOM.


11:30

## Save a DOM element to a variable

**Select an element**

When you select an element from the DOM, save it a variable for handy reference.

```
var someImg = document.querySelector('#first-img');
```

Change the attribute `src`

```
someImg.src="http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png"
```
**Create an element**

Created elements will not show until they are **appended** to the DOM.

* create an element

```
var someElement = document.createElement('div');
```

* append it to the body of the page

```
document.body.appendChild(someElement);
```

**Perform further operations on an element before appending it**

```
var someElement = document.createElement('div');
```

```
someElement.innerText = "This is some non-descriptive text";
```

```
document.body.appendChild(someElement);
```

**We can create any tag we want, such as a 'p'**

```
var someP = document.createElement('p');

someP.innerText = "What we have here is a p."

document.body.appendChild(someP);
```

<br>
<hr>

11:40

## Manipulate the DOM from a script file


Include the script file as usual, but be mindful of the following:

* The DOM must be loaded before the script can reference any elements that already exist on the page.

* If the script is put in the head:

```
var catElem = document.getElementById('first-img');

console.log(catElem);
```

> => null

<br>

* For now, place the script at the bottom of, and within, the **body** tag. That way, the HTML will have loaded before the script tries to reference it.

```
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```

<br>

**Let's have another look at the general patterns we use for DOM manipulation**

* Get the element with id 'container', save it to a variable, and console.log it.

* Create a div, saving it to a variable.

* Give the div some text.

We can append not just to the body, but also to elements that we have previously retrieved. The new elements will show if something in the chain exists in the body (either already-exisiting in the body or has been appended to the body).

* Append the div to the element with id 'container' -- we have already retrieved it, no need to retrieve it again.

We can add elements to elements we have created.

* Create a p.

* Append the p to the new div.

Be aware of datatypes. Do you get back a single element or an array of elements?

* Get all the elements with the class 'info': it is an array, not a single element.

```
var infoElements = document.getElementsByClassName('info');

infoElements.innerText = "ahoy there!";
```

This will not display any changes on the page. You would want to change the innerText of a single element, not an array.

* Get the first element with the class 'info' using bracket notation.

* Change the innerHTML of that element.


## We won't be using very many DOM commands

DOM commands fall into a few broad categories:

* Search / retrieval of elements on the page
* Creating new elements
* Editing the DOM
* Traversal (related to search) - navigating the DOM

We will only need a small handful of these commands for now. Here is a sample:

* **Search**
  * document.querySelector()
  * document.getElementById()
  * document.getElementsByClassName()
  * document.getElementsByName()

* **Creation**
  * document.createElement()
  * node.style
* **DOM editing**
  * node.appendChild()
  * node.removeChild()
  * node.innerText
  * node.setAttribute()
  * node.innerHTML
  * node.id
  * node.classList
* **Traversal**
  * node.childNodes
  * node.children
  * node.firstChild


12:00

---

Do the [DOM commands lab](https://github.com/ga-students/wdi-remote-hopper/blob/master/unit_1/w03d01/student_labs/w3d1_morning_lab.md)

You are not expected to remember these JS commands. This is just an exercise to get you familiar with the concept of the DOM and the pattern of how we interact with it. We will be using jQuery commands in the future.

---

1:00

# jQuery library

These DOM commands are rather cumbersome, and we will not be using them. We are using them just to demonstrate that the HTML is represented as **JavaScript objects with useful methods on them** in the browser, and that there is a pattern to interacting with the DOM.

We can make our lives easier by using a **library** that will simplify these commands for us.

A **library** is just some third-party code we can reference in our projects. We don't ever need to look at the library code or tinker with it. It just sits there invisibly.


## Add jQuery Library to a project

**CDN**

`https://code.jquery.com/`

* Select the minified version of the latest jQuery
* Copy the whole script tag in the popup
* Place it _before_ your application script - that way, the jQuery code will have loaded before we try to use it.

**Main page - select minified jQuery**

![](https://i.imgur.com/ZZXZetR.png)

**Copy the jQuery script tag and src**

![](https://i.imgur.com/t7hdQsv.png)

**jQuery script placed before app.js in index.html**

![](https://i.imgur.com/HU9p8BK.png)

**Check if jquery is installed**

Type `$` in the Chrome console.

![](https://i.imgur.com/L6uuz1A.png)


<br>
<hr>

## What is jQuery

jQuery:

* Provides a _shorthand_ method of manipulating DOM elements.
* Is a _library_ of code that you include in the same way you include your own js scripts
* The browser loads in the jQuery code, which will allow us to use jQuery commands to interact with the DOM
* The library will **translate** our jQuery commands into ones that the browser will recognize as 'vanilla' js commands.

<br>

## Use jQuery

When we write jQuery commands, the jQuery library translates our commands into ones that the browser will recognize as 'vanilla' JS. jQuery is a layer on top of the vanilla commands.

jQuery commands always begin with the `$` symbol

![](https://i.imgur.com/WiUrxnG.png)


**You can put your scripts in the head if you use a closure in the code**

We can put our jQuery inside a closure so that it will wait until the DOM has loaded.


* jQuery closure - waits for all the HTML to be parsed

```
$(function() {
	// stuff
}
```

* **Grab an element by id**

```
var elem = $('#idName');
```

Is translated into `document.querySelector` under the hood.

<br>

* **Generate an element**

```
var newElem = $('<div>');
```

Is translated into `document.createElement()` under the hood.

<br>

* **Append an element to the body**


```
$('body').append(newElem);
```

Is translated into `document.body.appendChild(newElem)`

<br>

**Add text to an element**

```
newElem.text('the square of the hypotenuse is equal to the sum of the squares of the other two sides');
```

<br>

&#x1F535; **Activity (7 min)**


REFER TO THE JQUERY CHEAT SHEET

* Add the jQuery library to your project
* Test that it is installed with `$`
* Write in the jQuery closure if your scripts are in the head

&#x1F535; **Activity**

* Create a div with jQuery
* Give the div some text with jQuery
* Append the div to the body of the page

&#x1F535; **Extra Activity**

* Create a `p` with jQuery
* Give the `p` a class of 'test-class' with jQuery
* Append the `p` to the previously created div (check in elements tab that it appended)

&#x1F535; **Extra Activity**

* Use jQuery to apply CSS to the `div`: make the div red using just jQuery

&#x1F535; **Extra Activity**

* Give the `p` an id of `test-id` using jQuery

<br>
<hr>

# EXTRA INFO - 'Vanilla JS'

#### load order

Here's what happens when a browser loads a website:

1. It makes a request for and fetches the HTML page (e.g. index.html)
2. Starts parsing the HTML i.e. building the dom.
3. The parser sees a `<script>` tag referencing an external script file.
4. The browser makes a second request for the script file. Meanwhile, the parser stops and waits. This called Blocking.
5. Once the script is downloaded and executed the parser continues parsing the rest of the HTML document.

There are several more advanced techniques for loading our JS but for now we can just make sure our script tag is at the end of the html so the DOM loads before our script runs.

<br>

#### window.onload

There is a pattern we can follow to help our page load properly and execute in the right order.

We can surround our Javascript in a function called `window.onload = function() {}`. This function will wait until the entire window/dom is loaded before allowing any of our Javascript to run.

In your `script.js` file, wrap your Javascript code in the following function:

```js
window.onload = function() {
  // alerts and prompts
  // go in here!
}
```

### Everything is a Node
In the HTML DOM (Document Object Model), everything is a node:

* The document itself is a document node
* All HTML elements are element nodes
* All HTML attributes are attribute nodes
* Text inside HTML elements are text nodes


## References

* [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
* [DOM CheatSheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
