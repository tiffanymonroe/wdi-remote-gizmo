![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: CSS Mockup <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Matt Huntington<br>
    Modified by: Kristyn Bryan <br>
Competencies: CSS <br>
Prerequisite Videos: <br>
    - [Box Model](https://www.youtube.com/watch?v=HNgdhp1_kEE&index=6&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>
    - [Display](https://www.youtube.com/watch?v=qjSe_K3agYc&index=7&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>
    - [Positioning](https://www.youtube.com/watch?v=zH8kjJdvmOs&index=8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>
    - [Units of Measure](https://www.youtube.com/watch?v=5axuSSBIMuQ&index=9&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>
    - [Units of Measure Continued](https://www.youtube.com/watch?v=ZfxNpQm6m2g&index=10&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br> 

---

## Directions:
- Using what you have learned about CSS from the videos and notes, style **and position** your HTML so that it looks like the mockup (but with different images).

## Setup

1. You **already** created the HTML for this mockup yesterday. You should have created it in your `w02d03/student_examples/morning_mockup` folder

2. Copy your work from yesterday into today's `student_exerices` folder.

**Note:** Because you want to copy the files that are inside a folder, we'll have to use the `-r` flag on our `cp` command:

### Copy the files from your folder
#### In terminal:
 - navigate to **today's** `student_examples` folder `/w02d04/student_examples` folder.
 - **create a new folder** here to hold your work called `morning_mockup_continued`
 - navigate **inside** this new folder `w02d04/student_examples/morning_mockup_continued`
 - from there, copy your files over from yesterday: `cp -r ../../../w02d03/student_examples/morning_mockup .`
 - `ls` to confirm that the files have been copied into your new folder.

 Note: if you have created your files elsewhere, you will need to adjust the path.

***Do you have your images?***
 - if you had not already copied the image folder into your `morning_mockup` folder, you'll have to bring the images over now:

### Copy the images (if they weren't already in your folder)
#### In terminal:
  -  **create a new folder** here (in your `morning_mockup_continued` folder) to hold your images called `img`
  - navigate **inside** this new folder `w02d04/morning_exercise/morning_mockup_continued/img`
  - from there, copy your files over from yesterday: `cp -r ../../../../w02d03/morning_exercise/img .`
  - `ls` to confirm that the files have been copied into your new folder.


## Use this Mockup
 ![Mockup](mockup.jpg)
 

## Stretch:

1. Match the colors exactly by figuring out what they are with a "color picker" Chrome extension.
1. Choose fonts that are as close as possible to the original fonts.

<details>
<summary>CSS Notes</summary>

# CSS - The Box Model and Element Spacing

## Lesson Objectives
1. Define elements of standard layout and why they don't work on the web
1. Diagram the box model
1. List and define the different ways to display an element
1. List the different ways an element can be positioned
1. Differentiate between units of measure in layout
1. Describe some common techniques used in layout

## Define elements of standard layout and why they don't work on the web

### The standard elements of layout

In traditional layout programs like photoshop, we typically give an element two properties:

1. Dimensions (height and width)
1. Position (top and bottom)

### Why can't we simply use dimension and position in layout?

The issue with traditional layout properties is that elements on a page are dynamic, meaning they can change.

1. Content of an element might change
1. Elements may be added to, removed from, or manipulated within the DOM

If we used traditional layout properties, when elements were added/changed they could collide with each other.

## Diagram the box model

We can instead define different properties of elements so that they won't collide with each other.

### standard properties

1. border
	- border around the content
1. padding
	- space between the content and the border
	- usually used to create space between an element and its children
1. margin
	- space surrounding the border
	- usually used to create space between sibling elements
	- if two elements with top and bottom margins are placed on top of each other, the space between the two elements will be that of the larger margin
1. height/width
	- can explicitly define the height and width of the content area of an element
	- if the width of an element is too small to fit content all on one line, the content will wrap to create multiple lines, increasing the element's height

### additional properties

1. box-sizing
	- content-box
		- width/height refers to the width/height of just the content
	- border-box
		- width/height refers to the width/height of the content + the padding + the border
1. overflow
	- if height is set, and content is too large for element, it will flow outside of the element
	- visible
		- default.  The content is displayed outside of the element
	- hidden
		- the content is cropped outside of the element
	- scroll
		- scroll bars appear on the element allowing you to scroll within the element
	- auto
		- like scroll, but only if there is too much content.  If the content fits within the element, scroll bars are hidden

## List and define the different ways to display an element

An element can be placed on the page in many ways using the `display` property

1. block
	- the element takes up an entire line.  No other elements can be placed before/after it on that line.
	- width defaults to 100%
1. inline
	- the element is placed on the same line as its other inline siblings
	- width defaults to with width of the content
	- width and height properties are ignored
	- only horizontal margin and padding are respected (not top/bottom margin/padding)
		- text must flow normally on the next line in a paragraph
1. inline-block
	- very similar to inline, but height, width, and top/bottom padding/margin work
	- height and top/bottom padding/margin can create space between current line and previous/next lines
1. none
	- remove the element from DOM completely

## List the different ways an element can be positioned

Sometimes we do want elements to overlay each other.  In this case we can use the `position` property in conjunction with top/left properties to define layout the traditional way.

1. static
	- default
	- top/left/bottom/right do not affect the element
1. relative
	- element is positioned relative to its parent
1. absolute
	- element is positioned relative to the whichever ancestor is positioned relative
	- Example: A number or text on top of an image
	- if no ancestor is positioned relative, it is positioned relative to the browser window
1. fixed
	- like absolute, but does not move when user scrolls down/up the page
1. z-index
	- a simple integer used to determine which element is layered on top of another
	- elements with a higher z-index are stacked on top of elements with a lower z-index

## Differentiate between units of measure in layout

1. px
	- pixels.  most basic unit
1. em
	- a proportion of the element's font size
	- e.g. if the element's font-size is 16px, 0.5em is 8px
1. rem
	- a proportion of the browser's font size
	- each browser has a default font-size, usually set on the body or html tag
1. %
	- can be a percent of different attributes, depending on the property it is assigned to
		- height: % of parent's height
		- width: % of parent's width
		- padding: % of parents's width
			- even for top/bottom padding
		- border: doesn't even work
		- margin: like padding

## Describe some common techniques used in layout

1. fluid layout
	- use % widths so that content scales with the width of the browser
	- great for making sites look good on all screens
	- use % widths on images
1. using spacing in ems
	- if a user increases the font size in their browser, using pixels for spacing can be problematic
	- Use ems instead so that elements scale properly
1. using ems and rems
	- can define a font-size for a "module" on the page using rems
	- look at the body copy font size for that module to determine what this size will be
	- spacing for everything within that module is done using ems
	- this way a module's spacing is independent of their parent's font-size
1. use rems/ems for vertical spacing. use % for horizontal spacing
	- a good rule of thumb
</details>
