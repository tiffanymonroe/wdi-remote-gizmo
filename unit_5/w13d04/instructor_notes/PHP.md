# PHP

## Setup

1. Download [MAMP] (https://www.mamp.info/en/downloads/)
1. Double click .pkg file and follow prompts
1. Double click /Applications/MAMP/MAMP
1. Point MAMP to working directory
	- Click on Preferences
	- Click on Web Server
	- Click the folder icon next to "Document Root" and find a suitable directory to work out of
	- Click OK
1. Go to <http://localhost:8888/>
1. Error logs are in /Applications/MAMP/logs/
	- `tail -f php_error.log`
1. MAMP stands for Mac, Apache, MySQL, PHP
	- this describes the tech stack
		- Mac
			- Your OS
		- Apache
			- A pre-build web server that serves static files
			- Is extendable with various modules that allows it to do many things easily
		- MySQL
			- Your Database
		- PHP
			- A module for Apache that allows it to server dynamic data

## Basics

### Tags

Because this is all run on top of Apache, the initial assumption is that we're serving static HTML files
- We need `<?php ?>` tags to show that we're writing PHP
- Think of this as if Apache/PHP is server.js and we're just writing EJS

Instead of `<%= %>` you have `<?= ?>` or `<?php echo ?>`

Instead of `<% %>` you have `<?php ?>`

### Comments

```php
// single line comment
```
```php
/*
multi
line
comment
*/
```

### Declaring/Assigning variables

Use a $ before a variable name to tell php it is a variable.  Assignment is standard.

```php
<?php
	$my_first_var; //declare
	$my_first_var = 2; //assignment
	$my_second_var = 3; //declare and assign
?>
```

### Data Types

```php
<?php
$x = "my string";
var_dump($x);
?>
```
```php
<?php
$x = 5985;
var_dump($x);
?>
```
```php
<?php
$x = 10.365;
var_dump($x);
?>
```
```php
<?php
$x = true;
var_dump($x);
?>
```
```php
<?php
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
?>
```
```php
<?php
$x = null;
var_dump($x);
?>
```

### String Operators

Use a `.` or `.=` to combine strings.

```php
<?php
	$first_part = "first part";
	$second_part = "second part";
	$concatenation = $first_part . " " . $second_part; //combine strings
	$concatenation .= ".  Appended value"; //append strings
	echo $concatenation;
?>
```

### Arithmetic Operators

```php
<?php
	1 + 1; //2
	2 - 1; //1
	3 * 2; //6
	12 / 3; //4
	5 % 2; //1 modulus
	2 ** 3 //8 exponents
?>
```

### Increment/Decrement Operators

```php
<?php
	$x++; //increment by 1;
	$x--; //decrement by 1;
?>
```

### Assignment Operators

```php
<?php
	$my_var = 1;
	$my_var += 1; //$my_var = $my_var + 1;
	$my_var -= 1; //$my_var = $my_var - 1;
	$my_var *= 2; //$my_var = $my_var * 2;
	$my_var /= 2; //$my_var = $my_var / 2;
?>
```

## Conditionals

### Formats

Format 1:

```php
<?php
	if(condition){
	}
	elseif(condition2){
	}
	else{
	}
?>
```

Format 2:

```php
<?php if(condition): ?>
	condition1
<?php elseif(condition2): ?>
	condition2
<?php else: ?>
	else
<?php endif; ?>
```

### Comparison Operators

```php
<?php
	$x == $y; //equal
	$x === $y; //identical
	$x != $y; //not equal
	$x !== $y; //not identical
?>
```

Arithmetic:

```php
<?php
	$x < $y; //less than
	$x > $y; //greater than
	$x <= $y; //less than or equal to
	$x >= $y; //greater than or equal to
?>
```

### Logical Operators

```php
<?php
	true && false //AND operator
	true || false //OR operator
?>
```

## Arrays

### Indexed Arrays

Standard array functionality

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
$cars[4] = 'asdf'; //can be in indexes that don't yet exist
$cars[] = "added to end"; //pushes onto array
echo "I like " . $cars[0] . ", " . $cars[4] . " and " . $cars[5] . ".";
echo count($cars); //prints length of array
print_r($cars); //prints contents of array in nicer format than var_dump
?>
```

### Associative Arrays (hashes)

These are very similar to Ruby hashes

```php
<?php
	$age = array("Peter" => 35, "Ben" => 37, "Joe" => "43"); //declare
	$age["Bob"] = 105; //add at a new position
	echo "Bob is " . $age['Bob'] . " years old.";
?>
```

## Loops

### While

```php
<?php
$x = 1;

while($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
}
?>
```
```php
<?php $x = 1;?>
<?php while($x <= 5): ?>
	<li><?= $x ?></li>
	<?php $x++ ?>
<?php endwhile; ?>
```

### For

```php
<?php
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
}
?>
```
```php
<?php for ($x = 0; $x <= 10; $x++): ?>
    <li>The number is: <?= $x ?></li>
<?php endfor; ?>
```

### Foreach

```php
<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $key => $value) {
    echo $key . ": $value <br>";
}
?>
```
```php
<?php $colors = array("red", "green", "blue", "yellow"); ?>
<?php foreach ($colors as $key => $value): ?>
	<?= $key ?>: <?=$value?> <br>
