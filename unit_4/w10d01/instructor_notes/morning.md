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

## Hello World

```ruby
p 'Hello World'
```

Run it in Terminal with

```
$ ruby filename.rb
```
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




# Loops

* longform block
* shortform block
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



