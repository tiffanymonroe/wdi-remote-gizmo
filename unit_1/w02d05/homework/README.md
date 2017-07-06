![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: JS Objects, Iterators & Object Methods<br>
Type: Homework<br>
Duration: "8:00 - 16:00"<br>
Creator: Thom Page & Kristyn Bryan <br>
    Course: WDIR-Hopper, WDIR-Matrix<br>
Modified by: Kristyn Bryan<br>
Competencies: Objects <br>
Prerequisites: JavaScript, Objects, Iterators <br>

---
# Object Practice

## Setup

1. Make a file inside your `homework` folder for w02d05 called `object_answers.js`.
2. Write all of your code in `object_answers.js`.

:elephant: Remember to test each of your answers!

## Clicker

1. Make an object called `clicker`, which has a `clickCount` property, and a `click` method.  
2. Have the `click` method increment the `clickCount` by 1 each time it is called.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - Clicker done"
<hr>

## It's All About Me

1. Create an object called `myInformation`.
2. Assign to it your name, your current age, and a fact about you.
3. Inside `myInformation`, create a method called `statement` that returns a statement about you including your name, this fact, and how old you will be in 10 years.
4. Inside `myInformation`, create another function that can be used to increment the value of your age by 1 each time that you call it.
5. It's your birthday! Call this new method that you made that will increase your age.
6. Create another function that can be used to change the value of your `name`.
7. You're feeling funky and decide that your new name is `Rumpelstiltskin`. Call the method that will update your name and assign this new name. Log your object to confirm the changes.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - It's all about Me done"
<hr>

## Greeter
1. Create an object called `greeter`.
2. Inside the `greeter` object, create a method called `hello` that takes a name as a parameter and returns a greeting message followed by the `name` parameter.

>Example:
`Oh hello there, Matthew`

3. Create another method inside `greeter` called `goodbye` that takes a name as a parameter and returns a farewell greeting followed by the `name` parameter.

>Example:
`Arrivederci, Matthew!`


4. Create a final method inside `greeter` called `whoAreYou` that takes a name as a parameter and returns "Oh right! ", followed by the `name` parameter, followed by " how could I forget...!"

>Example:
`Oh right! Matthew how could i forget...!`

5. Play around executing your functions by accessing them through the object.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - Greeter done"
<hr>

## Collecting Strings

Make an object called `stringCollector`, which has:  
1. a `collection` property - an array to hold strings
2. a `collect` method which takes a string as a parameter
3. the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
4. add an `admireCollection` method which prints out each string in the collection to the console, one line at a time

<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - Collecting Strings done"
<hr>

## ATM

Make an object called `atm` which has two properties:  
1. `totalCash`, the total amount of cash in the `atm`
2. `dispenseTwenties`, a method with takes a **number of twenties** and, if there is enough cash, returns the total number of cash it is giving out.  
3. If there is not enough cash, return `null` instead.

>For example, if the `atm` has `200` dollars left, the call to `dispenseTwenties(6)` should return `120`, and update the `totalCash` to `80`.  However a call to `dispenseTwenties(11)` should return `null`.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - ATM done"
<hr>

## Hungry Turtles

1. Create an object called `Leonardo`.
2. Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
3. Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
4. Add a method to Leonardo called eatPizza() which does the following:
    - If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
    - If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Hungry Turtles done"
<hr>

## Calculator

1. Create an object called `calculator`
2. Create a property called `output`
3. Create a method inside your object that will multiply two numbers and change the `output` value to this current value. This method should also log the value of `output`.
4. Create a function that will divide two numbers. It should also change the `output` value to this current value. This method should also log the value of `output`.
5. Practice using your calculator with some pairs (10, 2), (-2, 8), (2, 2).
6. If there's additional time, add methods for `addition` and `subtraction`

<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Calculator done"
<hr>

# Iterators

![iterators cats](http://www.pellissippiveterinaryhospital.com/wp-content/uploads/2013/05/Capture.jpg)

## Setup

1. Make a file inside your `homework` folder for w02d05 called `iterator_answers.js`.
2. Write all of your code in `iterator_answers.js`.

:elephant: Remember to test each of your answers!
## forEach
`.forEach` is a basic iterator; all it does is step through each item in an array.

1. Using the array `words`, log each word in `words` in upper case using `.forEach.`

`const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];`

<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - forEach done"
<hr>

## Map
`.map` is like `.forEach` but it returns a new array with the selections and / or transformations applied in the iterator. `.map` saves to a new array and does not alter the original array.

1. Map to a new array that stores only the first letter from each word in `more_words`.

```
const more_words = ["Joe", "Overeats", "Eggs"];
```

Expected result:

```
["J", "O", "E"]
```

<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - map done"
<hr>

## reduce
`.reduce` iterates over the elements in an array and smooshes them together into a single variable according to the instructions in the iterator. Like `.map`, it returns a new value and does not alter the original array.

1. Return the *product* of the numbers in `arr`.
```
const arr = [8, 8, 8, 8, 8, 8, 8, 8];
```

<hr>
&#x1F534; The commit message should read: <br>
"Commit 10 - reduce done"
<hr>

## Chaining

1. Using iterators to find the total sheepCount of sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast:

```
const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];
```

Expected Output:
```
=> 3238
```
<hr>
&#x1F534; The commit message should read: <br>
"Commit 11 - chaining done"
<hr>

# Tamagotchi

![tamagotchi](http://edublog.amdsb.ca/myblogah1/files/2016/04/o-tama3-1f1lut1.jpg)

### Setup

* In the `homework` directory for today, `unit_1/w2d5/homework` make a directory `tamagotchi`
* Inside the `tamagotchi` directory, add an `index.html` and a `tamagotchi.js` (or `app.js` - your preference) and link them together
* Add a console.log and test that the message will appear in your Chrome console


## OBJECT METHODS

This weekend you are going to make a tamagotchi object and have it _do_ something. We can store functions inside objects.

1. Start by making a Tamagotchi, just a regular object with properties. Give it the following **keys** and you can assign whatever **values** you would like to make it your own: `name`, `creatureType`, `foodInTummy`, `restedness`, `health`.

>Example
```
var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10
}
```

Our objects can contain primitive datatypes as values for the keys, and we have seen that they can contain arrays and other objects as values too. Objects can also contain _functions_ as values. When a function is stored within an object, it's called a **method**.

2. Let's add a method of `cry` to our Tamagotchi that will log "Waaaaaa!!!" anytime the `cry` method is called.

3. Invoke the `cry` method to test that it works.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 12 - Made a Tamagotchi object"
<hr>

3. Write a method `puke` into your Tamagotchi object that console.logs the Tamagotchi having a sick-up (example: `Bleeeeh :O~~`)

4. Invoke the `puke` method to confirm that it works.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 13 - Made a puke method"
<hr>

5. Write a method `yawn` into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired (example: `Yaaaawwwwn!`).

6. Invoke the `yawn` method.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 14 - Made a yawn method"
<hr>

Remember that using when using the keyword `this`, we can have our object methods _act upon_ other properties that are intrinsic to our object.

7. Update the `yawn` and `puke` methods to output the Tamogatchi's name in the sentence with the yawn or puke action. Execute these methods to confirm the output.

8. Update the `cry` method to decrease the amount of food in the Tamagotchi's tummy.

9. In addition, the `cry` method should now also log a sentence that will tell us the amount of food in the Tamagotchi's tummy.

Hint: We would refer to the `foodInTummy` property with `this.foodInTummy`.

10. Execute the `cry` method to see the output.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 15 - updated puke and yawn methods"
<hr>

## Another Tamogatchi

1. Create another Tamogatchi. This new Tamogatchi should have the **same keys and methods** as the first, but the values for:
`name`, `creatureType`, `foodInTummy`, `restedness`, `health`

2. Run the methods on this new Tamogatchi and notice that they should reference the name of this new Tamogatchi.


<hr>
&#x1F534; The commit message should read: <br>
"Commit 16 - made a 2nd Tamogatchi"
<hr>

## Update The Methods on Both

1. Make it so that when `puke` is invoked, it decreases the object's health value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

2.  Make it so that when `yawn` is invoked, it decreases the object's restedness value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

<hr>
&#x1F534; The commit message should read: <br>
"Commit 17 - updated puke and yawn methods on both"
<hr>

## Let's Play

Objects can communicate with each other, and we don't need `this` for objects to communicate with each other. All it takes is for an object to refer to a previously defined object.

1. Let's make another object, a `player`. The player should have a key of `name` and you can provide the value.

2. Let's give your player an action `sayName` that will log the sentence: "Hi my name is: " with your player's name at the end.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 18 - made a player"
<hr>

3. Objects can work together! All we need to do is refer to a previously defined object. Let's give our player a `feedTamagotchi` method that feeds our tamagotchi. Start by choosing one Tamogatchi to feed and increase their `foodInTummy` by 1 each time this method is called.

4. Check that the Tamogatchi is successfully being fed.

5. Update your `feedTamagotchi` method to have your player feed both of the Tamogatchi.

6. Run your method and check that both are being fed.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 19 - the player can feed the Tamogatchi"
<hr>

7.  Write a `medicateTamagotchi` method that takes an argument (a Tamagotchi) that will give the specified tamagotchi medicine and increase its health by 1.

8. Invoke the `player.feedTamagotchi(your_tamagotchis_name)` method to see if it works

<hr>
&#x1F534; The commit message should read: <br>
"Commit 20 - the player can medicate a Tamogatchi"
<hr>

9. Write a `knockOutTamagotchi` method in the player object that will put the tamagotchi to sleep and increase its restedness by 1.

10. Invoke the `player.knockOutTamagotchi(your_tamagotchis_name)` method to see if it works.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 21 - the player can knock out a Tamogatchi"
<hr>

## Bring it to Life

### Global
We're going to ignore the `player` object for a while, and just focus on bringing our Tamagotchi to life.

We are going to automate our Tamagotchi object! Let's use `setInterval`.

1. Write a setInterval `hungerTimer` that will make the Tamagotchi cry every 6 seconds (6000 milliseconds)

2. Write a setInterval `yawnTimer` that will make the Tamagotchi yawn every 10 seconds

3. Write a setInterval `sickTimer` that will make the Tamagotchi puke every 25 seconds

NOTE: As it is, to stop the timers from running you will need to comment them out and refresh the page.

To stop the interval of the hungerTimer, use `clearInterval(hungerTimer)` globally.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 22 - brought to life Tamogatchi (globally)"
<hr>

### Inside the Objects
Let's put our intervals inside out `tamagotchi1` object.

1. Make it so that your Tamagotchi objects will run a `start` method that will run the `hungerTimer`, the `yawnTimer`, and the `sickTimer`.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 23 - brought to life Tamogatchi (inside the objects)"
<hr>

# Videos

#### Advanced Selectors

1. Watch [this video](https://www.youtube.com/watch?v=Zudl-fCDSdM&index=14&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about family selectors.
1. Watch [this video](https://www.youtube.com/watch?v=PuF0drOMN3E&index=15&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about attribute selectors.

#### Responsive Design

1. Watch [this video](https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) an introduction to responsive design.
1. Watch [this video](https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about mobile first design using min/max-width/height
1. Watch [this video](https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about media queries.

# Hungry for More (Iterators)?

## forEach

### New! Try it out - maybe do some research

`const gizmo = {start: 10, end: 6, location: "remote", type: "wdi"};`

1. Use the `gizmo` **object** to console log each value in the object.

2. Using the `gizmo` object, console log both the key and value.

## reduce

1. Return a single array.
```
const arr = [[8, 8], ["eight", "eight"], ["ate"]];
```

## chaining

```
const stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];
```

Use the `stocks` array of objects for the following:
1. create a new variable called `filteredStockSymbols` to create new array that only contains the objects with a price above 150 (hint: use `filter`).
2. use the iterator pipeline (chaining) to make filteredStockSymbols contain only the stock symbol of these filtered objects (hint: use `map`).
3. continue using the pipeline and console log each of the symbols from the `filteredStockSymbol` array.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 24 - Worked on Hungry for More (Iterators)"
<hr>


# Hungry for More (Tamogatchi)?

1. Let's specify what food we are feeding to our tamagotchi. Update the console.log to show which Tamogatchi is being fed and what they have been fed.

2. Invoke the `feedTamagotchi` method and provide an arguments for it.

Hint: We give our function an additional **parameter**, and invoke it with both **arguments**:

3. Make it so that you can specify what medicine you will give your Tamagotchi.

4. Try invoking the player methods in the console and provide arguments to them.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 25 - completed Hungry for More Tamogatchi"
<hr>

5. Write a `stop` method inside your tamagotchi that will clear the Intervals

<hr>
&#x1F534; The commit message should read: <br>
"Commit 26 - Hungry for More - wrote a stop method to clear the intervals"
<hr>

# Still Hungry?
We want it so that our player can just click buttons on the page rather than type in the commands to feed the Tamagotchi, etc.

1. Write three buttons into your index.html: 'feed', 'rest', 'medicate'. When the buttons are clicked, they should invoke the respective player object methods to give the Tamagotchi what it needs.

2. Write a button that will `start` the tamagotchi

<hr>
&#x1F534; The commit message should read: <br>
"Commit 26 - Hungry for More - wrote a buttons to run actions on my Tamogatchi"
<hr>
