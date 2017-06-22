![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---

# Afternoon Lab

### Nested data: Arrays of Objects

* Make a file `arrays_of_objects.js` in your student_labs directory for today
* Do your work in the `arrays_of_objects.js` file


## The solar system

The following data structure, `solarSystem`, is a common data structure: an **array** of **objects**. You will see this particular data structure more and more as you venture into JSON and servers. This one is an **array** of **objects** which also contains **arrays**. Given the following data structure of arrays and objects:

```
var solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

```

Write Javascript that does the following:

```
EXAMPLE:
- Print the boolean for Mercury's ringSystem

ANSWER
console.log(solarSystem[0].ringSystem)
```


1. Print the array of Jupiter's moons to the console (no _for loop_, just print the entire array).
2. Print the name of Neptune's moon "Nereid" to the console.
3. Add a new moon called "Endor" to Venus' moons array.
4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
6. Change Mercury's ringSystem boolean to true.
7. Change Uranus' moon "Umbriel" to "Oberon"
8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others. You want to make a loop that goes over each item in the array, and include an if statement.

```
Expected result for question 8

=> { name: 'Mercury', ringSystem: true, moons: [] }
=> { name: 'Jupiter', ringSystem: true, moons: [ 'Europa', 'Ganymede', 'Io', 'Callisto' ] }
=> { name: 'Saturn', ringSystem: true, moons: [ 'Titan', 'Enceladus', 'Rhea', 'Mimas' ] }
=> { name: 'Uranus', ringSystem: true, moons: [ 'Miranda', 'Titania', 'Ariel', 'Oberon' ] }
=> { name: 'Neptune', ringSystem: true, moons: [ 'Triton', 'Nereid' ] }
```

<br>
<hr>

# EXTRA STUFF

## sorting an array of objects

### Research

You might have used `.sort()` to sort a regular array, but you can also use `.sort()` to sort an array of objects by the values stored in each object.

Example:

unsorted array:

```
var movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]
```

sorted by 'title':

```
[ { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
  { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
  { title: 'L\'Avventura', director: 'Michelangelo Antonioni', year: 1960 } ]
```

If you just use `.sort()` on an array of objects, there are no criteria to sort by (which object comes first?), so the array will not be sorted.

However, you can provide `.sort()` with arguments to tell JavaScript which **object key** to use to sort the array. In the above example, we sorted by **title**.

Read the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) -- scroll down to: **Objects can be sorted given the value of one of their properties.**

### 1. use .sort() to sort the solar system array alphabetically according to the name of each planet

CHALLENGE

### 2. write a function `sortArrayOfObjects` with two parameters: `arr` and `key` that will sort any array of objects by the `key` input.

Example of sorting the movies array:

```
console.log(sortArrayOfObjects(movies, "title"));
```

Result sorted by title:

```
[ { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
  { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
  { title: 'L\'Avventura', director: 'Michelangelo Antonioni', year: 1960 } ]
```

Example of sorting the movies array:

```
console.log(sortArrayOfObjects(movies, "year"));
```

Result sorted by year:

```
[ { title: 'L\'Avventura',
    director: 'Michelangelo Antonioni',
    year: 1960 },
  { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
  { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 } ]
```

Example of sorting the movies array:

```
console.log(sortArrayOfObjects(movies, "director"))
```

Result sorted by director:

```
[ { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
  { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
  { title: 'L\'Avventura',
    director: 'Michelangelo Antonioni',
    year: 1960 } ]
```

<hr>
