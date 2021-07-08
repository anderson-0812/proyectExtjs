<?php

$data = json_decode(file_get_contents('php://input'));

if (!$mysqli = getConectionDb()) {
    echo "{success: false, message: '$errorConexion'}";
} else {
    $sql_update = "INSERT INTO clases (nombre_clase, materia, id_usuario) VALUES ('$data->nombreClase', '$data->materia', '$data->idUsuario')";
        
     //echo $data->nombreClase;
    //echo $sql_update;
    $result = $mysqli->query($sql_update);
     $mysqli->close();
    
 }


function getConectionDb() {
    /* DATOS DE MI SERVIDOR */
    $db_name = "bd_ejercicio";
    $db_host = "localhost";
    $db_user = "root";
    $db_password = "";
    @$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
    return ($mysqli->connect_errno) ? false : $mysqli;
}


