
![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Intro to jQuery<br>
Duration: 30 mins<br>
Creator: Thom Page<br>
Topics: DOM manipulation with jQuery<br>

---

# Lesson Objectives

_after this lesson, students will be able to__

* Load jQuery from a CDN
* Perform basic jQuery commands

<br>
<hr>

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

**Check if jquery is installed AND is available to your script**

Write `$` in your script file. If you get an error, jQuery is not available to your script, and you will have to debug the reason why.

Usually this is because you have placed your script file before your jquery file. 

jQuery file goes first. It makes sense that the jQuery code has to be loaded before you can use it.

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

## window onload function 

**You can put your scripts in the head if you use a window onload**

We can put our javascript code inside a window onload function so that it will wait until the DOM has loaded.

**Scope protection:** The window onload also doubles as a protection layer for the global scope. Nothing written in the window onload function is global.

* jQuery window.onload - waits for all the HTML to be parsed

```javascript
$(() => {
	// stuff
}
```

<br>

* **Grab an element by id**

```javascript
const elem = $('#idName');
```

Is translated into `document.querySelector` under the hood.

<br>

* **Generate an element**

```javascript
const newElem = $('<div>');
```

Is translated into `document.createElement()` under the hood.

<br>

* **Append an element to the body**


```javascript
$('body').append(newElem);
```

Is translated into `document.body.appendChild(newElem)`

<br>

**Add text to an element**

```javascript
newElem.text('the square of the hypotenuse is equal to the sum of the squares of the other two sides');
```

<br>

&#x1F535; **Activity (7 min)**


REFER TO THE JQUERY CHEAT SHEET

* Add the jQuery library to your project
* Test that it is installed with `$`
* Write in the jQuery window onload if your scripts are in the head

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

## References

* [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
* [DOM CheatSheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
