![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Science App Continued<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page <br>
Topics: Rails 5 API, One-to-many relationships, CORS, fetch, Chart.js<br>

---

# &#x1F52D; &#x1F4D0; SCIENCE APP CONTINUED &#x1F914; &#x1F4A1; &#x1F4A1; &#x1F4A1;

Let's make the front-end for our Temperatures app.

### OUR GOAL IS TO:

* Display all of a location's **average high temperatures** on a chart.

### Lesson objectives

At the end of this lesson, students will be able to:

* Use Chrome's **fetch** for AJAX requests
* Configure CORS
* Make a line graph with Chart.js

---

2:30

# SETUP

Make our Frontend server.

In the top-level `temperatures_app` directory, make a boilerplate express project.

Name the frontend directory:

* `temperatures_app_frontend`

You will need:

* Express
* Public folder with `index.html`, `app.js`, `style.css`

**Get a message displayed in the browser from your index.html**

<br>
<hr>

2:45

# FETCH

Using Chrome's **fetch** command we can make AJAX requests with 'vanilla' javaScript instead of importing some framework or library to do so. 

**fetch** is also a popular way to make AJAX requests in React, another front-end framework like Angular. (React does not have an in-built http service).

[fetch() documentation](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

app.js - make an AJAX request to get locations

![](https://i.imgur.com/ujcvxQp.png)

As expected, we get our single-origin policy obstruction.

![](https://i.imgur.com/GzmHqb3.png)

2:47

# CORS

Uncomment rack-cors

`Gemfile`

![](https://i.imgur.com/mzc0HBi.png)

`bundle`

`config/initializers/cors.rb`

Allow all origins `*`

![](https://i.imgur.com/aXEXx9E.png)

**restart Rails server**

<br>

2:49

# CONFIGURE FETCH

Let's change our `fetch` to get a **single location** and also to console.log it. We want a single location so that we can display a chart of climate data just for that location.

* Change the URL to get `locations/1`

* We could also query `locations/1/temperatures` if we did not want location data (a feature of our API).

In the developer console:

![](https://i.imgur.com/N9oPpus.png)

Cool man cool. **fetch** worked. We received location 1 with along that location's temperatures.

<br>

2:55

# CHART.JS

We want to display a chart that graphs all the average high temperatures for a given location.

Chart.js is a library that renders charts using HTML5's [Canvas](http://www.w3schools.com/html/html5_canvas.asp) capability. [Here's a Canvas tutorial for another day](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

Chart.js can do all the heavy lifting with Canvas. All we have to do is plug in some data.

[Chart.js documentation](http://www.chartjs.org/docs/#getting-started)

Use a chart.js cdn:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script>`


![](https://i.imgur.com/UNchygE.png)


* Put a `canvas` element on your page:

`<canvas id="temperatures" width="300" height="100"></canvas>`

![](https://i.imgur.com/2S46jWp.png)

* Get the `temperatures` element in app.js with `getElementById` or `querySelector`.

*  Remember `window.onload`? We will need it so that our JS will grab the element only after it exists.
 
*  P.S. the canvas element is called the "context" and so you'll see canvas variables called `ctx`.

![](https://i.imgur.com/vZvGGaG.png)

* Instantiate a new Chart object. The Chart constructor takes the canvas context and an options object as arguments.

![](https://i.imgur.com/KDIC26i.png)

* The simplest options we can give our chart are just chart type and data (an empty object for now). Let's make a **line chart:**

![](https://i.imgur.com/ffc25xC.png)


2:58

* Our data object could potentially be enormous. Let's configure our data object elsewhere to separate it from the options.

![](https://i.imgur.com/42BcykA.png)

```javascript
  var chartData = {}

  var tempsChart = new Chart(ctx, {
    type: 'line',
    data: chartData
  });
```

* Let's load in some dummy data for our chart. We will need an array of `labels` and an array of `datasets`.

![](https://i.imgur.com/xqFEv89.png)

```javascript
  var chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Avg high temps',
        data: [54, 32, 78, 90, 10]
      }
    ]
  }

  var tempsChart = new Chart(ctx, {
    type: 'line',
    data: chartData
  });
```

Our data object at minimum should have two arrays:

* labels - for the x axis
* datasets - for the y axis

Load up the dummy data and see what you can see.

![](https://i.imgur.com/E5le9t7.png)

3:00


## Populate data from Rails API

**What we want to do is** 

 1. make an AJAX request to our API, and 
 2. populate the Chart with our API data.

* empty out the dummy data.

![](https://i.imgur.com/odRvDlx.png)

The Chart is generated when the Chart constructor is run. So, let's put that inside the **fetch promise** so that it will run after we get the data from the API.

![](https://i.imgur.com/YWef2dp.png)

![](https://i.imgur.com/R1shHU5.png)

3:05

*****HERE*********


### Push fetched data into chartData fields

We want to loop over all the temperatures and push their values into the **labels** and **datasets** arrays.

```javascript
data.temperatures.forEach(function(temperature) {
        chartData.labels.push(temperature.id);
        chartData.datasets[0].data.push(temperature.average_high_f);
      });
```

3:10

![](https://i.imgur.com/DKqPT5T.png)

If it looks like it's working, then that's exciting.

Let's **create** temperatures through our RAILS API.

<br>


# Fetch POST Request

We're going to make a **test input** that will send requests to create climate data for location 1.

Add an input box and a submit button

```html
    <input id="temp-input" type="text" placeholder="new temperature" />
    <button id="temp-submit">SUBMIT</button>
```

![](https://i.imgur.com/W6Idvx6.png)

![](https://i.imgur.com/vmC4kmN.png)

3:12

Within the window.onload, use 'vanilla' JavaScript to get elements and set an event listener.

![](https://i.imgur.com/tlZLFDW.png)

```javascript
  var inp = document.querySelector('#temp-input');
  var btn = document.querySelector('#temp-submit');

  btn.addEventListener('click', function() {
    console.log('cliicked');
  });
```

3:15

When the button is clicked, send a POST request using **fetch**:

![](https://i.imgur.com/T7KL2Jy.png)

```javascript
    fetch('http://localhost:3000/locations/1/temperatures', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: "temperature[average_high_f]=" + inp.value
      })
      .then(function(response) {
        return response.json()
      }).then(function(data) {
        console.log('Request succeeded with JSON response: ', data);
      });
```

3:20

Check that the data was created in rails console:

![](https://i.imgur.com/Hd1TtZP.png)

## Update our chart

* Put the `fetch` get request that makes the chart into a function `renderChart`

* Call it to get the initial chart on the page

![](https://i.imgur.com/OsSK9Ff.png)

* Inside the POST request success callback, call `renderChart()`

![](https://i.imgur.com/nZTB9PR.png)


<br>
<hr>

## Second dataset

Add in a second dataset for `Avg low temps`. 
We'll push in the `average_low_f` data.

![](https://i.imgur.com/BKhgh2R.png)

Push in the low temps:

![](https://i.imgur.com/xiFfSb1.png)

Result:

![](https://i.imgur.com/fT9xDmV.png)

3:24

# EXTRA

## Datasets options

Each 'datasets' object can have more options than just `label` and `data`. You can choose how to display each dataset. And as you might have guessed, you can have more than one dataset on a chart.

Try hardcoding each one of these into your chartData options separately and seeing the results

Example:

![](https://i.imgur.com/sD21kGI.png)

Result:

![](https://i.imgur.com/C71r4FA.png)


## Change the chart type

Bar chart

![](https://i.imgur.com/xD2IKNJ.png)

Result:

![](https://i.imgur.com/FSnnmBW.png)

3:30


## Chart options

```
  {
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      spanGaps: false,
  }
```

## Other things our app could do:
* show all of a location's data on a single chart
* have separate charts for each dataset
* display the location in Maps using lat and lng
* have an index of selectable locations
* use Angular router to tab between charts
* use Angular router to tab between locations

<br>
<hr>
<hr>

License

<hr>
