![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Afternoon Lesson<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Global, local, block scope, more functions, testing code in layers<br>

---

# Lesson objectives

_After this lesson students will be able to:_

* Differentiate between global and local scope
* Invoke a function within a function
* Use `const` and `let` for block-scoping

---

## Setup

In `student_examples` for today, make a file `scope.js`

Test that a console.log will appear in Terminal when you run the file.

```
$ node scope.js
```

<br>
<hr>

3:05
# SCOPE

Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its _scope_, it will be undefined.


## Block Scope

**`let`** and **`const`** will scope your variables to the **block** in which they are declared.

Example -- make a block and declare a variable within:

```javascript
{
	const item = 'spicy meatball';
}
```

`item` is available inside the block, but not available outside.

This works:

```javascript
{
	const item = 'spicy meatball';
	console.log(item);
}
```

> => "spicy meatball"

This doesn't:

```javascript
{
	const item = 'spicy meatball';
}

console.log(item);
```

> ReferenceError: item is not defined


**`var`** by contrast will leak out of a block.

```javascript
{
	var item = 'spicy meatball';
}

console.log(item);
```

> => "spicy meatball"

This is not so great. In general, we want to control our scope as tightly as possible. If we don't, we can end up with variable collisions. This is why we stick with `let` and `const`.

<br>
<hr>

3:15
## Scope: functions

Our variables will be scoped to blocks. This includes the curlies `{}` provided by while loops, for loops, conditionals, etc. It also includes the curlies `{}` provided by functions.  

```javascript
const setItem = () => {
	const item = 'spicy meatball';
	return item;
}
```

The value of the `item` variable is not accessible outside the function.

If we try to access it outside of the function:

```javascript
const setItem = () => {
	const item = 'spicy meatball';
	return item;
}

console.log(item);
```

![](https://i.imgur.com/KJniVJ3.png)

We get a reference error, because `item` is not defined in the scope in which we used the console.log.

If we run the function first, the value of `item` is _still_ not set outside of its scope:

```javascript
setItem();
console.log(item);
```

As a natural consequence, functions cannot access variables stored in **sibling** functions.

If we make another function:

```javascript
const setItem = () => {
	const item = 'spicy meatball';
	return item;
}

const getItem = () => {
	return item;
}

console.log(getItem());
```

![](https://i.imgur.com/xNQ689Y.png)

The `item` variable is not visible inside `getItem`, because it is scoped only to `setItem`.

<br>
<hr>
3:25

## Scope: Loops

Using `let` within a for loop control panel scopes the variable to the block.

```javascript
for (let i=0; i < 100; i++) {
	console.log('Inside the block: ', i);
}

console.log('Outside the block: ', i);
```

> Inside the block: 1
>
> Inside the block: 2
>
> etc.
> 
> Outside the block: Reference error: i is not defined

<br>
<hr>
3:35
## Scope: Conditionals

Using `let` or `const` within conditional blocks will scope to the block (no surprises there).

```javascript

if (true) {
	const num = 100;
	console.log(num);
}
```
> => 100

```javascript
if (true) {
	const num = 100;
}

console.log(num);
```

> => Reference error: num is not defined


What if we want multiple blocks to have access to a variable?

<br>
<hr>

# GLOBAL SCOPE

When variables are declared outside of any enclosing blocks, the value of the variable is accessible to all other blocks and functions (and all blocks and functions within those functions). There is no restriction or exclusivity.

```
var globalMessage = "Defined globally";

var getString = function() {
	return globalMessage;
}

console.log(getString());
```

> => "Defined globally"

```
var globalMessage = "Defined globally";

var getString = function() {
	return globalMessage;
}

var alsoGetString = function() {
	return globalMessage;
}


console.log(getString());
console.log(alsoGetString());
```

> => "Defined globally"
>
> => "Defined globally";



RECAP:

* Global scope is the the part of your code _outside_ of a function
* Local scope is the parts of your code that are _inside_ functions

GOTCHA:

Functions themselves are defined within a scope.

In which scope have our functions so far been defined?

<br>
<hr>

3:50
## Local scope

<br>
<hr>

## Functions can call other functions

One result of scope is that functions can call other functions. A function may use the **return value** of another function. This is a good strategy for compartmentalizing functionality.

Let's build two interacting functions from the ground up.

&#x1F535; **Activity**

* Write a function that will return **true** if a number is a **perfect square** AND is evenly divisible by 3.

* Write another function that will loop up to an arbitrary limit (say, 100), and console log whether each number is a perfect square and is evenly divisible by 3. Call upon the previously defined function.


<br>
<hr>

## POLLUTION

You do not want your global scope to be **polluted**. There are reason for not polluting your global scope.

* Global variables can be overwritten or misconstrued elsewhere
* Potentially causing unwanted, hard to track bugs
* Namespace
* Memory / garbage collection

http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted

<br>
<hr>

# EXTRA STUFF

## `var`

`var` is what gives a variable its **function scope**. If you omit `var`, the variable will be automatically considered scope-less (It will behave as if it were global after it has been defined).

Always use `var` to avoid weird scoping errors, including when setting the start parameter of your _for loops_. If you have a _for loop_ inside a function, you will want the values of the loop not to pollute the global scope.

&#x1F535; **Code**

```
var list = function() {
	for (var i=0; i < 10; i++) {
		console.log(i);
	}
}

list();

// global scope
console.log('Value of i: ', i);
```

Omit `var` and see the difference.

<br>
<hr>

4:05

## VAR AND HOISTING (7 mins)

Why save a function to **var**? What about this alternative syntax:

```
function noVarHere() {
	// stuff
}
```

This syntax is called a **function declaration**. The reason why we are not using **function declarations** for now is due to _hoisting_.

Hoisting is when Javascript moves all declarations to the top of the current scope, allowing you to _use_ code seemingly out of order. When you declare a function using the above syntax, the declaration is _hoisted_, meaning you can invoke the function before it has been defined:

```
outOfOrder();

function outOfOrder() {
	console.log("beans");
}

=> "beans"

// the function can be invoked before it is defined
```

This is fine, but we want you to think about the sequence of your code. Let's write our functions as _function expressions_ for now, the way we have been doing:

```
funcExpression();

var funcExpression = function(){
  console.log("beans");  
}

=> TypeError: funcExpression is not a function

// the function cannot be invoked before it is defined
// better to keep things in order for now
```

If you are really interested in the fine details of function expressions vs declarations, have a read [here](http://stackoverflow.com/questions/336859/javascript-function-declaration-syntax-var-fn-function-vs-function-fn)

<br>

&#x1F535; **Activity (4 min)**

* Write a simple function that can be invoked before it is defined
* Change this function so that it cannot be invoked before it is defined

<br>
<hr>

## ARGUMENTS

If we supply fewer arguments than the function expects, the function will still run, but will result in `undefined` or result in errors related to undefined values.

```
var blep = function(param1, param2) {
	console.log([param1, param2]);
};
```

```
blep("mlem");
=> ["mlem", undefined]
```

If we supply more arguments than the functions expects, the function will still run, and will ignore the extra arguments.

The upshot is that we can invoke a function with as many or as few arguments as we choose, and the function will run. Whether or not it _behaves_ correctly is up in the air.

<br>

&#x1F535; **Activity (7 min)**

**Research**

There is a way to list all of the arguments passed to a function. It is called `arguments`. Research `arguments` and use it to log the _number of arguments_ passed to a function.

<br>
<hr>


## PRIORITY

What if you have a global variable with the same name as function parameter? Which one will the function use?

Example

```
var name = "Thomas P";

var printName = function(name) {
	console.log(name);
}

printName("Darth Vader");
```

The argument passed to the function takes priority over the globally scoped `name` variable.

Locally scoped variables take priority in a function over globally scopes ones.

always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables are function scoped (local) and which are resolved on the scope chain.

<br>
<hr>



## INVOKED VS REFERENCED FUNCTIONS

If you try to run your function without a `()`, you will see the function itself appear.

![referenced](https://i.imgur.com/48sQMnG.png)

Invoked function, runs immediately:

```
callFunc();
```

Referenced function, does not run (yet):

```
callFunc;
```

We will learn more about _referenced_ functions we talk about **callbacks**. For now, invoke your functions to get them to work.

<br>
<hr>


## The Math object

Javascript has a built-in object called **Math** that contains useful methods for performing mathematical operations.

For example:

```
console.log(Math.PI);
```

> => 3.141592653589793

```
console.log(Math.floor(3.141592653589793));
```

> => 3

```
console.log(Math.floor(Math.PI));
```

> => 3

#### Math.random()

- Get a random decimal between 0 and 1 (excluding 0 and 1)

```
Math.random();
=> .229375290430
```

- Get a random decimal between 0 and 10 (excluding 0 and 10)

```
Math.random() * 10;
=> 9.536103100981563
```

- Get a **whole number** between 0 and 10 (including 0 and 10), rounding down with `Math.floor()`:

```
Math.floor( Math.random() * 11 );
```

- Get a whole number between 1 and 10 using `Math.floor()` to round down

```
Math.floor( Math.random() * 10 ) + 1;
```

## Research

Math docs on MDN:

> [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

&#x1F535; **Research (5 min)**

RESEARCH

* Find and use a Math method to find the square root of a number.
* Find the square root of PI.
* Find and use a Math method to raise 5 to the power of 4 (exponentiation).
* Use Math.Random to simulate a roll of two six-sided die. (2-12)


## An aside on numbers

Javascript is **not** good with numbers: it uses floating-point arithmetic which (in base-2 with hardware limitations), leaves us with rounding errors.

```
0.1 + 0.2
=> 0.30000000000000004
```

Javascript is considered accurate up to about 15 digits

16 digits:

```
9999999999999999;
=> 10000000000000000;
```

You can read more [here](http://floating-point-gui.de/)

<br>
<hr>