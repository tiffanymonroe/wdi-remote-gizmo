# Combining data types and Callbacks

## Lesson Objectives

1. Understand what ```this``` is.
1. Review object methods
1. Create Objects


## Setup

1. Inside `student_examples` directory for today make a directory called `oop_objects`
2. Inside the `oop_objects` directory, add an `index.html` and an `app.js` inside a javascripts folder and link them together.
3.  Add a `console.log()` to your `app.js` and check to see that it is loading in your chrome console.



### ```this```

1.  ```this``` refers to the object that is invoking the method.

```
const foo = {
  value: 12,
  getValue() {
    return this.value;
  }
}
```

```console.log(foo.getValue());```

output = `'12'`

question:  What object is `this` in getValue referring too.

1. console.log `this` inside the getValue function.
2. Create an object called person that has a property called `name` and a method called `getName` that when called returns the value of the `name` property.


### More `this`

In Javascript, everything belongs to an object. We use this to tell us what object we are currently in. This is called context, not to be confused with scope.

In the the Chrome console, we can type this, and ask: To what object does everything in the browser belong?

The result is the `window` object. 



Try this out:

```
const taco = () => {
  console.log(this, ' this is with arrow functions');
}
```
1.  What is `this` referring to now.

### Lets play with Intervals



```
const game = {
  start(){
    const gameTimer = setInterval( () => {
      console.log('hi', this)
    }, 1000);
  }
}
```

1.  add a property to the `game` object called `timer` and set the value equal to 10.
2.  edit the start method to decrease the value of `time` every second by the value of 1.
3.  add a conditional inside of the `setInterval` that checks to see if the value has reached 0, if it has `console.log` the `"gameover"`.  Then clear the interval.  Hint: "look up how do I stop an interval or 'clear!' an interval".

## activity

1. Create a player object 
2. Add properties of score, name, and lives.
3. Make the `score` a value of ten.
4. use prompt to get the users name in the `name` property.
5. set the `lives` property equal to 3.
6. Add a method that increases the persons score.
7. Add a method that will either decrease or increase the `health` depending on an argument you pass that method.
8. Access all the properties using dot notation, and bracket notation.  


### Amazon model

1. Lets model an object after a amazon clothing page.

















