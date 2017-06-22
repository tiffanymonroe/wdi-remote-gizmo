![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: jQuery click events<br>
Type: Lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page<br>
Topics: jQuery click events<br>
<hr>

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

- click on DOM elements and run procedures with jQuery `.on()`
- explain the difference between a listener and a handler
- distinguish between anonymous vs named function references

<hr>

### SETUP

* In the `student_examples` directory for today
* Make a _directory_ called `click_events`
* Inside the `click_events` directory, make: `index.html`, `app.js`, and `style.css`
* Link them together
* Include the jQuery CDN from `https://code.jquery.com/`
* Write a console.log into `app.js`
* Load the `index.html` into your browser
* Check in the developer console that the console.log appears and that the files are linked together
* Check that jQuery has installed with `$`

<br>
<hr>

2:40
<br>
<hr>

# BROWSER EVENTS

Every kind of interactivity in the browser is an event: clicks, mouseovers, key presses, scrolling, resizing, loading the page, and more.

When you interact with the browser it checks to see if there is a _listener_ for that interaction.

If there is a _listener_ present, the browser will try to run any _handlers_ for those interactions.

A _handler_ is just a function that runs a desired procedure.

<br>
<hr>

## Click event with `.on()`

How can we set up a _click_ event?

We need:

1. An element to set it on
2. A _listener_ that listens for the event: on _which element_ should the event take place
3. A _handler_ that runs the procedure we want to have happen when the event is triggered


Make a button in the html:

```
<button id="btn">Click me<button>
```

Grab the button in the JS (DOM element):

```
var $btn = $('#btn');
```
<br>

**EVENT LISTENER**

Set an event listener:

Use `.on()` [.on() documentation](http://api.jquery.com/on/)

```
$btn.on('click');
```

The event listener takes a string as an argument. There are just a few strings that it will recognize as valid events, and 'click' is one of them.

[List of events](https://developer.mozilla.org/en-US/docs/Web/Events)

<br>

**EVENT HANDLER**

Add a _function_ that runs what we want to have happen. This function is what _handles_ the event and is called an _event handler_:

```
$btn.on('click', function() {
	console.log('button was clicked!!');
});
```

Notice that we have supplied a function as an argument. The jargon for using a function as an argument to another function is `callback`.

pseudo code for an event listener

```
elem.on(STRING, CALLBACK);
```

<br>

**ADD TEXT TO THE PAGE ON CLICK**

```
$btn.on('click', function() {

	$('body').append("It seems as if it has been clicked!");

});
```


&#x1F535; **Activity (10 min)**

* Add a button to your `index.html` with an id of `btn`

* Make it so that when you click the button, a console.log will appear in your browser's javascript console that says `My click event works!!!`

* Whenever you make a click event, always test it with a console.log to make sure that it works.


&#x1F535; **Extra Activity**

* Make it so that when the button is clicked, a message will appear on the page instead of just inside the console. _example:_

Create a paragraph inside the click handler:

```
var $p = ('<p>').text("Here is some text!!!!!");
```

Append the paragraph to the page:

```
$('body').append($p);
```

&#x1F535; **Extra Activity**

* Make it so that when the button is clicked, an image will appear on the page.

&#x1F535; **Extra Activity**

* Experiment with setting more than one listener on the same element. How would you go about doing that?

<br>

2:50

&#x1F535; **Demo and Ask (5 min)**

* Look at solutions to the activity

* What is the difference between an event _listener_ and an event _handler_ ?

<br>
<hr>

3:00

## NAMED AND REFERENCED FUNCTIONS

### Using a named, referenced function as the click handler for the listener

The _handler_  that we used for our click was _anonymous_. It was a function that had no name. We just told the listener to run an _anonymous_ function. We can give our function a name and thereby reuse that function with other event listeners.

Here is the pattern we have already seen:

```
<button id="btn">Click for message</button>
```

```
var $btn = $('#btn');

$btn.on('click', function() {
	var $p = $('<p>').text("THE EARTH IS AN OBLATE SPHEROID");
	$('body').append($p);
});
```

3:05

#### NAMED FUNCTION

We can abstract the anonymous function out and give it a name:

Separate function, not inside the listener:

```
var addText = function() {
	var $p = $('<p>').text("THE EARTH IS AN OBLATE SPHEROID");
	$('body').append($p);
}
```

We can then reference it in the event Listener:

```
$btn.on('click', addText);
```

With a named function, we can use the same handler for more than one DOM element.

3:10

#### REFERENCED FUNCTION

Note that we do not invoke the function with parentheses. We do not want to invoke the function right away, we merely want to _reference_ it to be invoked when the listener runs it.

* The function should be defined before it is used in the event listener
* When the function is invoked inside the event listener **leave out the parentheses**. We do not want to invoke the function right away! We merely want to reference that function in the listener.

Here the function is invoked and will run immediately:

```
$btn.on('click', addText());
```

We don't want this! We only want the function to run when the user has clicked on the button.

Complete code:

```
var $btn = $('#btn');

var addText = function() {
	var $p = ('<p>').text("THE EARTH IS AN OBLATE SPHEROID");
	$('body').append($p);
}

$btn.on('click', addText);
```

Let's do something fancier, and toggle the background-color of the page using `.toggleClass()`

```javascript
var changeClass = function() {
  $('body').toggleClass('black');
}

$('#btn').on('click', changeClass);
```

CSS

```
.black {
  background-color: black;
}
```

3:15


&#x1F535; **Activity (15 min)**

* Separate an anonymous handler function from one of your event listeners, and make it a named function instead.  
* Make it so that the named handler will run when the button is clicked. (Remember to make sure the function is _referenced_ and not _invoked_ when you set it on the listener).
* Make it so that the click will work only after the user has clicked.

&#x1F535; **Extra Activity**

Make it so each time click the button, that background-color of the page will toggle.

&#x1F535; **Extra Activity**

* Add yet another button, and make it so that when this extra button is clicked, it will run the exact same handler as your previous button.

&#x1F535; **Extra Activity**

* Make it so that when you click either of these buttons, an image will toggle on and off the page. There is no toggleImage method so you'll have to do it programmatically. Click once = message appears. Click again = message disappears. Click again = message reappears, etc. _Hint:_, you can use a global variable boolean and toggle it upon click.

3:25

<br>
<hr>

&#x1F535; **Ask (5 min)**

* What is the difference between a named vs anonymous function?
* What is the difference between an invoked vs a referenced function?
* What is the difference between an event listener and an event handler?
* When would you want to use a named function over an anonymous one?

<br>
<hr>

### mouseenter and mouseleave

There is a special jQuery method for hover. We can replicate it using `.on()` by making an event for `mouseenter` and a separate event for `mouseleave`

```
  $('#some-div').on('mouseenter', function() {
    $('body').css('background-color', 'red');
  });

  $('#some-div').on('mouseleave', function() {
    $('body').css('background-color', 'white');
  });
```

* How would we re-arrange this to make our anonymous functions named functions?

<br>
<hr>
