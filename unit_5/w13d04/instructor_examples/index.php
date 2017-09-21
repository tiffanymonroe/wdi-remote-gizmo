<?php
// this is a comment
/*
this is
a multi
line comment
*/

// $my_first_var = 2;
// $my_first_var = 3;
//
// echo $my_first_var;

// $x = "my string";
// var_dump($x);
// $x = 5985;
// var_dump($x);
// $x = 10.654;
// var_dump($x);
// $x = true;
// var_dump($x);
// $x = array("volvo", "BMW", "toyota");
// var_dump($x);
// $x = null;
// var_dump($x);

// $first_part = "first part";
// $second_part = "second part";
// $concatenation = $first_part . " " . $second_part;
// $concatenation .= ". Appended value";
// echo $concatenation;

// echo 1+1;
// echo 2-1;
// echo 3*2;
// echo 12/ 3;
// echo 5 % 2;
// echo 2 ** 3;

// $x = 1;
// $x++;
// $x--;
//
// $x += 2;
// $x -= 5;
// $x *= 5;
// $x /= 5;
//
// echo $x;

// $x = 44;
// if ($x < 10){
//     echo 'less than 10';
// } else if ($x > 10) {
//     echo "greater";
// } else {
//     echo "equals";
// }
// $x = 4;
// $b = 6;
?>

<?php if($x < 5 && $b == 6): ?>
    <b>oh hai</b>
<?php endif; ?>

<?php

// $cars = array("Volvo", "BMW", "Toyota");
// $cars[4] = 'asdf';
// $cars[] = 'added to end';
// // var_dump($cars);
// echo "I like " . $cars[0] . ", " . $cars[4];
// echo count($cars);
// print_r($cars);


// $ages = array("Peter" => 35, "Ben" => 37, "Sally" => 43);
// $ages["Bob"] = 105;
// echo "Bob is " . $ages["Bob"] . " years old.";

// $x = 1;
// while($x <= 5){
//     echo "The number is: $x <br/>";
//     $x++;
// }
?>

<!--<ul>

    <?php
    $x = 1;
    while($x <= 5):
    ?>
        <li>The number is: <?= $x ?></li>

    <?php
    $x++;
    endwhile;
    ?>

</ul>
-->

<?php
    for($x = 0; $x <= 10; $x++){
        // echo "The number is: $x <br/>";
    }
?>

<!--<ul>
    <?php for($x = 0; $x <= 10; $x++): ?>
        <li>The number is <?=$x; ?></li>
    <?php endfor; ?>
</ul>
-->


<?php
$colors = array('red', 'green', 'blue');
$ages = array("Peter" => 35, "Ben" => 37, "Sally" => 43);
foreach($ages as $key => $value){
        // echo $key . ": $value <br/>";
}
?>

<!-- <ul>
    <?php foreach($colors as $value): ?>
        <li><?=$value;?></li>
    <?php endforeach; ?>
</ul> -->


<?php
$x = 5;
function writeMsg(){
    // echo $x;
}
writeMsg();
?>

<?php
// echo strlen("hello world!");
// echo str_word_count("hello world!");
// echo strrev("hello world!");
// echo strpos("Hello world world!", "world");
// echo strrpos("Hello world world!", "world");
// echo str_replace("world", "Dolly", "Hello world!");
// echo substr("Hello world", 3);
// echo substr("Hello world", 3, 4);
// $the_string = "some sentence goes here";
// $string_array = explode(" ", $the_string);
// print_r($string_array);

// $cars = array("Volvo", "BMW", "Toyota");
// rsort($cars);
// print_r($cars);

// $ages = array("Peter" => 35, "Ben" => 37, "Sally" => 43);
// asort($ages);
// arsort($ages);
// ksort($ages);
// krsort($ages);
// print_r($ages);

// class Car {
//     public $wheels = 4;
// }
//
// $my_car = new Car();
//
// print_r($my_car);
// $my_car->wheels = 3;
// print_r($my_car);
// echo $my_car->wheels;

// class Car {
//     public $wheels;
//     public function __construct($num_wheels){
//         $this->wheels = $num_wheels;
//     }
// }
//
// $my_car = new Car(5);
//
// print_r($my_car);
// $my_car->wheels = 3;
// print_r($my_car);
// echo $my_car->wheels;

// class Car {
//     protected $wheels;
//
//     public function getWheels(){
//         return $this->wheels;
//     }
//
//     public function __construct($num_wheels){
//         $this->wheels = $num_wheels;
//     }
// }
//
// $my_car = new Car(5);
//
// print_r($my_car);
// echo $my_car->getWheels();

class Car {
    protected $wheels;
    private $engine_on = false;

    public function getWheels(){
        return $this->wheels;
    }

    public function __construct($num_wheels){
        $this->wheels = $num_wheels;
    }

    public function start(){
        $this->engine_on = true;
    }
}

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
// print_r(CarFactory::$cars);

// class Humvee extends Car {
//     protected $armour = 10;
//     public function takeDamage($damage){
//         $this->armour -= $damage;
//     }
//     public function loseWheel(){
//         $this->wheels--;
//     }
//
//     public function start(){
//         parent::start();
//         echo "Welcome to the juingle!!!";
//     }
// }
//
// $my_humvee = new Humvee(6);
// print_r($my_humvee);
// $my_humvee->loseWheel();
// print_r($my_humvee);
// $my_humvee->takeDamage(6);
// print_r($my_humvee);
// $my_humvee->start();
// print_r($my_humvee);

// $my_car = new Car(4);
// print_r($my_car);
// $my_car->start();
// print_r($my_car);
?>
