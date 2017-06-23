# Combining data types and Callbacks

## Lesson Objectives

1. Combine objects, arrays, and functions
1. Combine objects, arrays, and functions more than one level deep
1. Create a callback
1. Describe some tips and tricks

## Combine objects, arrays, and functions

You can create a property for an object that is an array

```javascript
const foo = {
    someArray:[1,2,3]
};
foo.someArray[0]; //1
```
You can create a property for an object that is an object

```javascript
const foo = {
    someObject: {
        someProperty: 'oh hai!'
    }
};
foo.someObject.someProperty; //oh hai!
```

You can create a property for an object that is a function (method)

```javascript
const foo = {
    someMethod(){
        console.log('oh hai');
    }
};

foo.someMethod();//logs 'oh hai!'
```

You can store an object in an array

```javascript
const foo = [{someProperty:'weee'}, 2, 3];

console.log(foo[0].someProperty);
```

You can store an array in an array

```javascript
const foo = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

foo[1][2]; //1,2
```

You can store a function in an array

```javascript
const foo = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];

foo[2]();
```

You can loop over an array in an object

```javascript
const foo = {
    someArray:[1,2,3]
};

for(let i = 0; i < foo.someArray.length; i++){
    console.log(foo.someArray[i]);
}
```

You can loop over an array in an array.  Just add an additional [*index*] after the first [*index*]

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

You can create a function that returns an object.  Just add the `.` after the `()` since the return value of the function is an object

```javascript
const foo = ()=>{
    return {
        someProperty: 'hi!'
    }
};

foo().someProperty;//hi
```

You can create a function that returns an array.  Just add `[index]` after the `()` since the return value of the function is an array

```javascript
const foo = ()=>{
    return ['apple','banana','pear'];
};

foo()[1]; //banana
```

You can create a function that returns an object that has an array

```javascript
const foo = ()=>{
    return {
        someArray: ['fun', 'awesome', 'sweet']
    }
};

foo().someArray[1]; //awesome
```

You can create a function that returns an object that has an object

```javascript
const foo = ()=>{
    return {
        someObject: {
            someProperty: 'some value'
        }
    }
};

foo().someObject.someProperty; //some value
```

You can create a function that returns an object that has a method

```javascript
const foo = ()=>{
    return {
        someMethod(){
            console.log('oh hai!');
        }
    }
};

foo().someMethod(); //logs 'oh hai!'
```

You can create a function that returns a function.  Just add the `()` after the first `()` since the return value of the first function is another function

```javascript
const foo = ()=>{
    return ()=>{
        console.log('whaaaa?');
    }
};

foo()(); //logs 'whaaaa?'
```

You can create an object that has a method that returns an object

```javascript
const foo = {
    someMethod(){
        return {
            someProperty: 'some value'
        }
    }
};

foo.someMethod().someProperty;
```

You can create an object that has a method that returns an object that has an array

```javascript
const foo = {
    someMethod(){
        return {
            someArray: ['peach', 'apple', 'pear']
        }
    }
}

foo.someMethod().someArray[2]; //pear
```

You can create an object that has a method that returns an object that has an object

```javascript
const foo = {
    someMethod(){
        return {
            someObject: {
                someProperty: 'some value'
            }
        }
    }
}

foo.someMethod().someObject.someProperty; //some value
```

You can create an object that has a method that returns an object that has another method

```javascript
const foo = {
    someMethod(){
        return {
            someMethod(){
                console.log('both methods can have the same name!');
            }
        }
    }
}

foo.someMethod().someMethod(); //logs 'both methods can have the same name!'
```

You can create an object that has a method that returns a function

```javascript
const foo = {
    someMethod(){
        return ()=>{
            console.log('hi')
        }
    }
}
foo.someMethod()();//logs hi
```

You can create an array that has a function that returns an object

```javascript
const foo = [
    1,
    'apple',
    ()=>{
        return {
            someProperty: 'some value'
        }
    }
];

foo[2]().someProperty; //some value
```

You can create an array that has a function that returns an object that has an array

```javascript
const foo = [
    1,
    'apple',
    ()=>{
        return {
            someArray: ['cat', 'dog', 'baboon']
        }
    }
];

foo[2]().someArray[2]; //some value
```

You can create an array that has a function that returns an object that has an object

```javascript
const foo = [
    1,
    'apple',
    ()=>{
        return {
            someObject: {
                someProperty: 'some value'
            }
        }
    }
];

foo[2]().someObject.someProperty; //some value
```

You can create an array that has a function that returns an object that has a method

```javascript
const foo = [
    1,
    'apple',
    ()=>{
        return {
            someMethod(){
                console.log('fun');
            }
        }
    }
];

foo[2]().someMethod(); //logs fun
```

You can create an array that has a function that returns a function

