![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: RSpec & Ruby Conditionals <br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: Alex Deschamps for WDI-Archer<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Gizmo<br>
Competencies: Problem solving with Ruby and testing with RSpec<br>
Prerequisites: Ruby <br>

---

We're going to complete an activity and we're going to refer to tests to write our code. We're using a testing suite called [RSpec](http://rspec.info/documentation/) to test the code that we write against some pre-written tests. We're going to adjust our code until we pass the tests.

# Setup

1. Navigate into your `morning_exercise` folder.

2. From inside the `morning_exercise` folder, install `rspec`
``` bash
  $ gem install rspec
```

3. Type `rspec` to see the tests.

## How to Run RSpec

- Navigate *inside the root directory of your program* (in our case today, this should be the `morning_exercise` folder).

- use the `rspec` command in our terminal to test our application.

### Am I doing it right?

>RSpec knows to look for a folder with a `spec` in the name in order to run test files.

#### Doing it Wrong

If you are running `rspec` in a folder that **doesn't** contain  a `spec` folder, you will receive a message like this:

![error](https://i.imgur.com/6iUCioU.png)

*Notice that it says "0 examples"*

#### Doing it Right

If you are running `rspec` in a folder that **does** contain  a `spec` folder, you will receive a message like this:

![successful message](https://i.imgur.com/r4xoNy2.png)

## What's happening?

These tests are expecting a file (we've specified to use `diet.rb`)

Make sure to work inside of this files, save your work, and type `rspec` to look at the tests.

Take a look at the "failures" that are in your terminal. These should guide you to write your code.

## Remember to Test

Run `rspec` in your terminal, write code to pass one test, run `rspec` again. Run this test after you finish each method.

## Success!

You will know that your tests are successful when you receive a message that tells you that there are 0 failures. It looks like this:
```
..........

Finished in 0.0062 seconds (files took 0.32867 seconds to load)
10 examples, 0 failures
```

If you finished early, read/watch more about RSpec TDD: http://rspec.info/

Feel free to play around with the current tests. Add another test and then write code that will pass it.

# Activity

<img src="https://img.ifcdn.com/images/8f41af704b7fb18df8e42f84423f6c38339f9dcaec135ea5ae84670786c031b5_1.jpg" width="300px" align="right" hspace="10">

Rick Astley has decided to go on a diet and he needs your help to stay on track.

Use the `diet.rb` file to write code that will make tests pass and help Rick control his donut intake.
