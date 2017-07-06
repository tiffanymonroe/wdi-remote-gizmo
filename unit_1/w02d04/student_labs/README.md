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

## Use the instruments object to print the following.
1.  `"telecastor"`
2.  `"santa cruz"`
3.  `"washburn"`
4.  `"weber"`

```
const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}
```

1.  Using the instruments object loop through all
the electric guitars and print them to the console.

2.  Add a property to the instruments object, that includes
a list of your favourite singers.


### Using crazy object print the following

1.  `"omg my mouth is burning"`
2.  `"Pretty pretty prettayyyyy good"`
3.  `"Swearing at Larry and Jeff"`
4.  `"Chicken Teriyaki Boyyyyyy"`
5.  `"The object the contains the name funkhauser"`

```
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
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
        return ()=>{
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

Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string

```
const shirtColor = {
  color: ["red", 'blue, 'green', 'white', 'pink'],
}
```
Expected Output:  ```"red, green, white, pink"```


Follow the following steps:
   1.  Create a function called `wordReverse` that reverses a string.
   2.  Create a function called `toUpperCase` that capitalizes every letter in a string.
   3.  Write a function, called `repMaster`, that accepts two arguments, input and a function. Input should be able to be used with the function.  The function used as an argument must return a string.  `repMaster` should take the result of the string, passed as an argument to the argument function, and return this result with `' proves that I am the rep MASTER!'` concatenated to it.  

   Expected Output:  

   ```javascript
      repMaster("Never give your heart to a blockhead", wordReverse) # =>
      "blockhead a to heart your give never proves that I am the rep MASTER!"
      repMaster("I finished this practice", toUpperCase);
      "I FINISHED THIS PRACTICE proves that I am the rep MASTER!"
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

## Hungry for More?

Read the [Tips and Tricks Notes](../instructor_notes/TIPS.md) and ask the instructors any questions that come to mind
