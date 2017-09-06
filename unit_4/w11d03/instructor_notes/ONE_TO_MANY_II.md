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

* Interact with our Rails API

* Display all of a single location's **average high temperatures** on a chart.

### Lesson objectives

At the end of this lesson, students will be able to:

* Use **fetch** for AJAX requests
* Configure CORS
* Make a line graph with Chart.js

**Temperatures for Location 1**
![](https://i.imgur.com/OC4GolP.png)
---

# SETUP

Make our Frontend server.

In the top-level `temperatures_app` directory, make a boilerplate express project.

Name the frontend directory:

* `temperatures_app_frontend`

You will need:

* Express `npm i express`
	* Boilerplate express code
* Listener 
* Public folder with `index.html`, `app.js`, `style.css`

**Get a message displayed in the browser from your index.html**

**Get a console.log showing in the browser**

<br>
<hr>

# FETCH

Using Chrome's **fetch** command we can make AJAX requests with 'vanilla' javaScript instead of importing some framework or library to do so. 

**fetch** is also a popular way to make AJAX requests in React, another front-end framework like Angular. (React does not have an in-built http service).

[Great article on using Fetch](https://css-tricks.com/using-fetch/)

Let's get all of our locations from our Rails API.

app.js - make an AJAX request to get locations

```javascript
fetch('http://localhost:3000/locations')                                        
  .then(response => response.json())                                            
  .then(json => console.log(json))                                              
  .catch(err => console.log(err));  
```

![](https://i.imgur.com/azGbynf.png)

As expected, we get our single-origin policy obstruction.

![](https://i.imgur.com/GzmHqb3.png)

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

# CONFIGURE FETCH

Let's change our `fetch` to get a **single location** and also to console.log it. We want a single location so that we can display a chart of climate data just for that location.

* Change the URL to get `locations/1`:

In the developer console:

![](https://i.imgur.com/N9oPpus.png)

Cool man cool. **fetch** worked. We received location 1 with along that location's temperatures.

<br>

# CHART.JS

We want to display a chart that graphs all the average high temperatures for a given location.

Chart.js is a library that renders charts using HTML5's [Canvas](http://www.w3schools.com/html/html5_canvas.asp) capability. [Here's a Canvas tutorial for another day](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

Chart.js can do all the heavy lifting with Canvas. All we have to do is plug in some data.

[Chart.js documentation](http://www.chartjs.org/docs/#getting-started)

Use a chart.js cdn:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>`


![](https://i.imgur.com/UNchygE.png)


* Put a `canvas` element on your page:

`<canvas id="temperatures" width="300" height="100"></canvas>`

![](https://i.imgur.com/2S46jWp.png)

* Get the `temperatures` element in app.js with `getElementById` or `querySelector`.

*  Remember `window.onload`? We will need it so that our JS will grab the element only after it exists.
 
*  P.S. the canvas element is called the "context" and so you'll see canvas variables called `ctx`.

![](https://i.imgur.com/winRkEf.png)

* Instantiate a new Chart object. The Chart constructor takes the canvas context and an options object as arguments.

```javascript
window.onload = function() {
  const ctx = document.querySelector('#temperatures');
  console.log(ctx);

  const tempsChart = new Chart(ctx, {})
}
```

* The simplest options we can give our chart are just chart type and data (an empty object for now). Let's make a **line chart:**

```javascript
window.onload = function() {
  const ctx = document.querySelector('#temperatures');
  console.log(ctx);

  const tempsChart = new Chart(ctx, {
  	type: 'line',
  	data: {}
  })
}
```


* Our data object could potentially be enormous. Let's configure our data object elsewhere to separate it from the options.

```javascript
window.onload = function() {
  const ctx = document.querySelector('#temperatures');
  console.log(ctx);

  const chartData = {};

  const tempsChart = new Chart(ctx, {
  	type: 'line',
  	data: chartData
  })
}
```

## Test with some dummy data

* Let's load in some dummy data for our chart. We will need an array of `labels` and an array of `datasets`.

```javascript
window.onload = function() {
  const ctx = document.querySelector('#temperatures');

  const chartData = {
  	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  	datasets: [
  		{ 
  			label: 'Avg high temps',
  			data: [54, 32, 78, 90, 10]
  		}
  	]
  };

  const tempsChart = new Chart(ctx, {
  	type: 'line',
  	data: chartData
  })
}
```

Our data object at minimum should have two arrays:

* labels - for the x axis
* datasets - for the y axis

Load up the dummy data and see what you can see.

![](https://i.imgur.com/E5le9t7.png)



## Populate data from Rails API

**What we want to do is** 

 1. make an AJAX request to our API, and 
 2. populate the Chart with our API data.

* empty out the dummy data.

```javascript
  const chartData = {
  	labels: [],
  	datasets: [
  		{ 
  			label: 'Avg high temps',
  			data: []
  		}
  	]
  };
```

The Chart is generated when the Chart constructor is run. So, let's put that inside the **fetch promise** so that it will run after we get the data from the API.

```javascript
	fetch('http://localhost:3000/locations/1')
	  .then(response => response.json())
	  .then(json => {
	     console.log(json); 
	  	  const tempsChart = new Chart(ctx, {
	  	    type: 'line',
	  	    data: chartData
	  	  });
	  })
	  .catch(err => console.log(err));
```

```javascript
window.onload = function() {
  const ctx = document.querySelector('#temperatures');

  const chartData = {
  	labels: [],
  	datasets: [
  		{ 
  			label: 'Avg high temps',
  			data: []
  		}
  	]
  };
	
	fetch('http://localhost:3000/locations/1')
	  .then(response => response.json())
	  .then(json => { 
	  	  console.log(json);
	     const tempsChart = new Chart(ctx, {
	  	    type: 'line',
	  		 data: chartData
	     });
	  })
	  .catch(err => console.log(err));
}
```


### Push fetched data into chartData fields

The data we received from the server for location 1 has an array of temperatures.

We want to loop over all the temperatures and push their values into the **labels** and **datasets** arrays.

```javascript
json.temperatures.forEach((temperature) => {
        chartData.labels.push(temperature.id);
        chartData.datasets[0].data.push(temperature.average_high_f);
      });
```


```javascript
window.onload = function() {
  const ctx = document.querySelector('#temperatures');

  const chartData = {
  	labels: [],
  	datasets: [
  		{ 
  			label: 'Avg high temps',
  			data: []
  		}
  	]
  };

	fetch('http://localhost:3000/locations/1')
	  .then(response => response.json())
	  .then(json => { 
	  	console.log(json);

	  	json.temperatures.forEach((temperature) => {
        chartData.labels.push(temperature.id);
        chartData.datasets[0].data.push(temperature.average_high_f);
      });

	  	const tempsChart = new Chart(ctx, {
	  		type: 'line',
	  		data: chartData
	  	})
	  })
	  .catch(err => console.log(err))
}
```

If it looks like it's working, then that's exciting.

![](https://i.imgur.com/ndle1zg.png)


## Second dataset

Add in a second dataset for `Avg low temps`. 
We'll push in the `average_low_f` data.

```javascript
  const chartData = {
  	labels: [],
  	datasets: [
  		{ 
  			label: 'Avg high temps',
  			data: []
  		},
  		{
  			label: 'Avg low temps',
  			data: []
  		}
  	]
  };
```

Push in the low temps:

```javascript
  json.temperatures.forEach((temperature) => {
    chartData.labels.push(temperature.id);
    chartData.datasets[0].data.push(temperature.average_high_f);
    chartData.datasets[1].data.push(temperature.average_low_f);
  });
```

Result:

![](https://i.imgur.com/OC4GolP.png)


<br>
<hr>

# BONUS / Extra reading

## Fetch POST Request

We're going to make a **test input** that will send requests to create temperature data for location 1.

Add an input box and a submit button

```html
    <input id="temp-input-high" type="text" placeholder="high temperature" />
    <input id="temp-input-low" type="text" placeholder="low temperature" />
    <button id="temp-submit">SUBMIT</button>
```

![](https://i.imgur.com/W6Idvx6.png)
3:12

Within the window.onload, use 'vanilla' JavaScript to get elements and set an event listener.


```javascript
  const inpHigh = document.querySelector('#temp-input-high');
  const inpLow = document.querySelector('#temp-input-low');
  const btn = document.querySelector('#temp-submit');

	btn.addEventListener('click', () => {
	  console.log('high: ', inpHigh.value);
	  console.log('low: ', inpLow.value);
	});
```


When the button is clicked, send a POST request using **fetch**:

![](https://i.imgur.com/T7KL2Jy.png)

```
    let body = {
      average_high_f: inpHigh.value,
      average_low_f: inpLow.value
    }
    
    fetch('http://localhost:3000/locations/1/temperatures', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => {
        console.log('returned from server: ', json);
      })
      .catch(ex => console.log(ex));
```



Check that the data was created in rails console:

![](https://i.imgur.com/Hd1TtZP.png)

## Update our chart

* Put the `fetch` get request that makes the chart into a function `renderChart`

* Call it to get the initial chart on the page

* Inside the POST request success callback, call `renderChart()`

```javascript
  const renderChart = () => {
    const chartData = {
    	labels: [],
    	datasets: [
    		{ 
    			label: 'Avg high temps',
    			data: []
    		},
    		{
    			label: 'Avg low temps',
    			data: []
    		}
    	]
    };

  	fetch('http://localhost:3000/locations/1')
  	  .then(response => response.json())
  	  .then(json => { 
  	  	console.log(json);

  	  	json.temperatures.forEach((temperature) => {
          chartData.labels.push(temperature.id);
          chartData.datasets[0].data.push(temperature.average_high_f);
          chartData.datasets[1].data.push(temperature.average_low_f);
        });

  	  	const tempsChart = new Chart(ctx, {
  	  		type: 'line',
  	  		data: chartData
  	  	})
  	  })
  	  .catch(err => console.log(err))
  }
  
  renderChart();
```

A better way would be to push the new data into the chartData instead, and then re-make the chart.

```javascript
window.onload = function() {
  
  const inpHigh = document.querySelector('#temp-input-high');
  const inpLow = document.querySelector('#temp-input-low');
  const btn = document.querySelector('#temp-submit');
  const ctx = document.querySelector('#temperatures');

  const renderChart = () => {
    
    const chartData = {
      labels: [],
      datasets: [
        { 
          label: 'Avg high temps',
          data: []
        },
        {
          label: 'Avg low temps',
          data: []
        }
      ]
    };
    
  	fetch('http://localhost:3000/locations/1')
  	  .then(response => response.json())
  	  .then(json => { 

  	  	json.temperatures.forEach((temperature) => {
          chartData.labels.push(temperature.id);
          chartData.datasets[0].data.push(temperature.average_high_f);
          chartData.datasets[1].data.push(temperature.average_low_f);
        });

  	  	const tempsChart = new Chart(ctx, {
  	  		type: 'line',
  	  		data: chartData
  	  	})
  	  })
  	  .catch(err => console.log(err))
  } // end renderChart
  
  renderChart();


  btn.addEventListener('click', () => {
    console.log('high: ', inpHigh.value);
    console.log('low: ', inpLow.value);
    let body = {
      average_high_f: inpHigh.value,
      average_low_f: inpLow.value
    }
    
    fetch('http://localhost:3000/locations/1/temperatures', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => {
        console.log('returned from server: ', json);
        renderChart();
      })
      .catch(ex => console.log(ex));
  });

}
```


<br>
<hr>


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
