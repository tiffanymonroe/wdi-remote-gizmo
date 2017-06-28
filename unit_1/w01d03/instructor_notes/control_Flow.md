![ga](http://mobbook.generalassemb.ly/ga_cog.png)

<<<<<<< HEAD
# WDIR-Hopper
=======
# WDIR-Gizmo
>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6

<hr>
Title: Conditionals<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Kristyn Bryan <br>
Adapted from: Thom Page's `Conditionals` Lesson from WDIR-Matrix
Topics: Intro to Conditionals & Loops <br>
<hr>

# Intro to Conditionals & Loops

### Lesson Objectives
_After this lesson, students will be able to:_

- Explain why we would use 'control flow' in our programs
- Write a simple if statement
- Write an if / else statement
- Write a for loop with a conditional inside

<br>
<hr>

&#x1F535; **Setup**
You will be using the file called `conditional_practice.js` in the `student_examples` folder to test your code.
# Control Flow

Control Flow is the order in which individual statements or instructions are executed.

:door: **Example**

You want to enter a house. You have to walk through the door to get inside. Based on whether that front door is open or closed, locked or unlocked, you may have to take a different step to get inside the house.

Control Flow lets you specify **when** and **which** lines of code get executed

:door: **Example**

- When the door is open: I walk inside.

- When the door is closed:
I determine if it's locked.

There are three forms of Control Flow:

- **Conditionals** - skip lines of code
- **Loops** - repeat lines of code
- **Functions** - save and later deploy lines of code

For now, let's focus on *conditionals*

# Conditionals

We can set up a branching tree-like structure and control the flow of our code. Though, our code will look less like a tree and more like:
```
if (BOOLEAN EXPRESSION){
  // run this code
};
```
If the boolean expression within our condition is `true`, a branch will execute. If it is `false`, it will not execute. This is an example of `control flow`.

![control flow wd40](https://i.imgur.com/v4W1xwD.png)

Before we write in some control flow, let's take a closer look at the boolean logic that will drive our conditionals.

<br>
<hr>

# Booleans

* Booleans allow us to set `true` and `false` values. With true and false values, we can control the flow of our programs.

:door: **Example**

The door to our house from earlier, we could create a variable for `door_open` and its value can be set to either true or false. If it's true, we can run a line of code to walk through the door. If the `door_open` variable is false, then we would have to run a different line of code to figure out what to do next.

:books: **History Lesson**

 Boolean logic is a type of logic that deals with binary values, and is named after George Boole who invented it.

<hr>

### Let's Practice :computer:

1) Using your terminal, open the file called `conditional_practice.js` that is located in your `student_examples` folder for today.

Note: all activities for this morning will be done in this `conditional_practice.js` file.

:elephant: **Reminder** <br>
Use `cd` to change directories and `atom filename` to open a file with Atom.

2) In your terminal, run the command `node conditional_practice` to run the code that is inside your file.

3) Let's declare some variables with Boolean values.

```
<<<<<<< HEAD
constsunny = true;
constnotSunny = false;
=======
const sunny = true;
const notSunny = false;
>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6
```

4) Check the values of your variables by logging them and running your code.

:elephant: **Reminder** <br>
- To log your code:
`console.log(variable_name or "message")`
<br>
- To run your code:
`node file_name.js`

<hr>

## Not
- `!` **not** sometimes called a 'bang': changes Boolean value to its opposite.

### Let's Practice :computer:

Uh oh! There are cloudy skies :cloud::cloud::cloud:

1) Change the value of your `sunny` variable to `!true`. Log `sunny` and run your code to see the result.

2) Using a bang, change the value of `notSunny` to result in true.

3) Add the following code to your file to test out:

```
consttoggle = true;
console.log("this is toggle " + toggle);
toggle = !toggle;
console.log("this is toggle " + toggle);
```
**Look at that!** :eyes: <br>
You can reassign values with a variable's own value (a little bit of a brain bender)!

<hr>

## Truthiness

**All** values in JavaScript have an implicit 'truthiness'. They can be evaluated as either true or false. In effect, every value in Javascript is converted into a Boolean when it is checked as an expression of truth.

##### All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

<br>

### Let's Practice :computer:

JavaScript has a built-way to convert things to Booleans: `Boolean()`. Put the following inside the parenthesis of `console.log()` to see the result.

