![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Angular Basics - Fast Lane, Cipher & Shuffler <br>
Type: Homework <br>
Duration: "4:00"<br>
Creator:<br>
    Original creator: Kristyn Bryan for Matrix and Thom Page for WDI-Meeseeks <br>
    Modified by: Kristyn Bryan <br>
    Course: WDIR-Gizmo<br>
Competencies: Basic Angular <br>
Prerequisites: Angular, Javascript, HTML, CSS <br>

---
# Angular Basics

## Setup

- In your `homework` directory for tonight, create an `index.html` file.

- Create an `app.js` file.

- In your `index.html` file, add the boilerplate tags, attach your `app.js` file, add a script tag for [Angular](https://angularjs.org/).

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

1. Make a request to get random trivia data.

2. Limit the request of trivia data that is returned to only 20 items:
ex: `'http://jservice.io/api/random?count=10'`

3. Display the trivia questions in a section called "Random"

4. Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category.

5. Create a section titled the name of your category. Display the trivia data that was returned for that category.


## Hungry for More

### SONG LYRICS SHUFFLER

You will make a static page that displays songs with the song title, author, year, and lyrics. For no really good reason other than to practice `ng-click` and execute controller functions, you will be able to shuffle the order of the lyrics by clicking a shuffle button, as well as hide/show the song by clicking on the title.

Ultimately, you can add new songs to the page.

Sample screenshot:

![Song Shuffler](https://i.imgur.com/Y8N0p3c.png)
#### The app should:
- Display song titles, authors, years, and lyrics line by line
- Hide / show the song by clicking on the title (the title does not get hidden 'cos you still have to click on it to show the song again)
- Shuffle the lyrics by pressing a shuffle button
- Add a new song
	- When entering lyrics, the user should separate the lines of lyrics with a comma. **HINT FOR LATER** when the form is submitted, the app could `split` the lines by comma for use in an array  

#### Set up - you will need:
- `index.html`
- `app.js`
- `style.css` if you want to add some style

##### Sample data

```
this.songs = [
  {
	author: "De La Soul",
    title: "Ring Ring Ring",
	lyrics: [
		      "Hey how ya doin'",
	          "Sorry ya can't get through",
			  "Why don't you leave your name",
			  "And your number",
			  "And I'll get back to you"
			],
	year: 1991,
	hidden: false
  }, {
	author: "Ini Kamoze",
	title: "Here Comes the Hotstepper",
	lyrics: [
			  "Here comes the hot stepper",
			  "I'm the lyrical gangster",
			  "Pick up the crew in-a de area",
			  "Still love you like that"
	        ],
	year: 1995,
	hidden: false
   }, {
		author: "Snow",
		title: "Informer",
		lyrics: [
				  "Informer",
				  "You no say daddy me Snow me-a gon' blame",
				  "I lick he boom boom down",
				  "'tective man they say, say daddy me Snow me stab someone down the lane",
			      "I lick he boom boom down."
			    ],
				  year: 1993,
				  hidden: false
   }
];
```

Server and database will be introduced tomorrow
Overall, you will need data and functions in your controller.

&#x1F534; Commit 1 <br>
<hr>
"Song-Shuffler - Set up my initial files."
<hr>


##### Display songs
- Add your script tag for Angular
- module / `ng-app`
- controller / `ng-controller`
- `ng-repeat` ( you might want to include a `track by $index` in the directive params, but if you don't need to, then don't)
- `ng-click` (hint: you can pass in $index as a param)
- `ng-if` or alternatively, `ng-hide` and/or `ng-show`
- curlies `{{ }}`

&#x1F534; Commit 2 <br>
<hr>
"Commit 2: Song-Shuffler - Setup and now displaying the songs."
<hr>

#####Add a song
- a form with an `ng-submit`
- inputs that route to `ng-model`s which could be inside a formdata object in the controller maybe.

&#x1F534; Commit 3 <br>
<hr>
"Commit 3: Song-Shuffler - Setup and now able to add a song."
<hr>

##### Shuffle function
Pass in an array and the shuffle function will randomize the order of the elements

```
	  function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
    	return a;
	  }
```

&#x1F534; Commit 4 <br>
<hr>
"Commit 4: Song-Shuffler - Can shuffle the order of the songs."
<hr>

Add a little bit of styling to your shuffler.

&#x1F534; Commit 5 <br>
<hr>
"Commit 5: Song-Shuffler - Added some styling to my shuffler."

<hr>
