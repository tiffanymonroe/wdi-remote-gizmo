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