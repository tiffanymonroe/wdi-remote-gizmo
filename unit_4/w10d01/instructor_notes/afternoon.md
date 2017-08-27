![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby Intro II<br>
Creator: Thom Page <br>
Competencies: JS / basic programming<br>

---

# Loops

**Enumerables**

Ruby has a module called Enumerable that provides a set of methods to iterate over collections, search through them, sort them, etc. They are comparable to JavaScript's `.forEach	` and `.map`, etc.

It is standard practice to prefer an enumerable method over a for loop.

## `.each`
The each method is Ruby's preferred way to iterate across a collection. 

To use an enumberable method, we provide a **block** to the method.


```ruby
words = ['the', 'cat', 'in', 'the', 'hat']

words.each { }
```

#### Block

A **block** is like a callback function. In it, we instantiate a variable that represents the currently-iterated-element. We do this with pipes **`| variable |`**


```ruby
words = ['the', 'cat', 'in', 'the', 'hat']

words.each { |current_word| p current_word.upcase }
```

And then we can perform some operation on that instantiated variable, such as printing to the console with `p()`

Compare to JS `.forEach`

```
words.forEach((currentWord) => console.log(currentWord.toUpperCase()));
```

If our operation takes more than one line, we use `do ... end` instead of curlies:

#### Longform block

**`current_word` is shorted to just `w`**

```ruby
words = ['the', 'cat', 'in', 'the', 'hat']

words.each do |w|
  if w == 'the'
	p w
  elsif w == 'cat'
  	p w.upcase
  else
   p 'neither the nor cat'
  end
end
```

* conditionals begin with `if` and end with `end`, and use `elsif`

&#x1F535; Iterate over this array of hashes and print each hash whose `title` property is greater than length 5.




## `.map()`

```ruby
squares = numbers.map { |x| x * x }

p squares
```


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

**Range class**

```ruby
p (0..100).class
```
> Range

# Conditionals



[ref](https://stackoverflow.com/questions/26532409/does-declaring-a-hash-with-curly-braces-require-assignment)






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