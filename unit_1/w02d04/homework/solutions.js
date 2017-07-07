# Solutions

## Combine objects, arrays, and functions

1. Create an object that has a property that is an array. Log one of the elements of that array.

```javascript
const foo = {
    someArray:[1,2,3]
};
console.log(foo.someArray[0]);
```

1. Create an object that has a property that is an object. Log one of the properties of that inner object.

```javascript
const foo = {
    someObject: {
        someProperty: 'oh hai!'
    }
};
console.log(foo.someObject.someProperty);
```

1. Create an object that has a property that is a function (method).  Call that method.

```javascript
const foo = {
    someMethod: function(){
        console.log('oh hai');
    }
};

foo.someMethod();//logs 'oh hai!'
```

1. Create an array that has an object in it.  Log one of the properties of that object.

```javascript
const foo = [{someProperty:'weee'}, 2, 3];

console.log(foo[0].someProperty);
```

1. Create an array that has an array as one of its elements.  Log one of the elements of the inner array.

```javascript
const foo = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

console.log(foo[1][2]);
```

1. Create an array that has a function as one of its elements.  Call that function.

```javascript
const foo = [
    1,
    "hi",
    function(){
        console.log('fun');
    }
];

foo[2]();
```

1. Create an object that has a property that is an array. Loop over the array and log each individual element.


```javascript
const foo = {
    someArray:[1,2,3]
};

for(let i = 0; i < foo.someArray.length; i++){
    console.log(foo.someArray[i]);
}
```

1. Create an array that has an array as one of its elements.  Loop over the second array and log each individual element.
    - Bonus: make each element of the outer array an array as well.  Using two for loops, loop over each array in the outer array and log those elements.


```javascript
const foo = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

for(let i = 0; i < foo.length; i++){
    for(let j = 0; j < foo[i].length; j++){
        console.log(foo[i][j]);
    }
}
```

## Combine objects, arrays, and functions more than one level deep

1. Create a function that returns an object.  Log a property of that object (hint: call the function and then call a property on the return value).

```javascript
const foo = function(){
    return {
        someProperty: 'hi!'
    }
};

console.log(foo().someProperty);
```

1. Create a function that returns an array.  Log an element of the array.

```javascript
const foo = function(){
    return ['apple','banana','pear'];
};

console.log(foo()[1]);
```

1. Create a function that returns an object that has an array.  Log one of the elements of that array.

```javascript
const foo = function(){
    return {
        someArray: ['fun', 'awesome', 'sweet']
    }
};

console.log(foo().someArray[1]);
```

1. Create a function that returns an object that has an object.  Log one of the properties of the inner object.

```javascript
const foo = function(){
    return {
        someObject: {
            someProperty: 'some value'
        }
    }
};

console.log(foo().someObject.someProperty);
```

1. Create a function that returns an object that has a method.  Call that inner function (method).

```javascript
const foo = function(){
    return {
        someMethod: function(){
            console.log('oh hai!');
        }
    }
};

foo().someMethod(); //logs 'oh hai!'
```

1. Create a function that returns a function.  Call that inner function

```javascript
const foo = function(){
    return function(){
        console.log('whaaaa?');
    }
};

foo()(); //logs 'whaaaa?'
```

1. Create an object that has a method that returns an object.  Log a property of the inner object.


```javascript
const foo = {
    someMethod: function(){
        return {
            someProperty: 'some value'
        }
    }
};

console.log(foo.someMethod().someProperty);
```

1. Create an object that has a method that returns an object that has an array.  Log an element of that array.

```javascript
const foo = {
    someMethod: function(){
        return {
            someArray: ['peach', 'apple', 'pear']
        }
    }
}

console.log(foo.someMethod().someArray[2]);
```

1. Create an object that has a method that returns an object that has an object.  Log a property of the inner object.

```javascript
const foo = {
    someMethod: function(){
        return {
            someObject: {
                someProperty: 'some value'
            }
        }
    }
}

console.log(foo.someMethod().someObject.someProperty);
```

1. Create an object that has a method that returns an object that has another method.  Call the inner method.

```javascript
const foo = {
    someMethod: function(){
        return {
            someMethod: function(){
                console.log('both methods can have the same name!');
            }
        }
    }
}

foo.someMethod().someMethod(); //logs 'both methods can have the same name!'
```

1. Create an object that has a method that returns a function.  Call that function.

```javascript
const foo = {
    someMethod: function(){
        return function(){
            console.log('hi')
        }
    }
}
foo.someMethod()();//logs hi
```

1. Create an array that has a function that returns an object.  Log a property of the object.

```javascript
const foo = [
    1,
    'apple',
    function(){
        return {
            someProperty: 'some value'
        }
    }
];

console.log(foo[2]().someProperty);
```

1. Create an array that has a function that returns an object that has an array.  Log an element of the inner array.

```javascript
const foo = [
    1,
    'apple',
    function(){
        return {
            someArray: ['cat', 'dog', 'baboon']
        }
    }
];

console.log(foo[2]().someArray[2]);
```

1. Create an array that has a function that returns an object that has an object.  Log a property of the inner object.

```javascript
const foo = [
    1,
    'apple',
    function(){
        return {
            someObject: {
                someProperty: 'some value'
            }
        }
    }
];

console.log(foo[2]().someObject.someProperty);
```

1. Create an array that has a function that returns an object that has a method.  Call that method.

```javascript
const foo = [
    1,
    'apple',
    function(){
        return {
            someMethod: function(){
                console.log('fun');
            }
        }
    }
];

foo[2]().someMethod(); //logs fun
```

1. Create an array that has a function that returns a function.  Call the inner function.

```javascript
const foo = [
    1,
    'apple',
    function(){
        return function(){
            console.log('yes!');
        }
    }
];

foo[2]()(); //logs yes!
```

## Create a callback

1. Define two functions and set them to variables

```javascript
const foo = function(){
}
const bar = function(){
}
```

1. The second function takes a parameter

```javascript
const foo = function(){
}
const bar = function(param1){
}
```

1. Call the second function, passing in the variable that references the first function as the parameter

```javascript
const foo = function(){
}
const bar = function(param1){
}
bar(foo);
```

1. In the definition of the second function, invoke (call) the parameter that is being passed into it.  Remember, this parameter is a function

```javascript
const foo = function(){
}
const bar = function(param1){
    param1();
}
bar(foo);
```

## Indentation

```javascript
if(true){
    let a = 2 + 2;
    console.log(a);
}

if(true){
    if(false){
        console.log('hi');
    }
}
```

## Semantic naming of variables

```javascript
const arrayOfEvenNums = [2, 4, 6, 8, 10];
```

## Function definition placement

```javascript
const foo = function(){
    console.log('foo here');
}
const bar = function(){
    console.log('bar here');
}
bar();
foo();
```

## Commenting code

```javascript
//function: addTwoNums
//firstNum: int
//secondNum: int
//returns: sum of two numbers (int)
const addTwoNums = function(firstNum, secondNum){ //set the var to a function
    let finalValue = firstNum + secondNum; //add the two nums together
    return finalValue; // return the sum of the two nums
}
```

## Error reading

It's missing an equals sign.  It expected a ;

## Coerce data types

Fix the following code so the log executes (don't change the `if` statement):

```javascript
let b = '5'

if(parseInt(b) === 5){ //will be false
    console.log('this line should execute');
}
```

Fix the following code so the value 10 is logged (change only the line that has the console.log on it):

```javascript
let a = '5';
console.log(5 + parseInt(a));
```
