![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---

Title: Morning Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Topics: Intro, Terminal, "Hello World"<br>

---

## Intro

Hello, you are reading the intro.

Day to day:

- Lesson headers
	- Headers will be posted for all lessons and labs with links to markdowns and the Zoom channel. 
- Markdown
	- Markdown contains reference material related to the lesson 
- Sharing screen
	- The instructor will screenshare for demonstration purposes. Double-click out of fullscreen. 
- Screen real-estate: markdown, zoom, text editor, terminal, slack
	- Command-tab to cycle applications
- Muting
	- Be muted unless speaking 
- Asking questions
	- Ask away! Either in Slack or out loud 
- Visibility of instructor code 
	- Speak up if the instructor's code is not visible (eg. too small).
- Thumbsups
	- We use the thumbsup emoji (or in this case the Gizmo / Gremlin emojis) to gauge completeness of exercises. Click on the thumb or Gizmo or Gremlin when you are done with an exercise.
	

<br>
<hr>

## Software

- Atom installed?
	- [Download Atom](https://atom.io/)
- Node installed?
	- [Download Node](https://nodejs.org/en/download/)
	- Click on "Macintosh Installer"
	- Install the package

<br>
<hr>

## Lesson Objectives

_After this lesson, students will be able to:_

* Use Terminal to navigate files and folders
* Create files and folders on the command line
* Navigate using relative pathing on the command line 
* Print a "Hello World" to the console

<br>
<hr>

## Terminal

&#x1F535; **Open Finder**

In **Finder**, we can navigate our computer's folders and files: folders contain files and more folders:

![](https://i.imgur.com/CR7PmAO.png)

<br>

&#x1F535; **Open Terminal**

- ⌘ (Command) + Space, or open Spotlight
- "*Te*rminal"
- `Enter`

![](https://i.imgur.com/CvggrYa.png)

- Keep it locked in your dock. Right click on the icon, highlight options, check "Keep in Dock".

![](https://i.imgur.com/ZrPuVNq.png)


&#x1F535; **Terminal Preferences**

You can change the color of your Terminal and the font size. It is recommended to make your Terminal output easier to read, rather than the tiny default output.

> Terminal > Preferences > Pro

<br>
<hr>
12:20

## Command Line Interface

Terminal provides a Command Line Interface (CLI) to the operating system. With it you can give your computer direct, text-based instructions. It is the most powerful piece of software on your computer! Think of it as the central hub of your development process. For now, we will use it to navigate the files and folders in our computer.

When terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde `~`.

In Terminal-land, **Directories** are the same as **Folders** (we just call them **Directories**).

![](https://i.imgur.com/tTyOkwV.png)

## Bash Commands

The Command Line understands commands written in the `bash scripting language`. The commands are abbreviations of English words, or acronyms.

- `pwd` - will print the current working directory. It shows you a `path`. This `path` shows you where are curently located in the filesystem. It's like sending up a flare or homing beacon, where you can see how far you have 'traveled' from the root directory.

![](https://i.imgur.com/4aaT88x.png)

- `ls` - Lists the contents of the current directory. You can see
	* the  immediate _child_ directories (the directories inside this directory)
	* the files and directories that are not hidden.

![](https://i.imgur.com/H2RTUny.png)

- Bash commands can take `flags` denoted by a dash `-`
	- `ls -a` - list content including hidden files and directories. Hidden files and directories begin with a period, for example, `.git`.


Directories (folders) can have directories within them, and there can be directories inside _those_ directories, ad infinitum. This creates a tree structure where directories can have many children with many different branches.

![](http://i.imgur.com/M6OgKZJ.png)

<br>
<hr>
12:30

## CHANGING DIRECTORIES

We can navigate to other directories _relative_ to the current working directory.

- `cd some_directory`
	- navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
- `cd ..`
	- navigates into the parent of the current directory
	- `..` is shorthand for parent
- `cd` will take you back home

- letter[TAB]
	- autocompletes

<br>

&#x1F535; **Code Along (2 min)**

* From the home directory, navigate to Library
* Pick a directory and navigate to the end with `cd directoryname`. Remember to autocomplete.
* Then navigate back up with `cd ..`
* Navigate to Library
* Pick a directory and navigate to the end
* Navigate back home with `cd`

<br>
<hr>

12:35

## MAKING DIRECTORIES AND FILES

`mkdir` - makes a directory

Example:

- `mkdir directory_name`

	> makes a directory called 'directory_name'`

<br>

`touch` - creates an empty file. A file typically will have a **file extension** like `.txt` whereas a directory will not.


Example:

- `touch file.txt`

	> makes a .txt file

<br>

&#x1F535; **Activity (10 min)**

**Construct a Labyrinth**

Using what you know about navigating directories and creating files and folders, construct a 'labyrinth' on your desktop.

**Precision** is important. There are a few layers to this exercise. Be patient.

- Make sure you are in the correct directory when you go to create another directory or file.
- Make sure you use `touch` to make files, and `mkdir` to make directories. **files** and **directories** are two different things.

* Navigate to Desktop
* `mkdir Labyrinth`, `cd Labyrinth`
* Make a directory structure like this:

![labyrinth](https://i.imgur.com/V1zaeBT.png)

**parlor** and **stairway** are _child directories_ of the Labyrinth directory.

**sarah_williams.txt** is a _file_ inside the the ballroom directory.

If you make a mistake, don't worry, just keep adding the right stuff to the right place.


<br>
<hr>
12:50

## Navigation: RELATIVE PATHING

Chain more directories to the current path with the `/` separator

- Go down the chain into child directories
	- `cd parent_directory`
	- `cd parent_directory/child_directory`
	- `cd parent_directory/child_directory/grandchild_directory`

- Go up the chain into parent directories
	- `cd ..`
	- `cd ../..`
	- `cd ../../..`

- Go sideways into a _sibling_ directory by first going up, then down
	- `cd ../sibling_directory`

- Go into an _aunt_ or _uncle_ directory by first going up to the parent, then the grandparent, then down again on another branch:

	- `cd ../../auntie_directory`

<br>

&#x1F535; **Code along (2 min)**

**Navigate the Labyrinth**

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the `stairway`
* From the `stairway`, navigate to the `parlor`
* From the `parlor`, navigate to the `dining room`
* From the `dining room`, navigate to the `escher room`
* From the `escher room`, navigate to the Labyrinth root

<br>

&#x1F535; **Activity (10 min)**

**Navigate the Labyrinth**

For each of these, write your command on one line, using full paths:

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the `dining_room`
* From the `dining room`, navigate back up the root directory
* From the Labyrinth root directory, navigate to the `stairway`
* From the `stairway`, navigate to the `parlor`
* From the `parlor`, navigate to the `escher_room`
* From the `escher room`, navigate to the `throne_room`
* From the `throne_room`, navigate to the `ball_room`

<br>
<hr>

1:05


5 min break

1:15

## Code

We are going to:

* make a file
* open it in our text editor
* write some code
* run the code in Terminal

&#x1F535; **Code Along (5 min)**

* In Terminal, navigate to Documents.

* Make a directory `w1d1_student_examples`

* Go inside the directory

* Make a file `first_code.js`

* Open up Atom, either by typing `atom` or doing it manually through Spotlight or the Dock.

* Go to `Atom -> Install Shell Commands`

![](https://i.imgur.com/AqFki3f.png)

* Close Atom

* From inside the `w1d1_student_examples` directory, open Atom from the command line with `atom .` (atom space dot)

**NOTE** This might not work on some systems. If not we will get it sorted out in time. For now, Just open the directory from `File -> Open`, and open the `w1d1_student_examples` directory.

* When Atom opens, you should see the `w1d1_student_examples` directory and all the files inside the directory (in this case, just the `first_code.js` file.

<br>
<hr>

## Hello World

* Check version of Node `node -v`. Any version is fine.

* Let's send a message to the console. It is somewhat of a tradition to write a 'Hello World' message as the first thing you do in programming.

`console.log('Hello World!');`

Run the code in Terminal

> `node filename.js`

`node first_code.js`

> => Hello World!

**Congrats!** You've written your first "Hello World" of wdi-remote!

We can send whatever we want to the console.

`console.log('The rain in Spain falls mainly on the plain');`

<br>
<hr>
