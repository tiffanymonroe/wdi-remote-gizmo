<?php
  // $my_first_var; //declare
  // $my_first_var = 2; // assignment
  // $my_second_var = 3; // declare & assign
  //
  // echo $my_first_var;

// Data Types

  // $x = "my string";
  // var_dump($x);
  //
  // $x = 5985;
  // var_dump($x);
  //
  // $x = 10.365;
  // var_dump($x);
  //
  // $x = true;
  // var_dump($x);
  //
  // $cars = array("Volvo","BMW","Toyota");
  // var_dump($x);
  //
  // $x = null;
  // var_dump($x);

// // String Operators

  // $first_part = "first part";
  // $second_part = "second part";
  // $concatenation = $first_part . " " . $second_part;
  // $concatenation .= ". Append value"; //append strings
  // echo $concatenation;

// // Arithmetic Operators

//   echo 1 + 1;
//   echo 2 - 1;
//   echo 3 * 2;
//   echo 12 / 3;
//   echo 5 % 2;
//   echo 2 ** 3; //exponents
//
// // Increment/Decrement Operators
//
//   $x++; //increment by 1
//   $x--; //increment by 1;
//   $x += 2;
//   $x -= 5;
//   $x *= 5;
//   $x /= 5;
//
//   echo $x;


// // Conditionals

  // $x = 5;
  // if ($x < 10){
  //   echo 'less than 10';
  // } else if ($x > 10){
  //   echo 'greater';
  // } else {
  //   echo 'equals';
  // }

  // $x = 7;
  // $b = 6;

/*
?>

  <?php  if($x < 5 && $b == 6): ?>
    <b>oh hai</b>
  <?php endif; ?>



  <?php

  // $cars = array("Volvo", "BMW", "Toyota");
  // $cars[4] = 'asdf';
  // $cars[] = 'added to end';
  //
  // var_dump($cars);
  //
  // echo "I like " . $cars[0] . ", " . $cars[4];
  // echo count($cars);
  // print_r($cars)
/*
  $x = 1;
  while($x <= 5):
  ?>

  <li>The number is: <?= $x ?></li>


  <?php
    $x++;
    endwhile;
   ?>


<?php
  for($x = 0; $x <= 10; $x++){
    echo "The number is: $x <br/>";
}
 ?>

<ul>
<?php for ($x = 0; $x < 10; $x++): ?>
  <li>The number is <?=$x; ?></li>
<?php endfor; ?>
</ul>




<?php

$colors = array('red', 'green', 'blue');
foreach ($colors as $key => $value) {
  echo $key . ": $value <br/>";
}
 ?>

<ul>
  <?php foreach ($colors as $key => $value): ?>
    <li><?=$value;?></li>
  <?php endforeach; ?>
</ul>


// brain stopped at Functions

/*
?>



<?php
$x = 5;

function writeMsg(){
  echo $x;
}

writeMsg();

 ?>

  <?php

echo strlen("hello world!");
echo str_word_count("hello world!");
echo strrev("hello world!");
echo strpos("hello world world!", "world");
echo strrpos("hello world world!", "world");
echo str_replace("world", "Dolly", "Hello world!");
echo substr("hello world", 3);
echo substr("hello world", 3, 4);
$the_string = "Some stentence goes here.";
$string_array = explode(" ", $the_string);
print_r($string_array);
 ?>

  <?php

$ages = array("Peter" => 35, "Ben" => 37, "Sally" => 43);
// asort($ages);
// arsort($ages);
// ksort($ages);
krsort($ages);
print_r($ages);

 ?>

*/


// class Car {
// 	protected $wheels; //accessible by child class, not outside class, though
// 	private $engine_on = false; //unaccessible by child class
// 	public function __construct($num_wheels){ // runs at beginning of object creation
// 		$this->wheels = $num_wheels;
// 	}
// 	public function getWheels(){
// 		return $this->wheels;
// 	}
// 	public function start(){
// 		$this->engine_on = true;
// 	}
// }

// class Humvee extends Car {
//   protected $armour = 10;
//
//   public function takeDamage($damage){
//     $this->armour -= $damage;
//
//
//   public function loseWheel(){
//     $this->wheels--;
//   }
//
//   public function start(){
//     $this->engine_on = true;
//   }
//
// }

class CarFactory {
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

$my_motorcycle = CarFactory::create(2);
$my_car = CarFactory::create(4);
print_r(CarFactory::find(1));

// class Humvee extends Car {
// 	protected $armour = 10;
// 	public function takeDamage($damage){
// 		$this->armour -= $damage;
// 	}
// 	public function loseWheel(){
// 		$this->wheels--; //can access parent $wheels member
// 	}
// 	//can extend parent's start function
// 	public function start(){
// 		parent::start(); //run parent's start function
// 		//parent::$engine_on = false; //errors out: cannot access private member of parent
// 		echo "WELCOME TO THE JUNGLE...";//then do something else
// 	}
// }
//
//
// $my_humvee = new Humvee(6);
// print_r($my_humvee);
// $my_humvee->loseWheel();
// print_r($my_humvee);
// $my_humvee->takeDamage(6);
// print_r($my_humvee);
// $my_humvee->start();
// print_r($my_humvee);

 ?>
