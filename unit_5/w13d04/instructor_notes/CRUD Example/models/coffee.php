<?php
Class Coffee {
    public $drink;
    static public function create($drink, $guest){
        //connect just once, not for every create/find
        //put these in a properties file that gets ignored from git
        $servername = 'localhost';
        $username = 'root';
        $password = 'root';
        $dbname = 'phpexample';
        
        $mysql_connection = new mysqli($servername, $username, $password, $dbname);
        
        if($mysql_connection->connect_error){
            die('Connection Failed: ' . $mysql_connection->connect_error);
        } else {
            $sql = "INSERT INTO coffee (drink, guest) VALUES ('".$drink."','".$guest."');";
            $mysql_connection->query($sql);
        }
        $mysql_connection->close();
    }
    
    static public function find(){
         //connect just once, not for every create/find
        $servername = 'localhost';
        $username = 'root';
        $password = 'root';
        $dbname = 'phpexample';
        
        $mysql_connection = new mysqli($servername, $username, $password, $dbname);
        
        if($mysql_connection->connect_error){
            $mysql_connection->close();
            die('Connection Failed: ' . $mysql_connection->connect_error);
        } else {
            $sql = "SELECT * FROM coffee;";
            $results = $mysql_connection->query($sql);
            return $results;
        }
    }
}
