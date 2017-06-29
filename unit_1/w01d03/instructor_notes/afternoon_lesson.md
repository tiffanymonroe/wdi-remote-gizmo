![ga](http://mobbook.generalassemb.ly/ga_cog.png)


<hr>
Title: Arrays <br>
Type: Lesson<br>
Duration: 1 hr 30 min<br>
Topics: Intro to Arrays & Iterating over them <br>
<hr>

# Arrays & Conditionals Continued

### Lesson Objectives
_After this lesson, students will be able to:_

- Declare an empty array
- Access and change array elements
- Add and remove elements from an array
- Access each element of an array with a loop
- Use arrays inside conditional statements
- Use at least 6 array methods, and research more methods on their own
- Use expressions with the square brackets to access elements
- Access elements in a multi-dimensional array
<br>
<hr>


&#x1F535; **Setup**
You will be using the file called `array_practice.js` in the `student_examples` folder to test your code.

<hr>

## What is an Array?

- An array is a list. All list items go between square brackets:

```
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

- Arrays contain `elements` separated by commas `,`

- `Elements` can be any primitive datatype
  - Usually all elements in an array are of the same datatype

- Declare an empty array

  - `const arr = [];`

<br>


### Let's Practice :computer:

* Make an empty array call `arr`
* Make another array `faveFoods` that contains a list of your top three favorite foods
* Console.log the array of your favorite foods

<hr>


### Accessing Elements

Each element in the array has a numbered `index`. The first element has an index of 0.

* Access elements by putting the `index number` in square brackets.

Access the first element in an array:

```
const items = ["chair", "table", "candle", "map"];

console.log(items[0]);
=> "chair"
```

Access the second element in an array:

```
const items = ["chair", "table", "candle", "map"];

console.log(items[1]);
=> "table";
```
<br>

**.length method**

We can use the `.length` method to find out the number of elements in an array

```
console.log(items.length);
=> 4
```

<br>


&#x1F535; **Ask**

Length gives us the number 4, but is there an element in the `items` array with index position 4?


### Let's Practice :computer:

```
const ghostBusters1984 = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];
```

* Console.log the first element in the array
* Console.log the third element in the array
* Console.log the length of the array


<hr>

## LOOPS: Iterate over an array

Let's use a for loop to iterate over all of the items in an array and print them out.

`const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];`

We know that to access an item in the array, we have to use the name of the array and square brackets with the index number. To access the first item in the array `kitchenSink`, we would write:

`kitchenSink[0]`

If we want to print out all of the items, we can make a for loop which will increase that index number for us programmatically:

```
for (let i = 0; i < kitchenSink.length; i ++) {
  console.log("This is in my sink: " + kitchenSink[i]);
};
```

>Output:
```
This is in my sink: Dirty spoon
This is in my sink: sponge
This is in my sink: plate with gunk
This is in my sink: soap
This is in my sink: water
```

What if I only want to print *every other* element? There are a few ways to do this, but let's focus on adjusting the incrementation in our control panel.

```
for (let i = 0; i < kitchenSink.length; i += 2) {
  console.log("This is in my sink: " + kitchenSink[i]);
};
```
Note: In the 3rd section of our for loop control panel, we are reassigning the variable `i` and increasing it's value by *2* each time.

>Output:
```
This is in my sink: Dirty spoon
This is in my sink: plate with gunk
This is in my sink: water
```

Only the items with the index 0, 2, and 4 were printed.

### Let's Practice :computer:
With the following array:

```
const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
```

* Console.log all of the elements in the array
* Console.log the odd numbered index items in the array
* Console.log the index number and the item of every odd numbered index items (on separate lines)

<br>

<hr>

## Using conditionals to select elements in array

We can use **conditionals** to select elements an array.

- Let's start with the condition of the index number. If we want to print the items in the array, but only if the index number is even:

```
const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

for (let i = 0; i < foodSelections.length; i ++) {
  if (i % 2 === 0) {
    console.log(foodSelections[i]);
  }
};
```

- We used a modulus `%` to see that the remainder of an index divided by 2 would return 0 (meaning that it's an even number).

>Output:
```
pizza
seaweed
tea
```

- We can add **multiple conditions** to select array elements.

- If we want to print the items in the array, but only if the index number is even **OR 5**:

```
const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

