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

# Learning a second language

* Abstraction
	* Does your programming language have any of [this stuff](http://www.cs.utah.edu/~germain/PPS/Topics/index.html)? 
* Documentation
	* How can you implement [that stuff](http://ruby-doc.org/core-2.4.1/) ?
* Debugging
	* What kind of stuff goes wrong? 


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

**Basic datatypes**

```ruby
p 42
p true
p [1, 2, 3]
p { name: "Timmy" }
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

**Arrays, built-in methods with dot notation**

```ruby
adjectives = ['cruel', 'lovely', 'ordinary']

p "Hello #{adjectives.sample} world"
```
> Hello ordinary world


# Methods

Abstraction: 

> A cluster of reusable code that can take input and return a result.

>A "self contained" module of code that accomplishes a specific task. "Takes in" data, process it, and "returns" a result. Can be used over and over and over again. Can be "called" from the inside of another module.

[ref](http://www.cs.utah.edu/~germain/PPS/Topics/functions.html)

In Javascript this is called a **function**. In Ruby it is called a **method**.


### Syntax

```ruby
def is_palindrome? inp
  inp == inp.reverse
end

p is_palindrome? 'radar'
```
> true

`.reverse` and other [String methods](http://ruby-doc.org/core-2.4.1/String.html)

&#x1F535; Find out how to make input lowercase.

```ruby
def get_area length, width
  length * width
end

p get_area 4, 5
```
> 20

* snake case
* implicit return
* no semicolons
* no let or const or var
* parentheses optional for arguments and parameters

### scope

**Variables scope locally**

``` ruby
outside = true

def scope_test
  outside
end

p scope_test
```
> undefined local variable or method `outside'


**Methods are not scaoped to variables like in JS. Methods are available to each other in any order.**

```ruby
def add_words input
  mutate "#{input} inner bongolia"
end

def mutate words
  words.upcase.reverse
end

p add_words 'take a trip to'
```

> "AILOGNOB RENNI OT PIRT A EKAT"



**Instance variables scope globally**

```ruby
@outside = true

def scope_test
  @outside
end

p scope_test
```
> true

```ruby
def assign_var
  @glim = 'glum'
end

assign_var

p @glim
```
> "glum"


&#x1F535; **Check understanding**

```ruby
def add_two number
  number + 2
end

p add_two 3
p number
```

# Datatypes

Abstraction: 

> All programs are composed of two items: Data and Operations on that Data. Because, at their heart, computers are simple devices, they can only represent very simple pieces of information. All complex information must be built up from these basic Data Types. The data types can roughly be described as: numbers, booleans, characters, arrays, and structures. Some languages like ActionScript replace characters with "strings". Object oriented languages, such as C++ and Java replace "structures" with "objects".

[ref](http://www.cs.utah.edu/~germain/PPS/Topics/data_types.html)

```ruby
p "Hello World".class
```
> String

```ruby
p ['cruel', 'lovely', 'ordinary'].class
```
> Array

* Integers: Fixnum and Bignum

```
p 100.class
```
> Fixnum

* Integer division and Float

Dividing integers returns an integer (rounded down)

```ruby
p 11 / 2
```

> 5

```ruby
p 2.0.class
```
> Float

Including a float will return a float

```ruby
p 11 / 2.0
```
> 5.5

```
p 4611686018427387904.class
```
> Bignum

[Fixnum and Bignum](http://patshaughnessy.net/2014/1/9/how-big-is-a-bignum)

Fixnum and Bignum are both classes of the Integer class.


```ruby
p nil.class
```
> NilClass

* Booleans

```ruby
p true.class
```
> TrueClass

```ruby
p false.class
```
> FalseClass

```ruby
p ['cruel', 'lovely', 'ordinary'].class
```
> Array

**superclass**

1.class #=> Fixnum

1.class.superclass #=> Integer

**Conversion**

```ruby
num.to_s

num.to_f

num.to_i
```




# Hashes and symbols

```ruby
book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925
}

p book
```
> {:title=>"The Great Gatsby", :author=>"F Scott Fitzgerald", :year=>1920}

* passing a hash

[symbols](https://stackoverflow.com/questions/8189416/why-use-symbols-as-hash-keys-in-ruby)

# Loops

* longform block

```ruby
words = ['namu', 'dai', 'bosa']

words.each do |w|
  p w.upcase
end
```

* shortform block

```ruby
words.each { |w| p w.upcase }
```
* scope

**passing a declared variable into a method**

```ruby
num = 10

def count num 
  num.times { |n| p n }
end

count num
```

# Conditionals


