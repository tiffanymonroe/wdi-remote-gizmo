![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Accordion Menu Walk-through <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: WDI-Archer<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Hopper<br>
Competencies: CSS <br>
Prerequisites: CSS, HTML <br>

---

# Morning Exercise

## Accordion Menu

This morning we are going to turn HTML check boxes into an accordion menu.

![accordion](https://media.giphy.com/media/l0IykBFTJXnp56Voc/giphy.gif)

## Setup

- Navigate to your `accordion_practice` folder in today's `morning_exercise` folder.
 as we code to create an accordion-style menu.

## HTML

- Take a look at your HTML file inside the `accordion_practice` folder.

- Inside the `body` of your HTML, you should have a `div` that is the main container of your accordion.

- Inside the `div`, there are **three** sections: Appetizer, Entree, and Dessert.

- Each of the sections has an `input` tag that is a **checkbox**, a `label`, and then a `dl` (description list) that contains a `dt` (description term) and an accompanying `dd` (a description of a description term).

- We are not going to make any changes to the HTML. To make our final product, all that we need to do is make changes to the styling in CSS.

![initial html](https://i.imgur.com/piZx685.png)

## body

- let's update the font. We'll import a font from Google and link it in our CSS file.

```
/*Imported Fonts*/
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300);
```

- Add this font to your body:

```
body{
  font-family: 'Open Sans', sans-serif;
}
```

## .accordion
- let's get the accordion box to be a certain width with some shadowing around the border.

```
.accordion {
  width: 30vw;
  min-width: 320px;
  overflow: hidden;
  margin: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
```

![updated accordion](https://i.imgur.com/JkUhGDt.png)

## accordion input boxes

- We're going to grab the label of the section ONLY if the `input` tag has been checked. To do this, we'll use the CSS `+` selector

```
.accordion input:checked + label {
  background: #3399cc;
}
```

More info on the [CSS `+` selector](https://www.w3schools.com/cssref/sel_element_pluss.asp)

![label after checked box is colored](https://i.imgur.com/rb40H9v.png)

- Let's visually get rid of the check box. We don't want to get rid of the functionality, so using `display: none` will hide it while still letting us use it.

```
.accordion input {
  display: none;
}
```

![no check box](https://i.imgur.com/SboSuIA.png)


## style the label
- Give the label some styling:

```
.accordion input + label {
  /*This is so that when the background color changes, it will happen happen slowly*/
  -moz-transition: background 0.75s;
  -o-transition: background 0.75s;
  -webkit-transition: background 0.75s;
  transition: background 0.75s;

  /*Font*/
  font-weight: bold;
  color: white;

  /*Pointer*/
  cursor: pointer;

  /*Display, color, position, layout*/
  display: block;
  border-bottom: 1px solid #3399cc;
  position: relative;
  background: #49b1e5;
  padding: 10px;
}
```

![label styled](https://i.imgur.com/baxb5dV.png)

- Make the background color change when someone hovers over the label

```
.accordion input + label:hover {
  background: #3399cc;
}
```

![changed hovered color](https://i.imgur.com/ApLlWeZ.png)


## sections

- The divs that contain the sections with the information have a class of `section`. Let's use that to style the sections.

```
.accordion .section {
  /*space for the text to breathe*/
  padding: 0 10px;

  /*background & font styling*/
  background: white;
  color: #AAA;

  /*transitioning between states will look smoother*/
  -moz-transition: height 0.75s, opacity 0.75s;
  -o-transition: height 0.75s, opacity 0.75s;
  -webkit-transition: height 0.75s, opacity 0.75s;
  transition: height 0.75s, opacity 0.75s;
}
```

![accordion section](https://i.imgur.com/R1klJke.png)

- Now let's "hide" these sections until a user wants to see them. Add this to your
```
.accordion .section{
  opacity: 0;
  height: 0;
}
```

![no height](https://i.imgur.com/VgtzJ7S.png)

- Remove the gaps in between the labels which is being caused by the margins on the `dl` elements

```
dl {
  margin: 0;
}
```
![label no space](https://i.imgur.com/xwXLXhW.png)

## show the section when selected

- Let's add styling to the section if the check box is selected. We need to also specify the label in our selector because the checkbox itself is hidden and the user will be clicking the label.

```
.accordion input:checked + label + .section {
  display: block;
  overflow: auto;
  height: 300px;
  opacity: 1;
  background: white;
  color: #333;
}
```

![showing section](https://i.imgur.com/Gn8wf5X.png)

- Notice the background's smooth transition with color and height.

## Add an icon to your label that rotates as your label opens.

- Check out the website [FontAwesome](http://fontawesome.io/) if you've never been there. We're selecting a cross to use when we open and close our menu section. Place this code at the top of your CSS sheet.

```
/*Imported cross for opening / closing menu section*/
@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
```

- Place the cross after your label:

```
.accordion input + label:after {
  /*postion the cross after the label*/
  position: absolute;
  top: 13px;
  right: 10px;

  /*specify the font (the cross) and it's size*/
  font-size: 12px;
  content: '\f067';
  font-family: 'FontAwesome';
}
```

More info on the [CSS`::after` selector](https://www.w3schools.com/cssref/sel_after.asp).


![cross](https://i.imgur.com/4KFXMmi.png)

- Let's rotate the cross when we select a label. To do this we need to adjust two things.

- Put a rotation on the checked label:

```
.accordion input:checked + label:after {
  -moz-transform: rotate(405deg);
  -o-transform: rotate(405deg);
  -webkit-transform: rotate(405deg);
  transform: rotate(405deg);
}
```

![rotate cross](https://i.imgur.com/mh6cRRG.png)

- Make the transition of the rotation smoother by adding a transition on the cross (when the checkbox is not selected):

```
.accordion input + label:after{
  -moz-transition: transform 0.75s;
  -o-transition: transform 0.75s;
  -webkit-transition: transform 0.75s;
  transition: transform 0.75s;
}
```

![accordion](https://media.giphy.com/media/l0IykBFTJXnp56Voc/giphy.gif)

# Hungry for More?

- Add some style to the scroll bars in the sections. Play with the code below to customize them to your liking:

```
/* Scrollbar styling (only in webkit)*/

.accordion ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #85c2e0;
}

.accordion ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
```

![scrollbars](https://i.imgur.com/J3Sgw0f.png)
