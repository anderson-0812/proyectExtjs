<?php

$data = json_decode(file_get_contents('php://input'));

if (!$mysqli = getConectionDb()) {
    echo "{success: false, message: '$errorConexion'}";
} else {
    $sql_update = "INSERT INTO usuario (name, phone, email) VALUES ('$data->name', '$data->phone', '$data->email')";

     //echo $data->name;
    //echo $sql_update;
    $result = $mysqli->query($sql_update);
     $mysqli->close();

 }


 function getConectionDb() {
    /* DATOS DE MI SERVIDOR */
    $db_name = "bd_ejercicio";
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_password = "1234";
    $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name,3306);
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    // echo $mysqli;
    return ($mysqli->connect_errno) ? false : $mysqli;
}