<?php endforeach ?>
```

This works for associative arrays:

```php
<?php
$ages = array("Peter" => 35, "Ben" => 37, "Joe" => "43");

foreach ($ages as $key => $value) {
    echo $key . ": $value <br>";
}
?>
```
```php
<?php $ages = array("Peter" => 35, "Ben" => 37, "Joe" => "43"); ?>
<?php foreach ($ages as $key => $value): ?>
	<?= $key ?>: <?=$value?> <br>
<?php endforeach ?>
```

## Functions

```php
<?php
function writeMsg() {
    echo "Hello world!";
}

writeMsg(); // call the function
?>
```

## Convenience Methods

### Strings

Count a string's length

```php
<?php
echo strlen("Hello world!"); // outputs 12
?>
```

Count number of words in a string

```php
<?php
echo str_word_count("Hello world!"); // outputs 2
?>
```

Reverse a string

```php
<?php
echo strrev("Hello world!"); // outputs !dlrow olleH
?>
```

Find a sub string in a string

```php
<?php
echo strpos("Hello world world!", "world"); // outputs 6
//search from the right
echo strrpos("Hello world world!", "world"); // outputs 12
?>
```

Replace text within a string

```php
<?php
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>
```

Get a substring based on character index

```php
<?php
//second param is index (0 based, like an array)
echo substr("Hello world", 3); // outputs 'lo world'
//third param is length of string
echo substr("Hello world", 3, 4); // outputs 'lo w'
?>
```

Turn a string into an array based on some delimeter

```php
<?php
    $the_string = "Some sentence goes here";
    $string_array = explode(" ", $the_string);
    var_dump($string_array);
?>
```

### Sorting Arrays

Various functions for sorting arrays.  Can be done arithmetically or alphabetically, depending on content

- sort() - sort arrays in ascending order
- rsort() - sort arrays in descending order
- asort() - sort associative arrays in ascending order, according to the value
- ksort() - sort associative arrays in ascending order, according to the key
- arsort() - sort associative arrays in descending order, according to the value
- krsort() - sort associative arrays in descending order, according to the key

These functions affect the actual array they are called on.

```php
$cars = array("Volvo", "BMW", "Toyota");
sort($cars);
print_r($cars); //BMW, Toyota, Volvo
```

## Classes and Objects

### Public Members

```php
<?php
class Car {
	public $wheels = 4; // public var can be accessed outside class definition
}

$my_car = new Car();

print_r($my_car);
$my_car->wheels = 3;
print_r($my_car);
?>
```

### Constructors

```php
<?php
class Car {
	public $wheels;
	public function __construct($num_wheels){ // runs at beginning of object creation
		$this->wheels = $num_wheels;
	}
}
$my_car = new Car(4);
?>
```

### Protected Members

```php
<?php
class Car {
	protected $wheels; // cannot be accessed outside class definition
	//must define getters...
	public function getWheels(){
		return $this->wheels;
	}
	public function __construct($num_wheels){ // runs at beginning of object creation
		$this->wheels = $num_wheels;
	}
}

$my_car = new Car(4);
echo $my_car->getWheels();
echo $my_car->wheels; //error: cannot access protected property
?>
```

### Statics

```php
<?php
class Car {
	protected $wheels; // cannot be accessed outside class definition
	//must define getters...
	public function getWheels(){
		return $this->wheels;
	}
	public function __construct($num_wheels){ // runs at beginning of object creation
		$this->wheels = $num_wheels;
	}
}
class CarFactory{
	static protected $cars = array();
	static public function create($num_wheels){
		$new_car = new Car($num_wheels);
		self::$cars[] = $new_car;
		return $new_car;
	}
	static public function find($index){
		return self::$cars[$index];
	}
}
$my_car = CarFactory::create(2);
$my_car2 = CarFactory::create(4);
print_r($my_car);
print_r(CarFactory::find(1));
print_r(CarFactory::$cars); //errors out: protected
?>
```

### Inheritance

```php
<?php
class Car {
	protected $wheels; //accessible by child class, not outside class, though
	private $engine_on = false; //unaccessible by child class
	public function __construct($num_wheels){ // runs at beginning of object creation
		$this->wheels = $num_wheels;
	}
	public function getWheels(){
		return $this->wheels;
	}
	public function start(){
		$this->engine_on = true;
	}
}

class Humvee extends Car {
	protected $armour = 10;
	public function takeDamage($damage){
		$this->armour -= $damage;
	}
	public function loseWheel(){
		$this->wheels--; //can access parent $wheels member
	}
	//can extend parent's start function
	public function start(){
		parent::start(); //run parent's start function
		//parent::$engine_on = false; //errors out: cannot access private member of parent
		echo "WELCOME TO THE JUNGLE...";//then do something else
	}
}

$my_humvee = new Humvee(6);
print_r($my_humvee);
$my_humvee->loseWheel();
print_r($my_humvee);
$my_humvee->takeDamage(6);
print_r($my_humvee);
$my_humvee->start();
print_r($my_humvee);
?>
```
