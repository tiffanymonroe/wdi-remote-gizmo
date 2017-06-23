# Labs

## Morning Lab

Given, the following object, log the third element from the array

```javascript
const fun = {
    asdf: ["afd", "matt", 'sweet']
}
```

Given, the following object, log the elbow property

```javascript
const body = {
    arm: {
        elbow: 'pointy'
    }
};
```

Given, the following object, call the jump method

```javascript
const person = {
    jump(){
        console.log('fly!');
    }
};
```

Create a data structure such that the following code logs the value "blue"

```javascript
console.log(myList[0].eyeColor);
```

Create a data structure such that the following code logs the value "buy supplies"

```javascript
console.log(myArrays[2][4]);
```

Call the function in the given code:

```javascript
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];
```

Loops over the following array, and print its values:

```javascript
const refrigerator = {
    fruits: ['apple', 'pear', banana]
}
```

Use two loops to loop over each array in the given "container" array

```javascript
const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];
```

Create a data structure such that the following logs `4`

```javascript
console.log(createCar().tires);
```

Create a data structure such that the following logs `pears`

```javascript
console.log(generateShoppingList()[3]);
```

Create a data structure such that the following logs `20lbs`

```javascript
console.log(createRobot().stats.weight);
```

Call the drive method

```javascript
const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}
```

Create a data structure such that the following executes without errors:

```javascript
createFunction()();
```

Log the message attribute

```javascript
const account = {
    tweet(){
        return {
            message: "fun"
        }
    }
}
```

Log the second element in the array

```javascript
const me = {
    foo(){
        return {
            array: [2.5, 7, true]
        }
    }
}
```

Create a data structure such that the following code logs "boat":

```javascript
console.log(baz.foo().matt.travel);
```

Create a data structure such that the following code executes without error:

```javascript
factory.createCar().startEngine();
```

Run the inner function:

```javascript
const matt = {
    blink(){
        return foo(){
            console.log('hi')
        }
    }
}
```

Access the `foo` property:

```javascript
const asdfasdf = [
    true,
    false,
    ()=>{
        return {
            foo: 'some value'
        }
    },
    'apple'
];
```

Create a data structure such that the following code logs "dog"

```javascript
console.log(matt[1]().someArray[0]);
```

Create a data structure such that the following code logs "blue"

```javascript
console.log(foods[1]().anObject.color);
```

Call the funStuff() method:

```javascript
const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff(){
                console.log('yaaassss');
            }
        }
    }
];
```

Call the most inner function:

```javascript
const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];
```

## Afternoon Lab

Log the following function:

```javascript
const foo = ()=>{
    console.log('I have been invoked!');
}
```

Call `foo`, passing in a function:

```javascript
const foo = (param)=>{
    console.log(param);
}
```

See if you can guess what this will log:

```javascript
const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');
```

See if you can guess what this will log:

```javascript
const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');
```

Call the `someMethod` function, passing in `myFunc`.  It should log `About to invoke the callback` and then `I have been called!`

```javascript
const foo = {
    someMethod(callback){
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}
```

Alter the following code so that `myFunc` properly logs the `height` property of `foo`

```javascript
const foo = {
    height:5,
    someMethod(callback){
        callback();
    }
}

const myFunc = (param)=>{
    console.log(param);
}
```

Follow the following steps:

    1. Create a function that takes a parameter and logs it
    1. Create a second function that logs 'hi'
    1. Invoke the first function, passing in the second function as a parameter
    1. You should see a function reference being logged
    1. Alter the first function so that it invokes its parameter
    1. If you did these steps correctly, you should get a log of 'hi'

Fix the last line of this snippet so it logs `this method was called`:

```javascript
const bar = {
    someMethod(param){
        param();
    }
}

const foo = {
    someMethod(){
        console.log('this method was called');
    }
}

bar.someMethod; //fix this line
```