for (let i = 0; i < foodSelections.length; i ++) {
  if ((i === 5) || (i % 2 === 0)) {
    console.log(foodSelections[i]);
  }
};
```

- We used a modulus `||` to set an **or** condition.

>Output:
```
pizza
seaweed
tea
ice cream
```

### Let's Practice :computer:
With the following array:

```
const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
```

* Console.log the even numbered items in the array using a conditional statement.
* Console.log the even numbered items in the array and the item with the index of 3 using a conditional statement.
* Console.log the odd numbered index items in the array using a conditional statement.


<br>
<hr>



### Changing Elements

* To change an element in an array, first access the element, and then assign a new value:

```
const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];
```

```
veggies[1] = "spinach";
=> "spinach"
```

```
console.log(veggies);
=> ["red pepper", "spinach", "pumpkin", "cauliflower"]
```

<br>


### Let's Practice :computer:

* With the following array:

```
const numbers = [21, 18, 5, 3, 2, 1, 1];
```

* Change the third element of the array to `null`, and console.log the array to confirm. (The third element is the number 5)


**FIGURE IT OUT**

* Change the first element of the array to equal **itself** times ten using the compound operator `*=`.

* Why wouldn't `nums[0 * 10]` work for this purpose?


<br>
<hr>

### Research Array Methods :books:

Using this array:
```
const fruit = ["apple", "oranges", "banana",
                        "grapes", "cherries", "blueberries", "kiwi"];
```

* Find an array method that will tell you `indexOf` the string "cherries"
* Find an array method that will `reverse` the order of elements inside the array


### ARRAY METHODS: Adding and Removing Elements

### Adding by Index

We can easily add an element to an array by just specifying an index number and assigning a value.

```
const nums = [1, 2, 3];

nums[3] = 9;

=> [1, 2, 3, 9]
```
or
```
const nums = [1, 2, 3];

nums[10] = 9;

=> [1, 2, 3, undefined × 7, 9]
```

### Adding with .push()

However, we don't always know the length of the array. We can conveniently add data to end of the array using the `.push()` method.


- `.push()` adds an element to the end of the array.

```
const beatles = ["George", "John", "Ringo"];
```

```
beatles.push("Paul");
```

```
beatles;
=> ["George", "John", "Ringo", "Paul"]

```
<br>


### Let's Practice (Pairs):computer:

 - Make an array that contains two of your favorite tv shows or movies
 - `.push()` another TV show or movie into the array
 - research the javascript array method `.sort()`
 - save a `.sort()`ed version of the array to another variable, and console.log the new array
 - `.push()` another TV show or movie into the sorted array
 - research the javascript array method `.reverse()`
 - save a `.reverse()`ed version of the array to another variable, and console log the reversed result
 - research the array method `.pop()` and use it on your array. What does it do?
 - research the array methods `.shift()` and `.unshift()`. How do they differ from `.push()` and `.pop()`?
 - research the array methods `.slice()` and `.splice()`. What do they do? How do they differ?

<br>
<hr>

### Using expressions to access elements

We can put an `expression` between the square brackets to access array elements.

```
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[2 * 2];
=> "magnifying glass"

```

In an array with an **even** number of elements, we could find the element that comes right after the middle:

```
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[list.length / 2];
=> "map"

```

To access the last array element:

```
const items = ["chair", "table", "candle", "map"];

items[items.length - 1];
=> "map";
```

<br>
We can also use variables in our square brackets, as long as the variable references a whole number:

```
const sheep = ['Merino', 'Romney', 'Faulkand'];
const num = 1 + 1;

console.log(arr[num]);
=> "Faulkland"
```

<br>


### Let's Practice :computer:

With the following array:

```
const runDMC = ["Run", "DMC, "Jam Master Jay"];
```

* Console.log the last element in the array using the length of the array inside the square brackets

**FIGURE IT OUT**

* When querying the array, put an expression between your square brackets that accesses a _random_ element of the array

<br>
<hr>

### Multi-dimentional Arrays

Array elements can be can be other arrays.

```
const pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
```

The `pairs` array has `2` elements. Use `pairs.length` to verify.

- The element at 0 is `["Snoopy", "Linus"]`
- The element at 1 is `["Peppermint Patty", "Woodstock"]`

We can go deeper to retrieve the elements of these inner arrays. To do this, we keep adding square access brackets. To get `Peppermint Patty` from the pairs array:

```
pairs[1][0]
```

- multi-dimensional arrays are useful for nested information and grid layout
- 9x9 grid:

```
const grid = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8]
            ];
```

Changing elements in a multi-dimensional array is the same process as with a regular array

```
const confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg"]];

confectionary[1][0] = "musketeer";

confectionary;
=> [["mounds", "almond joy"], ["musketeer", "easter egg"]]
```

<br>

### Let's Practice :computer:

* With the following multi-dimensional array

```
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", "Baked Goods", "Waldo"]];
```

* What would you write to access "Waldo"?
* What would you write to access "Jacc"?
* Change "Baked Goods" to "No One"
* Research the `.splice()` method and remove "Eggbert"

<br>
<hr>
License
<hr>
