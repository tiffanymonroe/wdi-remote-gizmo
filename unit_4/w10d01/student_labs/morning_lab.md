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

1. Create a file called `morning_lab.rb` for this morning lab.
2. Run your code on the command line: `ruby morning_lab.rb`.

# Built-in string methods

Example of using a "built in method", in this case, `.reverse`

```ruby
"Hello world".reverse
```
> "dlroW olleH"

Research other String methods [here](http://ruby-doc.org/core-2.4.1/String.html)

The methods are listed along the left hand side:

![](https://i.imgur.com/GHJNDEK.png)

Use `p` to print the answer to the console.

1. Create a string that contains your favorite word.

2. Using a method built into ruby, capitalize every letter in the string you just created.

3. Using a method, make all the characters lowercase in the string `"IM NOT SHOUTING"`

4. Using a method, count how many letters are in the string `"supercalifragilisticexpialidocious"`

5. Capitalize just the first letter of the sentence `"i really like programming"`

<hr>

# Methods

Your own methods will look like this:

```ruby
def some_method
	// do some stuff
end
```

Print the return value of the method to the console:

```ruby
p some_method
```

**Print hello**

Write a method `hello` that returns the string "Hello World".
 
* Call the method with `p` and print "Hello World" to the console. 
* _Note_ do you need to use `return` in your method?

**Print greeting**

Write a method `greeting` that returns an input interpolated into a string.

```ruby
p greeting "help me"
```
> "help me Rhonda"

**Print sum**

Write a method `sum_numbers` that returns the sum of two inputs.

```ruby
p sum_numbers 20, 22
```
> 42

**Print if key exists**

Write a method `check_key` that takes two inputs: one is a symbol, the other is a hash.

The function should return **true** if the symbol is a key that exists in the hash, **false** if not.

```ruby
p check_key :name, name: "Timmy"
```
> true

**Print if value exists**

Write a method `check_value` that takes two inputs, one which is a hash, and checks if the first input is a value in the hash.

```ruby
p check_value "Timmy", { name: "Timmy", age: 100 }
```
> true

# Problem-solving

**Convert Time**

Write a method `convert_time` that takes a parameter `num`. The method should return the number of hours and minutes within `num`. Return a string with the hours and minutes separated with a colon.

```ruby
convert_time 63
```
> "2:3"

```ruby
convert_time 90
```
> "1:30"

```ruby
convert_time 45
```
> "0:45"

```ruby
convert_time 126
```
> "2:6"

You will not need any loops or advanced techniques to solve `convert_time`. All you'll need is a few lines of code, some math-thinking-pain and some built-in methods.



# Hungry for More?

Solve these Ruby problems:

1. [problem 1](https://coderbyte.com/editor/guest:Letter%20Changes:Ruby)
2. [problem 2](https://coderbyte.com/editor/guest:Simple%20Symbols:Ruby)

