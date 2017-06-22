![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Combining data types/Callbacks<br>
Type: Homework<br>
Duration: "4:00"<br>
Creator: Matt Huntington<br>
    Course: WDIR-Hopper<br>
Competencies: Objects, Arrays, Loops <br>
Prerequisites: JavaScript <br>

---
# Homework

## Combine objects, arrays, and functions

**COMPLETE ANY 3**

1. Create an object that has a property that is an array. Log one of the elements of that array.
1. Create an object that has a property that is an object. Log one of the properties of that inner object.
1. Create an object that has a property that is a function (method).  Call that method.
1. Create an array that has an object in it.  Log one of the properties of that object.
1. Create an array that has an array as one of its elements.  Log one of the elements of the inner array.
1. Create an array that has a function as one of its elements.  Call that function.
1. Create an object that has a property that is an array. Loop over the array and log each individual element.
1. Create an array that has an array as one of its elements.  Loop over the second array and log each individual element.
    - Bonus: make each element of the outer array an array as well.  Using two for loops, loop over each array in the outer array and log those elements.

**Commit 1** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - Combine objects, arrays, and functions"
<hr>

## Combine objects, arrays, and functions more than one level deep

**COMPLETE ANY 3**

1. Create a function that returns an object.  Log a property of that object (hint: call the function and then call a property on the return value).
1. Create a function that returns an array.  Log an element of the array.
1. Create a function that returns an object that has an array.  Log one of the elements of that array.
1. Create a function that returns an object that has an object.  Log one of the properties of the inner object.
1. Create a function that returns an object that has a method.  Call that inner function (method).
1. Create a function that returns a function.  Call that inner function
1. Create an object that has a method that returns an object.  Log a property of the inner object.
1. Create an object that has a method that returns an object that has an array.  Log an element of that array.
1. Create an object that has a method that returns an object that has an object.  Log a property of the inner object.
1. Create an object that has a method that returns an object that has another method.  Call the inner method.
1. Create an object that has a method that returns a function.  Call that function.
1. Create an array that has a function that returns an object.  Log a property of the object.
1. Create an array that has a function that returns an object that has an array.  Log an element of the inner array.
1. Create an array that has a function that returns an object that has an object.  Log a property of the inner object.
1. Create an array that has a function that returns an object that has a method.  Call that method.
1. Create an array that has a function that returns a function.  Call the inner function.

**Commit 2** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Combine objects, arrays, and functions more than one level deep"
<hr>

## Create a callback

1. Define two functions and set them to variables
1. The second function takes a parameter
1. Call the second function, passing in the variable that references the first function as the parameter
1. In the definition of the second function, invoke (call) the parameter that is being passed into it.  Remember, this parameter is a function

**Commit 3** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - Create a callback"
<hr>

## Indentation

Correctly indent the following code:

```javascript
            if(true){
    var a = 2 + 2;
console.log(a);
        }

    if(true){
if(false){
            console.log('hi');
    }
                }
```

**Commit 4** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - Indentation"
<hr>

## Semantic naming of variables

Fix this variable to have a better name:

```javascript
var c = [2, 4, 6, 8, 10];
```

**Commit 5** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Semantic naming of variables"
<hr>

## Function definition placement

Clean up this code, so that it works and has function definitions in the correct place

```javascript
bar();
var bar = function(){
    console.log('bar here');
}
foo();

var foo = function(){
    console.log('foo here');
}
```

**Commit 6** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Function definition placement"
<hr>

## Commenting code

Write your own comments for each line of code:

```javascript
var addTwoNums = function(firstNum, secondNum){
    var finalValue = firstNum + secondNum;
    return finalValue;
}
```

**Commit 7** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Commenting code"
<hr>

## Describe some common programming principles

Read this article (don't worry it's short): http://www.artima.com/weblogs/viewpost.jsp?thread=331531

## Error reading

What is meant by the error this produces?

```javascript
foo();

var foo function(){
    console.log('hi');
}
```

**Commit 8** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - Error reading"
<hr>

## Using the Javascript Debugger

- Debug the following code in node and in the browser.
    - Node: `node debug filename.js`
    - Browser: load it into an html file and open the html file in the browser with the Chrome dev tools enabled (Inspect)

    ```javascript
    var a = 2 + 2;
    debugger
    console.log(a);
    debugger
    a *= 2;
    debugger
    a--;
    ```

- Jump from one debugger statement to the next
    - Node: `c`
    - Browser: blue play button

- Examine the variable `a` each time you jump to a new statement
    - Node: `repl` and then type the variable
    - Browser: type the variable in the console

## Coerce data types

Fix the following code so the log executes (don't change the `if` statement):

```javascript
var b = '5'

if(b === 5){ //will be false
    console.log('this line should execute');
}
```

Fix the following code so the value 10 is logged (change only the line that has the console.log on it):

```javascript
var a = '5';
console.log(5 + a);
```

**Commit 9** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - Coerce data types"
<hr>


<hr>

# Style Zoo

In this homework we will be using basic HTML and CSS selectors to style a list of animals in our zoo.

## Setup

1. Make a folder inside your `homework` folder for w02d03 called `style_zoo`
2. Make a file inside your `style_zoo` folder for called `index.html`.
3. Write all of your HTML in `index.html`. 
4. Create another file inside the `style_zoo` folder called `style.css`. 
5. Connect the CSS file to your HTML file.
6. Write all of your styling code inside this css file.

#### Need a refresher on how to connect your CSS to your HTML?
   - Place a link tag inside the `head` section of your HTML file that refers to your css file:    
    `<link rel="stylesheet" href="style.css">`

## Create Your Zoo

### Create the HTML

- Make a list of animals!
- Create an HTML file with a boilerplate.
- Add an unordered list of the following animals:  
    1. mouse  
    2. canary  
    3. penguin  
    4. salmon  
    5. cat  
    6. goldfish  
    7. dog  
    8. sheep  
    9. parakeet  
    10. tuna  

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 10 -  initial HTML setup".
<hr>


### Add Classes and IDs to the Animals

Based on your knowledge of these animals, assign the following:

1. Class `mammal` to all the mammals.
2. Class `bird` to all the birds.
3. Class `fish` to all the fish.
4. ID of the name of the animal to each of the animals (ex: `<li class="fish" id="tuna">tuna</li>`)

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 11 -  classes and IDs added to HTML".
<hr>

## Style Your Animals

### Style the animal groups

1. Create a css file (name it `style.css`) and connect it to your html document
1. Make all the text of the mammals red
1. Make all the text of the birds blue
1. Make all the text of the fish orange

#### What yours should look like
![Answer1](http://i.imgur.com/jkCG6id.png)

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 12 -  added styling to classes".
<hr>

### Style the individual animals

- Add a **background color** to the following animals:

1. mouse: lightgray 
1. canary: orangeRed  
1. penguin: black 
1. salmon: salmon
1. cat: sienna 
1. goldfish: gold 
1. dog: tan 
1. sheep: steelBlue 
1. parakeet: lime 
1. tuna: purple 

#### What yours should look like
![Answer2](http://i.imgur.com/fMfxMbu.png)

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 13 - added styling to ids".
<hr>

### Let's add some borders to your groups

1. Add a margin of 10px to all of the `li`s

In addition, add a border (5px solid) with the specified color to your classes:

1. mammal - PaleVioletRed
1. bird - CornflowerBlue
1. fish - DarkSlateGray

#### What yours should look like</summary>
![Answer3](http://i.imgur.com/jQoE9dw.png)
  
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 14 - styled borders".
<hr>


### Bold, italics, and underline (oh my!)

1. Make the mammals bold
1. Make the birds italic
1. Make the fish underlined
1. Strikethrough your least favorite animal on the list. 

#### What yours should look like</summary>
![Answer4](http://i.imgur.com/13TCWa5.png)
    
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 15 -  bold, italics, underlining, and strikeout".
<hr>

<hr>

## CSS Videos

1. Watch [this video on float](https://www.youtube.com/watch?v=-4Yy3WNmvmg&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=11)
1. Watch [this video on calc](https://www.youtube.com/watch?v=nIHRRZe9xvs&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=12)

# Hungry for more?

- Go back and complete all problems for Section 1 (Combine objects, arrays, and functions)
- Go back and complete all problems for Section 2 (Combine objects, arrays, and functions more than one level deep)

**Commit 16** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 16 - Worked on Hungry for More"
<hr>
