![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: CSS Modal <br>
Type: Morning Exercise<br>
Creator: Kristyn Bryan<br>
Course: WDIR-Hopper<br>
Competencies: CSS, HTML<br>

---

# Modals

Modal boxes are a frequently utilized for login/register forms, advertisements, pop-outs of information, or just notifications to the user.

We're going to be creating a modal using HTML, CSS, and JavaScript.

![modal example](https://i.imgur.com/4ft8Uda.png)

## Setup

1. Navigate to your `student_examples` folder for today.
2. Create a file called `modal_example`.
3. Copy the contents of the `modal_practice` folder inside this morning's `morning_exercise` folder into your `modal_example` folder.

4. Open your `index.html`, `style.css` and `app.js` in your text editor to follow along and create a modal.
5. Open your `index.html` in your browser.

## The Activity

Let's pretend that we are making the card game: Bridge. We want a modal to pop up to show information about the game.

So, when we click on the button `About the Game`, a modal will pop up to show you information about how to play the game.

There will be a way to close the modal so that we can see our main page again.


## Add the HTML Elements

1. Add a button that we will use to open the modal

  ```javascript
  <button id="openModal">About the Game</button>
  ```
  - give it the text `About the Game`

2. Add a div which will be the modal

  `<div></div>`

3. Add the elements that will go **inside** the modal:
  - An anchor tag to close the modal
  `<a></a>`

    - give your `<a>` tags the text `Close`

  - A header tag for the modal's header
  `<h1></h1>`

    - give your `<h1>` tag the text `Learn to Play Bridge`

  - Three paragraphs of text inside the box
  `<p></p>`

    - Feel free to use lorem ipsum text or, for more authentic text, take some from here: http://www.acbl.org/learn_page/how-to-play-bridge/.

![initial setup view](https://i.imgur.com/tLbbM7J.png)

## Style your Modal

We need to add some styling to our modal to set it apart and eventually only have it display when we press the `About the Game` button

1. Let's give the div that is our modal an **id** of `modal` so that we can easily grab it.

2. In your css sheet, let's give it some properties:

**background-color**
`rgba(0,0,0,0.4)`

We want to give it a color, but be slightly transparent in a true modal fashion.

**position**
`fixed`

**top**
`0`

**left**
`0`

![page image](https://i.imgur.com/9iAdMvH.png)

**height**
`100%`

**width**
`100%`

![](https://i.imgur.com/EZJRwPf.png)

**z-index**
`1`

This puts our modal in front of the body (which has a default z-index setting of `0`).

**overflow**
`auto`

(If overflow is clipped, a scroll-bar should be added to see the rest of the content)

## Style the Modal Text Box

**background-color**
`white`

![text modal box](https://i.imgur.com/uwxbf6c.png)

**height**
`350px`

**width**
`550px`

**border-radius**
`2px`

![height and width](https://i.imgur.com/jojYBox.png)

Let's give the text box some margins so that it starts to center itself on the page.

**margin**
`150px auto`

This will set the margins for the top and the bottom to 150px (or larger). The right and left will automatically set themselves (and keep the box centered horizontally).

![margin](https://i.imgur.com/vcXm3Cp.png)

**box-shadow**
`0 2px 2px rgba(0, 0, 0, 0.2)`

This will give the box some depth.

![box shadow](https://i.imgur.com/C0Tjb9W.png)


## Hide your Modal

Now that you have your modal box styled, let's hide it.

1. In your css file, on the **modal**, add the following:

**display**
`none`

We will set this to `none` so that we do not see the modal.
We can change this dynamically by adding a `display: block` in our event handler that on the About the Game button in our javascript file.

![display none](https://i.imgur.com/jlpgZaZ.png)

## Hide and Show your Modal

NOTE: I've already linked the jQuery script to your application, so we can freely use jQuery in our application.

1. In your `app.js` file, get your `About the Game` button AND let's get our modal.

```javascript
// Grabbing About the Game button
var $openBtn = $('#openModal');

// Grabbing modal element
var $modal = $('#modal');
```

2. Let's set an event listener on the About the Game button.

```javascript
//Add event listener to About the Game button
$openBtn.on('click', openModal);
```

3. Let's create an event handler to display the modal.

For the modal to display, we need to change the css property of the modal's `display` to `block`;

```javascript
// Event handler to open the modal
var openModal = () => {
  $modal.css('display', 'block');
}
```

4. Get your `Close` button.

```javascript
// Grabbing close button
var $closeBtn = $('#close');
```

5. Let's set an event listener on the close button.

```javascript
//Add event listener to Close button
$closeBtn.on('click', closeModal);
```

6. Let's create an event handler to close the modal.

For the modal to close, we need to change the css property of the modal's `display` to `none`.

```javascript
// Event handler to close the modal
var closeModal = () => {
  $modal.css('display', 'none');
}
```

![working modal](https://media.giphy.com/media/l0Iy0bvX0tqIkH4qY/giphy.gif)

## Automatically Have Modal Show

What if we wanted to have the modal automatically show after 5 seconds of someone visiting our page?

We could set something to automatically run our `openModal` function.

1. Make a setTimeout for the modal to automatically pop-up after 5 seconds.

```javascript
setTimeout(openModal, 5000);
```

## Format the Information Inside the Modal

Let's reorganize the code in our Modal Text Box and format it to look nicer than this!

1. Move the `Close` button to the bottom of the text box and wrap it in a `div` to make it easier to style.
  - Let's give it an **id** of `modal-footer`

![modal footer](https://i.imgur.com/aPb6HKH.png)

2. Let's give the text some room to breath with some padding and a change in line height:

**padding**
`2%`

**line-height**
`120%`

![nicer style](https://i.imgur.com/jdJoshE.png)

3. Let's update the font.

  - select the header in your modal text box and give it a font of: `"Arial Bold"`

  - select the modal text body and the modal footer and set the font to: `"Arial"`

4. Adjust the close button location. Select just the footer and let's move the close button to the right:
  `text-align: right;`

  ![updated font](https://i.imgur.com/rbFhDU8.png)

5. Give the heading some room to breath. Give it a **padding-bottom** of `15px`.

![padding of header](https://i.imgur.com/GnVOAC1.png)

## Give some style to the buttons

We have two buttons on our page. One uses a `button` tag and the other is an `a` tag.

1) Let's adjust the `Close` to an `button` tag so that we can do the same styling to both.

2) Give both `button` tags a **class** of "modal-buttons".

3) In your css file, set the following styles on your "modal-buttons" class:

**padding**
`14px 18px`

**background-color**
`#677996`

**border:**
`none`

**outline:**
`none`

**border-radius:**
`3px;`

**color**
`white`
(This changes the font color)

**font-family**
`arial`

**cursor**
`pointer`


![button change](https://i.imgur.com/4ft8Uda.png)
