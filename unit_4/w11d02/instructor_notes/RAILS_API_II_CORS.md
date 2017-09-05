![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: Rails API frontend<br>
Type: Lesson<br>
Duration: A little while<br>
Creator: Thom Page<br>
Topics: Angular, Flexbox, Deployment<br>
<hr>

# RAILS API - Frontend

### Lesson Objectives
_After this lesson, students will be able to:_

- Use Flexbox to lay out a page
- Post data to our API using Angular
- Update the page with new data
- LAB: Deploy Rails API

<hr>

## SETUP

Open the `noticeboard_app` directory from this morning.

Inside it should be `noticeboard_app_api` and `noticeboard_app_frontend`.

<br>
<hr>

2:30

# &#x1F4D0; ANGULAR

* Let's format our data on our page

`noticeboard_app_frontend/public/app.js`

The Angular so far should look like this:

![](https://i.imgur.com/oFGvnz1.png)

* Give our returned data place to live (note that this step is not strictly necessary, but makes the code more explicit): `this.notices = [];`

![](https://i.imgur.com/hj3kcxh.png)

* Make it so our AJAX'ed notices get put in to the `this.notices` array:

Inside the AJAX response callback:

```javascript
console.log(response);
this.notices = response.data;
```

![](https://i.imgur.com/cwff0po.png)


> Side note: If you are not using ES6 arrow functions you can either set `const self = this` or bind the context to the callback:

> Bind the `context` of `this` to the `$http` callback: `.bind(this)` (note: this is the same as setting `const self = this`.

![](https://i.imgur.com/nVaWIVv.png)

3:10

## Display the AJAX'ed stuff

In `index.html`

Inside `main`, Make an `ng-repeat`ing div with the stuff in it. Give it a class too so we can give it some styling later:

```
  <main>
    <div ng-repeat="notice in ctrl.notices" class="notice">
      <h3>{{ notice.title }}</h3>
      <p>{{ notice.content }}<p>
      <small>{{ notice.author }}</small>
    </div>
  </main>
```

![](https://i.imgur.com/qmv4XNP.png)

## &#x1F34D; Result

![](https://i.imgur.com/r2UZHW2.png)

<br>
<hr>


# &#x1F3CB; &#x1F371; STYLE

With Angular now 'consuming' our API, let's make a webpage.

## CSS 

Link the CSS to your index.html: `<link rel="stylesheet" href="style.css"/>`

Use the following **Flexbox** CSS:

```css
/* for development only - check layout */
/*header, div, main, nav, aside, footer {
  border: 1px solid red;
}*/

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #FAEBD7; /*NEW*/
  font-family: Verdana, Geneva, sans-serif; /*NEW*/
}

.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #FEFBF7; /*NEW*/
  border-radius: 5px; /*NEW*/
}

header {
  text-align: center; /*NEW*/
  font-size: 50px; /*NEW*/
  color: #4d5052; /*NEW*/
}

main {
  flex: 1;
}

nav {
  order: -1;
}

nav, aside {
  background-color: #C2C8CD; /*NEW*/
}

.notice {
  margin: 5px; /*NEW*/
  padding: 5px 15px 5px 15px; /*NEW*/
  background-color: #E4E1DE; /*NEW*/
  border-radius: 5px; /*NEW*/
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex: 1;
  }
  nav, aside {
    flex: 0 0 12em;
  }
}
```

### HTML

HTML structure: header, container, footer
Inside container put main, nav, aside

```html
  <header>…</header>
  <div class="container">
     <main>…</main>
     <nav>…</nav>
     <aside>…</aside>
  </div>
  <footer>…</footer>
```

Paste over your html withint the body tags with this:

```
  <header>NOTICES :-)</header>
  <div class="container">
    <main>
      <div ng-repeat="notice in ctrl.notices" class="notice">
        <h3>{{ notice.title }}</h3>
        <p>{{ notice.content }}</p>
        <small>{{ notice.author }}</small>
      </div>
    </main>
    <nav>...</nav>
    <aside>...</aside>
  </div>
  <footer>...</footer>
```

## RESULT

![](https://i.imgur.com/LkKCrPl.png)


<br>
<hr>

## POST REQUEST
### Add a Notice to the Database

Note: the remainder of these notes are written in ES5. Translate them to ES6 if you have been using ES6.

index.html -- add a form to the left nav

```
  <nav>
    <h4>POST A NOTICE</h4>
    <form ng-submit="ctrl.processForm()">
  		<input type="text" ng-model="ctrl.formdata.author"placeholder="author"/>
		<input type="text" ng-model="ctrl.formdata.title" placeholder="title"/>
		<input type="text" ng-model="ctrl.formdata.content" placeholder="content"/>
		<input class="submit" type="submit"/>
	 </form>
  </nav>
```

![](https://i.imgur.com/V30B3Ed.png)

Our each piece of form data (author, title, content) will be bound to a parent object called formdata ( a model in our Angular controller, as usual ).

## &#x1F34D; Result

![](https://i.imgur.com/UWEOCx9.png)

### CAPTURE FORM DATA

Give the formdata a place to live (the ng-model is called formdata) (Strictly speaking this step is not necessary but it's good practice to declare your variables)

`this.formdata = {}`

![](https://i.imgur.com/aJKlbQ3.png)      


The form submits to a function called `processForm`. Let's make that and test the formdata:

```javascript
this.processForm = function() {
	console.log('processForm function . . .');
	console.log('Formdata: ', this.formdata);
}
```

![](https://i.imgur.com/0f4vI3e.png)

Send some form data and see the console for `this.formdata`

Example form data return:
![](https://i.imgur.com/OOfbQzC.png)

3:35

### SEND THE AJAX REQUEST

```javascript
  this.processForm = function() {
    console.log('processForm function . . . ');
    console.log('Formdata: ', this.formdata);
    $http({
      method: 'POST',
      url: 'http://localhost:3000/notices',
      data: this.formdata
    }).then(function(result) {
      console.log('Data from server: ', result);
    });
  } // end processForm
```

3:45


# New notices at the top

* Rails: Change the Notice index controller to `reverse` the array

We want newer notices to show first. `reverse` the result server side.

Rails server:

```ruby
  # GET /notices
  def index
    @notices = Notice.all.reverse

    render json: @notices
  end
```

# Magical update

AJAX requests are **heavy** and somewhat go against the _lightness_ of using a single page format. Single pages are light, because when a user clicks on stuff, new pages are not loaded (requests to server are minimal, un-burdening the app).

We want the **new notice** automatically to appear on the page without an http request.

Make Angular's digest loop do the work of updating the index page rather than making another http request:

```javascript
  this.notices.unshift(result.data);
```

Because we just **unshifted** the new notice into the `this.notices` array, notices are automatically added to the page **without** an extra `$http` request.

Angular can't listen for changes in the database, but it listens for any changes to its own models. All we had to do was get the digest loop to update with the new notice. We already know that it's in the db, because we had a successful response.

Thanks, Angular digest loop.

[Angular digest loop and data binding](http://angular-tips.com/blog/2013/08/watch-how-the-apply-runs-a-digest/)


### Clear out the formdata
* Set `this.formdata = {}` inside the callback.

<hr>
License
<hr>
