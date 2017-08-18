![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-GIZMO

<hr>
Title: Ruby II - Exploring Methods<br>
Type: Exploration & Presentation<br>
Duration: 1.5 hrs<br>
Creator: Kristyn Bryan<br>
Topics: Ruby methods<br>
<hr>

# Explore Ruby's Methods

### Lesson Objectives
_During this lesson, students will be:_
- Use the ruby docs to find methods
- Use and explain ruby methods

<br>
<hr>

![explorers](http://www.thewrap.com/wp-content/uploads/2016/05/explorersmovie.jpg)

This morning you will each get a method to explore. Your job is to look in the Ruby documentation to read about the method, come up with an explanation of what it is, and show an example of it in use.

You'll have 15 minutes to research and prepare. You will then take turns sharing your screen and presenting your findings to the class. When you are not presenting, it's your job to take listen, learn, take notes, and ask questions.

[String](http://ruby-doc.org/core-2.3.0/String.html)

1. `!` An
2. `rstrip` /`rstrip!` Todd
_String_
*rstrip/rstrip!*

Removes trailing whitespace from str, returning nil if no change was made.

Refer to strip for the definition of whitespace.

```string_1="removes any spaces trailing the string  "
string_2="removes any spaces trailing the string"

p string_1.rstrip
p string_2.rstrip
p "+++++++++++++++++++"
p string_1.rstrip!
p string_2.rstrip!

p "<><><><><><><><><><><><><><>"
string_3 = string_1.rstrip
string_4 = string_1.rstrip!

p string_3
p string_4```

3. `reverse` /`reverse!` Mark

_String_
*Reverse*
Reversing a string. reverse returns the string reversed and leaves the origin string unchanged. reverse! returns the string reversed and also reverse the original string in place.
```           
orig_str = "we researched ruby methods"
rev_str = orig_str.reverse
puts "Original string: " + orig_str
puts "Reversed string: " + rev_str

rev_str = orig_str.reverse!
puts "Original string: " + orig_str
puts "Reversed string: " + rev_str
```

4. `gsub` / `gsub!` Jim

Example string: `"we researched ruby methods"`

[Array](http://ruby-doc.org/core-2.3.0/Array.html)

1. `compact` / `compact!` Cathleen
2. `delete_at` /`delete_if` Ky

# delete_at

family = ["mom", "dad", "brother", "sister", "pet", "dad"]

p family.delete_at(0)
p family
p family.delete_at(0)
p family

# Deletes the element at the specified index, returning that element, or nil if the index is out of range.

# This method works the same way that slice would work in Javascript

# ===============================================================
# ===============================================================

# delete_if

nums = [1,2,3,4,5,6,7,8,9,10]

p nums.delete_if{|num| num>9}
p nums.delete_if{|num| num<5}

# Deletes every element of self for which block evaluates to true.
#
# The array is changed instantly every time the block is called, not after the iteration is over.
#
#reject! can also be used instead

3. `fetch` Biren

FETCH
students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
# fetch(index) → obj
# Tries to return the element at position index. Negative values of index count from the end of the array.  If the index lies outside the array, the first form throws an IndexError exception
puts "fetch(index) → obj"
puts students.fetch(3)
puts students.fetch(-3)
puts "*****************"
# puts students.fetch(students.length)
# fetch(index, default ) → obj
# returns default
puts "fetch(index, default ) → obj"
puts students.fetch(100, 'cucumbers')
puts "*****************"
# fetch(index) {|index| block } → obj
# returns the value of invoking the block, passing in the index.
puts "fetch(index) {|index| block } → obj"
puts students.fetch(100) { |i| i*i }
puts "*****************"

4. `flatten` / `flatten!` Geraldine

flatten / flatten!

flatten : For every element that is an array, extract its elements into the new array. Returns a new array that is a one-dimensional flattening of self.

students = [“An”, “Todd”, “Mark”, “Jim”, “Cathleen”, “Ky”, “Biren”, “Geraldine”, “Hanna”, “Dylan”, “Sheila”, “Charles”, “Soniya”, “Jerrica”, “Ellen”, “Lenin”, “Adam”, “Stanley”, “Matthew”, “Anthony”, “Joe”, “Emily”, “Amanda”]

instructors = [“Matt”, “Thom”, “Kristyn”, “Karolin”]

ga_class = [instructors, students, “Kaylie”, “Abi”, “Dan”]

p ga_class.flatten

flatten! : Flattens self in place. Returns nil if no modifications were made (i.e., the array contains no subarrays.)

students = [“An”, “Todd”, “Mark”, “Jim”, “Cathleen”, “Ky”, [“Biren”, “Geraldine”, “Hanna”, “Dylan”, “Sheila”, [“Charles”, “Soniya”, “Jerrica”, “Ellen”], “Lenin”], “Adam”, “Stanley”, “Matthew”, “Anthony”, “Joe”, “Emily”, “Amanda”]
p students.flatten!
p students.flatten!

5. `sample` Hanna

students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]

no_students = []

p students.sample # --> returns one random element
p students.sample(3) # --> returns an array of 3 random elements
p no_students.sample # --> returns nil
p no_students.sample(3) # --> returns []
p students # --> original is not changed
p no_students # --> original is not changed

=begin

Explanation for the Array Method Sample

- array method

- will return one or more elements inside the array at a random indices
  --> one element: array.sample
  --> array of elements: array.sample(n)

- the random index is unique to avoid dublicates

- accepts arguments, e.g.

  - array.sample(n)
    --> will return an array with n elements
    --> number is used to specify how many random elements should be returned

  - can also accept a number that can be used to generate the random index
    --> array.sample(random: rng) >> returns ONE element
    --> array.sample(n, random: rng) >> returns array with n elements

  - if array is empty
    --> array.sample will return nil
    --> array.sample(n) will return an empty array

Link to documentation:
https://ruby-doc.org/core-2.2.0/Array.html#method-i-sample
=end

6. `select` / `select!` Dylan

# .select is a method that can be used on Ruby objects like arrays and ranges. Much like JavaScript's Array.prototype.filter() method, .select returns every item in the array or range upon which it is called that satisfies (returns true) the criteria specified in the block associated with the method.

# For example, finding all numbers evenly divisible by 5 in a range:

p "Example 1:"
range = (1..100)
p range
p range.select { |num| num % 5 == 0 }
p range
p "<====================>"

# Note that the original object is not modified. However, .select can also be used as a dangerous/bang method (.select!) to destructively modify an array (NOT a range, Ruby will throw an error):

p "Example 2:"
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
p array
p array.select! { |num| num % 5 == 0 }
p array

7. `zip`  Sheila

Arrays
zip

Converts any arguments to arrays, then merges elements of self with corresponding elements from each argument.

This generates a sequence of ary.size n-element arrays, where n is one more than the count of arguments.

If the size of any argument is less than the size of the initial array, nil values are supplied.

If a block is given, it is invoked for each output array, otherwise an array of arrays is returned.

.zip(arg, ...) --> new_array

=end

a = [1,2,3]
b = ["first","second","third"]

p [7,8].zip(a) ### -> [[7, 1], [8, 2]]
p [7,8,9].zip(a,b) ### -> [[7, 1, "first"], [8, 2, "second"], [9, 3, "third"]]
p a.zip([7,8],[9]) ### -> [[1, 7, 9], [2, 8, nil], [3, nil, nil]]

8. `<<` Stanley

# << - This symbol allows us to add to the end of an array
# It is also for string concatentation
students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
 # p [ "Mike" ,4 ] << 4 << "d" << [ 3, 4 ] << students
p 1<<2
# numbers array
# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# p nums << 12
# works
# p [] << 4 << students
# not going to work
# p 4 << students

9. `first` / `last` Soniya

#==================Ruby - First/Last==================

#FIRST
#Returns the first element, or the first n elements, of the array. If the array is empty, the first form returns nil, and the second form returns an empty array.
#Example

students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
p "============================"
p "First"
p "============================"
p students
#Returns the first item in an array
p students.first #=> "An"
#Returns the first 5 items in an array
p students.first(5) #=> ["An", "Todd", "Mark", "Jim", "Cathleen"]
p "============================"
p "Last"
p "============================"
#LAST
#Returns the last element, or the last n elements, of the array. If the array is empty, the first form returns nil.

p students
#Returns the last item in an array
p students.last #=> "Amanda"
#Returns the last 3 items in an array
p students.last(3) #=> ["Joe", "Emily", "Amanda"]

#=====================================================

10. `each_with_index` Amanda
11. `step` (note, you'll be doing the `.step` on a range of numbers, but it can then be used with an array) Mark

Example array:
```ruby
students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
```

[Hash](http://ruby-doc.org/core-2.3.0/Hash.html)

1. `has_key?` Jerrica
2. `keys` Ellen
4. `to_a` Emily

#Hashes
#to_a
#iterrate through a hash that has keys and values and changes those pairings into their own arrays nested in a larger array
ice_cream = {"choco taco" => "cone", "drumstick" => "cone", "crunch bar" => "popsicle", "orange creamsicle" => "popsicle"}
puts "this is the hash #{ice_cream}"
puts "=================================================================="
puts "ths is the hash after using to_a #{ice_cream.to_a}"
#results in ice_cream = [["choco taco", "cone"], ["drumstick", "cone"], ["crunch bar", "popsicle"], ["orange creamsicle", "popsicle"]]


5. `merge` / `merge!` Adam

_Hash_
*merge / merge!*

merge using two hashes h1, h2
h1.merge(h2) will return a new hash with the the contents of both h1 and h2
If h1 and h2 contain duplicate keys, h2 value will be used

merge! Using two hashes h1, h2
h1.merge(h2) will add the contents of h2 to h1 and if keys match h2 value will be used

Blocks can be used to specify what to do when keys match

```h1 = { "a" => 10, "b" => 20, "c" => 30 }
h2 = { "c" => 5, "d" => 15 }

# merge
puts h1.merge(h2) #=> {"a"=>10, "b"=>20, "c"=>5, "d"=>15}
puts h1 #=> {"a"=>10, "b"=>20, "c"=>30}

# merge!
puts h1.merge!(h2) #=> {"a"=>10, "b"=>20, "c"=>5, "d"=>15}
puts h1 #=> {"a"=>10, "b"=>20, "c"=>5, "d"=>15}

# Using block
h1 = { "a" => 10, "b" => 20, "c" => 30 }
h2 = { "c" => 5, "d" => 15 }

# When key confict occurs, new value will be h2's val - h1's val
puts h1.merge(h2) {|key, oldval, newval| newval - oldval} #=> {"a"=>10, "b"=>20, "c"=>-25, "d"=>15}```

6. `flatten` Charles

FLATTEN
Returns a new array that is a one-dimensional flattening of this hash. That is, for every key or value that is an array, extract its elements into the new array. Unlike Array#flatten, this method does not flatten recursively by default. The optional level argument determines the level of recursion to flatten.

7. `invert` Matthew

# invert

# Returns a new hash created by using hsh’s values as keys, and the keys as values. If a key with the same value already exists in the hsh, then the last one defined will be used, the earlier value(s) will be discarded.



h = { "n" => 100, "m" => 100, "y" => 300, "d" => 200, "a" => 0 }
p h.invert
# {100=>"m", 300=>"y", 200=>"d", 0=>"a"}

[Integer](http://ruby-doc.org/core-2.3.0/Integer.html)

1. `odd?` / `even?` Anthony

p ("=======================================")
p ("              EVEN                     ")
p ("=======================================")
# Even-Returns True if int is even number

a = 4
b = 5
puts a.to_i.even?           #=> True
puts b.to_i.even?           #=> False

p ("=========================================")
p ("                 ODD                     ")
p ("=========================================")
# Odd-Returns false if int is even number

c = 4
d = 5
puts c.to_i.odd?            #=> False
puts d.to_i.odd?            #=> True

p ("===================================")
p ("===================================")

a = 4.6
b = 4.0

puts a%1==0 && a.to_i.even?     #=> false
puts b%1==0 && a.to_i.even?     #=> true

2. `floor` / `next` Joe

#INTEGER
#floor
#next

# We will use 5 numbers to display the capabilities of integer methods .floor and .next. The first two numbers invoke the floor method to round down the number. The next two numbers invoke the next method which returns the next whole number. Finally we will invoke and chain both methods on the last number.

num1 = 1.8
num2 = -3.1
num3 = 1
num4 = -20
num5 = 21.3

# FLOOR

# RETURNS LARGEST INTEGER LESS THAN OR EQUAL TO FLOAT
p "the number '1.8' with a floor method turns into #{num1.floor}"
p "the number '-3.1' with a floor method turns into #{num2.floor}"

# NEXT

# RETURNS THE INTEGER EQUAL TO INT + 1

p "the number '1' with a next method turns into #{num3.next}"
p "the number '-20' with a next method turns into #{num4.next}"

# CHAIN THEM

p "the number '21.3' with a floor and next method turns into #{num5.floor.next}"

3. `times` Lenin

_Integers_
*times*
The times iterator will take a number and execute the statements in the block that number of times

Using a number, we can iterate that amount of times:

This will print => 0 1 2 3 4
```5.times do |i|
  p i
end```

This will print "Hello!" to the screen 28 times.
```28.times do
  p "Hello!"
end```


The times method also can take a single argument:

```5.times do |item|
  puts "Hello! #{item}"
end```

Like an array index, the times index starts at 0.


[Method](http://www.skorks.com/2009/08/method-arguments-in-ruby/)
1. Default values in parameters - Amanda

# ==============================================
# Arguments With Default
# ==============================================

# In Ruby you can supply a default value for an argument. This means that if a value for the argument isn't supplied, the default value will be used instead, e.g.:


def some_method(a, b, c="R2D2's secret message:https://www.youtube.com/watch?v=6-HUgzYPm9g – NEW!", d=(2+2))
    p a
    p b
    p c
    p d
end
# You may call the method above in one of two ways:
#
some_method(25,"Freebird!")
# or
#
some_method(25,"Freebird!", 48)
