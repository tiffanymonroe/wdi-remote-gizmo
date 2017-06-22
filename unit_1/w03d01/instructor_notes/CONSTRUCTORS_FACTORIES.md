# JavaScript - Constructor Functions, and Factories

## Lesson Objectives

1. Explain why we need constructor functions
1. Create a constructor function to define the blueprint for creating objects
1. Add public properties and methods to a constructor function and methods using this
1. Add private properties and methods to a constructor function using regular variables
1. Pass parameters into constructor function to make objects customisable
1. Create static properties for a Class
1. Make a class inherit attributes from a "parent class"
1. Create a factory

## Explain why we need constructor functions

Sometimes we need to repetitively create new objects with the same attributes.  Imagine we wanted to create multiple people.  All people have the same basic attributes, so it would be great if we could create a blueprint for our person creation process.

## Create a constructor function to define the blueprint for creating objects

We use normal functions to create a `class` or constructor function.  Think of this as our blueprint for creating people.  When saving the constructor function to a variable, it's custom to capitalise the first letter of the variable, so we know it's a `class` (constructor function).  This follows customs in other programming languages.

```javascript
var Person = function(){

};
```

Now we can "instantiate" or create new objects using this constructor function.  We do this by adding the `new` keyword before calling the constructor function.

```javascript
var me = new Person();
var bob = new Person();
console.log(me);
console.log(bob);
console.log(typeof(me));
console.log(typeof(bob));
```

## Add public properties and methods to a constructor function and methods using this

Right now, our object is blank, though.  Let's add some properties to it.  We do this by using the `this` keyword inside the constructor function.

```javascript
var Person = function(){
	this.name = 'Matt';
};
var me = new Person();
console.log(me);
```

We can set values like normal now

```javascript
me.name = "Matthew";
console.log(me);
```

We can define methods:

```javascript
var Person = function(){
	this.name = 'Matt';
	this.sayHello = function(){
		console.log(this.name);
	}
};
var me = new Person();
me.sayHello();
```

## Add private properties and methods to a constructor function using regular variables

Sometimes you don't want aspects of an object to be editable from outside the class definition (constructor function).  You can hide these using normal variables.

```javascript
var Person = function(){
	var name = 'Matt';
	this.sayHello = function(){
		console.log(name);
	}
};
var me = new Person();
me.sayHello();
```

## Pass parameters into constructor function to make objects customisable

The beauty of constructor functions is that you can pass parameters into them, just like normal functions.  You can use these parameters to customise each object that you create.

```javascript
var Person = function(initialName){
	var name = initialName;
	this.sayHello = function(){
		console.log(name);
	}
};
var me = new Person('Matt');
var bob = new Person('Bob');
me.sayHello();
bob.sayHello();
```

## Create static properties for a Class

Functions are objects too!  Just look at the autocomplete options when you type

```javascript
var myFunction = function(){

}
myFunction.
```

So we can add properties and methods to a constructor function as well (these are called `static` properties).  These are generally reserved for attributes of the class, not of the objects that are being created.

```javascript
var Person = function(initialName){
	var name = initialName;
	this.sayHello = function(){
		console.log(name);
	}
};
Person.eyeColors = ['blue', 'green', 'brown']; //attributes of a class, but not an individual person

var me = new Person('Matt');
me.eyes = Person.eyeColors[0]; //this way we know we're setting the eye color to an appropriate color
```

## Make a class inherit attributes from a "parent class"

Sometimes we want to have a "parent" class that will have some basic attributes that will be inherited by "child" classes.

```javascript
var Person = function(initialName){
	var name = initialName;
	this.sayHello = function(){
		console.log(name);
	}
};

var SuperHero = function(initialName, power){
	Person.call(this, initialName);
	this.activatePower = function(){
		console.log("I'm using my ability to " + power + " to save world!");
	}
};


var superman = new SuperHero("Superman", "fly");
superman.sayHello(); //sayHello is inherited from Person class
superman.activatePower();
```

You could have the SuperHero override the parent class's sayHello function:

```javascript
var SuperHero = function(initialName, power){
	Person.call(this, initialName);
	this.sayHello = function(){
		console.log('Up and Atom!');
	}
	this.activatePower = function(){
		console.log("I'm using my ability to " + power + " to save world!");
	}
};
```

## Create a factory

- Sometimes we need to have a factory object that will generate other objects
- The purpose of the factory is so it can control the creation process in some way
- This is usually a single object that exists throughout the program that performs a set of functions
	- also called a singleton

```javascript
var Car = function(serialNumber){
	this.serialNumber = serialNumber;
	this.drive = function(){
		console.log('Vroom');
	}
}
var factory = {
	cars: [],
	generateCar: function(){
		var newCar = new Car(this.cars.length);
		this.cars.push(newCar);
		return newCar;
	},
	findCar: function(index){
		return this.cars[index];
	}
}

factory.generateCar();
factory.generateCar();
console.log(factory);
console.log(factory.findCar(1));
```

You could also have a factory which is an instantiation of a class

```javascript
var Car = function(maker, serialNumber){
	this.maker = maker
	this.serialNumber = serialNumber;
	this.drive = function(){
		console.log('Vroom');
	}
}
var Factory = function(company){
	this.cars = [];
	this.generateCar = function(){
		var newCar = new Car(company, this.cars.length);
		this.cars.push(newCar);
		return newCar;
	};
	this.findCar = function(index){
		return this.cars[index];
	};
}
var toyota = new Factory("Toyota");
var bmw = new Factory("BMW");
toyota.generateCar();
bmw.generateCar();
```
