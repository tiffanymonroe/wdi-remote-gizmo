![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby Intro<br>
Type: Afternoon Lab<br>
Creator: WDI-Funke <br>
Competencies: Basic Ruby<br>

---

# What's the Difference?

![cat owls](https://outofdoubt.files.wordpress.com/2015/01/not-like-the-others-owls.jpg)

## Rewrite the following Javascript functions as Ruby methods

### Get Name
```javascript
const getName = function () {
  const name = prompt("what is your name?");
  return name;
};
```

### Reverse It
```javascript
const reverseIt = function () {
  const string = "a man, a plan, a canal, frenemies!";

  const reverse = "";

  for (const i=0; i < string.length; i++) {
    reverse += string[string.length - (i+1)];
  };

  alert(reverse);
};
```

### Swap Em
```javascript
const swapEm = function () {
  const a = 10;
  const b = 30;
  const temp;

  temp = b;
  b = a;
  a = temp;

  alert("a is now " + a + ", and b is now " + b);
};
```
### Multiply Array
```javascript
const multiplyArray = function (ary) {
  if (ary.length == 0) { return 1; };

  const total = 1;
  // const total = ary[0];

  for (const i=0; i < ary.length; i++) {
    total = total * ary[i];
  };

  return total;
};
```
### Fizz Buzzer
```javascript
const fizzbuzzer = function(x){
  if( x%(3*5) == 0 ) {
    return 'fizzbuzz'
  } else if( x%3 == 0 ) {
    return 'fizz'
  } else if ( x%5 == 0 ) {
    return 'buzz'
  } else {
    return 'archer'
  }
}
```
### Nth Fibonacci
```javascript
const nthFibonacciNumber = function () {
  const fibs = [1, 1];
  const num = prompt("which fibonacci number do you want?");

  while (fibs.length < parseInt(num)) {
    const length = fibs.length;
    const nextFib = fibs[length - 2] + fibs[length - 1];
    fibs.push(nextFib);
  }

  alert(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
};
```

### Search Array
``` javascript
const searchArray = function(array,value) {
  for(const i = 0; i < array.length-1; i++) {
    if(array[i] == value) {
      return true;
      break;
    }
  }
  return -1;
};
```

### Palindrome
Write a method that checks whether or not a string is a palindrome.
Here is the javascript:
``` javascript
const isPalindrome = function(str) {
  for(const i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length-i-1]){
      return false;
      break;
    }
    return true;
  }
};
```

### hasDupes
Write a method that checks whether or not an array has any duplicates.
Here is the javascript:

``` javascript
const hasDupes = function(arr){
  const obj = {};
  for (i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) {
      return true;
    }
    else {
      obj[arr[i]] = true;
    }
  }
  return false;
};
```

# Hungry for More?

Solve these Ruby problems (same as the Hungry for More from this morning's lab).

1. https://coderbyte.com/editor/guest:Letter%20Changes:Ruby
2. https://coderbyte.com/editor/guest:Simple%20Symbols:Ruby
