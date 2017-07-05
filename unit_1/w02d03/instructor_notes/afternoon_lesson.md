![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Afternoon Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Object-ception (Nested data) <br>

---

# Lesson objectives

_After this lesson students will be able to:_

* Nest data inside an object
* Use an array inside an object
* Use an object within an object
* Use an array of objects

<br>
<hr>

## Setup

Create a file `objects2.js` in the `student_examples` folder for today.

<br>
<hr>

3:05

# OBJECT-CEPTION

Object keys can have any data type as a value. Let's examine the ramifications of that . . .

## Objects can contain arrays

Let's model an adventurer who has belongings (a list)

```javascript
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}
```

Access all values in the player.belongings array:

```javascript
console.log(adventurer.belongings)
```

Access a specific item in the belongings array:

```javascript
console.log(adventurer.belongings[0])
```

#### Iterate over an array that is within an object

```javascript
for (let i=0; i < obj.belongings.length; i++) {
	console.log(obj.belongings[i]);
}
```

3:10

&#x1F535; **Activity (6 min)**

* Write an object for an `adventurer` and give the adventurer some belongings
* Access the belongings array and print the last element to the console

&#x1F535; **Extra**

* Use `.push()` to add a "Vogue Magazine" to the belongings array

&#x1F535; **Extra**

* Write a _for_ loop that prints each element in the belongings array to the console

3:15

<br>
<hr>

## Objects can contain objects

Our adventurer now has a companion! Our companion, a **bat**, is an object with its own properties.

Add the `companion` object to the `adventurer` object:

```javascript
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
	             name: "Velma",
	             type: "Bat"
	           }
}
```

Access the companion object:

```javascript
console.log(adventurer.companion)
```

> => { name: "Velma", type: "Bat" }

Access the companion's name:

```javascript
console.log(adventurer.companion.name)
```

> => "Velma"

Access the companion's type:

```javascript
console.log(adventurer.companion.type)
```

> => "Bat"

<br>
3:31

&#x1F535; **Activity (3 min)**

* Write the companion object into the adventurer object
* Print just the companion's name to the console

&#x1F535; **Activity**

* Change the companion's name "Velma" to "Susan"
* Console.log to check that the name was changed

&#x1F535; **Extra**

* Add another object to the `adventurer` object called `companion2`.
* `companion2` should have a name and a type "Insect"


<br>
<hr>

3:40

## Objects can contain objects that can contain objects ...

Velma the bat also has a companion, a magical **parasite** called Tim.

Let's add **Tim** to our data:

```javascript
const adventurer = {
	name: Timothy,
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
	             name: "Velma",
	             type: "Bat"
	             companion: {
	             					name: "Tim",
	             					type: "Parasite"	                        }  
	           }
}
```

&#x1F535; **What would you write to:**

* console.log Tim's **type**


## Objects can contain objects that can contain objects that can contain arrays...

Tim has a **bag of holding** and can carry an infinite number of belongings.

Let's add an array of belongings to Tim:


```javascript
const adventurer = {
	name: Timothy,
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
	             name: "Velma",
	             type: "Bat"
	             companion: {
	             					name: "Tim",
	             					type: "Parasite",
	             					belongings: ["SCUBA tank", "Rogan josh", "health insurance"]	                        }  
	           }
}
```

&#x1F535; **What would your write to:**

* console.log "health insurance"

<br>
<hr>

## Arrays can contain objects

A common pattern you will start to see everywhere (especially in Unit 2 and onwards) is an **array of objects**.

An array of objects can look like this:

```javascript
var movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
```

These objects have no names, they are just anonymous objects packed into an array.

You could reference them with indexes as usual:

```javascript
console.log(movies[0]);
```

You could reference the properties by first asking for the index, then the property:

```javascript
console.log(movies[0].title);
```

You could loop over the array and just print all of the titles:

```javascript
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}
```
<br>
<hr>

**Afternoon lab**

<br>
<hr>

**After afternoon lab**

## VARIABLES AND ACCESSING VALUES

```javascript
const monster =  {
	name: 'Slimer',
	age: 6
}

const someVar = 'name';

console.log(monster[someVar]);  // same as monster['name'];
```

> => 'Slimer'

<br>
<hr>

## LOOPING OVER OBJECTS

There are two way to loop over objects. You can use either way. Both ways involve looping over the object's **keys**.

Let's say we have a movie object:

```javascript
const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }
```

<br>

## `for ... in` loop

Print each key:

```javascript
for (let key in movie) {
	console.log(key);
}
```

> =>
>
>title
>
>director
>
>year

<br>

Print each value:

To do this, use the key as a **variable** within the square brackets.

```javascript
for (let key in movie) {
	console.log(movie[key]);
}
```

> =>
>
>L'Avventura
>
>Michelangelo Antonioni
>
>1960

<br>

## `Object.keys()`

Object.keys() will return an **array of keys**

```javascript
console.log(Object.keys(movie));
```

> => [ 'title', 'director', 'year' ]

To print the values, use the key as a **variable** within square brackets.

```javascript
const keys = Object.keys(movie);

for (var i=0; i < keys.length; i++) {
	console.log(movie[keys[i]]);
}
```

Unre-factored version:

```javascript
for (let i=0; i < Object.keys(movie).length; i++) {
	console.log(movie[Object.keys(movie)[i]]);
}
```

<br>
<hr>


# Movie loop

Give the following movie:

```javascript
const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }
```

&#x1F535; **Activity**

* Use a **for..in** loop to print all the keys of the movie object
* Use a **for..in** loop to print all the values of the movie object

<br>

CHALLENGE

With the following array of movie objects:

```javascript
const movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]
```

&#x1F535; **Activity**

Create an empty object. Leverage the fact that Keys are unique in an object. Loop over the movies array and add the movie titles as keys in the object. This will consequently omit the duplicate movie. At the same time, give each a value of **0** in the object.

_Tip:_ You might want to use this technique for the hardest part of tonight's homework.

<br>

&#x1F535; **Activity**

* Use **Object.keys** loop to print all the values of the movie object.

<br>
<hr>
Licence
<hr>