```javascript
const foo = [
    1,
    'apple',
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    }
];

foo[2]()(); //logs yes!
```

## Create a callback

Let's examine a variable that is a function

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
console.log(foo);
```

We can pass a function into another function

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log(param1);
}
bar(foo);
```

Once we've done this, we can execute the function that is passed in as a parameter (called a callback)

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(foo);
```

This is good because it allows us to perform some functionality and then do something unique once that's complete:

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const awesome = ()=>{
    console.log("I'm the function 'awesome'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(foo);
bar(awesome);
```

If we want, we don't even need to assign the functions to variables

```javascript
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(()=>{
    console.log("I'm the function 'foo'");
});
bar(()=>{
    console.log("I'm the function 'awesome'");
});
```

This last form is very common.  For instance:

```javascript
setTimeout(()=>{
    console.log('hi');
}, 2000);
```

## Describe some tips and tricks

### Describe some ways to maintain clean code

### Indentation

Always indent your code.  If a chunk of code is being execute under a certain condition (if/else, loops, functions), that condition owns that chunk of code.  Show ownership with indentation

```javascript
//good
if(true){
    const a = 2 + 2;
    console.log(a);
}

//bad
if(true){
    const a = 2 + 2;
console.log(a);
}

//bad
    if(true){
    const a = 2 + 2;
console.log(a);
    }
```

This is the case if you have nested loops, if/else

```javascript
if(true){
    if(false){
        console.log('hi');
    }
}
```

### Semantic naming of variables

- Be descriptive with variable names
- Better to have to copy/paste a long variable name than get confused later on.

```javascript
const a = 1 + 2 + 3; //bad
const sumOfThreeNumbers = 1 + 2 + 3; //good
```

### Function definitions at the top of the scope

Good:
```javascript
const foo = ()=>{
    console.log('foo here');
}
const bar = ()=>{
    console.log('bar here');
}

foo();
bar();
```

Bad:
```javascript
const foo = ()=>{
    console.log('foo here');
}
foo();

const bar = ()=>{
    console.log('bar here');
}
bar();
```

### Commenting code

- Comment every line!
- Users should be able to know how everything works just by reading comments

```javascript
//defining describePerson
//params: name (string), age (int)
//returns nothing
//summary: console logs an english string consisting of the person's name and how old they are
const describePerson = (name, age)=>{
    const finalString = name + " is " + age + " years old."; //create the message
    console.log(finalString); //log the message
}
```

### Describe some common programming principles

This has some great principles.

http://www.artima.com/weblogs/viewpost.jsp?thread=331531

Most important:

- DRY
    - Don't Repeat Yourself
    - Use a function instead of copy/paste
- Start small
    - Write the smallest amount of code possible that you can test
    - Don't write large chunks of code all at once
- Separation of concerns
    - Encapsulate one chunk of functionality in its own function
        - This abstracts away all the nitty gritty, giving the user (the other programmers) an interface
        - User only needs to know how to use the function, not how it works (like a remote control)
    - Keep things compartmentalised
    - One chunk of functionality should do only its job and not have to know about or do anything else

### Describe how to read errors

- In general, look at the line number specified and any variables mentioned
- Look above the line number mentioned too for syntax errors

### Using the Javascript Debugger in Node

A debugger allows you to stop execution of your program to examine variables at any point using the `debugger` keyword

```javascript
const a = 2 + 2;
debugger
console.log(a);
```

- You can execute in node with `node debug test.js`
    - Type `c` to continue to next debugger statement
    - Type `quit` to quit
    - Type `repl` to examine variables


### Using the Javascript Debugger in the Browser

1. Right click on page and choose Inspect
1. Click on sources (you may need to refresh the page to have files show up)
1. Click the blue play button to continue to next debugger statement
1. Use the console to examine variables (or you can hover over their names in the source code)

![browser debugger](https://i.imgur.com/C0F2tTB.png)

### Coerce data types

#### Equality

Don't use `==`.  Use `===`

When doing this, sometimes you'll need to change a variables datatype

```javascript
const a = '1'

if(a === 1){ //will be false
    console.log('should not execute');
}

if(parseInt(a) === 1){
    console.log('parse int works');
}
```

In general, you can convert between data types like so:

- `parseInt()` tries to convert a value to an integer
- `parseFloat()` tries to convert a value to a float
- `.toString()` can be appended to pretty much whatever to turn it into a string
- `isNaN()` will tell you if you have a value that is NaN (e.g. 0/0 and other weird math)

#### Combining values

When using `+`, always make sure you know what your data types are

```javascript
const a = "1";
typeof a;
```

- Weird things happen when you accidentally combine values together that are not the same data type
- Always convert values to the correct data type and then combine.  Don't leave it up to javascript to guess what you want

```javascript
console.log(5 + '5'); //'55'
console.log(5 + parseInt('5')); //10
```
