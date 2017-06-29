![ga](http://mobbook.generalassemb.ly/ga_cog.png)


<hr>
Title: Arrays & Conditionals<br>
Type: Lab<br>
Duration: 1.5 hr<br>
Creator: Kristyn Bryan<br>
Topics: Using arrays, loops, and conditionals to solve problems.<br>
<hr>

# Afternoon Lab

## Directions

Use the file `afternoon_lab_solutions.js` to write arrays, loops, `if`, or `if, else` statements to complete the following questions. Refer back to your class notes from today if you need help.

## Exercises

### Easy Does It
1. Create an array that contains three quotes and store it in a variable called `quotes`.

### Random
Given the following array `const randomThings = [1, 10, "Hello", true]`

1. how do you access the 1st element in the array?

2. Change the value of `"Hello"` to `"World"`.

3. Check the value of the array to make sure it updated the array.

### We've Got Class
Given the following array `const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]`

1. What would you write to access the 3rd element of the array?

2. Change the value of "Github" to "Octocat"

3. Add a new element, "Cloud City" to the array.

### Mix It Up
4. Given the following array `const myArray = [5 ,10 ,500, 20]`

1. using the `push` method, add the string `"Egon"` to the end of the array.

2. using a method, remove the string from the end of the array.

3. using the `unshift` method, add the string `"Bob Marley"` to the beginning of the array

4. using a different method, remove the string from the beginning of the array

5. use the reverse method on this array

### Biggie Smalls
Write an `if..else` statement:

1. console.log `little number` if the number is entered is less than **100**

2. If the number entered is 100 or more, alert `big number`.

### Monkey in the Middle
Write an `if...else if...else` statement:

1. console.log `little number` if the number entered is less than **5**.<br>

2.  If the number entered is more than 10, log `big number`.

3. Otherwise, console.log "monkey". <br>

### What's in Your Closet?

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.

2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named `kristynShoe`.

3. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**

4. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.

5. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.

6. In the same way, access one item from Thom's pants array.

7. Access one item from Thom's accessories array.

8. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`

9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.
