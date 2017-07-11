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


### Console `Ctrl ⌘ J`

In the console, we are in JavaScript-land and can interact with our page using JavaScript.

The HTML can be considered 'ingredients' from which the DOM is 'cooked'. We interact with the HTML structure by using the objects cooked-up by the browser.

Let's interact with those objects in the console. First, let's look at our `context` within the browser. Context is not to be confused with scope. Context shows us which object we are currently in.

##### the Window object

- The Window contains methods and properties. Type in `window.` to see a list of all properties and methods.
- Location property is the URL of the page.
- The `window` object contains the `document` object where the HTML is represented.



`this` gives us the `Window` object, the top-level context. There is no 'parent' outside of this object. All of the DOM objects are nested inside of the `Window` object.



### The document object

In object terminology, the document is a property of the Window.

```javascript
window.document
```

Shorthand:

```javascript
document
```

The document looks like HTML in the console, but is an object that contains more objects.

```javascript
document.body
```

Shows us all the objects within the body tag.


11:25

## DOM commands

In Chrome console

The `document` is the object on which we will perform all of our DOM commands.

`document.head`
`document.body`

We cannot just grab `document.body.div`, but we can ask for the childNodes of `document.body`

`document.body.childNodes`

For retrieving child nodes, `document` contains a bunch of useful methods for accessing and manipulating the DOM.


11:30

## Common pattern: Save a DOM element to a variable

In Chrome console

**Select an element**

When you select an element from the DOM, save it a variable for handy reference.

```javascript
const someImg = document.querySelector('#first-img');
```

Change the attribute `src`

```javascript
someImg.src="http://doughnutkitten.com/PNGs/1_doughnut_kitten_Tania_Hennessy.png"
```
**Create an element**

Created elements will not show until they are **appended** to the DOM.

* **create** an element first ...

```javascript
const someElement = document.createElement('div');
```

* then **append** it to the body of the page

```javascript
document.body.appendChild(someElement);
```

**Perform further operations on an element before appending it**

```javascript
const someElement = document.createElement('div');

someElement.innerText = "This is some non-descriptive text";

document.body.appendChild(someElement);
```

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
const catElem = document.getElementById('first-img');

console.log(catElem);
```

> => null

<br>

* For now, place the script at the bottom of, and within, the **body** tag. That way, the HTML will have loaded before the script tries to reference it.

```javascript
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```

<br>

### Patterns of DOM manipulation
**Basics / common patterns**

* Get the element with id 'container', save it to a variable, and console.log it.

* Create a div, saving it to a variable.

* Give the div some text.

We can append not just to the body, but also to elements that we have previously retrieved. The new elements will show if something in the chain exists in the body (either already-exisiting in the body or has been appended to the body).

* Append the div to the element with id 'container' -- we have already retrieved it, no need to retrieve it again.

We can add elements to elements we have created.

* Create a p.

* Append the p to the new div.

<br>
<hr>

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

Do the [DOM commands lab](https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_1/w03d03/student_labs/morning_lab.md)

You are not expected to remember these JS commands. This is just an exercise to get you familiar with the concept of the DOM and the pattern of how we interact with it. We will be using jQuery commands in the future.

---
