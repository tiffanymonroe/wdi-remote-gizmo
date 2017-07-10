![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Classes<br>
Type: Homework<br>
Duration: "4:00"<br>
Creator: Matt Huntington<br>
Modified by: Kristyn Bryan<br>
    Course: WDIR-Gizmo<br>
Competencies: Classes<br>
Prerequisites: JavaScript <br>

---
# Homework

## Setup

1. Make a file inside your `homework` folder called `answers.js`.
2. Write all of your code in `answers.js`.

## Making Classes

1. Create a class for a `Pet`
    - **attributes**
        - `name` (the constructor takes one parameter and then sets this property on the instance to value of the parameter)
        - `owner` (initially set to '' within constructor)
    - **methods**
        - `setOwner(owner)` - sets the `owner` property to the parameter passed into this function

    **Commit 1** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 1 - Created Pet Class"
    <hr>

1. Create a class for a `Dog`
    - this should **inherit** the attributes from `Pet`
    - **attributes**
        - `price` (the constructor takes a parameter in addition to that of `Pet` and then sets this property on the instance to the value of the additional parameter)
    - **methods**
        - `bark()` - log "bark"
        - `chaseTail()` - log "oh boy oh boy oh boy"
        - `getPrice()` - return price

1. Create an instance of Dog called "Sparky" and set add all the details that need to be added to make a "complete" Dog. Run the methods to ensure that everything works.

    **Commit 2** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 2 - Created Dog Class"
    <hr>

1. Create a class for a `Cat`
    - this should inherit from `Pet`
    - **attributes**
        - `price` (the constructor takes a parameter in addition to that of Pet and then sets this property on the instance to the value of the additional parameter)
    - **methods**
        - `purr()` - log "purrrrr"
        - `clean()` - log "cleaning"
        - `getPrice()` - return price

1. Create an instance of Cat called "Sprinkles" and set add all the details that need to be added to make a "complete" Cat. Run the methods to ensure that everything works.

    **Commit 3** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 3 - Created Cat Class"
    <hr>

1. Create a class for a `Person`
    - **attributes**
        - `name` - set name from parameter in constructor method
        - `age` - initially 0
        - `weight` - initially 0
        - `mood` - integer starting at 0 initially
        - `pets` - empty array initially
        - `bankAccount` - initially set to 0
    -  **methods**
        - `getName()` - returns the name of the person
        - `getAge()` - returns age
        - `getWeight()` - returns weight
        - `greet(other_person)` - logs a message with another person's name
        - `eat()` - increment weight, increment mood
        - `exercise()` - decrement weight
        - `age()` - increment age, increment weight, decrement mood, increment bank account by 10 (birthday money)
        - `buyPet(pet)` - push the pet object onto the `pets` array, increment mood by 10, decrement bankAccount by the value of the pet (hint: getPrice())

1. Create an instance of Person called "Jill" and set add all the details that need to be added to make a "complete" Person. Run the methods to ensure that everything works.

    **Commit 4** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 4 - Created Person Constructor Function"
    <hr>

## Create a Story

1. Create at least one instance **each** of a `Dog`, `Cat`, and `Person`.
2. Create and code a story where you have these instances interact.

*Example of a story:*
Timmy is 5 years old. He's sad and wants a new pet. On his birthday, he buys a cat named "Fluffy"... We see Timmy again 20 years later. He wants to adopt a dog. He names it "Sprinkles". Timmy eats some a chocolate croissant in celebration of the adoption.

* Code this story out as well.

**Commit 5** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Created and coded a story"
<hr>

## CSS

1. Please watch these videos

    - https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
    - https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
    - https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J

2. Setup a new folder and files:
  - Create a new folder called `layout_practice` inside your `homework` folder.
  - Inside `layout_practice`, create an `index.html` and `style.css` file.  
  - Write your code for the exercise below in these files

3. Take a look at [this image](https://blog.red-website-design.co.uk/wp-content/uploads/2016/12/7-Web-Design-UX-Trends-for-2017-Is-Your-Site-Up-to-Date-1.jpg)

  - Create this layout.
  - The colors do not have to be exact (or even close)
  - The fonts do not matter
  - The images can be any image

**Commit 7** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Layout Practice"
<hr>

## Hungry for more?

## Factories

1. Create a single factory object to generate shoes
    - The factory should have an array of shoes that it has generated
    - A shoe should have a serial number, based on what index it is in the factory's shoes array

2. Create a constructor function for a mall_store.
    - A mall_store should have a name method that creates a new store that takes the store name as a parameter  ("Abercrombie", "Build-a-Bear", "Payless Shoes") which is set by passing a parameter into the constructor function.
    - The factory should keep track of how many stores that were created.
    - A shop should have a serial number attribute, based on the order that it was created in the factory.

**Commit 6** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Factories"
<hr>

1. Finish the [lab](https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_1/w03d01/student_labs/README.md) from today
1. Use the material from the lab today to make a story like you did for Commit 5
1. Keep solving problems from [Project Euler](https://projecteuler.net/) or [CodeWars](https://www.codewars.com/) 
