![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Angular Basics - Fast Lane & jService <br>
Type: Homework <br>
Duration: "4:00"<br>
Creator:<br>
    Original creator: Kristyn Bryan for Matrix and Thom Page for WDI-Meeseeks <br>
    Modified by: Kristyn Bryan <br>
    Course: WDIR-Gizmo<br>
Competencies: Basic Angular <br>
Prerequisites: Angular, Javascript, HTML, CSS, AJAX <br>

---
# Angular Basics

## Setup

- In your `homework` directory for tonight, create an `index.html` file.

- Create an `app.js` file.

- In your `index.html` file, add the boilerplate tags, attach your `app.js` file, add a script tag for [Angular](https://angularjs.org/).
`<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>`

- Test that your app is connected and that Angular is connected (add some angular tags to output `{{2+2}}`. `4` should show on your page if Angular is properly connected).

NOTE: You can either use this single file setup to solve all of your homework OR you can create individual folders and files (html and js file) for each section. It's up to you, but just make sure that you work inside the homework folder.

<hr>

## What it looks like to be successful

**In your HTML**

![angular tags with addition](https://i.imgur.com/u1qznvV.png)

**In your browser**

![output](https://i.imgur.com/HhjEybm.png)

**In your JS file**

![js file](https://i.imgur.com/AvFhnJu.png)

**In your Console tab**

![console tab](https://i.imgur.com/8sJGdNg.png)

**In your Network tab**<br>
_notice both app.js and angular.js were retrieved with no errors. `angular.min.js` has a status of 200 (which means that it was successful)_

![network tab](https://i.imgur.com/FebDMgm.png)

<br>
<hr>

# Part 1
### Life in the Fast Lane

Create a single page application with a controller titled `CarsController`.

<hr>
&#x1F534; COMMIT 1<br>
"Commit 1: FAST LANE - CarsController is created."
<hr>

The following array should be stored as `types` on the CarsController:
  ["Honda", "Ford", "Chevy", "Tesla"];

The following array should be stored as `colors` in the CarsController:
  ["gold", "blue", "silver", "white", "black", "grey"]

<hr>
&#x1F534; COMMIT 2<br>
"Commit 2: FAST LANE - types and color are set in the CarsController."
<hr>

Make a single page application that displays:
  - An unordered list of the types of cars.
  - A separate unordered list of the colors of the cars.
  - Give each of these lists a heading with the name of the section.

<hr>
&#x1F534; COMMIT 3<br>
"Commit 3: FAST LANE - color and type are displaying on page."
<hr>

![car information displayed](https://i.imgur.com/UCeyiNr.png)

Add on an additional controller called `DriversController`.

<hr>
&#x1F534; COMMIT 4<br>
"Commit 4: FAST LANE - DriversController is created."
<hr>

The following data should be stored in the `DriversController`:
  - `name` should be your name
  - `driverImg` should be a picture of your (or whatever you want for your image)
  - `isShy` should be set to false.

<hr>
&#x1F534; COMMIT 5<br>
"Commit 5: FAST LANE - DriversController data is set."
<hr>

Display the name and image in your application below the car information.

<hr>
&#x1F534; COMMIT 6<br>
"Commit 6: FAST LANE - Driver data displays on page."
<hr>

![name and image](https://i.imgur.com/mM78vyc.pngg)

Use what you've learned to hide your image if `isShy` were to be set to `true`.

<hr>
&#x1F534; COMMIT 7<br>
"Commit 7: FAST LANE - Driver picture is hidden when isShy is true."
<hr>

# Part 2

## jService API

jService is an API that has Jeopardy trivia questions and answered available to the public.

http://jservice.io/

1. Create a new folder and files for this section if you're choosing to separate that way. If not, just create a new controller for this portion.

2. In your html, make a button labeled "Random Trivia Question"

3. Connect this button to an `ng-click` that will call on a function in your controller that will make a `GET` request to get random trivia data. Because you're still new to APIs, I want to start you off with a win by giving you the URL: `http://jservice.io/api/random`

4. Store the data that is returned in a variable inside your controller.

5. Make a `div` in your HTML where you display the **question** only. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

6. Make a `div` in your HTML where you display the **answer**

# Hungry for More?

1. Instead of having having the answer show up on the page after the request, create a button "Show Answer". Once it's clicked, display the answer.

2. Make another button titled `Get 10 Questions`.

3. Make a request to get random trivia data that returns 10 items:
ex: `'http://jservice.io/api/random?count=10'`

4. Use what you learned today to display all 10 of the questions.

5. Include a button with each of the questions to reveal that will reveal the answer when clicked.

6. Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button);

7. Research other APIs! Find one that looks interesting and make a "GET" request for some data.
