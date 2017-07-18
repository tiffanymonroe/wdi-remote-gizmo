![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Code organization tips <br>
Type: Tips n tricks<br>
Creator: Thom Page <br>
Topics: Folder structure, OOP code organization, Decoupling<br>

---
# CODE ORGANIZATION 

#### Tips 'n' tricks


## Folder structure

Put different types of files into their own folders. 

* **.js** files go in a **js** folder
* **.css** files go in a **css** folder
* images go in an **images** folder

etc.

**index.html** never goes into a folder: it must remain top-level so that when you host your app, the hosting service knows where to look to load the page.

By putting different types of files into their respective folders, they are organized into their own cubby holes. If you add more `.js` files, or many images, for example, you easily will know where to find them without tripping over other files.

![](https://i.imgur.com/bIJAU5W.png)

Remember to specify the correct **path** when linking your files:

![](https://i.imgur.com/bchaQmp.png)

The paths include the folder name in which the files are located.

<br>
<hr>

## OOP Code Organization

In a large project, your code can start sprawling all over the place. You can easily lose track of where important code is located. This is especially true when dealing with alot of distributed event handlers and methods that update the DOM.

If you like, you can keep the same types of processes in their respective cubby holes. You can do this by separating your application code into top-level objects.

Example:

* **event handlers** can go in an **EventHandlers** object.
* **user interface** methods that update the DOM can go in a **UI** object.
* **application logic** can go in an **App** object.

These are just examples -- you can organize however you see fit and in a way that makes sense for your app.

### Event Handlers

You could put all of your event handlers into an object:

```javascript
const EventHandlers = {
    onClickDoSomething() {},
    onClickDoThis() {}
}
```

You could look in your EventHandlers cubby hole and pick the right one for the right listener:

```javascript
$('button').on('click', EventHandlers.onClickDoThis)
```

### User Interface

You could put functions that update the DOM into an object:

```javascript
const UI = {
    addTextToDiv() {},
    changeImgSize() {} 
}
```

### Application logic

You can put your application logic -- data, processes, operations that do not affect the DOM, into an object:

```javascript
const App = {
    gameOver: false,
    generateRandomNumber() {},
    shuffleArray() {}
}
```

<br>

**Depending on your app**, there are many possibilties for how you can change this organization to suit your needs:

* You could put your app logic into multiple objects.

* You could combine event handlers and DOM updates into one object if you don't think they need to be separated.

```javascript
const Display = {
    onClickAddParagraph() {
        $('body').append('<p>hi</p>');
    }
}
```

You could organize your code into an **MVC** structure. This would mean separate objects for  **Models, Views, and Controllers**. Models are the data, Views are the display properties, and Controllers are what mediate the logic between Models and Views.

<br>

### Event Listeners

Put your inital **event listeners** into the window onload, and have them trigger the respective **event handlers** which are located inside an object:

```javascript
$(() => {
  $('.element').on('click', EventHandlers.onClickDoSomething);
}); // end window onload
```

<br>
<hr>

## Decoupling

If your `app.js` is getting too large to read, you can separate your js functionality into multiple files.

The key thing to remember is to load the scripts in the **correct order**. Which js processes depend on which?

In **index.html**, in the same way, your `app.js` depends on your jQuery code. Therefore, your `app.js` is included **after** your jQuery script. The same principle applies to multiple JavaScript files that you make.

From the previous example:

* A file containing the **App** object should be loaded first.
* A file contain the **UI** object should be loaded second.
* A file containing the **EventHandlers** object should be loaded third.

It wouldn't matter where the event listeners are loaded, because they are in a **window onload** which will always be loaded only when the DOM is rendered. But it would make sense to load them last since, when tracing the flow of information, the listeners depend on everything else.

Don't **decouple** your files unless you think it truly benefits your code organization.
