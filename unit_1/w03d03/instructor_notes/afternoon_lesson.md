![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: jQuery<br>
Duration: 1.5 hrs<br>
Contributors: Colin Hart, Thom Page<br>
Topics: DOM manipulation with jQuery<br>
Associated files: `instructor_examples/dom_example`

---

# Lesson Objectives

_after this lesson, students will be able to_

* Use jQuery commands to interact with the DOM

---

# WINDOW ONLOAD

If you include the jQuery window onload in your script file, it will wait until the DOM has loaded before the script runs:

```javascript
$(() => {

	// code here will execute after the DOM has loaded

}
```

Using this technique, otherwise known as a `window onload`, you can place your scripts in the `head` of your `index.html`

You can either do this or put the script at the bottom, it doesn't matter too much at this stage. 

We might want to do this, however, to protect the **global scope** and move our code out of it. Code inside the window onload is not in the global scope.

<br>
<hr>

# DATATYPES

A common question is:

* Can I use jQuery and 'vanilla' JS in the same file?

The answer is yes. However, you shouldn't. For consistency, readability and testability, stick to either 'vanilla' JS _or_ jQuery.

Additionally, there is a risk of 'mixing datatypes' and coming up with annoying errors.

**jQuery objects are not native js objects**. You cannot mix your datatypes: 'vanilla' js commands cannot be performed on jQuery objects and vice versa.

**Example: Adding a class to a div:**


```javascript
const div = $('<div>');

div.classList.add('class');
```

This will not work because div variable is assigned to a jquery object, but classList.add is vanilla js.


```javascript
const div = $('<div>');

div.addClass('class')
```

This will work because `.addClass` is a jQuery method, and 'div' is a jQuery object. Match made.

* **vanilla js methods will not work on jQuery objects**

* **jQuery methods will not work on vanilla js objects**

<br>

# Add a `$` in front of jQuery variables


To make it explicit that your variables refer to jQuery objects, add a `$` in front of the variable. _This does not make it a jQuery object_, it merely clarifies, for us, that it is pointing to one:

Creating a div:

```javascript
const $div = $('<div>');
```

`$('<div>')` is a jQuery object, so we will use a `$` in the variable name: `$div`.

Grabbing all elements with class of 'square':

```javascript
const $classOfInfo = $('.info');
```

<br>
<hr>



# jQuery commands - research!

Use the [jquery cheat sheet](https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_1/w03d03/instructor_notes/jQuery_cheat_sheet.md)

OR Google, OR the [official docs](https://api.jquery.com/)

Answer and test - what jQuery command would I use to:

* Get all elements with class 'info'

* Create an 'img' element

* Give my 'img' a 'src' attribute

* Append my 'img' to the body of my page

* Give my 'img' an id of 'example'

* Give all elements with class 'info' an additional class of 'red'

* Get an element with an id of 'container'

* Remove an element with id of 'container'

<br>
<hr>

# DOM patterns

**Demo - do not code along**

Let's reinforce our DOM creation patterns.

Let's make a third 'section' like this:

![](https://i.imgur.com/W9l21Ir.png)

![](https://i.imgur.com/RThOwoR.png)


**Create my elements first**

* Make a section and give it a class 'info'

```javascript
const $section = $('<section>').addClass('info');
```

* Make a p and give it some text

```javascript
const $p = $('<p>').text('Here be some drainage');
```

* Make an img and give it an attribute `src` with the property of the image url

```javascript
const $img = $('<img>').attr('src', 'http://www.calgary.ca/CSPS/ABS/PublishingImages/2010-1155_00013525_10790.jpg');
```

**Then put the elements together**

* Append the p and the img to the section

```javascript
$section.append($p);
$section.append($img);
```

* Append the section to the container

```javascript
$('#container').append($section);
```

* Oops! We forgot the give the img an id:

```javascript
$img.attr('id', 'third-image');
```

**Give it some zhoozh**

* Change the css

```javascript
$('#container').css('background', 'firebrick');
```

```javascript
$('.info').css('color', 'white');
``` 

<br>

**Activity**

Using your folder and files from this morning, do the following:

* Add a section to the page with jQuery.
* The section should have a class of 'info'
* The section should contain a `p` with text
* The section should contain an `img` with an id `third-img`

* Change the css of the container so that the background-color is `firebrick`

* Change the css of the `info` boxes so that font has color `white`

<br>
<hr>

# NOTES

## Selection Recap

To select by ID, you use the same syntax as CSS selectors

```javascript
$('#first-img');
```
> Select the element with id="first-img"`

To select all elements of a particular class, use CSS syntax again

```javascript
$('.info')
```

> Selects all elements of the class "info"`


<br>


#### Selecting an element and changing its content - vanilla vs jQuery

In this HTML:

```html
<div id="myDiv">Hello world!</div>
```

Here is a `vanilla` JS command:

```javascript
const divToManipulate = document.getElementById('myDiv');
divToManipulate.innerHTML = "Goodbye world!";
```

In jQuery, this is a one-liner:

```javascript
$('#myDiv').html("Goodbye world!");
```

There are two things about the example above that make jQuery easier to use:

  1. jQuery is using the same syntax as CSS to select elements

  2. jQuery allows us to chain methods together to accomplish our goals (i.e., $`().html(...)` ), making code shorter and easier to understand

<br>

#### Appending a DOM element to a page

If we want to add a new DIV with a P within it, that also has some text within it, our vanilla JavaScript would have to be:

```javascript
    const myDiv = document.getElementById('container');
    const newP = document.createElement('p');

    newP.innerText = "Hello complicated, multi-step world of adding an element to the DOM!";
    myDiv.appendChild(newP);
```

And in jQuery, it looks like this:

```javascript
	$('#container').append("<p>").text("Hello simple insertion using jQuery chaining");
```

In the jQuery code example above, we first select the DIV with `id="container"`, then we append a new paragraph element (automatically created using core jQuery selector function), and then we append the text we want to insert to the new paragraph element we just created.

<br>

#### Modifying Styles (CSS) Using jQuery

You can do more than select elements and modify content. You can also create or update CSS style attributes in jQuery using the `.css()` method

```javascript
$("#container").css("color", "red");
```

The code above will change the color of all text inside the DIV with id="container" to red.

Or, if we have a bunch of elements that all have the same class (in this example, it's class="info"), we can use the class selector to modify the color of all of them at once:

```javascript
$(".info").css("color", "blue");
```

<br>

#### Modifying an element with more than one line of CSS

To use `.css()` with more than one line of CSS to add, the syntax is slightly different. We put all of our CSS commands into an object:

```javascript
$("#container").css({ 'background-color':'cornflowerblue', 'font-size':'30px' });
```

However, it's usually better to change the css of an element by adding an existing class.


#### Adding a class

An existing class within `style.css`

```javascript
.hotpink {
  font-size: 90px;
  color: #ff69b4;
  background-color: red;
}
```

Add it with jQuery:

```javascript
  $("#container").addClass('hotpink');
```

<br>

#### Removing Elements Using jQuery

`.remove()` will remove an element and all its contents.

`.empty()` will remove all the content from an element, but the element will remain.

<br>

#### jQuery arrays and `.eq()`

When you return a jQuery object that contains many other jQuery objects, such as a list of elements with same class, you will get back an array.

But _be careful_ because if you try to access it like an ordinary array using brackets, the object will revert to a 'vanilla' one.

```
  const infoElements = $('.info');

  infoElements[0].text("Heeey!");
```

![](https://i.imgur.com/hhCogRU.png)

To maintain its 'status' as a jQuery object (and not convert it to a 'vanilla' one), use `.eq()`.

```
const infoElements = $('.info');

infoElements.eq(0).text("Heeyeeee");
```

* Use `.eq()` to select jQuery 'array' elements.

<br>

#### Selecting an element with jQuery should not be confused with creating one


This is the basic syntax for jQuery selections: `$(' ')`

To select a particular element by tag

`$('section') // selects all section elements`

This is the basic syntax for jQuery creations: `$('<  >')`

`$('<section>')` **creates** an element. Note the use of the pointies.

Not to be confused with each other!

<br>
<hr>

