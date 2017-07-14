![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Calculator <br>
Type: Lab <br>
Duration: "2:00"<br>
Creator:<br>
    Original creators: WDI-Panthalassa, WDI-Archer, WDI-Funke, WDIR-Matrix<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Hopper <br>
Competencies: HMTL, CSS, Javascript functions, jQuery and DOM<br>
Prerequisites: Javascript, CSS, HTML <br>

---

# Calculator

## Lets build a calculator!
![loop](http://www.mememaker.net/static/images/memes/3861758.jpg)

- Build a calculator in your browser!

## User Stories

Hey! It's a new vocabulary word!

User stories are a great way to break down what the different features of the website are, and how to structure it. They are generally written out in this form "A user should be able to...". Here are the user stories for our lab:

1. A user should be able to select numbers so that they can do things with them.
2. A user should be able to add numbers together.
3. A user should be able to subtract numbers.
4. A user should be able to divide numbers.
5. A user should be able to multiply numbers together.
6. A user should be able to see the output.

### Hungry for more?

7. A user should be able to clear all operations and start from 0.


## Setup

1. Create a directory in your `morning` student lab folder called `calculator`.

2. Create 3 files. a javascript file, a css file, and an html file (you choose the names).

3. In your html file, add the boilerplate code.

4. Using a link tag, link your CSS file to the html file.

5. Include a link to jQuery in the head of your HTML.

5. Using a script tag, link the JS file to your html file (where does this script tag go? If you don't know, do some Googling).

6. Add a line to your .js file `console.log("My calculator javascript file is connected")`. Open your .html file in your browser. Use your Chrome Dev Tools and look at the console. Do you see your note? If you do, success! You're linked. If you don't see it, then something is amiss.

## Design your calculator.

1. Before you type out your HTML, draw out how you want your calculator to look and start thinking about how to structure your html. Don't spend more than 10 minutes thinking through this part, but put something on paper before you code. This is your chance to create a [wireframe](http://www.creativebloq.com/web-design/jargon-wireframes-mockups-prototypes-51514898)!

2. Think about where the input and output needs to be (buttons and display screen).

## Write the html needed for the calculator

1. Now that you have your wireframe drawn, use it to write the html needed for your calculator.

2. Think about using ids and/or classes to help you select your elements!

## Need help? Here are things to think about

- You'll want to have a "screen" to display the results from your calculator. This could be as simple as just a div. Assign it an id to make it easy to grab!

- Thinking about your calculator, each of the number "buttons" should probably be divs. If you used a `button` tag, the styling would be a little difficult. Assigning ids is a possibility, but you could also grab them by their innerHTML!

- Don't forget to make elements for your operators (`+`, `-`, `*`, `/`, `=`). You can give them ids to help grab them as well.

- Hard code! Put the actual numbers for the calculator into your HTML. There's no need to dynamically create the number and operator buttons; they won't be changing value.

## Initial CSS

1. Write your initial CSS to make a rough copy of what you want your calculator page to look like. This could be just placing a border around everything so that you can see where your numbers and operators are located (make it easier to click and test).

For now, don't spend too much time on your CSS. You will come back to it.

2. Make sure all of the interactive parts of the website are visible. This way, as you're building out the functions in your javascript file, you'll be able to test your code.

3. Make sure that, wherever you are going to show the output, (the screen) is large enough to display the numbers that will be your output. A good way to do this is to actually hardcode something into your html file (like the numbers "123456" inside the element) so that you know you can see it.


Need help?
- If you want to keep things simple, start by putting a border around all of your divs:

```
div {
    border: 1px solid black;
}
```
- Set a height and width for your number buttons (maybe add a class to your html number elements?). You pick the height and width, but start out by testing them at 50px for both;

- Set a height and width to your operator elements and a separate height and width to your screen.


## Things to think about

1. In this problem, state is very important. Try to think about how you are going to store the state of the calculator. What kind of information do you need to track?

2. When the user clicks a button, how are you going to get which number or operation they clicked? When they click a certain button, what code are you going to have to run?


## JavaScript

User stories are a great way to break down exactly what needs to be done, so look back at them.

1.  Start by figuring out what information you need to store. You can always revise this later as you realize you need more.

2.  Events: start determining how you will handle user input (pressing buttons). Start actually writing the event handlers. What needs to change when a user clicks a button?

3.  Functions: decide what functions need to be defined (think about what will have to be done once someone clicks a button. Hint: `add`, `subtract`, `multiply` are a few).

4.  Use the functions previously defined to preform operations on our data. Start using the functions defined above in the event handlers. What functions need to be called when they click a button?

5.  Test, fix, retest, fix, retest,...

6.  Look back on code written and think about better ways to implement it. Maybe somethings not working at all, how can we restructure the code we have so that it does?


# Hungry for more?

## Improve your CSS

1. Update the colors and layout to make it look like a calculator that you would be proud to show to your friends!

2. Import a font from Google fonts and get it working on your page.

3. Take a screenshot of your new calculator. Save it in your `calculator` folder as `my_calculator_with_css_updates`.


## DRY
1. Add a `clear` button that will clear your screen and start over at zero.

2. Once you have the basics of the calculator working, look back at your code. You want to make it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).  Start to refactor (another vocabulary word) your code to take out unneeded parts or implement something in a better way.

3. What other operations can you add to the calculator? If you have time, implement them. If you don't have time, but have some ideas, add comments to your code about what you'd like to add. How might you implement them? Is your code friendly to adding in new operations if another developer came in to add something to your code?

4. Can you save the results somewhere?
