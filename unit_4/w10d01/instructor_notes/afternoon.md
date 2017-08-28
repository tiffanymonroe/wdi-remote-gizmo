![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby Intro II<br>
Creator: Thom Page <br>
Competencies: JS / basic programming<br>

---

* Make a file `more_ruby.rb` in `student_examples` 

# Loops

It is standard practice to prefer one of Ruby's built-in methods over a for loop.

## `.times`

`.times` is an [Integer method](https://ruby-doc.org/core-2.2.2/Integer.html). We can use it to repeat an action _integer_ number of times.

To use `.times()`, we provide a **block** to the method.

```ruby
100.times { }
```

Withint the block, we instantiate a variable that represents the currently-iterated-element. We do this with pipes **`| variable |`**

```ruby
100.times { |num| p num }
```

Let's look at the same principle but with **iteration**.

<br>

## Enumerables

> An enumeration is a complete, ordered listing of all the items in a collection. The term is commonly used in mathematics and computer science to refer to a listing of all of the elements of a set.

Ruby has a module called Enumerable that provides a set of methods to iterate over collections, search through them, sort them, etc. They are comparable to JavaScript's `.forEach	` and `.map`, etc.


<br>

## `.each`
The each method is Ruby's preferred way to iterate across a collection. 

To use an enumerable method, we provide a **block** to the method.


```ruby
words = ['the', 'cat', 'in', 'the', 'hat']

words.each { }
```

#### Block again

Here we can see that a **block** is like a callback function. In it, we instantiate a variable that represents the currently-iterated-element. We do this with pipes as before **`| variable |`** ...


```ruby
words = ['the', 'cat', 'in', 'the', 'hat']

words.each { |current_word| p current_word.upcase }
```

And then we can perform some operation on that instantiated variable, such as printing to the console with `p()`.

Compare to JS `.forEach`

```
words.forEach((currentWord) => console.log(currentWord.toUpperCase()));
```



#### Longform block

If our operation takes more than one line, we use `do ... end` instead of curlies:

Iterate over an array and if the word is "cat", just print that word, but if the word is "hat", print that word in uppercase. Otherwise print 'neither cat nor hat'.

**`current_word` is shorted to just `w`**

```ruby
words = ['the', 'cat', 'in', 'the', 'hat']

words.each do |w|
  if w == 'cat'
	p w
  elsif w == 'hat'
  	p w.upcase
  else
   p 'neither cat nor hat'
  end
end
```

* conditionals begin with `if` and end with `end`, and use `elsif`

&#x1F535; **Try this**

Iterate over this array of hashes. Each hash is a book. If a book title is greater than length 15, print the title. Otherwise print "title length not greater than 15 chars".

```ruby
books = [
	{ title: 'Madame Bovary', author: 'Gustave Flaubert' },
	{ title: 'Gravity\'s Rainbow', author: 'Thomas Pynchon' },
	{ title: 'Silence', author: 'Shusaku Endo' },
	{ title: 'Radio Free Albemuth', author: 'Philip K Dick' },
	{ title: 'The Goldfinch', author: 'Donna Tartt' },
	{ title: 'Pilgrim at Tinker Creek', author: 'Annie Dillard' },
	{ title: 'Too Much Happiness', author: 'Alice Munro' }
]
```

```ruby
books.each do |book| 
	if book[:title].length > 15
		p book[:title]
	else
		p "title length not greater than 15 chars"
	end
end
```

### Ranges and datatypes

```ruby
p "Hello World".class
```
> String

```ruby
p ['cruel', 'lovely', 'ordinary'].class
```
> Array

```ruby
p (0..100).class
```
> Range

```ruby
(0..100).each { |num| p num }
```

<br>

## `.map()`

Map is the same as the JavaScript map. It will perform an operation on each element and return a new collection of the mutated values.

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

squares = numbers.map { |x| x * x }

p squares
```

<br>

## `.select()`

``` ruby
p [1,2,3,4,5].select { |i| i > 3 } 
```

> [4,5]


<br>

## `.reduce()`

Reduce takes a collection and reduces it down to a single element. It applies an operation to each element, maintaining a running “total.”  

```ruby
p (5..10).reduce(:+) 
```

> 45


```ruby
p (1..4).reduce(:*) 
```

> 24


You can specify and initial value:

```ruby
p [5, 6, 7].reduce(5, :+) 
```

> 23

<br>

## Enumerable Sorting Methods

### Sort and Sort_by

* **Sorting With Strings**  

``` ruby
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
```

> ["charmeleon", "mew", "pikachu", "squirtle"]

```ruby
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length}
```

> ["mew", "pikachu", "squirtle", "charmeleon"]


* **Sorting With Integers**  

```ruby
p [2, 5, 1, 3].sort 
```

> [1, 2, 3, 5]


* **Sorting With Strings and Integers**  

``` ruby
p [2, "hello", 1, "what"].sort 
```

> ArgumentError: comparison of Fixnum with String failed


Sort by the integer value:

```ruby
p [2, "hello", 1, "what"].sort_by(&:to_i) 
```

> ["hello", "what", 1, 2]


Sort by the string value:

```ruby
p [2, "hello", 1, "what"].sort_by(&:to_s) 
```

> [1, 2, "hello", "what"]  

<br>

# Extra

## Passing a block to a method is like passing a callback to a function

In a js function that takes a callback, at some stage in the function, the callback will be invoked (otherwise there was no point passing it in).

```javascript
const numOperation = (num1, num2, callback) => {
	callback(num1, num2)
}
```

In Ruby, we do the same thing. We don't pass a callback in, instead we 'invoke' a block with `yield`.

```ruby
def num_operation num1, num2
	yield num1, num2
end
```

When we invoke `num_operation`, we supply an anonymous block instead of an anonymous callback:

```
p num_operation 20, 20 { |x, y| x * y }
```
> 400

<br>

# Datatypes

Abstraction: 

> All programs are composed of two items: Data and Operations on that Data. All complex information must be built up from these basic Data Types. The data types can roughly be described as: numbers, booleans, characters, arrays, and structures. Some languages like ActionScript replace characters with "strings". Object oriented languages, such as C++ and Java replace "structures" with "objects".

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