```
Boolean("");
Boolean(null);
Boolean(0);
```
<br>

<<<<<<< HEAD
=======

>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6
##### All other values are implicitly true

### Let's Practice :computer:

```
Boolean("hi");
Boolean(1);
Boolean(true);
```

<br>  
<hr>

<<<<<<< HEAD
=======

There is a simple way of verifying the thruthyness or falsiness of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a boolean. So if you add two `!` then you'll get the boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6
## Equality operators

`==`, `!=`, `===`, `!==`

Equality operators are **not** the same as the _assignment_ operator `=`

- `==` **equality**: compares left-hand and right-hand and checks if they are the same. Returns a Boolean value.
- `!=` **inequality**: compares left-hand and right-hand and check if they are not the same. Returns a Boolean value.

```
true == true
=> true
```

```
true == false
=> false
```

&#x1F535; **Examples**

Booleans:

```
false == false
=> true
```

```
true != true;
=> false
```

```
true == !true
=> false
```

Numbers:

```
1 == 1
=> true
```

And with strings:

```
"hello world" == "hello world"
=> true
```

### Strict

- `===` **strict equality**: same as equality, but does not coerce
- `!==` **strict inequality**: same as inequality, but does not coerce

```
5 == '5';
=> true
```

```
5 === '5';
=> false
```

### Let's Practice :computer:

1) Is the number 1 equivalent to the number 1?

2) Is the string "beans" equivalent to the string "soup"?

3) Is (5 + 5 * 3) equivalent to ((5 + 5) * 3)?

4) Is 9 strictly unequal to false?

5) Is NaN equivalent to NaN?

<hr>

<<<<<<< HEAD
## Relational operators

`>` - greater than

`<` - less than

`>=` - greater than or equal to

`<=` - less than or equal to
=======

## Comparison Operators

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. This is both useful, and can be the source of frustration for some developers, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```
>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6


```
5 > 2;
=> true
```

```
5 <= 5;
=> true
```

- strings are compared by alphabetical precedence

```
`'a' > 'b'`;
=> false
```

```
`'z' > 'abc'`
=> true
```


### Let's Practice :computer:

1) Is -10 greater than or equal to -100?

2) Is Infinity greater than or equal to -Infinity?

3) Is "McDonald's" greater than "Burger King?"

<br>
<hr>

## Logical operators

`&&`, `||`

- `&&` **and**: evaluates to `true` if both sides are true. It does not check for equality! Rather, **and** evaluates the truth of the statement, and will return the value of one of the operands.

```
true && true
=> true
```

```
false && false
=> false
```

In these examples, each side is the same (they are equivalent), but in this case, both sides do not both evaluate to `true`.
If an `&&` statement begins with `false`, it automatically evaluates to false.
Both sides must evaluate to true to && to result in true.

```
true && false
=> false
```

```
<<<<<<< HEAD
consta = true;
constb = false;
=======
const a = true;
const b = false;
>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6

a && b
=> false
```

<br>

- `||` **or**: evaluates to true if _either_ side is true.

```
true || false
=> true
```

```
false || false
=> false
```

```
constx = false
consty = false

x || y
=> true
```


### Boolean order of evaluation

1. `>, <, >=, <=`
2. `==, ===`
3. `&&`
4. `||`

<br>

### Let's Practice :computer:

Try to guess the result before you check it. If it is not what you expected, try to find out why not

* Check: `!false && true`
* Check: `false || true`

```
consta = true;
constb = false;
```
* Check: `a && a == b`
* Check: `!true || !false && !false`
* Check: `8 > 1 && true || false`

<br>
<hr>

<<<<<<< HEAD
=======


>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6
## IF Statements

Basic if statement

```
if (BOOLEAN EXPRESSION) {
  // run this code
}
```

The curly braces denote a `block`. The `block` will run if the `BOOLEAN EXPRESSION` evaluates to `true`.

**Example**

```
constnumber = 10;

