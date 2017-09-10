
![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# INTRO TO REACT

---

Title: Intro to React <br>
Type: Optional Topic<br>
Duration: ~2 hrs <br>
Creator: Thom Page <br>

---

# React Intro

React is another frontend framework for single-page apps, like Angular. React was created and is maintained by Facebook.

The intention is to do the same things that Angular does:

* organize front end code
* render changes to the state

### Organizing front-end code

Everything in React is a **Component**. Every significant part of your html will be encapsulated in its own component and have its own separate functionality. React in this way is like a lot of different puzzle pieces that interact with each other. The benefit is that the code is organized into small, reusable, maintainable chunks. You only ever deal with one tiny piece at a time.

### Rendering changes to the state
But React does this very differently than Angular. First, there is no two-way data-binding. Data in React is **Unidirectional**. It does not bind to the html. Rather, React creates a **virtual DOM**, or internal model of the DOM. When the state changes, the virtual DOM is updated through a process called [Reconciliation](https://facebook.github.io/react/docs/reconciliation.html). Reconciliation is a 'diffing' of two trees: the old state and the new state. React only updates what has been changed, which apparently is 'faster' than Angular. 

<br>
<hr>

# Setup

Make a directory called `react-profile` and go in.

* Make an `index.html` and scaffold the boilerplate.
* Make an `app.js` where we will write the React code.

### React scripts

We'll begin by installing React the old school way via including scripts from a CDN. Later, we'll do React the new way by installing it as a dependency server-side (no more waiting for CDNs to load). 

**Put these scripts at the bottom of the page body.**

There are three scripts to include. 

```html
<script src="https://unpkg.com/react@15/dist/react.js"></script>
```

```html
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
```

```html
<script src="http://fb.me/JSXTransformer-0.12.1.js"></script>
```

The first script is **React core**.

We are also using **React DOM** which is specifically for rendering React stuff in a web browser. You can render React stuff in other places too, which is why React DOM is separate from the core React library.

And we are using, **JSX** a library like jQuery that will allow us to write shorthand JavaScript code (more later).

### Application script

Underneath these scripts, link up your application script, but make sure it is of type `text/jsx` so that it will be interpreted for our JSX transformer.

![](https://i.imgur.com/GTqrRmA.png)

<br>
<hr>

# Get it running

```
python -m SimpleHTTPServer
```

visit browser at localhost:8000

OR

```
ruby -run -e httpd . -p 9000
```

Visit browser at localhost:9000

Show a console log in the browser.

![](https://i.imgur.com/qnY2iJK.png)

<br>
<hr>

# Write Root element

In React, all of the body HTML is written in JavaScript files.

All of our html will be constructed by React's virtual DOM and put in one element.

* Add a container div where the React elements will be rendered:

```html
<div id="root"></div>
```

![](https://i.imgur.com/frZSJqt.png)

<br>
<hr>

# Write React

Let's render something inside the `root` div.

Render to the page using `ReactDOM.render()`

```javascript
  ReactDOM.render(
    <div>Hello World</div>,
    document.querySelector('#root')
  ); 
```

![](https://i.imgur.com/yTqv5cz.png)


**One `ReactDOM.render()` per app**

We will just be using **one** `ReactDOM.render()` in our apps. This thing takes care of applying the rest of the code to the DOM. Facebook and Instagram use multiple `ReactDOM.renders()` but we're not making those.

**`ReactDOM.render()` arguments**

The `render()` method takes two arguments: an element(s) to render, and the location where it will be rendered.

`.render(ELEMENT, LOCATION)`

The first argument to the `render()` method is written in **JSX**. 

<br>
<hr>

# JSX

JSX looks like html, but it is javascript. You can think of **JSX** like jQuery. It's a library that allows you to more stuff with JavaScript. In this case, it allows you to write **XML** syntax in JavaScript files. Hence, **JSX**.

Underneath, the JSX transformer will take this XML-looking stuff and transform it into:

```javascript
React.createElement('div', null, 'hello world')
```

You can avoid JSX if you like, but writing in the arguments for `.createElement()` all the time, especially when dealing with trees of nested html elements, isn't quite as convenient as JSX.

<br>
<hr>

# Components

The beauty of React is that every meaningful part of your single-page-application can be deconstructed into **components**. 

Since each **component** deals with its own specific part of the app, amd will ultimately live in its own file, the app is easier to edit and maintain.

**Components** are also useful for reusability across your app.
 
Let's make a component to pass to `ReactDOM.render()`.

A basic component is just a **function** that returns JSX.

```javascript
    const App = () => {
      return (<div>Hello world</div>)                                                                             
    }
```

This is the simplest type of component, called a **functional component**, because it is just a function. Later, we will also see more complex components called **class components** that track the state of data (they are ES6 Classes).

We can tell ReactDOM to render this Component with a **capitalized** and **self-closing tag** with same name as our component:

```javascript
  ReactDOM.render(
    <App />,                                                                                                  
    document.querySelector('#root')
  );
```

![](https://i.imgur.com/CiAKZyl.png)


The **App** component will be the container component for our site.

Let's add some more elements to our App component.

First, break it apart visually.

![](https://i.imgur.com/shnsj0I.png)

Let's give our App a header, main, and footer.

Note that we can only return **one parent element**. We wrap everything in a single div.

```javascript
    const App = () => {
      return (
        <div>
          <header>...</header>
          <main>...</main>
          <footer>...</footer>
        </div>
      )   
    } 
```
Check it out in the browser.

Let's fill it out a smidge and make our page:

```javascript
    const App = () => {
      return (
        <div>
          <header>
            <h1>Website</h1>
          </header>
          <main>
            <h2>I am Bib Fortuna</h2>
            <img src='https://i.pinimg.com/236x/86/9b/6d/869b6d02226dfdd4b0ddc49086417f13--jabbas-palace-bibs.jpg'/>
          </main>
          <footer>
            <small>Die wanna wanga</small>
          </footer>
        </div>
      )
    } 
```

![](https://i.imgur.com/o5Bw9tH.png)

We have one big ole component that serves as the container for our site. Logically, we would now think about putting the **App** component in its own file (we'll see this later).

<br>

# Child Components

We have four distinct parts of our App component.
These can be further compartmentalized into child components. 

Make an **AboutMe** component:

```javascript
const AboutMe = () => {
	return (
	  <main>
	    <h2>I am Bib Fortuna</h2>
	    <img src='https://i.pinimg.com/236x/86/9b/6d/869b6d02226dfdd4b0ddc49086417f13--jabbas-palace-bibs.jpg'/>
	  </main>
  )
}
```

In the **App** component, Delete the main element and include the **AboutMe** component:

![](https://i.imgur.com/uieI3b3.png)


Do the same for header and footer.

```javascript
const Header = () => {
  return (
    <header>
      <h1>Website</h1>
    </header>
  )
}
```

```javascript
const Footer = () => {
  return (
    <footer>
      <small>Die wanna wanga</small>
    </footer>
  )
}
```

Add them as child components to the App component:


![](https://i.imgur.com/Li5E9ld.png)

How nice is this!

Everything is organized, and in addition, given semantic meaning, such as 'AboutMe'. 

Each component can be curated and maintained in its own wee place, and additionally, can be reused anywhere else in the app (or even in other apps!).


```javascript
  return (
    <div>
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </div>                                                                                                    
  )
```

The next step for code organization would be to put those components in their own files. The step after that is to deal with **data** coming in to the components (through **props**) and changes to the data (through **state**).

Nowadays, React is written server-side. Using CDN scripts and an `app.js` in your `index.html` is outdated.

However, writing react server-side typically involves a lot of config with **Webpack** and **Babel**. 

Thanks to the core React team at Facebook, there is a handy node module called `create-react-app` that does configuration for us and gives us some boilerplate React code to work with.

<br>
<hr>

# Setup server

## create-react-app

Global install:

```
npm i -g create-react-app
```

## Todo App

Let's make a Todo app that lists some todo items. The app will have a 'CLEAR' button that empties the todo list. When we click on an individual todo, the todo will get a line-through.

![](https://i.imgur.com/C1kInff.png)

Exit the portfolio directory, and create a new React app called `todo_app`:

```
create-react-app todo_app
```

<br>
## Directory structure

![](https://i.imgur.com/4WUtf2V.png)

This is typical boilerplate React setup that you'll see in a lot of React apps. 

* The React files are kept in a `src` directory.

* Each component will have its own file in the `src` directory.


<br>

## `src/index.js`

Your `ReactDOM.render()` is in its own file, `index.js`.

It's rendering the **App** component to the div with id `root`, just like we saw before.

```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```

<br>

## Modules

Instead of including the React dependencies from script tags and CDNs, React and ReactDOM are installed as Node modules (`npm`), and imported into our files. 

The `import` syntax is a replacement for `require`. 

![](https://i.imgur.com/UE86jjQ.png)

The **App** component is in its own file, `App.js`. It is receiving the App component with ES6 import syntax: `import App from "./App"`

<br>

## Run the app

We can run our React boilerplate app with `npm start`.

**Note:** You can make custom `npm` commands in your package.json under "scripts". In this case, `npm start` will execute the command "react-scripts start", which is just running another package.

![](https://i.imgur.com/kL46oV6.png)

When you run the server, you should see this in your browser:

![](https://i.imgur.com/iOtZJZE.png)

<br>

The component that we see rendered to the page is the **App** component that was passed to `ReactDOM.render()`

Let's look in `App.js` to see that component.

<br>

## `App.js` component

App.js

![](https://i.imgur.com/05k1nFm.png)

**This app has just one component so far, App**

There's quite alotta stuff happening in this component, so let's remove that stuff for now and just have a single hello world div.

* Delete all of the JSX within the **return**.
* Add a hello world div element to the return.

![](https://i.imgur.com/1iVbVVw.png)

Our webpage should automatically update to show us our App component.

<br>


## Expressions in JSX

React is **javascript heavy**, and we'll want to use Javascript expressions to be evaluated on our page (in our JSX).

We do this with single-curlies: `{ expression }`

Example:

`{ 2 + 2 }`

![](https://i.imgur.com/2xvuk44.png)

Will render 4.

<br>

## Class components

There are two kinds of components.

* Functional components
* Class components

**App** is not a **functional component** like we used before, but rather a **class component**. It's a class that inherits from `React.Component`. A class component is the same as a functional component, it just gives us additional functionality for managing **state** that we will see later.

For now, while we get our heads around where can write our code, let's just think of Classes as only containing **methods**. This class contains a **render** method. We can write in more methods. But a class component must contain a render method.

![](https://i.imgur.com/Ha1eCmz.png)


Let's add in an array of todos. We'll need to write it in somewhere. Since the class can only take methods, for now let's just write our array into the render method (this is not good because the array will be generated each time the component re-renders, but later, we will see the proper way to add data).

```javascript
const todosArray = ['chew', 'snipe', 'yawn', 'bloat', 'roll']
```

![](https://i.imgur.com/l4iBgU9.png)


Let's give our app some more "todo"-shape, and add our array to our JSX using the curlies.
![](https://i.imgur.com/3aTFg6P.png)

Result:

![](https://i.imgur.com/G5UhJC6.png)

<br>


# Templating: repeat

What we need is a way to make our array elements individual `<li>` elements. 

In Angular, we would use `ng-repeat` to iterate over elements and pop them into the html with tags.

React does not have its own Domain Specific Language or special directives like Angular. Instead, all of our templating like **repeats** `ng-repeat` and **conditional rendering** `ng-if` are done solely with JavaScript programming skills. Yay JavaScript!

**Rendering a collection**

Let's look at how we can turn our todo items into `li` elements. For this, we use JavaScripts regular old **`.map()`** method.

```javascript
const listItems = todosArray.map(item => <li>{item}</li>)
```

Go ahead and `console.log(listItems)` to see what's in there.

Here we are mapping each item to an `<li>` element.
Render all the `<li>`s within `listItems` instead of `todoArray` by just passing it into the JSX.

```javascript
<ul>{ listItems }</ul>
```

![](https://i.imgur.com/jZkpO8k.png)

You could also do the repeat straight in the JSX, but editing it might get more messy:

```javascript
    return(
      <div>
        <ul>
          { todosArray.map(item => <li>{ item }</li>) }
        </ul>
      </div>
    ) 
```

**Either way you slice it, the React equivalent of `ng-repeat` is done with JavaScript `.map()`, and the resulting array can be included in the JSX template.**

<hr>
Sidenote: you'll receive this error in the console:

![](https://i.imgur.com/VLtqMEf.png) 

It's okay. It's an easy fix, but it'll just get in the way for now.

<br>
<hr>

# List component

Our list of todos is its own thing, distinct from other existing or potential parts of our page. Following the React paradigm, let's componentize the meaningful sections of our app.

Let's put our list into its own **List** component.

New file: `List.js` inside the `src` folder.

All we will need for this component is React. Let's make this a simple **functional component** first, and we will see later why we might want a **class component** instead.

The component must have a return or the app will complain.

```javascript
import React from 'react'

const List = () => {
  return (
    <ul>
      list component
    </ul>
  )
}

export default List;
```

* **Import** it into App.js
* Replace your `<ul>` with the new component.

> App.js

```javascript
// child components
import List from './List.js'
```

![](https://i.imgur.com/ndw408u.png)

> App.js

```javascript
    return (
      <div>
        <h1>My Todo List</h1>
        <List />
      </div>
    );
```

<br>
<hr>

# Passing data to child components

Our global 'data' is our `todosArray` array. Let's keep that in the **App** component. 

Let's put our list mapping functionality into our **List** component. After all, it's our **List** component that will deal with the templating of our list.

> App.js

![](https://i.imgur.com/VZZvXVp.png)

> List.js

![](https://i.imgur.com/9P2B7tZ.png)

We should have an error:

![](https://i.imgur.com/12sHoWq.png)

That's cool. All we have to do is pass our `todosArray` data from the **App parent component** to the **List child component**.

> React is all about having many distinct Components. The big issue that arises from having all these components is: how do they communicate with each other? 
> 
> The primary means of communication is sending data that exists in a parent component down into the child components.
> 
> Let's see how we can get our components to communicate by sending data.

<br>

# props

Let's look at how we can send and receive data to and from Components.

## sending props

What we want to do is pass data from the **App** component to the **List** component. All data sent from Component to Component is done with **key value pairs**. Key-value pairs that are passed from Component to Component in React are called **props**. 

We add a **prop** to the List component call. The **prop** is just a key-value pair: `todosArray={todosArray}`

This is added as a kind of attribute to our component call:

```javascript
<List todosArray={todosArray} />
```

The key name is whatever we want. We are sending the JS expression `todosArray` as a value wrapped in curlies.

![](https://i.imgur.com/U3DxAeN.png)

## receiving props

We can receive this key-value pair in the **List** by receiving the props as a param in the functional component.

```javascript
const List = (props) => { ... }
```

* Go ahead and `console.log(props)` to see the props object.

We can then access the props within the function with `props.keyName`. In this case, `props.todosArray`.

```javascript
const listItems = props.todosArray.map(item => <li>{item}</li>)
```

![](https://i.imgur.com/1CXqieW.png)

Then just include the mapped props in the JSX, and we're done!

![](https://i.imgur.com/zRjiZiq.png)

<br>

### props are read-only

We have passed data from parent to child, but this is just static data. Props are **read only** in that they ought never to be altered. They just get passed down via **unidirectional flow** from parents to children.

When writing methods that take in props, those methods must be **pure functions** that do not change the incoming data, the props.

The data within our apps will change due to user interaction, ajax requests, or other automated processes. For this kind of data, we don't use props. Instead, we use **state**.

**props** and **state** are the only two fundamental kinds of data in React.

<br>
<hr>

# Altering the state of data

Now we'll find out why we'd want a **class component** rather than a **functional component**. Class components are **stateful components**, meaning that the state of the component can change, and React must then track these changes through Reconciliation in the Virtual DOM.

>Remember:
>**props** are immutable properties, they are not meant to be changed. 
>
>**props** are static data that gets passed from component to component.
>
>**state** is that which can be altered or changed by acting on the data.
>
>**state** exists only in its containing Component

### creating state

Let's add **state** to our List component. We'll make it so when we click on a CLEAR button, the listItems array will empty, the DOM will update with the change of state, and all the todos will disappear from the page.

> Convert our List component from a stateless component to a stateful one.

* Comment out the functional component.

* Write in a class with a render method.

```javascript
class List extends Component { 
  render() {
    return(
      <ul>                     
        stateful list component
      </ul>                    
    )
  } 
}
```

This **stateful** Class component requires a render method. The render method is directly related to **state**, which is why we don't have one in a **stateless** functional component. When the state in a Class component is updated, the component re-renders by running the render method.

<br>

## constructor method

To add state, we explicitly define a constructor method within the class. (If we do not explicitly define it, it's created for us anyway).

We pass in the incoming props and call on the superclass with `super()`:

```javascipr
  constructor(props) {
    super(props)
    console.log('props coming into the constructor: ', props);
  }
```

![](https://i.imgur.com/G5njxC1.png)

What we want is a version of our props that we can change. We can't / shouldn't change the original props, but we could make a reference to them, and set them as state.

We can set the initial state with `this.state` in the constructor.

Let's make the state equal to the incoming props:

```javascript
  constructor(props) {
    super()
    this.state = {
      todosArray: props.todosArray
    }
  }
```

We can then access a stateful version of our data through `this.state.todosArray`

Put our listItems map in the render method as we did before:

![](https://i.imgur.com/g7C2MVS.png)

Change our listItems to operate on the state instead of the props:

```javascript
const listItems = this.state.todosArray.map(item => <li>{item}</li>)
```

And render the listItems.

![](https://i.imgur.com/NCkTuyr.png)

Now, if we were to change the state of our array, those changes will be tracked and rendered.

<br>
<hr>

# Recap

So far we have 

* two components, **App** and **List**
* **List** is a child component of **App**
* a todosArray in the parent component
* the child component receiving the todos array as **props**
* the child component with a **state** taken from the incoming props

What we want now is some interactivity.

<br>
<hr>

# Event listeners

To change the state, we'll click on a CLEAR button that will empty our `this.state.todosArray` in the **List** component.

Event listeners are written **inline** and reference methods within the class.

They are similar to an Angular `ng-click`.

You add an `onClick` attribute, and it will run a function.


* Add a button to the **List** component. Remember to wrap the whole shebang in a parent div.

```jsx
<button onClick={}>CLEAR</button>
```

![](https://i.imgur.com/Vbaddi7.png)


On click, we want to run a method. Add a method to the class:

```javascript
handleClick() {
  console.log('clicked')
}
```

![](https://i.imgur.com/9zpf7Fw.png)


Add our reference to the event handler: 

```javascript
<button onClick={ this.handleClick.bind(this) }>CLEAR</button>
```

![](https://i.imgur.com/yDOjBSv.png)

**Note:** Note that we have to bind **this** to the listener. This is because ES6 classes don't bind methods by default. There are a couple of other ways we can fix this lack of binding, either by passing an anonymous arrow function:

```javascript
onClick={ () => this.handleClick() }
```

Or by declaring the binding in the constructor:

```javascript
constructor() {
  super()
  this.handleClick = this.handleClick.bind(this)
}
```

<br>

### `setState()`

Let's change the state of our data, finally!

In our `handleClick` method, we use `setState` to set the state of our data:

```javascript
  handleClick() {
    this.setState({
      todosArray: []
    })
  }
```

![](https://i.imgur.com/PWuCubh.png)


When the button is clicked, it will change the **state** of our todosArray. This state change will immediately register in the DOM.

Note that we did not want to try to change the **props**. The **props** are immutable data coming in. What did is set the _initial state_ to the incoming props, and then changed the **state** instead, leaving the props untouched.

We also did not directly alter `this.state`.

`this.setState({})` is a special method that triggers a re-render.


<br>
<hr>

# props and state relationships

* **state** is internal to a component. It's a private **mutable** condition managed within a single component.

* **props** is not internal to a component. It's a public **immutable** affliction that can spread through out the populace of components.

* A child component can set its **state** to the incoming **props** (we have seen)

* All data is passed as props. A parent component can have a **state** that it passes to a child as **props**.

* If a parent component's **state** changes, the **props** that it sends will also change.

* Methods can be passed as **props**. A parent can pass an event handler as props to a child. Therefore, a child component can trigger a method that belongs to a parent, and update the state of the parent ("data flows down, actions flow up"). 

<br>
<hr>

# Update the UI state

What if we wanted to operate on a _single list item_ rather than the entire list?

Let's say, when we click on a list item, we add a strikethrough to that item, and only that item.

If we wanted to set state on individual list items, it would make sense for those list items to be _their own component_ with their own internal state. 

But, a rule of thumb is that you want to have as few **stateful** components as possible, because changing state, and therefore calling render, and therefore triggering Reconciliation is expensive.

You want your components to be **stateless** where possible. **stateless functional components**. 

We don't need to change the data state to display a line-through on a list item. Rather we can just change the UI state. So, we don't have to make an entirely new component with its own data state.

We can just set an event listener on each `<li>` element that targets the `<li>`.

First, add the event listener:

![](https://i.imgur.com/jRc3ZuE.png)

Our event listener will pass the entire click event implicitly to the event handler. We can use this **event** as a param in our handler, even though we didn't explicity pass it. (this is standard JS functionality -- to implicitly pass a DOM event).

Our **event** has a **target**. The target is the thing that was clicked.

Write the event handler just to alter the `.target` of the event:

![](https://i.imgur.com/eit57zm.png)

### className

To add a class in JSX, we use camel-case `className`. 

Write in the `strikeout` class to `App.css`:

```css
.strikeout {
  text-decoration: line-through;
}
```

### Conceptual question:

Does our **App** Component need to be a Class? Or can we simplify and make it a **functional component** instead? Remember, functional components are preferred as they are less expensive. 

They key to this answer has to do with **state**.

And why are functional components less expensive?

<br>

# Exercise and practice: Single list item with internal state

If we _did_ want to make each separate list item a Component with internal state.

* Make a new component for a single listItem.

> New file: `SingleListItem.js`

![](https://i.imgur.com/Ann1QG1.png)

* import the component into **List**

![](https://i.imgur.com/WnEQC49.png)

Make it so our repeat template map uses the new **SingleListItem** component and passes in the props:

```javascript
const listItems = this.state.todosArray.map(item => <SingleListItem item={item} />)
```

![](https://i.imgur.com/ooqlI0t.png)

<br>

> File: **SingleListItem.js**

### render the incoming item prop in the template

![](https://i.imgur.com/XOqaBvn.png)

### set the state for our single list item

For our **SingleListItem** component, set state for a `completed` boolean.

![](https://i.imgur.com/kVQ1hFv.png)

Note that we are making a brand new piece of data for state, **completed**. We are not using props within our state, so we didn't need to use props as a parameter in our constructor.

Add in a handler for the click that changes the state:

![](https://i.imgur.com/uuYmz9M.png)

<br>

# Templating: conditional rendering

Depending on the state, render either a crossed out item or a regular one.

In Angular we would use `ng-if` to decide what to display. In React, it's all JavaScript, so we will use an if statement.

![](https://i.imgur.com/yRM45F1.png)



### refactor

For the conditional statement, alternatively, use a **ternary** operator:

```javascript
className={ this.state.completed ? 'strikeout' : '' })
```

![](https://i.imgur.com/kilDKuM.png)

Completed **SingleListItem** component

![](https://i.imgur.com/WkDWGJu.png)

<br>
<hr>

# NEW APP!

# AJAX with 'index' and 'show' pages

## Questions-Answers app

Let's make an app that does the kinds of RESTFul app-y stuff we've seen already:

* Makes an ajax request to get an 'index' of data when the page loads
* Displays the 'index' page for that data
* When you click on one of items, displays a 'show' page for that item

Index page will have a list of questions:

![](https://i.imgur.com/rZnRWjK.png)

When you click on a question, the show page will show the answer:

![](https://i.imgur.com/glRJvBf.png)


<br>

## create-react-app

Exit out of the todo app, and make a new **create-react-app**

`create-react-app questions_answers_app`

`npm start`

<br>

## Components

Our main **App** component will be a **stateful** Class component. The state of our App will determine what happens with its children: our **Questions** index component and our **Answers** show component. These will be **stateless** functional components that inherit from **App**.

```
- App (sets the state)
	- Questions
	- Answers
```

We will perform actions within **Questions** and **Answers** that will update the state of the parent **App** component.
<br>

> **App.js**

* Clear out all the stuff and just provide a div to render.

![](https://i.imgur.com/6uGFmHw.png)

<br>

# AJAX

## Lifecycle Hooks

As soon as our page loads we want it to make an AJAX request to get the questions data (just like if we load up our Angular page and immediately make an `$http` request to get our index of data).

We don't want to put the AJAX request in the **render** function, otherwise the request will be made every single time the component re-renders. So, now we will see the proper way to get data into the app.

React provides special methods to Class components called **Lifecycle Hooks**. We can run a method called `componentDidMount()` that runs **only once**, and runs as soon as the component mounts in the DOM.

![](https://i.imgur.com/TQKtLem.png)

We can check in the console: we'll see the console log appear without us having to invoke `componentDidMount` anywhere in our code. It's invoked for us when the component mounts.

There are a number of **Lifecycle Hooks** that we can use. `componentDidMount()` is just one of them.

## Fetch

[Fetch article here](https://css-tricks.com/using-fetch/)

To make our AJAX request, we use **fetch**. Let's get data from the questions API using fetch, inside the `componentDidMount()` lifecycle hook.

URL to get 10 random questions: `http://jservice.io/api/random?count=10`

```javascript
  componentDidMount() {
    fetch('http://jservice.io/api/random?count=10')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
```

![](https://i.imgur.com/yN4irri.png)

The json should be logged in the console.

<br>

### Set state

What we want to do is to **set state** in our App to the incoming data. This is the same as if we were to set `this.APIResult = response.data` within our `$http` callback in Angular.

First, lets add in the `constructor()` method, and set initial state.

```javascript
  constructor() {
    super()
    this.state = {
      allQuestions: []
    }
  }
```

Our array of json objects will live in `this.state.allQuestions`.

### Update state

When the component mounts and the ajax request is done, we want to update the state with the new data. For this we use `this.setState({ })`

```javascript
  componentDidMount() {
    fetch('http://jservice.io/api/random?count=10')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({ allQuestions: json })
    })
    .catch(err => console.log(err))
  }
```

![](https://i.imgur.com/7py8spt.png)

Great! Now we just need to make our child Components.

<br>
<hr>

## Questions component (index of questions)

This will be the default component when the page loads.

* Make file: `Questions.js`

This Component will not have its own state. If we can avoid making stateful components, we should, because they are expensive. This will be a **stateless functional component**. Just a function.

> Questions.js

![](https://i.imgur.com/mZRMlWy.png)

> App.js

Import and render the Questions component:

![](https://i.imgur.com/P1brkUg.png)

![](https://i.imgur.com/pztRzNW.png)

<br>

## App: pass data to Questions component (props)

Let's pass all the data collected from our API request into the Questions component.

Where does the data live? It lives in the **state** of the **App** component.

We can pass this into the **Questions** component as **props**.

```javascript
<Questions allQuestions={ this.state.allQuestions } />
```

> App.js

![](https://i.imgur.com/ALAxa7V.png)

<br>


## Questions: receive data from App component

Our functional component, **Questions**, will receive the props as a param, `props`.

```javascript
const Questions = (props) => {}
```

![](https://i.imgur.com/T4xu2dn.png)

Our questions exist inside `props.allQuestions`.

<br>

## Template: repeat

To display the questions inidividually and as DOM elements, we will want the equivalent to an Angular `ng-repeat`.

JavaScript `.map()`.

Map the questions to `p` tags, and then return the collection.

![](https://i.imgur.com/XEAqEHo.png)

Our **index page** of questions should render.

<br>


## Update the state again

* The state of our app lives in the **App** component. The **App** component will have state to display either the index page or the show page.

* When we click on an individual question in the **Question** component, we want the state of the **App** component to update.

* To do this, we can make an event handler in our **App** component. We can then pass this event handler as **props** to the **Questions** component. 

* We can use this event handler in the **Questions** child component. When it is triggered, it will trigger in the parent.


### Make an event handler

Our event handler will decide, on the **App** level, whether to display the index or show page.

```javascript
  showAnswer() {               
    console.log('show answer handler');
  }
```

Then we can send this method as a **prop** to the child component, because we want it to be triggered by the child component when the user clicks on a question.

We can send multiple props to a component:

```javascript
      <Questions                                                                                                        
        allQuestions={ this.state.allQuestions }
        showAnswer={ this.showAnswer }
      />
```

> App.js

![](https://i.imgur.com/JmxaKFm.png)

## Use the event handler in the child component

> Questions.js

```javascript
<p onClick={ props.showAnswer }></p>
```

![](https://i.imgur.com/xsGqwnw.png)


When we display the show page, where is the **answer** coming from? It's coming from the question that was clicked. Therefore, we need to send the answer as data from the child to parent.

First, let's set up receiving the answer:

> App.js

![](https://i.imgur.com/R3gDp3E.png)

Then, let's send from the child component. 

## Passing data into the event handler

To pass the data into the event handler, we will have to make our event listener an anonymous callback (a function reference), rather than an invoked function:

![](https://i.imgur.com/Tk5DnXe.png)

Now when we click a question, the answer should appear in the console.

The next step is to **update the state** of the parent component to display the answer.

<br>

# This and binding

You have to careful with the value of **this** in React. Class methods by default do not bind to their class, therefore **this** can mutate.

By using the callback arrow function in our event listener, the `showAnswer()` method, when called from there, will have a **this** value of the child component.

We can test by console.logging **this** in `showAnswer()`.

![](https://i.imgur.com/eNsFhLl.png)

When we click on a question:

![](https://i.imgur.com/ol46avq.png)

Woops! **this** is set to the child component (which has props `allQuestions` and `showAnswer` that we originally passed to it).

The question arises: what happens if we try to `this.setState({ })` in our `showAnswer()` event handler?

![](https://i.imgur.com/wbcwcyD.png)

React is trying to set state in the **Questions** component, not the **App** component. We don't want this. The **Questions** component does not have state. It's a functional component. And we don't even _want_ the questions component to have state.

**Solution:**

Bind `showAnswer()` to the **App** component when it is sent as a prop:

```javascript
showAnswer={ this.showAnswer.bind(this) }
```

![](https://i.imgur.com/dC7ZHcW.png)


Now we can set state:

In the constructor set the initial state of `currentAnswer` to null

![](https://i.imgur.com/HDtRDHf.png)


In `showAnswer()`, update the state:

![](https://i.imgur.com/A3epc4B.png)

State updates are asynchronous, so to check on state when it is complete, we can provide a callback:

![](https://i.imgur.com/56INAWc.png)

The state with 'currentAnswer' should be updated:

![](https://i.imgur.com/zjFQocK.png)

<br>
<hr>

# Show page with answer

Lets set up **Conditional rendering**, whether our **App** component will display the **Questions** component (index), or a new **Answer** component (show).

* Make a stateless functional component **Answer:**

> Answer.js

![](https://i.imgur.com/Wo7JPHP.png)

* Import it into the **App** component

![](https://i.imgur.com/uPRmWW2.png)


### Conditional Rendering

> File: App.js

We use an **if statement** dependent on the **state**

![](https://i.imgur.com/qa0kL8f.png)


Side note: there are a number of ways to do conditional rendering, this is the simplest and clearest way. [More here](https://www.robinwieruch.de/conditional-rendering-react/) and [Facebook docs](https://facebook.github.io/react/docs/conditional-rendering.html)

<br>

### Send data into the Answer component

Send the currentAnswer state into the component as props.

```javascript
<Answer currentAnswer={ this.state.currentAnswer } />
```


![](https://i.imgur.com/Qo8aTIo.png)


### Receive and display data in the Answer component

The prop is accessible through `props.currentAnswer`

![](https://i.imgur.com/YDvK4zS.png)

![](https://i.imgur.com/gLXZihx.png)

<br>

### Add an event - link back to index

We'll do what we did before. We'll make an event handler in the parent **App** component and send it into the **Answer** child component. When a user clicks on it, it will trigger the change of state in the parent.

> File: App.js

```javascript
  showQuestions() {
    this.setState({
      currentAnswer: null
    })
  }
```

![](https://i.imgur.com/8L8S8ti.png)


Pass the event handler to the child component:

```javascript
showQuestions={ this.showQuestions.bind(this) }
```

![](https://i.imgur.com/pmaTEg8.png)


### Add event listener

> File: Answer.js

```javascript
<button onClick={ props.showQuestions }>Back to questions</button>
```

![](https://i.imgur.com/A8uWGbh.png)

<br>
<hr>

# Recap

* We have a parent component that will display one of two child components (index or show).
* Whether the parent displays the index or the show depends on user input within the children.
* The parent has **state** that is altered by clicking on things within the children.
* The children themselves are **stateless**
* We alter the the parent state by passing event handlers as **props** to the children.
* Depending on the parent's **state**, it will conditionally render either the index or show.

<br>
<hr>

# Thinking in React

[Facebook docs - Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

* Break your app into Components
* Decide which Components are **stateful** or **stateless**
* Prefer **stateless functional components**
* **UI state** is different to data state, and often has simple solution without creating more **stateful components**
* 'Lift state up' from stateless child to stateful parent Components by passing event handlers as props ("data goes down, actions go up")

If there is state, decide where it should live.

From the Facebook docs:

![](https://i.imgur.com/4OH0Iq2.png)

<br>

# Redux, etc.
React is bad for making simple apps, like Todos, but great for making real apps. Big apps. In _really_ big apps where data is plunging into deeply nested components and going way sideways and flyin' too high, state is usually not handled by React itself but by a state controller like **Flux**, **Redux**, or **Mobx**. These are great but add a lot of files and boilerplate, and it's recommended only to use them if it's clear that they are needed.

React can do alot on its own. That said, many jobs that ask for React skills also ask for Redux skills, so it's worth exploring that too.

























































