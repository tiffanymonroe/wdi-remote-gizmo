![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# REACT - PART 2 of 3

---

Title: React part 2 of 3 <br>
Type: Optional Topic<br>
Duration: ~2 hrs <br>
Creator: Thom Page <br>

---

# Questions and Answers app

## AJAX with 'index' and 'show' pages


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

* The state of our app lives in the **App** component. The **App** component will decide whether to display index or show. It manages the state of the page (with a boolean or some other stateful datum).

* When we click on an individual question in the **Question** component, we want the state of the parent **App** component to change.

* To do this, we can make an event handler in our **App** component. We can then pass this event handler as **props** to the **Questions** component. 

* We can use this event handler in the **Questions** child component. When it is triggered, it will trigger in the parent.

"Data flows down, actions flow up".

## Make an event handler

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

























































