![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: JS Express & Routes Practice<br>
Type: Homework<br>
Duration: "2:00 - 4:00"<br>
Creator:<br>
    Original creators: WDI-Skywalker & WDIR-Matrix<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Hopper<br>
Competencies: Javascript, Express, Routes, Node<br>
Prerequisites: Javascript <br>

---

#Express Yourself

## Learning Objectives
* Practice setting up express applications.
* Practice creating custom routes.
* Practice using parameters from a request.

# Setup
1. Create a Javascript file `express_homework.js`. Write your answers inside this one js file.

2. Put the title of the section above your code for easy reference.
Ex:
```
//Greetings App
app.get('/greeting/:name', (req, res) => {
  res.send({params: req.params, queries: req.query})
});
```

3.Inside your homework folder, install express `npm install --save express`. Check your files. Hint: You can check to make sure your installation was successful in one of the following places:
- Your `package.json` file should have `express` listed in the dependencies.
- You could also check in your `node_modules` folder to see an`express` folder.

4. You can do this once in your application to run all of the answers below:
- Inside your Javascript file, require `express` (look back to the markdown from today if you need more help on how to do this) and invoke the function.
- Tell the server where to listen for requests (the port).

:elephant: Need a reminder about getting and sending info?

```
app.get('/greeting/:name', (req, res) => {
  res.send({params: req.params, queries: req.query})
});
```

# Answer These Questions


## Greetings
1. Add this title in your application as a comment and write the code to answer the question below the title.

2. Your app should have a route of `'/greeting/'` and it should send a generic greeting to the screen like "Hello, stranger".

3. Your app should have a route of `'/greeting/:name'` and it should expect *1 param* which takes in a person's name.

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

&#x1F534; **Commit 1** <br>
<hr>
"Commit 1: Greeting express application created."
<hr>

## Tip Calculator
1. Add this title in your application as a comment and write the code to answer the question below the title.

2. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.

3. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

&#x1F534; **Commit 2** <br>
<hr>
"Commit 2: Tip Calculator express application created."
<hr>


## Magic 8 Ball
1. Add this title in your application as a comment and write the code to answer the question below the title.

2. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3.  So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the  screen.

4. Remember that we can't use spaces in the url, so we use `%20` to express a space in the url.

5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the  screen.
- Use this array of Magic 8 ball responses.....

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

&#x1F534; **Commit 3** <br>
<hr>
"Commit 3: Magic 8 Ball express application created."
<hr>

# Intro to the Internet
Read these [notes](https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_2/w05d01/instructor_notes/INTRO_TO_INTERNET.md)
Watch this [video](https://www.youtube.com/watch?v=7_LPdttKXPc) about the internet AND this [video](https://www.youtube.com/watch?v=xIuBmOufbls) about packets travel on the internet.

# Hungry for more?

## Fibonacci
1.  Add this title in your application as a comment and write the code to answer the question below the title.

2. Create a route 'fibonacci'

3. This route will take one param, the number we will operate on.

4. If the number param is not a [fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number), print out "Brah, I can tell this ain't a fibonacci number. Wack."

5. If the number is a Fibonacci number print out "Sweet number, dude."

&#x1F534; **Commit 4** <br>
<hr>
"Commit 4: Fibonacci application created."
<hr>

## Fibonacci Continued
1. Take in a number that will refer to the index of a Fibonacci number. Print out the Fibonacci number that is located at that index.

```
Example:
The Fibonacci sequence:
1,1,2,3,5,8,13,21,34,55,89,144, ...;

num = 4

Output => 5
```

&#x1F534; **Commit 5** <br>
<hr>
"Commit 5: Hungry for more: Fibonacci application extended."
<hr>

2. Sign up for HackerRank: https://www.hackerrank.com/. Solve a few of the problems (for those of you who don't have a job, this will help get you prepared for interviews! A lot of companies use this site for pre-screening interviews.)

# CSS Videos

Continue to grow your CSS knowledge!

#### Fonts

1. Watch [this video](https://www.youtube.com/watch?v=LpcWfqXviB0&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=24) about fonts
1. Watch [this video](https://www.youtube.com/watch?v=pSNPtbAd_7o&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=25) about sprite sheets
1. Watch [this video](https://www.youtube.com/watch?v=4wz2a_ZVGcU&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=26) about font icons
1. Watch [this video](https://www.youtube.com/watch?v=JpIAc5ko-lM&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=27) which is more about icon fonts
1. Watch [this video](https://www.youtube.com/watch?v=r2-G0r5QGGI&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=28) about SVGs
