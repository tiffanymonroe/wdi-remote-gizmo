![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-MATRIX

---
Title: Transing App Angular Frontend <br>
Type: Chaperoned lab<br>
Duration: 1 hr <br>
Creator: Thom Page <br>
Topics: Many-to-many data coming from Rails API, Angular 1.6 <br>

---

# TRADING APP FRONTEND

<br>

`git pull upstream master` to get the starter code

`student_labs/trading_app_frontend`

`npm install`

---

<br>

## Angular Notes

### Immediately Invoked Function Expression

> An IIFE protects a module’s scope from the environment in which it is placed

[Why use an IIFE?](http://gregfranko.com/blog/i-love-my-iife/)

![](https://i.imgur.com/ZiTU9uc.png)

### Controller chained to module

![](https://i.imgur.com/xzjMXSF.png)

### Chained function to catch request errors

![](https://i.imgur.com/219HRRl.png)

add console logs

![](https://i.imgur.com/jutGUtp.png)


### `this` bound to success response callback

![](https://i.imgur.com/wG7Sb1n.png)

Run server: `nodemon`

Open in browser at localhost:4000

get this cool error console log

![](https://i.imgur.com/LUmEbHT.png)

CORS not set up!

![](https://i.imgur.com/2xBo9lY.png)

<br>

### Configure CORS in backend server

cors gem

![](https://i.imgur.com/4lqwgtK.png)

![](https://i.imgur.com/gtXO9jE.png)

Allow any old origin `*`

![](https://i.imgur.com/yB72udi.png)

* restart server

Frontend: 

![](https://i.imgur.com/R1WptMU.png)

<br>
---

# Ajax design

We want our website to be 'light' and take advantage of Angular's digest loop. We want to have few AJAX requests.

We can change both the backend and frontend.

How can we consolidate our two AJAX requests for traders and commodities? What can we change on our server?

* would we even want to consolidate AJAX requests?

<br>

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

What is a good strategy for getting the trader's data displayed in the second panel?

We want

* Trader's name
* Trader's money
* Trader's commodities
* The quantities of each commodity owned by the trader


Things to think about:

* The server routes to query. There are quite a few options.
* How we can change our server routes to give us what we want
* Convenient and intuitive data structures coming from the server
* Easy to understand code on the frontend

<br>

# ADD COMMODITY TO A TRADER

* How would you go about doing this?

# INCREASE QUANTITY OF COMMODITY?

* How would you go about doing this?

