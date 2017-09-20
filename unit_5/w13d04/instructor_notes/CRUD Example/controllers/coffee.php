<?php
require('../models/coffee.php');

Class CoffeeController {

    public function indexPage(){
        $drinks = Coffee::find();
        require('../views/coffee/index.php');
    }

    public function newPage(){
        require('../views/coffee/new.php');
    }

    public function createAction(){
        Coffee::create($_POST['drink'], $_POST['guest']);
        header('Location: ./');
    }
}

$new_coffee_controller = new CoffeeController();
if($_GET['action']=='index'){
    $new_coffee_controller->indexPage();
} else if($_GET['action']=='new'){
    $new_coffee_controller->newPage();
} else if($_GET['action']=='create'){
    $new_coffee_controller->createAction();
}
