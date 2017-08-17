![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Ruby Intro<br>
Type: Morning Lab<br>
Creator: WDIR-Hopper <br>
Competencies: Basic Ruby<br>

---

# Morning Lab

## Setup

1. Create a file called `morning_lab_answers.rb` for this morning lab.
2. Write your code and test it out manually by running your code in the command line `ruby morning_lab_answers.rb`.
3. If the output looks like it's intended to, you're good to go!

You can read about strings and all the methods available [here](http://www.ruby-doc.org/core-2.1.1/String.html).

## Silly String

1. Create a string that contains your favorite word. It can be in any language!

2. Using a method built into ruby, capitalize every letter in the string you just created

3. Now let's make all the characters lowercase in the string `"IM NOT SHOUTING"`

4. Using a method built into ruby, count how many letters are in the string `"supercalifragilisticexpialidocious"`

5. Now let's add more words to that string, using `+` just like in math. That's called concatenation. Let's add together to the two strings `"wow"` and `"mom"`.

6. Now let's capitalize just the first letter of the sentence `"i really like programming"`

<hr>



## User Input Mini App
Now that we know about gets-ing and puts-ing in Ruby, let's build a simple input/output app.

The main objective is to create an application that _takes in user input, does something with that input, and then prints out an output_.

### Reminder about Gets
The first thing we need to do is take in user input with the `gets` method.

Remember, when an executed Ruby program hits the method `gets`, the program is going to pause and wait for the user to enter text into the terminal.

The way `gets` takes in input is important to remember. First, it always takes in input as strings. If a user enters `10`, gets interprets that as `"10"`, not as an integer.

The second thing to remember is that `gets` also takes in the newline character. When a user types in their input and then hits the `enter` button, `gets` keeps track of the input *plus* the line break. Basically, your variable storing the input looks like this:

```ruby
city = "nyc
"
```
See how the string doesn't end after the letter 'c', but actually jumps to the next line? That's the newline character that gets kept track of because of the user pressing the `enter` key after typing `nyc`. We don't want our string to include that newline character, so we have to add the `chomp` method to `gets` to remove that. So we'll use `gets.chomp`.

### The Mini App: A Visit to NYC
You're going to build an application to plan a tourist's visit to NYC.

For each question, you'll take in input from the user and store each piece in a variable. <img src="https://s3.amazonaws.com/after-school-assets/greetings.jpg" align="right" width="300" hspace="20">

Once you have that input stored, you'll want to use string methods (like upcase, downcase, captialize, etc) to put the input in a proper format. You can always take a look at the Ruby documentation [here](http://www.ruby-doc.org/core-2.1.2/String.html) or the notes from today for a refresher about the string methods that you can use.

Your final output should use *string interpolation* to output the data in a full summary of their NYC itinerary.

You'll want to ask the user:
1. where they would like to stay
2. what sites they want to visit
3. what food they want to eat
4. how many nights they want to stay.

Create an array with the names of 5 different tours: "Statue of Liberty", "Times Square", "Central Park", "Financial District", "Broadway".

Using a loop, display to the user all of the tours.
5. Ask the user which tour they would like to attend and store the data.
6. After the user has selected the tour, you should immediately display the cost of the tour. All tours cost $25 except the "Central Park" tour which is $40. This should be the first time that they're seeing the cost of this tour.

### Hungry for More?
You'll have to research how to do this.

6. Add a "Random Tour" option to the tour options that you display. If a user selects "Random Tour", randomly select a tour from your list for them to attend and then show the cost.

## Mini Calculator

Prompt a user to enter numbers for you to calculate. Go about this however you'd like to get two numbers, but do the following:

1. Take the two numbers, add them, and display the sum to the user.
2. Take the two numbers, subtract them, and display the difference to the user.
3. Take the two numbers, multiply them, and display the product to the user.
4. Take the two numbers, divide them, and display the quotient to the user.

Hint: change your user's input to a float!

# Hungry for More?

Solve these Ruby problems:

1. https://coderbyte.com/editor/guest:Letter%20Changes:Ruby
2. https://coderbyte.com/editor/guest:Simple%20Symbols:Ruby
3. https://coderbyte.com/editor/guest:Time%20Convert:Ruby
