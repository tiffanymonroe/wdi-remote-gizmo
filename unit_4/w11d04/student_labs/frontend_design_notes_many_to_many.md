![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-HOPPER

---
Title: Many to Many Through II - Design <br>
Type: Information<br>
Duration: 1 hr<br>
Creator: Thom Page <br>

---

# MANY TO MANY THROUGH II
### Design of routes and frontend

#### Traders commodities app

<br>
<hr>

## setup frontend

![](https://i.imgur.com/QLP6KaP.png)

![](https://i.imgur.com/BR1JyuO.png)

![](https://i.imgur.com/AmI31wF.png)

![](https://i.imgur.com/eCNkURZ.png)

![](https://i.imgur.com/Nbh60nJ.png)

main: server.js

![](https://i.imgur.com/SreDDGB.png)

server.js boilerplate

![](https://i.imgur.com/5dRY9ST.png)


public files boilerplate

![](https://i.imgur.com/0AMHokM.png)

<br>
15 mins


# ANGULAR

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
```

## Alternative Angular setup

### Make an IIFE

Immediately Invoked Function Expression

> An IIFE protects a module’s scope from the environment in which it is placed

[Why use an IIFE?](http://gregfranko.com/blog/i-love-my-iife/)

![](https://i.imgur.com/ZiTU9uc.png)

![](https://i.imgur.com/alBcqo8.png)

![](https://i.imgur.com/xLnyUQz.png)

### Chain controller to module

![](https://i.imgur.com/xzjMXSF.png)

![](https://i.imgur.com/S3Vajzj.png)

20 mins

### Chain function to catch request errors

![](https://i.imgur.com/219HRRl.png)

add console logs

![](https://i.imgur.com/jutGUtp.png)

get this cool error console log

![](https://i.imgur.com/LUmEbHT.png)

CORS not set up!

![](https://i.imgur.com/2xBo9lY.png)

<br>


22 mins 

# CORS

cors gem

![](https://i.imgur.com/4lqwgtK.png)

![](https://i.imgur.com/gtXO9jE.png)

Allow any old origin `*`

![](https://i.imgur.com/yB72udi.png)

* restart server

Frontend: 

![](https://i.imgur.com/R1WptMU.png)

<br>


23 mins

# FLEXBOX

Regular layout

```
  <header>…</header>
  <div class="container">
     <main>…</main>
     <nav>…</nav>
     <aside>…</aside>
  </div>
  <footer>…</footer>
```

![](https://i.imgur.com/EhUnbrr.png)

nav, aside flex to 1.5 so that they are 1.5 times larger than main

```
/* for development only - check layout */
header, div, main, nav, aside, footer {
  border: 1px solid red;
}

body {
  background-color: Ivory;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.container {
  display: flex;
  flex: 1;
}

main {
  flex: 1;
}

nav {
  order: -1;
}

nav, aside {
  flex: 1.5;
}
```





![](https://i.imgur.com/HiHKSqD.png)

![](https://i.imgur.com/pqXr4h1.png)


<br>
25 mins


# GET AND SET DATA


Add in traders and commodities
![](https://i.imgur.com/EiJjWdl.png)

Set to result, and bind `this`

![](https://i.imgur.com/Z0pudYT.png)

![](https://i.imgur.com/1hU2V4B.png)

ng-repeat for traders and commodities

![](https://i.imgur.com/qWgDGV0.png)

display trader name. display commodity name and price

![](https://i.imgur.com/xuaQ5Uj.png)

![](https://i.imgur.com/xSJtYH1.png)

28 mins



# DISPLAY A TRADER IN CENTRAL PANEL

ng-click, click on a trader and send to function

![](https://i.imgur.com/aGXyJbi.png)

Function declaration syntax

![](https://i.imgur.com/rXXeTZU.png)

Display trader in the central panel. Data for current (clicked) trader:

![](https://i.imgur.com/T8WbBtu.png)

![](https://i.imgur.com/LLWKazO.png)

![](https://i.imgur.com/L7pc1ci.png)

![](https://i.imgur.com/Q8SUWJz.png)

<br>

# SEE TRADER'S COMMODITIES
 
## CODE DESIGN STRATEGIES

What I want is to see all of that trader's commodities in the central section. 

How?

<br>

**Strategy 1:** 

Get all the ledgers when the page loads for the first time. Use the ledger to populate a trader's commodities when that trader is clicked.

![](https://i.imgur.com/muQWCpl.png)

CONS: Makes the initial page load 'heavier' because of the AJAX request. Might require a lot of Javascript looping and checking to match commodity ids with the trader ids and getting names and such.

PROS: Front-loads the heaviness to the initial page load and keep everything else relatively light. 

<br>

**Strategy 2:** 

Get all the trader's commodities from a trader's show route. Change the server to serve a list of that trader's commodities with `trader.commodities`.

CONS: Will require an ajax request when a trader is clicked. Will make that ajax request _each time_ unless we check whether or not the trader's commodities have been populated. Make the page much 'heavier' as it requires a db connection on each click.

PROS: It's the most convenient option.

![](https://i.imgur.com/iS5B1Yd.png)

![](https://i.imgur.com/5EYMo58.png)

Should be shortened to a one-liner:

![](https://i.imgur.com/wmeuTjV.png)


<br>

**Strategy 3:** 

Get all the commodities somehow attached to the traders index. The initial http request to the traders index also pulls each trader's commodities.

Will require some Ruby wrangling in the server. And it's potentially alot of data to load. 

Index route. Use `.map` to make a new array will the data we want:

![](https://i.imgur.com/xgo1hvq.png)

![](https://i.imgur.com/qAf6LKQ.png)

Should be shortened to:

![](https://i.imgur.com/yaaOIPK.png)

<br>

**Strategy 4:** 

Bring in all the ledgers on page load, but change the Rails server to serve up the ledgers with the trader's names and commodities and quantities how we want it beforehand.

![](https://i.imgur.com/XArdNvo.png)

Here, instead of id numbers, we have some fleshed out data:

Marcia Heller has 6 oil and 2 silver:
![](https://i.imgur.com/A3oJJaG.png)

This is the shortened version you should use:

![](https://i.imgur.com/HF4XQOq.png)

<br>

**Strategy 6: This is the answer I settled on**

I started with this idea:

![](https://i.imgur.com/jzVMn0l.png)

Hmmmmmm. I used map to give me all the names and quantities of commodities for a single user.

![](https://i.imgur.com/MOpmQmf.png)

I expanded on this for the index route: one single ajax request to get all users with all of their related commodities and quantities:

![](https://i.imgur.com/vX289MF.png)

Result:

![](https://i.imgur.com/jdiLmN3.png)


<br>

**Inevitable Conclusion:** 

* If we want to display the quantity, we need to query the ledger. I would want the data to come to me pre-packaged, and I want as few ajax requests as possible, so that means **strategy 6** wins in my book.

* If we don't want any additional information about the relationship between a trader and that trader's commodities, I would opt for **strategy 3**: loading up the index route with all the commodities data. 

But, we are using a **through** in our relationship and we want the **qty** value. In this case I would go with **Strategy 6** and see where it leads.

![](https://i.imgur.com/k4uPPxn.png)

Clicking on 'Kristina Buckridge' shows the trader's details **without** another AJAX request. In the central column we see the trader's name and money **and** all the commodities, **and** the quantities of those commodities. This information came from the ledger through the trader's index route. The ledger was populated within the trader index server-side and loaded into the page up front.

![](https://i.imgur.com/Od07YF9.png)

<br>
<hr>
License
<hr>








## ADD COMMODITY TO TRADER

![](https://i.imgur.com/5rxKJ6P.png)

![](https://i.imgur.com/Dja7S16.png)

<br>

pass trader to submit function (for clarity)
add input for qty whose model is formdata

![](https://i.imgur.com/XsfvWWQ.png)

![](https://i.imgur.com/Ebmr4dg.png)

console log formdata
![](https://i.imgur.com/d4frIv7.png)

add in 'select' dropdown for all commodities, and pass in commodity id as value

![](https://i.imgur.com/vu69s85.png)

add in trader id to formdata

![](https://i.imgur.com/9UjoeeZ.png)

![](https://i.imgur.com/UOwpxVM.png)

Make AJAX request to server:

![](https://i.imgur.com/hF5bahz.png)

**NOTE: Will get 'unprocessable entity' if the trader already has that commodity**

To avoid trying to create relationship that already exists, exclude the trader's currently owned commodities from the dropdown.

Alternatively, allow duplicate ledgers.


<hr>
License
<hr>
