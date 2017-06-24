
![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---

Title: Afternoon lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page <br>
Topics: Variables, DRY, Loops<br>

---

## Lesson Objectives

_After this lesson, students will be able to:_

* Read Node error messages

* Evaluate basic Boolean expressions

* Write a while loop

* Write a for loop

<br>
<hr>

## Programming

The first two weeks of this course will focus on programming skills. This means learning how to "think like a programmer", and also learning to use tools such as Terminal, Atom, Git, etc.

Loosely speaking, learning to "think like a programmer" involves learning:

**Concepts**

* For example, the concept of a "loop", something that repeats.
	* Values might mutate with successive loops.

**Syntax**

* Precise spelling of variables and inclusion of parentheses, etc.
	* Computers are stupid. They do not 'infer your meaning'.

**Logic**

* The sequence of execution in a program, line by line. Problem-solving. How code interacts with other code.

## Why?

Why learn programming? We are making **software**, not regular websites. People these days use **apps** (either on mobile or desktop), which are hosted on the internet rather than installed locally. This is the current web paradigm called **software as a service**.

Software requires internal logic. Programming is the means of supplying internal logic to a program.

<br>
<hr>

## JavaScript

The language we will be learning first is JavaScript. In a way it does not matter which language we learn, because the same principles apply across languages. For example, every language has **loops** and **control flow**.

JavaScript is a ubiquitous language that all web browsers understand, so we'll start here.

Let's learn a bit more about the mechanics of JavaScript.

<br>
<hr>

2:40

# Code!

Let's dive back into programming.

Use the `first_code.js` file from this morning.

## Errors

Error messages are good. They are not adversarial! They are there to help you.

Error messages are **clues** that you learn to read. You should be able to read these clues on your own.

![](https://i.imgur.com/iDlbedF.png)

The error above is typical. It looks intimidating and weird, but if you pry, you will find valuable clues. For example:

Error messages will tell you a **specific line number** where in the code the error occured. This tells me the error is on line 1: `first_code.js:1`

Errors will often tell you what **type** of error. `SyntaxError: Unexpected token ILLEGAL`

You have to learn to sort the 'wheat from the chaff' so to speak. This will come with practice.

Errors are a **growth opportunity**. When you receive an error, yes it is an obstacle, but with a little patience it will turn you into a more informed, better developer.

<br>
<hr>

## Comments / commenting out code

Atom: `⌘ + /`

'Comment out' code that doesn't need to run or that you save for later.

Providing verbal comments within your code is great way to make your code comprehensible to others. But first, your code should be as self-evident as possible.

<br>
<hr>

2:50

<br>
<hr>

## Strings and Numbers

What we have so far:

```javascript
console.log('Hello World');
```

The data in quotes is a **string**. A string is just text. You can give a string either double or single quotes. If you want to use single quotes and include a quote inside a string, use an **escape character** `\` before the quote.

Example:

```javascript
console.log('Whose is this? Is this Thom\'s?');
```

Along with strings we have **numbers**.

We could send a number to the console:

```javascript
console.log(100);
```

We can do arithmetic with numbers:

```javascript
console.log(100 + 100);
```

There are no quotes around numbers.

**strings** and **numbers** are the basic _datatypes_ we use day-to-day, along with another datatype, **booleans**, which we will talk about soon.


<br>
<hr>
2:55

## Variables - `const` and `let`

We can assign strings and numbers to variables using the assignment operator `=`. 

```javascript
var phrase = 'In my room is a chair and a table';
```

**phrase** can be anything we want (with some syntactical caveats), **sentence** for example, whatever makes semantic sense.

**We will not be using `var`**, instead we will be using **`let`** and **`const`**.

Let's use `const` here:

```javascript
const phrase = 'In my room is a chair and a table';

const sum = 99 + 1;
```

Now that the phrase is saved to a variable, we can call it whenever.

```javascript
console.log(phrase);
console.log(phrase);
console.log(phrase);
console.log(phrase);
```

```javascript
console.log(sum);
console.log(sum);
console.log(sum);
console.log(sum);
```

>x4 => "In my room is a chair and a table"

>x4 => 100


**Variable names**

- cannot begin with a number or include special character
- camelCase
	- `thisVariable` NOT `this_variable`
- case sensitive
	- `thisVariable` is not the same as `ThisVariable`

**Semicolons**

- The interpreter needs the semicolons
- Automatic Semicolon Insertion


**Variable re-assignment**

With `const`, you cannot reassign a variable. It is CONSTANT. 

```javascript
const item = ' chair';

item = 'eclair';
```

> TypeError: Assignment to constant variable.

Use `const` as your default declaration. This means your variable is safe from arbitary or accidental changes. However, _if you intend_ for the value of the variable to change, then use `let`.

*Whenever you declare a variable, think first whether you intend to change it*

You can re-assign variables with `let`:

```javascript
let item = 'chair';

item = 'eclair';

console.log(item);
```

> => "eclair"

<br>

&#x1F535; **Activity**

> Without running the following code, try to determine:

```javascript
let a = '';
let b = 'bongos';
let c = 'get your';

a = b;
b = c;
c = a;
```

At the end, what are the values of `a`, `b`, and `c`?

<br>
<hr>

## Concatenation and Interpolation

**Concatenation**

JavaScript allows us to add strings together with `+`:

```javascript
console.log('hello' + ' world');
```

> => 'hello world'

**Interpolation**

We can insert values of variables into our strings:

```javascript
const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!!');
```

> => "What a beautiful day!!"

```javascript
const adjective = 'crummy';

console.log('What a ' + adjective + ' day!!');
```

> => "What a crummy day!!"

<br>
<hr>

&#x1F535; **Activity (5 mins)**

* Use the `+` operator to **concatenate** these strings together within a console.log: "Please", "squeeze", "the", "cheese". Make sure there are spaces inbetween each word.

> => "Please squeeze the cheese"


&#x1F535; **Extra**

With the variable `const word = 'believe'`, replace the string "squeeze" by **interpolating** the `word` variable.

> => "Please believe the cheese"


&#x1F535; **Extra**

Output a console log "The sum of 5 and 10 is 15" where the values for 5 and 10 are saved to variables (interpolated), and where 15 comes from those variables being summed.

<br>
<hr>

3:00

## Programming principle: DRY (6 mins)

Don't Repeat Yourself

What if we needed to write a program that counts from 1 up to 1000? We could set about doing this:

```javascript
console.log('The number is: ' + 1);
console.log('The number is: ' + 2);
console.log('The number is: ' + 3);
console.log('The number is: ' + 4);
console.log('The number is: ' + 5);
// etc.
```

Are we really going to write 1000 lines of code? Programmers are _lazy_ in a good way. They care about efficiency. They do not want to write 1000 lines of the same thing with minor tweaks. Instead, programmers try to find shortcuts, and luckily, we can use **loops** to perform repetitive tasks.

Here is an example of a **while loop**. We can use 6-ish lines of code to print 1000 lines of text. This is an application of **DRY.**

```javascript
let num = 1;

while (num <= 1000) {
	console.log('The number is: ' + num);
	num++;
}
```

3:05
<br>
<hr>

# Loops

## Loop Concept

What is a loop? A loop is a process that **repeats**. Along the way, the loop might accumulate or mutate value. For example, an analog clock works in a **loop**, and each loop of the minute hand increases the count of the hour-hand by 1. The hour-hand counts from 1 to 12, and after 12 loops, it starts counting again from 1.

[Clock loop](https://media.giphy.com/media/zzDDW60OOPm1y/giphy.gif)


## Loop Syntax - while loop

While loop examples:

```javascript
let num = 1;

while (num <= 1000) {
	console.log('The number is: ' + num);
	num++;
}
```

```javascript
let runProgram = true;

while (runProgram) {
	console.log('program is running');
	runProgram = false;
}
```

pseudo-code

```
initial condition

while (BOOLEAN EXPRESSION) {
 // run code in block
 change condition
}
```

Let's look at the different parts of the first example.


## `let num = 1;`

Before our while loop we used: `let num = 1;`

All we did was **declare a variable** and give it a value, in this case a **number**.

This is to set a **starting condition** for our loop. All we want is for our loop to count, but it needs a place to start counting from.

We could change this to whatever we want:

```javascript
let zum = 90;

while (zum <= 1000) {
	console.log('The current number is: ' + zum);
	zum++;
}
```

<br>
<hr>

3:20

## `num <= 1000`

### BOOLEAN EXPRESSION

In our while loop we used `num <= 1000`. This is a **BOOLEAN EXPRESSION**. Under the hood, it evaluates either to **true** or **false**.

The loop will run **while** the expression is true. As soon as the expression is false, the loop will end.

```javascript
while (BOOLEAN_EXPRESSION) {
	// code to repeat
}
```

If the expression never became false, the loop would never end. This would be an **infinite loop* *. You want to avoid infinite loops because they will crash your program.

Let's test out a boolean expression:

```javascript
console.log(1 > 2);
```

This is asking **is 1 greater than 2?**.

> => false

There are other comparative operators:

* `>` greater than
* `<` less than
* `==` equal to
* `>=` greater than or equal to
* `<=` less than or equal to
* `!=` is not equal

Using the **equality operator**:

```javascript
console.log(1 == 2);
```

> => false

This is asking **is 1 equal to 2?**.

Using the **inequality operator**

```javascript
console.log(1 != 2);
```

> => true


&#x1F535; **Activity (3 mins)**

Console.log each boolean expression

* Check: is `-10` greater-than-or-equal-to `-100`?
* Check: is `0` less than `1000`?
* Check: is `888` the same as `889`?
* Check: is `20` less-than-or-equal-to `20`?


<br>
<hr>

3:30 break until 3:40

## Block

The curlies denote a **block** of code.

Each loop is taking the code between the curlies `{ ... }` and running that code multiple times so that we don't have to write it out.

<br>
<hr>

3:45

## While loop

Let's look at our loop again:

```javascript
let num = 0;

while (num <= 1000) {
	console.log(num);
	num++;
}
```

Now we are able to:

* Declare a variable (we can change the value of `num`)
* Tell our loop to run _while_ a condition is true (we can change the value of the condition)
* Console log the value of `num` each time the loop runs.

All that's left is to automate a change to the value of `num` each time the loop runs.

**We want to change the value of num so that the loop will eventually end**

The loop will end when `num <= 100` is false. Let's increase the value of `num` by 1 each time the loop runs.

<br>
<hr>

3:50

## Postfix operator `++`

The **postfix** operator will increment the value of a variable by 1, and save the variable with the new value.

If we save a number to a variable:

`let i = 100;`

How can we save the value of that variable plus 1? We can do it this way:

`i = i + 1;`

So, the variable equals _itself_ plus one.

The **postfix** operator offers a shorthand:

`i++;`



## Compound assignment operator `+=`

We can also do _exactly the same thing_ with the **compound assignment operator**.

`i += 1;`


<br>
<hr>
3:55

&#x1F535; **Activity**

Write a _while_ loop that counts from 1 to 100.

&#x1F535; **Extra Activity**

Write another _while_ loop, but write it from from memory. Make the loop count from 0 to 5000 and print the square of each number. 

&#x1F535; **Extra Activity**

FIGURE IT OUT

How can you get a while loop to count _backwards_? Use the postfix operator `i--` to make a loop count backwards from 1000 to 1.

<br>
<hr>

4:00

## _FOR_ LOOP

A _for_ loop does the same thing as a while loop, but all the 'baggage' is conveniently compacted into the syntax, leaving less room for infinite loops. We don't have to declare any variables outside of the loop like we had to do with _while_ loops.

_For loops_ are what we will use almost all of the time.

<br>

## Loop Syntax - for loop

Examples:

_for_ loop that counts from 1 to 1000:

```javascript
for (let i=1; i <= 1000; i++) {
	console.log('The number is: ' + i);
}
```

4:05

There are three parts to the 'control panel' of the loop, delimited by the semicolon:

```javascript
for (initial condition; while condition; repeating expression) {}
``` 

1. some initial code supplied to the loop -- usually a numerical starting value of the loop
2. the condition under which the loop runs -- it will run while the expression is true
3. a repeating expression that runs at the end of each loop -- usually an instruction to increase the numerical starting value

<br>
4:10

&#x1F535; **Code along (4 min)**

Write a _for_ loop that will count from 0 to 99

```javascript
for (let i=0; i <= 99; i++) {
	console.log(i);
}
```

&#x1F535; **Activity (5 min)**

* Write a _for_ loop that counts from 999 to 9999.

&#x1F535; **Extra Activity**

* Write a _for loop_ that prints 'This is the song that never ends' to the console 100 times.

&#x1F535; **Extra Activity (5 min)**

FIGURE IT OUT

* Write a _for loop_ that counts _backwards_ from 1000 to 1, using the postfix operator `i--`.

<br>
<hr>

4:30