if (number === 10){
  console.log("The number is 10!")
}
```

### Let's Practice :computer:

#### Reporting for Duty
_Strings as conditionals_

1) Make a variable called `name` and save a name to it.

3) Log the variable to confirm what you've stored.<br>
`console.log(name);`

4)Add a basic **if statement** to add control flow depending on the input.

```
if (input === "Kermit") {
  console.log("Hi ho! Kermit the frog here.");
}
```

- If the input name is `Kermit`, the code is run. Otherwise, the code never runs.

- Control flow with conditionals means that not every line is run. The code in front of us is separate from the process going on behind the scenes.

- Lines of code will be excluded during execution in order to take us on a particular 'branch'

- Which lines are excluded depends on Boolean values, and whether expressions evaluate to `true` or `false`

<br>
<hr>

#### Have a Drink
_Numbers as conditionals_

```
constage = 21;

if (age >= 21) {
    console.log ('You are allowed to buy beer');
}
```

#### Oddball
_Modulus as conditionals_

`%`

Check for odd numbers:
```
if (5 % 2 == 0) {
    console.log('number is even);
}
```

**Let's add an `else` to our `if` statement**

### If / else

```
if (5 % 2 ==0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```


<hr>

# LOOPS: Conditionals within loops

:elephant: **Reminder** <br>

#### For Loop

```
for (initial expression; condition; increment expression) {
    Code that will be executed
}
```

**Example:**
Looping through an array called `cars` and log each car in the array.

```
cars = ["Chevy", "Audi", "Nissan", "Toyota", "Lexus", "Tesla"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
```

<<<<<<< HEAD
=======

Iterating is a way of incrementally repeating a task.

#### for

You can iterate over an array with:

```javascript
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(i);
}
```

#### for of (can use on strings and loops new es2015 syntax)

`
for (let chr of "jimbo") {
  console.log(chr);
}
`

`const food = ['apple', 'pear', 'taco']`

`
for (let value of food){
  console.log(value)
}
`




## Further Reading

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

>>>>>>> cfd4d75e6c698beeacac456e641b31c07be6f4c6
#### Conditionals within a for loop

- Only runs code if conditions are met

**Example:**
For the numbers 1 through 10, if the number is an even number, let's print a message "even number", otherwise, let's print a message "odd number"

```
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0){
    console.log(i + " is an even number");
  } else {
     console.log(i + " is an odd number");
  }
}
```

![ProCheck](http://i.imgur.com/kqKvv0L.png?2) **ProCheck**

What if we changed the range to 0 through 10... would we have to update our logic? Let's think about the **edge cases**. Are there any? What happens when we hit zero? Is the message for all of the numbers still accurate?

### Let's Practice :computer:

1) Using the cars array, let's print only the cars that have an odd index.

`cars = ["Chevy", "Audi", "Nissan", "Toyota", "Lexus", "Tesla"];`

```
for (i = 0; i < cars.length; i++) {
  if (i % 2 !== 0){
    console.log(cars[i]);
  }
}
```

<hr>

# Intro to code quality
![ProCheck](http://i.imgur.com/kqKvv0L.png?2) **ProCheck**

This whole section is a ProCheck! We want to make sure that your code not only works, but is understandable to other people (think about it: you won't be the only person reading this AND it might be weeks or months between you looking at your code - make it understandable).

### Indentation
Reading material for [JavaScript code conventions](http://javascript.crockford.com/code.html).

As we have mentioned before, indentation denotes hierarchy in your code. When writing code in JavaScript, you should indent code that is being run inside other code. Here's an example:

**Correct:**
```
if (5 % 2 ==0) {
    console.log('Number is even');
} else {
    console.log('Number is odd');
}
```
Note that the console.log that will be run inside the *if* portion is tabbed over once to denote that it should be run if this portion of the code is executed.

**Incorrect:**
```
if (5 % 2 ==0) {
console.log('Number is even');
} else {
console.log('Number is odd');
}
```

Note that this code will still run, but it is hard to read! This will make your coworkers (and instructors) a little sad :confused: because it will cause more brain work for us. You want to make it as easy as possible for others to know what you are doing, so please show the relationships with indentation!

### Semantic naming
when naming your variable, be explicit! Skip naming your variables `x` or `y` when you can name them `timeTracker` or `uncleRoysChickenCount`

:elephant: Remember, JavaScript naming convention is *camel case*. This means, the first word in the name is lowercase and any additional words in the name are connected (no spaces between words) and the first letter is capitalized `camelCase` or `thisIsCamelCase`.

### Case Sensitivity
Be aware that names are case sensitive. That means: `constredcow` is **not** the same as `constredCow`.
