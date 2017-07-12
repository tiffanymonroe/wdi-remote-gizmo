![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---

Title: Stopwatch<br>
Type: morning exercise <br>
Duration: 45 - 60 mins<br>
Modified by: Kristyn Bryan
Topics: jQuery, event handlers, setInterval<br>

---

# Stopwatch

You'll be building a stopwatch this morning. You have been given some html and css, but you will only be focusing on the functionality (the javascript).

## Task

1. Using `setInterval`, make it so that the stopwatch will run! The timer should count in seconds.

## Setup

1. Navigate to your `student_examples` folder.
2. From inside your `student_examples` folder for today, create a directory called `stopwatch_practice`.
3. Navigate inside the `stopwatch_practice` folder and copy the stopwatch files which are located in the `stopwatch` directory in today's `morning_exercise` folder.
Ex: `cp -r ../../morning_exercise/stopwatch .`
4. Open the `index.html` in your **browser**.
5. Open the `app.js` file in your **text editor**

## Resources

1. `app.js` - Listeners have been placed on the stopwatch buttons. Event handlers for the buttons have been defined. **Fill in the event handlers.**

2. `index.html` & `style.css` - Styles, font, jQuery, and app are all linked and ready to go. Open `index.html` in your browser so that you can click the buttons and look at the display change as you code.

![stopwatch view](https://i.imgur.com/5mxdArj.png)

## Directions

1. Make it so that when you click the **start** button, the stopwatch timer will increase by 1 every second.

**Remember to build and test your handler piece by piece.**

* First, console.log a message upon click.
* Then, console.log the stopwatch text.
* Then, make it so the timer will increase by 1 each time you click.
* Then, use `setInterval` inside the handler to increment the timer every 1000 milliseconds

_Hint:_ The content of the stopwatch is **text**. How can you turn that text into a number so that it can be incremented?

_Note:_ Pseudocode for **setInterval**

```
setInterval(CALLBACK, MILLISECONDS);
```

Example **setInterval** from the pseudocode:

```
setInterval(() => {
	console.log('hi');
}, 1000);
```

[setInterval on w3 schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)

<br>
<hr>

## Hungry for More?

### Stop Button

1. Make it so that when you click **stop**, the timer will stop counting. Use `clearInterval` to stop your previous `setInterval`.

[clearInterval on w3 schools](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

### Reset Button

1. Make it so that when you click **reset**, the timer will stop and reset to `0`.

### Countdown Button

1. Make it so that when you click the **countdown** button, the timer will start counting down from its current time.
