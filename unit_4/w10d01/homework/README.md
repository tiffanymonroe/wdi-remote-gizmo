![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby I<br>
Type: Homework<br>
Creator: Thom Page <br>
Modified by: Kristyn Bryan <br>
Competencies: Basic Ruby<br>

---

# RUBY I

## Reps and problem solving with Ruby

### Ruby Docs:

The Ruby documentation is excellent. Take advantage of it!

Load the following pages in your browser so that you can search for any useful Ruby methods to help you solve the problems (look through the 'methods' column on the left):

* [Arrays](http://ruby-doc.org/core-2.3.1/Array.html)
* [Strings](http://ruby-doc.org/core-2.3.1/String.html)
* [Enumerables](http://ruby-doc.org/core-2.3.1/Enumerator.html)
* [Hashes](http://ruby-doc.org/core-2.3.1/Hash.html)

<br>
<hr>

# REPS

## Hello World

* Print "Hello World" to the console

After you have printed Hello World:

```
adjective = "Big Bad"
```

* Interpolate the `adjective` variable into the Hello World string using `#{}`

Expected output:

```
=> Hello Big Bad World
```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 1: Hello World".
<hr>

## Arrays

With the following array:

```
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
```

* Use `.uniq` to print the array with all duplicate entries removed

* Next, use `.push` and `.pop` and `.length` on the array as you would with javaScript

* Use `.include?` to check if the array contains the number 8


<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 2: Arrays".
<hr>

## Methods

* Write a method that finds the area of a rectangle given values for width and height
	* Remember, the keyword 'return' is implied and can be omitted

```
def findArea(height, width)

end
```

* Write a method that will loop over the `nums` array and print each number multipled by 5


```
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
```

```
def multiplyEachByFive(arr)

end
```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 3: Methods".
<hr>

<br>
<hr>

# PROBLEMS

## EULER PROBLEM 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 4: Euler problem 1".
<hr>


## PRIMES

* Write a method called `check_prime?` that will test whether a number is Prime. The method will return true if Prime, false if not.

* Write another method called `get_primes` that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with `get_primes(100)`, it will print all the Prime numbers up to and including 100.

This method can call on the previous `check_prime?` method.


> A Prime number is a number that is not evenly divisible by another number except 1 and itself.

> To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

Check out Ruby's `Prime` class: http://ruby-doc.org/stdlib-1.9.3/libdoc/prime/rdoc/Prime.html

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 5: Primes".
<hr>


# Hungry For More?

## WORD FREQUENCY

Find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 6: Word Frequency".
<hr>

# Hungry For Even More?

## PANDIGITAL NUMBERS

A number of length n is _1-to-n pandigital_ if it makes use of all the digits 1 to n exactly once.

- The number `15234` is _1-to-n pandigital_.

- The number `333` is **not** _1-to-n pandigital_.

- The number `0` is **not** _1-to-n pandigital_.

- The number `987654321` is _1-to-n pandigital_.

Write a method that checks if a number is _1-to-n pandigital_.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Commit 7: Pandigital Numbers".
<hr>

- Finish the labs from today.
- Solve this problem in both Ruby & JavaScript: https://projecteuler.net/problem=13. You can sign in to Project Euler to submit your answer and check if it's correct.
