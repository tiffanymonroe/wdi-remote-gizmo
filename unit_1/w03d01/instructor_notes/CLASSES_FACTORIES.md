# JavaScript - Classes and Factories

## Lesson Objectives

1. Explain why we need classes
1. Create a class to define the blueprint for creating objects
1. Add methods to a class
1. Set properties on an instance of a class
1. Make an instance of each class customizable
1. Create methods to alter the properties of an instance
1. Make a class inherit attributes from a "parent class"
1. Create static properties for a class
1. Create a factory

## Explain why we need classes

Sometimes we need to repetitively create new objects with the same attributes.  Imagine we wanted to create multiple people.  All people have the same basic attributes, so it would be great if we could create a blueprint for our person creation process.

## Create a class to define the blueprint for creating objects

When creating a class, it's custom to capitalize the first letter of the variable, so we know it's a `class`.  This follows customs in other programming languages.

```javascript
class Person {

};
```

Now we can "instantiate" or create new objects using this class.  We do this by adding the `new` keyword before calling the class name like a function.

```javascript
const me = new Person();
const bob = new Person();
console.log(me);
console.log(bob);
console.log(typeof(me));
console.log(typeof(bob));
```

## Add methods to a class

Right now, our object doesn't do anything.  Let's have it do some stuff;

```javascript
class Person {
	greet(){
		console.log('hi!');
	}
};
const me = new Person();
me.greet();
```

These methods can of course take parameters:

```javascript
class Person {
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
};
const me = new Person();
me.greet('bob');
```

If we have multiple methods, don't put commas between them:

```javascript
class Person {
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
	jump(){
		console.log('weeee!');
	}
};
const me = new Person();
me.greet('bob');
me.jump();
```

## Set properties on an instance of a class

If we log the instances of our class, we'll see they don't have any properties:

```javascript
class Person {
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
	jump(){
		console.log('weeee!');
	}
};
const me = new Person();
console.log(me);
```

Let's add some properties with a constructor function.  This is a function that gets called once, each time an object is created:

```javascript
class Person {
	constructor(){
		this.legs = 2;
		this.arms = 2;
		this.eyes = 'blue';
		this.hair = 'blonde';
	}
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
	jump(){
		console.log('weeee!');
	}
};
const me = new Person();
console.log(me);
```

## Make an instance of each class customizable

Of course, our constructor function can take params which we can use to alter the properties of the object instantiated.  This allows us to customize each instance:

```javascript
class Person {
	constructor(name, age, eyes, hair){
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.age = age;
		this.eyes = eyes;
		this.hair = hair;
	}
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
	jump(){
		console.log('weeee!');
	}
};
const me = new Person('Matt', 36, 'blue', 'blonde');
console.log(me);
```

## Create methods to alter the properties of an instance

We can of course, alter the properties of an instance, after it is created:

```javascript
me.hair = 'red';
console.log(me);
```

But it's a nice practice to define a method that will alter that:

```javascript
class Person {
	constructor(name, age, eyes, hair){
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.age = age;
		this.eyes = eyes;
		this.hair = hair;
	}
	setHair(hairColor){
		this.hair = hairColor;
	}
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
	jump(){
		console.log('weeee!');
	}
};
const me = new Person('Matt', 36, 'blue', 'blonde');
console.log(me);
me.setHair('red');
console.log(me);
```

- This way, everything is done with methods
- Other developers can quickly scan the class definition to determine what you'd like them to be able to do with the class

## Make a class inherit attributes from a "parent class"

Sometimes we want to have a "parent" class that will have some basic attributes that will be inherited by "child" classes.

```javascript
class Person {
	constructor(name, age, eyes, hair){
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.age = age;
		this.eyes = eyes;
		this.hair = hair;
	}
	setHair(hairColor){
		this.hair = hairColor;
	}
	greet(otherPerson){
		console.log('hi ' + otherPerson + '!');
	}
	jump(){
		console.log('weeee!');
	}
};

class SuperHero extends Person {

};
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(superman);
```

We can now add additional functionality:

```javascript
class SuperHero extends Person {
	fly(){
		console.log('Up up and away!');
	}
};
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
superman.fly();
```

And we can override previous functionality:

```javascript
class SuperHero extends Person {
	fly(){
		console.log('Up up and away!');
	}
	greet(otherPerson){
		console.log('Greetings ' + otherPerson);
	}
};
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
superman.greet('Bob');
```

We can even reference the parent class' method and extend its original functionality:

```javascript
class SuperHero extends Person {
	fly(){
		console.log('Up up and away!');
	}
	greet(otherPerson){
		console.log('Greetings ' + otherPerson);
	}
	jump(){
		super.jump();
		this.fly();
	}
};
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
superman.jump();
```

This is most useful on the constructor:

```javascript
class SuperHero extends Person {
	constructor(name, age, eyes, hair){
		super(name, age, eyes, hair);
		this.superPowers = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability']
	}
	fly(){
		console.log('Up up and away!');
	}
	greet(otherPerson){
		console.log('Greetings ' + otherPerson);
	}
	jump(){
		super.jump();
		this.fly();
	}
};
const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(superman);
```

## Create static properties for a class

Sometimes you want to define properties that pertain to the class as a whole, not the instance.  This allows us to limit, somewhat, what the user of class can do.

```javascript
class Person {
	static eyeColors(){
		return ['blue', 'green', 'brown']
	}
	//rest of class definition here...
}
//more code...
const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');
```

## Create a factory

- Sometimes we need to have a factory object that will generate other objects
- The purpose of the factory is so it can control the creation process in some way
- This is usually a single object that exists throughout the program that performs a set of functions
	- also called a singleton

```javascript
class Car {
	constructor(serialNumber){
		this.serialNumber = serialNumber;
	}
	drive(){
		console.log('Vroom');
	}
}
const factory = {
	cars: [],
	generateCar(){
		const newCar = new Car(this.cars.length);
		this.cars.push(newCar);
		return newCar;
	},
	findCar(index){
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
class Car {
	constructor(maker, serialNumber){
		this.maker = maker
		this.serialNumber = serialNumber;
	}
	drive(){
		console.log('Vroom');
	}
}
class Factory {
	constructor(company){
		this.company = company;
		this.cars = [];
	}
	generateCar(){
		const newCar = new Car(this.company, this.cars.length);
		this.cars.push(newCar);
		return newCar;
	}
	findCar(index){
		return this.cars[index];
	}
}
const toyota = new Factory("Toyota");
const bmw = new Factory("BMW");
toyota.generateCar();
bmw.generateCar();
console.log(bmw.findCar(0));
console.log(toyota.findCar(0));
```
