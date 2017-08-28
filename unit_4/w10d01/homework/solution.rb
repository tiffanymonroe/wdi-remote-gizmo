# ![ga](http://mobbook.generalassemb.ly/ga_cog.png)
#
# # WDIR-Gizmo
#
# ---
# Title: Ruby I<br>
# Type: Homework<br>
# Creator: Thom Page <br>
# Modified by: Kristyn Bryan <br>
# Competencies: Basic Ruby<br>
#
# ---
p "---------------- Commit 1: Hello World -------------------"
# # REPS
#
# ## Hello World
#
# 1. Print "Hello World" to the console
p "Hello World"
p "++++++"
# After you have printed Hello World:
#
# ```ruby
adjective = "Big Bad"
# ```
#
# 2. Interpolate the `adjective` variable into the Hello World string using `#{}`
#
p "Hello #{adjective} World"
p "++++++"
# Expected output:
#
# ```ruby
# => Hello Big Bad World
# ```
#
# 3. Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to uppercased letters.
#
phrase = "Hello World"
phrase.upcase!
p phrase

p "---------------- Commit 2: Arrays -------------------"

# ## Arrays
#
# ### Nums Array
# With the following array:
#
# ```ruby
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# ```
#
# 1. Use `.uniq` to print the array with all duplicate entries removed
#
p nums.uniq
p "++++++"
# 2. Next, use `.push` and `.pop` and `.length` on the array as you would with javaScript

nums.push("hi");
p nums
p "++++++"

nums.pop()
p nums
p "++++++"

p nums.length
p "++++++"
# 3. Use `.include?` to check if the array contains the number 8
#
p nums.include?(8)
p "++++++"
# ### Color Array
#
# With the following array:
#
# ```ruby
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
# ```
#
# 1. Print out a random color.
p colors.sample

p "++++++"
# 2. Print out the `colors` array in reverse order.
p colors.reverse

p "++++++"
# 3. Print out all of the colors in the array with all capital letters.
colors.each do |color|
  p color.upcase
end

p "---------------- Commit 3: Methods -------------------"

#
# ## Methods
#
# * Write a method that finds the area of a rectangle given values for width and height
# 	* Remember, the keyword 'return' is implied and can be omitted
#
# ```ruby
def find_area height, width
  height * width
end

p find_area 10, 2
# ```
#
p "++++++"
# * Write a method that will loop over the `nums` array and print each number multiplied by 5
#
#
# ```ruby
nums_arr = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
# ```
#
# ```ruby
def multiply_each_by_five arr
  arr.each do |num|
    p num * 5
  end
end

p multiply_each_by_five nums_arr

# ```

p "---------------- Commit 4: Methods with a Hash -------------------"

#
# ## Methods with a Hash
#
# Use the following hashes to answer the questions below.
#
# ```ruby
# # Hashes
#
book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}
# ```
#
# 1. Write a method that will take in any hash and return the price of the item.
#
# ```ruby
# # Compete this method:
#
def print_price item
  item[:price]
end

p print_price table
p "++++++"

# ```
#
# 2. Write a method that will take in multiple hashes and will print out all of the information from any hash that is sent in.
#
# ```ruby
# # Compete this method:
#
def print_item_sums hash_1, hash_2
  hash_1[:price] + hash_2[:price]
end

p print_item_sums book, table
# ```
#
p "---------------- Commit 5: Euler problem 1 -------------------"

# # PROBLEMS
#
# ## EULER PROBLEM 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.
#

def euler_1
  sum = 0
  1000.times do |i|
    if i % 5 == 0 || i % 3 == 0
      sum = sum + i
    end
  end
  sum
end

p euler_1
# Sum should be: 233168

p "---------------- Commit 6: Primes -------------------"
# ## PRIMES
#
# * Write a method called `check_prime?` that will test whether a number is Prime. The method will return true if Prime, false if not.
#
# Check Primes
def check_prime? num
  limit = Math.sqrt(num)
  for i in 2..limit
    if num % i == 0
      return false
    end
  end
  return true
end

p check_prime? 7
p check_prime? 8
p "++++++"

# * Write another method called `get_primes` that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with `get_primes 100`, it will print all the Prime numbers up to and including 100.
#
# This method can call on the previous `check_prime?` method.
#
## Get Primes
def get_primes limit
  limit.times do |num|
    if check_prime? num
      p num
    end
  end
end

get_primes 100
p "++++++"

# > A Prime number is a number that is not evenly divisible by another number except 1 and itself.
#
# > To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.
#
# Check out Ruby's `Prime` class: http://ruby-doc.org/stdlib-1.9.3/libdoc/prime/rdoc/Prime.html
#
# Ruby Class Prime
def check_prime_w_class? num
  require 'prime'
  Prime.prime? num
end

p check_prime_w_class? 17
p "++++++"

def get_prime_w_class? num
  require 'prime'
  Prime.each num do |prime|
    p prime
  end
end
get_prime_w_class? 100

p "---------------- Commit 7: Hungry for More - Word Frequency -------------------"

#
# # Hungry For More?
#
# ## WORD FREQUENCY
#
# Find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.
#

str = 'The  brown brown brown quick brown quick quick fox jumped over the lazy brown jumped dog jumped quick'

def word_freq words

  best_count = 0
  most_word = nil
  to_array = words.split(" ")
  for i in 0..to_array.length
  current_count = 0
    for j in 0..to_array.length
      if i != j
        if to_array[i] == to_array[j]
          current_count += 1
        end
      end
      if current_count > best_count
        best_count = current_count
        most_word = to_array[i]
      end
    end
  end
  puts most_word
end

word_freq str

p "---------------- Commit 8: Hungry for Even More - Pandigital Numbers -------------------"
# # Hungry For Even More?
#
# ## PANDIGITAL NUMBERS
#
# A number of length n is _1-to-n pandigital_ if it makes use of all the digits 1 to n exactly once.
#
# - The number `15234` is _1-to-n pandigital_.
#
# - The number `333` is **not** _1-to-n pandigital_.
#
# - The number `0` is **not** _1-to-n pandigital_.
#
# - The number `987654321` is _1-to-n pandigital_.
#
# Write a method that checks if a number is _1-to-n pandigital_.

def pandigital num
  is_pandigital = false
  to_string = num.to_s
  for i in 1..to_string.length
    count = 0
    for j in 0..to_string.length
      if count > 1
        false
      end
      if i.to_s == to_string[j]
        count +=1
      end
    end
    if count == 0
      false
    elsif count == 1
      is_pandigital = true
    end
  end
  is_pandigital
end

p pandigital 52431
p pandigital 333
p pandigital 0
p pandigital 987654321
