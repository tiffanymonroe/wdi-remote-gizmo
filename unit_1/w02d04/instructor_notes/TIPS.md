# Tips and Tricks

## Lesson Objectives

1. Use the Javascript Debugger in the Browser
1. Use the Javascript Debugger in Node
1. Use Proper Indentation
1. Name Variables Semantically
1. Define Functions at the Top of the File
1. Comment Code Properly
1. Use Common Programming Principles
1. Describe How to Read Errors
1. Coerce Data Types

## Use the Javascript Debugger in the Browser

A debugger allows you to stop execution of your program to examine variables at any point using the `debugger` keyword

```javascript
const a = 2 + 2;
debugger
console.log(a);
```

1. Right click on page and choose Inspect
1. Click on sources (you may need to refresh the page to have files show up)
1. Click the blue play button to continue to next debugger statement
1. Use the console to examine variables (or you can hover over their names in the source code)

![browser debugger](https://i.imgur.com/C0F2tTB.png)

## Use the Javascript Debugger in Node

You can execute in node with `node debug test.js`

- Type `c` to continue to next debugger statement
- Type `quit` to quit
- Type `repl` to examine variables

## Use Proper Indentation

Always indent your code.  If a chunk of code is being execute under a certain condition (if/else, loops, functions), that condition owns that chunk of code.  Show ownership with indentation

```javascript
//good
if(true){
    const a = 2 + 2;
    console.log(a);
}

//bad
if(true){
    const a = 2 + 2;
console.log(a);
}

//bad
    if(true){
    const a = 2 + 2;
console.log(a);
    }
```

This is the case if you have nested loops, if/else

```javascript
if(true){
    if(false){
        console.log('hi');
    }
}
```

## Name Variables Semantically

- Be descriptive with variable names
- Better to have to copy/paste a long variable name than get confused later on.

```javascript
const a = 1 + 2 + 3; //bad
const sumOfThreeNumbers = 1 + 2 + 3; //good
```

## Define Functions at the Top of the File

It might work for you to have you functions group together at the top.  This way you know all your functions will be defined before they're called.

Good:
```javascript
const foo = ()=>{
    console.log('foo here');
}
const bar = ()=>{
    console.log('bar here');
}

foo();
bar();
```

Bad:
```javascript
const foo = ()=>{
    console.log('foo here');
}
foo();

const bar = ()=>{
    console.log('bar here');
}
bar();
```

## Comment Code Properly

- Comment every line!
- Users should be able to know how everything works just by reading comments

```javascript
//defining describePerson
//params: name (string), age (int)
//returns nothing
//summary: console logs an english string consisting of the person's name and how old they are
const describePerson = (name, age)=>{
    const finalString = name + " is " + age + " years old."; //create the message
    console.log(finalString); //log the message
}
```

## Use Common Programming Principles

This has some great principles.

http://www.artima.com/weblogs/viewpost.jsp?thread=331531

Most important:

- DRY
    - Don't Repeat Yourself
    - Use a function instead of copy/paste
- Start small
    - Write the smallest amount of code possible that you can test
    - Don't write large chunks of code all at once
- Separation of concerns
    - Encapsulate one chunk of functionality in its own function
        - This abstracts away all the nitty gritty, giving the user (the other programmers) an interface
        - User only needs to know how to use the function, not how it works (like a remote control)
    - Keep things compartmentalised
    - One chunk of functionality should do only its job and not have to know about or do anything else

## Describe How to Read Errors

- In general, look at the line number specified and any variables mentioned
- Look above the line number mentioned too for syntax errors

## Coerce Data Types

### Equality

Don't use `==`.  Use `===`

When doing this, sometimes you'll need to change a variables datatype

```javascript
const a = '1'

if(a === 1){ //will be false
    console.log('should not execute');
}

if(parseInt(a) === 1){
    console.log('parse int works');
}
```

In general, you can convert between data types like so:

- `parseInt()` tries to convert a value to an integer
- `parseFloat()` tries to convert a value to a float
- `.toString()` can be appended to pretty much whatever to turn it into a string
- `isNaN()` will tell you if you have a value that is NaN (e.g. 0/0 and other weird math)

### Combining values

- Weird things happen when you accidentally combine values together that are not the same data type
- Always convert values to the correct data type and then combine.  Don't leave it up to javascript to guess what you want

```javascript
console.log(5 + '5'); //'55'
console.log(5 + parseInt('5')); //10
```

Always make sure you know what your data types are:

```javascript
const a = "1";
typeof a;
```
