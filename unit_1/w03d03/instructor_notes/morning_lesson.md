![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Intro to the DOM<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Topics: Intro to the DOM<br>
Instructor files: `instructor_examples/dom_example`<br>
Student files: `student_examples/dom_example`

---

# Lesson Objectives

_after this lesson, students will be able to__

* Explain the difference between HTML and the Document Object Model
* Use DOM commands to interact with a page

---
# Let's start from the beginning

* `git pull upstream master`
* open `student_examples/dom_example` 
* load `index.html` in the browser

# HTML

![](https://i.imgur.com/sO1tnrq.png)

This is HTML. You have seen it many times before. HTML is text that provides structure to webpages.

<br>

![](https://i.imgur.com/tkr1fjg.png)

This is the simple webpage that results from the HTML. There is a kitten and a bungalow. Those images are structurally placed within section tags which are placed within a container div which is placed within the body, etc.

The browser reads the text from our file and interprets it to display this structure.

<br>

![](https://i.imgur.com/wy6fXDP.png)

The browser has loaded our text, but what does the browser's version of our text look like? We can see the HTML text that the browser has loaded in the **Elements** tab. It's exactly the same text that we loaded in from the text editor.

<br>
<hr>

11:15

# DOM

Your browser also creates **javascript objects** out of the HTML elements. This is an **abstraction**. Why does it do this? Because HTML is just text, and we want a handy way to perform JavaScript operations on the text.

> A browser receives a page as HTML and creates a **representation** of that page as **nested objects**. This representation is stored in memory as the [**D**ocument **O**bject **M**odel](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction). This allows us to interact with the page using JavaScript.

The nested objects form a tree-like structure -- the DOM tree.

![DOM Tree](http://www.webstepbook.com/supplements/slides/images/dom_tree.gif)

The HTML can be considered 'ingredients' from which the DOM is 'cooked'. We interact with the HTML structure by using the objects cooked-up by the browser.

### Console `Ctrl ⌘ J`

In the console, we are in JavaScript-land and can interact with those JavaScript objects that were cooked up from the HTML.


### The document object

Get all of the objects that Chrome has cooked up:

```javascript
document
```

The document looks like HTML in the console, but is an object that contains more objects. The HTML document has child `<body>`, and there is a corresponding object:

```javascript
document.body
```

Shows us all the objects within the body tag.

There is a `<div>` that is a child of `<body>`.

We cannot just grab `document.body.div`, but `document` contains a bunch of useful methods for accessing and manipulating the DOM.

In Chrome console:

```javascript
document.querySelector('#container');
```

Will give us the element with id 'container'.

```javascript
document.querySelectorAll('.info');
```

Will give us all elements with class 'info'

<br>
<hr>

11:30

## Common pattern: Save a DOM element to a variable

In Chrome console

**Select an element**

When you select an element from the DOM, save it a variable for handy reference.

```javascript
const kitten = document.querySelector('#first-img');
```

Change the attribute `src`, which is **property** of the object:

```javascript
kitten.src="http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png"
```
**Create an element**

Created elements will not show until they are **appended** to the DOM.

* **create** an element first ...

```javascript
const elem = document.createElement('div');
```

* change a property (text within the element)

```javascript
elem.innerText = 'Let there be light'
```

Still will not show up ...

* then **append** it to the body of the page

```javascript
document.body.appendChild(elem);
```

You can see in the **Elements** tab whether the element has appended:

![](https://i.imgur.com/2mJQ9Dl.png)


**We can create any tag we want, such as a 'p'**

```javascript
const someP = document.createElement('p');

someP.innerText = "What we have here is a p."

document.body.appendChild(someP);
```

<br>
<hr>

11:40

## Manipulate the DOM from a script file

### Load order

* The DOM must be loaded before the script can reference any elements that already exist on the page.

* If the script is put in the head:

```javascript
const kitten = document.getElementById('first-img');

console.log(kitten);
```

> => null

<br>

* For now, place the script at the bottom of, and within, the **body** tag. That way, the HTML will have loaded before the script tries to reference it.

```javascript
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```

We can now work on the DOM, and like before, change any properties on existing elements.

```javascript
kitten.src = "http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png"
```

![](https://i.imgur.com/CkjLVtP.png)

<br>

**Prompts**

&#x1F535; Get the element with id 'container', save it to a variable, and console.log it.

![](https://i.imgur.com/0IvO1kd.png)

&#x1F535; Create a div, saving it to a variable.

&#x1F535; Give the div some text with `.innerText =`.

**Append to previously retrieved element:**

&#x1F535; Append the new div to the element with id 'container' -- we have already retrieved it, no need to retrieve it again. `.appendChild()`.

Confirm that new div is **inside** container div (it is a sibling of the **section**s):

![](https://i.imgur.com/5UwEaWD.png)

<br>
<hr>

---
12:00

Do the [DOM commands lab](https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_1/w03d03/student_labs/morning_lab.md)

You are not expected to remember these JS commands. This is just an exercise to get you familiar with the concept of the DOM and the pattern of how we interact with it. We will be using jQuery commands in the future.

---

# Notes

**Datatypes - arrays vs single elements**

Be aware of datatypes. Do you get back a single element or an array of elements?

* Get all the elements with the class 'info': it is an array, not a single element.

```javascript
const infoElements = document.getElementsByClassName('info');

infoElements.innerText = "ahoy there!";
```

This will not display any changes on the page. You would want to change the innerText of a single element, not an array.

* Get the first element with the class 'info' using bracket notation.

* Change the innerHTML of that element.

<br>
<hr>

**We won't be using many commands**

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


