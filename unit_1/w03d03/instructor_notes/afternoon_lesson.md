![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: jQuery<br>
Duration: 1.5 hrs<br>
Contributors: Gerry Mathe, Elie Schoppik, Colin Hart, Thom Page<br>
Topics: DOM manipulation with jQuery<br>

---

# Lesson Objectives

_after this lesson, students will be able to__

* Use jQuery commands to interact with the DOM

---

# WINDOW ONLOAD\

If you include the jQuery window onload in your script file, it will wait until the DOM has loaded before the script runs:

```
$(function() {

	// code here will execute after the DOM has loaded

}
```

Using this technique, otherwise known as a `window onload`, you can place your scripts in the `head` of your `index.html`

You can either do this or put the script at the bottom, it doesn't matter too much at this stage.

One reason why we might want to do this is to protect the scope.

<br>

# DATATYPES

A common question is:

* Can I use jQuery and 'vanilla' JS in the same file?

The answer is yes. However, you shouldn't. For consistency, readability and testability, stick to either 'vanilla' JS _or_ jQuery.

Additionally, there is a risk of 'mixing datatypes' and coming up with annoying errors.

**jQuery objects are not native js objects**. You cannot mix your datatypes: 'vanilla' js commands cannot be performed on jQuery objects and vice versa.

Adding a class to a div:

```
var div = $('<div>');

div.classList.add('class');

// this will not work because div is jquery object, but classList.add is native js.

// this will work:

div.addClass('class')

// .addClass is a jQuery method, and 'div' is a jQuery object. Match made.
```

<br>

## Add a `$` in front of jQuery variables


To make it explicit that your variables refer to jQuery objects, add a `$` in front of the variable. _This does not make it a jQuery object_, it merely clarifies, for us, that it is pointing to one:

Creating a div:

```
var $div = $('<div>');
```

Grabbing all elements with class of 'square':

```
var $classOfInfo = $('.info');
```

<br>
<hr>


#### Selecting an element with jQuery should not be confused with creating one


This is the basic syntax for jQuery selections
`$(' ')`

To select a particular element by tag
`$('section') // selects all section elements`

<br>

Not to be confused with:

`$('<section>')` which **creates** an element. Note the use of the pointies.

<br>

### Selection Recap

To select by ID, you use the same syntax as CSS selectors
`$('#first-img') // Would select the element with id="first-img"`

To select all elements of a particular class, use CSS syntax again
`$('.info') // Selects all elements of the class "info"`


<br>


#### Selecting an element and changing its content

In this HTML:

```
<div id="myDiv">Hello world!</div>
```

Here is a `vanilla` JS command:

```
var divToManipulate = document.getElementById('myDiv');
divToManipulate.innerHTML = "Goodbye world!";
```

In jQuery, this is a one-liner:

```
$('#myDiv').html("Goodbye world!");
```

There are two things about the example above that make jQuery easier to use:

  1. jQuery is using the same syntax as CSS to select elements

  2. jQuery allows us to chain methods together to accomplish our goals (i.e., $().html(...) ), making code shorter and easier to understand

<br>

#### Appending a DOM element to a page

If we want to add a new DIV with a P within it, that also has some text within it, our vanilla JavaScript would have to be:

```
    var myDiv = document.getElementById('container');
    var newP = document.createElement('p');

    newP.innerHTML = "Hello complicated, multi-step world of adding an element to the DOM!";
    myDiv.appendChild(newP);
```

And in jQuery, it looks like this:

```
	$('#container').append("<p>").append("Hello simple insertion using jQuery chaining");
```

In the jQuery code example above, we first select the DIV with `id="container"`, then we append a new paragraph element (automatically created using core jQuery selector function), and then we append the text we want to insert to the new paragraph element we just created.

In this case, `append()` created the `p` for us.

<br>

#### Modifying Styles (CSS) Using jQuery

You can do more than select elements and modify content. You can also create or update CSS style attributes in jQuery using the `.css()` method

```
$("#container").css("color", "red");
```

The code above will change the color of all text inside the DIV with id="container" to red.

Or, if we have a bunch of elements that all have the same class (in this example, it's class="info"), we can use the class selector to modify the color of all of them at once:

```
$(".info").css("color", "blue");
```

<br>

#### Modifying an element with more than one line of CSS

To use `.css()` with more than one line of CSS to add, the syntax is slightly different. We put all of our CSS commands into an object:

```
$("#container").css({ 'background-color':'cornflowerblue', 'font-size':'30px' });
```

However, it's usually better to change the css of an element by adding an existing class.


### Adding a class

An existing class within `style.css`

```
.hotpink {
  font-size: 90px;
  color: #ff69b4;
  background-color: red;
}
```

Add it with jQuery:

```
  $("#container").addClass('hotpink');
```

<br>

#### Removing Elements Using jQuery

`.remove()` will remove an element and all its contents.

`.empty()` will remove all the content from an element, but the element will remain.

<br>
<hr>

## jQuery arrays and `.eq()`

When you return a jQuery object that contains many other jQuery objects, such as a list of elements with same class, you will get back an array.

But _be careful_ because if you try to access it like an ordinary array using brackets, the object will revert to a 'vanilla' one.

```
  var infoElements = $('.info');

  infoElements[0].text("Heeey!");
```

![](https://i.imgur.com/hhCogRU.png)

To main its 'status' as a jQuery object (and not convert it to a 'vanilla' one), use `.eq()`.

```
var infoElements = $('.info');

infoElements.eq(0).text("Heeyeeee");
```

* Use `.eq()` to select jQuery 'array' elements.

<br>
<hr>

## Creating a complicated DOM object

### Set attributes with `.attr()`

Let's reinforce our DOM creation pattern.

Let's make a third 'section' like this:

![](https://i.imgur.com/W9l21Ir.png)

![](https://i.imgur.com/RThOwoR.png)


* Make a section and give it a class 'info'

```
var $section = $('<section>').addClass('info');
```

* Make a p and give it some text

```
var $p = $('<p>').text('Here be some drainage');
```

* Make an img and give it an attribute `src` with the property of the image url

```
var $img = $('<img>').attr('src', 'http://www.calgary.ca/CSPS/ABS/PublishingImages/2010-1155_00013525_10790.jpg');
```

* Append the p and the img to the section

```
$section.append($p);
$section.append($img);
```

* Append the $section the container

```
$('#container').append($section);
```

* Oops! We forgot the give the img an id:

```
$img.attr('id', 'third-image');
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
