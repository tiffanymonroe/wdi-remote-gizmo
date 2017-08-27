![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby Intro<br>
Creator: Thom Page <br>
Competencies: JS / basic programming<br>

---

# Ruby

Why Ruby?

* Rails -- a second server framework, too
* Great example of an OOP language
* Elegant
	* Created by Yukihiro “Matz” Matsumoto who has often said that he is “trying to make Ruby natural, not simple,” in a way that mirrors life
* Useful scripting language
* Active community

[About Ruby](https://www.ruby-lang.org/en/about/)


# Hello World

Beginning a second language: "Hello world". Print to the console.

&#x1F535; In `student_examples` make a file `hello_world.rb`

> A Ruby equivalent to `console.log()` is `p()`. This is just another way of running `.inspect`. You could also use `puts` or `print`. 

```ruby
p 'Hello world'
```

Run it in Terminal with

```
$ ruby filename.rb
```
> "Hello world"

**"Hello world" with basic datatypes**

```ruby
p 42
p true
p [1, 2, 3]
```

**Variable assignment**

```ruby
adjective = "cruel"

p adjective
```
> "cruel"

**Interpolation with string templates** `#{ }`

Must be within double quotes

```ruby
p "Hello #{adjective} world"
```
> "Hello cruel world"

**Built-in methods with dot notation**

```ruby
p adjective.reverse

p adjective.upcase
```
`.reverse` and other [String methods](http://ruby-doc.org/core-2.4.1/String.html)

(show how to use docs)

**Combinations**

```ruby
adjectives = ['cruel', 'dusty', 'ordinary']

p "Hello #{adjectives.sample} world"
```
> Hello ordinary world

<br>
<hr>

11:20
	
# Methods

Abstraction: 

> A cluster of reusable code that can take input and return a result.

>A "self contained" module of code that accomplishes a specific task. "Takes in" data, process it, and "returns" a result. Can be used over and over and over again. Can be "called" from the inside of another module.

[ref](http://www.cs.utah.edu/~germain/PPS/Topics/functions.html)

&#x1F535; What Javascript construct fits this pattern?

In Javascript this is called a **function**. In Ruby it is called a **method**.


## Case one

**single parameter**

Write a method that returns true if a string is palindrome, false if not (don't account for case).

```ruby
def is_palindrome? inp
  inp == inp.reverse
end

p is_palindrome? 'radar'
```
> true

&#x1F535; Differences from JavaScript?

* def end
* snake case
* implicit return
* no semicolons
* no `let` or `const` or `var`
* parentheses optional for arguments and parameters
* Ruby methods that return a Boolean are sometimes written in question form

&#x1F535; Account for case.

Example problem:

&#x1F535; Write a Ruby method `length_five?` that takes a string and returns true if the string has a length of exactly 5 characters.

[String methods](http://ruby-doc.org/core-2.4.1/String.html)

## Case two
**two or more parameters**

```ruby
def get_area length, width
  length * width
end

p get_area 4, 5
```
> 20

* Still don't need parens

&#x1F535; Write a Ruby method `two_strings` that takes two strings and returns an interpolated string with the words "and" between the two original strings. 

```
p two_strings "Bebop", "Rocksteady"
```
> "Bebop and Rocksteady"

Remaining cases will not have exercises.

## Case three

**Combine: method, string template, integer division**

Pass a number of minutes to method and return the number of hours and remaining minutes as a decimal, in **string** format. Example 

```ruby
minutes_to_decimal 90
```
> "The decimal is: 1.5"

```ruby
def minutes_to_decimal mins
  diff = mins.to_f / 60
  "The decimal is: #{diff}"
end

p minutes_to_decimal 121
```
**Integer division**

Dividing integers returns an integer (rounded down)

```ruby
p 11 / 2
```

> 5

Including a float will return a float

```ruby
p 11 / 2.0
```
> 5.5

* can do 60.0 for float
* change integer to float with `.to_f`
* change integer to string with `.to_s`
* change string to integer with `.to_i`

## Case four

**Pass an array as an argument, use logical operators**

Pass an array and a number to a method. If an element exists at that index, return the element. Otherwise, return "out of range"

```ruby
def pick_element arr, index
  arr[index] || "out of range"
end

p pick_element [1, 2, 3], -1
```

* logical operators OK
* negative array indexes start from the end of the array
* `nil` is the equivalent to JS `null`

12:00

## Case five

**Variables scope locally**

Declare a variable and assign a number.

Use that variable in two separate methods: one to return the square root, and another to return that number to the power of five.

Example of JS scope not working in Ruby scope:

``` ruby
outside = true

def scope_test
  outside
end

p scope_test
```
> undefined local variable or method `outside'


 
Works:

```ruby
number = 64

def get_root num
  Math.sqrt num		
end

def get_exp_five num
  num ** 5
end

p get_root number
p get_exp_five number
```
12:09

## Case six

**Methods calling on methods**

Write a method `mutate` that takes a string, converts it to uppercase, and reverses it.

Write a method `weirdify_words` that takes a string and interpolates it into the beginning of the string " inner bongolia", and sends the whole shebang to the `mutate` method.

```ruby
def weirdify_words input
  mutate "#{input} inner bongolia"
end

def mutate words
  words.upcase.reverse
end

p weirdify_words 'take a trip to'
```

> "AILOGNOB RENNI OT PIRT A EKAT"

* Methods are not scoped to variables like we used them in JS. 
* Still must call a method after it has been defined.


&#x1F535; **Check understanding**

```ruby
def add_two number
  number + 2
end

p add_two 3
p number
```

12:14

# Hashes and symbols

Abstraction: 

> Structures represent a "named" collection of related data. For anything in a computer more complicated than a list of numbers, structures can be used. For example, to represent any given car, we might want to know how many doors it has, if it has AC, what its max speed is, etc. All of this information relates to a single "Car" entity, and should be saved in a computer using a structure data type. We use the "DOT" notation to access a structure stored in a variable, thus, `car.max_speed`, `car.number_of_doors`, `car.ac`, are all valid references to a structure.

&#x1F535; What Javascript construct fits this pattern?

In JavaScript this is called an **object**. A JavaScript object can have methods. In Ruby it's called a **hash**. A hash does not have methods.

```ruby
book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925
}

p book
```
> {:title=>"The Great Gatsby", :author=>"F Scott Fitzgerald", :year=>1920}

* with this syntax, hash keys are always symbols

* rocket syntax is the old way of writing Ruby hashes. We still have to use rocket syntax if we want the key to be anything other than a **symbol**.

* A symbol is an "immutable string"

[symbols](https://stackoverflow.com/questions/8189416/why-use-symbols-as-hash-keys-in-ruby)

**p()** requires parentheses when printing an anonymous hash

```ruby
p ({name: "Timmy", age: 44})
```

**passing a hash to a method**

[Hash docs](https://ruby-doc.org/core-2.2.0/Hash.html)

> Write a method that takes in a hash. The method should return a shuffled array of keys from the hash.

```
def shuffle_keys hash
	hash.keys.shuffle
end

p shuffle_keys name: "Timmy", age: 45
```

* hash curlies are optional when the method has one argument (the hash)
* however, if you use the curlies, you also have to use parens

```ruby
p shuffle_keys({ name: "Timmy", age: 45 })
```
