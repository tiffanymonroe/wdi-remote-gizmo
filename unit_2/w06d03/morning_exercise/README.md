
![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: HTML Forms and CSS - Styling HTML Forms <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Course: WDIR-Hopper <br>
Competencies: HTML Forms, CSS for Forms <br>
Prerequisites: basic HTML, CSS<br>

---

## HTML Forms

## Intro
Forms can be tricky to style. Spend some time this morning just focusing on styling forms

## Quick note on Fieldset/Legend/Label tags
The `<fieldset>`, `<legend>` and `<label>` tags are designed for web accessibility and aiding screen readers to properly interpret the form. Fieldset lets you group parts of a form together. Legend defines what a fieldset is for. Labels are for inputs. You can either nest your input inside a label or you can put the label first and then as a sibling put the corresponding input, if you do it this way the label must be a `for` attribute in the `label` tag and then the `input` tag must have an `id` that matches the value of `for`.

See the provided HTML for examples.

## HTML Form Inputs and Attributes

### Input Types
|input type| What it is for |
|:-----------:|:------:|
| text | input for a small amount of text (like a name, or address)|
| hidden | a user doesn't see this, but it is useful for populating with associated data that the user doesn't need to see and sending it via req.body |
| email| input for email, some browsers will check if it is a valid email automatically, a lot of smartphones will add the `.com` button to the keyboard |
| password | obscures the characters being typed, password matching confirmation is usually done with JavaScript |
| date | lets you choose a date from a calendar |
| color | lets you choose a color |
| file | lets you choose a file |
| range | gives a slider that you can use for input |
|number | gives arrows to go up and down, some browsers will validate for a number |
| textarea | allows for a larger amount of text to be entered, allows resizing fo the text input |
| radio | allows user to choose one option only |
| checkbox | allows user to select multiple options|
| select/options| allows user to choose from a scrolling menu, can have options for one choice or many |
| button | button input, but no default behavior|
| submit | form submission - default to do form action, if no form action, reloads the page |



### Attributes for inputs

|attributes| Purpose|
|:-----------:|:------:|
| name | the name of the key for req.body for form submission |
| id   | used in conjunction with `<label>` attribute `for` - use for screen readers/accessibility|
| value | a default value for the input |
| placeholder | puts text in the input field - but this text does not get 'grabbed' for req.body |
| autocomplete | aids in allowing autocompleting typical inputs by a user - i.e. name, address - acts differently in each browser and some browsers have functionality for autocomplete that may override the need for this attribute |
| autofocus | focuses on this field on page load |
| required | makes the field required on the HTML side of things|
| pattern | allows for regex on the HTML side (lets you check for valid input before sending to server, i.e. minimum number of characters, starts with certain characters, numbers only, letters only etc. ) |
| step | when using number or range, allows you to set the default size of a step. Without setting this, the default is usually 1 |
|min, max| allows min and max numbers for range and numbers |
| multiple | allows multiple selections with `select/options` |

## Activity

Look through these examples for inspiration:
1. [Form Designs 1](https://www.sanwebe.com/2014/08/css-html-forms-designs)
2. [Form Designs 2 ](https://www.sanwebe.com/2013/10/css-html-form-styles)

3. Check out CSS tricks [tips for creating great web forms](https://css-tricks.com/tips-for-creating-great-web-forms/)

4. Work on styling the form provided
 - feel free to reorganize the form, change/remove/add tags
 - feel free to comment out parts you don't feel like styling right now (not into radio buttons? -it's cool, just comment them out - or just straight up delete them - it's all good)
 - go ahead and change the labels, if you like
 - if you grab a chunk of CSS from somewhere online be sure to include an acknowledgement
 5. Share your creations with classmates for the last ~5-10 minutes of Morning Exercise
 
 
 Reminder: Atom lets you fold code :
 
 Unfolded:<br>
 ![unfolded](https://i.imgur.com/1xS90Tw.png)
 <br>
 Folded:<br>
 ![folded](https://i.imgur.com/BPDwGDd.png)
 <br>
 
 
 Remember the wiki: [Atom cheatsheet](https://github.com/ga-students/wdi-remote-hopper/wiki/Atom-CheatSheet)
