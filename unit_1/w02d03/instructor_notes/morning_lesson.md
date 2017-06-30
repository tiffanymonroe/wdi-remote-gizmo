![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Morning Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Objects <br>

---
## Lesson Objectives

_After this lesson, students will be able to:_

- Explain the difference between arrays and objects
- Store key-value pairs inside an object
- Access values by key-name
- Change the value of an existing key


<hr>

## SETUP

* In the `student_examples` folder
* Make a file `objects.js`
* Add a console.log for testing purposes
* Run the file in Terminal with `node objects.js` -- you should see the console.log appear

<br>
<hr>

# OBJECTS

### Arrays and Objects

We have seen the following datatypes:

* String
* Number
* Boolean
* Array

We have looked at primitive datatypes: strings, numbers, booleans, etc. We have also looked at arrays.

Arrays are also **data structure**. We use them to organize our data: in the case of arrays, we can organize our data into a **sequential list** data structure.

* We can use arrays to store multiple pieces of data as a sequential list:

```javascript
const vehicle = ["blue", 4000, 1989];
```

* Each element has a corresponding index, in sequence.

But with the array above, we don't know what the values mean. Does "blue" refer to the color of the vehicle? To the mood of the owner? Is it the model of the vehicle?

* An object is also a **data structure**, but we can use objects to store data with greater specificity.

* In JavaScript, **objects** are what we use to represent **key-value** pairs.

<br>


&#x1F535; **Demonstrate (4 min)**

Key-value pair syntax:

```javascript
const car = { color: "blue", hp: 4000, year: 1989 }
```

* Unlike arrays, objects use _named keys_ rather than ordered indexes. Each piece of data is _bound_ to its key, rather than assigned an index. The data is not _sequential_.

* In Javascript, an object is a way to group many pairs of keys and values together

We can console.log the entire object:

```javascript
console.log(car);
```

<br>
<hr>

### Access values

We can access the values stored in key using dot notation:

```javascript
console.log(car.color)
```

Or bracket-quote notation:

```javascriptr
console.log(car['color']);
```

Use **dot notation** unless there is a special case that requires bracket-quote notation.
<br>

&#x1F535; **Ask (5 min)**

* What differences do you see between the `vehicle` array and the `car` object?

**DIFFERENCES BETWEEN ARRAYS AND OBJECTS**

* Arrays are declared using the square brackets ` var arr = [];`
* Objects are declared using the curly braces `var obj = {}`

Objects contain _key-value pairs_. They are are the **properties** of the object

A **key** is like an **index** in an array, but it has

* a name
* it is unique

A key is really a string but we can omit the quotes.

A **value** is what a key _refers to_, and can be any datatype.

<br>
<hr>

11:20

### BUILDING AN OBJECT

Build an object again in detail, demonstrating that:

* We use a colon to separate the key and the value
* We do not put semicolons after our values.
* We separate our key-value pairs with a comma

```javascript
const person = {}
```

Ask the class for properties to add to the person object.

Ask the class how to access the properties.

<br>


&#x1F535; **Activity (5 min)**

* Create an empty object and then abandon it
* Create an object called `dog` that has the following properties:
	* name (a string, give your dog a name)
	* age (a number, give your dog an age)
	* Remember the correct use of curly braces, colons, and commas! No semicolons!


&#x1F535; **Activity**

* Console.log the `dog` object to check if its correct
	* `console.log(dog)`
* Console.log just the dog's name
* Console.log just the dog's age

&#x1F535; **Activity (5 min)**

* Create an object called `celebrity` that has the following properties:
	* name (a string, give the celebrity a name)
	* age (a number, give the celebrity an age)
	* isCurrrentlyTweeting (a boolean)

&#x1F535; **Activity**

* Console.log the `celebrity` object
	* `console.log(celebrity);`
* Console.log just the name of the `celebrity`
* Console.log just the age of the `celebrity`
* Console.log whether or not the `celebrity` is currently tweeting

&#x1F535; **Activity**

* Write conditional that will print "Turn off Twitter" if the celebrity is currently tweeting.

<br>
<hr>

11:35

#### ADDING AND CHANGING OBJECT PROPERTIES

You can easily add more properties to a previously declared object:

&#x1F535; **Adding properties**

Building a house:

```javascript
const house = {
	doors: 9
}

console.log(house)
```

> => { doors: 9 }


Add properties to the `house` object by simply adding a key using dot notation and the value using an equals `=`. Our house has no windows. Let's add some in _without_ writing them straight into the object:

```javascript
house.windows = 30
```

When we do it this way, the `windows` key is added to the object.

```javascript
console.log(house);

=> Object { doors: 9, windows: 30 }
```

Add another property `hasGarden`:

```javascript
house.hasGarden = true;
```

&#x1F535; **Changing properties**

Changing the value of an existing key has the same syntax as creating a new key-value pair:

```javascript
const bicycle = {
	isATricycle: false
}
```

```javascript
bicycle.isATricycle = true
```

<br>
11:40


&#x1F535; **Activity (7 min)**

* Create an _empty_ object called `macros`

Do not write in to this empty object. Instead, add keys and values with `macros.keyName = "value"`
After each key-value addition, console.log the `macros` object to make sure the new keys and values show up.

* Add to the object a key `protein` with a value 'tempeh'
* Add to the object a key `carbohydrates` with a value 'spuds'
* Add to the object a key `fats` with a value 'olive oil'
* Console.log the `macros` object to check if all the macros are there

&#x1F535; **Activity**

* Create an object called `guitar` with the following properties:
	* a key `strings` with value 6
	* a key `isAcoustic` with value true (boolean)  
* _Change_ the value of `strings` to 100
	* Console.log the value of `strings` (`guitar.strings`)

&#x1F535; **More Guitar**

* _Change_ the value of `isAcoustic` to false
	* Console.log the value of `isAcoustic`
* Without writing into your object directly, add a key `belongsTo` with the value 'Dimebag Darrell'
	* Console.log the value of `belongsTo`
* _Change_ the value of `belongsTo` to 'Mr. Rogers'
* Console.log the entire `guitar` object

<br>
<hr>

11:50

# Why use an object instead of an array?

**data modeling**

When designing your programs, it up to you to **choose** how to model your data. We can represent real-life things with our datatypes, but it's a matter of choosing the appropriate datatypes.

If the thing you want to model is just a list, use an **array**.

If the thing want to model has properties, use an **object**.

Using what we know about datatypes so far, which datatype would we use to model:

1. The name of your cat
2. The age of your cat
3. Your cat's favorite things
4. Whether your cat can speak French
5. Whether your cat can solve a Rubik's cube
6. Your cat

<br>
<hr>

11:55

## Referenced datatypes
### objects and arrays with `const`

`const` only prevents you from reassigning a variable, it doesn't prevent you from adding or changing elements of arrays or properties of objects.

Can do this:

```javascript
const mogwai  = {}

mogwai.name = 'Gizmo';
```

Cannot do this:

```javascript
const mogwai = {}

mogwai = { name: 'Gizmo' }
```

<br>
<hr>

## Object literal shorthand

If variable names outside the object will correspond to the keys in the object, you can write shorthand like this for the `mogwai` object:

```javascript
const name = 'Gizmo';
const age = 1;

const mogwai = { name, age }

console.log(mogwai);
```

> => { name: 'Gizmo', age: 1 }


This is equivalent to the longhand:

```javascript

const name = 'Gizmo';
const age = 1;

const mogwai = { name: name, age: age }

console.log(mogwai);
```

> => { name: 'Gizmo', age: 1 }

<br>
<hr>

## OBJECT ERRATA

&#x1F534; **KEYS ARE UNIQUE (5 mins)**

It just makes sense that keys ought to be unique within an object. Values, however, can be whatever.

An object can not have more than one key with the same name. If it does, the value will default to the last key with the same name, and the prior properties will be excluded on creation.

```javascript
const borough = {
	name: "Brooklyn",
	name: "The Bronx"
}
```

```javascript
console.log(borough);

=> Object { name: "The Bronx" }
```

Conclusion: keys should be unique within an object. Values, however, are not unique.


&#x1F534; **ACCESSING AND NAMING KEYS USING BRACKETS AND QUOTES (5 mins)**

You can create and access any key with square brackets and quotes.

```javascript
const goblin = { badGuy: true }
```

```javascript
console.log(goblin['badGuy']);
=> true
```

With square brackets and quotes, you can make key names with spaces and special characters, because the key is _coerced_ into a string. _But_ you then have to access the value from here on out with square brackets and quotes.

```javascript
const strangeObj = {}

strangeObj['a key with spaces'] = 999;

console.log(strangeObj)
=> Object { 'a key with spaces': 999 }
```

You would need also to access that key with the square brackets and quotes:

```javascript
console.log(strangeObj['a key with spaces'])

=> 999
```

You could not access that key using dot notation.

TEST IT OUT!


&#x1F534; **KEYS THAT ARE NUMBERS (5 mins)**

If a key is just a number, that number will be coerced into a string, which is fine.

```javascript
const obj = {
	1: "one",
}
```

```javascript
console.log(obj);
=> Object { '1': 'one' }
```

But, you cannot access, add, or change numbered keys with dot notation.

```javascript
console.log(obj.1)
```

```javascript
obj.2 = "hey"

console.log(obj2);
```

There is another way to access key-values using square brackets and quotes `obj['1']`

TEST IT OUT!

<br>

&#x1F535; **Activity (4 min)**

* Create an _empty_ object called `testObject`
* Give `testObject` a key called 'this is a test' with the value "test"
	* Console.log the value of the key 'this is a test'
* Give test object a key called `2` with the value "I'm just messing around with objects"
	* Console.log the value of the key `2`

<br>
<hr>

# EXTRA STUFF


### Using a conditional to select an object property

```javascript
if (obj.whatevs == "hi") {
	console.log('ok');
}
```

### if value is a boolean

```javascript
if (obj.something) {
	console.log('ok');
}
```

<br>
<hr>
