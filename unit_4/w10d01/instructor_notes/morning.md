![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby Intro<br>
Creator: Thom Page <br>
Competencies: JS / basic programming<br>

---


## Learning a second language

* Abstraction
* Documentation
* Debugging


## Ruby

Why Ruby?

* Rails
* Great example of an OOP language
* Elegant
* Useful scripting language
* Active community

Ruby is a language of created by Yukihiro “Matz” Matsumoto who blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language.

He has often said that he is “trying to make Ruby natural, not simple,” in a way that mirrors life.

[About Ruby](https://www.ruby-lang.org/en/about/)

# Hello World

```ruby
p 'Hello World'
```

Run it in Terminal with

```
$ ruby filename.rb
```

**String templates**
Must be within double quotes

```ruby
"some string text #{some_var} some string text"
```

**Datatypes**


> "Hello World"

# Methods

### syntax

```ruby
def is_palindrome? inp
  inp == inp.reverse
end

p is_palindrome? 'radar'
```
> true

```ruby
def sum num1, num2
  num1 + num2
end

p sum 4, 5
```
> 9

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

This also means we must pass a method into a method


**Methods are available to each other in any order**

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

**passing a declared variable into a method**

```ruby
num = 10

def count num 
  num.times { |n| p n }
end

count num
```

### conditionals



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



