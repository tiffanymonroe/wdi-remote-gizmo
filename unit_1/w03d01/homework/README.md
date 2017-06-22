![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Constructor Functions<br>
Type: Homework<br>
Duration: "4:00"<br>
Creator: Matt Huntington<br>
    Course: WDIR-Hopper<br>
Competencies: Constructor Functions<br>
Prerequisites: JavaScript <br>

---
# Homework

## Setup

1. Make a file inside your `homework` folder for w02d03 called `answers.js`.
2. Write all of your code in `answers.js`.

## Constructor Functions

### The constructor functions

Create the following objects

1. Create a constructor function for a Pet
    - public attributes
        - owner - string
        - name - string
    - constructor function takes the pets name as a parameter and sets the public attribute

    **Commit 1** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 1 - Created Pet Constructor Function"
    <hr>

1. Create a constructor function for a Dog
    - this should inherit from Pet
    - private attributes
        - price - 20
    - public methods
        - bark() - log "bark"
        - chaseTail() - log "oh boy oh boy oh boy"
        - getPrice() - return price

    **Commit 2** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 2 - Created Dog Constructor Function"
    <hr>

1. Create a constructor function for a Cat
    - this should inherit from Pet
    - private attributes
        - price - 10
    - public methods
        - purr() - log "purrrrr"
        - clean() - log "cleaning"
        - getPrice() - return price

    **Commit 3** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 3 - Created Cat Constructor Function"
    <hr>

1. Create a constructor function for a Person
    - private attributes:
        - name - set name from parameter in constructor method
        - age - initially 0
        - weight - initially 0
        - mood - integer starting at 0 initially
        - pets - empty array initially
        - bankAccount - initially set to 0
    - public methods:
        - getName() - returns name
        - getAge() - returns age
        - getWeight() - returns weight
        - greet() - logs a message with person's name
        - eat() - increment weight, increment mood
        - exercise() - decrement weight
        - age() - increment age, increment height, increment weight, decrement mood, increment bank acount by 10 (birthday money)
        - buyPet(pet) - push the Pet object onto the pets array, increment mood by 10, decrement bankAccount by the value of the pet (hint: getPrice())

    **Commit 4** <br>
    <hr>
    &#x1F534; The commit message should read: <br>
    "Commit 4 - Created Person Constructor Function"
    <hr>

### Creating a story

1. Instantiate a new Person named Timmy
1. Age Timmy five years
1. At this point Timmy's a little bummed.  As a precocious child, he feels he's "seen it all" already.  Have him eat five times.
1. Now Timmy's a little heavier than he wants to be.  Kindergarten's coming up and he wants to look good.  Have him exercise five times
1. Age Timmy 9 years
1. Create a dog named "Lassie"
1. Set Lassie's owner to the string "Timmy"
1. Have Timmy "buy" Lassie
1. Age Timmy 9 years
1. Create a cat named "Scratchy"
1. Set Scratchy's owner to the string "Timmy"
1. Have Timmy "buy" Scratchy
1. Age Timmy 4 years
1. Have Timmy eat twice
1. Have Timmy exercise twice

**Commit 5** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Created the story"
<hr>

## Factories

1. Create a single factory object to generate shoes
    - The factory should have an array of shoes that it has generated
    - A shoe should have a serial number, based on what index it is in the factory's shoes array
1. Create a constructor function for coat factories
    - A factory should have a name attribute which is set by passing a parameter into the constructor function for the factory
    - A factory should have an array of coats that it has generated
    - A coat should have a serial number attribute, based on what index it is in the factory's coat array
    - A coat should have a maker name attribute, which the factory sets during generation

**Commit 6** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Factories"
<hr>

## CSS

1. Please watch these videos

    - https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
    - https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
    - https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J
    
1. Take a look at [this image](https://blog.red-website-design.co.uk/wp-content/uploads/2016/12/7-Web-Design-UX-Trends-for-2017-Is-Your-Site-Up-to-Date-1.jpg) block out the different sections of it (which column goes where, etc)
    - To do this, create an `index.html` and `index.css` file.  Write your code in these files
    - The colors do not have to be exact (or even close)
    - The fonts do not matter
    - The images can be any image

**Commit 7** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Layout Practice"
<hr>

## Hungry for more?

1. Finish the [lab](https://github.com/ga-students/wdi-remote-hopper/blob/master/unit_1/w02d04/student_labs/README.md) from today
1. Use the material from the lab today to make a story like you did for Commit 5
1. Complete [the Pokemon Card Game lab](https://github.com/ga-students/wdi-remote-hopper/tree/master/unit_1/w02d03/student_labs)
