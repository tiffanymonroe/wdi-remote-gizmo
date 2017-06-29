![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Afternoon Lesson<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Global, local, block scope<br>

---

# Lesson objectives

_After this lesson students will be able to:_

* Use `const` and `let` for block-scoping
* Differentiate between global and local scope

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

Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its _scope_, it will not be defined.

## BLOCK SCOPE

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

This is not so great. In general, we want to control our scope as tightly as possible. If we don't, we can end up with variable collisions and accidental overwrites. This is why we stick with `let` and `const`.

<br>
<hr>

3:12

## Scope flow: outside in

We know if we declare a variable inside a block that it is not accessible outside.

If we declare a variable outside a block, is it accessible inside?

```javascript
const words = 'that\'s a...';

{
	const item = 'spicy meatball';
	console.log(words);
	console.log(item);
}
```

> => that's a...
> 
> => spicy meatball

<br>
<hr>

3:15

## Scope flow: blocks within blocks

Following the same logic, can we access variables in a block that have been declared in an outside block?

```javascript

const words = 'that\'s a...';

{
	const item = 'spicy meatball';
	const start = 'mama mia!'
	{
		console.log(start);
		console.log(words);
		console.log(item);
	}
}
```

> => mama mia!
> 
> => that's a ...
>
> => spicy meatball

3:20

&#x1F535; **Activity (5 mins)**

Declare a variable and try to access it from a scope where it **cannot** be accessed (verify that it cannot be accessed).

&#x1F535; **Activity**

What if ...? What if you omit `let` or `const` when declaring your variable? Run some tests on accessibility. Accessibility within a block, outside a block, etc.

<br>
<hr>

3:25

## Scope: functions

Our variables will be scoped to blocks. This includes the curlies `{}` provided by while loops, for loops, conditionals, etc. It also includes the curlies `{}` provided by functions.  


If JavaScript works as expected, the `item` variable should flow into the `setItem` function:

```javascript
const item = 'spicy meatball';

const setItem = () => {
	return item;
}

console.log(setItem());
```

> => spicy meatball

What if we put it inside? Is it accessible outside?
 
```javascript
const setItem = () => {
	const item = 'spicy meatball';
	return item;
}
```

The value of the `item` variable is not accessible outside the function (outside of the curlies `{}`).

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

3:35

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

&#x1F535; **Activity (6 mins)**

Write a for loop but use **var** instead of **let**. Verify: is the variable accessible outside the loop after it has run?

Verify: is the variable accessible outside of the loop when you use neither **var** nor **let** ? (nor **const**).

Verify: is the variable accessible outside of the loop with **let**?

Verify: What about a **let** variable defined within the block of the loop?

3:48

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

Knowing what we know about block scope, can we write code like this?

```javascript

const age = 21;
let message = '';

if (age < 21) {
	message = 'You cannot buy the beer';
} else {
	message = 'You can buy the beer';
}

console.log(message);
```

> => You can buy the beer

<br>
<hr>

3:56

# GLOBAL SCOPE

When variables are declared outside of any enclosing blocks, the value of the variable is accessible to all other blocks and functions (and all blocks and functions within those functions). 

This is called **Global scope** and is generally speaking a bad thing.

# LOCAL SCOPE

When variables are declared inside a function or block, they are scoped **locally** to that particular function or block.

Note: **var** scopes to functions only.

* Global scope is the the part of your code _outside_ of any enclosing blocks or functions
* Local scope is the parts of your code that are _inside_ blocks and functions.

Everything is defined within a scope.

In which scope have our functions so far been defined?


## POLLUTION

You do not want your global scope to be **polluted**. There are reason for not polluting your global scope.

* Global variables can be overwritten or misconstrued elsewhere
* Potentially causing unwanted, hard to track bugs
* Namespace
* Memory / garbage collection

http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted


<br>
<hr>

4:03

## Functions can call other functions 

Functions can call other functions that reside in an accessible scope. A function may use the **return value** of another function. This is a good strategy for compartmentalizing functionality.

Let's build two interacting functions from the ground up, both will be defined in the global scope:

&#x1F535; **Activity**

* Write a function `checkSquare` that will return **true** if a number is a **perfect square** (Check if the square root is a whole number).

* Write function `checkToLimit` that will loop up to an arbitrary limit brought in as a param (say, 100), and console log whether each number is a perfect square. Call upon the previously defined `checkSquare` function.

<br>
<hr>

4:15

## ADVANCED: Functions can call themselves

A function has access to **itself** because it is always declared in a scope accessible to itself.

When a function invokes itself, this is called **recursion**.

```javascript
const func = () => {	
	return func();
}
```

This will create a **loop**. This particular loop is infinite because it has no **exit condition**.

This function has an exit condition and can safely call itself:

```javascript
const countdown = (num) => {
	if (num == 0) return;
	console.log(num);
	return countdown(num - 1);
}
```

See if you can figure out how it works.

<br>
<hr>

# EXTRA Stuff:

## The Math object and numbers

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