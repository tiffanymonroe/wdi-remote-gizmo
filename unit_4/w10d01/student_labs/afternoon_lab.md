![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Ruby Intro<br>
Type: Afternoon Lab<br>
Creator: WDI-Funke <br>
Modified by: Thom Page for WDIr-Gizmo<br>
Competencies: Basic Ruby<br>

---

# What's the Difference?

![cat owls](https://outofdoubt.files.wordpress.com/2015/01/not-like-the-others-owls.jpg)

## Rewrite the following Javascript functions as Ruby methods

You can 'translate' these functions literally, line-by-line, but see if you can find a more 'Ruby' way rewrite them. Sometimes, Ruby will let you do complex operations with a single built-in method.

### Get Name
```javascript
const getName = (name) => {
  return name;
};
```

### Reverse It
```javascript
const reverseIt = () => {
  const string = "a man, a plan, a canal, frenemies!";
  let reverse = "";
  for (let i=0; i < string.length; i++) {
    reverse += string[string.length - (i+1)];
  };
  return reverse;
};
```

### Swap Em
```javascript
const swapEm = () => {
  let a = 10;
  let b = 30;
  let temp;

  temp = b;
  b = a;
  a = temp;

  return "a is now " + a + ", and b is now " + b;
};
```

### Multiply Array
```javascript
const multiplyArray = (ary) => {
  if (ary.length == 0) { return 1; };

  let total = 1;
  // const total = ary[0];

  for (let i=0; i < ary.length; i++) {
    total = total * ary[i];
  };

  return total;
};
```

### Fizz Buzzer
```javascript
const fizzbuzzer = (x) => {
  if (x % 15 == 0) {
    return 'fizzbuzz';
  } else if (x % 3 == 0) {
    return 'fizz'
  } else if (x % 5 == 0) {
    return 'buzz'
  } else {
    return 'No fizz, no buzz, no fizzbuzz'
  }
}
```


### hasDupes
Write a method that checks whether or not an array has any duplicates.

``` javascript
const hasDupes = (arr){
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

### Search Array

```javascript
const searchArray = (array,value) => {
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] == value) {
      return true;
      break;
    }
  }
  return -1;
};
```

### Nth Fibonacci

```javascript
const nthFibonacciNumber = (num) => {
  const fibs = [1, 1];

  while (fibs.length < parseInt(num)) {
    let length = fibs.length;
    let nextFib = fibs[length - 2] + fibs[length - 1];
    fibs.push(nextFib);
  }

  return fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
};
```

Solve these Ruby problems (same as the Hungry for More from this morning's lab).

1. [Letter changes](https://coderbyte.com/editor/guest:Letter%20Changes:Ruby)
2. [Simple symbols](https://coderbyte.com/editor/guest:Simple%20Symbols:Ruby)
