![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Morning Lesson<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Built-in Methods, Functions (Arrow Functions)<br>

---

# Lesson objectives

_After this lesson students will be able to:_

* Use built-in methods on Strings and Arrays
* Chain methods together
* Write a function with a parameter
* Write a function with multiple parameters and a return value

---

## Setup

In `w01d04/student_examples` make a file `morning_code.js`

Test that a console.log will appear in Terminal when you run the file.

```
node morning_code.js
```

<br>
<hr>

11:05

## String and array methods

**Refresher**

A method can be chained to a variable to perform an action. Example:

```
var message = "hello there";

console.log(message.toUpperCase());
```

> => "HELLO THERE"

`.toUpperCase()` is a **method**.

<br>


## Datatypes

There are different methods for different **datatypes**.

Strings have different methods than arrays. In general, you can't use array methods on strings and vice versa.

Example of an **array** method:

```
var letters = ['A', 'B', 'C', 'D'];

console.log(letters.join(''));
```

> => ABCD

`.join()` is a **method**, but it is only for arrays.


It will not work on a string:

```
var letters = "ABCD";

console.log(letters.join(''));
```

![](https://i.imgur.com/Ire2ntQ.png)

> Here, `letters.join` is not a function because `.join` is not a method you can use on strings. See: TypeError


**.length is a method you can use on both strings and arrays**

<br>

## Methods can change the datatype

If we use `.join('')` on an array as intended:

```
var letters = ['A', 'B', 'C', 'D'];

console.log(letters.join(''));
```

It will however output a **string**. Be mindful of this when it comes to **chaining methods**.

For example `.reverse()` is an **array** method.

```
console.log(letters.join.reverse());
```

![](https://i.imgur.com/NuPCUDB.png)

It will not work because the result of `letters.join('')` is a string.

<br>

## Chaining methods

You can chain methods together:

```
var str = "doodly doo";

console.log(str.split('').length);
```

> => 10

**Be mindful of datatypes**

This will not work:

```
var str = "doodly doo";

console.log(str.split('').toUpperCase);
```

![](https://i.imgur.com/LDYjytH.png)

&#x1F535; **Why Not?**

Notice the error says `TypeError`. This is a big indicator as to what the problem is.

We are trying to use `.toUpperCase()` on the wrong type of data. In this case, we are trying to use it on an array, when it is not an array method. It is a string method.

11:20

&#x1F535; **Activity**

RESEARCH

How can you reverse a string?

* Try to use `.reverse()` on a **string**. Does it work?

* If it does not work, what is the error telling you?

* Try to use `.reverse()` on an array instead. Does it work?

There is no `.reverse()` method for strings, but there _is_ one for arrays.

Using method chaining, figure out how to turn a string into an array, reverse the array, and turn the reversed array back into a string. This is one way to reverse a string. Chain the methods together on one line.

[Some string methods](https://www.w3schools.com/js/js_string_methods.asp)

[Some array methods](https://www.w3schools.com/js/js_array_methods.asp)

<br>

&#x1F535; **Extra**

Look into `regular expressions` and the [.match()](https://www.w3schools.com/jsref/jsref_match.asp) method. Use `.match()` only to select parts of a reversed string that match a pattern.

&#x1F535; **Extra**

Start in on this [regular expressions](https://regexone.com/) exercise.

<br>
<hr>

11:30
<br>
<hr>



# CONTROL FLOW

There are three kinds of **control flow**

* Loops
* Conditionals
* Functions

Functions are the third and final type of **control flow** along with conditionals and loops.

Control flow is a means by which we can alter the flow of our code. The **executed** code will be in a different order than code we have **written**, which typically runs in a pedestrian line-by-line way.

## Control Flow recap

### BLOCK

Conditionals _skip_ lines of code within a block `{ ... } ` if a condition is not true:

```
if (BOOLEAN EXPRESSION) {
	// code might get skipped
}
```

Loops _repeat_ lines of code within a block `{ ... }` according to our instructions:

```
while (BOOLEAN EXPRESSION) {
	// code is repeated
}
```

We can also control the flow of our code with functions. Functions act like variables and **store** code within a block `{ ... } ` for use later, and for repeated uses.

```
var something = function() {
	// code to execute later
}
```

### WHY FUNCTIONS?

Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

<br>
<hr>

11:35

# FUNCTIONS

## DEFINING A FUNCTION

&#x1F535; **Code-Along (3 min)**

Write a function that logs "Boo!" to the console.

```
var printBoo = function() {
	console.log('Boo!');
};
```

<br>
<hr>

## INVOKING A FUNCTION

```
printBoo();
printBoo();
printBoo();
```

Simply use the name of the variable and use **parentheses** to invoke the function.

There is a huge difference between defining a function and invoking it. If the parentheses are not included, the function will not run.

The invocation comes **after** the function definition. If you write it beforehand, it will be trying to invoke something that doesn't yet exist according to the interpreter.

This will work:

```
var printBoo = function() {
	console.log('Boo!');
};

printBoo();
```

VS

This will not:

```
printBoo();

var printBoo = function() {
	console.log('Boo!');
};
```

<br>
<hr>

11:40

## NAMING FUNCTIONS

The variable you use for a function should contain a **verb**. Functions **do** something, most often:

* getting data
* setting data
* checking data
* printing data

If the purpose of your function is to check data, for example, use the verb `check` in the variable name.

Example function that contains a conditional:

```
var checkInputLength = function(input) {
	if (input.length > 10) {
		console.log('input length is greater than 10)
	} else {
		console.log('input length is not greater than 10'
	}
}
```

Functions should try to do **one thing** and **do it well**.

If a function, called `checkInputLength`, does more than just check input, or doesn't do it very well, then it is a poor function.

Takeaway: Think about appropriate **verbs** to use in your function variable names.
<br>

11:50

## ARGUMENTS AND PARAMETERS

The preceding function, `checkInputLength` had a parameter called, `input`.

We can write functions that take in a type of variable called a **parameter**. By giving our functions some kind of variable input, we make them much more flexible.

In the below example, the parameter is arbitrarily called `name` (we can call our parameters whatever we want - whatever makes semantic sense).

&#x1F535; **Watch**

Using **interpolation** I can put the input into a string:

```
var nameIt = function(name) {
	console.log('Hello! My name is ' + name);
}
```

When we _invoke_ the function, we can specify the value of the parameter, this is called an **argument**:

```
nameIt("Leeroy");
```

We can continue to invoke the function with whatever **arguments** we want:

```
nameIt("Toblerone");
nameIt("Jordan");
nameIt("Tariq");
```

Each time, the output of the function will change to reflect the argument.

11:55

## Argument vs Parameter

The **argument** is the input, the **parameter** is how the input is represented in the function.

```
var someFunc = function(PARAMETER) {
	// some code
}

someFunc(ARGUMENT);
```

<br>

&#x1F535; **Activity (8 min)**

* Write a function `printParameter` that takes a parameter. The function should simply console.log the value of the parameter.
* Invoke the function with an argument.

&#x1F535; **Extra**

* Write a function called `minusOne` that takes a parameter. Assuming the argument is a number, print the argument -1.

```
minusOne(10);
```

<br>

> => 9

&#x1F535; **Extra**

* Write a function called `printElement` that takes a parameter.
* Invoke the function with an **array** as the argument.
* The function should print the **last element** within the array.

_Hint:_ `arr[arr.length - 1]`

<br>
<hr>

12:10

## Multiple Parameters

We can also use multiple parameters in our functions. A function can take any number of parameters.

```
var multiply = function(num1, num2) {
	console.log(num1 * num2)
}
```
When you invoke the function, you generally want to supply the right number of arguments.

```
multiply(4, 4)

=> 16
```

## RETURN

* `return` gives a function its value.
* `return` stops the function.

## giving a function its value

We specify the output of a function with the `return` statement. The `return` statement is different from `console.log()` in that we can use the _return value_ of a function to pass as data, whereas we cannot with a `console.log()`.

A contrived example:

```
var ten = function() {
	return 10;
}
```

```
console.log(8 + ten());

=> 18
```

This is the main difference between `return` and `console.log()`. The output value of a function can not come from a console.log.

```
var ten = function() {
	console.log(10);
}
```

```
console.log(8 + ten());

=> 10
=> NaN
```

This is because it is trying to add 8 to `undefined`.

A function is only **defined** if it has a return value.

```
var multiply = function(num1, num2) {
	return num1 * num2;
}
```

The `multiply` function has a **return value** of `num1` * `num2`. It does not just print to the console.

## stopping a function

**RETURN** sends the value of your function immediately. You can use **return** to terminate the function.

Example:

```
var example = function(input) {

	if (input == "none") {
		return 0;
	}

	return 1;

};
```

```
example("none")
=> 0

example("two");
=> 1
```

## console.log a function with a  return value

Sometimes a returned value will not appear in your console. This is normal. **A return is not a console.log**. To see the return value of a function, you will want to console.log the invocation:

```
console.log(example("one"));

=> 1
```

12:20
&#x1F535; **Extra**

Write the following functions and test to make sure they work:

* Write a function called `calculateArea` that takes two parameters `width` and `length` and multiplies them. This will give us the area of a rectangle.
* Invoke the function a couple of times with different arguments each time

* Write a function that takes three parameters (numbers), sums them, and converts the sum into a string (eg. `"123"`)
* Invoke the function a couple of times with different arguments each time

EXTRA:

* Write a function that takes two parameters (strings) and console.logs whether the two strings are identical

EXPERIMENT

* What happens if you supply more arguments than there are parameters?
* What happens if you supply fewer arguments than there are parameters?

<br>
<hr>
